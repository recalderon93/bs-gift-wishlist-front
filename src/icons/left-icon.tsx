import React from 'react';

type Props = React.PropsWithChildren<{
	width?: number;
	color?: string;
}>;

export default function LeftIcon({ width=41, color="#FEAC74" }: Props) {
	const height = width * 44 / 41;
	return (
<svg width={width} height={height} viewBox="0 0 41 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_28_127)">
				<path d="M6.5 22.3301C3.16667 20.4056 3.16667 15.5944 6.5 13.6699L29 0.679494C32.3333 -1.24501 36.5 1.16062 36.5 5.00962L36.5 30.9904C36.5 34.8394 32.3333 37.245 29 35.3205L6.5 22.3301Z" fill={color} />
</g>
<defs>
<filter id="filter0_d_28_127" x="0" y="0.00216675" width="40.5" height="43.9957" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_28_127"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_28_127" result="shape"/>
</filter>
</defs>
</svg>
)
}