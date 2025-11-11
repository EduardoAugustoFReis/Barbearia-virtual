import LoginForm from "@/components/FormLogin";
import { BackgroundImg, LoginSection, PageLoginContainer } from "./styles";

export default function PageLogin() {
  return (
    <PageLoginContainer>
      <LoginSection>
        <LoginForm />
      </LoginSection>
      <BackgroundImg />
    </PageLoginContainer>
  );
}
