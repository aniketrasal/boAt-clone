import './App.css';
import Footer from './Components/Footer';
import LiveTracking from './Components/LiveTracking/LiveTracking';
import { LoginButton } from './Components/LoginModal';
import { Navbar } from './Components/Navbar';
import { TypewriterInput } from './Components/TypeWritter';
import { AllRoutes } from './Routes/AllRoutes';

function App() {
  return (
    <div className="App">
      {/* <Navbar/>
      <AllRoutes/>
    <Footer/> */}
    <LiveTracking/>
    </div>
  );
}

export default App;
