import React from "react";
import styled from "styled-components";
import { setUser } from "~/actions";
import { useDispatch } from "react-redux";
import { hasRole } from "~/hooks/useRole";

function Menu({ children }) {
  const dispatch = useDispatch();

  const hasMenuItems = hasRole("admin") || hasRole("policia");

  const logout = (e) => {
    e.preventDefault();
    if (window.confirm("Deseja realmente sair?")) dispatch(setUser(undefined));
  };

  return (
    <>
      <Container>
        <MenuItem>Home</MenuItem>
        {hasMenuItems && (
          <>
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
