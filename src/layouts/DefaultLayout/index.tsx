import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { Menu } from '../../components/Menu'
import { LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Menu />
      <Outlet />
    </LayoutContainer>
  )
}
