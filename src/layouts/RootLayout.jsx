import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

/* components */
import LogoSection from "../components/Header/LogoSection";
import Navigation from "../components/Header/Navigation";
import AboutSchool from "../components/Footer/AboutSchool";
import QuickLinks from "../components/Footer/QuickLinks";
import Social from "../components/Footer/Social";
import Copyright from "../components/Footer/Copyright";
// import SocialLinks from "../components/SocialLinks";
import ScrollTop from "../components/ScrollTop";

/* util Functions*/
import CapitalizeStr from "../utils/CapitalizeStr";

export default function RootLayout() {
  const location = useLocation();

  useEffect(() => {
    const pathStrings = location.pathname.split("/");
    const title = "Prayaas India - An initiative by the students of BIT Sindri";
    document.title =
      pathStrings.length > 1 && pathStrings[1] !== ""
        ? `${CapitalizeStr(pathStrings[1])} | ${title}`
        : title;
  });

  return (
    <>
      {/* <SocialLinks /> */}
      <ScrollTop />
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
