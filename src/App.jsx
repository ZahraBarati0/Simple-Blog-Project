import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import NotFound from './pages/NotFound';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  function onLogin(){
    setIsAuth(true);
  }

  return (
    <Routes>
      <Route element={<Layout isAuth={isAuth}/>} >
        <Route path='/' element={<Home/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/blog/:id' element={<BlogDetails/>} />
        <Route path='/login' element={<Login onLogin={onLogin}/>} />

        <Route
          path='/dashboard'
          element={
          <ProtectedRoute isAuth={isAuth}>
            <Dashboard/>
          </ProtectedRoute>
        }
        />
        <Route path="*" element={<NotFound />}></Route>
      </Route>
    </Routes>
  )
}

export default App