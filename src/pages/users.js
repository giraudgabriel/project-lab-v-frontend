import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Table, Tag, PageHeader, Input } from "antd";
import { hasRole } from "~/hooks/useRole";
import CharacterService from "~/services/CharacterService";
import Permission from "~/components/permission";

export default function Users() {
  const [users, setUsers] = useState([]);

  const isAdmin = hasRole("admin");
  const isPolice = hasRole("policia");

  const onUpdateUser = async (e, record) => {
    const name = e.target.value;
    if (record != null && name != null) {
      const response = await CharacterService.update(record.id, name);
      if (response.status == 200) {
        await getUsers();
        alert("Usuário salvo com sucesso!");
      }
    }
  };

  const mainColumns = [
    {
      title: "Nome",
      dataIndex: "name",
      key: "name",
      render: (name, record) =>
        isAdmin ? (
          <Input
            defaultValue={name}
            onPressEnter={(e) => onUpdateUser(e, record)}
          />
        ) : (
          name
        ),
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
  ];

  const columnsAdmin = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    ...mainColumns,
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
    {
      title: "",
      dataIndex: "id",
      key: "id",
      render: (id) => (
        <Permission roles={["admin"]}>
          <Tag color="red" onClick={(e) => onDelete(e, id)}>
            Apagar
          </Tag>
        </Permission>
      ),
    },
  ];

  const onDelete = async (e, id) => {
    e.preventDefault();
    if (isAdmin && window.confirm("Deseja realmente excluir este usuário?")) {
      await CharacterService.delete(id);
      await getUsers();
    }
  };

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
        <h3>Usuários</h3>
      </PageHeader>
      <Table
        dataSource={users}
        columns={isAdmin ? columnsAdmin : mainColumns}
      />
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
