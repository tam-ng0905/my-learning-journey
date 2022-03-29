import { getSavingsByName } from "../../data/resources/savings";
import { Fragment } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import {
	PlusCircleIcon,
	MinusCircleIcon,
	ExclamationIcon,
} from "@heroicons/react/outline";
import NewsletterSignUp from "../../layout/newslettersignup";

export default function SavingsDetail() {
	const router = useRouter();

	const savingsName = router.query.items; //furnanceace
	const savings = getSavingsByName(savingsName);
	// console.log(savings);

	// if (!event) {
	//     return (
	//         <ErrorAlert>
	//             <p>No savings found!</p>;
	//         </ErrorAlert>
	//     )
	// }

	return (
		<div className="relative shadow-inner py-4 md:py-16 bg-white overflow-hidden">
			<div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
				<div
					className="relative h-full text-lg max-w-prose mx-auto"
					aria-hidden="true"
				>
					<svg
						className="absolute top-12 left-full transform translate-x-32"
						width={404}
						height={384}
						fill="none"
						viewBox="0 0 404 384"
					>
						<defs>
							<pattern
								id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
								x={0}
								y={0}
								width={20}
								height={20}
								patternUnits="userSpaceOnUse"
							>
								<rect
									x={0}
									y={0}
									width={4}
									height={4}
									className="text-gray-200"
									fill="currentColor"
								/>
							</pattern>
						</defs>
						<rect
							width={404}
							height={384}
							fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
						/>
					</svg>
					<svg
						className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
						width={404}
						height={384}
						fill="none"
						viewBox="0 0 404 384"
					>
						<defs>
							<pattern
								id="f210dbf6-a58d-4871-961e-36d5016a0f49"
								x={0}
								y={0}
								width={20}
								height={20}
								patternUnits="userSpaceOnUse"
							>
								<rect
									x={0}
									y={0}
									width={4}
									height={4}
									className="text-gray-200"
									fill="currentColor"
								/>
							</pattern>
						</defs>
						<rect
							width={404}
							height={384}
							fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
						/>
					</svg>
					<svg
						className="absolute bottom-12 left-full transform translate-x-32"
						width={404}
						height={384}
						fill="none"
						viewBox="0 0 404 384"
					>
						<defs>
							<pattern
								id="d3eb07ae-5182-43e6-857d-35c643af9034"
								x={0}
								y={0}
								width={20}
								height={20}
								patternUnits="userSpaceOnUse"
							>
								<rect
									x={0}
									y={0}
									width={4}
									height={4}
									className="text-gray-200"
									fill="currentColor"
								/>
							</pattern>
						</defs>
						<rect
							width={404}
							height={384}
							fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
						/>
					</svg>
				</div>
			</div>
			<div className="relative px-4 sm:px-6 lg:px-8">
				<div className="text-lg max-w-prose mx-auto">
					<h1>
						<span className="block text-base text-center text-blue-500 font-semibold tracking-wide uppercase">
							{savings.category}
						</span>
						<span className="my-2 mb-4 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
							{savings.name}
						</span>
					</h1>
					<figure>
						<Image
							src={savings.image}
							alt={savings.imageDescription}
							width={1024}
							height={512}
						/>
					</figure>
				</div>
				<div className="mt-8 prose prose-blue prose-lg text-gray-600 max-w-prose mx-auto">
					<h3 className="mt-4 mb-2 text-xl md:text-2xl font-semibold text-gray-800">
						{savings.heading_one}
					</h3>
					<p>{savings.paragraph_one}</p>
					<h3 className="mt-4 mb-2 text-xl md:text-2xl font-semibold text-gray-800">
						{savings.heading_two}
					</h3>
					<p>{savings.paragraph_two}</p>
					{/* Add Image Here */}
					<h3 className="mt-4 mb-2 text-xl md:text-2xl font-semibold text-gray-800">
						{savings.heading_three}
					</h3>
					<p>{savings.paragraph_three}</p>
					<h3 className="mt-4 mb-2 text-xl md:text-2xl font-semibold text-gray-800">
						{savings.heading_four}
					</h3>
					<p>{savings.paragraph_four}</p>
					<h3 className="mt-4 mb-2 text-xl md:text-2xl font-semibold text-gray-800">
						{savings.heading_five}
					</h3>
					<p>{savings.paragraph_five}</p>

					{/* <CallToAction /> */}
					<NewsletterSignUp />
				</div>
			</div>
		</div>
	);
}

//TODO: get the staticProps for the item page
