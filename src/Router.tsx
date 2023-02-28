import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Paciente } from './pages/Paciente'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path='/home' element={<DefaultLayout />}>
        <Route path='/home' element={<Home />} />
      </Route>
      <Route path='/pacientes' element={<DefaultLayout />}>
        <Route path='/pacientes' element={<Paciente />} />
      </Route>
    </Routes>
  )
}
