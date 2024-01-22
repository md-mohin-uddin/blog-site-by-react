/* eslint-disable max-lines */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './singlePost.css';

export default function SinglePost({ post, onEdit, onDelete }) {
    const { postId, title, author, imageUrl, content, timestamp } = post;
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(title);
    const [editedContent, setEditedContent] = useState(content);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleCancelEdit = () => {
        setIsEditing(false);
    };

    const handleSaveEdit = () => {
        // Perform save logic, update the post with the edited data
        onEdit(postId, editedTitle, editedContent);

        // Exit edit mode
        setIsEditing(false);
    };

    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img className="singlePostImg" src={imageUrl} alt="" />
                <h1 className="singlePostTitle">
                    {isEditing ? <input type="text" value={editedTitle} onChange={(e) => setEditedTitle(e.target.value)} className="editInput" /> : title}
                    <div className="singlePostEdit">
                        {isEditing ? (
                            <>
                                <i className="singlePostIcon far fa-save" onClick={handleSaveEdit}></i>
                                <i className="singlePostIcon far fa-times-circle" onClick={handleCancelEdit}></i>
                            </>
                        ) : (
                            <>
                                <i className="singlePostIcon far fa-edit" onClick={handleEdit}></i>
                                <i className="singlePostIcon far fa-trash-alt" onClick={() => onDelete(postId)}></i>
                            </>
                        )}
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span>
                        Author:
                        <b className="singlePostAuthor">
                            <Link className="link" to="/posts?username=mohin">
                                {author}
                            </Link>
                        </b>
                    </span>
                    <span>{timestamp}</span>
                </div>
                <p className="singlePostDesc">{isEditing ? <textarea value={editedContent} onChange={(e) => setEditedContent(e.target.value)} className="editTextarea" /> : content}</p>
            </div>
        </div>
    );
}
