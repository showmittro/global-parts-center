import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Parts from './Pages/Home/Parts/Parts';
import Footer from './Pages/Shared/Footer/Footer';
import Navegation from './Pages/Shared/Navegation/Navegation';

function App() {
  return (
    <div>
       <Navegation></Navegation>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/parts" element={<Parts />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
