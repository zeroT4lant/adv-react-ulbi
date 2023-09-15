import React from 'react'
import { postApi } from '../services/PostService'
import PostItem from './PostItem'

const PostContainer = () => {
  const [limit, setLimit] = React.useState(10);
    const {data : posts, error, isLoading,refetch} = postApi.useFetchAllPostsQuery(limit, {
      pollingInterval: 100000
    })//получаем все данные и ниже передаем в пропсы
  
    React.useEffect(() => {
      // setTimeout(() => {
      //   setLimit(3)
      // },3000)
    },[])
  
    return (
    <div>
        <div className="post__list">
            {/*<button onClick={() => refetch()}>Refetch</button> */}
            {isLoading && <h1>Идёт загрузка...</h1>}
            {error && <h1>Ошибка, Козёл</h1>}
            {posts && posts.map(post => <PostItem key={post.id} post={post}/>)}
        </div>
    </div>
  )
}

export default PostContainer