import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Layout.module.scss'
import bg from "../../public/bg.jpg"
import { PropsWithChildren } from 'react'
import ErrorBoundary from './ErrorBoundary'

const inter = Inter({
	subsets: ['latin'],
	weight: ["100", "300", "400", "700"]
})



export default function Layout(props: PropsWithChildren<{}>) {
	return (
		<>
			<div className={`${styles.backgroundImage} ${styles.overlay}`}>
				<Image
					src={bg}
					alt="Photo by Lucia Macedo on Unsplash"
					fill
					style={{
						objectFit: 'cover',
						zIndex: '-2'
					}}
					quality={75}>
				</Image>
			</div>

			<main className={`${styles.main} ${inter.className}`}>
				<ErrorBoundary>
					{ props.children }
				</ErrorBoundary>
			</main>
		</>
	)
}