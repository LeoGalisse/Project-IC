import axios from 'axios'
import { useForm } from 'react-hook-form'
import { NavLink, useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie'
import {
  AddExameFisicoContainer,
  ButtonContainer,
  FormContainer,
  FormStructure,
  VoltarContainer,
} from './style'
import { CaretCircleLeft } from 'phosphor-react'

interface ExameFisicoProps {
  howDidYouGetToSector: number
  condition: string
  vitalSigns: number
  cognition: number
  sensorySystem: number
  reflexMotricity: number
  muscleTone: string
  ifSpascityWhatDegree: string
  rangeOfMotion: number
  muscleStrength: number
  march: number
}

export function AddExameFisico() {
  const { register, watch, handleSubmit } = useForm<ExameFisicoProps>()
  const navigate = useNavigate()

  const howDidYouGetToSector = watch('howDidYouGetToSector')
  const condition = watch('condition')
  const vitalSigns = watch('vitalSigns')
  const cognition = watch('cognition')
  const sensorySystem = watch('sensorySystem')
  const reflexMotricity = watch('reflexMotricity')
  const muscleTone = watch('muscleTone')
  const ifSpascityWhatDegree = watch('ifSpascityWhatDegree')
  const rangeOfMotion = watch('rangeOfMotion')
  const muscleStrength = watch('muscleStrength')
  const march = watch('march')

  const cookies = new Cookies()

  async function handleExameFisicoCreation(data: ExameFisicoProps) {
    const {
      howDidYouGetToSector,
      condition,
      vitalSigns,
      cognition,
      sensorySystem,
      reflexMotricity,
      muscleTone,
      ifSpascityWhatDegree,
      rangeOfMotion,
      muscleStrength,
      march,
    } = data

    const response = await axios.post(
      'http://localhost:3000/api/anamnese',
      {
        howDidYouGetToSector,
        condition,
        vitalSigns,
        cognition,
        sensorySystem,
        reflexMotricity,
        muscleTone,
        ifSpascityWhatDegree,
        rangeOfMotion,
        muscleStrength,
        march,
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
    <AddExameFisicoContainer>
      <div className="pad">
        <div className="container">
          <VoltarContainer>
            <NavLink to="/formularios/anamnese">
              <CaretCircleLeft size={49} weight="fill" />
            </NavLink>
          </VoltarContainer>

          <FormContainer
            onSubmit={handleSubmit(handleExameFisicoCreation)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault()
              }
            }}
          >
            <span id="title">Novo Exame Fisico</span>
            <span id="obrigatorio">*Obrigatorio</span>

            <FormStructure>
              <div className="texto">
                <span>Como chegou ao setor</span>
                <span className="asterisco">*</span>
              </div>
              <input
                className={
                  howDidYouGetToSector ? 'entrada-form' : 'entrada-form-erro'
                }
                type="text"
                placeholder="Como Chegou ao Setor"
                {...register('howDidYouGetToSector')}
                required
              />
            </FormStructure>

            <FormStructure>
              <div className="texto">
                <span>Estado Geral</span>
                <span className="asterisco">*</span>
              </div>
              <input
                className={condition ? 'entrada-form' : 'entrada-form-erro'}
                list="condition-sugestoes"
                placeholder="Selecione o estado geral"
                {...register('condition')}
                required
              />
              <datalist id="condition-sugestoes">
                <option value="Bom estado geral" />
                <option value="Regular estado geral" />
              </datalist>
            </FormStructure>

            <FormStructure>
              <div className="texto">
                <span>Sinais Vitais</span>
                <span className="asterisco">*</span>
              </div>
              <input
                className={vitalSigns ? 'entrada-form' : 'entrada-form-erro'}
                type="text"
                placeholder="Sinais Vitais"
                {...register('vitalSigns')}
                required
              />
            </FormStructure>

            <FormStructure>
              <div className="texto">
                <span>Cognição</span>
                <span className="asterisco">*</span>
              </div>
              <input
                className={cognition ? 'entrada-form' : 'entrada-form-erro'}
                type="text"
                placeholder="Cognicao"
                {...register('cognition')}
                required
              />
            </FormStructure>

            <FormStructure>
              <div className="texto">
                <span>Sistema Sensorial</span>
                <span className="asterisco">*</span>
              </div>
              <input
                className={sensorySystem ? 'entrada-form' : 'entrada-form-erro'}
                type="text"
                placeholder="Sistema Sensorial"
                {...register('sensorySystem')}
                required
              />
            </FormStructure>

            <FormStructure>
              <div className="texto">
                <span>Motricidade Reflexa</span>
                <span className="asterisco">*</span>
              </div>
              <input
                className={
                  reflexMotricity ? 'entrada-form' : 'entrada-form-erro'
                }
                type="text"
                placeholder="Motricidade Reflexa"
                {...register('reflexMotricity')}
                required
              />
            </FormStructure>

            <FormStructure>
              <div className="texto">
                <span>Estado Geral</span>
                <span className="asterisco">*</span>
              </div>
              <input
                className={muscleTone ? 'entrada-form' : 'entrada-form-erro'}
                list="muscleTone-sugestoes"
                placeholder="Selecione o estado geral"
                {...register('muscleTone')}
                required
              />
              <datalist id="muscleTone-sugestoes">
                <option value="Normal" />
                <option value="Hipotonia" />
                <option value="Hipertonia" />
                <option value="Rigidez" />
                <option value="Espasticidade" />
              </datalist>
            </FormStructure>

            <FormStructure>
              <div className="texto">
                <span>Estado Geral</span>
                <span className="asterisco">*</span>
              </div>
              <input
                className={
                  ifSpascityWhatDegree ? 'entrada-form' : 'entrada-form-erro'
                }
                list="Spascity-sugestoes"
                placeholder="Selecione o estado geral"
                {...register('ifSpascityWhatDegree')}
                required
              />
              <datalist id="Spascity-sugestoes">
                <option value="Normal" />
                <option value="Leve aumento" />
                <option value="Aumento mais marcante" />
                <option value="Aumento consideravel" />
                <option value="Parte afetada rigida" />
              </datalist>
            </FormStructure>

            <FormStructure>
              <div className="texto">
                <span>Amplitude do movimento</span>
                <span className="asterisco">*</span>
              </div>
              <input
                className={rangeOfMotion ? 'entrada-form' : 'entrada-form-erro'}
                type="text"
                placeholder="Amplitude do movimento"
                {...register('rangeOfMotion')}
                required
              />
            </FormStructure>

            <FormStructure>
              <div className="texto">
                <span>Força Muscular</span>
                <span className="asterisco">*</span>
              </div>
              <input
                className={
                  muscleStrength ? 'entrada-form' : 'entrada-form-erro'
                }
                type="text"
                placeholder="Força do Muscular"
                {...register('muscleStrength')}
                required
              />
            </FormStructure>

            <FormStructure>
              <div className="texto">
                <span>March</span>
                <span className="asterisco">*</span>
              </div>
              <input
                className={march ? 'entrada-form' : 'entrada-form-erro'}
                type="text"
                placeholder="Marcha"
                {...register('march')}
                required
              />
            </FormStructure>

            <NavLink to="diagnostico">
              <ButtonContainer>
                <button type="submit">Avançar</button>
              </ButtonContainer>
            </NavLink>
          </FormContainer>
        </div>
      </div>
    </AddExameFisicoContainer>
  )
}
