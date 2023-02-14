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

export function Login() {
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
            <FormContainer>
              <label htmlFor="email">E-mail</label>
              <EmailInput id="email" placeholder="contato@email.com" required />

              <label htmlFor="password">Senha</label>
              <PasswordInput id="password" placeholder="********" required />
            </FormContainer>
            <ButtonContainer>
              <button>Login</button>
              <a href="">Esqueceu a senha?</a>
            </ButtonContainer>
          </RightLoginContentContainer>
        </div>
      </RightContainer>
    </LoginContainer>
  )
}
