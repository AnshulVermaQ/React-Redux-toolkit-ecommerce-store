import React,{PureComponent, useEffect,useState} from 'react'
import {add} from "../store/cartSlice";
import { useDispatch } from 'react-redux';
import {remove} from "../store/cartSlice";

const Products = () => {
    const dispatch = useDispatch();

    const[products,setProducts]=  useState([]);

    useEffect(()=>{
        const fetchProducts = async()=>{
            const api = await fetch("https://fakestoreapi.com/products");
            const res = await api.json();
            setProducts(res);
        }

        fetchProducts();
    },[])

    const handleAdd = (products)=>{
        dispatch(add(products));
    }
  return (
    <div>
      <div className = 'productsWrapper'>
      {products.map((product)=>(
       <div className='card' key = {product.id}>
        <img src  ={product.image}></img>
        <h4>{product.title}</h4>
        <h5>{product.price}</h5>
        <button onClick = {() => handleAdd(product)} className = 'btn'>Add to cart</button>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Products
