import React from "react";
import styled from "styled-components";
import { Table, PageHeader, Typography } from "antd";
const { Paragraph } = Typography;

export default function Users() {
  return (
    <Container>
      <PageHeader>
        <Paragraph>Usuários</Paragraph>
      </PageHeader>
      <Table />
    </Container>
  );
}

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  height: 100%;
  justify-content: center;
`;
