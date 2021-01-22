import React, { useState, useCallback } from "react";
import { List, InputItem, Button } from "antd-mobile";

//antd-m正常应与rc-formp配合，此处只为进行hook演示
const Login = () => {
  const [state, setState] = useState({
    username: "",
    password: "",
    captcha: "",
  });

  const submit = useCallback(() => {
    // login api 操作
    //apisConfig.login(state);
    console.log(state);
  }, [state]);

  return (
    <List className="login-form">
      <InputItem
        placeholder="用户名"
        value={state.username}
        onChange={(username) => {
          setState({
            ...state,
            username,
          });
        }}
      />
      <InputItem
        placeholder="密码"
        value={state.password}
        onChange={(password) => {
          setState({
            ...state,
            password,
          });
        }}
      />
      <InputItem
        placeholder="验证码"
        value={state.captcha}
        onChange={(captcha) => {
          setState({
            ...state,
            captcha,
          });
        }}
      />
      <Button onClick={submit}>提交</Button>
    </List>
  );
};

export default Login;
