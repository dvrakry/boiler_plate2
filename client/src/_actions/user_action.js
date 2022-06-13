import Axios from "axios";
import { LOGIN_USER, REGISTER_USER } from "./types";

//dataToSubmit은 loginPage.js에서 보내는 body임
export function loginUser(dataToSubmit) {
  const request = Axios.post("/api/users/login", dataToSubmit).then(
    (response) => response.data
  ); //서버에서 받아온 데이터를 request에 저장

  return {
    //위에 request를 reducer로 넘기는 작업
    type: LOGIN_USER,
    payload: request,
  };
}

export function RegisterUser(dataToSubmit) {
  const request = Axios.post("/api/users/register", dataToSubmit).then(
    (response) => response.data
  ); //서버에서 받아온 데이터를 request에 저장

  return {
    //위에 request를 reducer로 넘기는 작업
    type: REGISTER_USER,
    payload: request,
  };
}

export function auth() {
  const request = Axios.get("/api/users/auth").then(
    (response) => response.data
  ); //서버에서 받아온 데이터를 request에 저장

  return {
    //위에 request를 reducer로 넘기는 작업
    type: AUTH_USER,
    payload: request,
  };
}
