import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'

function Product({id,title,image,price,rating}) {
    

    const [{}, dispatch] = useStateValue();

    // push to the basket-array. 
    // dispatch an action to the reducer, listenes to the action.
    const addToBasket = () =>{
            dispatch({
                type: 'ADD_TO_BASKET',
                item: {
                    id: id, 
                    title: title,
                    image: image,
                    price: price,
                    rating: rating



                }
            })
    }
    
    return (

        <div className="product">

            {/*The Entire Product*/}
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                <small>$</small>
                <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                    <p>🌟</p>
                ))}
                </div>
                
            </div>
            <img src={image} alt="" />
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    )
}

export default Product
