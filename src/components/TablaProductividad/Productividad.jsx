import React from "react";
import { FiMoreVertical } from "react-icons/fi";
import { AiOutlineEye } from "react-icons/ai";
import { MdOutlineDownloadForOffline } from "react-icons/md";
import { Container, Menu, Table, MoreInfo, MenuNav, SubMenu } from "./styles";

const Productividad = () => {
  const tablas = [
    {
      id: 1,
      poblacion: "Oper - Carga",
      total_vac: 15.5,
      vac_x_uf: 1.2,
      tubo: 12.4,
      tiempo_vac: 12,
      algo_mas: 34,
    },
    {
      id: 1,
      poblacion: "Tripulación",
      total_vac: 15.5,
      vac_x_uf: 1.2,
      tubo: 12.4,
      tiempo_vac: 12,
      algo_mas: 34,
    },
    {
      id: 2,
      poblacion: "Soporte",
      total_vac: 15.5,
      vac_x_uf: 1.2,
      tubo: 12.4,
      tiempo_vac: 12,
      algo_mas: 34,
    },
    {
      id: 3,
      poblacion: "Oper - Mantenimiento",
      total_vac: 15.5,
      vac_x_uf: 1.2,
      tubo: 12.4,
      tiempo_vac: 12,
      algo_mas: 34,
    },
  ];

  return (
    <Container>
      <Menu>
        <a href="">UF1</a>
        <a href="">UF2</a>
        <a href="">Rol</a>
        <a href="">País</a>
        <a href="">Población</a>
      </Menu>
      <Table>
        <thead>
          <tr>
            <th>Población</th>
            <th>Total Vac</th>
            <th>Vac x UF</th>
            <th>Tubo</th>
            <th>Tiempo Vac. Prom (Meses)</th>

            <MoreInfo>
              <MenuNav>
                <li>
                  <a href="">
                    <FiMoreVertical />
                  </a>
                  <SubMenu>
                    <li>
                      <a href="">
                        <span>
                          <AiOutlineEye />
                        </span>
                        Ver más
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <span>
                          <MdOutlineDownloadForOffline />
                        </span>
                        Descargar
                      </a>
                    </li>
                  </SubMenu>
                </li>
              </MenuNav>
            </MoreInfo>

            <th>Tiempo Vac. {">"} 6M(%)</th>
          </tr>
        </thead>
        <tbody>
          {tablas.map((tabla) => (
            <tr>
              <td>{tabla.poblacion} </td>
              <td>{tabla.total_vac} %</td>
              <td>{tabla.vac_x_uf} </td>
              <td>{tabla.tubo} %</td>
              <td>{tabla.tiempo_vac}</td>
              <td></td>
              <td>{tabla.algo_mas}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Productividad;
