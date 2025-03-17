import getData from "./DatosPokeAPI/getPokeData.js";

async function showData() {
    const data = await getData();
    let div = document.getElementById("content");

    data.results.forEach(e => {
        let pe = document.createElement("p");
        pe.innerHTML = e.name;
        div.appendChild(pe);
    });
}

export default showData;