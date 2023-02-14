import styled from 'styled-components'

export const LoginContainer = styled.div`
  align-items: center;
  display: flex;
  position: fixed;
`

export const LeftContainer = styled.div`
  height: 100vh;
  width: 47vw;
  background: linear-gradient(
    180deg,
    ${(props) => props.theme.blue[50]} 0vh,
    ${(props) => props.theme.blue[400]} 0.01vh,
    ${(props) => props.theme.blue[800]} 100vh
  );
`

export const LeftContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  img {
    width: 100vw;
    height: 44.0625rem;
    margin-top: 3.375rem;
    margin-bottom: 8.8125rem;
  }
`

export const LeftTextContentContainer = styled.div`
  padding: 0 3.125rem;
  margin-bottom: 2.5625rem;
  display: flex;
  flex-direction: column;
  gap: 3.125rem;
  margin-top: calc(0px - 8.8125rem - 3.125rem);

  #title {
    gap: 0.625rem;
    font-size: 2.5rem;
    font-weight: 800;
    color: ${(props) => props.theme.slate[50]};
  }

  #title-content {
    color: ${(props) => props.theme.slate[50]};
    font-size: 1.75rem;
    font-weight: 400;
  }
`

export const RightContainer = styled.div`
  height: 100vh;
  width: 53vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`

export const BaseContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 6rem;
  margin-right: 5.25rem;
  align-items: flex-start;
`

export const RightTextLoginContentContainer = styled(BaseContent)`
  gap: 1rem;

  #login {
    color: ${(props) => props.theme.slate[900]};
    font-size: 3rem;
    font-weight: 700;
    line-height: 2.125rem;
  }

  #login-content {
    color: ${(props) => props.theme.gray[400]};
    font-size: 1.375rem;
    line-height: 1.375rem;
    font-weight: 300;
  }
`

export const RightLoginContentContainer = styled(BaseContent)`
  margin-top: 4.5625rem;
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: ${(props) => props.theme.slate[900]};
  font-size: 1.25rem;
  font-weight: 900;
  gap: 1rem;
`

export const BaseInput = styled.input`
  background: transparent;
  border: 1px solid ${(props) => props.theme.slate[300]};
  border-radius: 5px;
  width: 36.4375rem;
  height: 3.3825rem;
  padding: 1.25rem;
  font-weight: 300;
  font-size: 1.25rem;
`

export const EmailInput = styled(BaseInput)``

export const PasswordInput = styled(BaseInput)``

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3.875rem;

  button {
    border: 0;
    width: 36.4375rem;
    height: 3.3825rem;
    background: ${(props) => props.theme.blue[500]};
    color: ${(props) => props.theme.slate[50]};
    font-size: 1.25rem;
    font-weight: 500;
    border-radius: 20px;
  }

  a {
    color: ${(props) => props.theme.blue[500]};
    font-size: 1.25rem;
    font-weight: 400;
    margin-top: 1.25rem;
  }
`
