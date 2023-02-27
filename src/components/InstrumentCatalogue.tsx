import Instrument from "@/database/instrument.model";
import InstrumentCard from "./InstrumentCard";
import styles from "@/styles/InstrumentCatalogue.module.scss";
import Image from "next/image";


interface InstrumentCatalogueProps {
	instruments: Instrument[];
}

export default function InstrumentCatalogue({ instruments }: InstrumentCatalogueProps) {
	return (
		<div className={styles.instrumentCatalogue}>
			{/* RHHS Music Logo */}
			<div className={styles.logo}>
				<Image
					src="/logo.jpg"
					width={144}
					height={144}
					alt="RHHS Music Logo"
					priority>
				</Image>
			</div>

			<div className={styles.catalogue}>
				<div className={styles.searchBar}>
					<label htmlFor="search">Search</label>
					<input type="text" id="search"/>
				</div>
				<div className={styles.instrumentGrid}>
					{ instruments.map(instrument => <InstrumentCard
						key={instrument.serialNumber}
						instrument={instrument}/>)}
				</div>
			</div>
		</div>
	)
}