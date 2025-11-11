'use client'
import { ReactNode } from "react";
import { SectionsHomeContainer } from "./styles";

type SectionsHomeProps = {
  subtitle?: string;
  children?: ReactNode;
};

export default function SectionsHome({ subtitle, children }: SectionsHomeProps) {
  return (
    <SectionsHomeContainer>
      <h2>{subtitle}</h2>
      {children}
    </SectionsHomeContainer>
  );
}
