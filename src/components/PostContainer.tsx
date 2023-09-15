import React from 'react'
import { postApi } from '../services/PostService'

const PostContainer = () => {
    const {data : posts} = postApi.useFetchAllPostsQuery(5)
  return (
    <div>
        <div className="post__list">
            {posts?.map(post => <PostItem post={post}/>)}
        </div>
    </div>
  )
}

export default PostContainer