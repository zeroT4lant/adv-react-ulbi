import React from 'react'
import { postApi } from '../services/PostService'
import PostItem from './PostItem'

const PostContainer2 = () => {
    const {data : posts, error, isLoading} = postApi.useFetchAllPostsQuery(5)//получаем все данные и ниже передаем в пропсы
  return (
    <div>
        <div className="post__list">
            {isLoading && <h1>Идёт загрузка...</h1>}
            {error && <h1>Ошибка, Козёл</h1>}
            {posts?.map(post => <PostItem key={post.id} post={post}/>)}
        </div>
    </div>
  )
}

export default PostContainer2