import styles from '../../styles/screen-wrapper.module.scss';

type Props = React.PropsWithChildren<{
	children: React.ReactNode
	className: string;
}>;

export default function ScreenWrapper({children, className}:Props) {
	return <div className={`${styles.container}`}>
		<div className={`${styles.wrapper} ${className}`}>{children}</div>
	</div>
}