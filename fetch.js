fetch("https://api.github.com/users/saty321")
    .then((response) => {
        console.table([response.ok, response.status])
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));