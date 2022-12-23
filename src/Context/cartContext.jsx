import React from 'react';
import { AuthContext } from './AuthContext';
import { getData } from "../Scripts/api";

export const CartContext = React.createContext()

export default function CartContextProvider({children}){
    const [data, setData] = React.useState([])
    const {userCred:{id}} = React.useContext(AuthContext)
    const [total, setTotal] = React.useState(0)

    const getSubTotal = (data) => {
        setTotal(data.reduce((acc, prod) => acc+Number(prod.mrp)*Number(prod.qtd), 0))
    }
    const updateCartData = () => {
        getData('cart', {id})
        .then(res=>{
            console.log(res)
            setData(res.data)
            getSubTotal(res.data)
        })
        .catch(err=>console.log(err))
    }
    return <CartContext.Provider value={{data, totalItems:data.length, updateCartData, total}}>
        {children}
    </CartContext.Provider>
}