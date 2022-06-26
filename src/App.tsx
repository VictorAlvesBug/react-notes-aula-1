import { GlobalStyles } from "./GlobalStyles";
import Home from "./pages/Home";

function App() {
  return (
    <>
    { /* GlobalStyles --> Estilização geral da aplicação */ }
      <GlobalStyles />
      
    { /* Home --> Componente onde ficam os elementos da aplicação */ }
      <Home />
    </>
  );
}

export default App;
