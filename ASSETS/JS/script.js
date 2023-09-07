const parallax = document.querySelector('.parallax');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    parallax.style.transform = `translate3d(0, ${scrollY * 0.7}px, 0)`;
});


//Scroll up

function scrollup() {
    const scrollUp = document.getElementById('scroll-up');
    if (this.scrollY >= 560) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollup);


//Ao clicar em um palestrante específico, exiba uma pequena janela ou div
// com mais informações sobre o palestrante e sua palestra.

const tabMenu = document.querySelectorAll('.js-tabmenu li')
const tabContent = document.querySelectorAll('.js-tabcontent section')


if (tabMenu.length && tabContent.length) {
    //Adiciona no primeiro elemento ao entrar na pagina
    tabContent[0].classList.add('ativo')

    function tabContentSelected(index) {
        tabContent.forEach((element) => {
            element.classList.remove('ativo')
        })
        tabContent[index].classList.add('ativo')
    }

    tabMenu.forEach((element, index) => {
        element.addEventListener('click', () => {
            tabContentSelected(index)
        })
    })

}

//Adicione um evento de "Envio de Formulário" ao formulário de inscrição.
// Antes de enviar, valide todos os campos obrigatórios. Se algum campo
// estiver vazio ou inválido, exiba uma mensagem de erro e evite o envio


document.querySelector("#form-js").addEventListener("submit", function (event) {
    event.preventDefault();  // Impedindo o envio do formulário

    const radioButtons = document.querySelectorAll('#aboutEvent input[type="radio"]');
    const checkboxes = document.querySelectorAll('#updates input[type="checkbox"]');
    const select = document.querySelector('#type-ingresso select');

    const nomeInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const observacaoInput = document.getElementById("observacao");

    const errordiv = document.querySelector(".error");
    const sucessdiv = document.querySelector(".sucess");
    const sucessBg = document.querySelector(".sucess-bg");
    const forms = document.querySelector("#form-js");

    let selectedValueRadio = '';
    let selectedValuesCheckbox = [];
    let selectedValue = '';

    radioButtons.forEach(radio => {
        if (radio.checked) {
            selectedValueRadio = radio.value;
        }
    });

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            selectedValuesCheckbox.push(checkbox.value);
        }
    });

    selectedValue = select.value;

    if (!nomeInput.value || !emailInput.value || !observacaoInput.value || !selectedValueRadio
        || selectedValuesCheckbox.length === 0 || !selectedValue) {

        // console.log("nome", nomeInput.value);
        // console.log("emailInput", emailInput.value);
        // console.log("observacaoInput", observacaoInput.value);
        // console.log("radio", selectedValueRadio);
        // console.log("checkboxes", selectedValuesCheckbox);
        // console.log("valor select", selectedValue);
        // console.log("erro");

        errordiv.style.display = "block";
        sucessdiv.style.display = "none";
        sucessBg.style.display = "none";
        forms.style.display = "block";

    } else {
        // console.log("tudo sendo recebido");
        errordiv.style.display = "none";
        sucessdiv.style.display = "block";
        sucessBg.style.display = "block";
        forms.style.display = "none";
    }
});

//Valide o campo de email para assegurar um formato válido.
const emailInput = document.getElementById("email");
const validateClasse = document.querySelector("#validated-email");

emailInput.addEventListener("focus", function () {
    const emailValue = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailValue)) {
        validateClasse.style.display = "block";
    } else {
        validateClasse.style.display = "none";
    }
});

emailInput.addEventListener("blur", () => {
    validateClasse.style.display = "none";
})

//Se o usuário selecionar "Outro" em "Como ficou sabendo do evento?", exiba
// dinamicamente um campo de texto adicional para eles fornecerem detalhes.

const radioButton = document.querySelector('#outro ');

radioButton.addEventListener("click", () => {
    const containerOthersClasse = document.querySelector(".container-others")
    if (containerOthersClasse) {
        containerOthersClasse.style.display = "block"
    } else {
        containerOthersClasse.style.display = "none"
    }
})


//Na seção de programação, adicione eventos "Mouse Entrou" e "Mouse Saiu"
// para os nomes dos palestrantes. Ao passar o mouse, mude a cor ou o estilo
// do texto para destacar o nome do palestrante.


const nomePalestrantes = document.querySelectorAll(".horarios-content .name")
nomePalestrantes.forEach((value) => {
    value.addEventListener("mouseenter", () => {
        value.style.cursor = "pointer"
        value.style.color = "#CEDC00"
        value.style.background = "#4E008E"
        console.log("passando o mouse em cima")
    })
    value.addEventListener("mouseleave", () => {
        value.style.color = "black"
        value.style.background = "white"
        console.log("passando o mouse em cima")
    })
})


// Função para adicionar eventos "Focus" e "Blur" aos elementos
function addFocusAndBlurEvents(elements) {
    elements.forEach((element) => {
        element.addEventListener("focus", () => {
            element.style.outlineColor = "#bec82b";
        });

        element.addEventListener("blur", () => {
            element.style.outlineColor = "";
        });
    });
}

// Seleciona os elementos do formulário
const radioButtons = document.querySelectorAll('#aboutEvent input[type="radio"]');
const checkboxesAndRadios = document.querySelectorAll('input[type="checkbox"],input[type="radio"]');
console.log(checkboxesAndRadios)
const inputsSimple = document.querySelectorAll('input[type="text"]');
const inputsSimpleEmail = document.querySelectorAll('input[type="email"]');
const inputsTextArea = document.querySelectorAll('textarea');
const select = document.querySelector('#type-ingresso select');

// Adiciona eventos "Focus" e "Blur" aos elementos
addFocusAndBlurEvents(radioButtons);
addFocusAndBlurEvents(inputsSimple);
addFocusAndBlurEvents(inputsSimpleEmail);
addFocusAndBlurEvents(inputsTextArea);
addFocusAndBlurEvents([select]); // Coloque o select dentro de um array

// Adiciona eventos "Focus" e "Blur" aos checkboxes marcados
checkboxesAndRadios.forEach((checkbox) => {
    checkbox.addEventListener("click", () => {
        checkbox.style.background = "#bec82b";
    });
});







