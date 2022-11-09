function cadastrar(usuarios, ...novosUsuarios) {
    
    let totalUsuarios = [
        ...usuarios,
        ...novosUsuarios
    ];

    return console.log(totalUsuarios);

}

let usuarios = ["Jobson", "Gabiraldo"];
let novosUsuarios = cadastrar(usuarios, "Ricuerdo", "Creisson");