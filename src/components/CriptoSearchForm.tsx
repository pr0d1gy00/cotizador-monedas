import { ChangeEvent, FormEvent, useState } from "react";
import { currencies } from "../data";
import { useCryptoStore } from "../store/store";
import { Pair } from "../types";
import ErrorMessage from "./ErrorMessage";
export default function CriptoSearchForm() {

	const { cryptocurrencies,fetchData } = useCryptoStore();
	const [pair,setPair]=useState<Pair>({
		currency:'',
		cryptocurrency:''
	})

	const handleChange = (e:ChangeEvent<HTMLSelectElement>)=>{
		setPair({
			...pair,
			[e.target.name]:e.target.value
		})
	}
	const [error, setError]=useState('')


	const handleSubmit=(e:FormEvent<HTMLFormElement>)=>{
		e.preventDefault()
		if(Object.values(pair).includes('')){
			setError('Todos los cambios son obligatorios')
			return
		}
		setError('')
		fetchData(pair)
		//consultar api
	}
	return (
		<form className="form" onSubmit={handleSubmit}>
			{error && <ErrorMessage>{error}</ErrorMessage>}
			<div className="field">
				<label htmlFor="currency">Moneda:</label>
				<select name="currency" id="currency" onChange={handleChange} value={pair.currency}>
					<option value="">--seleccione--</option>
					{currencies.map((currency) => (
						<option
							key={currency.code}
							value={currency.code}
						>
							{currency.name}
						</option>
					))}
				</select>
			</div>
			<div className="field">
				<label htmlFor="cryptocurrency">Criptomoneda:</label>
				<select name="cryptocurrency" id="cryptocurrency" onChange={handleChange} value={pair.cryptocurrency}>
					<option value="">--seleccione--</option>
					{cryptocurrencies.map((cryptoCurrencies) => (
						<option
							value={cryptoCurrencies.CoinInfo.Name}
							key={cryptoCurrencies.CoinInfo.Name}
						>
							{cryptoCurrencies.CoinInfo.Name}
						</option>
					))}
				</select>
			</div>
			<input type="submit" value="cotizar" />
		</form>
	);
}
