import React from "react";
// import FurnaceAc from "../../images/furnace_ac.jpeg";
// import Furnace from "../../images/furnace.jpeg";
// import AcCoil from "../../images/ac_coil2.jpeg";
// import Filter from "../../images/hvac_filter.jpg";
// import SolarPanel from "../../images/solar_panels.jpg";
// import Refrigerant from "../../images/refrigerant.jpg";
import Image from "next/image";
import Link from "next/link";
import Resources from "../index";

export default function Sustainability(props) {
	const { sustainability } = props;

	return (
		<div className="bg-white">
			<Resources />
			{/* List of equipment */}
			<div className="mx-7 sm:mx-0 md:container md:mx-auto lg:px-40">
				<ul className="divide-y divide-gray-200">
					{sustainability.map((item) => (
						<li key={item.title} className="py-4">
							<div className="lg:mx-5 md:mx-3">
								<h5 className="text-base font-semibold text-blue-500 tracking-wide">
									{item.title}
								</h5>

								<div className="grid lg:grid-cols-6 sm:grid-cols-1">
									<div className="lg:col-span-1 sm:col-span-5 object-contain my-2 md:my-6">
										<Image src={item.image} width={336} height={336} />
									</div>
									<div className="sm:pl-5 lg:col-span-4">
										<p className="m-2 sm:my-1">{item.summary}</p>

										<p>
											<span className="font-bold">Why it's Important: </span>
										</p>
										<ul className="mt-1 space-y-1">
											<li>{item.importance_one}</li>
											<li>{item.importance_two}</li>
											<li>{item.importance_three}</li>
										</ul>
										<div>
											<Link href={item.link} type="button">
												<a className="inline-flex px-4 py-2 mt-2 mb-3 border border-gray-300 shadow-sm text-sm font-medium rounded-md hover:bg-gray-100">
													Learn more
												</a>
											</Link>
										</div>
									</div>
								</div>
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export async function getStaticProps() {
	return {
		props: {
			sustainability: [
				{
					title: "Maintaining HVAC Equipment",
					summary:
						"Allowing your equipment to last its full useful life ensures that you don’t replace the unit or parts as often",
					importance_one: "- Keeps parts and equipment out of landfills",
					importance_two: "- Less energy use as system stays efficient",
					importance_three: "- Better indoor air quality",
					image: "/images/resources/sustainability/hvac_filter.jpg",
					link: "/resources/sustainability/maintainhvac",
				},
				{
					title: "Replacing your HVAC Equipment",
					summary:
						"If your equipment is over 10 years old and has lots of problems, or if you feel its useful life is over, it makes sense to replace your system",
					importance_one: "- A new system is more efficient",
					importance_two: "- Newer systems may use eco-friendly refrigerants",
					image: "/images/resources/system/furnace_ac.jpeg",
					link: "/resources/sustainability/replacehvac",
				},
				{
					title: "Refrigerants",
					summary:
						"Knowing what type of refrigerant your system uses and how it’s added or replaced has a strong impact on the environment",
					importance_one: "- Refrigerants can have effects on the ozone",
					importance_two: "- There are proper ways to handle refrigerants",
					image: "/images/resources/sustainability/refrigerant.jpg",
					link: "/resources/sustainability/refrigerants",
				},
				{
					title: "Solar - Renewable Energy",
					summary:
						"If you have, or are thinking about installing, a PV system, it may have an impact on the type of HVAC system you prefer",
					importance_one: "- A non-gas heating system pairs well with solar",
					importance_two: "- HVAC uses a significant portion of power",
					image: "/images/resources/sustainability/solar_panels.jpg",
					link: "/resources/sustainability/renewableenergy",
				},
			],
		},
	};
}
