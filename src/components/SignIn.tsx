import { useFormik } from "formik"
import * as Yup from "yup"

import { UserContext, UserContextType } from "../context/UserContext";
import { useContext } from "react";

import { app } from "../firebase"
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

interface SignInProps {
    onClose: Function;
    changeMode: Function;
}

const SignInSchema = Yup.object().shape({
    email: Yup.string()
      .email("Enter a valid email")
      .required("Required"),
    password: Yup.string()
      .min(6, "Must contain at least 6 characters")
      .required("Required"),
    name: Yup.string()
      .min(3, "Too short")
      .max(20, "Too long")
});

const SignIn = (props: SignInProps) => {
    const { setUser } = useContext(UserContext) as UserContextType

    const auth = getAuth(app);
        
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            name: ""
        },
        onSubmit: (values) => {
            const { email, password, name } = values
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential: any) => {
                    const { uid } = userCredential.user
                    updateProfile(userCredential.user, {
                        displayName: name
                    }).then(() => {
                        setUser({ ...values, uid })
                    })
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorMessage)
                });
            props.onClose()
        },
        validationSchema: SignInSchema
    })
    
    return (
        <form onClick={(e) => e.stopPropagation()} className="relative bg-white rounded-md w-3/4 lg:w-1/2 p-4" onSubmit={formik.handleSubmit}>
            <h2 className="text-2xl mb-6 border-b pb-2">Sign In</h2>
            <div className="mb-3">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">
                    Name
                </label>
                <input
                    type="text"
                    onBlur={formik.handleBlur}
                    id="name"
                    placeholder="Your name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                />
                { formik.touched.name && formik.errors.name ? <div className="text-rose-500 text-sm mt-1">{formik.errors.name}</div> : null }
            </div>

            <div className="mb-3">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    onBlur={formik.handleBlur}
                    placeholder="johndoe@fintrack.com"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                />
                { formik.touched.email && formik.errors.email ? <div className="text-rose-500 text-sm mt-1">{formik.errors.email}</div> : null }
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                    Password
                </label>
                <input
                    type="password"
                    onBlur={formik.handleBlur}
                    id="password"
                    placeholder="Must have at least 6 characters"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                />
                { formik.touched.password && formik.errors.password ? <div className="text-rose-500 text-sm mt-1">{formik.errors.password}</div> : null }
            </div>

            <button
                type="submit"
                className="text-white mt-2 bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
                Submit
            </button>

            <button 
                type="button" 
                className="my-2 hover:text-blue-500 block text-sm"
                onClick={() => props.changeMode()}
            >
                An existing user? Login instead!
            </button>
        </form>
    )
}

export default SignIn