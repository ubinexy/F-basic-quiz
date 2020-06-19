import "./style/index.scss";

const baseUrl = "http://localhost:8080/users/";

const getName = async (userId) => {
  return fetch(`${baseUrl}${userId}`, {
    headers: {
      'content-type': 'application/json'
    },
    method: 'GET'
  })
}

$('#name').html(getName("1"));