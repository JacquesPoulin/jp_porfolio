import Hero from '@/components/Hero';
import { FloatingNav } from '@/components/ui/FloatingNav';
import Grid from '@/components/Grid';
import { FaHome } from 'react-icons/fa';


export default function Home() {
	return (
		<main className='relative flex justify-center items-center flex-col overflow-hidden mx-auto bg-black-100  px-5 sm:px-10'>
			<div className='max-w-7xl w-full'>
				<FloatingNav
					navItems={[{ name: 'Home', link: '/', icon: <FaHome/> }]}
				/>
				<Hero />
				<Grid/>
			</div>
		</main>
	);
}
