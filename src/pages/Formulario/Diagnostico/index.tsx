import axios from 'axios'
import { useForm } from 'react-hook-form'
import { NavLink, useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie'
import {
  FormContainer,
  FormStructure,
  VoltarContainer,
  DiagnosticoContainer,
  ButtonContainer,
} from './style'
import { CaretCircleLeft } from 'phosphor-react'

interface DiagnosticosProps {
  diagnosis: string
  goals: string
  treatmentPlan: string
  considerations: string
}

export function Diagnosticos() {
  const { register, watch, handleSubmit } = useForm<DiagnosticosProps>()
  const navigate = useNavigate()

  const diagnosis: string = watch('diagnosis')
  const goals: string = watch('goals')
  const treatmentPlan: string = watch('treatmentPlan')
  const considerations: string = watch('considerations')

  const cookies = new Cookies()

  async function handlePacientCreation(data: DiagnosticosProps) {
    const { diagnosis, goals, treatmentPlan, considerations } = data

    const response = await axios.post(
      'http://localhost:3000/api/anamnese',
      {
        diagnosis,
        goals,
        treatmentPlan,
        considerations,
      },
      {
        headers: {
          Authorization: `Bearer ${cookies.get('jwt')}`,
        },
      },
    )

    console.log(response)

    navigate('/formularios')
  }

  return (
    <DiagnosticoContainer>
      <div className="pad">
        <div className="container">
          <VoltarContainer>
            <NavLink to="/formularios">
              <CaretCircleLeft size={49} weight="fill" />
            </NavLink>
          </VoltarContainer>

          <FormContainer
            onSubmit={handleSubmit(handlePacientCreation)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault()
              }
            }}
          >
            <FormStructure>
              <div className="texto">
                <span>Diagnostico Fisioterapeutico</span>
                <span className="asterisco">*</span>
              </div>
              <input
                className={diagnosis ? 'entrada-form' : 'entrada-form-erro'}
                type="text"
                placeholder="Diagnostico Fisioterapeutico"
                {...register('diagnosis')}
                required
              />
            </FormStructure>

            <FormStructure>
              <div className="texto">
                <span>Plano de Tratamento</span>
                <span className="asterisco">*</span>
              </div>
              <input
                className={treatmentPlan ? 'entrada-form' : 'entrada-form-erro'}
                type="text"
                placeholder="Plano de Tratamento"
                {...register('treatmentPlan')}
                required
              />
            </FormStructure>

            <FormStructure>
              <div className="texto">
                <span>Objetivos</span>
                <span className="asterisco">*</span>
              </div>
              <input
                className={goals ? 'entrada-form' : 'entrada-form-erro'}
                type="text"
                placeholder="Objetivos"
                {...register('goals')}
                required
              />
            </FormStructure>

            <FormStructure>
              <div className="texto">
                <span>Considerações</span>
                <span className="asterisco">*</span>
              </div>
              <input
                className={
                  considerations ? 'entrada-form' : 'entrada-form-erro'
                }
                type="text"
                placeholder="Considerações"
                {...register('considerations')}
                required
              />
            </FormStructure>

            <ButtonContainer>
              <button type="submit">Finalizar</button>
            </ButtonContainer>
          </FormContainer>
        </div>
      </div>
    </DiagnosticoContainer>
  )
}
