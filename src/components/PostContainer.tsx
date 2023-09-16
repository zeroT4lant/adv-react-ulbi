import React from 'react'
import { postApi } from '../services/PostService'
import PostItem from './PostItem'
import { IPost } from '../models/IPost';

const PostContainer = () => {
//   const [limit, setLimit] = React.useState(100);
// refetch можем повесить на онклик и когда тыкаем на него страница обновляется
    const {data : posts, error, isLoading,refetch} = postApi.useFetchAllPostsQuery(100, {//достаем данные
      pollingInterval: 60000
    })//получаем все данные и ниже передаем в пропсы

    const [createPost, {error : createError, isLoading: isCreateLoading}] = postApi.useCreatePostMutation()//первый аргумент - функция для мутации и объект, где всё остальное
    const [updatePost, {}] = postApi.useUpdatePostMutation()
    const [deletePost, {}] = postApi.useDeletePostMutation()


    // React.useEffect(() => {
      // setTimeout(() => {
      //   setLimit(3)
      // },3000)
    // },[])

    const handleCreate = async () => {
      const title = prompt()
      await createPost({title, body: title} as IPost)
    }

    const handleUpdate = (post: IPost) => {
      updatePost(post)
    }

    const handleRemove = (post: IPost) => {
      deletePost(post)
    }
  
    return (
    <div>
        <div className="post__list">
            <button onClick={handleCreate}>Add new post</button>
            {/*<button onClick={() => refetch()}>Refetch</button> */}
            {isLoading && <h1>Идёт загрузка...</h1>}
            {error && <h1>Ошибка, Козёл</h1>}
            {posts && posts.map(post => <PostItem update={handleUpdate} remove={handleRemove} key={post.id} post={post}/>)}
        </div>
    </div>
  )
}

export default PostContainer