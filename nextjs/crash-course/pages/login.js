import Link from "next/link";
import {useContext, useEffect, useState} from 'react';
import AuthContext from "@/context/AuthContext";
import  {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {Router, useRouter} from 'next/router';

export default function Login() {
    const [isLogin, setIsLogin] = useState(true);

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const {login, error} = useContext(AuthContext)
    const Router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email);
        console.log(password);
        const user = {
            email,
            password
        }
        // login(user)
        try {
            const res = await fetch('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user),
            })
            if (res.status === 200) {
                await Router.push('/')
            } else {
                throw new Error(await res.text())
            }
        } catch (error) {
            console.error('An unexpected error happened occurred:', error)
            setErrorMsg(error.message)
        }

    }

    useEffect(() => error && toast.error(error))

    function switchAuthModeHandler() {
        setIsLogin((prevState) => !prevState);
    }

    // const signIn = (user) => {
    //     fetch(`${process.env.REACT_APP_API_URL}/auth/contractorlogin`, {
    //         method: "POST",
    //         headers: {
    //             Accept: "application/json",
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(user)
    //     })
    //         .then(response => {
    //             return response.json();
    //         })
    //         .then(response => {
    //             if (response['token']) {
    //                 localStorage.setItem('jwtToken', JSON.stringify(response['token']));
    //                 localStorage.setItem('contractorId', response['contractorId']);
    //             } else {
    //                 this.setState({ error: response })
    //             }
    //             console.log(response);
    //         })
    //         .catch(err => console.log(err))
    // }

    // const clickSubmit = event => {
    //     event.preventDefault();
    //
    //     const { email, password } = this.state;
    //     const user = {
    //         email,
    //         password
    //     }
    //     this.props.loginContractor(user)
    // }

    return (
        <div className="min-h-screen bg-white flex">
            <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                <div className="mx-auto w-full max-w-sm lg:w-96">
                    <div>
                        <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
                    </div>
                    <div className="mt-8">
                        <div className="mt-6">
                            <form action="#" method="POST" className="space-y-6">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Email address
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            required
                                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                            onChange={e => setEmail(e.target.value)}
                                        />
                                    </div>
                                    {/*<p style={{ 'fontSize': '14px', 'color': 'red' }}>{this.state.error['email'] ? this.state.error['email'] : " "}</p>*/}
                                </div>

                                <div className="space-y-1">
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                        Password
                                    </label>

                                    <div className="mt-1">
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            autoComplete="current-password"
                                            required
                                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                            onChange={e => setPassword(e.target.value)}
                                        />
                                    </div>
                                    {/*<p style={{ 'fontSize': '14px', 'color': 'red' }}>{this.state.error['password'] ? this.state.error['password'] : " "}</p>*/}
                                </div>

                                <div className="flex items-center justify-between">
                                    {/* <div className="flex items-center">
                                            <input
                                                id="remember-me"
                                                name="remember-me"
                                                type="checkbox"
                                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                            />
                                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                                Remember me
                                            </label>
                                        </div> */}

                                    <div className="text-sm">
                                        <Link href="/contractorsignup" className="font-medium text-blue-600 hover:text-blue-500">
                                            Create an account
                                        </Link>
                                    </div>
                                    <div className="text-sm">
                                        <Link href="/forgot-password" className="font-medium text-blue-600 hover:text-blue-500">
                                            Forgot your password?
                                        </Link>
                                    </div>
                                </div>

                                <div>
                                    <button
                                        onClick={handleSubmit}
                                        type="submit"
                                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                    >
                                        Sign in
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
            <div className="hidden lg:block relative w-0 flex-1">
                <img
                    className="absolute inset-0 h-full w-full object-cover"
                    src="https://images.unsplash.com/photo-1583345237708-add35a664d77?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                    alt="House with solar panels"
                />
            </div>
        </div>
    )
}
