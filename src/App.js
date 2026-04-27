import './App.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import  Home from './Webapp/Home/Home';
import About from './Webapp/About/About';
import Serve from './Webapp/Serve/Serve';
import Media from './Webapp/Media/Media';
import Contact_us from './Webapp/Contact us/Contact_us';

function App() {
  return (
    <div>
       <Router>
        <div>
       <Routes>
        <Route path='/'  element={<Home/>}/>
         <Route path='/about'  element={<About/>}/>
          <Route path='/serve'  element={<Serve/>}/>
          <Route path='/media'  element={<Media/>}/>
          <Route path='/contactus'  element={<Contact_us/>}/>
       </Routes> 
       </div>
       </Router>
    </div>
  );
}

export default App;
 