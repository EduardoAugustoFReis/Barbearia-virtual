"use client";
import Image from "next/image";
import { HeaderContainer } from "./styles";
import { useState } from "react";
import { Menu as MenuIcon } from "@deemlol/next-icons";
import { X } from "@deemlol/next-icons";
import Menu from "./Menu";
import { useTheme } from "styled-components";

export default function Header() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  return (
    <HeaderContainer>
      <Image
        src={`/logo barbearia.png`}
        height={80}
        width={80}
        alt="Logo da barbearia"
        className="logo"
      />

      <button onClick={() => setOpen(!open)} className="burger">
        {open ? <X size={24} /> : <MenuIcon size={24} color={`${theme.colors.white}`}/>}
      </button>

      <Menu open={open} onClose={() => setOpen(false)}/>
    </HeaderContainer>
  );
}
