import styled from "styled-components";

export const Container = styled.div`
  margin-left: 30px;
  width: 36.7rem;
  height: 21rem;
  margin-top: 20px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  box-shadow: 10px 10px 30px 10px rgba(0, 0, 0, 0.07);
  margin-bottom: 50px;
`;

export const Menu = styled.div`
  width: auto;
  display: flex;
  justify-content: space-between;

  a {
    width: 116px;
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  a:first-child {
    border-top-left-radius: 10px;
  }

  a:last-child {
    border-top-right-radius: 10px;
  }

  a:active {
    color: blue;
    border-bottom: 3px solid red;
    background-color: white;
  }
`;

export const Table = styled.table`
  margin-top: 15px;
  margin-left: 1.5%;
  width: 97%;

  thead {
    height: 50px;
  }

  thead tr {
    background-color: rgba(0, 0, 0, 0.03);
  }

  thead tr th {
    max-width: 100px;
    padding: 6px;
    color: blue;
    font-size: 0.9rem;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  & th:first-child {
    text-align: start;
  }

  & th:last-child {
    display: none;
  }

  tbody tr td {
    font-weight: 400;
    height: 3.3rem;
    text-align: end;
    padding-right: 1rem;
    border-bottom: 1px solid #e9ecef;
  }

  & td:last-child {
    display: none;
  }

  tbody tr td:first-child {
    text-align: inherit;
    padding-left: 8px;
    font-size: 0.9rem;
    font-weight: bold;
  }

  tbody tr:last-child {
    & td {
      border-bottom: none;
    }
  }
`;

export const MoreInfo = styled.nav`
  font-size: 1.5rem;
  cursor: pointer;
`;

export const MenuNav = styled.ul`
  display: block;
  padding: 15px 20px;
  margin: 0 -10px 0 -5px;
  li a {
    color: blue;
  }

  li:hover ul {
    visibility: visible;

    & a {
      padding: 10px 40px 10px 20px;
    }
  }
`;

export const SubMenu = styled.ul`
  position: absolute;
  visibility: hidden;
  background-color: #fff;
  translate: -130px;
  border-radius: 5px;
  box-shadow: 10px 10px 30px 10px rgba(0, 0, 0, 0.07);

  li a {
    display: flex;
    color: black;
    font-weight: 400;
    font-size: 1rem;

    span {
      margin: 2px 5px 0 0;
      font-size: 1.3rem;
      color: blue;
    }
  }
`;
