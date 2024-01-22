import './post.css';

export default function Post({ img }) {
    return (
        <div className="post">
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
                <span className="postTitle">Lorem ipsum dolor sit amet</span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda officia architecto deserunt deleniti? Labore ipsum aspernatur magnam fugiat, reprehenderit praesentium blanditiis
                quos cupiditate ratione atque, exercitationem quibusdam, reiciendis odio laboriosam?
            </p>
        </div>
    );
}
