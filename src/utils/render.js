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
    const { name, avatar, age, description } = await response.json();
    $("#name").html(name);
    $("#avatar").attr("src", avatar);
    $("#age").html(age);
    $("#description").html(description);
  } catch (error) {
    console.log(error);
  }
};
