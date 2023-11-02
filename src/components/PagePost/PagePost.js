import { useGetPostQuery } from "../../api/apiSlice";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./PagePost.css"
export const PagePost = () => {

    const {id} = useParams();

    const {data:post, isLoading} =useGetPostQuery(id)

    return (
        <>
        {post?
        <div className='postItem'> 
        
        <div> {post.id}</div>
        <div className='postitem__title'> {post.title}</div>
        <div  className='postitem__body'>
          {post.body}
        </div>
        <Link key={post.id} to={'/'}>Назад</Link>
          
        </div>: null}
        {isLoading&& <div>Загрузка поста</div>}
        </>
        
    

        
    );
};