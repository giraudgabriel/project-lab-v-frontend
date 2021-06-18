import React from "react";
import styled from "styled-components";
import { setUser } from "~/actions";
import { useDispatch, useSelector } from "react-redux";

function Menu({ children }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const logout = (e) => {
    e.preventDefault();
    if (window.confirm("Deseja realmente sair?"))
      dispatch(
        setUser({
          username: null,
          roles: [],
        })
      );
  };

  return (
    <>
      <Container>
        {user?.username != null && (
          <>
            <MenuItem>Bem vindo {user?.username}!</MenuItem>
            <MenuItem onClick={logout}>Sair</MenuItem>
          </>
        )}
      </Container>
      {children}
    </>
  );
}

export const Container = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  background: #242424;
  width: 100%;
  height: 64px;
`;

export const MenuItem = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  padding: 16px;
  color: #fff;
  font-size: 18px;
  width: 100%;
  height: 64px;
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
`;

export default Menu;
