const positions = [
	// {
	//   id: 1,
	//   title: 'Full Stack Developer',
	//   type: 'Summer Intern',
	//   location: 'Boulder / Denver / Remote',
	//   link: "/careers/fullstackdev"
	// },
	// {
	//   id: 2,
	//   title: 'Equity Partner / Chief Marketing Officer',
	//   type: 'Full-time',
	//   location: 'Boulder / Denver',
	//   link: "/careers/equitycmo"
	// },
	// {
	//   id: 3,
	//   title: 'Equity Partner / Programmer',
	//   type: 'Full-time',
	//   location: 'Boulder / Denver',
	//   link: "/careers/equityprogrammer"
	// }
];

export default function Careers() {
	return (
		<div className="bg-white overflow-hidden sm:rounded-md max-w-5xl md:max-w-4xl mx-auto py-6 px-4 sm:px-6 pb-48 sm:pb-80">
			<div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 max-w-7xl md:max-w-4xl mx-auto py-5 sm:px-6">
				<h3 className="text-2xl leading-6 font-semibold text-gray-500">
					Job Postings
				</h3>
				<div className="mt-3 sm:mt-4">
					<p className="text-md leading-6 font-medium text-gray-900 mt-6">
						Sorry, there are no job postings at this time. We'll be hiring again
						soon, so please check again later.
					</p>
				</div>
			</div>
			<ul className="divide-y divide-gray-200">
				{positions.map((position) => (
					<li key={position.id}>
						<NavLink
							to={position.link}
							type="button"
							className="block hover:bg-gray-50"
						>
							<div className="px-4 py-4 sm:px-6">
								<div className="flex items-center justify-between">
									<p className="text-md font-bold text-blue-600 truncate">
										{position.title}
									</p>
									<div className="ml-2 flex-shrink-0 flex">
										<p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
											{position.type}
										</p>
									</div>
								</div>
								<div className="mt-2 sm:flex sm:justify-between">
									<div className="sm:flex">
										<p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
											<LocationMarkerIcon
												className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
												aria-hidden="true"
											/>
											{position.location}
										</p>
									</div>
								</div>
							</div>
						</NavLink>
					</li>
				))}
			</ul>
		</div>
	);
}
