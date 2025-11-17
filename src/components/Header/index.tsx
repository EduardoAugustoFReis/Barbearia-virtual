import Image from "next/image";
import Menu from "./Menu";
import { HeaderContainer } from "./styles";

export default function Header() {
  return (
    <HeaderContainer>
      <Image src={`/logo barbearia.png`} height={80} width={80} alt="Logo da barbearia" className="logo"/>
      <Menu />
    </HeaderContainer>
  )
}