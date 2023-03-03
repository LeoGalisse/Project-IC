import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  position: absolute;

  height: 8vh;
  width: 80vw;
  margin-left: 20vw;

  background: linear-gradient(
    90deg,
    ${(props) => props.theme.blue[50]} 0%,
    ${(props) => props.theme.blue[400]} 0.01%,
    ${(props) => props.theme.blue[800]} 100%
  );
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 1rem;

  #busca {
    background: ${(props) => props.theme.slate[50]};
    border-radius: 12px 0 0 12px;
    height: 1.75rem;
  }

  input {
    border: 0;
    margin: 0.5rem;
    margin-left: 0;
    width: 22rem;
    height: 1.75rem;
    border-radius: 0 12px 12px 0;
    background: ${(props) => props.theme.slate[50]};
  }
`

export const AvatarContainer = styled.div`
  display: flex;
  align-items: center;

  margin-right: 1rem;
  gap: 0.5rem;

  #notificacao {
    color: ${(props) => props.theme.slate[50]};
  }

  img {
    height: 2.5rem;
    border-radius: 20px;
  }
`
