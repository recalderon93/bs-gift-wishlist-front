export default function getTimerValues(input: Date) {
	const NOW = Date.now();
	const countDown = input.getTime() - NOW;

	if (countDown > 0) {
		const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
		const hours = Math.floor(
			(countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			);
			const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
			const seconds = Math.floor((countDown % (1000 * 60)) / 1000);
			
			return {days, hours, minutes, seconds, isExpired:false};
	}

		return {days:0,hours:0, minutes: 0, seconds: 0, isExpired:true}
}