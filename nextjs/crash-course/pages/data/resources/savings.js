const savings = [
	{
		name: "Maintaining Your HVAC System",
		category: "Energy Savings",
		id: "wifithermostat",
		image: "/images/resources/savings/nest_thermostat.jpg",
		imageDescription: "",
		heading_one: "Web-Enabled Thermostats",
		paragraph_one:
			"There are dozens of web-enabled (or Wi-Fi) thermostats in the market today, and some may say they’re the standard at this point. Instead of the set it and forget it approach for a non-programmable thermostat, one’s able to change set points, schedules, and occupations settings from an app or website with a web-enabled thermostat.",
		heading_two: "How Much Savings?",
		paragraph_two:
			"With a Wi-Fi thermostat, you can save a lot of money without even knowing it compared to a non-Wi-Fi thermostat. With an older style thermostat, the HVAC runs based on the temperature and cooling setting enabled at the thermostat itself. If you’re away from the house, or you forget to change settings while the windows are open, the thermostat’s settings may keep the HVAC running. This adds to your electric bill. The amount of savings depends on one’s size of the house and lifestyle.",
		diagram_image: "",
		heading_three: "Which Type of Wi-Fi Thermostat?",
		paragraph_three:
			"The type of Wi-Fi thermostat one should choose is based on the type of equipment and one’s preference. Certain types of equipment (especially very high efficiency equipment) may require a proprietary thermostat so that the HVAC units work appropriately. If one has equipment with a conventional thermostat interface, one can choose almost any Wi-Fi thermostat available. The most popular are Nest and ecobee, although all manufacturers of HVAC equipment also have an equivalent.",
		heading_four: "Potential Problems",
		paragraph_four:
			"Like any form of technology, it’s very important to read through the installation manual when setting up a Wi-Fi thermostat. If the thermostat isn’t communicating correctly, the HVAC equipment won’t function properly. For instance, Wi-Fi thermostats may require a COM wire which isn’t always present in older systems. The option is then to run an additional wire from the thermostat to the unit or to purchase an available accessory that compensates for the lack of a COM wire.",
	},
	{
		name: "High Efficiency HVAC",
		category: "Energy Savings",
		id: "highefficiency",
		image: "/images/resources/savings/heatpump_resources.jpg",
		imageDescription: "",
		heading_one: "Energy Efficient HVAC",
		paragraph_one:
			"With advances in the HVAC industry over the past decade, there are many new technologies the give homeowner a range of options when it comes to HVAC system efficiencies. A higher efficient HVAC system leads to a decreased utility bill.",
		heading_two: "Replacing HVAC Equipment",
		paragraph_two:
			"If you have an older HVAC system, it’s almost certain newer HVAC equipment will be much more efficient. Furthermore, there will be less repairs. New HVAC equipment, even at the basic level of efficiency, is likely anywhere from 10% to 50% more efficient than your old system. This is due to degradation of the unit and better government standards.",
		diagram_image: "",
		heading_three: "Utility Provider Incentives",
		paragraph_three:
			"Local utility companies often time have incentives and rebates in line with the efficiency of new equipment. Browse your utility company’s website to find out what rebates are offered. It’s possible it’s a fixed amount incentive if your equipment is over a certain efficiency, or it could be tiered to cater to progressively higher levels of efficiency.",
	},
	{
		name: "Maintaining Your HVAC System",
		category: "Energy Savings",
		id: "maintainhvac",
		image: "/images/resources/savings/maintain_hvac.jpg",
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
];

export function getSavingsByName(id) {
	return savings.find((event) => event.id === id);
}
