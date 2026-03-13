const lista = document.querySelector(".lista-produtos")

const cafe = [
    {
        nome: "Espresso",
        descricao: "Cade concentrado e aromático",
        preco: "$3.50",
        img: "./assets/produtos/café/expresso.jpg"
    },

    {
        nome: "Cappuccino",
        descricao: " Espresso com leite vaporizado e espuma",
        preco: "$4.50",
        img: "./assets/produtos/café/cappuccino.jpg"
    },

    {
        nome: "Café helado",
        descricao: "Café frio resfrescante com gelo",
        preco: "$5.00",
        img: "./assets/produtos/café/Café Helado.jpg"
    },
]

const reposteria = [
    {
        nome: "Bolo de Chocolate",
        descricao: "Delicioso bolo de chocolate caseiro",
        preco: "$4.00",
        img: "./assets/produtos/repostería/pastel de chocolate.jpg"
    },

    {
        nome: "Croissant",
        descricao: "Croissant francês recém açado",
        preco: "$3.00",
        img: "./assets/produtos/repostería/croissant.jpg"
    },

    {
        nome: "Muffin de arandanos",
        descricao: "Muffin fofinho com mertilos frescos",
        preco: "$3.50",
        img: "./assets/produtos/repostería/muffin de arandanos.jpg"
    },
]

const comida = [
    {
        nome: "Sandwich",
        descricao: "Sanduíche fresco com peru e vegetais",
        preco: "$6.50",
        img: "./assets/produtos/comida/sandwich.jpg"
    },

    {
        nome: "quiche",
        descricao: "Camadas de massa com carne e queijo gratinado",
        preco: "$6.50",
        img: "./assets/produtos/comida/download.jpg"
    },

    {
        nome: "Macarronada",
        descricao: "Camadas de massa com carne e queijo gratinado",
        preco: "$6.50",
        img: "./assets/produtos/comida/macarronada.jpg"
    }

]

function mostrarProdutos(produtos) {
    lista.innerHTML = ""

    produtos.forEach(produto => {

        lista.innerHTML += `
        <div class="card-popular">
                    <img class="img-cards" src="${produto.img}" alt="">
                    <div class="caixa-texto-card">
                        <p class="titulo-card">${produto.nome}</p>
                        <p class="subtitulo-card">${produto.descricao}</p>
                    </div>
                    <div class="preco-btn-card">
                        <p class="preco-card">${produto.preco}</p>
                        <button class="btn-card"> 
                            <i class="bi bi-cart2 card-btn"></i> 
                            <p class="texto-btn-produto">Agregar</p> 
                        </button>
                    </div>
                </div>
        `

    })
}

document.querySelector(".btn-cafe").addEventListener("click", () => {
    mostrarProdutos(cafe)
})
document.querySelector(".btn-reposteria").addEventListener("click", () => {
    mostrarProdutos(reposteria)
})
document.querySelector(".btn-comida").addEventListener("click", () => {
    mostrarProdutos(comida)
})

mostrarProdutos(cafe)