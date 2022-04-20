// React
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Styles
import "./App.css";

// Components
import Header from "./components/Header/Header";

// Pages
import Movies from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";
import Search from "./Pages/Search/Search";
import Trending from "./Pages/Trending/Trending";

// MUI Components
import SimpleBottomNavigation from "./components/MainNav";
import Container from "@material-ui/core/Container";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Container>
          <Switch>
            <Route exact path="/" component={Trending} />
            <Route path="/movies" component={Movies} />
            <Route path="/series" component={Series} />
            <Route path="/search" component={Search} />
          </Switch>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
