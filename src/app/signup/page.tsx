import SignupForm from "@/components/SignupForm";
import { BackgroundImg, PageSignUpContainer, SignUpSection } from "./styles";

export default function PageSignup() {
  return (
    <PageSignUpContainer>
      <SignUpSection>
        <SignupForm />
      </SignUpSection>
      <BackgroundImg/>
    </PageSignUpContainer>
  );
}
