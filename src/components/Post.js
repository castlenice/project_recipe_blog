import React from 'react';
import { marked } from 'marked';

const Post = ({ article }) => {
    console.log(article)
    const { header, foto, textbody } = article.fields
    //const postTextbody = marked(textbody)
    return (
        <div className='post'>
            <h2 className='title'>{header}</h2>
            {foto && <img className='foto' src={foto.fields.file.url} alt='foto'/>}
        
            
        </div>
    )
}




export default Post
