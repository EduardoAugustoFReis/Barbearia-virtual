import Header from "@/components/Header";
import {
  GreetingSectionHome,
  HomePageContainer,
  PageContainer,
} from "./styles";
import UserDataSection from "@/components/UserDataSection";
import SectionsHome from "@/components/SectionsHome";
import ClientRoleGuard from "@/components/Guards/ClientRoleGuard";
import BarberRoleGuard from "@/components/Guards/BarberRoleGuard";
import FetchBarbers from "@/components/FetchEmployees";
import FetchServices from "@/components/FetchServices";
import Footer from "@/components/footer";
import AdminRoleGuard from "@/components/Guards/AdminRoleGuard";

export default function PageHome() {
  return (
    <PageContainer>
      <Header />
      <HomePageContainer>
        <GreetingSectionHome>
          <UserDataSection />
          <div className="text-box">
            <h2>Bem vindo a barbearia virtual!</h2>
            <p>Aqui você pode agendar os seus cortes</p>
            <p>Venha conhecer nossos serviços e barbeiro</p>
          </div>
        </GreetingSectionHome>

        <SectionsHome subtitle="Funcionários">
          <FetchBarbers />
        </SectionsHome>

        <SectionsHome subtitle="Serviços">
          <FetchServices />
        </SectionsHome>

        <ClientRoleGuard />
        <BarberRoleGuard />
        <AdminRoleGuard />
      </HomePageContainer>
      <Footer />
    </PageContainer>
  );
}
