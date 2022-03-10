class Request {
    post(url) { // currency function promise 
        return new Promise((resolve, reject) => {
            fetch(url, {}).then(response => resolve(response.json())).catch(error => reject(error)) // resolve catch function
        })
    }
}