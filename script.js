fetch(`http://localhost:8080/api/hello`, {}).then(response => {
    response.json().then((data) => {
        document.getElementById("pls").innerHTML = data;
    });
}).catch(err => {

});