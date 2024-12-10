import ButtonsHome from '../../components/ButtonsHome/ButtonsHome'

import './home.css'


export default function Home() {
    return(
    <header className="welcome w-100 d-grid container-fluid ">
        <div className='containerHome align-self-center'>
            <div className='container text'>
                    <h1 className="text t-1 text-center">Proyect Rick & Morty</h1>
                    <h2 className='text t-2 text-center mt-4'>Welcome to Rick & Morty Proyect!</h2>  
                    <p className='row'>This proyect was made for practising React and to made a functional website. </p> 

                    <p className='row'>In this website you can know information of the characters of this animated series. </p> 
                    
                    <p className='row'>Also you can filter for diferent types of properties to find the character that you are looking for or send us a massage for any concern o sugestion.
                    </p>     
                    <p className='row'>Lets go!</p> 
                    <div className='containerbutton d-flex justify-content-center'>
                        <ButtonsHome contenido="Characters"/>
                        <ButtonsHome contenido="Contact"/>           
                    </div>

                </div>        
        </div>
   
    </header>
     
    )
}