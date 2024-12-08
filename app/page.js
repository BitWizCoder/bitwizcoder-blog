import About from "./Components/Homepage/About";
import Introduction from "./Components/Homepage/Introduction";
import Services from "./Components/Homepage/Services";
import Skills from "./Components/Homepage/Skills";
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
      </div>
      {/* Footer */}

    </div>
  );
}
