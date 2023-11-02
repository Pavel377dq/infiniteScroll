import "./Post.css"
import { Link } from "react-router-dom";
export const PostItem = ({post}) => {
    return (
        <div className='container__postItem'>
            <div>№ {post.id}</div>
            <div className='postitem__title'>Title: {post.title}</div>
            <div  className='postitem__body'>
              Body:  {post.body.length>20?post.body.substring(0,20)+'...':post.body}
              
            </div>
            <Link key={post.id} to={`/${post.id}`}>Просмотр</Link>
        </div>
    );
};