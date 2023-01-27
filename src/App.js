import  Navbar from './Components/Navbar';
import { BrowserRouter as Router,Routes, Route, BrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import GamesList from "./Components/GamesList";
import Home from './Components/Home';
import Details from './Components/Details';

function App() {
  
  return (
    <div className="App">
      
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
           <Route path='/info/:id' element={<Details/>}/>
          <Route  path="/admin" element={<GamesList/>} />

        </Routes>
      </BrowserRouter>    
      
    </div>
  );
}

export default App;
