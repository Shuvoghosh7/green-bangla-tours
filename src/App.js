import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Pages/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Auth/Login/Login';
import Checkout from './Pages/Auth/Checkout/Checkout';
import Singup from './Pages/Auth/Singup/Singup';
import NotFound from './Pages/NotFound/NotFound';
import RequireAuth from './Pages/Auth/RequireAuth/RequireAuth';



function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/checkout' element={
          <RequireAuth>
            <Checkout/>
          </RequireAuth>
        }/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/singup' element={<Singup/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
