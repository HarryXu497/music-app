import { GetServerSideProps } from 'next'
import Head from 'next/head'
import PocketBase, { ClientResponseError, ListResult } from 'pocketbase';
import Instrument from '../../database/instrument.model';
import InstrumentCatalogue from '../../components/InstrumentCatalogue';

interface CatalogueProps {
	instruments?: Instrument[];
	error?: ClientResponseError;
}

const pb = new PocketBase('http://127.0.0.1:8090');

export const getServerSideProps: GetServerSideProps<CatalogueProps> = async (context) => {

	const instrumentsCollection = pb.collection("instruments");
	
	let instruments: ListResult<Instrument>;

	try {	
		instruments = await instrumentsCollection.getList<Instrument>(1, 20);
	} catch (error: any) {
		if (error instanceof ClientResponseError) {
			return {
				props: {
					error: { ...error.originalError }
				}
			}
		}
		return {
			props: {
				error: true
			}
		}
	}

	return {
		props: {
			instruments: instruments.items.map(o => ({
				...o,
				image: o.image ? pb.getFileUrl(o, o.image) : o.image,
			})) as Instrument[]
		}
	}
}


export default function Catalogue({ instruments, error }: CatalogueProps) {

	return (
		<>
			<Head>
				<title>Catalogue</title>
			</Head>

			{/* Catalogue */}
			<InstrumentCatalogue instruments={instruments} error={error}/> 
		</>
	)
}
