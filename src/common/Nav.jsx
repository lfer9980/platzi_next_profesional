import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Nav() {
	const [route, setRoute] = useState('');
	const pathname = usePathname();

	useEffect(() => {
		let url = pathname.split('/')[1];
		let firstLetter = url.charAt(0).toUpperCase();
		url = firstLetter + url.slice(1);
		setRoute(url);
	}, [pathname]);

	return (
		<nav className='bg-white shadow'>
			<div className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8'>
				<h2 className='text-3xl font-bold text-gray-900 capitalize'>{route}</h2>
			</div>
		</nav>
	);
}