import React, { useState } from "react";
import { useHistory } from "react-router";


const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');

    const [isPending,setIsPending] = useState(false)
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        setIsPending(true)
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("new item added");
            setIsPending(false);
            setTitle('');
            setBody('');
            setAuthor('');
            history.push('/')
        })

    }
    
    return (
        <div className="create">
            {title}
        <h2>Create new blog : </h2>

        <form >
            <label>add a title</label>
                <input
                    type="text"
                    required
                    onChange={(e) => {setTitle(e.target.value)}}    
                />
            <label> author</label>
                <select
                    name=""
                    onChange={(e) => setAuthor(e.target.value)}
                >
                <option value="mario">mario</option>
                <option value="yoshi"> yoshi </option>
            </select>

            <label> body :</label>
                <textarea name=""
                    required
                    onChange={(e)=> setBody(e.target.value)}
                ></textarea>
                { !isPending && <button onClick={handleSubmit}>submit</button>}
                { isPending && <button disabled>adding blog ...</button>}
            </form>
            {title} <br />
            {author} <br />
            {body}
    </div> );
}
 
export default Create;