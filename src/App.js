import Subside from './components/Subside'
import Sidebar from './components/Sidebar';
import Preview from './components/Preview'; 
import './App.css';

function App() {
  return (
  <div className="main-container">
    <Sidebar/>
    <Subside />
    <Preview/>
  </div>
  );
}

export default App;
