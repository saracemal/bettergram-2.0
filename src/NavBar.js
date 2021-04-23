import React from 'react';
import NewPostBtn from './NewPostBtn.js'
import styled from 'styled-components'

function NavBar() {
  return (
    <div>
      <NewPostBtn />
     <Title>BetterGram</Title>
     <h5>welcome, Sara</h5>
    </div>
  );
}

export default NavBar;

const Title = styled.h1`
  text-align: center;
`
