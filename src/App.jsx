import './App.css'
import React, { useState, useEffect } from 'react'
import authService from './appwrite/authService';
import { useDispatch, useSelector } from "react-redux"
import { login, logout } from "./store/authSlice"
import { Header, Footer, Loading } from './components';
import { Outlet } from 'react-router-dom';
import storageServices from './appwrite/storageService';
import { addPosts } from './store/postSlice';

function App() {

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch()
  const authStatus = useSelector(state => state.auth.status);
  const posts = useSelector(state => state.posts.addPosts);

  useEffect(() => {

    async function checkUser() {
      try {
        const userData = await authService.getUser();
        if (userData) {
          dispatch(login({ userData }));     // when promise resolves nd return current user data , we store that data in store and change status of user login as true 
        } else {
          dispatch(logout());             // if promise does not return anything we change user login status to false
        }
      } catch (error) {

        dispatch(logout());
      }
      setLoading(false)
    }
    checkUser();
  },)

  useEffect(() => {

    async function getPost() {
      const allPost = await storageServices.getAllPosts([])
      const documents = allPost.documents
      if (documents) {
        dispatch(addPosts({ documents }))
      }
    }
    getPost();
  },)

  return (
    !loading ? <div className='min-h-screen flex flex-wrap content-between  m-0 p-0'>
      <div className='w-full block'>
        <Header></Header>
        <main>
          <Outlet />
        </main>
        <Footer></Footer>
      </div>
    </div>
      :
      <div className='min-h-screen flex flex-wrap content-between  m-0 p-0'>
        <div className='w-full block'>
          <Loading></Loading>
        </div>
      </div>
  )
}

export default App
