import $ from "jquery";
import { getUserIdFromURL } from "./url";

export const fetchAndRenderHeader = async (backendUrl) => {
  try {
    const userId = getUserIdFromURL();
    const response = await fetch(`${backendUrl}${userId}`, {
      headers: {
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "true",
      },
      method: "GET",
    });
    const x = await response.json();
    $("#name").html(x.name);
  } catch (error) {
    console.log(error);
  }
};
