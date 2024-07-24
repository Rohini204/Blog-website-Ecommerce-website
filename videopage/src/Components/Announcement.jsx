import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
   height: 30px;
   background-color: black;
   color:white;
   display: flex;
   align-items:center;
   justify-content :center;
   font-size: 14px;
  font-weight: 500;
`
const Announcement = () => {
  return (
    <Container>
      Use Promo Code SAVE20NOW For 20% Discount

    </Container>
  )
}

export default Announcement