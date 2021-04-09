import React from "react";
import styled from "styled-components";
import CartItem from "./CartItem";
function CartItems({ cartItems }) {
  return (
    <Container>
      <Tital>Shopping cart</Tital>
      <hr />
      <ItemsContainer>
        {cartItems.map((item) => (
          <CartItem id={item.id} item={item.product} />
        ))}
      </ItemsContainer>
    </Container>
  );
}

export default CartItems;
const Container = styled.div`
  background-color: white;
  flex: 0.8;
  padding: 20px;
  margin: 14px 18px 0 18px;
`;
const Tital = styled.h1`
  margin-bottom: 8px;
`;
const ItemsContainer = styled.div``;
