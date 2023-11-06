import { Link, Route, Routes } from "react-router-dom";
import Details from "./components/Details";
import Main from "./components/Main";
import Navbar from "./components/Navbar";



function App() {
  return (
    <div>
    <div className="main">
   
       <div className='gradient' />
       </div>
  
      <div className="app">
       <Navbar/>
        <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/getinfo" element={<Details/>}/>
      </Routes>
      {/* <Details/> */}
      
      </div>
    
    </div>
  );
}

export default App;
