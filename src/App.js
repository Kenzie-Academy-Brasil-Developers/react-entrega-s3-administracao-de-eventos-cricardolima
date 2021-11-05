import { Divider } from "@material-ui/core";
import { Header } from "./components/Header";
import { Routes } from "./routes";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Divider />
      <Routes />
    </div>
  );
}

export default App;
