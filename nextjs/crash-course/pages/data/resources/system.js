const systems = [
	{
		name: "Traditional A/C System",
		category: "System Type & Info",
		id: "indoorfurnaceac",
		image: "/images/resources/system/acsystem_resources.jpeg",
		imageDescription: "",
		title: "What is a traditional A/C system",
		description:
			"A traditional system or central A/C system includes an outdoor condensing unit connected to an indoor coil which is responsible for cooling an indoor space. The A/C system is typically paired with an indoor gas furnace. The gas furnace provides heat and contains a fan to push air throughout the indoor space via ducts.",
		advantages: [
			{
				id: 1,
				description: "A simple replacement for an existing central A/C system",
			},
			{
				id: 2,
				description:
					"Most systems work with Wi-Fi thermostats such as Nest and ecobee",
			},
		],
		disadvantages: [
			{
				id: 1,
				description: "Natural gas is typically used for heating",
			},
			{
				id: 2,
				description: "Ductwork is required",
			},
		],
		maintenance: [
			{
				id: 1,
				description:
					"Hire contractor to check unit before cooling season and heating season",
				checks_one: "Ensure coils are clean",
				checks_two: "Check refrigerant levels",
				checks_three: "Diagnose any other problems",
			},
			{
				id: 2,
				description: "Change filter every three months",
			},
		],
	},
	{
		name: "Ductless Split System",
		category: "System Type & Info",
		id: "ductlesssplit",
		image: "/images/resources/system/minisplit_resources.jpg",
		imageDescription: "",
		title: "What is a Ductless Split System",
		description:
			"A ductless split system typically consists of a single outdoor unit with multiple indoor units connected to it via a refrigerant line. Each room that requires cooling (or heating) will need its own indoor unit. Indoor units can come in a variety of styles, including wall-mounted and ceiling-concealed. A ductless split system is most commonly ordered as a heat pump design – electric cooling and electric heating. However, a ductless split system can be ordered as cooling-only also.",
		advantages: [
			{
				id: 1,
				description: "An all-electric system for the sustainable future",
			},
			{
				id: 2,
				description:
					"A simple addition to an indoor space with radiant heating and no cooling",
			},
			{
				id: 3,
				description: "Ductwork throughout the house isn’t needed",
			},
		],
		disadvantages: [
			{
				id: 1,
				description:
					"An indoor unit in each room isn’t always aesthetically pleasing",
			},
			{
				id: 2,
				description: "May be expensive to purchase and install",
			},
			{
				id: 3,
				description:
					"Could be more challenging for a Nest or ecobee to work properly",
			},
		],
		maintenance: [
			{
				id: 1,
				description:
					"Hire contractor to check unit before cooling season and heating season",
				checks_one: "Ensure coils are clean",
				checks_two: "Check refrigerant levels",
				checks_three: "Diagnose any other problems",
			},
			{
				id: 2,
				description: "Change filter every three months",
			},
		],
	},
	{
		name: "Heat Pump System",
		category: "System Type & Info",
		id: "heatpump",
		image: "/images/resources/system/heatpump_resources.jpg",
		imageDescription: "",
		title: "What is a Heat Pump",
		description:
			"A heat pump utilizes electric cooling and electric heating. An outdoor heat pump contains a reversing valve that allows the refrigeration loop to reverse course depending on the need for heating or cooling. The outdoor heat pump connects to an indoor air handler which contains a fan and heat transfer coil.",
		advantages: [
			{
				id: 1,
				description: "An all-electric system for the sustainable future",
			},
			{
				id: 2,
				description: "A simple replacement for an existing central A/C system",
			},
			{
				id: 3,
				description:
					"Most systems work with Wi-Fi thermostats such as Nest and ecobee",
			},
		],
		disadvantages: [
			{
				id: 1,
				description:
					"An additional electric heating coil will be needed in cold climates",
			},
			{
				id: 2,
				description:
					"May be expensive to operate if local electric rates are high",
			},
		],
		maintenance: [
			{
				id: 1,
				description:
					"Hire contractor to check unit before cooling season and heating season",
				checks_one: "Ensure coils are clean",
				checks_two: "Check refrigerant levels",
				checks_three: "Diagnose any other problems",
			},
			{
				id: 2,
				description: "Change filter every three months",
			},
		],
	},
	{
		name: "Swamp Cooler",
		category: "System Type & Info",
		id: "swampcooler",
		image: "/images/resources/system/swamp-cooler.jpg",
		imageDescription: "",
		title: "What is a Swamp Cooler",
		description:
			"A swamp cooler, or evaporative cooler, is a single packaged unit using an evaporative media as its cooling mechanism instead of a compressed refrigerant system. A swamp cooler’s fan pulls hot outdoor air through a wetted evaporative media which cools the air supplied to the indoor space. Tap water is piped or hosed to the swamp cooler with an internal pump used to spray the media through tubed distribution lines.",
		advantages: [
			{
				id: 1,
				description: "Inexpensive to purchase, install, and operate",
			},
			{
				id: 2,
				description: "Works extremely well in dry climates",
			},
			{
				id: 3,
				description: "Operates without refrigerant",
			},
		],
		disadvantages: [
			{
				id: 1,
				description: "Brings humidity into the space",
			},
			{
				id: 2,
				description:
					"MUnits have been known to leak into space when mounted on the roof",
			},
			{
				id: 3,
				description: "You'll need a separate heat source",
			},
		],
		maintenance: [
			{
				id: 1,
				description: "Hire contractor to check unit before cooling season",
				checks_one: "Ensure media is in working condition",
				checks_two: "Check pumps and overflow switch",
				checks_three: "Diagnose any other problems",
			},
			{
				id: 2,
				description: "Change media/pads every three years",
			},
			{
				id: 3,
				description: "Properly winterize unit before weather is cold",
			},
		],
	},
];

export function getSystemByName(id) {
	return systems.find((event) => event.id === id);
}
