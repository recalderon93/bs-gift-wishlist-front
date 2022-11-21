import useCountdown from "../../hooks/useCountdown"
import { EVENT_DATE } from "../../constants";
import styles from '../../styles/counter.module.scss';
import CloudIcon from "../../icons/cloud-icon";

export default function Counter() {
	const { days, hours, minutes, seconds, isExpired} = useCountdown(EVENT_DATE);
	

	if (isExpired) {
		return null;
	}

	return <div className={styles.wrapper}>
		<div className={styles.label}>
				<p>
					{`${days} D : ${hours} h : ${minutes} m : ${seconds} s`}
				</p>
		</div>
		<CloudIcon width={350} />
	</div>

}