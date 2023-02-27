import { SyntheticEvent, useState } from "react"
import Link from "next/link";
import Image from 'next/image';

import styles from "@/styles/InstrumentForm.module.scss";
import ErrorMessage from "./ErrorMessage";

interface InstrumentFormProps {
	onSubmit: (studentNumber: string, instrumentNumber: string) => void;
	defaultInputs?: {
		studentNumber?: string;
		serialNumber?: string;
	}
}

export default function InstrumentForm(props: InstrumentFormProps) {

	const [studentNumber, setStudentNumber] = useState<string>(props.defaultInputs?.studentNumber || "");
	const [instrumentNumber, setInstrumentNumber] = useState<string>(props.defaultInputs?.serialNumber || "");

	const onSubmit = (e: SyntheticEvent) => {
		e.preventDefault();

		props.onSubmit(studentNumber, instrumentNumber);
	}

	return (
		<form className={styles.instrumentForm} onSubmit={onSubmit}>
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

			{/* Form Body */}
			<div className={styles.formBody}>
				{/* Inputs */}
				<div className={styles.formControls}>
					<div className={styles.formControl}>
						<label htmlFor="student-number">Student Number</label>
						<input
							type="text"
							name="student-number"
							id="student-number"
							value={studentNumber}
							onChange={(e) => setStudentNumber(e.currentTarget.value)}/>
					</div>
					<div className={styles.formControl}>
						<label htmlFor="instrument-number">Instrument Number</label>
						<input
							type="text"
							name="instrument-number"
							id="instrument-number"
							value={instrumentNumber}
							onChange={(e) => setInstrumentNumber(e.currentTarget.value)}/>
					</div>

					{ false &&
						<div className={styles.error}>
							<ErrorMessage message="Sorry, this instrument is already checked out" onClose={() => {}}/>
						</div>
					}
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