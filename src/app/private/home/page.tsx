import Header from "@/components/Header";
import { HomePageContainer } from "./styles";
import UserDataSection from "@/components/UserDataSection";
import SectionsHome from "@/components/SectionsHome";
import ClientRoleGuard from "@/components/Guards/ClientRoleGuard";
import BarberRoleGuard from "@/components/Guards/BarberRoleGuard";

export default function PageHome() {
  return (
    <HomePageContainer>
      <Header />
      <UserDataSection />
      <SectionsHome subtitle="Funcionários"></SectionsHome>

      <SectionsHome subtitle="Serviços"></SectionsHome>

      <ClientRoleGuard />
      <BarberRoleGuard />
    </HomePageContainer>
  );
}
