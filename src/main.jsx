import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import authStore from './store/authStore.js'
import { Provider } from 'react-redux'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { AuthLayout } from './components/index.js'
import { AddPost, AllPost, Home, Login, Signup, EditPost } from "./pages/index.js"
import Post from './pages/Post.jsx'


const router = createBrowserRouter((
  createRoutesFromElements(
    <Route path='/' element={<App />} >
      <Route path='/' element={<Home />} />
      <Route path='/allpost' element={<AllPost />} />
      <Route path='/login' element={
        <AuthLayout authentication={false}>
          < Login />
        </AuthLayout>
      }
      />
      <Route path='/signup' element={
        <AuthLayout authentication={false}>
          <Signup />
        </AuthLayout>
      }
      />
      <Route path='/allpost' element={
        <AuthLayout authentication={true}>
          <AllPost />
        </AuthLayout>
      }
      />

      <Route path='/addpost' element={
        <AuthLayout authentication={true}>
          <AddPost />
        </AuthLayout>
      }
      />

      <Route path='/edit-post/:slug' element={
        <AuthLayout authentication={true}>
          <EditPost />
        </AuthLayout>
      }
      />

      <Route path='/post/:slug' element={
        <AuthLayout authentication={true}>
          <Post />
        </AuthLayout>
      }
      />
    </Route>
  )
))
createRoot(document.getElementById('root')).render(

  <Provider store={authStore}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>

)
