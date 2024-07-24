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
const Productb7 = () => {
  return (
    <Container>
    <Navbar/>
    <Announcement/>
    <Wrapper>
    <ImgContainer>
    <Image src="https://i.pinimg.com/564x/7f/94/11/7f9411b62a2203f38800c2c93ea83ba5.jpg" />

       </ImgContainer>
       <InfoContainer>
         <Title><b>Never Better Square Neck Top</b></Title>
         <Desc>
         Introducing our latest innovation in athletic wear – the Square Neck Top. Designed to empower and support you during your most intense workouts, this sports bra seamlessly blends style with functionality.
         </Desc>
         <Desc>
         Wide neckline<br></br>
         Faux-corset underbust<br></br>
         Princess seams under the bust<br></br>
         Adjustable, supportive elastic straps<br></br>
          Low impact<br></br>
         </Desc>
         <Price>Rs 1999</Price>
          <Desc>
          <h3>Ratings<br></br></h3>
         ★★★★★<br></br>
          The BreatheEasy Seamless Yoga Tank is incredibly comfortable and perfect for yoga or any low-impact workout. The seamless design minimizes chafing, and the fabric is soft against the skin. I love the breathability of the material, especially during hot yoga sessions.
          </Desc>
         <AddContainer>
           <Link to="https://www.nykaafashion.com/cider-square-neck-cami-crop-top/p/11832262?adsource=shopping_india&skuId=11831549&utm_content=ads&utm_source=GooglePaid&utm_medium=PLA&utm_campaign=SSC_InternationalBrands&gad_source=1&gclid=CjwKCAiAuYuvBhApEiwAzq_YifDrR1qJCaoja9J5y-rmeSiH8KYOJKs6Rru8j-_WFTFRgH3S3jKMhRoCC7oQAvD_BwE">
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

export default Productb7