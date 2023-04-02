import { useFormik } from "formik"
import TrxnProps from "../interfaces/TrxnProps";

interface AddTrxnProps {
    onSubmit: Function;
}

const AddTrxn = (props: AddTrxnProps) => {
    const formik = useFormik({
        initialValues: {
            trxnName: "",
            trxnAmt: 0,
            trxnCategory: ""
        },
        onSubmit: values => {
            props.onSubmit(values);
        }
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                    Trxn. Name
                </label>
                <input 
                    type="text"
                    id="trxnName" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    value={formik.values.trxnName}
                    onChange={formik.handleChange}
                />
            </div>
            <div className="mb-6">
                <label htmlFor="trxnAmt" className="block mb-2 text-sm font-medium text-gray-900">
                    Trxn. Amount
                </label>
                <input 
                    type="number" 
                    id="trxnAmt" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    value={formik.values.trxnAmt}
                    onChange={formik.handleChange}
                />
            </div>            
            <label htmlFor="trxnCategory" className="block mb-2 text-sm font-medium text-gray-900">
                Select the trxn. category
            </label>
            <select 
                id="trxnCategory" 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={formik.values.trxnCategory}
                onChange={formik.handleChange}
            >
                <option value="">Select a category</option>
                <option value="Food">Food</option>
                <option value="Shopping">Shopping</option>
                <option value="Bills">Bills</option>
                <option value="Leisure">Leisure</option>
                <option value="Travel">Travel</option>
            </select>


            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
    )
}

export default AddTrxn