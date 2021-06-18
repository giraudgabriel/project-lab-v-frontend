import React from "react";
import Router from "./router";
import { ThemeProvider } from "styled-components";
import { theme } from "~/themes";
import { GlobalStyles } from "~/themes/global";
import { Provider } from "react-redux";
import { ConfigProvider } from "antd";
import store from "~/store";
import locale from "antd/es/locale/pt_BR";
import "./styles/main.less";

function App() {
  return (
    <Provider store={store}>
      <ConfigProvider locale={locale}>
        <ThemeProvider theme={theme}>
          <>
            <GlobalStyles />
            <Router />
          </>
        </ThemeProvider>
      </ConfigProvider>
    </Provider>
  );
}

export default App;
