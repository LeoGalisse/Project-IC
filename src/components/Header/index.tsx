import { Bell, MagnifyingGlass } from 'phosphor-react'
import { AvatarContainer, HeaderContainer, InputContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <InputContainer>
        <MagnifyingGlass id="busca" size={26.5} />
        <input type="text" placeholder="Pesquise aqui" />
      </InputContainer>
      <AvatarContainer>
        <Bell id="notificacao" size={25} />
        <img src="https://github.com/LeoGalisse.png" alt="" />
      </AvatarContainer>
    </HeaderContainer>
  )
}
