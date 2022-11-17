import HeaderSection from "./components/header/headerSection";
import ContentSection from "./components/content/contentSection";
import Technology from "./components/technology/technologySection";
import Footer from './components/footer/footerSection';
import 'normalize-css'

function App() {
  return (
    <div className="App">
      <HeaderSection/>
      <ContentSection/>
      <Technology/>
      <Footer/>
    </div>
  );
}

export default App;
