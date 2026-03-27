
import './App.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import  Home from './Webapp/Home/Home';
import About from './Webapp/Home/About'

function App() {
  return (
    <div>
       <Router>
        <div>
       <Routes>
        <Route path='/home'  element={<Home/>}/>
         <Route path='/about'  element={<About/>}/>
       </Routes> 
       </div>
       </Router>
    </div>
  );
}

export default App;
