const { API } = require("../../backend");

export const createCategory = (userId, token, category) => {
    return fetch(`${API}/category/create/${userId}`,{
        method: "POST",
        headers: {
            Accept: "application/json ",
            "Content-Type": "application/JSON",
            Authorization: `Bearer${token}`
        },
        body: JSON.stringify(category)
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.error(err));
};