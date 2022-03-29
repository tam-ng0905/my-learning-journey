import React from "react";
import {
    CheckIcon,
    UserGroupIcon,
    CurrencyDollarIcon,
    ChatAlt2Icon,
    AdjustmentsIcon,
} from "@heroicons/react/outline";
import ImageTony from "../public/images/tony_aboutimage.png";
import Navigation from "./layout/navigation";
import Footer from "./layout/footer";

const features = [
    {
        name: "Invest In Your Community",
        description:
            "Contractors and Installers live nearby, so every contractor you choose benefits the community around you",
        icon: UserGroupIcon,
    },
    {
        name: "Choose How To Communicate",
        description:
            "Allow Contractors and Installers to connect through any method you choose: email, phone, or text",
        icon: ChatAlt2Icon,
    },
    {
        name: "Find The Best Fit",
        description:
            "Select contractors you feel are best for you based on rating, bio description, and years of experience",
        icon: AdjustmentsIcon,
    },
    {
        name: "Budget Pricing",
        description:
            "See estimated pricing to understand the approximate costs of install or replacement",
        icon: CurrencyDollarIcon,
    },
];

const valueFeatures = [
    {
        name: "Build",
        description:
            "Lead through personal growth and community infrastructure",
    },
    {
        name: "Simplify",
        description: "Make life easier through uncomplicated solutions",
    },
    {
        name: "Reward",
        description: "Create environments that are benefical to all involved",
    },
    {
        name: "Balance",
        description: "Enjoy life outside the office",
    },
];
const people = [
    {
        name: "Tony Fischels",
        role: "DU Grad Student",
        imageUrl:
        ImageTony,
        bio:
            " ",
        twitterUrl: "#",
        linkedinUrl: "https://www.linkedin.com/in/tonyfischels/",
    },
    {
        name: "Tam Nguyen",
        role: "DU Student",
        imageUrl:
            "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
        bio:
            "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
        twitterUrl: "#",
        linkedinUrl: "https://www.linkedin.com/in/tamng0905/",
    },
    // More people...
];

export default function About() {
    return (
        <div className="about">
            <div className="bg-white">
                <div className="max-w-7xl md:max-w-6xl mx-auto pt-8 md:pt-16 pb-6 px-4 sm:px-6 sm:py-24 sm:pb-8">
                    <div className="text-center">
                        <h2 className="text-base font-semibold text-blue-500 tracking-wide uppercase">
                            About
                        </h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            What Is Tarclone?
                        </p>
                        <p className="max-w-xl mt-2 mx-auto text-xl text-gray-500">
                            Tarclone is a platform connecting homeowners and businesses with
                            HVAC products and local contractors
                        </p>
                    </div>

                    <div className="mt-10 md:container md:mx-auto lg:px-10">
                        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                            {features.map((feature) => (
                                <div key={feature.name} className="relative">
                                    <dt>
                                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                                            <feature.icon className="h-6 w-6" aria-hidden="true" />
                                        </div>
                                        <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                                            {feature.name}
                                        </p>
                                    </dt>
                                    <dd className="mt-2 ml-16 text-base text-gray-500">
                                        {feature.description}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
            <div className="py-12 bg-white">
                <div className="max-w-7xl bg-gray-100 py-4 rounded-tl-2xl rounded-br-2xl md:max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-base text-blue-500 font-semibold tracking-wide uppercase">
                            Diversity, Equity, and Inclusion Statement
                        </h2>
                        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                            At Tarclone, the culture of our team and surrounding communities
                            is core to our mission. With a world full of complex problems, we
                            firmly believe diversity and different perspectives bring positive
                            change and more innovation to the team. Tarclone is commited to
                            building an inclusive environment and supporting all who we serve.
                        </p>
                    </div>
                </div>
            </div>

            <div className="py-12 bg-white">
                <div className="mx-auto max-w-7xl md:max-w-6xl px-4 sm:px-6 lg:grid lg:grid-cols-3 lg:gap-x-8">
                    <div>
                        <h2 className="text-base font-semibold text-blue-500 uppercase tracking-wide">
                            Goals and Objectives
                        </h2>
                        <p className="mt-2 text-3xl font-extrabold text-gray-900">
                            Our Vision
                        </p>
                        <p className="mt-2 text-lg text-gray-500">
                            Continually improve and technologically advance the HVAC industry
                        </p>
                        <br />
                        <p className="mt-2 text-3xl font-extrabold text-gray-900">
                            Our Mission
                        </p>
                        <p className="mt-2 text-lg text-gray-500">
                            Create innovative interactions and a unique platform experience
                            for industry professionals and consumers
                        </p>
                    </div>
                    <div className="mt-12 lg:mt-0 lg:col-span-2">
                        <h2 className="text-base font-semibold text-blue-500 uppercase tracking-wide">
                            Core Values
                        </h2>
                        <br />
                        <dl className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-2 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
                            {valueFeatures.map((feature) => (
                                <div key={feature.name} className="relative">
                                    <dt>
                                        <CheckIcon
                                            className="absolute h-6 w-6 text-green-500"
                                            aria-hidden="true"
                                        />
                                        <p className="ml-9 text-lg leading-6 font-medium text-gray-900">
                                            {feature.name}
                                        </p>
                                    </dt>
                                    <dd className="mt-2 ml-9 text-base text-gray-500">
                                        {feature.description}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>

            {/* <div className="bg-blue-50 shadow-inner">
				<div className="mx-auto py-12 px-4 max-w-7xl md:max-w-6xl sm:px-6 lg:px-8 lg:py-24">
					<div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
						<div className="space-y-5 sm:space-y-4">
							<h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
								Our Team
							</h2>
							<p className="text-xl text-gray-500">
								We're here to help digitalize the HVAC industry in the best way possible.
							</p>
						</div>
						<div className="lg:col-span-2">
							<ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8">
								{people.map((person) => (
									<li key={person.name}>
										<div className="space-y-4">
											<div className="aspect-w-3 aspect-h-2">
												<img
													className="object-cover shadow-lg rounded-lg"
													src={person.imageUrl}
													alt=""
												/>
											</div>
											<div className="text-lg leading-6 font-medium space-y-1">
												<h3>{person.name}</h3>
												<p className="text-blue-500">{person.role}</p>
											</div>

											<ul className="flex space-x-5">
												<li>
													<a
														href={person.twitterUrl}
														className="text-gray-400 hover:text-gray-500"
													>
														<span className="sr-only">Twitter</span>
														<svg
															className="w-5 h-5"
															aria-hidden="true"
															fill="currentColor"
															viewBox="0 0 20 20"
														>
															<path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
														</svg>
													</a>
												</li>
												<li>
													<a
														href={person.linkedinUrl}
														target="_blank"
														className="text-gray-400 hover:text-gray-500"
													>
														<span className="sr-only">LinkedIn</span>
														<svg
															className="w-5 h-5"
															aria-hidden="true"
															fill="currentColor"
															viewBox="0 0 20 20"
														>
															<path
																fillRule="evenodd"
																d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
																clipRule="evenodd"
															/>
														</svg>
													</a>
												</li>
											</ul>
										</div>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		 */}
        </div>
    );
}
