import Image from "next/image";
import Link from "next/link";
import Resources from "../index";

export default function System(props) {
	const { systems } = props;
	return (
		<div className="bg-white">
			<Resources />
			{/* List of equipment */}
			<div className="mx-7 sm:mx-0 md:container md:mx-auto lg:px-40">
				<ul className="divide-y divide-gray-200">
					{systems.map((item) => (
						<li key={item.system_type} className="py-4">
							<div className="lg:mx-5 md:mx-3">
								<h5 className="text-base font-semibold text-blue-500 tracking-wide">
									{item.system_type}
								</h5>
								<div className="grid lg:grid-cols-6 sm:grid-cols-1">
									<div className="lg:col-span-1 sm:col-span-5 object-contain my-2 md:my-6">
										<Image src={item.image} width={336} height={336} />
									</div>
									<div className="sm:pl-5 lg:col-span-5">
										<p className="lg:mt-5 sm:my-1">
											<span className="font-bold">
												Cost Including Install:{" "}
											</span>
											{item.cost}
										</p>
										<p className="my-1">
											<span className="font-bold">About: </span>
											{item.about}
										</p>
										<p>
											<span className="font-bold">When to Use: </span>
											{item.when_to_use}
										</p>
										<ul>
											<li>{item.when_to_use_one}</li>
											<li>{item.when_to_use_two}</li>
											<li>{item.when_to_use_three}</li>
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
			systems: [
				{
					cost: "$6,000 - $10,000",
					system_type: "Indoor Furnace and A/C System",
					about: "Most popular system, and often known as Central A/C",
					when_to_use_one: "- Indoor space has ductwork",
					when_to_use_two: "- New build",
					when_to_use_three: "- Replacing an existing system",
					image: "/images/resources/system/furnace_ac.jpeg",
					link: "/resources/system/indoorfurnaceac",
				},
				{
					cost: "$2,000 - $5,000",
					system_type: "Indoor Furnace Only",
					about: "Produces heat only and can be paired with A/C",
					when_to_use_one: "- Indoor space has ductwork",
					when_to_use_two: "- Replace existing furnace",
					image: "/images/resources/system/furnace.jpeg",
					link: "/resources/system/indoorfurnaceac",
				},
				{
					cost: "$4,000 - $7,000",
					system_type: "A/C System (Outdoor Unit & Indoor Coil)",
					about: "Produces cool air and can be added to a furnace",
					when_to_use_one: "- Indoor space has ductwork",
					when_to_use_two: "- Enough room near furnace to add coil",
					image: "/images/resources/system/ac_coil2.jpeg",
					link: "/resources/system/indoorfurnaceac",
				},
				{
					cost: "$5,000 - $15,000",
					system_type: "Ductless Mini-Split System",
					about: "Extremely efficient, all electric, and no ductwork needed",
					when_to_use_one:
						"- Indoor space has radiant heating with no ductwork",
					when_to_use_two: "- You're okay with an indoor unit in each room",
					when_to_use_three: "- Prefer to use electric heat instead of gas",
					image: "/images/resources/system/ductless.jpeg",
					link: "/resources/system/ductlesssplit",
				},
				{
					cost: "$6,000 - $10,000",
					system_type: "Heat Pump System",
					about: "All electric and ready for the sustainable future",
					when_to_use_one: "- Indoor space has ductwork",
					when_to_use_two: "- Replace existing heatpump or A/C system",
					when_to_use_three:
						"- Prefer to use electric heat instead of gas heat",
					image: "/images/resources/system/heatpump.jpeg",
					link: "/resources/system/heatpump",
				},
				{
					cost: "$1,000 - $2,000",
					system_type: "Swamp Cooler",
					about: "Great for dry climates and very affordable",
					when_to_use_one: "- Indoor space has ductwork",
					when_to_use_two:
						"- Looking for an affordable and efficient cooling solution",
					when_to_use_three: "- You're okay with adding humidity to the space",
					image: "/images/resources/system/swampcooler.jpeg",
					link: "/resources/system/swampcooler",
				},
			],
		},
	};
}
