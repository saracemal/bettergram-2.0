import React from 'react'
import styled from 'styled-components'
import './App.css';
import 'fontsource-roboto'
import NavBar from './NavBar.js'
import Feed from './Feed.js'
import { useState, useEffect } from 'react';

// look at plantsy to see how they did it, adding the photos to a data source and 
function App() {
  const [light, setLight] = useState(true)
  const [dark, setDark] = useState(false)

  return (
    <AppDiv>
      <NavBar />
      <Feed  />
    </AppDiv>
  );
}

export default App;

const AppDiv = styled.div`

`

