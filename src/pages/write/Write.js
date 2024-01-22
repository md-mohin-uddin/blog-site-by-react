/* eslint-disable max-lines */
import React, { useState } from 'react';
import './write.css';
import SinglePost from '../../components/singlePost/SinglePost';

export default function Write() {
    const [title, setTitle] = useState('');
    const [story, setStory] = useState('');
    const [author, setAuthor] = useState('');
    const [posts, setPosts] = useState([]);
    const [publishedPost, setPublishedPost] = useState(null);

    const handleChangeTitle = (e) => {
        setTitle(e.target.value);
    };

    const handleChangeStory = (e) => {
        setStory(e.target.value);
    };
    const handleChangeAuthor = (e) => {
        setAuthor(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create a new post object
        const newPost = {
            title,
            content: story,
            imageUrl: 'https://www.gethow.org/wp-content/uploads/2020/09/blog.jpg',
            author,
            timestamp: new Date().toLocaleString() // You can format this timestamp as needed
        };

        // Set the new post as the publishedPost state
        setPublishedPost(newPost);

        setPosts((prevPosts) => [...prevPosts, newPost]);
        // Clear the form fields
        setTitle('');
        setStory('');
        setAuthor('');
    };

    return (
        <div className="write">
            <img className="writeImg" src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
            <form onSubmit={handleSubmit} className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input id="fileInput" type="file" style={{ display: 'none' }} />
                    <input onChange={handleChangeTitle} value={title} className="writeInput" placeholder="Title" type="text" autoFocus={true} />
                </div>
                <div className="writeFormGroup">
                    <input onChange={handleChangeAuthor} value={author} className="writeInput " placeholder="author name" type="text" autoFocus={true} />
                </div>
                <div className="writeFormGroup">
                    <textarea onChange={handleChangeStory} value={story} className="writeInput writeText" placeholder="Tell your story..." type="text" autoFocus={true} />
                </div>
                <button className="writeSubmit" type="submit">
                    Publish
                </button>
            </form>
            {posts.map((post, index) => (
                <SinglePost key={index} post={post} />
            ))}
        </div>
    );
}
