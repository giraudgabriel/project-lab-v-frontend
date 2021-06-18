import React from "react";
import { Form, Input, Button } from "antd";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import CharacterService from "~/services/CharacterService";
import { setUser } from "~/actions";

export default function Login() {
  const dispatch = useDispatch();

  const onFinish = async (data) => {
    const response = await CharacterService.add(data);
    if (response.status == 200) {
      dispatch(setUser({ username: null, roles: [] }));
    } else {
      alert("Ocorreu algum erro ao criar sua conta!");
    }
  };

  const onFinishFailed = (data) => {
    alert("Preencha os campos corretamente!");
  };

  return (
    <Container>
      <h3>Cadastro de Usuário</h3>
      <Form
        name="basic"
        initialValues={{ username: "", password: "" }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Nome"
          name="name"
          rules={[{ required: true, message: "Insira seu usuário!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Senha"
          name="password"
          rules={[{ required: true, message: "Insira sua senha!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Criar
          </Button>
        </Form.Item>
      </Form>
    </Container>
  );
}

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  height: 100%;
  padding: 128px;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
`;
