import "./style/index.scss";
import { fetchAndRenderHeader, fetchAndRenderEducation } from "./utils/render";

const url = "http://localhost:3000/users/";

fetchAndRenderHeader(url);
fetchAndRenderEducation(url);
