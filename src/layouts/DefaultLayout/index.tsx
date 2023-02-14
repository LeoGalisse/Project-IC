import { Outlet } from 'react-router-dom'
import { Login } from '../../components/Login'
import { LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Login />
      <Outlet />
    </LayoutContainer>
  )
}
