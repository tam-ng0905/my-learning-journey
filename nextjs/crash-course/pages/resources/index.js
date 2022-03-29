import useRouter from "next/router";
import Link from "next/link";
import System from "./system";
const buttons = [
	{
		text: "System Type & Info",
		urlId: "system",
	},
	{
		text: "Sustainability",
		urlId: "sustainability",
	},
	{
		text: "Energy Savings",
		urlId: "energysavings",
	},
];
export default function Resources() {
	return (
		<div className="bg-white">
			<div className="max-w-7xl mx-auto pt-8 md:pt-16 pb-6 px-4 sm:py-24 sm:pb-8 sm:px-6 lg:px-8">
				<div className="text-center">
					<h2 className="text-base font-semibold text-blue-500 tracking-wide uppercase">
						Resources
					</h2>
					<p className="mt-2 md:text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
						Helping You Make Informed Decisions
					</p>
					<p className="max-w-xl mt-2 mx-auto md:text-xl text-gray-500">
						Understand different HVAC types and see what's ahead for a
						sustainable future in the industry.
					</p>
				</div>
			</div>

			{/* Group of buttons */}
			<div className="mx-auto pb-3">
				<div className="text-center">
					{buttons.map((button) => (
						<>
							<Link href={`/resources/${button.urlId}`}>
								<a className="inline-flex items-center px-4 py-2 mx-5 mb-3 border border-gray-300 shadow-sm text-sm font-medium rounded-md hover:bg-gray-100">
									{button.text}
								</a>
							</Link>
						</>
					))}
				</div>
			</div>
		</div>
	);
}
