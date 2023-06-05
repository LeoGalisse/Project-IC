import { NavLink } from 'react-router-dom'
import {
  FormularioContainer,
  InfoContainer,
  InteractiveContainer,
  PacienteCardContainer,
} from './styles'
import { Plus } from 'phosphor-react'
import Cookies from 'universal-cookie'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

interface AnamneseProps {
  id: number
  mainComplaint: string
  hasPain: boolean
  takesMedicationToImprove: boolean
  evolved: boolean
  howMuchEvolved: number
  improvementFactor: boolean
  ifImprovementWitchOneImprovement: string
  worseFactor: boolean
  ifWorseWitchOneWorse: string
  hasHappenedBefore: boolean
  chronicDisease: boolean
  ifYesWhatDegreeOfSeveriry: number
  previusDeseases: boolean
  ifYesWitchoPreviusDeseases: string
  familyIllnesses: boolean
  ifFamilyIllnessesWitchOnes: string
  continuousMedication: boolean
  ifYesContinuousMedicationWitchOnes: string
  previousDiagnosis: boolean
  ifPreviousDiagnosesWitchOnes: string
  traumas: boolean
  ifTraumasWitchOnes: string
  surgeries: boolean
  ifSurgeriesWitchOnes: string
  allergy: boolean
  ifAllergyWitchOnes: string
  alcoholUse: boolean
  amountOfAlcohol: number
  smoker: boolean
  amountOfCigarretes: number
  drugsUse: boolean
  hobby: boolean
  ifHobbyWitchOnes: string
}

export function Formulario() {
  const cookies = new Cookies()

  const { data: anamnese } = useQuery<AnamneseProps[]>(
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
    <>
      <FormularioContainer>
        <div className="pad">
          <div className="container">
            <InfoContainer>
              <div className="title">
                <span>FORMULARIO</span>
              </div>
              <InteractiveContainer>
                <nav className="navdiv">
                  <NavLink to="/formularios/anamnese" title="addAnamnese">
                    <div className="botao">
                      <span>Adicionar Formulario</span>
                      <Plus size={18} />
                    </div>
                  </NavLink>
                </nav>
              </InteractiveContainer>
            </InfoContainer>
            <PacienteCardContainer>
              {anamnese?.map((anamnese: AnamneseProps) => {
                return (
                  <nav key={anamnese.id}>
                    <NavLink
                      to={`/pacientes/${anamnese.id}`}
                      title="paciente"
                      className="dataCard"
                    >
                      <div className="nomePaciente">
                        <span id="tituloSessao">Queixa Principal</span>
                        <span>{anamnese.mainComplaint}</span>
                      </div>
                    </NavLink>
                  </nav>
                )
              })}
            </PacienteCardContainer>
          </div>
        </div>
      </FormularioContainer>
    </>
  )
}
