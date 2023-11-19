document.getElementById("getAllDogsBtn").addEventListener("click", function() {
    fetch("http://localhost:8080/api/dogs")
    .then(response => response.json())
    .then(data => {
        document.getElementById("apiResponse").value = JSON.stringify(data, null, 2);
    })
    .catch(error => {
        document.getElementById("apiResponse").value = "Error: " + error;
    });
});

document.getElementById("getSpecificDogBtn").addEventListener("click", function() {
    const dogId = document.getElementById("dogId").value;
    fetch("http://localhost:8080/api/dogs/" + dogId)
    .then(response => response.json())
    .then(data => {
        document.getElementById("apiResponse").value = JSON.stringify(data, null, 2);
    })
    .catch(error => {
        document.getElementById("apiResponse").value = "Error: " + error;
    });
});
