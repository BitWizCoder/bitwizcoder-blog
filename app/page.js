import About from "./Components/Homepage/About";
import Blog from "./Components/Homepage/Blog";
import Contact from "./Components/Homepage/Contact";
import Introduction from "./Components/Homepage/Introduction";
import Portfolio from "./Components/Homepage/Portfolio";
import Services from "./Components/Homepage/Services";
import Skills from "./Components/Homepage/Skills";
import Testimonials from "./Components/Homepage/Testimonials";
import Sidebar from "./Components/Sidebar";



export default function Home() {
  return (
    <div className="container flex">

      {/* Side Bar */}
      <Sidebar />

      <div className="pl-[312px]">
        {/* Main Content */}
        <Introduction />
        <About />
        <Skills />
        <Services />
        <Testimonials />
        <Portfolio />
        <Blog />
        <Contact />
      </div>
      {/* Footer */}

    </div>
  );
}
