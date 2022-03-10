const request = new Request() // create object
let currenty_code = document.getElementById("code")
let button = document.getElementById("calCurrecy")



request.post("http://api.exchangeratesapi.io/v1/latest?access_key=6e7e83d420e22bfa61f806470b037454").then(data => { // api url 
    selectGetList(data.rates)
}).catch(error => console.log(error))


function selectGetList(data) {
    for (const [key, value] of Object.entries(data)) { // for currency in select
        currenty_code.innerHTML += `
        <option value="${value}">${key} ${value}</option>
        `
    }

}


function changeCurrency() { // calculate euro and currency of your choice
    let euro = document.getElementById("kur_1").value
    let currenty_code_value = document.getElementById("code").value

    document.getElementById("ds_input").value = euro * currenty_code_value

}