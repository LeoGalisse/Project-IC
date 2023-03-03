import styled from 'styled-components'

export const HomeContainer = styled.div`
  background: ${(props) => props.theme.gray[200]};
  height: 100vh;
  width: 80vw;
  display: flex;

  .pad {
    padding: 2%;
    margin-top: 7vh;
    display: flex;
    flex-direction: row;
  }
`

export const TutorialContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 46vh;
  width: 45vw;
  justify-content: center;
  align-items: center;
  text-align: center;

  background: white;
  border-radius: 14px;

  img {
    width: 50%;
    height: 50%;
  }

  span:first-of-type {
    font-weight: bold;
    font-size: 1.25rem;
    margin-bottom: 1.5rem;
  }

  nav {
    border: 0;
    border-radius: 10px;

    padding: 0.5rem 1rem 0.5rem 1rem;
    margin-bottom: 3%;

    background: ${(props) => props.theme.blue[500]};

    a {
      text-decoration: none;
      color: ${(props) => props.theme.slate[50]};
      font-size: 1rem;
      font-weight: 500;
    }
  }

  nav :hover {
    padding: 0.1rem 0.1rem 0.1rem 0.1rem;
    border-radius: 15px;
  }
`

export const ChartContainer = styled.div`
  display: flex;
  margin-top: 3%;
  width: 45vw;
  height: 38vh;

  border-radius: 14px;
  background: white;
`

export const PacientesContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 2%;
  margin-right: -1%;
  width: 31vw;
  height: 87vh;

  border-radius: 14px;
  background: white;

  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    font-weight: 500;
    padding: 8%;

    #suggestions {
      border-radius: 17.5px;
      border: 0;
      font-weight: 500;
      font-size: 0.8rem;
      padding: 1%;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    padding: 0 5% 5% 5%;

    img {
      margin-left: 30%;
      height: 9vh;
      border-radius: 15px;
    }

    .data {
      display: flex;
      flex-direction: row;
      height: 12vh;
      justify-content: space-between;
      align-items: center;

      border-radius: 10px;
      box-shadow: 0px 32px 120px ${(props) => props.theme.gray[200]};
      margin-bottom: 5%;
    }

    .informacaoPaciente {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      margin-left: -30px;

      #time {
        color: ${(props) => props.theme.gray[400]};
      }
    }

    #icon {
      margin-right: 10px;
    }
  }
`
