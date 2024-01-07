import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import Spinner from './components/Spinner'
import ImagenCripto from './img/imagen-criptos.png'
import Formulario from './components/Formulario'
import Resultado from './components/Resultado'


//Styled components 

//imagen 
const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin:100px auto 0 auto;
  display:block;
`
//cobntenedor
const Contenedor = styled.div`
  max-width:900px;
  margin: 0 auto;
  width:90%;
  @media(min-width: 992px){
    display: grid;
    grid-template-columns: repeat(2,1fr);
    column-gap: 2rem;
  }
`
//H1
const Heading = styled.h1`
  font-family:'lato', sans-serif;
  color:#FFF;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size:34px;
  //agregar barra azul
  &::after{
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
    margin: 10px auto 0 auto;
  }
`
function App() {
  const [monedas,setMonedas] = useState({})
  const [resultado,setResultado] = useState({})
  const [cargando,setCargando] = useState(false)


  //useEffect
  useEffect(()=>{
    //prevenimos que no ejecute a menos que no este vacio
    if(Object.keys(monedas).length>0){
      //consumiento API
      const cotizarCripto = async ()=>{
        setCargando(true)
        setResultado({})
        const {moneda,criptomoneda}=monedas//Object Destructuring
        const url =`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()//transformando a JSON
        setResultado(resultado.DISPLAY[criptomoneda][moneda])//accediendo a los datos de conversion
        setCargando(false)

      }
      cotizarCripto()
    }
  },[monedas])
  return (
    <Contenedor>
      <Imagen src={ImagenCripto} alt='imagen cripto monedas'/>
      <div>
        <Heading>Cotiza Criptomonedas al instante</Heading>
        <Formulario setMonedas={setMonedas}/>
        {cargando&& <Spinner/>}
        {resultado.PRICE && <Resultado resultado={resultado}/>}
      </div>
      

    </Contenedor>
  )
}

export default App
