import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import CartItem from '../cart-item/cart-item.component';
import { CartDropDownContainer, CartDropdownButton, EmptyMessageContainer, CartItemsContainer} from './cart-dropdown.styles';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartDropdown = () => {
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();
    const history = useHistory();
    return (
        <CartDropDownContainer>
            <CartItemsContainer>
                { 
                    cartItems.length > 0
                        ? cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                        : <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
                }
            </CartItemsContainer>
            <CartDropdownButton onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartHidden());
            }}>GO TO CHECKOUT</CartDropdownButton>
        </CartDropDownContainer>
    );
};

export default CartDropdown;
