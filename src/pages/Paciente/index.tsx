import { Plus } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import {
  InfoContainer,
  InteractiveContainer,
  PacienteCardContainer,
  PacienteContainer,
} from './styles'
import axios from 'axios'
import Cookies from 'universal-cookie'
import { useQuery } from '@tanstack/react-query'

interface PacienteProps {
  id: string
  firstName: string
  lastName: string
  gender: string
  age: number
  ifChildWasItPremature?: string
  ifChildHadIncurrenceDuringPregnancy?: string
  ifChildHowWasChildbirth?: string
  city: string
  state: string
  cep: string
  tel: string
  createdAt: string
}

export function Paciente() {
  const cookies = new Cookies()

  const { data: pacientes } = useQuery<PacienteProps[]>(
    ['pacientes'],
    async () => {
      const response = await axios.get('http://localhost:3000/api/pacient', {
        headers: {
          Authorization: `Bearer ${cookies.get('jwt')}`,
        },
      })

      console.log(response)
      return response.data
    },
  )

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
            </InteractiveContainer>
          </InfoContainer>
          <PacienteCardContainer>
            {pacientes?.map((paciente: PacienteProps) => {
              return (
                <nav key={paciente.id}>
                  <NavLink
                    to={`/pacientes/${paciente.id}`}
                    title="paciente"
                    className="dataCard"
                  >
                    <div className="nomePaciente">
                      <span id="tituloSessao">Nome</span>
                      <span>{paciente.firstName}</span>
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
