import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Album from '../components/Album'
import Api from '../components/Api'
import Comment from '../components/Comment'
import CompletedTodo from '../components/CompletedTodo'
import PendingTodo from '../components/PendingTodo'
import Post from '../components/Post'
import Todos from '../components/Todos'
const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Api />} />
        <Route path='/post' element={<Post />} />
        <Route path='/comment' element={<Comment />} />
        <Route path='/todos' element={<Todos />} />
        <Route path='/pendingTodo' element={<PendingTodo />} />
        <Route path='/completedTodo' element={<CompletedTodo />} />
        <Route path='/album' element={<Album />} />
    </Routes>
  )
}

export default AllRoutes;