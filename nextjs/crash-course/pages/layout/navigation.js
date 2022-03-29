import { Menu, Popover, Transition } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
import { Fragment, Component,useContext } from "react";
import {
	BellIcon,
	LightBulbIcon,
	DocumentReportIcon,
	HomeIcon,
	MenuIcon,
	TrendingUpIcon,
	XIcon,
} from "@heroicons/react/outline";
import AuthContext from "@/context/AuthContext";
import logout from "../api/logout";

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
// const userNavigation = [
// 	// { name: "Your Profile", href: "#", onClick: "" },
// 	// { name: "Settings", href: "#", onClick: "" },
// 	{ name: 'Sign out', href: '/', onClick: logout },
// ];

const Logo = "/images/logo/thick_logo_name2.png";

function Navigation() {
	const {user, logout} = useContext(AuthContext);
	const guest = (<Popover className="relative bg-white">
		{({ open }) => (
			<>
				<div className="flex shadow-md justify-between items-center px-4 py-4 sm:px-6 md:justify-start md:space-x-10">
					<div>
						<Link href="/" className="flex">
							<Image
								className="h-8 w-auto sm:h-10 cursor-pointer"
								src={Logo}
								alt=""
								width="110"
								height="60"
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
							<Link href="/resources" className=" inline-flex items-center justify-center text-base font-medium text-gray-500 hover:text-gray-900">
									Resources
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
								className="ml-8 inline-flex items-center text-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
							>
									Join as a Contractor
							</Link>

							<Link
								href="/login"
								className="text-base font-medium text-gray-500 hover:text-gray-900 ml-4 mr-4"
							>
									Sign In
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
										<Image className="h-8 w-auto" src={Logo} alt="Tarclone's logo"  width="110"
											   height="60"/>
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
												<Link key={item.name} href={item.href} className="justify-center">
														{/*<div className="flex-shrink-0 inline-flex items-center justify-center h-10 w-10 rounded-md bg-blue-500 text-white">*/}
														{/*		<item.icon*/}
														{/*			className="h-6 w-6"*/}
														{/*			aria-hidden="true"*/}
														{/*		/>*/}
														{/*</div>*/}
														<div className="ml-4 inline text-base font-medium text-gray-900">
															{item.name}
														</div>
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
	</Popover>)
	const loggedIn = (<div>
		{/* When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars */}
		<Popover
			as="header"
			className={({ open }) =>
				classNames(
					open ? "fixed inset-0 z-40 overflow-y-auto" : "",
					"bg-white shadow-sm lg:static lg:overflow-y-visible"
				)
			}
		>
			{({ open }) => (
				<>
					<div className="max-w-7xl mx-auto px-4 py-2 sm:px-6 lg:px-8">
						<div className="relative flex justify-between xl:grid xl:grid-cols-12 lg:gap-8">
							<div className="flex md:absolute md:left-0 md:inset-y-0 lg:static xl:col-span-2">
								<div className="flex-shrink-0 flex items-center">
									<Link href="/">
										<Image
											className="block h-8 w-auto"
											src={Logo}
											alt="Tarclone Logo"
											width="110"
											height="60"
										/>
									</Link>
								</div>
							</div>
							<div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
								<div className="flex items-center px-6 py-4 md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0">
									{/*<div className="w-full">*/}
									{/*	<label htmlFor="search" className="sr-only">*/}
									{/*		Search*/}
									{/*	</label>*/}
									{/*	<div className="relative">*/}
									{/*		<div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">*/}
									{/*			<SearchIcon*/}
									{/*				className="h-5 w-5 text-gray-400"*/}
									{/*				aria-hidden="true"*/}
									{/*			/>*/}
									{/*		</div>*/}
									{/*		<input*/}
									{/*			id="search"*/}
									{/*			name="search"*/}
									{/*			className="block w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-rose-500 focus:border-rose-500 sm:text-sm"*/}
									{/*			placeholder="Search"*/}
									{/*			type="search"*/}
									{/*		/>*/}
									{/*	</div>*/}
									{/*</div>*/}
								</div>
							</div>
							<div className="flex items-center md:absolute md:right-0 md:inset-y-0 lg:hidden">
								{/* Mobile menu button */}
								<Popover.Button className="-mx-2 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-500">
									<span className="sr-only">Open menu</span>
									{open ? (
										<XIcon className="block h-6 w-6" aria-hidden="true" />
									) : (
										<MenuIcon
											className="block h-6 w-6"
											aria-hidden="true"
										/>
									)}
								</Popover.Button>
							</div>
							<div className="hidden lg:flex lg:items-center lg:justify-end xl:col-span-4">
								{/*<Link*/}
								{/*	href="/"*/}
								{/*	className="ml-5 flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"*/}
								{/*>*/}
								{/*	<span className="sr-only">View notifications</span>*/}
								{/*	<BellIcon className="h-6 w-6" aria-hidden="true" />*/}
								{/*</Link>*/}

								{/* Profile dropdown */}
								<Menu as="div" className="flex-shrink-0 relative ml-5">
									{({ open }) => (
										<>
											<div>
												<Menu.Button className="bg-white rounded-full flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500">
													<span className="sr-only">Open user menu</span>
													<Image
														className="h-8 w-8 rounded-full"
														src={user.avatar}
														alt="Tarclone's user avatar"
														width="40"
														height="40"
													/>
												</Menu.Button>
											</div>
											<Transition
												show={open}
												as={Fragment}
												enter="transition ease-out duration-100"
												enterFrom="transform opacity-0 scale-95"
												enterTo="transform opacity-100 scale-100"
												leave="transition ease-in duration-75"
												leaveFrom="transform opacity-100 scale-100"
												leaveTo="transform opacity-0 scale-95"
											>
												<Menu.Items
													static
													className="origin-top-right absolute z-10 right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 focus:outline-none"
												>
													{/*{userNavigation.map((item) => (*/}
													{/*	<Menu.Item key={item.name}>*/}
													{/*		{({ active }) => (*/}
													{/*			<Link*/}
													{/*				to={item.href}*/}
													{/*				// onClick={this.onLogoutClick.bind(this)}*/}
													{/*				className={classNames(*/}
													{/*					active ? "bg-gray-100" : "",*/}
													{/*					"block py-2 px-4 text-sm text-gray-700"*/}
													{/*				)}*/}
													{/*			>*/}
													{/*				{item.name}*/}
													{/*			</Link>*/}
													{/*		)}*/}
													{/*	</Menu.Item>*/}
													{/*))}*/}
													{/*<Link*/}
													{/*	href="/"*/}
													{/*	onClick={logout}*/}
													{/*	// onClick={this.onLogoutClick.bind(this)}*/}
													{/*	// className={classNames(*/}
													{/*	// 	active ? "bg-gray-100" : "",*/}
													{/*	// 	"block py-2 px-4 text-sm text-gray-700"*/}
													{/*	// )}*/}
													{/*>*/}
													{/*	Log Out*/}
													{/*</Link>*/}
													<div onClick={() => logout}>
														<Link
															href="/"
															className={classNames(
																"block py-2 px-4 text-sm text-gray-700"
															)}
														>
															Log Out
														</Link>
													</div>
												</Menu.Items>
											</Transition>
										</>
									)}
								</Menu>
							</div>
						</div>
					</div>

					<Popover.Panel as="nav" className="lg:hidden" aria-label="Global">
						<div className="max-w-3xl mx-auto px-2 pt-2 pb-3 space-y-1 sm:px-4">
							{/*{navigation.map((item) => (*/}
							{/*	<a*/}
							{/*		key={item.name}*/}
							{/*		href={item.href}*/}
							{/*		aria-current={item.current ? "page" : undefined}*/}
							{/*		className={classNames(*/}
							{/*			item.current*/}
							{/*				? "bg-gray-100 text-gray-900"*/}
							{/*				: "hover:bg-gray-50",*/}
							{/*			"block rounded-md py-2 px-3 text-base font-medium"*/}
							{/*		)}*/}
							{/*	>*/}
							{/*		{item.name}*/}
							{/*	</a>*/}
							{/*))}*/}
							<Link
								href="/"
								onClick={logout}
								className={classNames(
									"block py-2 px-4 text-sm text-gray-700"
								)}
							>
								Log Out
							</Link>
						</div>
						<div className="border-t border-gray-200 pt-4 pb-3">
							<div className="max-w-3xl mx-auto px-4 flex items-center sm:px-6">
								<div className="flex-shrink-0">
									<Image
										className="h-10 w-10 rounded-full"
										src={user.avatar}
										alt="Tarclone's user avatar"
										width="40"
										height="40"
									/>
								</div>
								<div className="ml-3">
									<div className="text-base font-medium text-gray-800">
										{user.name}
									</div>
									<div className="text-sm font-medium text-gray-500">
										{user.email}
									</div>
								</div>
								<button
									type="button"
									className="ml-auto flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
								>
									<span className="sr-only">View notifications</span>
									<BellIcon className="h-6 w-6" aria-hidden="true" />
								</button>
							</div>
							<div className="mt-3 max-w-3xl mx-auto px-2 space-y-1 sm:px-4">
								{/*{userNavigation.map((item) => (*/}
								{/*	<Link*/}
								{/*		key={item.name}*/}
								{/*		href={item.href}*/}
								{/*		className="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"*/}
								{/*	>*/}
								{/*		{item.name}*/}
								{/*	</Link>*/}
								{/*))}*/}
								<Link
									href="/"
									className="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
								>
									Log Out
								</Link>
							</div>
						</div>
					</Popover.Panel>
				</>
			)}
		</Popover>
	</div>)
	return (
		<div>
			{user ? loggedIn : guest }
		</div>

	);
}

export default Navigation;
