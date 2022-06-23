import React from 'react'
import { Outlet } from 'react-router-dom'

import Auth from '../../Pages/Auth'

const PrivateRoutes = () => {
  const isAuth = true

  return isAuth ? <Outlet /> : <Auth />
}

export default PrivateRoutes