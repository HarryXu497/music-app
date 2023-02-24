import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Layout.module.scss'
import bg from "../../public/bg.jpg"
import { PropsWithChildren } from 'react'

const inter = Inter({
	subsets: ['latin'],
	weight: ["100", "300", "400", "700"]
})



export default function Layout(props: PropsWithChildren<{}>) {
	return (
		<>
			<div className={styles.backgroundImage}>
				<Image
					src={bg}
					alt="Photo by Lucia Macedo on Unsplash"
					fill
					style={{
						objectFit: 'cover'
					}}
					quality={75}>
				</Image>
			</div>

			<main className={`${inter.className} ${styles.overlay}`}>
				{ props.children }
			</main>
		</>
	)
}