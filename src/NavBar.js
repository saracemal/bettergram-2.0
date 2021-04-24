import React from 'react';
import NewPostBtn from './NewPostBtn.js'
import styled from 'styled-components'

function NavBar() {
  return (
    <Nav>
      <NewPostBtn />
     <Title>BetterGram</Title>
     <Greeting>welcome, Sara</Greeting>
    </Nav>
  );
}

export default NavBar;

const Nav = styled.div`
  text-align: space-evenly;
`

const Greeting = styled.h4`
  text-align: space-evenly;
`

const Title = styled.h1`
  text-align: center;
`
