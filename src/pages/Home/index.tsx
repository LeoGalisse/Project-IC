import {
  ChartContainer,
  HomeContainer,
  PacientesContainer,
  TutorialContainer,
} from './styles'
import tutorialLogo from '../../assets/tutorial-image.svg'
import { NavLink } from 'react-router-dom'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Dropdown } from '../../components/Dropdown'

interface PacienteProps {
  id: number
  name: string
  createdAt: Date
  avatarUrl: string
}

const pacientes = [
  {
    id: 1,
    name: 'Leonardo Galisse',
    createdAt: new Date(),
    avatarUrl: 'https://github.com/leogalisse.png',
  },
  {
    id: 2,
    name: 'Rodrigo Fraga',
    createdAt: new Date(),
    avatarUrl: 'https://github.com/Digao791.png',
  },
  {
    id: 3,
    name: 'Bárbara Barbieri',
    createdAt: new Date(),
    avatarUrl: 'https://github.com/barbarabarbieri.png',
  },
]

export function Home() {
  return (
    <HomeContainer>
      <div className="pad">
        <div>
          <TutorialContainer>
            <img src={tutorialLogo} alt="" />
            <span>Quer aprender a como usar nossa aplicação?</span>
            <nav>
              <NavLink to="/" title="tutorial">
                Clique aqui e descubra
              </NavLink>
            </nav>
          </TutorialContainer>
          <ChartContainer></ChartContainer>
        </div>
        <PacientesContainer>
          <div className="header">
            <span>Pacientes recentes</span>
            <select id="suggestions">
              <option value="semana">Semana</option>
              <option value="mes">Mês</option>
            </select>
          </div>
          <div className="content">
            {pacientes.map((paciente: PacienteProps) => {
              return (
                <div key={paciente.id} className="data">
                  <div>
                    <img src={paciente.avatarUrl} alt={paciente.name} />
                  </div>
                  <div className="informacaoPaciente">
                    <span>{paciente.name}</span>
                    <span id="time">
                      {formatDistanceToNow(new Date(paciente.createdAt), {
                        addSuffix: true,
                        locale: ptBR,
                      })}
                    </span>
                  </div>
                  <Dropdown />
                </div>
              )
            })}
          </div>
        </PacientesContainer>
      </div>
    </HomeContainer>
  )
}
