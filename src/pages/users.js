import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Table, Tag, PageHeader, Typography } from "antd";
const { Paragraph } = Typography;
import { hasRole } from "~/hooks/useRole";
import CharacterService from "~/services/CharacterService";
import Permission from "~/components/permission";

export default function Users() {
  const [users, setUsers] = useState([]);

  const isAdmin = hasRole("admin");
  const isPolice = hasRole("policia");

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Nome",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Grupos",
      dataIndex: "groups",
      key: "group.code",
      render: (groups) => (
        <span>
          {groups.map((group) => {
            return <Tag key={group.code}>{group.code}</Tag>;
          })}
        </span>
      ),
    },
    {
      title: "Banco",
      dataIndex: "bank",
      key: "bank.balance",
      render: (bank) => (
        <Permission roles={["admin"]}>
          <Tag color="green">
            {bank?.balance.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </Tag>
        </Permission>
      ),
    },
  ];

  const getUsers = async () => {
    let response = {};
    if (isAdmin) response = await CharacterService.get();
    else response = await CharacterService.getAllDto();
    setUsers(response.data);
  };

  useEffect(() => {
    if (isAdmin || isPolice) {
      (async () => {
        await getUsers();
      })();
    }
  }, []);

  return (
    <Container>
      <PageHeader>
        <Paragraph>Usuários</Paragraph>
      </PageHeader>
      <Table dataSource={users} columns={columns} />
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
