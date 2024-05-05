// Config da navbar resposiva
const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu');

document.addEventListener("DOMContentLoaded", function() {
  const menu = document.querySelector('.menu');
  const NavMenu = document.querySelector('.nav-menu');

  menu.addEventListener('click', () => {
      menu.classList.toggle('ativo');
      NavMenu.classList.toggle('ativo');
  });

  // Dados dos animais para adoção
  const animals = [
    { name: "Poc", age: "3 anos", gender: "Macho", image: "images/poczinho.png", raça:"Sem raça definida", ong: "Resgate Amor" },
    { name: "Maria Antonia", gender: "Femea", age: "1 ano", image: "images/mariaantonia.png", raça: "Raça não definida", ong: "Casa dos bigodes" },
    { name: "Branquinho", gender: "Macho", age: "4 meses", image: "images/branquinho.png", raça: "Raça não definida", ong: "Casa dos bigodes" },
    { name: "Lobinho", gender: "Macho", age: "9 meses", image: "images/lobinho.png", raça: "Raça não definida", ong: "Resgate amor" },
];

const animalList = document.getElementById("animal-list");

// Visualização das informações dos animais em cards
function populateAnimalList() {
    animalList.innerHTML = ""; // Limpa a lista antes de preenchê-la novamente

    for (let i = 0; i < animals.length; i += 4) {
        const row = document.createElement("div");
        row.classList.add("row");

        for (let j = i; j < i + 4 && j < animals.length; j++) {
            const animal = animals[j];
            const animalDiv = document.createElement("div");
            animalDiv.classList.add("animal");

            const image = document.createElement("img");
            image.src = animal.image;
            image.alt = animal.name;

            const namePara = document.createElement("p");
            namePara.textContent = `${animal.name}`;
            namePara.classList.add("animal-name");

            const genderPara = document.createElement("p");
            genderPara.textContent = `${animal.gender}`;

            const agePara = document.createElement("p");
            agePara.textContent = `${animal.age}`;

            const RacaPara = document.createElement("p");
            RacaPara.textContent = `${animal.raça}`;

            const ongPara = document.createElement("p");
            ongPara.textContent = `${animal.ong}`;

            const detailsButton = document.createElement("button");
            detailsButton.textContent = "Ver Detalhes";
            detailsButton.classList.add("detalhes-btn");

            detailsButton.addEventListener('click', function() {
                const animalName = animal.name;
                window.location.href = `animais.html?name=${encodeURIComponent(animalName)}`;
            });

            animalDiv.appendChild(image);
            animalDiv.appendChild(namePara);
            animalDiv.appendChild(genderPara);
            animalDiv.appendChild(agePara);
            animalDiv.appendChild(RacaPara);
            animalDiv.appendChild(ongPara);
            animalDiv.appendChild(detailsButton);

            row.appendChild(animalDiv);
        }

        animalList.appendChild(row);
    }
}

populateAnimalList();


});

// Abrir a modal de Login ao clicar no botão "Quero adotar"
/*document.addEventListener("DOMContentLoaded", function() {
    const adoptButton = document.querySelector('.adotar-btn');
    const modal = document.getElementById('modal');
    const closeButton = document.querySelector('.close');

    adoptButton.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});*/

// Abrir a modal de Login ao clicar no botão "Login"
document.addEventListener("DOMContentLoaded", function() {
    const loginButton = document.querySelector('.login-btn');
    const modal = document.getElementById('modal');
    const closeButton = document.querySelector('.close');

    loginButton.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});

// Log caso o animal não for encontrado
document.addEventListener("DOMContentLoaded", function() {
    const animalName = getUrlParameter('name');
    const animal = findAnimalByName(animalName);
    if (animal) {
        displayAnimalDetails(animal);
    } else {
        // Lidar com o caso em que o animal não é encontrado
        console.log('Animal não encontrado');
    }
});

// Exibir o animal indicado pelo usuário em outra page com mais detalhes
function displayAnimalDetails(animal) {
    // Exibir as informações do animal na página HTML
    const animalNameElement = document.getElementById('animal-name');
    animalNameElement.textContent = animal.name;

    const animalImageElement = document.getElementById('animal-image');
    animalImageElement.src = animal.image;
    animalImageElement.alt = animal.name;

    // Exibir outras informações do animal...
}

// Procura o animal pelo
function findAnimalByName(name) {
    console.log("Nome do animal procurado:", name);
    // Iterar sobre a lista de animais para encontrar o animal com o nome correspondente
    for (let i = 0; i < animals.length; i++) {
        if (animals[i].name === name) {
            console.log("Animal encontrado:", animals[i]);
            return animals[i];
        }
    }
    console.log("Animal não encontrado!");
    return null; // Retorna null se o animal não for encontrado
}

document.addEventListener("DOMContentLoaded", function() {
    const animalName = getUrlParameter('name');
    console.log("Nome do animal na URL:", animalName);
    const animal = findAnimalByName(animalName);
    if (animal) {
        console.log("Detalhes do animal encontrado:", animal);
        displayAnimalDetails(animal);
    } else {
        console.log('Animal não encontrado');
    }
});

function displayAnimalDetails(animal) {
    console.log('Função displayAnimalDetails sendo chamada.');
    // Exibir as informações do animal na página HTML
    const animalNameElement = document.getElementById('animal-name');
    animalNameElement.textContent = animal.name;

    const animalImageElement = document.getElementById('animal-image');
    animalImageElement.src = animal.image;
    animalImageElement.alt = animal.name;

    // Exibir outras informações do animal...
}

function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

document.addEventListener("DOMContentLoaded", function() {
    const filtroGenero = document.getElementById("filtroGenero");
    const animalList = document.getElementById("animal-list");
    let animaisFiltrados = [];

    // Event listener para detectar mudanças no filtro de gênero
    filtroGenero.addEventListener("change", function() {
        const generoSelecionado = filtroGenero.value;

        if (generoSelecionado === "todos") {
            // Exibir todos os animais se "Todos" for selecionado
            mostrarAnimais(animals);
        } else {
            // Filtrar os animais pelo gênero selecionado
            animaisFiltrados = animals.filter(animal => animal.gender === generoSelecionado);
            mostrarAnimais(animaisFiltrados);
        }
    });

    // Função para exibir os animais na lista
    function mostrarAnimais(listaAnimais) {
        animalList.innerHTML = ""; // Limpar a lista antes de preenchê-la novamente

        listaAnimais.forEach(animal => {
            const animalDiv = document.createElement("div");
            animalDiv.classList.add("animal");

            const image = document.createElement("img");
            image.src = animal.image;
            image.alt = animal.name;

            const namePara = document.createElement("p");
            namePara.textContent = `${animal.name}`;
            namePara.classList.add("animal-name");

            const genderPara = document.createElement("p");
            genderPara.textContent = `${animal.gender}`;

            const agePara = document.createElement("p");
            agePara.textContent = `${animal.age}`;

            const RacaPara = document.createElement("p");
            RacaPara.textContent = `${animal.raça}`;

            const ongPara = document.createElement("p");
            ongPara.textContent = `${animal.ong}`;

            const detailsButton = document.createElement("button");
            detailsButton.textContent = "Ver Detalhes";
            detailsButton.classList.add("detalhes-btn");

            detailsButton.addEventListener('click', function() {
                const animalName = animal.name;
                window.location.href = `animais.html?name=${encodeURIComponent(animalName)}`;
            });

            animalDiv.appendChild(image);
            animalDiv.appendChild(namePara);
            animalDiv.appendChild(genderPara);
            animalDiv.appendChild(agePara);
            animalDiv.appendChild(RacaPara);
            animalDiv.appendChild(ongPara);
            animalDiv.appendChild(detailsButton);

            animalList.appendChild(animalDiv);
        });
    }

    // Função inicial para exibir todos os animais ao carregar a página
    mostrarAnimais(animals);
});
