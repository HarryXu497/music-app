import Instrument from '../database/instrument.model';

interface InstrumentCardProps {
	instrument: Instrument;
}


export default function InstrumentCard({ instrument }: InstrumentCardProps) {
	return (
		<div>
			<h1>{ instrument.name } No.{ instrument.instrumentNumber }</h1>
			<h2>{ instrument.serialNumber }</h2>
		</div>
	)
}