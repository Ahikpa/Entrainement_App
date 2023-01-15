import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Accueil from './Pages/Accueil';
import Apropos from './Pages/Apropos';
import Parkings from './Pages/Parkings';
import Contacter from './Pages/Contacter'
import Maps from './Pages/Maps';
import Admin from './Pages/Admin';
import Park from './Component/AdminComponent/Park';
import Client from './Component/AdminComponent/Client';
import ReservAdmin from './Component/AdminComponent/ReservAdmin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Accueil/>}/>
          <Route path='/parkings' element={<Parkings/>}/>
          <Route path='/apropos' element={<Apropos/>}/>
          <Route path='/contacter' element={<Contacter/>} />
          <Route path='/carte' element={<Maps/>}/>
          
        </Routes>
      </BrowserRouter>

      <BrowserRouter>
        <Routes>
          <Route path='/admin' element={<Admin/>}/>
          <Route element={<Admin/>}>
            <Route path='/park' element={<Park/>} />
            <Route path='/client' element={<Client/>}/>
            <Route path='/reservation' element={<ReservAdmin/>}/>
            
          </Route>
        </Routes>
      </BrowserRouter>
      

    </div>
  );
}

export default App;
