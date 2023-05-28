import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Link } from "react-router-dom";
import logo from "./assets/logo.jpeg";

const Div = styled.div`
  color: blue;
  margin: 10px;
  &:hover {
    color: aqua;
  }
`;
const Conntainer = styled.div`
  height: 60px;
  /* background-color: #0f1111;
   */
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
`;
const HeaderLogo = styled.div`
  img {
    width: 100px;
    margin-left: 11px;
  }
`;
const HeaderOptionAddress = styled.div`
  padding-left: 9px;
  display: flex;
  align-items: center;
`;
const OptionLineOne = styled.div``;
const OptionLinetwo = styled.div`
  font-weight: 700;
`;
const HeaderSearch = styled.div`
  display: flex;
  flex-grow: 1;
  height: 40px;
  border-radius: 4px;
  overflow: hidden;
  margin-left: 4px;
  background-color: white;
  :focus-within {
    box-shadow: 0 0 0 3px #f90;
  }
`;
const HeaderSearchInput = styled.input`
  flex-grow: 1;
  border: 0;
  :focus {
    outline: none;
  }
`;
const HeaderSearchIconContainer = styled.div`
  background-color: #febd69;
  width: 45px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const HeaderNavItems = styled.div`
  display: flex;
`;
const HeaderOption = styled.div`
  padding: 10px 9px 10px 9px;
  cursor: pointer;
`;
const HeaderOptionOne = styled.div``;
const HeaderOptionTwo = styled.div`
  font-weight: 700;
`;
const HeaderOptionCart = styled.div`
  display: flex;
  align-items: center;
  padding-right: 9px;
  a {
    display: flex;
    align-items: center;
    padding-right: 9px;
    color: white;
    text-decoration: none;
  }
`;
const CartCount = styled.div`
  padding-left: 4px;
  font-weight: 700;
  color:#f08804;
`;

function Header({ cartItems, user, signOut }) {


  const getCount = () => {
    let count = 0;
    //loop fga3 l cart items
    cartItems.forEach((item) => {
      //zid l quantity
      count += item.product.quantity;
    });
    return count
  }


  return (
    <Conntainer>
      <HeaderLogo>
        <Link to="/">
          <img alt="logo" src={logo} />
        </Link>
      </HeaderLogo>
      <HeaderOptionAddress>
        <LocationOnIcon />
        <HeaderOption>
          <OptionLineOne>hello.</OptionLineOne>
          <OptionLinetwo>select your adress</OptionLinetwo>
        </HeaderOption>
      </HeaderOptionAddress>

      <HeaderSearch>
        <HeaderSearchInput type="text" />
        <HeaderSearchIconContainer>
          <SearchIcon />
        </HeaderSearchIconContainer>
      </HeaderSearch>
      <HeaderNavItems>
        <HeaderOption>
          <HeaderOptionOne>hello, {user.name}</HeaderOptionOne>
          <HeaderOptionTwo>Account & list</HeaderOptionTwo>
        </HeaderOption>
        <HeaderOption onClick={signOut}>
          <HeaderOptionOne>Returns</HeaderOptionOne>
          <HeaderOptionTwo>& Others</HeaderOptionTwo>
        </HeaderOption>

        <HeaderOptionCart>
          <Link to="/cart">
            <ShoppingBasketIcon />
            <CartCount>{getCount()}</CartCount>
          </Link>
        </HeaderOptionCart>
      </HeaderNavItems>
    </Conntainer>
  );
}

export default Header;
