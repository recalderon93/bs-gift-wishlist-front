import styles from '../../styles/screen-wrapper.module.scss';

type Props = React.PropsWithChildren<{
	children: React.ReactNode
}>;

export default function ScreenWrapper({children}:Props) {
	return <div className={styles.container}>
		<div className={styles.wrapper}>{children}</div>
	</div>
}