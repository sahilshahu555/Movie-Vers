
import './App.css';
import Allroutes from './components/Allroutes';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App bg-current "  >
      <div className='m-2'>
        <h1 className='text-center bg-sky-300 p-2 w-48  m-auto  text-2xl font-medium'  

        >Movie Vers</h1>
        </div>
      
      <Navbar/>
      <Allroutes/>
   
    </div>
  );
}

export default App;
