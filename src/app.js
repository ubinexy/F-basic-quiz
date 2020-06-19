import "./style/index.scss";

const baseUrl = "http://localhost:8080/users/";

const getName = async (userId) => {
  return fetch(`${baseUrl}${userId}`, {
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "true",
    },
    method: "GET",
  });
};

document.getElementById("name").innerHTML = getName("1").then((res) =>
  res.json()
);
