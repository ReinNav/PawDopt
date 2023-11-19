function fetchDog(dogId) {
    fetch("http://localhost:8080/api/dogs/" + incidentId)
        .then(function (response) { // response is of type Response
            // console.log(response);
            if (response.ok) { // 200 <= http-statuscode <= 299
                return response.json(); //'then' returns this as promise with result = json
            }
            // so, it is not a 200er, then get the text from the response and throw it with an error
            return response.text().then(function (text) {
                throw new Error(text);
            });
        })
        .then(function (json) { // This is the JSON from our response
	        let dog = JSON.parse(json)
            return dog;
        })
        .catch(function (error) { // There was an error
	        console.log('Error:', error.message);
        });
};