import './App.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './Pages/NotFound/NotFound';
import Booking from './Pages/Booking/Booking/Booking';
import Login from './Pages/Login/Login/Login';
import Header from './Pages/Shared/Header/Header';
import AuthProveder from './context/AuthProveder';
import AddService from './Pages/AddService/AddService';


function App() {
  return (
    <div className="App">
      <AuthProveder>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route index element={<Home></Home>}>
            </Route>
            <Route path='/home' element={<Home></Home>}>
            </Route>
            <Route path='/login' element={<Login></Login>}>
            </Route>
            <Route path='/booking/:serviceId' element={<Booking></Booking>}></Route>
            <Route path='/addService' element={<AddService></AddService>}></Route>
            <Route path='*' element={<NotFound></NotFound>}>
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProveder>

    </div>
  );
}

export default App;
