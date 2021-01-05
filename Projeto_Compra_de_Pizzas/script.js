let modalQtd = 1;

const c = (e)=>{return document.querySelector(e)}
const cs = (e)=>{return document.querySelectorAll(e)}

pizzaJson.map((pizza, index)=>{
    
    // Clonar o modelo
    let pizzariaItem = c('.models .pizza-item').cloneNode(true);
    
    // Cria um atributo e pega o index da pizza
    pizzariaItem.setAttribute('data-key', index);

    // Preenche os itens
    pizzariaItem.querySelector('.pizza-item--img img').src = pizza.img
    pizzariaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${pizza.price.toFixed(2).replace('.', ',')}`
    pizzariaItem.querySelector('.pizza-item--name').innerHTML = pizza.name
    pizzariaItem.querySelector('.pizza-item--desc').innerHTML = pizza.description


    // Quando clicar na imagem ou no ícone +
    pizzariaItem.querySelector('a').addEventListener('click', (e)=>{

        // Tira a ação natural de link(atualizar a página)
        e.preventDefault();

        // A partir do a vai procurar o elemento mais próximo que tenha a classe pizza-item
        // e vai pegar o atributo data-key
        let key = e.target.closest('.pizza-item').getAttribute('data-key')
        modalQtd = 1;

        // Preeche os campos da modal
        c('.pizzaBig img').src = pizzaJson[key].img;
        c('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
        c('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;
        c('.pizzaInfo--actualPrice').innerHTML = `R$ ${pizzaJson[key].price.toFixed(2).replace('.', ',')}`;

        // 1 - Resetar tamanho selecionado
        c('.pizzaInfo--size.selected').classList.remove('selected');

        // 2 - Preeche os tamanhos da pizza
        cs('.pizzaInfo--size').forEach((size, sizeIndex)=>{

            if(sizeIndex == 2){
                size.classList.add('selected');
            }

            size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex];
        });

        c('.pizzaInfo--qt').innerHTML = modalQtd;

        // Animação para abrir a modal de detalhes da pizza
        c('.pizzaWindowArea').style.opacity = 0;
        c('.pizzaWindowArea').style.display = 'flex';
        setTimeout(()=>{
            c('.pizzaWindowArea').style.opacity = 1;
        }, 200)
    })
    
    // Adicionar os clones na area de pizza
    c('.pizza-area').append(pizzariaItem);
});