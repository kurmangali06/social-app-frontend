import { BrowserRouter, Routes ,Route } from "react-router-dom";
import Account from "./pages/account/Account";
import Friends from "./pages/friends/Friends";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import { NewFriends } from "./pages/newFriends/NewFriends";
import OUserProfile from "./pages/oUserProfile/OUserProfile";
import { Register } from "./pages/register/Register";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/account" element={<Account/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/friends" element={<Friends/>}/>
          <Route path="/user/:id" element={<OUserProfile/>}/>
          <Route path="/add" element={<NewFriends/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
