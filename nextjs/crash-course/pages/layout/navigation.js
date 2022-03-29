import { Menu, Popover, Transition } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
import { Fragment, Component } from "react";
import {
	BellIcon,
	LightBulbIcon,
	DocumentReportIcon,
	HomeIcon,
	MenuIcon,
	TrendingUpIcon,
	XIcon,
} from "@heroicons/react/outline";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}
const resources = [
	{
		name: "About",
		description: "Get to know more about us",
		href: "/about",
		icon: DocumentReportIcon,
	},
	{
		name: "Resources",
		description: "Get to know more about HVAC systems and costs",
		href: "/resources",
		icon: LightBulbIcon,
	},
];
const navigation = [
	{ name: "Feed", href: "#", icon: HomeIcon, current: true },
	{ name: "Trending", href: "#", icon: TrendingUpIcon, current: false },
];
const Logo = "/images/logo/thick_logo_name2.png";

function Navigation() {
	return (
		<Popover className="relative bg-white">
			{({ open }) => (
				<>
					<div className="flex shadow-md justify-between items-center px-4 py-4 sm:px-6 md:justify-start md:space-x-10">
						<div>
							<Link href="/" className="flex">
								<img
									className="h-8 w-auto sm:h-10 cursor-pointer"
									src={Logo}
									alt=""
								/>
							</Link>
						</div>
						<div className="-mr-2 -my-2 md:hidden">
							<Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
								<span className="sr-only">Open menu</span>
								<MenuIcon className="h-6 w-6" aria-hidden="true" />
							</Popover.Button>
						</div>
						<div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
							<Popover.Group as="nav" className="flex space-x-10">
								<Popover className="relative">
									{({ open }) => (
										<>
											<Transition
												show={open}
												as={Fragment}
												enter="transition ease-out duration-200"
												enterFrom="opacity-0 translate-y-1"
												enterTo="opacity-100 translate-y-0"
												leave="transition ease-in duration-150"
												leaveFrom="opacity-100 translate-y-0"
												leaveTo="opacity-0 translate-y-1"
											>
												<Popover.Panel
													static
													className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0"
												>
													<div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
														<div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
															{resources.map((item) => (
																<>
																	<Link key={item.name} href={item.href}>
																		<a className="-m-3 p-3 block rounded-md hover:bg-gray-50">
																			{item.name}
																		</a>
																	</Link>
																	<Link
																		key={item.name}
																		href={item.href}
																		className="-m-3 p-3 block rounded-md hover:bg-gray-50"
																	>
																		<p className="text-base font-medium text-gray-900">
																			{item.name}
																		</p>
																		{/*<p className="mt-1 text-sm text-gray-500">*/}
																		{/*    {item.description}*/}
																		{/*</p>*/}
																	</Link>
																</>
															))}
														</div>
													</div>
												</Popover.Panel>
											</Transition>
										</>
									)}
								</Popover>

								<Link href="/about">
									<a className=" inline-flex items-center justify-center text-base font-medium text-gray-500 hover:text-gray-900">
										About
									</a>
								</Link>
								<Link href="/resources">
									<a className=" inline-flex items-center justify-center text-base font-medium text-gray-500 hover:text-gray-900">
										Resources
									</a>
								</Link>
							</Popover.Group>
							<div className="flex items-center md:ml-12">
								{/*<Link*/}
								{/*	href="/signup"*/}
								{/*	className="text-base font-medium text-gray-500 hover:text-gray-900 ml-4 mr-4"*/}
								{/*>*/}
								{/*	Sign Up*/}
								{/*</Link>*/}
								<Link
									href="/contractorsignup"
									// className="ml-8 inline-flex items-center text-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
								>
									<a className="ml-8 inline-flex items-center text-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700">
										Join as a Contractor
									</a>
								</Link>

								<Link
									href="/login"
									// className="text-base font-medium text-gray-500 hover:text-gray-900 ml-4 mr-4"
								>
									<a className="text-base font-medium text-gray-500 hover:text-gray-900 ml-8 mr-8">
										Sign In
									</a>
								</Link>
							</div>
						</div>
					</div>

					<Transition
						show={open}
						as={Fragment}
						enter="duration-200 ease-out"
						enterFrom="opacity-0 scale-95"
						enterTo="opacity-100 scale-100"
						leave="duration-100 ease-in"
						leaveFrom="opacity-100 scale-100"
						leaveTo="opacity-0 scale-95"
					>
						<Popover.Panel
							style={{ "z-index": "9999" }}
							focus
							static
							className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
						>
							<div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
								<div className="pt-5 pb-6 px-5">
									<div className="flex items-center justify-between">
										<div>
											<img className="h-8 w-auto" src={Logo} alt="Workflow" />
										</div>
										<div className="-mr-2">
											<Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
												<span className="sr-only">Close menu</span>
												<XIcon className="h-6 w-6" aria-hidden="true" />
											</Popover.Button>
										</div>
									</div>
									<div className="mt-6">
										<nav className="grid gap-6">
											{resources.map((item) => (
												<>
													<Link key={item.name} href={item.href}>
														<a className="justify-center">
															<div className="flex-shrink-0 inline-flex items-center justify-center h-10 w-10 rounded-md bg-blue-500 text-white">
																{
																	<item.icon
																		className="h-6 w-6"
																		aria-hidden="true"
																	/>
																}
															</div>
															<div className="ml-4 inline text-base font-medium text-gray-900">
																{item.name}
															</div>
														</a>
													</Link>
												</>
											))}
										</nav>
									</div>
								</div>
								<div className="py-6 px-5">
									<div className="mt-6">
										<Link href="/contractorsignup">
											<a className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700">
												Join as a Contractor
											</a>
										</Link>
										<p className="mt-6 text-center text-base font-medium text-gray-500">
											Existing contractor?{" "}
											<span className="text-blue-600 hover:text-blue-500">
												<Link href="/login">
													<a>Sign in</a>
												</Link>
											</span>
										</p>
									</div>
								</div>
							</div>
						</Popover.Panel>
					</Transition>
				</>
			)}
		</Popover>
	);
}

export default Navigation;
