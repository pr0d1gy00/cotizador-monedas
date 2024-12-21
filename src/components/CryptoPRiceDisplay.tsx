import { useMemo } from "react"
import { useCryptoStore } from "../store/store"
import Spinner from "./Spinner"
export default function CryptoPRiceDisplay() {
	const {result,loading}=useCryptoStore()
	const hasResult=useMemo(()=> !Object.values(result).includes(''),[result])
	console.log(hasResult)
	return (
		<div className="result-wrapper">
			{loading ? <Spinner/> : hasResult ? (
				<>
					<h2>Cotizacion</h2>
					<div className="result">
						<img src={`https://cryptocompare.com/${result.IMAGEURL}`} alt="image crypto moneda" />
						<div>
							<p>El precio es de: <span>{result.PRICE}</span></p>
							<p>Precio mas alto del dia: <span>{result.HIGHDAY}</span></p>
							<p>Precio mas bajo del día: <span>{result.LOWDAY}</span></p>
							<p>Variación de las ultimas 24 horas: <span>{result.CHANGEPCT24HOUR}</span></p>
							<p>última actualización <span>{result.LASTUPDATE}</span></p>
						</div>
					</div>
				</>
			):null}
			
		</div>
	)
}
