import React from "react";
import styled from "styled-components";
import NumberFormat from "react-number-format";

function CartTotal({ getTotalPrice, getCount }) {
  return (
    <Container>
      <Subtotal>
        subtotal ({getCount()} items)
        <NumberFormat
          value={getTotalPrice()}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
      </Subtotal>

      <CheckoutButtom>Proceed to checkout</CheckoutButtom>
    </Container>
  );
}

export default CartTotal;
const Container = styled.div`
  background-color: white;
  flex: 0.3;
  padding: 20px;
  margin: 18px;
`;
const Subtotal = styled.h2``;
const CheckoutButtom = styled.button`
  background-color: #f0c14b;
  width: 100%;
  padding: 4px 8px;
  border: 2px solid #a88734;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
  :hover {
    background: #ddb347;
  }
`;
