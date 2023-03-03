import { Plus } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import {
  InfoContainer,
  InteractiveContainer,
  PacienteCardContainer,
  PacienteContainer,
  SelectContainer,
} from './styles'

interface PacienteProps {
  id: number
  name: string
  createdAt: Date
  avatarUrl: string
  numberOfSessions: number
  lastSession: string
  problema: string
}

export function Paciente() {
  const [filter, setFilter] = useState('')
  const [pacientes] = useState<PacienteProps[]>([])

  useEffect(() => { }, [filter])

  const filteredPacients = pacientes.filter((e) => {
    if (e.problema.includes(filter)) {
      return e
    } else if (filter === 'Sem filtro') {
      return e
    } else return null
  })

  return (
    <PacienteContainer>
      <div className="pad">
        <div className="container">
          <InfoContainer>
            <div className="title">
              <span>PACIENTES</span>
            </div>
            <InteractiveContainer>
              <nav className="navdiv">
                <NavLink to="/pacientes/adicionar" title="addPacient">
                  <div className="botao">
                    <span>Adicionar paciente</span>
                    <Plus size={18} />
                  </div>
                </NavLink>
              </nav>
              <SelectContainer>
                <select
                  onChange={(e) => setFilter(e.target.value)}
                  value={filter}
                >
                  <option>Sem filtro</option>
                  <option>Membro quebrado</option>
                  <option>Membro fraturado</option>
                  <option>Mobilidade reduzida</option>
                </select>
              </SelectContainer>
            </InteractiveContainer>
          </InfoContainer>
          <PacienteCardContainer>
            {filteredPacients.map((paciente: PacienteProps) => {
              return (
                <nav key={paciente.id}>
                  <NavLink
                    to={`/pacientes/${paciente.id}`}
                    title="paciente"
                    className="dataCard"
                  >
                    <div>
                      <img src={paciente.avatarUrl} alt={paciente.name} />
                    </div>
                    <div className="nomePaciente">
                      <span id="tituloSessao">Nome</span>
                      <span>{paciente.name}</span>
                    </div>
                    <div className="numeroSessoes">
                      <span id="tituloSessao">Número de sessões</span>
                      <span>{paciente.numberOfSessions}</span>
                    </div>
                    <div className="ultimaSessao">
                      <span id="tituloSessao">Última sessão</span>
                      <span>{paciente.lastSession}</span>
                    </div>
                    <div className="problema">
                      <span id="tituloSessao">Class. problema</span>
                      <span>{paciente.problema}</span>
                    </div>
                  </NavLink>
                </nav>
              )
            })}
          </PacienteCardContainer>
        </div>
      </div>
    </PacienteContainer>
  )
}
