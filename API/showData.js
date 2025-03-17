import getData from "./DatosAPI/getDataApi.js";

async function showData() {
    const data = await getData(); // No vuelvas a declarar getData aquí
    let div = document.getElementById("content");

    data.forEach(e => {
        let pe = document.createElement("p");
        pe.innerHTML = e.name;
        div.appendChild(pe);
    });
}

export default showData;