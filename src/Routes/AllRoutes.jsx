import {Routes, Route} from 'react-router-dom'
import Home from '../Pages/Home'
import Products from '../Pages/Products'
import Product from '../Pages/Product'
import Login_Signup from '../Pages/Login_Signup'
import Cart from '../Pages/Cart'
import Wishlist from '../Pages/Wishlist'
import Women from '../Pages/Women'
import Kids from '../Pages/Kids'

export default function AllRoutes(){
    return <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/women" element={<Women/>}/>
        <Route path="/kids" element={<Kids/>}/>
        <Route path="/:type/products/:category" element={<Products/>}>
            <Route path=":id" element={<Product/>}/>
        </Route>
        {/* <Route path="/:type/products/:category/:id" element={<Product/>}/> */}
        <Route path="/login" element={<Login_Signup/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>
    </Routes>
}