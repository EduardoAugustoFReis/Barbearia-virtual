import FormNewService from "@/components/FormNewService";
import { Main, NewServicePageContainer } from "./styles";
import Link from "next/link";

export default function NewServicePage() {
  return (
    <NewServicePageContainer>
       <Link href={`/private/home`}>Voltar para a Home</Link>
      <Main>
        <FormNewService />
      </Main>
    </NewServicePageContainer>
  )
}