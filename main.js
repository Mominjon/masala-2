const input = document.querySelector(`.input`)
const button = document.querySelector(`.button`)
const manzil = document.querySelector(`.manzil`)
button.addEventListener(`click`, ishla)

function ishla() {
    let x = input.value

    function byteCount(x) {
        return encodeURI(x).split(/%..|./).length - 1;
    }
    let ds = byteCount(x) / 8
    const element = document.createElement(`li`)
    element.textContent = ds + `bit`
    manzil.appendChild(element)
}