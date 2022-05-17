import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import Hero from "./components/Hero/Index";
import Navbar from "./components/Navbar/Index";
import { BrowserRouter as Router } from "react-router-dom";
import About from "./components/About/Index";
import Work from "components/Work";
import Contact from "components/Contact"
import { Helmet } from "react-helmet"
const theme = {
  orange: "#FFBA08",
  red: "#FF1F1F"

}

function App() {

  return (
    <Router>
      <ThemeProvider theme={ theme }>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Olwethu Matiwana's Portfolio</title>
          <link rel="canonical" href="https://shakadeliks.github.io/portfolio/" />
          <meta name="description" content="Portfolio of work and information of Olwethu Matiwana" />
        </Helmet>
        <GlobalStyles />

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
