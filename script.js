const lista = document.querySelector(".lista-produtos");

const cafe = [
    {
        nome: "expresso",
        descricao: "Café concentrado y aromático",
        preco: "$3,50",
        img: "./assets/produtos/café/expresso.jpg"
    },
    {
        nome: "cappuccino",
        descricao: "Espresso con leche vaporizada y espuma",
        preco: "$4,50",
        img: "./assets/produtos/café/cappuccino.jpg"
    },
    {
        nome: "cafe helado",
        descricao: "Refrescante café frío con hielo",
        preco: "$5,00",
        img: "./assets/produtos/café/Café Helado.jpg"
    }
]

const reposteria = [
    {
        nome: "Pastel de Chocolate",
        descricao: "Delicioso pastel de chocolate com recheio cremoso",
        preco: "$4,00",
        img: "./assets/produtos/reposteria/pastel de chocolate.jpg"
    },
    {
        nome: "Croissant",
        descricao: "Croissant francés recién horneado",
        preco: "$3,00",
        img: "./assets/produtos/reposteria/croissant.jpg"
    },
    {
        nome: "Muffin de Arándanos",
        descricao: "Esponjoso muffin con arándanos frescos",
        preco: "$3,50",
        img: "./assets/produtos/reposteria/muffin de arandanos.jpg"
    }
]

const comida = [
    {
        nome: "Sándwich de Pavo",
        descricao: "Sándwich fresco con pavo y vegetales",
        preco: "$6,50",
        img: "./assets/produtos/Comida/sandwich.jpg"
    },
    {
        nome: "Ensalada César",
        descricao: "Ensalada clásica con aderezo César",
        preco: "$5,00",
        img: "./assets/produtos/Comida/download.jpg"
    },
    {
        nome: "Quiche de Espinacas",
        descricao: "Quiche sabroso con espinacas y queso",
        preco: "$7,00",
        img: "./assets/produtos/Comida/download(1).jpg"
    }
]

function mostrarProdutos(produtos) {
    lista.innerHTML = "";
    produtos.forEach(produto => {
        lista.innerHTML += `
                    <div class="card-popular">

                        <div class="caixa-img-cards"><img class="img-cards" src="${produto.img}"
                                alt="">
                        </div>
                        <div class="caixa-texto-card">

                            <p class="titulo-card">${produto.nome}</p>
                            <p class="subtitulo-card">${produto.descricao}</p>
                            <div class="preco-btn-card">
                                <p class="preco-card">${produto.preco}</p>
                                <button class="btn-card"> <i class="bi bi-cart2 card-btn"></i> Agregar</button>
                            </div>

                        </div>

                    </div>
                
   `
    }
    )
}

document.querySelector(".btn-cafe").addEventListener("click", () => mostrarProdutos(cafe));

document.querySelector(".btn-reposteria").addEventListener("click", () => mostrarProdutos(reposteria));

document.querySelector(".btn-comida").addEventListener("click", () => mostrarProdutos(comida));

// produtos inciais
mostrarProdutos(cafe);