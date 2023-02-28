import { Record } from "pocketbase";

export default interface Instrument extends Record {
	name: string
	instrumentNumber: number
	serialNumber: string;
	image?: string;
}