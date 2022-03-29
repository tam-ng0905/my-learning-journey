import Image from "next/image";
import Link from "next/link";
import Resources from "../index";

export default function EnergySavings(props) {
	const { savings } = props;
	return (
		<div className="bg-white">
			<Resources />
			{/* List of equipment */}
			<div className="mx-7 sm:mx-0 md:container md:mx-auto lg:px-40">
				<ul className="divide-y divide-gray-200">
					{savings.map((item) => (
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
			savings: [
				{
					title: "Web-Enabled Thermostats",
					summary:
						"A Wi-Fi thermostat give you the ability to change settings from your mobile app and save you money long term",
					importance_one: "- Remote connectivity",
					importance_two: "- Less energy use when schedule setup correctly",
					image: "/images/resources/savings/nest_stat.jpeg",
					link: "/resources/energysavings/wifithermostat",
				},
				{
					title: "High Efficiency Equipment",
					summary:
						"Equipment efficiencies vary greatly, and a high-efficient system can pay off financially",
					importance_one: "- Take advantage of utility rebates",
					importance_two: "- Pulls less energy from the grid",
					image: "/images/resources/savings/heatpump.jpeg",
					link: "/resources/energysavings/highefficiency",
				},
				{
					title: "Maintaining HVAC Equipment",
					summary:
						"Allowing your equipment to last its full useful life ensures that you don’t replace the unit or parts as often",
					importance_one: "- Keeps parts and equipment out of landfills",
					importance_two: "- Less energy use as system stays efficient",
					importance_three: "- Better indoor air quality",
					image: "/images/resources/savings/hvac_filter.jpg",
					link: "/resources/energysavings/maintainhvac",
				},
			],
		},
	};
}
