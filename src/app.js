import "./style/index.scss";
import { fetchAndRenderHeader } from "./utils/render";

const backendUrl = "http://localhost:3000/users/";

fetchAndRenderHeader(backendUrl);
