import React from 'react';

type Props = React.PropsWithChildren<{
	width?: number;
	color?: string;
}>;

export default function RightIcon({ width=41, color="#FEAC74" }: Props) {
	const height = width * 44 / 41;
	return (
<svg width={width} height={height} viewBox="0 0 41 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_28_128)">
<path d="M34.5 13.6699C37.8333 15.5944 37.8333 20.4056 34.5 22.3301L12 35.3205C8.66667 37.245 4.5 34.8394 4.5 30.9904L4.5 5.00962C4.5 1.16062 8.66667 -1.24501 12 0.679492L34.5 13.6699Z" fill="#FEAC74"/>
</g>
<defs>
<filter id="filter0_d_28_128" x="0.5" y="0.00216675" width="40.5" height="43.9957" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_28_128"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_28_128" result="shape"/>
</filter>
</defs>
</svg>

)
}