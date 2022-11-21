import React, { useContext, createContext, useState, useEffect } from 'react';
import axios from 'axios';

type Props = React.PropsWithChildren<{}>;

interface GiftItemInterface {
			name: string;
			link?: string;
			quantity: number;
			description?: string;
}
interface GifItem extends GiftItemInterface{
	_id: string;
}

interface ContextInterface {
	data: {
		giftList: GiftItemInterface[]
	};
	getItems: () => void;
	selectItem: (input:{_id:string},cb?:(error:boolean)=>void) => void;
	addNewItem: (input: GiftItemInterface, cb?: (error: boolean)=>void) => void;
	updateNewItem: (_id:string,input:Partial<GiftItemInterface>,cb?: (error:boolean)=>void) => void;
	deleteItem: (input: { _id: string }, cb?:(error:boolean)=>void) => void;
}

const Context = createContext({} as ContextInterface);


export default function ContextProvider({ children }: Props) {
	const [giftList, setGiftList] = useState<GifItem[]>([]);
	const BASE_URI = process.env.REACT_APP_API_URI;
	function getItems() {
		axios.get(`${BASE_URI}/get-items`).then(res => {
			console.log('getItems()', res);
			if (res.status===200&&!res.data.error) {
				setGiftList(res.data.data);
			}
		})
	}
	
	function selectItem(input: { _id: string }, cb?:(error:boolean)=>void) {
		axios({
			method:'patch',
			url: `${BASE_URI}/select-item`,
			data: input,
		}).then(response => {
			console.log('select()', response);
			if (response.status && !response.data.error) {

				cb&&cb(false);
				getItems();
			} else {
				cb && cb(true);
			}
		}).catch(err => {
			console.log(err);
			cb&&cb(true);
		})

	}
	function addNewItem(input: GiftItemInterface, cb?:(error:boolean)=>void) {
		axios({
			method: 'post',
			url: `${BASE_URI}/add-item`,
			data: input,
		}).then(response => {
			console.log('addNewItem()', response);
			if (response.status === 200 && !response.data.error) {
			cb&&cb(false);
				getItems();
			} else {
				cb && cb(true);
			}
		}).catch(err => {
			console.log(err);
			cb&&cb(true);
		})
	}
	function updateNewItem(_id: string, input: Partial<GiftItemInterface>,cb?:(error:boolean)=>void) { 
			try { 
				axios({
					method: 'put',
					url: `${BASE_URI}/update-item`,
					data: {_id,...input}
				}).then(response => {
					console.log('updateNewItem', response);
					if (response.status === 200 && !response.data.error) {
						cb && cb(false);
						getItems();
					} else {
						cb && cb(true);
					}
				})
			} catch (e) {
				console.log(e);
				cb && cb(true);
			}
	};
	function deleteItem(input: { _id: string }, cb?: (error: boolean) => void) {
		try { 
			axios({
				method: 'delete',
				url: `${BASE_URI}/delete-item`,
				data:input,
			}).then((response) => {
				console.log('deleteItem()', response);
				if (response.status === 200 && !response.data.error) {
					cb && cb(false);
					getItems();
				} else {
					cb && cb(true);
				}
			})

		} catch (e) {
			console.log(e);
			cb && cb(true);
		}
		}

	useEffect(() => { 
		getItems();
		return ()=>{setGiftList([])}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	},[])

	return <Context.Provider value={{ data: { giftList }, getItems, selectItem, addNewItem, updateNewItem, deleteItem }}>
		{children}
	</Context.Provider>
}

export function useAppContext() {
	return useContext(Context);
}