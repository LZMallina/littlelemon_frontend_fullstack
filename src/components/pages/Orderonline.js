import '../../App.css';
import '../order/Order.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faTrash, faCirclePlus, faCircleMinus } from "@fortawesome/free-solid-svg-icons"
import useFetchdata from '../hooks/useFetchdata';
import {useEffect, useState, useReducer} from 'react'


const Orderonline = () => {

    //loading the menu for ordering
    const { isLoading, list, fetchError, fetchItems} = useFetchdata();

    const API_URL = 'https://lzmallina.github.io/little_lemon_API/foodList.json';
    useEffect(() => {
        fetchItems(API_URL)
    },[])
  
    //isolate the catogories for headers using reducer function
    const categoryHeader = list.reduce((categoryBank, item) => {
        if (!categoryBank.includes(item.categories)) {
            categoryBank.push(item.categories)
        }
        return categoryBank;
    }, []);

    //display <sections> with specific categories 

    const categoryContainer = categoryHeader.map((item) => {
        const foodItem = list.filter((food) => {
            return food.categories === item
        }).map((i) => {
            return <section className ="selection-container"key ={i.name}>
                <div className ='food-container'>
                    <div className='align'>
                    <span>{i.name}</span>
                    <span className="price align">$ {i.price}</span>
                    </div>
                <div style ={{paddingLeft:'28px'}}>{i.ingredients}</div>
            </div>
            <div className ='add-container'>
                    <button type='button'>Add to Order </button><br />
                    <span><FontAwesomeIcon icon={faCirclePlus} /></span>
                    <span style={{ color: 'black' }}>{'0'}</span>
                    <span><FontAwesomeIcon icon={faCircleMinus} /></span>
            </div>    
        </section>    
        })
        
        return (
            <section key={item}>
                <h2>{item}</h2>
                {foodItem}
            </section>
        )
    })

    return (
        <article className="orderOnline">
            {isLoading && <p style ={{color:'blue'}}>Items are loading</p>}
            {fetchError && <p style={{ color: 'red', fontSize: '15px' }}>{`Error: ${fetchError}`}</p>}
        <section className="deliveryChoice">
                <button>PICK UP</button>
                <button>DELIVERY</button>
        </section>
        <section className="orderChoice-container">
                {categoryContainer}
        </section>
            <section className="shoppingList-container">
                <div className="sL-header">
                    <span><FontAwesomeIcon icon={faShoppingCart} /></span>
                    <span>My Order </span>
                <span><FontAwesomeIcon icon={faTrash} /></span>
                </div>
                <hr />
                <div className ='summary'>
                    {/*summary of list*/ }
                </div>
                 <hr />
                <div className ='subtotal'>
                    <div>Subtotal</div>
                    <div>$0.00</div>
                    <div>Tax</div>
                    <div>$0.00</div>
                    <div>Total</div>
                    <div>$0.00</div>
                </div><br />
                <button type="submit" className = "checkoutBTN">Checkout</button>
        </section>
    </article>
    )
}

export default Orderonline;