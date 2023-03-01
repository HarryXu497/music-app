import Instrument from "@/database/instrument.model";
import InstrumentCard from "./InstrumentCard";
import styles from "@/styles/InstrumentCatalogue.module.scss";
import Image from "next/image";
import { ClientResponseError } from "pocketbase";
import { useState } from 'react';


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

	const [input, setInput] = useState("");

	const filterFunction = (instrument: Instrument) => {
		const inputLowercase = input.toLowerCase();
		const fullName = `${instrument.name} No.${instrument.instrumentNumber}`.toLowerCase();

		return (
			fullName.toLowerCase().startsWith(inputLowercase) ||
			instrument.serialNumber.toLowerCase().startsWith(inputLowercase)
		);
	}

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
			
			{/* Catalogue */}
			<div className={styles.catalogue}>
				<div className={styles.searchBar}>
					<button>Search</button>
					<input type="text" id="search" value={input} onChange={e => setInput(e.currentTarget.value)}/>
				</div>
				{ instruments && <div className={styles.instrumentGrid}>
					{ instruments.filter(filterFunction)
						.map(instrument => <InstrumentCard
						key={instrument.serialNumber}
						instrument={instrument}/>)}
				</div>}
				{ error && <Error/> }
			</div>
		</div>
	)
}