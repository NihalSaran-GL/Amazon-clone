import React from 'react'
import styled from 'styled-components'
import Caraousel from '../Components/HomeContainer/Caraousel/Caraousel'

const Container = styled.main`
`;


function Home() {
  return (
   <Container>
      <Caraousel></Caraousel>
   </Container>
  )
}

export default Home