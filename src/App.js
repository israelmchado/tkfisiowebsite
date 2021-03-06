import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import GlobalStyle from "./globalStyles"
import { Navbar, Footer } from "./components"
import Home from "./pages/HomePage/Home"
import About from "./pages/About/About"
import Services from "./pages/Services/Services"
import Contact from "./pages/Contact/Contact"
import ScrollToTop from "./components/ScrollToTop"

 
 
function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/services" exact component={Services} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
        <Footer />
    </Router>
  )
}

export default App;
