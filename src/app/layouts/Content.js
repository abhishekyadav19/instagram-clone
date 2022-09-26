import React, { Suspense } from 'react'
import {Route, Routes} from 'react-router-dom'


// routes config
import routes from '../../routes'

const loading = (
  <div className="text-center">
    <div className="">Loading...</div>
  </div>
)

const Content = () => {
  return (
    <Suspense fallback={loading}>
        <Routes>
          {routes.map((route, i) => {
            return (
              <Route key={route.name} path={route.path} element={<route.component/>} />)
          })}
        </Routes>
    </Suspense>
  )
}

export default React.memo(Content)
