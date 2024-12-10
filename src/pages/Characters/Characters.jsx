import { useState ,useEffect} from 'react'
import Navegation from '../../components/Navegation/Navegation'
import Card from '../../components/Card/Card'
import Filter from '../../components/Filter/Filter'

export default function Characters() {
    let [data,setData]=useState([])
    const[estado,setEstado]=useState(true)

    let filterName=["Character Alive","Character Dead","Female","Male","Origin Unknown"]

    const mostrarData=async()=>{
        let infoAPI= await fetch("https://rickandmortyapi.com/api/character")
        .then((resp)=>{return resp.json()})
        .catch((error)=>console.log("error:" +error));
        setData(infoAPI.results)
      }   
    const filtrar=(inputData)=>{

    if(inputData.value === "Female" ){
        let infoFiltrada =data.filter((personaje)=>{return personaje.gender === "Female"});
        setData(infoFiltrada)
    }
    if(inputData.value === "Male" ){
        let infoFiltrada =data.filter((personaje)=>{return personaje.gender === "Male"});
        setData(infoFiltrada)
    }
    setTimeout(()=>{ setEstado(false)},3000)
    }

     useEffect(()=>{
        mostrarData();
     },[])

     useEffect(()=>{
        console.log("se ejecuta esta funcion cada vez que hay un cambio en estado")
     },[estado])

    return(
        <div>
            <Navegation/>
            <h2 className='text-white'>Filters</h2>

            <form className='row gap-2'>
                {
                    filterName.map((filter)=>{
                        return  <Filter key={filter} title={filter} filtar={filtrar}/>
                    })
                }  
            </form>
            <section className='d-flex gap-2 flex-wrap'>
            {
                data.map((personaje)=>{
                    return <Card key={personaje.id} personaje={personaje}/>
                })
            }
                
            </section>      
        </div>

    )
}
