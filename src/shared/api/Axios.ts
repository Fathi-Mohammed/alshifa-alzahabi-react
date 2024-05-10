// import axios from "axios";
// import { baseURL } from "./Api";
// import Cookie from "cookie-universal";
// import { useTranslation } from "react-i18next";

// type header = {
//   "Accept-Language": string;
//   "Authorization"?: string;
// }

// const cookie = Cookie();
// const token : string = cookie.get("token");

// let headers : header = {
//   "Accept-Language": useTranslation().i18n.language,
// }

// if (token) headers["Authorization"] = `Bearer ${token}`;

// export const Axios = axios.create({
//   baseURL: baseURL || "http://localhost:3005",
//   headers,
// })
