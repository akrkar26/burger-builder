import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.module.css';
import Spinner from '../../UI/Spinner/Spinner';


const checkoutSummary = (props) => {

    let burger = <Spinner></Spinner>;
    if (props.ingredients) {
        burger = <Burger ingredients={props.ingredients}></Burger>;
    }
    return ( 
        <div className={classes.CheckoutSummary}>
            <h1>We hope it tastes well!!</h1>
            <div style={{ width: '100%', margin: 'auto'}}>
                {burger}
            </div>
            <Button btnType="Danger" clicked={props.checkoutCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.checkoutContinued}>CONTINUE</Button>
        </div>
     );
}
 
export default checkoutSummary;