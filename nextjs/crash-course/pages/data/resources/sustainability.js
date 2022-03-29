const sustainability = [
	{
		name: "Maintaining Your HVAC System",
		category: "Sustainability",
		id: "maintainhvac",
		image: "/images/resources/sustainability/maintain_hvac.jpg",
		imageDescription: "",
		heading_one: "Maintaining HVAC Equipment",
		paragraph_one:
			"With a busy world and the many distractions in life, HVAC isn’t typically something that one thinks about often, let alone maintaining it. For almost everyone, HVAC maintenance is simply changing out an air filter every three months which can also be neglected. This begs the question, what does HVAC maintenance look like and what are the benefits?",
		heading_two: "Replacing Air Filters",
		paragraph_two:
			"It’s recommended to replace disposable air filters every three months – more often if you have pets or your air filters fill up with lint and dirt at a fast rate. If your filter isn’t replaced regularly, you could have issues with your HVAC system. Issues such as low airflow, coil freezing, fan failure, etc. For homes, a 1” pleated filter works perfectly fine at an efficiency rating of your choice. MERV Rating Info below. Regular replacement also helps save you money given that a full filter makes the supply fan work harder, and in turn, use more energy.",
		diagram_image: "",
		heading_three: "Bi-Annual Preventive Maintenance Check",
		paragraph_three:
			"To ensure that your HVAC system is in tip-top shape, it’s important to have your system checked before each heating and cooling season. Almost all HVAC contractors will perform bi-annual check-ups if an appointment is scheduled, and many are able to provide maintenance contracts. During the bi-annual checks, unit diagnostics are analyzed, refrigerant levels are checked, and heating and cooling elements are tested for the upcoming season.",
		heading_four: "Clean Ductwork",
		paragraph_four:
			"Not always the highest priority, even for HVAC, clean ductwork can be a breath of fresh air (literally). Clean ductwork improves indoor air quality and proper airflow. There are specialty companies that provide a ductwork cleaning services inexpensively and some residential HVAC contractors will do so as well.",
	},
	{
		name: "Replacing HVAC Equipment",
		category: "Sustainability",
		id: "replacehvac",
		image: "/images/resources/sustainability/replace_hvac.jpg",
		imageDescription: "",
		heading_one: "Replacing HVAC Equipment",
		paragraph_one:
			"If your HVAC equipment is over 10 years old, it may be advantageous to think about replacing equipment when something goes wrong instead of simply repairing it. This may help you save money long-term by not repairing the unit every few years or using a higher efficient model. From a sustainability standpoint, the new unit may have a more eco-friendly refrigerant or you have the ability to move to an all-electric system.",
		heading_two: "Costly Repairs",
		paragraph_two:
			"As your equipment gets older, it makes sense that you’ll need to service the equipment more often. If the HVAC system has been properly maintained throughout its life, the system typically lasts longer and needs less repair look. It’s up to you to determine the economic trade-off between how often you’d need to repair the unit at an older age or replace the equipment with new equipment requiring no repair work.",
		diagram_image: "",
		heading_three: "High Efficiency Models",
		paragraph_three:
			"If you have an older HVAC system, it’s almost certain newer HVAC equipment will be much more efficient. Furthermore, local utility companies often time have incentives and rebates in line with the efficiency of new equipment. Browse your utility company’s website to find out what rebates are offered.",
		heading_four: "Sustainability",
		paragraph_four:
			"Policies and laws are continually changing to make the world more sustainable, and for HVAC, refrigerants are being regulated to keep our ozone health and global warming in check. When moving from an older HVAC system to a newer one, it’s likely that the new refrigerant will be more eco-friendly.",
		heading_five: "All-Electric Equipment",
		paragraph_five:
			"If you’re looking to replace a traditional, central air, type system it likely uses gas heat. There’s an opportunity for you to purchase a heat pump system as a replacement. Heat pumps utilize electric cooling and heating. In colder climates, you may need to tack on some additional electric heat to meet the load.",
	},

	{
		name: "HVAC Refrigerants",
		category: "Sustainability",
		id: "refrigerants",
		image: "/images/resources/sustainability/refrigerant_hvac.jpg",
		imageDescription: "",
		heading_one: "Refrigerants",
		paragraph_one:
			"Refrigerants are used in HVAC systems, cars, and refrigeration equipment throughout the world. Its abundance is both a blessing and burden considering it’s a need in today’s world, but refrigerants aren’t good for the environment when released into the air.",
		heading_two: "Refrigerant Characterisitcs",
		paragraph_two:
			"Refrigerants are typically characterized by their efficiency and cooling capacity. For sustainable purposes, they’re also characterized by their Ozone Depletion Potential (ODP) and Global Warming Potential (GWP). Regulations have been put in place to limit refrigerants’ detrimental impact to the environment. In your residential HVAC system, you may be using R-22 or R-410a as your refrigerant. R-22 is worse for the environment than R-410a, and eventually a new refrigerant will replace R-410a as a greener option. It’s worth checking or asking a contractor for the type of refrigerant that will be used in your system.",
		diagram_image: "",
		heading_three: "HVAC System Leaks",
		paragraph_three:
			"One way for refrigerants to enter the atmosphere is a leak in your HVAC system. This is common and is often found out when something goes wrong with your system. A better approach would be to use a contractor for annual (or bi-annual) preventive maintenance checks where the leak can be detected early on and fixed. This also increases the life and efficiency of your equipment.",
		heading_four: "HVAC Replacement Procedures",
		paragraph_four:
			"Another way refrigerants sneak into the environment is through poor transportation and storage. When HVAC is replaced, please check with your contractor to make sure the refrigerant from the old system is recaptured and recycled. Refrigerants released in a landfill or improperly disposed is detrimental to the ozone.",
	},
	{
		name: "Solar - Renewable Energy",
		category: "Sustainability",
		id: "renewableenergy",
		image: "/images/resources/sustainability/solar_home.jpg",
		imageDescription: "",
		heading_one: "Renewable Energy",
		paragraph_one:
			"If sustainable and renewable energy is at the top of your list when making your next HVAC purchase, there are options that may be more appealing to you. A traditional system includes electric cooling and natural gas heating. There are options for an all-electric solution.",
		heading_two: "Heat Pump Systems",
		paragraph_two:
			"A heat pump system utilizes electric cooling an electric heating. In colder climates, you may need to purchase an additional electric heating coil to meet your space’s cooling load during the winter. There are heat pump options when replacing a traditional ducted system and also a system without ductwork.",
		diagram_image: "",
		heading_three: "Solar Power",
		paragraph_three:
			"If you plan to purchase solar for your home soon, you may want to plan for a new, all-electric heat pump system. You’ll want to factor this in when deciding how many solar panels are needed. A heat pump system will reduce your natural gas use but increase your electricity use.",
		heading_four: "Utility Renewable Energy Programs",
		paragraph_four:
			"Depending on your region, local utility providers may have renewable energy programs. Utility providers that have purchased power from renewable energy sources or have installed their own renewable energy source, will offer consumers the ability to opt-in to the program. The idea is that a consumer opting into the program is purchasing the power from the renewable energy resources rather than from coal or gas plants. In this case, having an all-electric HVAC system may make sense to have the feel of using only renewable energy.",
	},
];

export function getSustainabilityByName(id) {
	return sustainability.find((event) => event.id === id);
}
