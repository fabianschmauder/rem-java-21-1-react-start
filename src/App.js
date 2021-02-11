import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";

function App() {

    const [selectedPostId, setSelectedPostId] = useState(1);
    const [post, setPost] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get("https://jsonplaceholder.typicode.com/posts/"+selectedPostId)
            .then(response => setPost(response.data))
            .then(() => setLoading(false))
            .catch(() => setLoading(false));
    },[selectedPostId])


    return (
        <div>
            <button disabled={loading} onClick={() => setSelectedPostId(selectedPostId +1)}>Next post </button>
            <p>
                current post: {selectedPostId}
            </p>
            {loading && <p>Loading!!</p>}
            {!loading && post &&
            <article>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </article>}

        </div>
    );
}

export default App;


