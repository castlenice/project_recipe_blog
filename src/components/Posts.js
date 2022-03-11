import React from "react";
import { Post } from "./Post";

export const Posts = ({ results, showAuthorId }) => {
  return (
    <div>
      {results
        ? results
            .filter((recipe) => recipe.author_id === showAuthorId)
            .map((recipe, index) => <Post recipe={recipe} key={index} />)
        : "Loading...."}
    </div>
  );
};
