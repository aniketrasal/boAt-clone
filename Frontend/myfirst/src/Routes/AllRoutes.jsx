import {Routes, Route } from "react-router-dom"
import { Address } from "../Pages/Address"
import { AdminDashboard } from "../Admin/AdminDashboard"
import { AdminLogin } from "../Admin/AdminLogin"
import { Cart } from "../Pages/Cart"
import { Home } from "../Pages/Home"
import { Login } from "../Pages/Login"
import { Orders } from "../Pages/Orders"
import { Payment } from "../Pages/Payment"
import { Products } from "../Pages/Products"
import { SignUp } from "../Pages/SignUP"
import { SingleProduct } from "../Pages/SingleProduct"
export const AllRoutes = () =>{
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/products" element={<Products/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/address" element={<Address/>} />
            <Route path="/payment" element={<Payment/>} />
            <Route path="/singleproduct" element={<SingleProduct/>} />
            <Route path="/orders" element={<Orders/>} />
            <Route path="/adminlogin" element={<AdminLogin/>} />
            <Route path="/admindashboard" element={<AdminDashboard/>} />
        </Routes>
    )
}