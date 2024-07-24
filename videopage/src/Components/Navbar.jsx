import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';
const Container = styled.div`
      height: 60px;
      
      
`
const Wrapper = styled.div`
  padding: 10px 20px;
  display:flex;
  align-items : center;
  justify-content :space-between;

`
const Left = styled.div`
    flex:1;
    display: flex;
    align-items: center;

`
const Language=styled.div`
  font-size: 14px;
  cursor: pointer;
`

const SearchContainer = styled.div`
  border : 0.5px solid lightgray;
  display :flex;
  align-items : center;
  margin-left : 25px;
  padding : 5px;
   
`

const Input = styled.input`
   border : none;
`
const Center = styled.div`
  flex:1;
  text-align: center;
`
const Logo = styled.h1`
  font-weight: bold;
`

const Right = styled.div`
  flex:1;
    display:flex;
    align-items: center;
    justify-content: flex-end;
`

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left : 25px;
`
const Navbar = () => {
  return (
      <Container>
        <Wrapper>
          <Left><Language>EN</Language>
          <SearchContainer>
            <Input/>
            <SearchIcon style={{color:"gray",fontSize: 16}}/>
          </SearchContainer>
          </Left>
          <Center><Logo>SHOP</Logo></Center>
          <Right>
            <Link to="/register">
            <MenuItem><PersonIcon/></MenuItem>
            </Link>
            <MenuItem>
             <ShoppingCartOutlinedIcon/>
            </MenuItem>
          </Right>
        
        </Wrapper>
      </Container>
  )
}

export default Navbar