
import './App.css';
import Allroutes from './components/Allroutes';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App bg-current "  >
      <h1 className='text-center text-white text-lg  '>Movie Vers</h1>
      <Navbar/>
      <Allroutes/>
   
    </div>
  );
}

export default App;
