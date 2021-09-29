import React from "react";
import { useHistory, useParams } from "react-router";
import useFetch from "../hooks/useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs/" + id);

  const history = useHistory()

  const handleDelete = () => {
    fetch('http://localhost:8000/blogs/' + blog.id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/')
    })
  }
  return (
    <div className="blog-detail">
         
              { isPending && <div>loading ...</div>}
              { error && <h2>{error}</h2>}
              {blog && (
                  <article>
                      <h1>{blog.title}</h1>
                  <p> </p>
                  <small> written by {blog.author}</small>
            <p>
              {blog.body}
            </p>
                   </article> 
      )}
      <button onClick={ () => handleDelete()}>delete blog</button>
            
    </div>
  );
};

export default BlogDetails;
