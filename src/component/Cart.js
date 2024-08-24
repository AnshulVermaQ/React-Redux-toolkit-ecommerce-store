import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { remove } from '../store/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();

  const products = useSelector(state=> state.cart);

  const handleRemove =  (productId)=>{
    dispatch(remove(productId))
  }
  return (
    <div className='cartWrapper'>
      {products.map((product)=>(
        <div className='cartCard'>
          <img src = {product.image}></img>
          <h5>{product.title}</h5>
          <h5>{product.price}</h5>
          <button className='btn' onClick={()=> handleRemove(product.id)}>Remove</button>

          </div>
      )

      )}
    </div>
  )
}

export default Cart
