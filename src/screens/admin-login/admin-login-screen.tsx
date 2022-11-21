import Button from "../../components/button/Button";
import Input from "../../components/input/input";
import ScreenWrapper from "../../components/screen-wrapper/screen-wrapper";
import styles from '../../styles/form.module.scss';

export default function AdminLoginScreen() {
	
	return (<ScreenWrapper className={styles.wrapper}>
		<h1>Login</h1>
		<Input label="Username"  />
		<Input label="Password" />
		<div className={styles.bottom}>
			<Button big>
				<p>Login</p>
			</Button>
		</div>
	</ScreenWrapper>)
}