import React from 'react'
import { Link } from 'react-router-dom';
import Newsletter from '../Components/Newsletter';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import Announcement from '../Components/Announcement';
import styled from 'styled-components';
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
const Finalpro7 = () => {
  return (
    <Container>
     <Navbar/>
     <Announcement/>
     <Wrapper>
     <ImgContainer>
          <Image src="https://i.pinimg.com/564x/91/85/75/918575c69a8b0b9a32b30774b40eedfa.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title><b>Back to Life Sport Bottle</b></Title>
          <Desc>
          This insulated water bottle features a leak-proof lid and slip-free texture, so no matter how adventurous the adventure gets, your drink is safe.

          </Desc>
          <Desc>
          Optimal Performance<br></br>
          Durable Construction<br></br>
          Dynamic Design<br></br>
          </Desc>
          <Price>Rs 3789</Price>
          <Desc>
          <h3>Ratings<br></br></h3>
         ★★★★<br></br>
         I've had my fair share of water bottle mishaps in my gym bag, but the Lulumenon bottle puts an end to that. The leak-proof seal is no joke - I confidently toss it into my bag without worrying about unwanted spills.
          </Desc>
          <AddContainer>
            <Link to="https://www.ubuy.co.in/product/FM0CFSZMO-lululemon-24oz-pink-mist-back-to-life-sport-water-bottle-stainless-steel">
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

export default Finalpro7