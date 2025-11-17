import { FooterContainer } from "./styles";
import { Instagram } from "@deemlol/next-icons";
import { Facebook } from "@deemlol/next-icons";
import { Youtube } from "@deemlol/next-icons";
import Image from "next/image";
export default function Footer() {
  return (
    <FooterContainer>
      <Image src={`/logo barbearia.png`} height={80} width={80} alt="Logo da barbearia" className="logo"/>
      <div className="icons">
        <a href="#">
          <Instagram size={24} color="#FFFFFF" />
        </a>
        <a href="#">
          <Facebook size={24} color="#FFFFFF" />
        </a>
        <a href="#">
          <Youtube size={24} color="#FFFFFF" />
        </a>
      </div>
    </FooterContainer>
  );
}
