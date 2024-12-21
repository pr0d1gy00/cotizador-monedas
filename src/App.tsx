import { useEffect } from 'react'
import CriptoSearchForm from './components/CriptoSearchForm'
import './index.css'
import { useCryptoStore } from './store/store'
import CryptoPRiceDisplay from './components/CryptoPRiceDisplay'

function App() {
  const fetchCrypto= useCryptoStore((state)=>state.fetchCryptos)

  useEffect(()=>{fetchCrypto()},[])
  return (
    <div className="container">
      <h1 className='app-titte'>Cotizador de <span>Criptomonedas</span></h1>
      <div className="content">
        <CriptoSearchForm/>
        <CryptoPRiceDisplay/>
      </div>
    </div>
  )
}

export default App
