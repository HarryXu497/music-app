import Instrument from "@/database/instrument.model";
import InstrumentCard from "./InstrumentCard";
import styles from "@/styles/InstrumentCatalogue.module.scss";
import Image from "next/image";
import { ClientResponseError } from "pocketbase";


interface InstrumentCatalogueProps {
	instruments?: Instrument[];
	error?: ClientResponseError;
}

const Error = () => (
	<div className={styles.error}>
		<p>Uh oh... something went wrong</p>
	</div>
)

export default function InstrumentCatalogue({ instruments, error }: InstrumentCatalogueProps) {

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
				{ instruments && <div className={styles.instrumentGrid}>
					{ instruments.map(instrument => <InstrumentCard
						key={instrument.serialNumber}
						instrument={instrument}/>)}
				</div>}
				{ error && <Error/> }
			</div>
		</div>
	)
}