import FormNewEmployee from "@/components/FormNewEmployee";
import { Main, NewEmployeePageContainer } from "./styles";
import Link from "next/link";

export default function PageNewEmployee() {
  return (
    <NewEmployeePageContainer>
      <Link href={`/private/home`}>Voltar para a Home</Link>
      <Main>
        <FormNewEmployee />
      </Main>
    </NewEmployeePageContainer>
  );
}
