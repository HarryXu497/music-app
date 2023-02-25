import { GetServerSideProps } from 'next'
import Head from 'next/head'
import InstrumentDatabase from '@/database/database';
import Instrument from '../../database/instrument.model';

interface CatalogueProps {
	instruments: Instrument[];
}

export const getServerSideProps: GetServerSideProps<CatalogueProps> = async (context) => {
	
	const instruments = InstrumentDatabase.getAll();

	return {
		props: {
			instruments
		}
	}
}


export default function Catalogue({ instruments }: CatalogueProps) {

	const onSubmit = (studentNumber: string, instrumentNumber: string) => {
		console.log(studentNumber, instrumentNumber)
	}

	return (
		<>
			<Head>
				<title>Catalogue</title>
			</Head>

			{/* Catalogue */}

			
		</>
	)
}
