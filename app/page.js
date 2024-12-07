import About from "./Components/Homepage/About";
import Introduction from "./Components/Homepage/Introduction";
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
      </div>
      {/* Footer */}

    </div>
  );
}
