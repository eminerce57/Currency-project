const request = new Request() // create object
let currenty_code = document.getElementById("code")
let button = document.getElementById("calCurrecy")


request.get("http://api.exchangeratesapi.io/v1/latest?{ACCESS-KEY}").then(data => { // api url 
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
    if (!euro || !currenty_code_value) {
        error("please fill all input", "danger")
    }

    document.getElementById("ds_input").value = euro * currenty_code_value

}

function error(message, color) {
    let alertArea = document.getElementById("alert-area")
    alertArea.innerHTML = `
    <div class="alert alert-${color}">${message}</div>
    `
    setTimeout(() => alertArea.innerHTML = "", 4000)

}