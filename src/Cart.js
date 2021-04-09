import React from "react";
import styled from "styled-components";
import Cartitems from "./CartItems";
import CartTotal from "./CartTotal";
function Cart({ cartItems }) {
  const getTotalPrice = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.product.price * item.product.quantity;
    });
    return total;
  };

  const getCount = () => {
    let count = 0;
    //loop fga3 l cart items
    cartItems.forEach((item) => {
      //zid l quantity
      count += item.product.quantity;
    });
    return count;
  };

  return (
    <Container>
      <Cartitems cartItems={cartItems} />
      <CartTotal getCount={getCount} getTotalPrice={getTotalPrice} />
    </Container>
  );
}

export default Cart;
const Container = styled.div`
  display: flex;
  padding: 14px 18px 0 18px;
  align-items: flex-start;
`;
