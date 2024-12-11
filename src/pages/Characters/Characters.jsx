import { useState ,useEffect, useContext} from 'react'
// import {characterContext} from '../../context'
import Navegation from '../../components/Navegation/Navegation'
import Card from '../../components/Card/Card'
import Filter from '../../components/Filter/Filter'

export default function Characters() {
    let [data,setData]=useState([])
    let[dataCompleta,setDataCompleta]=useState([])
    // const[estado,setEstado]=useState(true)

    let filterName=["Character Alive","Character Dead","Female","Male","Origin Unknown"]

    const mostrarData=async()=>{
        //traigo la informacion de los personajes de Rick&Morty de la API 
       let infoAPI= await fetch("https://rickandmortyapi.com/api/character")
         .then((resp)=>{return resp.json()})
         .catch((error)=>console.log("error:" +error));
         setData(infoAPI.results)//arranque con la info completa y luego se empiece a filtrar
         setDataCompleta(infoAPI.results);//la info completa
        
     
     }
    // const filtrar=(inputData)=>{

    // if(inputData.value === "Female" ){
    //     let infoFiltrada =data.filter((personaje)=>{return personaje.gender === "Female"});
    //     setData(infoFiltrada)
    // }
    // if(inputData.value === "Male" ){
    //     let infoFiltrada =data.filter((personaje)=>{return personaje.gender === "Male"});
    //     setData(infoFiltrada)
    // }
    // setTimeout(()=>{ setEstado(false)},3000)
    // }

    //clase 28
  
  
  
  
  
  
    const filtrar=(inputData)=>{
    let pulsado=inputData.checked;
    let filtroPulsado=inputData.value;
    console.log(pulsado)
    console.log(filtroPulsado)



    if(pulsado === true){
        console.log(data)
        let nuevaLista;
            switch (filtroPulsado){
                case "Character Alive":
                    nuevaLista=data.filter((personajes)=>{return personajes.status ==="Alive"})

                break;
                case "Character Dead":
                    nuevaLista=data.filter((personajes)=>{return personajes.status ==="Dead"})

                break;

                case "Female":
                    nuevaLista=data.filter((personajes)=>{return personajes.gender ==="Female"})
                break;

                case "Male":
                    nuevaLista=data.filter((personajes)=>{return personajes.gender ==="Male"})
                break;

                case "Origin Unknown":
                    nuevaLista=data.filter((personajes)=>{return personajes.origin.name ==="Unknown"})
                break;
            }
            setData(nuevaLista)
    }
}
    //clase 28

    useEffect(()=>{
        mostrarData();
     },[])

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
                data.length !== 0 ?
                data.map((personaje)=>{
                    return <Card key={personaje.id} personaje={personaje}/>
                }):  <p className='bg sucess'>no tenemos personajes</p>
            }
                
            </section>      
        </div>

    )
}
