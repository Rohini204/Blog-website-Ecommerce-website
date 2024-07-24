import React from 'react'
import Navbar from '../Components/Navbar';
import styled from 'styled-components';
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
const Activepro6 = () => {
  return (
    <Container>
     <Navbar/>
     <Announcement/>
     <Wrapper>
     <ImgContainer>
          <Image src="https://i.pinimg.com/564x/b3/69/ed/b369ed056ffa1edb4cde090482611d9b.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title><b>Air Max 90 </b>

          </Title>
          <Desc>
          In a clean, versatile and timeless design, the Nike Air Max 90 sneakers are back in a "Barely Rose" and "Summit White" colourway. With a leather construction, this low-top sneaker features the same iconic Waffle outsole, stitched overlays and classic TPU accents as the original silhouette.
          </Desc>
          <Price>Rs 12999</Price>
          <Desc>
          Air Max 90 was a groundbreaking shoe that introduced new design elements while retaining the core principles of the Air Max line. It featured a larger visible Air-Sole unit, a bold design with vibrant color combinations, and distinctive overlays, setting it apart from its predecessors.
          </Desc>
          <Desc>
            
          <h3>Ratings<br></br></h3>
         ★★★★★<br></br>
         Nike Air Max 90 stands as a testament to the marriage of innovative technology and captivating design. Its impact on sneaker culture and fashion is profound, and its timeless style continues to capture the hearts of sneaker enthusiasts, old and new.
          </Desc>
          <AddContainer>
            <Link to="https://www.farfetch.com/in/shopping/women/nike-air-max-90-barely-rosesummit-whitepink-sneakers-item-19711833.aspx?lang=en-US&size=25&storeid=11218">
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

export default Activepro6