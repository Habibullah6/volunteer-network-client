import {
  BrowserRouter, Route, Routes
} from "react-router-dom";

import './App.css';
import Admin from "./components/Home/Admin/Admin";
import Home from "./components/Home/Home/Home";
import MyEvents from "./components/Home/MyEvents/MyEvents";
import Register from "./components/Home/Register/Register";
import RegisterForm from "./components/Home/RegisterForm/RegisterForm";
import Login from "./components/Login/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Footer from './components/Shared/Footer/Footer.jsx';
import Header from './components/Shared/Header/Header.jsx';
import AuthProvider from "./context/AuthProvider";

function App() {
  return (
    <div className="App">
     
      <AuthProvider>
      <BrowserRouter>
      <Header></Header>
          <Routes>
            <Route path='/' element={<Home/> }></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="/myEvents" element={<PrivateRoute> <MyEvents/> </PrivateRoute>}></Route>
            <Route path="/admin" element={<PrivateRoute> <Admin/> </PrivateRoute>}></Route>
            <Route  path="/registerForm/:id" element={<PrivateRoute> <RegisterForm/> </PrivateRoute>} ></Route>
            <Route path="*"  element={<NotFound></NotFound>}></Route>
          </Routes>
       <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    
    </div>
  );
}

export default App;
