import { useEffect, useState } from 'react';
import getTimerValues from '../utils/getTimerValues';

interface TimerDateInterface {
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
	isExpired: boolean;
}

export default function useCountdown(input: Date) {
	const [timerData, setTimerDate] = useState<TimerDateInterface>({
		days:0, hours:0, minutes:0, seconds:0, isExpired:false
	} as TimerDateInterface);

	useEffect(() => {
		let timer = setInterval(() => {
			const data = getTimerValues(input);
			setTimerDate(data);
		 },1000)
		return () => {
				clearInterval(timer);
		}

	 },[input])

	return timerData;
}