class Request {
    get(url) { // currency function promise 
        return new Promise((resolve, reject) => {
            fetch(url, {}).then(response => resolve(response.json())).catch(error => reject(error)) // resolve catch function
        })
    }
    post(url, data) { // currency function promise 
        return new Promise((resolve, reject) => {
            fetch(url, {
                    body: data
                }).then(response => resolve(response.json())).catch(error => reject(error)) // resolve catch function
        })

    }




    update(url, data) { // currency function promise 
        return new Promise((resolve, reject) => {
            fetch(url, {
                    body: data
                }).then(response => resolve(response.json())).catch(error => reject(error)) // resolve catch function
        })
    }


    delete(url) { // currency function promise 
        return new Promise((resolve, reject) => {
            fetch(url, {}).then(response => resolve(response.json())).catch(error => reject(error)) // resolve catch function
        })
    }

}