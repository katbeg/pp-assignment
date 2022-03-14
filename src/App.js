import logo from './logo.svg';
import './App.css';
import RealEstate from './pages/real-estate/realEstate';
import MapPage from './pages/map/MapPage';
import { BrowserRouter,
          Routes,
          Route,
          Redirect } from "react-router-dom";
import Header from './components/Header/Header';
import '../src/components/Header/Header.css'

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          {/* <RealEstate></RealEstate> */}
          {/* <MapPage/> */}
          <Header/>
          <Routes>
            <Route path="/map" element={<MapPage/>}/>
            <Route path="/real-estate" element={<RealEstate/>}/>
            <Route path="/" exact>
              {/* <Redirect to="/real-estate" /> */}
            </Route> 
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
