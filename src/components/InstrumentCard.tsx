import Link from 'next/link';
import Image from 'next/image';
import Instrument from '../database/instrument.model';
import styles from "@/styles/InstrumentCard.module.scss";

interface InstrumentCardProps {
	instrument: Instrument;
}


export default function InstrumentCard({ instrument }: InstrumentCardProps) {
	return (
		<Link href={{
				pathname: "/",
				query: { serialNumber: instrument.serialNumber }
			}} 
			style={{ color: 'inherit', textDecoration: 'inherit'}}
		>
			<div className={styles.instrumentCard}>
				<div className={styles.header}>
					<h2>{ instrument.name.length > 9 ? instrument.name.substring(0, 10) : instrument.name } No.{ instrument.instrumentNumber }</h2>
					<p>{ instrument.serialNumber }</p>
				</div>
				<div className={styles.imageContainer}>
					{ instrument.image && <Image
						src={instrument.image}
						alt={`Image of ${instrument.name}`}
						fill
						style={{
							objectFit: 'cover',
						}}
						quality={75}>

					</Image> }
				</div>
			</div>
		</Link>
	)
}