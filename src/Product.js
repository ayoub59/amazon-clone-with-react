import React from "react";
import styled from "styled-components";
import { db } from "./firebase";

function Product({ tital, price, rating, image, id }) {
  const addToCart = () => {
    const cartItem = db.collection("cartItems").doc(id);
    cartItem.get()
      .then((doc) => {
        console.log(doc)
        if (doc.exists) {
          console.log(id)

          cartItem.update({
            quantity: doc.data().quantity + 1
          })

        } else {
          db.collection("cartItems").doc(id).set({
            name: tital,
            image: image,
            price: price,
            quantity: 1
          })
        }
      })

  }
  return (
    <Container>
      <Tital>{tital}</Tital>
      <Price>${price}</Price>
      <Rating>
        {Array(rating)
          .fill()
          .map((rating) => (
            <p>⭐</p>
          ))}
      </Rating>
      <Image src={image} />
      <ActionSection>
        <AddToCartButton
          onClick={addToCart}
        >Add to cart</AddToCartButton>
      </ActionSection>
    </Container>
  );
}

export default Product;

const Container = styled.div`
  background-color: white;
  z-index: 100;
  max-height: 400px;
  flex: 1;
  padding: 20px;
  margin: 10px;
  display: flex;
  flex-direction: column;
`;
const Tital = styled.span``;
const Price = styled.span`
  font-weight: 500;
  margin-top: 3px;
`;
const Rating = styled.div`
  display: flex;
  margin-bottom: 7px;
`;
const Image = styled.img`
  max-height: 200px;
  object-fit: contain;
`;
const ActionSection = styled.div`
  display: grid;
  place-items: center;
  margin-top: 12px;
`;
const AddToCartButton = styled.button`
  width: 100px;
  cursor: pointer;
  background-color: #f0c14b;
  border: 2px solid #a88734;
  height: 30px;
  border-radius: 2px;
`;
