import { useForm } from 'react-hook-form'
import logo from '../../assets/login-image.svg'
import {
  FormContainer,
  LeftContainer,
  LeftContentContainer,
  LeftTextContentContainer,
  LoginContainer,
  RightContainer,
  RightLoginContentContainer,
  RightTextLoginContentContainer,
  EmailInput,
  PasswordInput,
  ButtonContainer,
} from './styles'
import axios from 'axios'
import Cookies from 'universal-cookie'
import { useNavigate } from 'react-router-dom'

interface LoginProps {
  email: string
  password: string
}

export function Login() {
  const { register, handleSubmit } = useForm<LoginProps>()
  const navigate = useNavigate()

  const cookies = new Cookies()

  async function handleLoginInfo({ email, password }: LoginProps) {
    console.log(email, password)
    const response = await axios.post(
      'http://localhost:3000/api/v1/auth/email/login',
      {
        email,
        password,
      },
    )

    if (response.status === 200) {
      cookies.set('jwt', response.data.token, { path: '/' })
      navigate('/home')
    }
  }

  return (
    <LoginContainer>
      <LeftContainer>
        <LeftContentContainer>
          <img src={logo} alt="" />
          <LeftTextContentContainer>
            <span id="title">Entre no Ehealth</span>
            <span id="title-content">
              Faça de cada paciente, um tratamento especial!
            </span>
          </LeftTextContentContainer>
        </LeftContentContainer>
      </LeftContainer>
      <RightContainer>
        <div>
          <RightTextLoginContentContainer>
            <span id="login">Login</span>
            <span id="login-content">Insira as informações cadastradas</span>
          </RightTextLoginContentContainer>
          <RightLoginContentContainer>
            <FormContainer onSubmit={handleSubmit(handleLoginInfo)}>
              <label htmlFor="email">E-mail</label>
              <EmailInput
                id="email"
                placeholder="contato@email.com"
                {...register('email')}
                required
              />

              <label htmlFor="password">Senha</label>
              <PasswordInput
                id="password"
                placeholder="********"
                {...register('password')}
                required
              />
              <ButtonContainer>
                <button type="submit">Login</button>
                <a href="">Esqueceu a senha?</a>
              </ButtonContainer>
            </FormContainer>
          </RightLoginContentContainer>
        </div>
      </RightContainer>
    </LoginContainer>
  )
}
