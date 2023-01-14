import { Outlet } from "react-router-dom";

/* components */
import LogoSection from "../components/Header/LogoSection";
import Navigation from "../components/Header/Navigation";
import AboutSchool from "../components/Footer/AboutSchool";
import QuickLinks from "../components/Footer/QuickLinks";
import Social from "../components/Footer/Social";
import Copyright from "../components/Footer/Copyright";
import SocialLinks from "../components/SocialLinks";

function RootLayout() {
  return (
    <>
      <SocialLinks />

      <header className="header">
        <LogoSection />
        <Navigation />
      </header>

      <Outlet />

      <footer className="footer">
        <AboutSchool />
        <QuickLinks />
        <Social />
        <Copyright />
      </footer>
    </>
  );
}

export default RootLayout;
