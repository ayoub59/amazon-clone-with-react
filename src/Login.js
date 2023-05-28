import React from "react";
import styled from "styled-components";
import { auth, db, providor } from "./firebase";
import logo from "./assets/logo.jpeg";

function Login({ setUser }) {
  const signIn = () => {
    auth
      .signInWithPopup(providor)
      .then((result) => {
        let user = result.user;
        let newuser = {
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        };
        localStorage.setItem("user", JSON.stringify(newuser));
        setUser(newuser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <Container>
      <Content>
        <AmazonLog src={logo} />
        <h1>sign into local store</h1>
        <LoginButton onClick={signIn}>sign in with google</LoginButton>
      </Content>
    </Container>
  );
}

export default Login;
const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f8f8f8;
  display: grid;
  place-items: center;
`;
const Content = styled.div`
  padding: 100px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 1px 4px gray;
  text-align: center;
`;
const AmazonLog = styled.img`
  height: 100px;
  margin-bottom: 40px;
`;
const LoginButton = styled.button`
  margin-top: 50px;
  background-color: #f0c14b;
  height: 40px;
  border: 2px solid #a88734;
  border-radius: 4px;
  padding: 4px 8px;
  cursor: pointer;
`;
