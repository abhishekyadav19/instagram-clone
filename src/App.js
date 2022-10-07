import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './app/authentication/login/Login';
import ProtectedRoute from './app/authentication/protected-route/ProtectedRoute';
import Context from './app/main/context/context';


const loading = (
  <div className="text-center">
    <div className="">Loading...</div>
  </div>
)

// Layouts
const DefaultLayout = lazy(() => import('./app/layouts/Layout'))

// Pages
// const Login = lazy(() => import('./app/authentication/login/Login'));
const Ragister = lazy(() => import('./app/authentication/ragister/Ragister'));


const App = () => {

  return (
    <Context>
      <Suspense fallback={loading}>
        <Routes>
          <Route path="*" element={<ProtectedRoute><DefaultLayout /></ProtectedRoute>} />
          <Route path="/" element={<Login />} />
          <Route path="/ragister" element={<Ragister />} />
        </Routes>
      </Suspense>
    </Context>
  )
}

export default App
