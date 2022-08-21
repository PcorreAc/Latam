import Menu from "./components/Menu/Menu";
import DatosDelMes from "./components/DatosDelMes/DatosDelMes";
import Productividad from "./components/TablaProductividad/Productividad";

function App() {
  return (
    <>
      <div className="flex">
        <Menu />
        <DatosDelMes />
      </div>
      <Productividad />
    </>
  );
}

export default App;
