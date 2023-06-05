import styled from 'styled-components'

export const AddExameFisicoContainer = styled.div`
  display: flex;

  background: ${(props) => props.theme.gray[200]};
  height: 100vh;
  width: 80vw;

  .pad {
    display: flex;
    margin-top: 7.75vh;
    padding: 2%;

    .container {
      display: flex;
      background: white;
      width: 76.75vw;
      border-radius: 14px;
    }
  }
`

export const VoltarContainer = styled.nav`
  display: flex;
  width: 15%;
  height: 5%;

  justify-content: center;
  margin-top: 5%;

  a {
    color: ${(props) => props.theme.blue[400]};

    &:hover {
      color: ${(props) => props.theme.blue[600]};
    }
  }
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 85%;
  margin-top: 3%;
  overflow-y: scroll;

  #title {
    font-weight: 600;
    font-size: 1.75rem;
  }

  #obrigatorio {
    margin-top: 1%;
    color: red;
    font-size: 0.8rem;
    opacity: 80%;
  }
`

export const FormStructure = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3%;
  padding-left: 1%;

  .texto {
    display: flex;
    flex-direction: row;
    padding: 0 0 2% 0;
    font-size: 1rem;
    font-weight: bold;
    gap: 0.25rem;
  }

  .asterisco {
    color: red;
  }

  .entrada-form {
    border: 1px solid ${(props) => props.theme.gray[400]};
    border-radius: 3px;

    padding: 3.3%;
    padding-left: 1.5%;

    width: 90%;
    height: 4vh;
    font-size: 1rem;
  }

  .entrada-form-erro {
    border: 1px solid red;
    border-radius: 3px;

    padding: 3.3%;
    padding-left: 1.5%;

    width: 90%;
    height: 4vh;
    font-size: 1rem;
  }

  .entrada-date {
    width: 90%;
    height: 4vh;
    margin-bottom: 4%;
  }
`
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 10%;
  margin-top: 3%;
  margin-bottom: 3%;

  button {
    border: 0;
    width: 50%;
    height: 3rem;
    background: ${(props) => props.theme.blue[500]};
    color: ${(props) => props.theme.slate[50]};
    font-size: 1.25rem;
    font-weight: 500;
    border-radius: 20px;

    :hover {
      cursor: pointer;
      transition: background-color 5ms;
      background: ${(props) => props.theme.blue[700]};
    }
  }
`
