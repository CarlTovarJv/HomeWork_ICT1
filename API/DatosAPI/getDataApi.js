import url from "./apiUrl.js";

async function getData() {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("Error al obtener los datos");
    }
    return await response.json();
}

export default getData;