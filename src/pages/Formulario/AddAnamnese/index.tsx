import axios from 'axios'
import { useForm } from 'react-hook-form'
import { NavLink, useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie'
import {
  AddAnamneseContainer,
  ButtonContainer,
  FormContainer,
  FormStructure,
  VoltarContainer,
} from './style'
import { CaretCircleLeft } from 'phosphor-react'

interface AnamneseProps {
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

export function AddAnamnese() {
  const { register, watch, handleSubmit } = useForm<AnamneseProps>()
  const navigate = useNavigate()

  const mainComplaint = watch('mainComplaint')
  const hasPain = watch('hasPain')
  const evolved = watch('takesMedicationToImprove')
  const takesMedicationToImprove = watch('takesMedicationToImprove')
  const howMuchEvolved = watch('takesMedicationToImprove')
  const improvementFactor = watch('takesMedicationToImprove')
  const ifImprovementWitchOneImprovement = watch('takesMedicationToImprove')
  const worseFactor = watch('takesMedicationToImprove')
  const ifWorseWitchOneWorse = watch('takesMedicationToImprove')
  const hasHappenedBefore = watch('takesMedicationToImprove')
  const chronicDisease = watch('takesMedicationToImprove')
  const ifYesWhatDegreeOfSeveriry = watch('takesMedicationToImprove')
  const previusDeseases = watch('takesMedicationToImprove')
  const ifYesWitchoPreviusDeseases = watch('takesMedicationToImprove')
  const familyIllnesses = watch('takesMedicationToImprove')
  const ifFamilyIllnessesWitchOnes = watch('takesMedicationToImprove')
  const continuousMedication = watch('takesMedicationToImprove')
  const ifYesContinuousMedicationWitchOnes = watch('takesMedicationToImprove')
  const previousDiagnosis = watch('takesMedicationToImprove')
  const ifPreviousDiagnosesWitchOnes = watch('takesMedicationToImprove')
  const traumas = watch('takesMedicationToImprove')
  const ifTraumasWitchOnes = watch('takesMedicationToImprove')
  const surgeries = watch('takesMedicationToImprove')
  const ifSurgeriesWitchOnes = watch('takesMedicationToImprove')
  const allergy = watch('takesMedicationToImprove')
  const ifAllergyWitchOnes = watch('takesMedicationToImprove')
  const alcoholUse = watch('takesMedicationToImprove')
  const amountOfAlcohol = watch('takesMedicationToImprove')
  const smoker = watch('takesMedicationToImprove')
  const amountOfCigarretes = watch('takesMedicationToImprove')
  const drugsUse = watch('takesMedicationToImprove')
  const hobby = watch('takesMedicationToImprove')
  const ifHobbyWitchOnes = watch('takesMedicationToImprove')

  const cookies = new Cookies()

  async function handlePacientCreation(data: AnamneseProps) {
    const {
      mainComplaint,
      hasPain,
      takesMedicationToImprove,
      evolved,
      howMuchEvolved,
      improvementFactor,
      ifImprovementWitchOneImprovement,
      worseFactor,
      ifWorseWitchOneWorse,
      hasHappenedBefore,
      chronicDisease,
      ifYesWhatDegreeOfSeveriry,
      previusDeseases,
      ifYesWitchoPreviusDeseases,
      familyIllnesses,
      ifFamilyIllnessesWitchOnes,
      continuousMedication,
      ifYesContinuousMedicationWitchOnes,
      previousDiagnosis,
      ifPreviousDiagnosesWitchOnes,
      traumas,
      ifTraumasWitchOnes,
      surgeries,
      ifSurgeriesWitchOnes,
      allergy,
      ifAllergyWitchOnes,
      alcoholUse,
      amountOfAlcohol,
      smoker,
      amountOfCigarretes,
      drugsUse,
      hobby,
      ifHobbyWitchOnes,
    } = data

    const response = await axios.post(
      'http://localhost:3000/api/anamnese',
      {
        mainComplaint,
        hasPain,
        takesMedicationToImprove,
        evolved,
        howMuchEvolved,
        improvementFactor,
        ifImprovementWitchOneImprovement,
        worseFactor,
        ifWorseWitchOneWorse,
        hasHappenedBefore,
        chronicDisease,
        ifYesWhatDegreeOfSeveriry,
        previusDeseases,
        ifYesWitchoPreviusDeseases,
        familyIllnesses,
        ifFamilyIllnessesWitchOnes,
        continuousMedication,
        ifYesContinuousMedicationWitchOnes,
        previousDiagnosis,
        ifPreviousDiagnosesWitchOnes,
        traumas,
        ifTraumasWitchOnes,
        surgeries,
        ifSurgeriesWitchOnes,
        allergy,
        ifAllergyWitchOnes,
        alcoholUse,
        amountOfAlcohol,
        smoker,
        amountOfCigarretes,
        drugsUse,
        hobby,
        ifHobbyWitchOnes,
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
    <AddAnamneseContainer>
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
            <span id="title">Nova Anamsene</span>
            <span id="obrigatorio">*Obrigatorio</span>

            <FormStructure>
              <div className="texto">
                <span>Queixa Principal</span>
                <span className="asterisco">*</span>
              </div>
              <input
                className={mainComplaint ? 'entrada-form' : 'entrada-form-erro'}
                type="text"
                placeholder="Queixa Princial"
                {...register('mainComplaint')}
                required
              />
            </FormStructure>

            <FormStructure>
              <div className="texto">
                <span>Tem dor?</span>
                <span className="asterisco">*</span>
              </div>
              <input
                className={hasPain ? 'entrada-form' : 'entrada-form-erro'}
                type="text"
                placeholder="Sim ou Não"
                {...register('hasPain')}
                required
              />
            </FormStructure>

            <FormStructure>
              <div className="texto">
                <span>Toma remedio para melhora?</span>
                <span className="asterisco">*</span>
              </div>
              <input
                className={
                  takesMedicationToImprove
                    ? 'entrada-form'
                    : 'entrada-form-erro'
                }
                type="text"
                placeholder="Sim ou Não"
                {...register('takesMedicationToImprove')}
              />
            </FormStructure>

            <FormStructure>
              <div className="texto">
                <span>Evoluiu?</span>
                <span className="asterisco">*</span>
              </div>
              <input
                className={evolved ? 'entrada-form' : 'entrada-form-erro'}
                type="text"
                placeholder="Sim ou Não"
                {...register('evolved')}
                required
              />
            </FormStructure>

            <FormStructure>
              <div className="texto">
                <span>Quando evoluiu?</span>
                <span className="asterisco">*</span>
              </div>
              <input
                className={
                  howMuchEvolved ? 'entrada-form' : 'entrada-form-erro'
                }
                type="text"
                placeholder="1 pouco - 10 Muito"
                {...register('howMuchEvolved')}
                required
              />
            </FormStructure>

            <FormStructure>
              <div className="texto">
                <span>Fator de Melhora?</span>
                <span className="asterisco">*</span>
              </div>
              <input
                className={
                  improvementFactor ? 'entrada-form' : 'entrada-form-erro'
                }
                type="text"
                placeholder="Sim ou Não"
                {...register('improvementFactor')}
                required
              />
            </FormStructure>

            <FormStructure>
              <div className="texto">
                <span>Se sim, qual o fator de melhora?</span>
                <span className="asterisco">*</span>
              </div>
              <input
                className={
                  ifImprovementWitchOneImprovement
                    ? 'entrada-form'
                    : 'entrada-form-erro'
                }
                type="text"
                placeholder="Qual o fator de melhora"
                {...register('ifImprovementWitchOneImprovement')}
              />
            </FormStructure>

            <FormStructure>
              <div className="texto">
                <span>Fator de piora?</span>
                <span className="asterisco">*</span>
              </div>
              <input
                className={worseFactor ? 'entrada-form' : 'entrada-form-erro'}
                type="text"
                placeholder="Sim ou Não"
                {...register('worseFactor')}
                required
              />
            </FormStructure>

            <FormStructure>
              <div className="texto">
                <span>Se sim, qual o fator de piora?</span>
                <span className="asterisco">*</span>
              </div>
              <input
                className={
                  ifWorseWitchOneWorse ? 'entrada-form' : 'entrada-form-erro'
                }
                type="text"
                placeholder="Qual o fator de piora"
                {...register('ifWorseWitchOneWorse')}
              />
            </FormStructure>

            <FormStructure>
              <div className="texto">
                <span>Já aconteceu antes?</span>
                <span className="asterisco">*</span>
              </div>
              <input
                className={
                  hasHappenedBefore ? 'entrada-form' : 'entrada-form-erro'
                }
                type="text"
                placeholder="Sim ou Não"
                {...register('hasHappenedBefore')}
                required
              />
            </FormStructure>

            <FormStructure>
              <div className="texto">
                <span>Doenças crónicas?</span>
                <span className="asterisco">*</span>
              </div>
              <input
                className={
                  chronicDisease ? 'entrada-form' : 'entrada-form-erro'
                }
                type="text"
                placeholder="Sim ou Não"
                {...register('chronicDisease')}
                required
              />
            </FormStructure>

            <FormStructure>
              <div className="texto">
                <span>Se sim, quais?</span>
                <span className="asterisco">*</span>
              </div>
              <input
                className={
                  ifYesWhatDegreeOfSeveriry
                    ? 'entrada-form'
                    : 'entrada-form-erro'
                }
                type="text"
                placeholder="Quais doeças crônicas"
                {...register('ifYesWhatDegreeOfSeveriry')}
              />
            </FormStructure>

            <FormStructure>
              <div className="texto">
                <span>Doenças Previas?</span>
                <span className="asterisco">*</span>
              </div>
              <input
                className={
                  previusDeseases ? 'entrada-form' : 'entrada-form-erro'
                }
                type="text"
                placeholder="Sim ou Não"
                {...register('previusDeseases')}
                required
              />
            </FormStructure>

            <FormStructure>
              <div className="texto">
                <span>Se sim, quais doenças previas?</span>
                <span className="asterisco">*</span>
              </div>
              <input
                className={
                  ifYesWitchoPreviusDeseases
                    ? 'entrada-form'
                    : 'entrada-form-erro'
                }
                type="text"
                placeholder="Quais doenças previas"
                {...register('ifYesWitchoPreviusDeseases')}
              />
            </FormStructure>

            <FormStructure>
              <div className="texto">
                <span>Doenças Familiares?</span>
                <span className="asterisco">*</span>
              </div>
              <input
                className={
                  familyIllnesses ? 'entrada-form' : 'entrada-form-erro'
                }
                type="text"
                placeholder="Sim ou Não"
                {...register('familyIllnesses')}
                required
              />
            </FormStructure>

            <FormStructure>
              <div className="texto">
                <span>Se sim, quais doenças falimiares?</span>
                <span className="asterisco">*</span>
              </div>
              <input
                className={
                  ifFamilyIllnessesWitchOnes
                    ? 'entrada-form'
                    : 'entrada-form-erro'
                }
                type="text"
                placeholder="Quais doenças?"
                {...register('ifFamilyIllnessesWitchOnes')}
              />
            </FormStructure>

            <FormStructure>
              <div className="texto">
                <span>Medicação continua?</span>
                <span className="asterisco">*</span>
              </div>
              <input
                className={
                  continuousMedication ? 'entrada-form' : 'entrada-form-erro'
                }
                type="text"
                placeholder="Sim ou Não"
                {...register('continuousMedication')}
                required
              />
            </FormStructure>

            <FormStructure>
              <div className="texto">
                <span>Se sim, quais medicamentos?</span>
                <span className="asterisco">*</span>
              </div>
              <input
                className={
                  ifYesContinuousMedicationWitchOnes
                    ? 'entrada-form'
                    : 'entrada-form-erro'
                }
                type="text"
                placeholder="Quais Medicamentos"
                {...register('ifYesContinuousMedicationWitchOnes')}
              />
            </FormStructure>

            <FormStructure>
              <div className="texto">
                <span>Diagnosticos Previos?</span>
                <span className="asterisco">*</span>
              </div>
              <input
                className={
                  previousDiagnosis ? 'entrada-form' : 'entrada-form-erro'
                }
                type="text"
                placeholder="Sim ou Não"
                {...register('evolved')}
                required
              />
            </FormStructure>

            <FormStructure>
              <div className="texto">
                <span>Evoluiu?</span>
                <span className="asterisco">*</span>
              </div>
              <input
                className={
                  ifPreviousDiagnosesWitchOnes
                    ? 'entrada-form'
                    : 'entrada-form-erro'
                }
                type="text"
                placeholder="Quais diagnosticos"
                {...register('ifPreviousDiagnosesWitchOnes')}
              />
            </FormStructure>

            <FormStructure>
              <div className="texto">
                <span>Traumatismos?</span>
                <span className="asterisco">*</span>
              </div>
              <input
                className={traumas ? 'entrada-form' : 'entrada-form-erro'}
                type="text"
                placeholder="Sim ou Não"
                {...register('traumas')}
                required
              />
            </FormStructure>

            <FormStructure>
              <div className="texto">
                <span>Evoluiu?</span>
                <span className="asterisco">*</span>
              </div>
              <input
                className={
                  ifTraumasWitchOnes ? 'entrada-form' : 'entrada-form-erro'
                }
                type="text"
                placeholder="Quais Traumas"
                {...register('ifTraumasWitchOnes')}
              />
            </FormStructure>

            <FormStructure>
              <div className="texto">
                <span>Cirurgias?</span>
                <span className="asterisco">*</span>
              </div>
              <input
                className={surgeries ? 'entrada-form' : 'entrada-form-erro'}
                type="text"
                placeholder="Sim ou Não"
                {...register('surgeries')}
                required
              />
            </FormStructure>

            <FormStructure>
              <div className="texto">
                <span>Quais Cirurgias?</span>
                <span className="asterisco">*</span>
              </div>
              <input
                className={
                  ifSurgeriesWitchOnes ? 'entrada-form' : 'entrada-form-erro'
                }
                type="text"
                placeholder="Quais Cirurgias"
                {...register('ifSurgeriesWitchOnes')}
              />
            </FormStructure>

            <FormStructure>
              <div className="texto">
                <span>Alergia?</span>
                <span className="asterisco">*</span>
              </div>
              <input
                className={allergy ? 'entrada-form' : 'entrada-form-erro'}
                type="text"
                placeholder="Sim ou Não"
                {...register('allergy')}
                required
              />
            </FormStructure>

            <FormStructure>
              <div className="texto">
                <span>Quais Alergias?</span>
                <span className="asterisco">*</span>
              </div>
              <input
                className={
                  ifAllergyWitchOnes ? 'entrada-form' : 'entrada-form-erro'
                }
                type="text"
                placeholder="Quais Alergias"
                {...register('ifAllergyWitchOnes')}
              />
            </FormStructure>

            <FormStructure>
              <div className="texto">
                <span>Uso de Alcool?</span>
                <span className="asterisco">*</span>
              </div>
              <input
                className={alcoholUse ? 'entrada-form' : 'entrada-form-erro'}
                type="text"
                placeholder="Sim ou Não"
                {...register('alcoholUse')}
                required
              />
            </FormStructure>

            <FormStructure>
              <div className="texto">
                <span>Quantidade de Alcool?</span>
                <span className="asterisco">*</span>
              </div>
              <input
                className={
                  amountOfAlcohol ? 'entrada-form' : 'entrada-form-erro'
                }
                type="text"
                placeholder="1 pouco - 10 muito"
                {...register('amountOfAlcohol')}
                required
              />
            </FormStructure>

            <FormStructure>
              <div className="texto">
                <span>Fuma?</span>
                <span className="asterisco">*</span>
              </div>
              <input
                className={smoker ? 'entrada-form' : 'entrada-form-erro'}
                type="text"
                placeholder="Sim ou Não"
                {...register('smoker')}
                required
              />
            </FormStructure>

            <FormStructure>
              <div className="texto">
                <span>Quantos cigarros?</span>
                <span className="asterisco">*</span>
              </div>
              <input
                className={
                  amountOfCigarretes ? 'entrada-form' : 'entrada-form-erro'
                }
                type="text"
                placeholder="1 pouco - 10 muito"
                {...register('amountOfCigarretes')}
                required
              />
            </FormStructure>

            <FormStructure>
              <div className="texto">
                <span>Uso de toxicos?</span>
                <span className="asterisco">*</span>
              </div>
              <input
                className={drugsUse ? 'entrada-form' : 'entrada-form-erro'}
                type="text"
                placeholder="Sim ou Não"
                {...register('drugsUse')}
                required
              />
            </FormStructure>

            <FormStructure>
              <div className="texto">
                <span>hobby?</span>
                <span className="asterisco">*</span>
              </div>
              <input
                className={hobby ? 'entrada-form' : 'entrada-form-erro'}
                type="text"
                placeholder="Sim ou Não"
                {...register('hobby')}
                required
              />
            </FormStructure>

            <FormStructure>
              <div className="texto">
                <span>Quais Hobbies?</span>
                <span className="asterisco">*</span>
              </div>
              <input
                className={
                  ifHobbyWitchOnes ? 'entrada-form' : 'entrada-form-erro'
                }
                type="text"
                placeholder="Quais Hobies"
                {...register('ifHobbyWitchOnes')}
              />
            </FormStructure>

            <NavLink to="examefisico">
              <ButtonContainer>
                <button type="submit">Avançar</button>
              </ButtonContainer>
            </NavLink>
          </FormContainer>
        </div>
      </div>
    </AddAnamneseContainer>
  )
}
