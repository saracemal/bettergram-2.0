import React from 'react'
import styled from 'styled-components'
import Divider from '@material-ui/core/Divider';

function PhotoPost({image}) {
  const {caption, likes, description, img} = image;
  return (
    <PhotoContainer>
      <p>{img}</p>
      <Likes>{likes}</Likes>
      <Divider variant="inset" component="li" />
      <Caption>{caption}</Caption>
      <Divider variant="inset" component="li" />
      <ImgDesc>{description}</ImgDesc>
    </PhotoContainer>
  );
}

export default PhotoPost;

const PhotoContainer = styled.div`
  width: 70px;
  height: 300px;
  border: 1px solid #c3c3c3;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
`

// const Img = styled.img`
// `

const Likes = styled.p`
`

const Caption = styled.p`
`

const ImgDesc = styled.h5`
`




