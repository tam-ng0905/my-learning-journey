import { Component, Fragment, useEffect, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import {
    CalendarIcon,
    HomeIcon, CheckIcon,
    InboxIcon, LocationMarkerIcon,
    UserIcon, UsersIcon, ChatIcon, MailIcon

} from '@heroicons/react/solid'
import { Router, NavLink, withRouter } from "react-router-dom";
import { PropTypes } from "prop-types";
import axios from "axios";
import { connect } from "react-redux";
import Route from "react-router-dom/es/Route";
import Link from "react-router-dom/es/Link";

const BASE_URL = process.env.REACT_APP_API_URL;
//TODO: protect the pages only for authenticated users
const navigation = [
    { name: 'Dashboard', href: '/', icon: HomeIcon, current: true },
    // { name: 'Message (coming soon)', href: '#', icon: InboxIcon, current: false },
    { name: 'Profile', href: '#', icon: UserIcon, current: false },
]
const TABS = {
    'Dashboard': 1,
    'Message': 2,
    'Profile': 3
}

class ContractorDashShell extends Component {

    constructor() {
        super();
    };


    state = {
        tabs: TABS['Dashboard'],
        modalOpen: false,
        edit: false,
        contractor: {},
        userInquiriesMap: [],
        id: localStorage.getItem('contractorId'),
        error: null,
        loading: true,
        requests: [],
        users: [],
    };

    componentWillMount() {
        fetch(`${BASE_URL}/api/request/${this.state.id}`)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw response;
            })
            .then(async response => {
                const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

                for (let i of response.results) {
                    this.setState({ requests: [this.state.requests, i] });
                    await delay(5);
                }
                return response;
            })
            .then(res => {
                //Loop to get the data of each user from the request
                for (let i of res.results) {
                    fetch(`${BASE_URL}/api/user/${i.user}`)
                        .then((res) => {
                            if (res.ok) {
                                return res.json();
                            }
                            throw res;
                        })
                        .then(async res => {
                            const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

                            // setCustomers(existingUsers => [...existingUsers, res.user]);
                            this.setState({ users: [...this.state.users, res.user] });
                            this.setState({
                                userInquiriesMap: [...this.state.userInquiriesMap, {
                                    inquiry: i.questions,
                                    user: res.user
                                }]
                            });
                            await delay(5);
                            return res;
                        })
                        .catch((error) => {
                            console.error("Error fetching data: ", error);
                            this.setState({ error: error });
                        })
                }
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
                this.setState({ error: error });
            })
            .finally(() => {
                this.setState({ loading: false });
            });


        fetch(`${BASE_URL}/api/contractor/${this.state.id}`)
            .then((response) => {

                if (response.ok) {
                    return response.json();
                }
                throw response;
            })
            .then(async response => {
                const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
                this.setState({ contractor: response });
                await delay(200);
                return response;
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
                this.setState({ error: error });
            })
            .finally(() => {
                this.setState({ loading: false });
            });
    }

    tabHandler = (name) => {
        if (name === 'Dashboard') {
            this.setState({ tabs: TABS['Dashboard'] })
        }
            // } else if(name === 'Message (coming soon)'){
            //     setTabs(2)
        // }
        else if (name === 'Profile') {
            this.setState({ tabs: TABS['Profile'] })
        }
    }

    modal = () => {
        this.setState({ modalOpen: !this.state.modalOpen });
    }

    updateContractor = (e, attribute) => {
        let tempContractor = this.state.contractor;
        tempContractor.contractor[attribute] = e.target.value;

        this.setState({ contractor: tempContractor });
    }

    editProfile = () => {
        this.setState({ edit: !this.state.edit });
        console.log(this.state.contractor);
        axios.put(`${BASE_URL}/api/contractor/${this.state.contractor.contractor._id}`, this.state.contractor);
    }

    render() {
        const { isAuthenticated } = this.props.auth;
        const authorized = (
            <div className="relative h-screen flex overflow-hidden bg-white-200" style={{ marginBottom: "30px" }}>
                {/* Static sidebar for desktop */}
                <div className="relative md:flex min-h-full md:flex-shrink-0 border-r border-gray-200">
                    <div className="border-t border-gray-200">
                        {/* Sidebar component, swap this element with another sidebar if you like */}
                        <div className="flex flex-grow bg-white overflow-y-auto">
                            <div className="mt-5 flex-grow flex flex-col">
                                <nav className="flex-1 px-2 bg-white space-y-1">
                                    {navigation.map((item) => (
                                        <div>
                                            <div className="md:hidden text-gray-600"><a
                                                key={item.name}
                                                href={item.href}
                                                // className={classNames(
                                                //     item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                                                //     'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                                                // )}
                                                className='group flex items-center px-2 py-2 text-sm font-medium rounded-md hover:bg-gray-200'
                                                onClick={() => this.tabHandler(item.name)}
                                            >
                                                <item.icon
                                                    // className={classNames(
                                                    //     item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                                                    //     'mr-3 flex-shrink-0 h-6 w-6'
                                                    // )}
                                                    className='flex-shrink-0 h-6 w-6'
                                                    aria-hidden="true"
                                                />
                                                {/* {item.name} */}
                                            </a></div>
                                            <div className="hidden md:inline text-gray-600"><a
                                                key={item.name}
                                                href={item.href}
                                                // className={classNames(
                                                //     item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                                                //     'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                                                // )}
                                                className='group flex items-center px-2 py-2 text-sm font-medium rounded-md hover:bg-gray-200'
                                                onClick={() => this.tabHandler(item.name)}
                                            >
                                                <item.icon
                                                    // className={classNames(
                                                    //     item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                                                    //     'mr-3 flex-shrink-0 h-6 w-6'
                                                    // )}
                                                    className='mr-3 flex-shrink-0 h-6 w-6'
                                                    aria-hidden="true"
                                                />
                                                {item.name}
                                            </a></div>
                                        </div>


                                    ))}
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                {this.state.tabs === 1 ?
                    <div style={{ minHeight: "500px", overflowY: "auto" }} className="relative flex-col w-0 flex-1">
                        <main className="flex-1 relative focus:outline-none">
                            <div className="py-6">
                                {/* Page title & actions */}
                                <div
                                    className="space-y-3 border-b border-gray-200 text-gray-600 px-4 py-4 sm:items-center sm:justify-between sm:px-6 lg:px-8">
                                    {/* <h2>Leads</h2> */}
                                    <h1 className="text-2xl">Thank you for being a part of the Tarclone community!</h1>
                                    <p>Yes, we understand this is a very simple dashboard.</p>
                                    <p>New features will continually be added to improve the platform experience.</p>
                                    <p>Our goal is to connect you to homeowners <span className="underline">without charging you an arm and a leg</span>.</p>
                                    <p>A few items to note:</p>
                                    <div className="ml-4">

                                        <ul className="sm:space-y-4">

                                            <li className="flex space-x-3">
                                                <CheckIcon
                                                    className="flex-shrink-0 h-5 w-5 text-green-500"
                                                    aria-hidden="true"
                                                />
                                                <span className="text-sm text-gray-500">Your Free 45-Day Free Trial begins when we launch to the public</span>
                                            </li>
                                            <li className="flex space-x-3">
                                                <CheckIcon
                                                    className="flex-shrink-0 h-5 w-5 text-green-500"
                                                    aria-hidden="true"
                                                />
                                                <span className="text-sm text-gray-500">
                                                    The platform is for Boulder County only
									</span>
                                            </li>
                                            <li className="flex space-x-3">
                                                <CheckIcon
                                                    className="flex-shrink-0 h-5 w-5 text-green-500"
                                                    aria-hidden="true"
                                                />
                                                <span className="text-sm text-gray-500">
                                                    When residents use our platform, only Boulder County HVAC contractors show up
									</span>
                                            </li>
                                            <li className="flex space-x-3">
                                                <CheckIcon
                                                    className="flex-shrink-0 h-5 w-5 text-green-500"
                                                    aria-hidden="true"
                                                />
                                                <span className="text-sm text-gray-500">
                                                    Please go to the Profile Tab on the left to update your info.
									</span>
                                            </li>
                                            <li className="flex space-x-3">
                                                <CheckIcon
                                                    className="flex-shrink-0 h-5 w-5 text-green-500"
                                                    aria-hidden="true"
                                                />
                                                <span className="text-sm text-gray-500">
                                                    We'd love to hear feedback and suggestions - contact us at team@tarclone.com
									</span>
                                            </li>

                                        </ul>
                                    </div>

                                </div>
                                <div className="bg-white shadow sm:rounded-md">
                                    <ul role="list" className="divide-y divide-gray-200">
                                        {this.state.userInquiriesMap.map((request) => (
                                            <NavLink to={'/inquiries/' + request.inquiry}>
                                                <li key={request.id}>
                                                    {/*<a href="#" className="block hover:bg-gray-50">*/}

                                                    <div className="px-4 py-4 sm:px-6 hover:bg-gray-200">
                                                        <div className="flex items-center justify-between">
                                                            <p className="text-sm font-medium text-blue-600 truncate">{request.user.first_name} {request.user.last_name}</p>
                                                            {/*<div className="ml-2 flex-shrink-0 flex">*/}
                                                            {/*    <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-white-800">*/}
                                                            {/*        /!*TODO: think about how to check and make sure the contractors are contacted after the emergency*!/*/}
                                                            {/*        Emergency*/}
                                                            {/*        /!*{inquiryLink + request.inquiry}*!/*/}
                                                            {/*    </p>*/}
                                                            {/*</div>*/}
                                                        </div>
                                                        <div className="mt-2 sm:flex sm:justify-between">
                                                            <div className="sm:flex">
                                                                <p className="flex items-center text-sm text-gray-500">
                                                                    <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                                                                        <CalendarIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                                                                        {/*Closing on <time dateTime={customer.closeDate}>{customer.closeDateFull}</time>*/}
                                                                        {`Connected on ${request.user.created.slice(0, 10)}`}
                                                                    </p>
                                                                </p>
                                                                <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                                                                    <LocationMarkerIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                                                                    {request.user.address}, {request.user.city}, CO {request.user.zip}
                                                                </p>
                                                            </div>
                                                            {/* <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                                                                <ChatIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                                                                <p>
                                                                    Message
                                                                </p>
                                                            </div> */}
                                                        </div>
                                                    </div>
                                                    {/*</a>*/}
                                                </li>
                                            </NavLink>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </main>
                    </div>
                    :
                    <div style={{ minHeight: "500px", overflowY: "auto" }} className="relative flex-col w-0 flex-1">
                        <main className="relative focus:outline-none">
                            <div>
                                <article>
                                    {/* Profile header */}
                                    <div>
                                        <div>
                                            <img className="h-32 w-full object-cover lg:h-48" src="https://images.unsplash.com/photo-1552083375-1447ce886485?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="" />
                                        </div>
                                        <div className="max-w-5xl mx-auto px-4">
                                            <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                                                <div className="flex">
                                                    {/*{!this.state.contractor.contractor.avatar ?*/}
                                                    {/*    "" :*/}
                                                    {/*    <img*/}
                                                    {/*        className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"*/}
                                                    {/*        src={this.state.contractor.contractor.avatar}*/}
                                                    {/*        alt=""*/}
                                                    {/*    />*/}
                                                    {/*}*/}
                                                </div>
                                                <div className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                                                    {/*<div className="sm:hidden 2xl:block mt-6 min-w-0 flex-1">*/}
                                                    {/*    <h1 className="text-2xl font-bold text-gray-900 truncate">{this.state.contractor.contractor.company_name}</h1>*/}
                                                    {/*</div>*/}
                                                    <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">

                                                        {/*TODO: remove for now */}
                                                        {/*<button*/}
                                                        {/*    type="button"*/}
                                                        {/*    onClick={this.modal}*/}
                                                        {/*    className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"*/}
                                                        {/*>*/}
                                                        {/*    <MailIcon className="-ml-1 mr-2 h-5 w-5 text-gray-400" aria-hidden="true" />*/}

                                                        {/*    <span>Add License</span>*/}
                                                        {/*</button>*/}
                                                        <button
                                                            type="button"
                                                            onClick={this.editProfile}
                                                            className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                                                        >
                                                            <UsersIcon className="-ml-1 mr-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                                                            <span>Edit Profile</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*<div className="hidden sm:block 2xl:hidden mt-6 min-w-0 flex-1">*/}
                                            {/*    <h1 className="text-2xl font-bold text-gray-900 truncate">{this.state.contractor.contractor.company_name}</h1>*/}
                                            {/*</div>*/}
                                        </div>
                                    </div>

                                    {/* Tabs */}

                                    {/*Description list*/}
                                    <div className="mt-6 max-w-5xl mx-auto px-4 pb-20 sm:px-6 lg:px-8">
                                        {
                                            !this.state.edit ?
                                                <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                                                    <div key={"phone"} className="sm:col-span-1">
                                                        <dt className="text-sm font-medium text-gray-500">Phone</dt>
                                                        <dd className="mt-1 text-sm text-gray-900">{this.state.contractor.contractor.mobile}</dd>
                                                    </div>

                                                    <div key={"email"} className="sm:col-span-1">
                                                        <dt className="text-sm font-medium text-gray-500">Email</dt>
                                                        <dd className="mt-1 text-sm text-gray-900">{this.state.contractor.contractor.email}</dd>
                                                    </div>

                                                    <div key={"address"} className="sm:col-span-1">
                                                        <dt className="text-sm font-medium text-gray-500">Address</dt>
                                                        <dd className="mt-1 text-sm text-gray-900">{this.state.contractor.contractor.address}</dd>
                                                    </div>
                                                    <div key={"city"} className="sm:col-span-1">
                                                        <dt className="text-sm font-medium text-gray-500">City</dt>
                                                        <dd className="mt-1 text-sm text-gray-900">{this.state.contractor.contractor.city}</dd>
                                                    </div>
                                                    <div key={"employees_number"} className="sm:col-span-1">
                                                        <dt className="text-sm font-medium text-gray-500">Number of Employees</dt>
                                                        <dd className="mt-1 text-sm text-gray-900">{this.state.contractor.contractor.employees_number}</dd>
                                                    </div>
                                                    <div key={"founded"} className="sm:col-span-1">
                                                        <dt className="text-sm font-medium text-gray-500">Founded</dt>
                                                        <dd className="mt-1 text-sm text-gray-900">{this.state.contractor.contractor.founded}</dd>
                                                    </div>

                                                    {/* Add below: we'll want to give options such as -waived when hired and -free service call */}
                                                    {/* <div key={"service_price"} className="sm:col-span-1">
                                                    <dt className="text-sm font-medium text-gray-500">Service Call Price</dt>
                                                    <dd className="mt-1 text-sm text-gray-900">{contractor.contractor.service_price}</dd>
                                                </div> */}
                                                    <div key={"service_call"} className="sm:col-span-1">
                                                        <dt className="text-sm font-medium text-gray-500">How much do you charge for a service call?</dt>
                                                        <dd className="mt-1 text-sm text-gray-900">$ {this.state.contractor.contractor.service_call}</dd>
                                                    </div>
                                                    <div className="sm:col-span-2">
                                                        <dt className="text-sm font-medium text-gray-500">About</dt>
                                                        <dd
                                                            className="mt-1 max-w-prose text-sm text-gray-900 space-y-5"
                                                            dangerouslySetInnerHTML={{ __html: this.state.contractor.contractor.about }}
                                                        />
                                                    </div>
                                                </dl>
                                                :
                                                <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                                                    <div key={"phone"} className="sm:col-span-1">
                                                        <dt className="text-sm font-medium text-gray-500">Phone</dt>
                                                        <input placeholder={this.state.contractor.contractor.mobile} onChange={(e) => this.updateContractor(e, "mobile")} style={{ height: '30px', borderRadius: '5px', paddingLeft: "5px" }} className="mt-1 text-sm text-gray-900 border border-gray-300 shadow-sm"></input>
                                                    </div>

                                                    <div key={"email"} className="sm:col-span-1">
                                                        <dt className="text-sm font-medium text-gray-500">Email</dt>
                                                        <input placeholder={this.state.contractor.contractor.email} onChange={(e) => this.updateContractor(e, "email")} style={{ height: '30px', borderRadius: '5px', paddingLeft: "5px" }} className="mt-1 text-sm text-gray-900 border border-gray-300 shadow-sm"></input>
                                                    </div>

                                                    <div key={"address"} className="sm:col-span-1">
                                                        <dt className="text-sm font-medium text-gray-500">Address</dt>
                                                        <input placeholder={this.state.contractor.contractor.address} onChange={(e) => this.updateContractor(e, "address")} style={{ height: '30px', borderRadius: '5px', paddingLeft: "5px" }} className="mt-1 text-sm text-gray-900 border border-gray-300 shadow-sm"></input>
                                                    </div>
                                                    <div key={"city"} className="sm:col-span-1">
                                                        <dt className="text-sm font-medium text-gray-500">City</dt>
                                                        <input placeholder={this.state.contractor.contractor.city} onChange={(e) => this.updateContractor(e, "city")} style={{ height: '30px', borderRadius: '5px', paddingLeft: "5px" }} className="mt-1 text-sm text-gray-900 border border-gray-300 shadow-sm"></input>
                                                    </div>
                                                    <div key={"employees_number"} className="sm:col-span-1">
                                                        <dt className="text-sm font-medium text-gray-500">Number of Employees</dt>
                                                        <input type="number" placeholder={this.state.contractor.contractor.employees_number} onChange={(e) => this.updateContractor(e, "employees_number")} style={{ height: '30px', borderRadius: '5px', paddingLeft: "5px" }} className="mt-1 text-sm text-gray-900 border border-gray-300 shadow-sm"></input>
                                                    </div>
                                                    <div key={"founded"} className="sm:col-span-1">
                                                        <dt className="text-sm font-medium text-gray-500">Founded</dt>
                                                        <input type="number" placeholder={this.state.contractor.contractor.founded} onChange={(e) => this.updateContractor(e, "founded")} style={{ height: '30px', borderRadius: '5px', paddingLeft: "5px" }} className="mt-1 text-sm text-gray-900 border border-gray-300 shadow-sm"></input>
                                                    </div>
                                                    <div key={"service_call"} className="sm:col-span-1">
                                                        <dt className="text-sm font-medium text-gray-500">How much do you charge for a service call?</dt>
                                                        <span>$</span><input type="number" placeholder={this.state.contractor.contractor.service_call} onChange={(e) => this.updateContractor(e, "service_call")} style={{ height: '30px', borderRadius: '5px', paddingLeft: "5px" }} className="mt-1 text-sm text-gray-900 border border-gray-300 shadow-sm"></input>
                                                    </div>
                                                    <div className="sm:col-span-2">
                                                        <dt className="text-sm font-medium text-gray-500">About</dt>
                                                        <textarea placeholder={this.state.contractor.contractor.about} onChange={(e) => this.updateContractor(e, "about")} className="border border-gray-300" style={{ width: "550px", borderRadius: '5px' }}></textarea>
                                                    </div>
                                                    <button
                                                        type="button"
                                                        onClick={this.editProfile}
                                                        className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-red-200 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                                                    >
                                                        {/*<UsersIcon className="-ml-1 mr-2 h-5 w-5 text-gray-400" aria-hidden="true" />*/}
                                                        <span>Update Profile</span>
                                                    </button>
                                                </dl>
                                        }
                                    </div>
                                </article>
                                <Transition.Root show={this.state.modalOpen} as={Fragment}>
                                    <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={this.modal}>
                                        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                                            <Transition.Child
                                                as={Fragment}
                                                enter="ease-out duration-300"
                                                enterFrom="opacity-0"
                                                enterTo="opacity-100"
                                                leave="ease-in duration-200"
                                                leaveFrom="opacity-100"
                                                leaveTo="opacity-0"
                                            >
                                                <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                                            </Transition.Child>

                                            {/* This element is to trick the browser into centering the modal contents. */}
                                            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                                                &#8203;
          </span>
                                            <Transition.Child
                                                as={Fragment}
                                                enter="ease-out duration-300"
                                                enterFrom="opacity-0 translate-y-4 sm:scale-95"
                                                enterTo="opacity-100 sm:scale-100"
                                                leave="ease-in duration-200"
                                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                            >
                                                <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                                                    <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
                                                        <div className="md:grid md:grid-cols-2 md:gap-6">
                                                            <div className="mt-5 md:mt-0 md:col-span-2">
                                                                <h3>Credentials Details</h3>

                                                                <form action="#" method="POST">
                                                                    <div className="grid grid-cols-6 gap-6">
                                                                        <div className="col-span-6 sm:col-span-3">
                                                                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                                                                License Holder
                                                                            </label>
                                                                            <input
                                                                                type="text"
                                                                                name="full-name"
                                                                                id="full-name"
                                                                                autoComplete="given-name"
                                                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                                            />
                                                                        </div>
                                                                        <div className="col-span-6 sm:col-span-3">
                                                                            {/*TODO: ASK ABOUT THE LICENSE TYPE*/}
                                                                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                                                                License Type
                                                                            </label>
                                                                            <input
                                                                                type="text"
                                                                                name="license-type"
                                                                                id="license-type"
                                                                                autoComplete="license-type"
                                                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                                            />
                                                                        </div>
                                                                        <div className="col-span-6 sm:col-span-3">
                                                                            {/*TODO: ASK ABOUT THE LICENSE TYPE*/}
                                                                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                                                                License Number
                                                                            </label>
                                                                            <input
                                                                                type="text"
                                                                                name="license-number"
                                                                                id="license-number"
                                                                                autoComplete="license-number"
                                                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                                            />
                                                                        </div>
                                                                        <div className="col-span-6 sm:col-span-3">
                                                                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                                                                {/*TODO: Ask about the who gonna verify the license*/}
                                                                                License Verified
                                                                            </label>
                                                                            <input
                                                                                type="text"
                                                                                name="license-type"
                                                                                id="license-type"
                                                                                autoComplete="license-type"
                                                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                                            />
                                                                        </div>

                                                                        <div className="col-span-6 sm:col-span-3">
                                                                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                                                                {/*TODO: Ask about the who gonna verify the license*/}
                                                                                Valid Through:
                                                                            </label>
                                                                            <input
                                                                                type="text"
                                                                                name="license-validation"
                                                                                id="license-validation"
                                                                                autoComplete="license-validation"
                                                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <br />

                                                                    <button
                                                                        type="button"
                                                                        className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-400 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm"
                                                                    >
                                                                        Verify License
                                                                    </button>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Transition.Child>
                                        </div>
                                    </Dialog>
                                </Transition.Root>
                            </div>
                        </main>
                    </div>
                }

            </div>
        );
        const unauthorized = (
            <div className="bg-white">
                <main>
                    {/* Hero section */}
                    <div className="relative">
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
                        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                            <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
                                <div className="absolute inset-0">
                                    <img
                                        className="h-full w-full object-cover"
                                        src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
                                        alt="People working on laptops"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-indigo-700 mix-blend-multiply" />
                                </div>
                                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                                    <h1 className="text-center text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl">
                                        <span className="block text-white">Sorry, you've been logged out or are not authorized to view Dashboard content!</span>
                                        <span className="block text-indigo-200">Please log in or return to home page</span>
                                    </h1>
                                    <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                                        <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-2">
                                            <Link
                                                to="/"
                                                className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8"
                                            >
                                                Home
                                            </Link>
                                        </div>
                                        <br/>
                                        <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                                            <Link
                                                to="/login"
                                                className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8"
                                            >
                                                Sign In
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        );

        return <Route>{isAuthenticated ? authorized : unauthorized}</Route>;
    }
}

ContractorDashShell.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps)(withRouter(ContractorDashShell));
