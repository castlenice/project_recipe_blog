import React from 'react'
import Post from './Post'

const Posts = ({ results }) => {
    console.log(results)
    return (
        <div>
            {results
                ? results.map((recipes, index) => <Post recipes={recipes} key={index} />)
        : "Loading...."}
        </div>
    )
}



export default Posts
