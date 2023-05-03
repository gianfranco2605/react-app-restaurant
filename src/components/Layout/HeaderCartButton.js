import React, { useContext, useEffect, useState } from 'react'
import CartIcon from '../Cart/CartIcon'
import CartContext from '../../store/cart-context'

import classes from './HeaderCarButton.module.css'

const HeaderCartButton = props => {
    const [ buttonHighLighted, setbuttonHighLighted ] = useState(false)
    const cartCtx = useContext(CartContext);

    const { items } = cartCtx; 

    const numberOfCartItems = items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    

    const btnClasses = `${classes.button} ${buttonHighLighted ? classes.bump : ''}`;

    useEffect(() => {
        if(items.length === 0 ){
            return;
        }
         setbuttonHighLighted(true);

         const timer = setTimeout(() => {
            setbuttonHighLighted(false);
         }, 300);
         return () => {
            clearTimeout(timer);
         }
    },[items]);

    return (
        <button className={btnClasses} onClick={props.onClick} >
            <span className={classes.icon}>
               <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>
                {numberOfCartItems}
            </span>
        </button>
    )
}

export default HeaderCartButton