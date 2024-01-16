import "./App.css";
import Allroutes from "./components/Allroutes";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="App bg-current ">
      <div className="relative">
        <div className="mb-1 fixed top-0 left-0 right-0 ">
          <Navbar />
          </div>
          </div>
         
        
      
      <div className="mt-20  ">
      <h1 className=" text-center rounded bg-gradient-to-r from-violet-500 to-fuchsia-500 p-2 w-48  m-auto text-slate-300 text-2xl font-medium  hover:text-slate-700 ">
              Movie Vers
            </h1>
            
      <Allroutes />

      </div>
    </div>
  );
}

export default App;
