import './button.css'
import {Link} from 'react-router'
export default function ButtonsHome({contenido}) {

    return(
       
        <Link to={contenido} className="btn col-4 d-flex justify-content-center botonHome">{contenido}</Link>
    )
}