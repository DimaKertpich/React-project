import HeaderSection from "./components/header/headerSection";
import ContentSection from "./components/content/contentSection";
import Technology from "./components/technology/technologySection.js";
import 'normalize-css'

function App() {
  return (
    <div className="App">
      <HeaderSection/>
      <ContentSection/>
      <Technology/>
    </div>
  );
}

export default App;
