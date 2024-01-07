import styled from "@emotion/styled"

//styled
const Contenedor = styled.div`
    color: #FFF;
    font-family: 'Lato',sans-serif;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;

`

const Texto = styled.p`
    font-size: 18px;
    span{
        font-weight: 700;
    }
`

const Precio = styled.p`
     font-size:24px;
    span{
        font-weight: 700;
    }
`
const Imagen = styled.img`
    display: block;
    width: 100px;

`

const Resultado = ({resultado}) => {
    const {PRICE,HIGHDAY,LOWDAY,CHANGEPCT24HOUR,IMAGEURL,LASTUPDATE} = resultado
  return (
    <Contenedor>
      <Imagen 
        src={`https://cryptocompare.com/${IMAGEURL}`} 
        alt="Imagen Cripto" 
        />
      <div>
        <Precio>El precio es de: <span>{PRICE}</span></Precio>
        <Texto>Precio mas alto del dia: <span>{HIGHDAY}</span></Texto>
        <Texto>Precio mas bajo del dia: <span>{LOWDAY}</span></Texto>
        <Texto>Variación ultimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
        <Texto>Ultima actualizacion: <span>{LASTUPDATE}</span></Texto>
      </div>
    </Contenedor>
  )
}

export default Resultado
