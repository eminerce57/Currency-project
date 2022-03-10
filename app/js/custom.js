class Request {
    getCurrecy(url) { // currency function promise 
        return new Promise((resolve, reject) => {
            fetch(url, {}).then(response => resolve(response.json())).catch(error => reject(error)) // resolve catch function
        })
    }
}

const request = new Request() // create object


let currenty_code = document.getElementById("code")
let button = document.getElementById("calCurrecy")

request.getCurrecy("http://api.exchangeratesapi.io/v1/latest?access_key=6e7e83d420e22bfa61f806470b037454").then(data => { // api url 
        for (const [key, value] of Object.entries(data.rates)) { // for currency in select
            currenty_code.innerHTML += `
            <option value="${value}">${key} ${value}</option>
            `
        }
    }

).catch(error => console.log(error))


function changeCurrency() { // calculate euro and currency of your choice
    let euro = document.getElementById("kur_1").value
    let currenty_code_value = document.getElementById("code").value

    document.getElementById("ds_input").value = euro * currenty_code_value

}