import Navigation from "./layout/navigation";
import Image from "next/image";
import Footer from "./layout/footer";
import {useContext, useState} from "react";
import AuthContext from "@/context/AuthContext";
import {CheckIcon} from "@heroicons/react/outline";
import { Switch } from '@headlessui/react';
import {Router, useRouter} from 'next/router';



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Contractorsignup() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [company_name, setCompanyName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");
    const [phone, setPhone] = useState("");
    const [mobile, setMobile] = useState("");
    const [employees_number, setEmployee] = useState(0);
    const [founded, setFounded] = useState(1900);
    const [doEmergency, setDoEmergency] = useState(false);
    const router = useRouter();



    const {register, error} = useContext(AuthContext)
    const switchEmergency = () => {
        let temp = !doEmergency;
        setDoEmergency(temp);
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        await register({company_name, email, password, password2, address, city, state, zip, phone, mobile, employees_number, founded, doEmergency})
        await router.push("/login");
    }



    return (
        <div className="mt-8 mb-10 sm:mt-0">
            <div className="md:grid md:grid-cols-4 md:gap-10">
                <div
                    className="text-center sm:text-left md:col-span-1"
                    style={{ margin: "40px auto" }}
                >
                    <div className="px-4 mb-3">
                        <h2 className="text-base font-semibold text-blue-500 tracking-wide uppercase">
                            Contractor Signup
                        </h2>
                    </div>
                    <div className="px-4 mb-1">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">
                            *45-Day Free Trial
                        </h3>
                    </div>
                    <div className="px-4">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">
                                <span className="text-4xl font-extrabold text-gray-900">
                                    $29
								</span>
                            <span className="text-sm text-gray-900 align-top">.99</span>{" "}
                            <span className="text-base font-medium text-gray-500">
                                    /month
								</span>
                        </h3>
                    </div>
                    <div className="pt-3 px-20 sm:px-6">
                        <ul className="sm:space-y-4">
                            <li className="flex space-x-3">
                                <CheckIcon
                                    className="flex-shrink-0 h-5 w-5 text-green-500"
                                    aria-hidden="true"
                                />
                                <span className="text-sm text-gray-500">No Lead Fees</span>
                            </li>
                            <li className="flex space-x-3">
                                <CheckIcon
                                    className="flex-shrink-0 h-5 w-5 text-green-500"
                                    aria-hidden="true"
                                />
                                <span className="text-sm text-gray-500">
                                        No Commission Fees
									</span>
                            </li>
                            <li className="flex space-x-3">
                                <CheckIcon
                                    className="flex-shrink-0 h-5 w-5 text-green-500"
                                    aria-hidden="true"
                                />
                                <span className="text-sm text-gray-500">
                                        No Referral Fees
									</span>
                            </li>
                            <li className="flex space-x-3">
                                <CheckIcon
                                    className="flex-shrink-0 h-5 w-5 text-green-500"
                                    aria-hidden="true"
                                />
                                <span className="text-sm text-gray-500">
                                        Cancel at Any Time
									</span>
                            </li>
                            <li className="flex space-x-3">
                                    <span className="text-xs text-gray-500">
                                        *No payment until free trial ends
									</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="md:col-span-2">
                    <form action="#" method="POST">
                        <div className="md: mt-10 shadow overflow-hidden sm:rounded-md">
                            <div className="px-4 sm:py-5 bg-white sm:p-6">
                                <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-6">
                                        <label
                                            htmlFor="company_name"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Company Name
                                        </label>
                                        <input
                                            type="text"
                                            name="company_name"
                                            id="first-company_name"
                                            onChange={e => setCompanyName(e.target.value)}
                                            autoComplete="company_name"
                                            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        />
                                    </div>
                                    <div className="col-span-3">
                                        <label
                                            htmlFor="phone"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Phone
                                        </label>
                                        <input
                                            type="text"
                                            name="phone"
                                            id="phone"
                                            autoComplete="phone"
                                            onChange={e => setPhone(e.target.value)}
                                            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        />
                                        {/*{*/}
                                        {/*    !this.state.phoneValidation ?*/}
                                        {/*        <p style={{ fontSize: 12, color: "red" }}>Phone number is invalid</p>*/}
                                        {/*        : ""*/}
                                        {/*}*/}
                                    </div>
                                    <div className="col-span-3">
                                        <label
                                            htmlFor="postal-code"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Mobile
                                        </label>
                                        <input
                                            type="text"
                                            name="mobile"
                                            id="mobile"
                                            onChange={e => setMobile(e.target.value)}
                                            autoComplete="phone"
                                            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        />
                                        {/*{*/}
                                        {/*    !this.state.mobileValidation ?*/}
                                        {/*        <p style={{ fontSize: 12, color: "red" }}>Phone number is invalid</p>*/}
                                        {/*        : ""*/}
                                        {/*}*/}
                                    </div>
                                    <div className="col-span-6">
                                        <label
                                            htmlFor="email-address"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Email address
                                        </label>
                                        <input
                                            type="text"
                                            name="email-address"
                                            id="email-address"
                                            autoComplete="email"
                                            onChange={e => setEmail(e.target.value)}
                                            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        />
                                        {/*{*/}
                                        {/*    !this.state.emailValidation ?*/}
                                        {/*        <p style={{ fontSize: 12, color: "red" }}>Please enter a valid*/}
                                        {/*            email</p>*/}
                                        {/*        : ""*/}
                                        {/*}*/}
                                    </div>
                                    <div className="col-span-6">
                                        <label
                                            htmlFor="password"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Password*
                                        </label>
                                        <input
                                            type="password"
                                            name="password"
                                            id="password"
                                            autoComplete="password"
                                            onChange={e => setPassword(e.target.value)}
                                            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        />
                                        <p style={{ fontSize: '12px' }}>
                                            - Length from 8 to 16 characters <br />
                                            - Have at least one capital letter <br />
                                            - Have at least one symbol <br />
                                            - Have at least one number <br />
                                            - Don't include your company name <br />
                                        </p>
                                        {/*{*/}
                                        {/*    !this.state.passwordValidation ?*/}
                                        {/*        <p style={{ fontSize: 12, color: "red" }}>Your password is weak</p>*/}
                                        {/*        : ""*/}
                                        {/*}*/}
                                    </div>
                                    <div className="col-span-6">
                                        <label
                                            htmlFor="password2"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Confirm Password*
                                        </label>
                                        <input
                                            type="password"
                                            name="password2"
                                            id="password2"
                                            autoComplete="password"
                                            onChange={e => setPassword2(e.target.value)}
                                            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        />
                                        {/*{*/}
                                        {/*    !this.state.confirmPasswordValidation ?*/}
                                        {/*        <p style={{ fontSize: 12, color: "red" }}>Your passwords don't*/}
                                        {/*            match!</p>*/}
                                        {/*        : ""*/}
                                        {/*}*/}
                                    </div>

                                    <div className="col-span-6">
                                        <label
                                            htmlFor="street-address"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Address
                                        </label>
                                        <input
                                            type="text"
                                            name="street-address"
                                            id="street-address"
                                            onChange={e => setAddress(e.target.value)}
                                            autoComplete="street-address"
                                            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        />
                                    </div>


                                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                        <label
                                            htmlFor="city"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            City
                                        </label>
                                        <input
                                            type="text"
                                            name="city"
                                            id="city"
                                            onChange={e => setCity(e.target.value)}
                                            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label
                                            htmlFor="state"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            State / Province
                                        </label>
                                        <input
                                            type="text"
                                            name="state"
                                            id="state"
                                            onChange={e => setState(e.target.value)}
                                            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label
                                            htmlFor="postal-code"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            ZIP / Postal
                                        </label>
                                        <input
                                            type="text"
                                            name="postal-code"
                                            onChange={e => setZip(e.target.value)}
                                            id="postal-code"
                                            autoComplete="postal-code"
                                            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        />
                                    </div>

                                    <div className="col-span-3">
                                        <label
                                            htmlFor="founded"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            What year was your company established?
                                        </label>
                                        <input
                                            type="number"
                                            name="founded"
                                            id="founded"
                                            onChange={e => setFounded(parseInt(e.target.value))}
                                            autoComplete="founded"
                                            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        />
                                        {/*{*/}
                                        {/*    !this.state.foundedValidation ?*/}
                                        {/*        <p style={{ fontSize: 12, color: "red" }}>The year is invalid</p>*/}
                                        {/*        : ""*/}
                                        {/*}*/}
                                    </div>

                                    <div className="col-span-3">
                                        <label
                                            htmlFor="employees_number"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            How many employees does your company have?
                                        </label>
                                        <input
                                            type="number"
                                            name="employees_number"
                                            id="employees_number"
                                            onChange={e => setEmployee(parseInt(e.target.value))}
                                            autoComplete="employees_number"
                                            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        />
                                        {/*{*/}
                                        {/*    !this.state.numEmployeeValidation ?*/}
                                        {/*        <p style={{ fontSize: 12, color: "red" }}>There is not enough*/}
                                        {/*            employee</p>*/}
                                        {/*        : ""*/}
                                        {/*}*/}
                                    </div>

                                    <div className="col-span-3 text-sm font-medium text-gray-700">
                                        <label>Does your company accept emergency requests?</label>
                                        <br />
                                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", width: "150px" }}>
                                            <p>No</p>
                                            <Switch
                                                checked={doEmergency}
                                                onChange={switchEmergency}
                                                className={classNames(
                                                    doEmergency ? 'bg-blue-600' : 'bg-gray-200',
                                                    'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                                                )}
                                            >
                                                <span className="sr-only">Use setting</span>
                                                <span
                                                    className={classNames(
                                                        doEmergency ? 'translate-x-5' : 'translate-x-0',
                                                        'pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                                                    )}
                                                >
                                                        <span
                                                            className={classNames(
                                                                doEmergency ? 'opacity-0 ease-out duration-100' : 'opacity-100 ease-in duration-200',
                                                                'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity'
                                                            )}
                                                            aria-hidden="true"
                                                        >
                                                            <svg className="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 12 12">
                                                                <path
                                                                    d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
                                                                    stroke="currentColor"
                                                                    strokeWidth={2}
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                />
                                                            </svg>
                                                        </span>
                                                        <span
                                                            className={classNames(
                                                                doEmergency ? 'opacity-100 ease-in duration-200' : 'opacity-0 ease-out duration-100',
                                                                'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity'
                                                            )}
                                                            aria-hidden="true"
                                                        >
                                                            <svg className="h-3 w-3 text-blue-600" fill="currentColor" viewBox="0 0 12 12">
                                                                <path
                                                                    d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
                                                            </svg>
                                                        </span>
                                                    </span>
                                            </Switch>
                                            <p>Yes</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                <button
                                    type="submit"
                                    onClick={handleSubmit}
                                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
