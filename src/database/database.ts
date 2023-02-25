import Instrument from './instrument.model';

class InstrumentService {

	private instruments: Instrument[];

	constructor() {
		this.instruments = [
			{
				name: "Flute",
				instrumentNumber: 12,
				serialNumber: "05538663"
			},
			{
				name: "Trumpet",
				instrumentNumber: 2,
				serialNumber: "77346933"
			},
			{
				name: "Clarinet",
				instrumentNumber: 4,
				serialNumber: "28735484"
			},
			{
				name: "Trombone",
				instrumentNumber: 5,
				serialNumber: "09752424"
			}
		]
	}

	
	getInstrumentById(id: number) {
		return this.instruments[id];
	}

	getInstrumentBySerialNumber(serialNumber: string) {
		return this.instruments.find(instrument => instrument.serialNumber === serialNumber);
	}

	getByName(name: string) {
		return this.instruments.filter(instrument => instrument.name === name);
	}

	getAll() {
		return [...this.instruments];
	}
}



const InstrumentDatabase = new InstrumentService();

export default InstrumentDatabase;