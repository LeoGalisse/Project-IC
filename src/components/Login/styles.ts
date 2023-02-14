import styled from 'styled-components'

export const LoginContainer = styled.div`
  align-items: center;
  display: flex;
  position: fixed;

  @media (max-width: 768px) {
    html {
      font-size: 87.5%;
    }

    flex-direction: column;
    position: relative;
  }
`

export const LeftContainer = styled.div`
  height: 100vh;
  width: 47vw;
  position: relative;
  background: linear-gradient(
    180deg,
    ${(props) => props.theme.blue[50]} 0%,
    ${(props) => props.theme.blue[400]} 0.01%,
    ${(props) => props.theme.blue[800]} 100%
  );

  @media (max-width: 768px) {
    width: 100vw;
    height: 85vh;
  }

  @media (max-width: 375px) {
    width: 100vw;
    height: 90vh;
  }

  @media (max-width: 280px) {
    height: 95vh;
  }
`

export const LeftContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  img {
    width: 60vw;
    height: 65vh;
    margin-bottom: 8.8125rem;
  }

  @media (max-width: 768px) {
    img {
      width: 100vw;
      margin-top: calc(0px - 4rem);
    }
  }
`

export const LeftTextContentContainer = styled.div`
  padding: 0 3.125rem;
  display: flex;
  flex-direction: column;
  gap: 3.125rem;
  margin-top: calc(0px - 7rem - 3.125rem);

  #title {
    font-size: 2.5rem;
    font-weight: 800;
    color: ${(props) => props.theme.slate[50]};
  }

  #title-content {
    color: ${(props) => props.theme.slate[50]};
    font-size: 1.75rem;
    font-weight: 400;
  }

  @media (max-height: 407px) or (max-width: 407px) {
    gap: 1rem;
    #title {
      font-size: 2rem;
    }
  }
`

export const RightContainer = styled.div`
  width: 53vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-top: 2%;

  @media (max-width: 768px) {
    width: 100vw;
  }
`

export const BaseContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12%;
  margin-right: 5.25rem;
  align-items: flex-start;

  @media (max-width: 768px) {
    margin-left: 15%;
  }
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
    text-align: left;
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
  width: 40vw;
  max-width: 583px;
  height: 3.3825rem;
  padding: 1.25rem;
  font-weight: 300;
  font-size: 1.25rem;

  @media (max-width: 768px) {
    width: 70vw;
  }
`

export const EmailInput = styled(BaseInput)``

export const PasswordInput = styled(BaseInput)``

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3.875rem;

  button {
    border: 0;
    width: 40vw;
    max-width: 583px;
    height: 3.3825rem;
    background: ${(props) => props.theme.blue[500]};
    color: ${(props) => props.theme.slate[50]};
    font-size: 1.25rem;
    font-weight: 500;
    border-radius: 20px;

    :hover {
      cursor: pointer;
      transition: 5ms;
      background: ${(props) => props.theme.blue[700]};
    }

    @media (max-width: 768px) {
      width: 70vw;
    }
  }

  a {
    color: ${(props) => props.theme.blue[500]};
    font-size: 1.25rem;
    font-weight: 400;
    margin-top: 1.25rem;
    text-decoration: none;
  }
`
