function sayHello() {
    fetch(`http://localhost:8080/api/getEmployees`, {}).then(response => {
        response.json().then((data) => {
            document.getElementById("pls").innerHTML = data;
        });
    }).catch(err => {

    });
}