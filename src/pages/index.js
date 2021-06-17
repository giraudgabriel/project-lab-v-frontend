import React from "react";
import { Form, Input, Button } from "antd";
import styled from "styled-components";

export default function Login() {
  const onFinish = (data) => {
    console.log(data);
  };

  const onFinishFailed = (data) => {
    console.error(data);
  };

  return (
    <Container>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Usuário"
          name="username"
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
            Entrar
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
  padding: 256px;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
`;
