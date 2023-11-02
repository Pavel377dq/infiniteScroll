import { useGetPostsQuery } from '../../api/apiSlice';
import { useState } from 'react';
import { useEffect } from 'react';
import { PostItem} from '../Post/Post'

function List() {

  const [currentPostStart,setCurrentPostStart]=useState(0)
  const {data:posts, isLoading} =useGetPostsQuery({limit:7,start:currentPostStart})
  const [isMyFetching,setIsFetchingDown]=useState(false)
  const [isMyFetchingUp,setIsMyFetchingUp]=useState(false)
  useEffect(()=>{
      if(isMyFetching)
      {
          setCurrentPostStart(prev=>{
              return prev<93?prev+1:prev
          })
          setIsFetchingDown(false)  
      }
  },[isMyFetching])
  useEffect(()=>{
  if(isMyFetchingUp)
  {
      setCurrentPostStart(prev=>{
          return prev>0?prev-1:prev
      })
      setIsMyFetchingUp(false)  
  }
  },[isMyFetchingUp])
  useEffect(()=>{
    document.addEventListener('scroll',scrollHandler)
    return ()=>{
      document.removeEventListener('scroll',scrollHandler)
    }
  },[])
  const scrollHandler=(e)=>{
      if(e.target.documentElement.scrollTop<50)
      {
          setIsMyFetchingUp(true)
      }
      if(e.target.documentElement.scrollHeight-e.target.documentElement.scrollTop-window.innerHeight<50)
      {
          setIsFetchingDown(true)
          window.scrollTo(0,(e.target.documentElement.scrollHeight + e.target.documentElement.scrollTop));
      }
  }
  return (<>
      <div>
          <div className='post__list'>
              {posts?.map(post=><PostItem key={post.id} post={post}/>)}
          </div>
          {isLoading&&<div>Загрузка данных</div>}

      </div>
      </>
  );
}

export default List;