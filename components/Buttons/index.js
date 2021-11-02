import Link from "next/link";
import styles from "./buttons.module.scss";
const index = ({ children, to, submit, linkable, secondary }) => {
	return linkable ? (
		<Link href={to}>
			<a className={`${styles.button} ${secondary && styles.secondary}`}>
				{children}
			</a>
		</Link>
	) : submit ? (
		<button
			type="submit"
			className={`${styles.button} ${secondary && styles.secondary}`}
		>
			{children}
		</button>
	) : (
		<button
			type="button"
			className={`${styles.button} ${secondary && styles.secondary}`}
		>
			{children}
		</button>
	);
};

export default index;
