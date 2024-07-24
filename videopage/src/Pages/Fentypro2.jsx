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

const Fentypro2 = () => {
  return (
    <Container>
     <Navbar/>
     <Announcement/>
     <Wrapper>
     <ImgContainer>
          <Image src="https://cdn.shopify.com/s/files/1/0341/3458/9485/products/47618.jpg?v=1614390662" />
        </ImgContainer>
        <InfoContainer>
          <Title><b>TOTAL CLEANS'R REMOVE-IT-ALL CLEANSER WITH BARBADOS CHERRY</b>

          </Title>
          <Desc>
          Get that fresh, clean feeling with our plush creamy cleanser that refines the look of pores and instantly washes away dirt, oil and impurities without leaving skin feeling tight.
          </Desc>
          <Price>Rs 3500</Price>
          <Desc>
          Noncomedogenic (won’t clog pores). For all skin types. Vegan, gluten-free, cruelty-free & earth-conscious.

          </Desc>
          <Desc>
            
          <h3>Ratings<br></br></h3>
         ★★★★★<br></br>
            The Fenty Skin Total Cleans'r Remove-It-All Cleanser is a solid addition to my skincare routine. The lightweight gel formula effectively removes makeup, dirt, and impurities without stripping the skin. The light cherry blossom scent is refreshing and adds a luxurious touch to the cleansing experience. I love the practical packaging, making it easy to dispense the right amount without waste.
          </Desc>
          <AddContainer>
            <Link to="https://fentybeauty.com/en-in/collections/skincare-cleanser/products/total-cleansr-remove-it-all-cleanser-with-barbados-cherry?variant=39329805828141">
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

export default Fentypro2