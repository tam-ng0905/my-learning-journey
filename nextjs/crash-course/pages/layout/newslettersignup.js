import Link from "next/link";

export default function NewsletterSignUp() {
	return (
		<div className="bg-white py-10 sm:py-16">
			<div className="relative">
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
									<span className="underline">
										<Link href="http://eepurl.com/hRiX11">here</Link>
									</span>
									!
								</h2>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
