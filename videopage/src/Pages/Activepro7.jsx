import React from 'react'
import styled from 'styled-components';
import Navbar from '../Components/Navbar';
import Announcement from '../Components/Announcement';
import { Link } from 'react-router-dom';
import Newsletter from '../Components/Newsletter';
import Footer from '../Components/Footer';
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
const Activepro7 = () => {
  return (
    <Container>
     <Navbar/>
     <Announcement/>
     <Wrapper>
     <ImgContainer>
          <Image src="https://i.pinimg.com/564x/6a/d8/7e/6ad87ee3c1da569545c4d12df7b12376.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title><b>COREFLOW MEDIUM-SUPPORT TOP</b>

          </Title>
          <Desc>
          Experience the perfect blend of style, performance, and comfort with our Women's Performance Workout T-shirt. Elevate your fitness journey and conquer your goals with confidence!
          </Desc>
          <Price>Rs 2199</Price>
          <Desc>
          Stay dry and comfortable throughout your workout with our advanced moisture-wicking technology. The fabric efficiently pulls sweat away from your body, ensuring you stay cool and focused.
          </Desc>
          <Desc>
            
          <h3>Ratings<br></br></h3>
         ★★★★★<br></br>
            Review: Elevate your workout wardrobe with our sleek and stylish design. The t-shirt features a flattering fit that complements your body shape, along with subtle branding for a touch of sophistication.
          </Desc>
          <AddContainer>
            <Link to="https://www.adidas.co.in/coreflow-medium-support-bra/HR9669.html">
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

export default Activepro7