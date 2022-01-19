import { ThemeProvider } from "styled-components";
import BackgroundVideo from "./components/BackgroundVideo/Index";
import GlobalStyles from "./components/GlobalStyles";
import Hero from "./components/Hero/Index";
import Navbar from "./components/Navbar/Index";
import { BrowserRouter as Router } from "react-router-dom";
import About from "./components/About/Index";
import Work from "components/Work";
import Contact from "components/Contact"

const theme = {
  orange: "#FFBA08",
  red: "#FF1F1F"

}

function App() {

  return (
    <Router>
      <ThemeProvider theme={ theme }>
        <GlobalStyles />
        <BackgroundVideo />
        <Navbar />
        <Hero />
        <About/>
        <Work />
        <Contact />
      </ThemeProvider>
    </Router>
  );
}

export default App;
