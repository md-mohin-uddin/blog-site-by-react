/* eslint-disable max-lines */
import { Link } from 'react-router-dom';
import './singlePost.css';

export default function SinglePost({ post }) {
    const { title, author, imageUrl, content, timestamp } = post;
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img className="singlePostImg" src={imageUrl} alt="" />
                <h1 className="singlePostTitle">
                    {title}
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
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
                <p className="singlePostDesc">{content}</p>
            </div>
        </div>
    );
}
