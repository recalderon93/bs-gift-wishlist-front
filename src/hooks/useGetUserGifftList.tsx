interface GetUserGiftList{
	error: boolean;
	data: Array<{
		id: string;
		item_name: string;
		href: string | null;
		quantity: number;
		description: string | null;
	}>;
};

export default  function useGetUserGiftList():GetUserGiftList {
	
	
	return {
		error: false,
		data: [
			{
				id: "sd-sd",
				description: "Sport Shoes",
				item_name: "Gift item Name",
				href: "https://xvideos.com",
				quantity:2
			},

			{
				id: "sd-sd1",
				description: "Sport Shoes",
				item_name: "Gift item Name",
				href: "https://xvideos.com",
				quantity:2
			},
			{
				id: "sd-sd2",
				description: "Sport Shoes",
				item_name: "Gift item Name",
				href: "https://xvideos.com",
				quantity:2
			},
			{
				id: "sd-sd3",
				description: "Sport Shoes",
				item_name: "Gift item Name",
				href: "https://xvideos.com",
				quantity:2
			},
			{
				id: "sd-sd4",
				description: "Sport Shoes",
				item_name: "Gift item Name",
				href: "https://xvideos.com",
				quantity:2
			},
			{
				id: "sd-sd5",
				description: "Sport Shoes",
				item_name: "Gift item Name",
				href: "https://xvideos.com",
				quantity:2
			},
			{
				id: "sd-sd6",
				description: "Sport Shoes",
				item_name: "Gift item Name",
				href: "https://xvideos.com",
				quantity:2
			},
			{
				id: "sd-sd47",
				description: "Sport Shoes",
				item_name: "Gift item Name",
				href: "https://xvideos.com",
				quantity:2
			},
						{
				id: "sd-sd48",
				description: "Sport Shoes",
				item_name: "Gift item Name",
				href: "https://xvideos.com",
				quantity:2
			},
									{
				id: "sd-sd48",
				description: "Sport Shoes",
				item_name: "Gift item Name",
				href: "https://xvideos.com",
				quantity:2
			},
						{
				id: "sd-sd47d",
				description: "Sport Shoes",
				item_name: "Gift item Name",
				href: "https://xvideos.com",
				quantity:2
			},
		]
	}
}