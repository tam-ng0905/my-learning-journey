import React from "react";

const posts = [
	// {
	//     title: 'Boost your conversion rate',
	//     href: '#',
	//     description:
	//         'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
	//     date: 'Mar 16, 2020',
	//     datetime: '2020-03-16',
	// },
	// {
	//     title: 'How to use search engine optimization to drive sales',
	//     href: '#',
	//     description: 'Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque.',
	//     date: 'Mar 10, 2020',
	//     datetime: '2020-03-10',
	// },
	// {
	//     title: 'Improve your customer experience',
	//     href: '#',
	//     description:
	//         'Cupiditate maiores ullam eveniet adipisci in doloribus nulla minus. Voluptas iusto libero adipisci rem et corporis.',
	//     date: 'Feb 12, 2020',
	//     datetime: '2020-02-12',
	// },
	// {
	//     title: 'Writing effective landing page copy',
	//     href: '#',
	//     description:
	//         'Ipsum voluptates quia doloremque culpa qui eius. Id qui id officia molestias quaerat deleniti. Qui facere numquam autem libero quae cupiditate asperiores vitae cupiditate. Cumque id deleniti explicabo.',
	//     date: 'Jan 29, 2020',
	//     datetime: '2020-01-29',
	// },
];

export default function Press() {
	return (
		<div className="bg-white overflow-hidden sm:rounded-md max-w-7xl md:max-w-5xl mx-auto py-6 px-4 sm:px-6 pb-48 sm:pb-80">
			<div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 max-w-7xl md:max-w-4xl mx-auto py-5 sm:px-6">
				<div>
					<h2 className="text-2xl leading-6 font-semibold text-gray-500">
						Press
					</h2>
					<div className="mt-3 sm:mt-4">
						<p className="text-xl text-gray-500">
							Get monthly articles in your inbox for HVAC tips and advice.{" "}
							<button>
								<a
									className="w-full bg-blue-600 ml-10 px-4 py-2 border border-transparent rounded-md flex items-center justify-center text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:w-auto sm:inline-flex"
									href="http://eepurl.com/hRiX11"
								>
									Sign Up
								</a>
							</button>
						</p>
					</div>
				</div>
				<div className="mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
					{/* Temporary */}
					Please check back later when we have new articles
					{/* Temporary */}
					{posts.map((post) => (
						<div key={post.title}>
							<p className="text-sm text-gray-500">
								<time dateTime={post.datetime}>{post.date}</time>
							</p>
							<a href="#" className="mt-2 block">
								<p className="text-xl font-semibold text-gray-900">
									{post.title}
								</p>
								<p className="mt-3 text-base text-gray-500">
									{post.description}
								</p>
							</a>
							<div className="mt-3">
								<a
									href={post.href}
									className="text-base font-semibold text-blue-600 hover:text-blue-500"
								>
									Read full story
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
