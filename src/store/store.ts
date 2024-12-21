import { create } from "zustand";
import { Cryptocurrecy, CryptoPrice, Pair } from '../types/index'
import { devtools } from "zustand/middleware";
import { fetchCurrentCryptoPrice, getCrypto } from "../services/CryptoServices";


type CryptoStore ={
	cryptocurrencies:Cryptocurrecy //array
	result:CryptoPrice
	loading:boolean
	fetchCryptos: ()=>Promise<void>
	fetchData: (pair:Pair)=>Promise<void>
}

export const useCryptoStore=create<CryptoStore>()(devtools((set)=>(
	{
	loading:false,
	result:{
		IMAGEURL:'',
		PRICE:'',
		HIGHDAY:'',
		LOWDAY:'',
		CHANGEPCT24HOUR:'',
		LASTUPDATE:''
	},
	cryptocurrencies: [],
	fetchCryptos:async ()=>{
		const cryptocurrencies = await getCrypto()
		console.log(cryptocurrencies)
		set(()=>({
			cryptocurrencies
		}))
	},
	fetchData: async(pair)=>{
		set(()=>({
			loading:true
		}))
		const result = await fetchCurrentCryptoPrice(pair)
		set(()=>({
			result,
			loading:false
		}))
	}
})))