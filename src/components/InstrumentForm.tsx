import { SyntheticEvent } from "react"
import Link from "next/link";
import Image from 'next/image';

import styles from "@/styles/InstrumentForm.module.scss";

interface InstrumentFormProps {
	onSubmit: (e: SyntheticEvent) => void;
}

export default function InstrumentForm(props: InstrumentFormProps) {
	return (
		<form className={styles.instrumentForm}>
			{/* RHHS Music Logo */}
			<div className={styles.logo}>
				<Image
					src="/logo.jpg"
					width={144}
					height={144}
					alt="RHHS Music Logo">
				</Image>
			</div>

			{/* Form Body */}
			<div className={styles.formBody}>
				{/* Inputs */}
				<div className={styles.formControls}>
					<div className={styles.formControl}>
						<label htmlFor="student-number">Student Number</label>
						<input type="text" name="student-number" id="student-number"/>
					</div>
					<div className={styles.formControl}>
						<label htmlFor="instrument-number">Instrument Number</label>
						<input type="text" name="instrument-number" id="instrument-number"/>
					</div>
				</div>

				{/* Buttons */}
				<div className={styles.buttonGroup}>
					<Link
						className={styles.catalogueButton}
						href="/catalogue">
							Search in our catalogue
					</Link>
					<button type="submit" className={styles.submitButton}>
						Submit
					</button>
				</div>
			</div>
		</form>
	)
}