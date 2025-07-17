import "./styles/index.css";
import {Header} from "./components/Header/";
import {BannerSection} from "./components/sections/Bannersection/"
import {ProjectSection} from "./components/sections/Projectssection/"
import {ListSection} from "./components/sections/Listsection/"
import {Footer} from "./components/Footer/"

function App() {
  return (
    <>
      <Header />
      <BannerSection />
      <ProjectSection />
      <ListSection />
      <Footer />
    </>
  );
}

export default App;