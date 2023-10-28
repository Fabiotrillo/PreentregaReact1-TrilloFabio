import React from 'react'
import { useForm } from 'react-hook-form';
import { useCartContext } from '../context/cartContext';
import { collection, addDoc } from "firebase/firestore";
import {db} from '../firebase';
import { useState } from 'react';

const Checkout = () => {
  const [pedidoId, setPedidoId]= useState("")
  const { cart, calculateTotal, clearCart  } = useCartContext();
  const {register, handleSubmit}= useForm()
  
  const comprar= (data) =>{
      const pedido = {
        cliente: data,
        productos: cart,
        total: calculateTotal(),
         }
         console.log(pedido)

     const pedidosRef = collection(db,'pedidos');
     addDoc(pedidosRef, pedido)
     .then((doc)=>{
      setPedidoId(doc.id)
      clearCart()
     });
    
  }

  if(pedidoId){
    return (
      <div className="container-pedido">
        <h1 className='main-title'>Muchas gracias por tu compra</h1>
        <p className='id-pedido'>Tu numero de pedido es: {pedidoId}</p>
      </div>
    )
  }

  return (
    <div className='container'>
      <h1 className='main-title'>Finalizar Compra</h1>
      <form className='form' onSubmit={handleSubmit(comprar)}>
      <input type="text" placeholder='Ingresa tu nombre' {...register("nombre")} />
      <input type="email" placeholder='ingresa tu e-mail' {...register("email")}/>
      <input type="phone" placeholder='ingresa tu telefono' {...register("telefono")}/>

      <button className='enviar'  type='submit'>Comprar</button></form>
    </div>
  )
}

export default Checkout;
