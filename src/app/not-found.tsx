"use client";
import { useTheme } from "styled-components";
import styled from "styled-components";

const Link = styled.a`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.white};
  margin-top: 2.0rem;
  transition: 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.grey};
    text-decoration: underline;
  }
`;

export default function NotFound() {
  const theme = useTheme();
  return (
    <div
      style={{
        textAlign: "center",
        padding: "40px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1 style={{ fontSize: "2.8rem", color: theme.colors.grey }}>
        404 - Página não encontrada
      </h1>

      <p style={{ fontSize: "2.0rem", color: theme.colors.grey }}>
        A página que você tentou acessar não existe.
      </p>

      <Link href="/private/home">Voltar para Home</Link>
    </div>
  );
}
