import useFetch from "../hooks/useFetch";
import BlogList from "./BlogList";

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  // return :
  return (
    <div className='home'>
      {error && <h2>{error}</h2>}
      {isPending && <h2>Loading ... </h2>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;

/*
{blogs && <BlogList blogs={blogs} deleteBlog={deleteBlog}/> }  => means : 
blogs is true then output the bloglist component

*/
