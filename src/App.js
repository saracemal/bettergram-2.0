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
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/photos")
      .then((r) => r.json())
      .then((postArray) => {
        setPosts(postArray);
      });  
  }, []);

  const handleAddPost = (newPosts) => {
    const updatedPostArray = [...posts, newPost];
    setImages(updatedImgArray)
  }

  return (
    <AppDiv>
      <NavBar onAddImage={handleAddImage}/>
      <Feed posts={posts} />
    </AppDiv>
  );
}

export default App;
// make background color regular white for light, and then dark gray for setDark
const AppDiv = styled.div`

`

