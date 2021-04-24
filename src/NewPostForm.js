import React, {useState} from 'react';


function NewPostForm() {
const [newPost, setNewPost] = useState("")
const [newCaption, setNewCaption] = useState("")
const [newImgDesc, setNewImgDesc] = useState("")

//make sure to add 0 in use state for likes when using fetch request for adding
    return (
        <div>
          <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="image"
                placeholder="upload image here!"
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
              />
              <input
                type="text"
                name="caption"
                placeholder="caption!"
                value={newCaption}
                onChange={(e) => setNewCaption(e.target.value)}
              />
              <input
                type="text"
                name="description"
                placeholder="description!"
                value={newImgDesc}
                onChange={(e) => setNewImgDesc(e.target.value)}
              />
            </form>  
        </div>
    )
}

export default NewPostForm;