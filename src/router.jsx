import{BrowserRouter as Router,Routes,Route} from 'react-router';
import Home from './pages/Home/Home';
import Characters from './pages/Characters/Characters';
import Contact from './pages/Contact/Contact'
import Charactersprovider from './context';

export default function RouterSite() {
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/Characters' element={<Charactersprovider><Characters/></Charactersprovider> }/>
                <Route path='/Contact' element={<Contact/>}/>
            </Routes>
        </Router>
    )
}