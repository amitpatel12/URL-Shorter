import { Link, Route, Routes } from "react-router-dom";
import Background from "./components/Background";
import Details from "./components/Details";
import Main from "./components/Main";
import Navbar from "./components/Navbar";



function App() {
  return (
    
    <div className="h-screen bg-slate-600 text-white">
      {/* <div className="absolute">
      <Background/>
      </div> */}
      <Navbar/>
      <div className="flex flex-col gap-[200px] items-center justify-center min-h-[40vh] w-full mt-10 p-10">
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
