import React from "react";
import styled from "styled-components";

export default function Menu() {
  return (
    <Container>
      <MenuItem>Home</MenuItem>
      <MenuItem>Usuários</MenuItem>
      <MenuItem>Sair</MenuItem>
    </Container>
  );
}

export const Container = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
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
`;
