import Link from 'next/link';
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
				<div>
					OTHER INFO
				</div>
			</div>
		</Link>
	)
}