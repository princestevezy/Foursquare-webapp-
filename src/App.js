
import './App.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import  Home from './Webapp/Home/Home';


function App() {
  return (
    <div>
       <Router>
        <div>
       <Routes>
        <Route path='/home'  element={<Home/>}/>
       </Routes> 
       </div>
       </Router>
    </div>
  );
}

export default App;
