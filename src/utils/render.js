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

export const fetchAndRenderEducation = async (backendUrl) => {
  try {
    const id = getUserIdFromURL();

    const response = await fetch(`${backendUrl}${id}/educations`, {
      headers: {
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "true",
      },
      method: "GET",
    });
    const educations = await response.json();
    educations.map(({ userId, year, title, description }) => {
      const htmlTemplate = `<li class="experience"><span class="year">${year}</span><div class="education-detail"><strong class="title">${title}</strong><br/>${description}</div></li>`;
      if (userId === Number(id)) $("ul").append(htmlTemplate);
      return null;
    });
  } catch (error) {
    console.log(error);
  }
};
