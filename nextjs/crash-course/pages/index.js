import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navigation from "./layout/navigation";
import Footer from "./layout/footer";
import Link from "next/link";
const steps = [
	{
		step: "Step 1",
		info: "Choose equipment or service",
		image: "/images/illustration-choose.png",
	},
	{
		step: "Step 2",
		info: "Submit info to be contacted",
		image: "/images/illustration-contact.png",
	},
	{
		step: "Step 3",
		info: "Select contractors near you",
		image: "/images/illustration-contractor.png",
	},
];

export default function Home() {
	return (
		<div className="home">
			{/* Banner */}
			<div className="relative bg-blue-100">
				<div className="shadow-inner max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
					<div className="sm:text-center sm:px-16">
						<p className="font-medium text-gray-600">
							<span className="md:hidden">
								Proudly serving Boulder County -- Available to residents April
								2022
							</span>
							<span className="hidden md:inline">
								Proudly serving Boulder County -- Available to residents April
								2022
							</span>
							{/* <span className="block sm:ml-2 sm:inline-block">
											<a href="#" className="text-white font-bold underline">
												{" "}
												Learn more <span aria-hidden="true">&rarr;</span>
											</a>
										</span> */}
						</p>
					</div>
				</div>
			</div>
			<div className="container mx-auto">
				<div className="relative mx-auto bg-white overflow-hidden">
					<div className="relative py-4 md:py-10 bg-white grid grid-cols-1 gap-4 md:grid-cols-2">
						<div className="max-w-7xl w-full md:pt-4 pb-6 lg:py-12 text-left">
							<div className="px-4">
								<div className="sm:my-3 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
									<span className="block text-gray-900">Connect with</span>
									<span className="block text-blue-600">Heating & Cooling</span>
									<span className="block text-gray-900">Contractors</span>
								</div>
								<h4 className="mt-3 max-w-md max-w-auto font-bold sm:text-xl md:mt-5 sm:max-w-3xl">
									Need your HVAC system replaced or serviced?
								</h4>
								<p className="mt-3 max-w-auto text-gray-500 md:mt-5 sm:max-w-3xl">
									We make HVAC decisions and contractor interactions easy for
									you. Get started below.
								</p>
								<div className="mt-6 sm:flex justify-center sm:justify-start sm:space-x-10">
									{/* <NavLink
											className="block w-full py-3 px-5 text-center bg-blue-600 rounded-md shadow-md shadow-blue-500/50 text-base font-bold text-white hover:bg-blue-700 sm:inline-block sm:w-auto"
											exact
											to="/questions"
											onClick={this.submitClick}
											type="button"
											id="button-addon2"
										>
											Get Started
										</NavLink> */}
									<button type="button">
										<Link href="http://eepurl.com/hRiX11">
											<a className="block w-full py-3 px-5 text-center bg-blue-600 rounded-md shadow-md shadow-blue-500/50 text-base font-bold text-white hover:bg-blue-700 sm:inline-block sm:w-auto">
												Join our Email List
											</a>
										</Link>
									</button>
									<br />
									<button type="button">
										<Link href="/contractorsignup">
											<a className="block w-full py-3 px-5 text-center bg-blue-600 rounded-md shadow-md shadow-blue-500/50 text-base font-bold text-white hover:bg-blue-700 sm:inline-block sm:w-auto">
												Join as a Contractor
											</a>
										</Link>
									</button>
								</div>
							</div>
						</div>
						<div className="hidden md:inline mt-auto mb-auto px-4">
							<img
								className="rounded-3xl shadow-xl"
								src="https://images.unsplash.com/photo-1568634697393-0165d25e7acb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1072&q=80"
								alt=""
							/>
						</div>
					</div>
				</div>
			</div>

			{/* How It Works Section */}
			<div className="relative shadow-md shadow-inner bg-gradient-to-r from-blue-600 to-gray-300 py-6 px-4 sm:px-6 lg:px-8">
				<div className="relative max-w-7xl mx-auto">
					<div className="max-w-7xl mx-auto py-4 px-4 sm:py-6 sm:px-6 lg:px-8">
						<div className="">
							<div className="text-center">
								<p className="text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
									How It Works
								</p>
							</div>
							<div>
								<dl className="mt-4 p-4 md:max-w-4xl mx-auto grid grid-cols-1 gap-6 sm:grid-cols-3">
									{steps.map((item) => (
										<div
											key={item.step}
											className="bg-white shadow rounded-lg overflow-hidden"
										>
											<h2 className="px-4 pt-3 text-base font-semibold text-blue-600 tracking-wide uppercase">
												{item.step}
											</h2>
											<dd className=" px-4 pt-1 mt-1 md:text-xl font-semibold text-gray-900">
												{item.info}
											</dd>
											<Image src={item.image} width={260} height={190} />
											{/*<img*/}
											{/*    className="my-2 flex-shrink mx-auto h-32 w-auto"*/}
											{/*    src={item.image}*/}
											{/*    alt=""*/}
											{/*/>*/}
										</div>
									))}
								</dl>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-white py-10 shadow-md shadow-inner sm:py-16">
				<div className="relative sm:py-16">
					<div aria-hidden="true" className="hidden sm:block"></div>
					<div className="mx-auto max-w-md sm:max-w-3xl sm:px-6 lg:max-w-5xl lg:px-8">
						<div className="relative rounded-2xl px-3 py-10 bg-blue-600 overflow-hidden shadow-xl sm:px-12 sm:py-8">
							<div
								aria-hidden="true"
								className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
							>
								<svg
									className="absolute inset-0 h-full w-full"
									preserveAspectRatio="xMidYMid slice"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 1463 360"
								>
									<path
										className="text-blue-500 text-opacity-40"
										fill="currentColor"
										d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
									/>
									<path
										className="text-blue-700 text-opacity-40"
										fill="currentColor"
										d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
									/>
								</svg>
							</div>
							<div className="relative">
								<div className="text-center">
									<h2 className="sm:text-3xl font-extrabold text-gray-300 tracking-tight">
										Want product news and updates?
									</h2>
									<h2 className="sm:text-3xl font-extrabold text-white tracking-tight">
										Sign up for our newsletter{" "}
										<span>
											<a
												href="http://eepurl.com/hRiX11"
												style={{ textDecoration: "underline" }}
											>
												here
											</a>
										</span>
										!
									</h2>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
