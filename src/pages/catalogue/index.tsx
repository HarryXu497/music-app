import { GetServerSideProps } from 'next'
import Head from 'next/head'
import PocketBase from 'pocketbase';
import InstrumentDatabase from '@/database/database';
import Instrument from '../../database/instrument.model';
import InstrumentCatalogue from '../../components/InstrumentCatalogue';

interface CatalogueProps {
	instruments: Instrument[];
}

const pb = new PocketBase('http://127.0.0.1:8090');

export const getServerSideProps: GetServerSideProps<CatalogueProps> = async (context) => {
	
	const instruments = await pb.collection("instruments").getList<Instrument>(1, 20)

	return {
		props: {
			instruments: instruments.items.map(o => ({ ...o }))
		}
	}
}


export default function Catalogue({ instruments }: CatalogueProps) {
	return (
		<>
			<Head>
				<title>Catalogue</title>
			</Head>

			{/* Catalogue */}
			<InstrumentCatalogue instruments={instruments}/>
		</>
	)
}
