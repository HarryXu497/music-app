import styles from "@/styles/ErrorMessage.module.scss";

interface ErrorMessageProps {
	onClose: () => void;
	message: string;
}

export default function ErrorMessage({ message, onClose }: ErrorMessageProps) {


	return (
		<div className={styles.errorMessage} onClick={onClose}>
			<p>{ message }</p>
		</div>
	)
}