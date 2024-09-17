//Detalles del producto por ID
const detalleBanda = (id) => {
    return fetch(`http://localhost:3000/bandas/${id}`)
        .then(respuesta => respuesta.json())
        .catch(error => console.log(error))
};

console.log(detalleBanda)

export const bandaServices = {
    detalleBanda
};