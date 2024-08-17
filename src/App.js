import './App.css';
import NavBar from './Components/NavBar/NavBar';
import PortFolio from './Components/Portfolio/PortFolio';
import Market from './Components/Details/Market';
import NewsContainer from './Components/News/NewsContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<><PortFolio /> <Market /></>} />
          <Route exact path="/news" element={<><NewsContainer /></>} />
          <Route exact path="/portfolio" element={<><PortFolio /> <Market /></>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
