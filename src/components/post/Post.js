import { useEffect, useState } from 'react';
import './post.css';

export default function Post({ img }) {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setPosts(data);
            });
    }, []);
    return (
        <div className="post">
            {posts.map((post) => (
                <>
                    <img
                        className="postImg"
                        src="https://img.freepik.com/premium-vector/illustration-vector-graphic-cartoon-character-blog_516790-550.jpg?size=626&ext=jpg&ga=GA1.1.1518270500.1705795200&semt=ais"
                        alt=""
                    />
                    <div className="postInfo">
                        <div className="postCats">
                            <span className="postCat">Music</span>
                            <span className="postCat">Life</span>
                        </div>
                        <span className="postTitle">{post.title}</span>
                        <hr />
                        <span className="postDate">1 hour ago</span>
                    </div>
                    <p className="postDesc">{post.body}</p>
                </>
            ))}
        </div>
    );
}
