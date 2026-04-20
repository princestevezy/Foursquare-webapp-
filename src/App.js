import './App.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import  Home from './Webapp/Home/Home';
import About from './Webapp/About/About';
import Serve from './Webapp/Serve/Serve';
import Media from './Webapp/Media/Media';

function App() {
  return (
    <div>
       <Router>
        <div>
       <Routes>
        <Route path='/home'  element={<Home/>}/>
         <Route path='/about'  element={<About/>}/>
          <Route path='/serve'  element={<Serve/>}/>
          <Route path='/media'  element={<Media/>}/>
       </Routes> 
       </div>
       </Router>
    </div>
  );
}

export default App;
