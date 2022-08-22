import Menu from "./components/Menu/Menu";
import DatosDelMes from "./components/DatosDelMes/DatosDelMes";
import Productividad from "./components/TablaProductividad/Productividad";

function App() {
  return (
    <>
      <div className="flex">
        <Menu />

        <div className="ml-56">
          <Productividad />
        </div>

        <Productividad />
      </div>
    </>
  );
}

export default App;
