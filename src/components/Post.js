import React from "react";

export const Post = ({ recipe }) => {
  const { title, main_img, ingredients, instructions } = recipe;
  //const postTextbody = marked(textbody)
  
  return (
      <div className="post">
          <h2 className="title">{title}</h2>
          {main_img && <img className="foto" src={main_img} alt="foto" />}
          <ol>{ingredients}</ol>
          <p>{instructions}</p>
        </div>
    );
  
};

