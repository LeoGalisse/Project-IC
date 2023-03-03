import styled from 'styled-components'

export const MenuContainer = styled.div`
  width: 20vw;
  display: block;
  padding: 2vw;

  img {
    width: 80%;
    margin-bottom: 3rem;
    margin-inline: 10%;
  }

  span {
    color: ${(props) => props.theme.gray[800]};
  }
`

export const ItemsContainer = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
  margin-bottom: 2rem;
  gap: 0.5rem;

  div {
    height: 2.5rem;
    align-items: center;

    a {
      text-decoration: none;
      color: ${(props) => props.theme.gray[900]};
      display: flex;
      gap: 0.5rem;
      align-items: center;
      padding: 0.25rem;
      padding-left: 0.85rem;

      .title {
        display: flex;
        margin-top: 3px;
      }
    }
  }

  div :hover {
    background: ${(props) => props.theme.blue[600]};
    color: ${(props) => props.theme.slate[50]};
    border: 1px solid transparent;
    border-radius: 1rem;
  }
`
