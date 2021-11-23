import { Outlet } from 'react-router-dom';
import './App.css';
import LeftPanel from './components/LeftPanel';

function App() {
  return (
    <div className="pageContent">
      <div className="header">My Gmail</div>
      <div className="screen">
        <LeftPanel />
        <div className="mainPane"><Outlet /></div>
      </div>
    </div>
  );
}

export default App;
