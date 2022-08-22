import React from "react";

const DatosDelMes = () => {
  return (
    <div className="mt-16 container">
      <h2 className="text-gray-700 text-xl ">
        <span className="text-red-500 font-bold">|</span>Datos del mes
      </h2>

      <div class="mt-7 rounded-lg shadow-lg bg-white max-w-sm  flex">
        <div className="w-40">
          <h2 class="p-3 ml-2 font-bold block">
            Real{" "}
            <span className="text-blue-800 font-bold text-4xl">65.890</span>
          </h2>
        </div>

        <div class="p-3 border-l text-gray-800 w-48">
          <span className="text-red-600">5% menos</span> que el mes pasado
        </div>
      </div>
      <div class="mt-7 rounded-lg shadow-lg bg-white max-w-sm  flex">
        <div className="w-40">
          <h2 class="p-3 ml-2 font-bold block">
            Aprobado{" "}
            <span className="text-teal-500 font-bold text-4xl">65.890</span>
          </h2>
        </div>

        <div class="p-3 border-l text-gray-800 w-48">
          <span className="text-green-600">15% más</span> que el mes pasado
        </div>
      </div>
      <div class="mt-7 rounded-lg shadow-lg bg-white max-w-sm  flex">
        <div className="w-40">
          <h2 class="p-3 ml-2 font-bold block">
            Vacantes{" "}
            <span className="text-fuchsia-900 font-bold text-4xl">65.890</span>
          </h2>
        </div>

        <div class="p-3 border-l text-gray-800 w-48">
          <span className="text-red-600">8% menos</span> que el mes pasado
        </div>
      </div>
    </div>
  );
};

export default DatosDelMes;
