import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddProduct from './Pages/Dashboard/AddProduct/AddProduct';
import Dashboard from './Pages/Dashboard/Dashboard';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import ManageOrders from './Pages/Dashboard/ManageOrders/ManageOrders';
import ManageProduct from './Pages/Dashboard/ManageProduct/ManageProduct';
import MyOrders from './Pages/Dashboard/MyOrders/MyOrders';
import MyProfile from './Pages/Dashboard/MyProfile/MyProfile';
import Review from './Pages/Dashboard/Review/Review';
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
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="dashboard" element={<Dashboard />} >
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path="review" element={<Review></Review>}></Route>
          <Route path="profile" element={<MyProfile></MyProfile>}></Route>
          <Route path="manageOrders" element={<ManageOrders></ManageOrders>}></Route>
          <Route path="addProduct" element={<AddProduct></AddProduct>}></Route>
          <Route path="makeAdmin" element={<MakeAdmin></MakeAdmin>}></Route>
          <Route path="manageProduct" element={<ManageProduct></ManageProduct>}></Route>
        </Route>
      </Routes>
      <Route path="/login" element={<Parts />} />
      <Footer></Footer>
    </div>
  );
}

export default App;
