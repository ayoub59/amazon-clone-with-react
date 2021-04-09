import React from "react";
import styled from "styled-components";
import Product from "./Product";
import { db } from "./firebase";

function Home() {
  const [products, setProduct] = React.useState([]);

  const getProducts = () => {
    db.collection("products").onSnapshot((snapshot) => {
      let temProducts = [];
      temProducts = snapshot.docs.map((doc) => ({
        id: doc.id,
        product: doc.data(),
      }));
      setProduct(temProducts);
    });
  };
  React.useEffect(() => {
    console.log("ila xafti hadxi xoj marat rak hmar hhh");
    getProducts();
  }, []);

  console.log(products);

  return (
    <Container>
      <Banner></Banner>
      <Content>
        {products.map((data) => (
          <Product
            tital={data.product.name}
            price={data.product.price}
            rating={data.product.rating}
            image={data.product.image}
            id={data.id}
          />
        ))}
      </Content>
    </Container>
  );
}

export default Home;
const Content = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  margin-top: -350px;
  z-index: 100;
  display: flex;
`;

const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
`;
const Banner = styled.div`
  background-image: url("https://i.imgur.com/SYHeuYM.jpg");
  min-height: 600px;
  background-position: center;
  background-size: cover;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;
