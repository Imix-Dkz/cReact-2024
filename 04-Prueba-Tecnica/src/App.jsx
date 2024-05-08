import { useEffect, useState  } from "react"
import './App.css'

const apiA_Url = 'https://catfact.ninja/fact'; //ENDPOINT_RANDOM_FACT_CAT, usar comilla simple
/* // apiA_URL, arroja un respuesta como esta
    {
        "fact": "The first commercially cloned pet was a cat named \"Little Nicky.\" He cost his owner $50,000, making him one of the most expensive cats ever.",
        "length": 140
    }
*/
//const apiB_Url = "https://cataas.com/cat/says/hello";, 
//Como se requiere el uso de una imagen, se adaptará la URL para su ENDPOINT_IMG_URL 
//const apiB_Url = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true` 
const apiB_Url_PREFIX = 'https://cataas.com';
const apiB_SAYS = '/cat/says/';
//const apiB_SAYS_END = '?size=50&color=red&json=true';
const apiB_SAYS_END = '?width=275&height=275&fontSize=20&fontColor=%23FFF';
//const apiB_SAYS_END = '?width=250&height=250&fontSize=20&fontColor=%23FFF&json=true';
const apiA_ID = 'https://cataas.com/cat/'; //xcGhWt6ZIjhuOs4d


export function App(){
    //const [fact, setFact] = useState('lorem ipsum cat fact whatever') //Inicializado
    const [fact, setFact] = useState()
    const [imgUrl, setImgUrl] = useState() //La URL de la imagen ya no funciona igual que antes
    //const [imgId, setImgId] = useState()

    //Se aisla la consulta a la API, pára optimización de código
    const getRandomFact = () => {
        fetch(apiA_Url) //ENDPOINT_RANDOM_FACT_CAT
            .then(response => response.json())
            //.then(data => setFact(data.fact)) //Se cambia para obtener la primera palabra
            .then(data => {
                const {fact} = data;
                setFact(fact);
            })
    }

    //La forma adecuada de hacer un FETCHING de datos es con un useEffect, para evitar un renderizado infinito
    useEffect(getRandomFact, []) 
    // "[]", Dependencias, IMPORTANTE declarar, si se usa [], será sólo la primera vez

    //Para recuperar la imagen SÓLO con una solicitud NUEVA
    useEffect(()=>{
        //Cuando se separa el uso de efectos, si se 'fact', en este caso, hacer lo siguiente
        if(!fact) return

        //let firstWord = fact.split(' ')[0]
        //const threeFirstWords = fact.split(' ').slice(0,3).join('%20'); //Separa, extrae3, junta
        //const threeFirstWords = fact.split(' ', 3).join(' '); //Asi tambien arroja los 3 primeros datos
        const threeFirstWords = fact.split(' ', 3).join('%20'); //No detectaba correctamente el espacio
        //console.log(threeFirstWords) //"Tres Primeras Palabras"

        //console.log(`${apiB_Url_PREFIX}${apiB_SAYS}${threeFirstWords}${apiB_SAYS_END}`);
        //let apiB_BuildedUrl = `${apiB_Url_PREFIX}${apiB_SAYS}${threeFirstWords}`;
        let apiB_BuildedUrl = `${apiB_Url_PREFIX}${apiB_SAYS}${threeFirstWords}${apiB_SAYS_END}`;
        console.log(apiB_BuildedUrl);
        fetch(apiB_BuildedUrl)
        //.then(res => res.json()) //La respuesta en JSON, 
        //no arroja la imagen, //PERO si da un ID, 
        .then(response => {
            const {url} = response
            setImgUrl(url) 
            //console.log(url)
        })        
    }, [fact])

    const handleClick = () => {
        getRandomFact()
    }

    return(
        <main style={{ display: 'flex', flexDirection: 'column'}}>
            <h1>App de Gatitos</h1>
            <button onClick={handleClick}>Get new fact</button>
            {fact && <p>{fact}</p>}
            {imgUrl && <img src={`${imgUrl}`} alt={`img Extract from first 3 word of: ${fact}`}/>}
        </main>
    );
}
