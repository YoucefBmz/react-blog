import React from "react";
import { Link } from "react-router-dom";

const BlogList = ({ blogs, deleteBlog }) => {
  return (
    <div className='blog-list'>
      <h2>Title</h2>
      {blogs.map((blog) => (
        <div className='blog-preview' key={blog.id}>
          <Link to={`blogs/${blog.id}`}>
            <h2> {blog.title} </h2>
            <p>Written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  ); // the arrow fnct to have the ability to pass arguments into a fct
};

export default BlogList;
