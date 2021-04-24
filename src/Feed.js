import React, {useEffect, useState} from 'react'
import PhotoPost from './PhotoPost.js'
import Toggles from './Toggles.js'

// how to set db.json to a custom port 
function Feed({posts}) {

  return (
    <div>
      <ul>
        {images.map((image) => {
          return (
            <PhotoPost 
              key={image.id}/>
          )
        })}
      </ul>
      <Toggles />
    </div>
  )
  // return (
  //   <div>
  //    <h3>photos will show up here </h3>
  //    <PhotoPost images={images} />
  //    <Toggles />
  //   </div>
  // );
}

export default Feed;
