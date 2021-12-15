import React from 'react';

const Post = ({ recipes }) => {
    console.log(recipes)
    const { title, main_img, ingredients, instructions } = recipes
    //const postTextbody = marked(textbody)
    return (
        <div className='post'>
            <h2 className='title'>{title}</h2>
            {main_img && <img className='foto' src={recipes.main_img} alt='foto' />}
            <ol>{ingredients}</ol>
            <p>{instructions}</p>
        
            
        </div>
    )
}




export default Post
