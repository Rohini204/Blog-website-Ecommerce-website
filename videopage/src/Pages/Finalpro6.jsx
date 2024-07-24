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
const Finalpro6 = () => {
  return (
    <Container>
     <Navbar/>
     <Announcement/>
     <Wrapper>
     <ImgContainer>
          <Image src="https://i.pinimg.com/564x/87/06/10/870610d927357ace284138f769ae331c.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title><b>Puma Gym Bag </b></Title>
          <Desc>
          This Bag is thoughtfully designed to double as the ultimate gym bag and the perfect weekender, with a waterproof shoe compartment, laptop holder, water bottle holders, and multiple pockets all over. Belladonna truly enchants with her romantic yet ultra-functional personality.


          </Desc>
          <Desc>
          Optimal Performance<br></br>
          Comfort Redefined<br></br>
          Durable Construction<br></br>
          Dynamic Design<br></br>
          </Desc>
          <Price>Rs 789</Price>
          <Desc>
          <h3>Ratings<br></br></h3>
         ★★★★★<br></br>
         It's not just visually appealing; the reinforced polyester material is incredibly durable. I've been using it daily for months, and there's not a single sign of wear or tear. The double stitching and quality zippers give me confidence that this bag is built to last.
          </Desc>
          <AddContainer>
            <Link to="https://www.amazon.in/Puma-polyester-Cms-Gym-7572229_Pink_X_Red/dp/B07VP9R6YK/ref=asc_df_B07VP9R6YK/?tag=googleshopdes-21&linkCode=df0&hvadid=396986892840&hvpos=&hvnetw=g&hvrand=11298143263672180991&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9148884&hvtargid=pla-868289341807&psc=1&mcid=4f197dce68a83ac09c0e6b2b3234873e&ext_vrnc=hi&gclid=CjwKCAiA_5WvBhBAEiwAZtCU7zCscv9SrZkUxCWaF1kbac7Lb1o_GWtyfqD4e0xRz-FSu3uv8h-eahoCUWgQAvD_BwE">
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

export default Finalpro6