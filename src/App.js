import Subside from './components/Subside'
import Sidebar from './components/Sidebar';
import Preview from './components/Preview'; 
import './App.css';

function App() {
  return (
  <div className="main-container">
   <div className='main-container-flex'>
   <Sidebar/>
    <Subside />
   </div>
    <Preview/>
  </div>
  );
}

export default App;
