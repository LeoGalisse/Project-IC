import styled from 'styled-components'

export const PacienteContainer = styled.div`
  display: flex;

  background: ${(props) => props.theme.gray[200]};
  height: 100vh;
  width: 80vw;

  .pad {
    display: flex;
    margin-top: 7.75vh;
    padding: 2%;

    .container {
      flex-direction: column;
      background: white;
      width: 76.75vw;
      border-radius: 14px;

      overflow-y: scroll;
    }
  }
`

export const InfoContainer = styled.div`
  display: flex;
  justify-content: end;

  .title {
    margin-top: 2.8%;
    font-weight: 700;
  }
`

export const InteractiveContainer = styled.div`
  display: flex;
  align-items: center;
  height: 15vh;
  padding: 3%;
  padding-right: 3%;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.slate[50]};
  }

  .navdiv {
    background: ${(props) => props.theme.blue[500]};
    padding: 0 2% 0 5%;
    height: 6vh;
    width: 19vw;
    border-radius: 10px;
    margin-right: 15%;

    &:hover {
      background: ${(props) => props.theme.blue[700]};
    }
  }

  .botao {
    display: flex;
    align-items: center;
    gap: 6px;

    padding: 5% 0 5% 0;
  }
`

export const SelectContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 4vh;
`

export const PacienteCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3%;

  img {
    height: 9vh;
    border-radius: 15px;
  }

  .dataCard {
    display: flex;
    flex-direction: row;
    justify-content: start;
    padding: 1%;
    margin-bottom: 1%;
    align-items: center;
    text-align: center;
    text-decoration: none;
    color: ${(props) => props.theme.slate[900]};

    border-radius: 6px;
    border: 1px solid ${(props) => props.theme.gray[300]};
    box-shadow: 2px 2px ${(props) => props.theme.gray[300]};

    .nomePaciente {
      display: flex;
      flex-direction: column;
      width: 10vw;
      margin-left: 5%;

      white-space: nowrap;
      overflow: hidden;
    }

    .numeroSessoes {
      display: flex;
      flex-direction: column;
      width: 11vw;
      margin-left: 7%;
    }

    .ultimaSessao {
      display: flex;
      flex-direction: column;
      width: 10vw;
      margin-left: 5%;
    }

    .problema {
      display: flex;
      flex-direction: column;
      width: 20vw;
      margin-left: 2%;
    }

    #tituloSessao {
      font-weight: 500;
      font-size: 1rem;
      height: 5vh;
    }
  }
`
