import React from 'react'
import styled from 'styled-components';
import Navbar from '../Components/Navbar';
import Announcement from '../Components/Announcement';
import Newsletter from '../Components/Newsletter';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';
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

const Fentypro1 = () => {
  return (
    <Container>
     <Navbar/>
     <Announcement/>
     <Wrapper>
     <ImgContainer>
          <Image src="https://i.pinimg.com/564x/14/4c/e6/144ce67b468a52a10e10d1a80e81b6be.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title><b>HYDRA’ RESET INTENSIVE RECOVERY GLYCERIN HAND MASK</b>

          </Title>
          <Desc>
          Hands down, the only thing we reach for when we need deep hydration with a soft touch. Revitalizes hands with 40% moisture-locking Glycerin, fruit oils and plant extracts for a cloud-like cushiony effect. 
          </Desc>
          <Price>Rs 2999</Price>
          <Desc>
          Transform your skincare routine with Hyaluronic Intensive Moisturizer – where luxury meets hydration. Embrace the beauty of radiant, moisturized skin every day!
          </Desc>
          <Desc>
            
          <h3>Ratings<br></br></h3>
         ★★★★★<br></br>
            Review: This moisturizer is a game-changer! It leaves my skin feeling incredibly soft and hydrated without any greasy residue. The scent is subtle and pleasant, and it absorbs quickly into the skin. I've noticed a significant improvement in my skin's texture and overall appearance since using this product. Highly recommended for those with dry or sensitive skin.
          </Desc>
          <AddContainer>
            <Link to="https://fentybeauty.com/en-in/collections/skincare-body/products/hydrareset-intensive-recovery-glycerin-hand-mask?variant=41669453283373">
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

export default Fentypro1