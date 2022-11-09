// Switch

document.write("</br></br>")
document.write("MENU</br></br>")
document.write("1 - Suco </br>");
document.write("2 - Água </br>");
document.write("3 - Refrigerante </br>");
document.write("4 - Cerveja </br>");

document.write("</br>Escolha seu pedido</br></br>");

function pedir() {
    x = prompt("O que deseja pedir?");

    switch(x) {
        case "1":
            alert("Pedido anotado! Suco saindo...");
            break;
        case "2":
            alert("Pedido anotado! Água saindo...");
            break;
        case "3":
            alert("Pedido anotado! Refrigerante saindo...")
            break;
        case "4":
            alert("Pedido anotado! Cerveja saindo...")
            break;
        default:
            alert("Ops! Não temos essa opção.")
    }
}