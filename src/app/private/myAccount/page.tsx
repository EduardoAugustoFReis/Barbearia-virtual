import Link from "next/link";
import { Main, PageMyAccountContainer } from "./styles";
import FormMyAccount from "@/components/FormMyAccount";

export default function PageMyAccount() {
  return (
    <PageMyAccountContainer>
      <Link href={`/private/home`}>Voltar para a Home</Link>
      <Main>
        <FormMyAccount />
      </Main>
    </PageMyAccountContainer>
  )
}