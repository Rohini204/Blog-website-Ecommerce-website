import React from 'react'

import Navbar from '../Components/Navbar'
import Announcement from '../Components/Announcement'
import Newsletter from '../Components/Newsletter'
import styled from 'styled-components'
import Footer from '../Components/Footer'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Link } from 'react-router-dom'

const Container = styled.div``; 
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;

`;

const ImgContainer = styled.div`
  flex: 1;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid black;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover{
      background-color: #f8f4f4;
  }
`;
const Productb2 = () => {
  return (
    <Container>
     <Navbar/>
     <Announcement/>
     <Wrapper>
     <ImgContainer>
          <Image src="https://kyliecosmetics.com/cdn/shop/files/foaming_face_wash_149ml_jpg_c8262914-d14d-4180-a18e-13cd04503dd0.jpg?crop=center&height=666&v=1675720890&width=720" />
        </ImgContainer>
        <InfoContainer>
          <Title><b>Foaming Face Wash</b></Title>
          <Desc>
          Foaming face wash cleanses skin while helping to remove dirt, excess oil, and makeup for a fresh, bright complexion. it doesn’t strip the skin of its natural moisture, and leaves it feeling so clean and hydrated.
          </Desc>
          <Price>Rs 2000</Price>
          <Desc>
          Gently cleanses without stripping leaving skin soothed and hydrated.<br></br>
        
          </Desc>
          <Desc>
            <b>Ingredients</b><br></br>
            water/aqua/eau, potassium cocoyl glycinate, cocamidopropyl betaine, potassium cocoate, glycerin, hydroxyacetophenone, 1,2-hexanediol, caprylyl glycol, trisodium ethylenediamine disuccinate, citric acid, polyquaternium-39, fragrance (parfum)
          </Desc>
          
            <Desc>
            <h3>Ratings<br></br></h3>
         ★★★★★<br></br>
            This foaming cleanser is great for controlling excess oil and preventing breakouts. It has a pleasant, subtle fragrance and a luxurious foam that feels soft on the skin. 
            </Desc>
            <AddContainer>
              <Link to="https://kyliecosmetics.com/en-in/collections/kylie-skin-face-cleansers/products/foaming-face-wash?variant=43927614226674">
            <Button>PURCHASE</Button>
            </Link>
          </AddContainer>
        </InfoContainer>
     </Wrapper>
     <Newsletter/>
     <Footer/>
    </Container>
  )
}

export default Productb2