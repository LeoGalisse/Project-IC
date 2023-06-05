import {
  ChartPieSlice,
  Gear,
  House,
  PersonSimpleRun,
  Users,
} from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/Logo-Inatel.svg'
import { ItemsContainer, MenuContainer } from './styles'

export function Menu() {
  return (
    <MenuContainer>
      <div>
        <img src={logo} alt="" />
      </div>
      <div>
        <span>Menu</span>
        <ItemsContainer>
          <div>
            <NavLink to="/home" title="home">
              <House size={24} />
              <div className="title">Home</div>
            </NavLink>
          </div>
          <div>
            <NavLink to="/pacientes" title="pacientes">
              <Users size={24} weight="fill" />
              <div className="title">Pacientes</div>
            </NavLink>
          </div>
          <div>
            <NavLink to="/formularios" title="form">
              <ChartPieSlice size={24} />
              <div className="title">Formulário</div>
            </NavLink>
          </div>
          <div>
            <NavLink to="/atividade" title="atividade">
              <PersonSimpleRun size={24} weight="thin" />
              <div className="title">Atividades</div>
            </NavLink>
          </div>
        </ItemsContainer>
      </div>
      <ItemsContainer>
        <span>Account</span>
        <div>
          <NavLink to="/config" title="configurações">
            <Gear size={24} weight="thin" />
            <div className="title">Configurações</div>
          </NavLink>
        </div>
      </ItemsContainer>
    </MenuContainer>
  )
}
