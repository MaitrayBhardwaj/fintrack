import { useFormik } from "formik"
import * as Yup from 'yup'

interface AddTrxnProps {
    onSubmit: Function;
    onClose: Function;
}

const AddTrxnSchema = Yup.object().shape({
    trxnName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    trxnAmt: Yup.number()
      .min(1, "You can't add zero or negative money")
      .max(1000000, "That's a lot of money")
      .required('Required'),
    trxnCategory: Yup.string()
      .oneOf(['Food', 'Shopping', 'Bills', 'Leisure', 'Travel'], 'Invalid Category')
      .required('Required'),
    trxnType: Yup.string()
      .oneOf(['Income', 'Expense'], 'Invalid Type')
      .required('Required')
});

const AddTrxn = (props: AddTrxnProps) => {
    const formik = useFormik({
        initialValues: {
            trxnName: "",
            trxnAmt: 0,
            trxnCategory: "",
            trxnType: ""
        },
        onSubmit: (values, { resetForm }) => {
            props.onSubmit(values);
            resetForm();
        },
        validationSchema: AddTrxnSchema
    })

    return (
        <div
            onClick={() => props.onClose()} 
            className="absolute bg-gray-900/90 w-full h-full flex items-center justify-center"
        >
            <form onClick={(e) => e.stopPropagation()} className="relative bg-white rounded-md w-1/2 p-4" onSubmit={formik.handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                        Trxn. Name
                    </label>
                    <input
                        type="text"
                        id="trxnName"
                        onBlur={formik.handleBlur}
                        placeholder="Enter the trxn. name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        value={formik.values.trxnName}
                        onChange={formik.handleChange}
                    />
                    { formik.touched.trxnName && formik.errors.trxnName ? <div className="text-rose-500 text-sm mt-1">{formik.errors.trxnName}</div> : null }
                </div>
                <div className="mb-3">
                    <label htmlFor="trxnAmt" className="block mb-2 text-sm font-medium text-gray-900">
                        Trxn. Amount
                    </label>
                    <input
                        type="number"
                        onBlur={formik.handleBlur}
                        id="trxnAmt"
                        min={1}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        value={formik.values.trxnAmt}
                        onChange={formik.handleChange}
                    />
                    { formik.touched.trxnAmt && formik.errors.trxnAmt ? <div className="text-rose-500 text-sm mt-1">{formik.errors.trxnAmt}</div> : null }
                </div>
                <div className="mb-3">
                    <label htmlFor="trxnCategory" className="block mb-2 text-sm font-medium text-gray-900">
                        Select the trxn. category
                    </label>
                    <select
                        id="trxnCategory"
                        className="bg-gray-50 mb-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        value={formik.values.trxnCategory}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        >
                        <option value="">Select a category</option>
                        <option value="Food">Food</option>
                        <option value="Shopping">Shopping</option>
                        <option value="Bills">Bills</option>
                        <option value="Leisure">Leisure</option>
                        <option value="Travel">Travel</option>
                    </select>
                    { formik.touched.trxnCategory && formik.errors.trxnCategory ? <div className="text-rose-500 text-sm mt-1">{formik.errors.trxnCategory}</div> : null }
                </div>

                <div className="mb-3">
                    <label htmlFor="trxnType" className="block mb-2 text-sm font-medium text-gray-900">
                        Select the trxn. type
                    </label>
                    <select
                        id="trxnType"
                        className="bg-gray-50 mb-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        onBlur={formik.handleBlur}
                        value={formik.values.trxnType}
                        onChange={formik.handleChange}
                    >
                        <option value="">Select a category</option>
                        <option value="Expense">Expense</option>
                        <option value="Income">Income</option>
                    </select>
                    { formik.touched.trxnType && formik.errors.trxnType ? <div className="text-rose-500 text-sm mt-1">{formik.errors.trxnType}</div> : null }
                </div>

                <button
                    type="submit"
                    className="text-white mt-2 bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default AddTrxn