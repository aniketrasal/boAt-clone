import './App.css';
import { LoginButton } from './Components/LoginModal';
import { Navbar } from './Components/Navbar';
import { TypewriterInput } from './Components/TypeWritter';
import { AllRoutes } from './Routes/AllRoutes';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
    </div>
  );
}

export default App;
