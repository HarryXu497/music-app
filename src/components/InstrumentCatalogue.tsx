import Instrument from "@/database/instrument.model";
import InstrumentCard from "./InstrumentCard";


interface InstrumentCatalogueProps {
	instruments: Instrument[];
}

export default function InstrumentCatalogue({ instruments }: InstrumentCatalogueProps) {
	return (
		<div>
			{ instruments.map(instrument => <InstrumentCard
				key={instrument.serialNumber}
				instrument={instrument}/>)}
		</div>
	)
}