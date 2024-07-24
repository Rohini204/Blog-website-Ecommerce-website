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
const Slideproduct6 = () => {
  return (
    <Container>
    <Announcement/>
    <Navbar/>
     <Wrapper>
     <ImgContainer>
          <Image src="https://i.pinimg.com/564x/15/59/5c/15595c5abc78d29fcda0f62a65f44f4b.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title><b>CENTELLA HYALU-CICA SLEEPING PACK</b>

          </Title>
          <Desc>
          The Centella Hyalu-Cica Sleeping Pack is a beauty care product that helps to calm and vitalize your skin while you sleep. To use, simply apply a suitable amount to your face before going to bed. There is no need to wash it off in the morning.
          </Desc>          
          <Price>Rs 2399</Price>
          <Desc>
          This sleeping pack is formulated with pear and melon fruit extract, which help to soothe and revitalize your skin throughout the night. It also contains CICA extracts from Madagascar, three kinds of Hyaluronic Acids, and nano-sized Ceramide, which work together to deeply hydrate your skin and keep its pH balanced.
          </Desc>
          <h3>Ratings<br></br></h3>
           ★★★★<br></br>
          The Centella Hyalu-Cica Sleeping Pack has become a holy grail in my nighttime skincare routine. Its unique blend of centella asiatica, hyaluronic acid, and cica provides a soothing and hydrating experience. The gel-like texture is lightweight, making it comfortable for overnight wear. I wake up with plump, moisturized skin that looks refreshed and revitalized.
          <Desc>
          </Desc>
          <AddContainer>
            <Link to="https://www.sweetcare.com/in/skin1004-madagascar-centella-hyalu-cica-sleeping-pack-p-017974kn?country=in&curr=inr&st=01&lang=EN&gad_source=1&gclid=CjwKCAiA3JCvBhA8EiwA4kujZoxEf9RsvKGx05QEiXxIAV7c3gPQ4fA72jH2dtTh-HSpUFYMNV9L_BoC2O8QAvD_BwE">
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

export default Slideproduct6