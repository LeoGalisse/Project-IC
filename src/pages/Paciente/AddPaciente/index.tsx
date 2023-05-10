import { CaretCircleLeft } from 'phosphor-react'
import { NavLink, useNavigate } from 'react-router-dom'
import {
  AddPacienteContainer,
  ButtonContainer,
  FormContainer,
  FormStructure,
  VoltarContainer,
} from './style'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import Cookies from 'universal-cookie'

interface PacienteProps {
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
}

export function AddPaciente() {
  const { register, watch, handleSubmit } = useForm<PacienteProps>()
  const navigate = useNavigate()

  const cookies = new Cookies()

  const firstName = watch('firstName')
  const lastName = watch('lastName')
  const gender = watch('gender')
  const age = watch('age')
  const city = watch('city')
  const state = watch('state')
  const cep = watch('cep')
  const tel = watch('tel')

  async function handlePacientCreation(data: PacienteProps) {
    const {
      firstName,
      lastName,
      gender,
      age,
      ifChildWasItPremature,
      ifChildHadIncurrenceDuringPregnancy,
      ifChildHowWasChildbirth,
      city,
      state,
      cep,
      tel,
    } = data

    const response = await axios.post(
      'http://localhost:3000/api/pacient',
      {
        firstName,
        lastName,
        gender,
        age: Number(age),
        ifChildWasItPremature,
        ifChildHadIncurrenceDuringPregnancy,
        ifChildHowWasChildbirth,
        city,
        state,
        cep,
        tel,
      },
      {
        headers: {
          Authorization: `Bearer ${cookies.get('jwt')}`,
        },
      },
    )

    console.log(response)

    navigate('/pacientes')
  }

  return (
    <AddPacienteContainer>
      <div className="pad">
        <div className="container">
          <VoltarContainer>
            <NavLink to="/pacientes">
              <CaretCircleLeft size={40} weight="fill" />
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
            <span id="title">Novo Paciente</span>
            <span id="obrigatorio">*Obrigatório</span>
            <FormStructure>
              <div className="texto">
                <span>PRIMEIRO NOME</span>
                <span className="asterisco">*</span>
              </div>
              <input
                className={firstName ? 'entrada-form' : 'entrada-form-erro'}
                type="text"
                placeholder="Marcelo"
                {...register('firstName')}
                required
              />
            </FormStructure>
            <FormStructure>
              <div className="texto">
                <span>SOBRENOME</span>
                <span className="asterisco">*</span>
              </div>
              <input
                className={lastName ? 'entrada-form' : 'entrada-form-erro'}
                type="text"
                placeholder="Ribeiro"
                {...register('lastName')}
                required
              />
            </FormStructure>
            <FormStructure>
              <div className="texto">
                <span>SEXO</span>
                <span className="asterisco">*</span>
              </div>
              <input
                className={gender ? 'entrada-form' : 'entrada-form-erro'}
                list="gender-sugestoes"
                placeholder="Selecione o gender"
                {...register('gender')}
                required
              />
              <datalist id="gender-sugestoes">
                <option value="Masculino" />
                <option value="Feminino" />
              </datalist>
            </FormStructure>
            <FormStructure>
              <div className="texto">
                <span>IDADE</span>
                <span className="asterisco">*</span>
              </div>
              <input
                className={age ? 'entrada-form' : 'entrada-form-erro'}
                placeholder="Digite a idade"
                {...register('age')}
                required
              />
            </FormStructure>
            <FormStructure>
              <div className="texto">
                <span>Se criança, foi prematura?</span>
              </div>
              <input
                className="entrada-form"
                placeholder="Texto de resposta curta"
                {...register('ifChildWasItPremature')}
              />
            </FormStructure>
            <FormStructure>
              <div className="texto">
                <span>Se criança, teve incorrência na gestação?</span>
              </div>
              <input
                className="entrada-form"
                placeholder="Texto de resposta curta"
                {...register('ifChildHadIncurrenceDuringPregnancy')}
              />
            </FormStructure>
            <FormStructure>
              <div className="texto">
                <span>Se criança, como foi o parto?</span>
              </div>
              <input
                className="entrada-form"
                placeholder="Texto de resposta longa"
                {...register('ifChildHowWasChildbirth')}
              />
            </FormStructure>
            <FormStructure>
              <div className="texto">
                <span>CIDADE</span>
                <span className="asterisco">*</span>
              </div>
              <input
                className={city ? 'entrada-form' : 'entrada-form-erro'}
                placeholder="Santa Rita do Sapucaí"
                {...register('city')}
                required
              />
            </FormStructure>
            <FormStructure>
              <div className="texto">
                <span>ESTADO</span>
                <span className="asterisco">*</span>
              </div>
              <input
                className={state ? 'entrada-form' : 'entrada-form-erro'}
                placeholder="MG"
                {...register('state')}
                required
              />
            </FormStructure>
            <FormStructure>
              <div className="texto">
                <span>CEP</span>
                <span className="asterisco">*</span>
              </div>
              <input
                className={cep ? 'entrada-form' : 'entrada-form-erro'}
                placeholder="37701-000"
                {...register('cep')}
                required
              />
            </FormStructure>
            <FormStructure>
              <div className="texto">
                <span>TELEFONE</span>
                <span className="asterisco">*</span>
              </div>
              <input
                className={tel ? 'entrada-form' : 'entrada-form-erro'}
                placeholder="(35) 99999-9999"
                {...register('tel')}
                required
              />
            </FormStructure>
            <ButtonContainer>
              <button type="submit">Finalizar</button>
            </ButtonContainer>
          </FormContainer>
        </div>
      </div>
    </AddPacienteContainer>
  )
}
