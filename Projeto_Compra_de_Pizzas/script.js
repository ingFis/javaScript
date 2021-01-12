let modalQtd = 1;

const c = (e)=>{return document.querySelector(e)}
const cs = (e)=>{return document.querySelectorAll(e)}

pizzaJson.map((pizza, index)=>{
    
    // Parte 1 - Clonar o modelo - FAZER CÓPIA 1 
    let pizzariaItem = c('.models .pizza-item').cloneNode(true);
    
    // Parte 3 - Cria um atributo e pega o index da pizza
    pizzariaItem.setAttribute('data-key', index);

    // Parte 1 - Preenche os itens 2
    pizzariaItem.querySelector('.pizza-item--img img').src = pizza.img
    pizzariaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${pizza.price.toFixed(2).replace('.', ',')}`
    pizzariaItem.querySelector('.pizza-item--name').innerHTML = pizza.name
    pizzariaItem.querySelector('.pizza-item--desc').innerHTML = pizza.description

    //Parte 2 - Quando clicar na imagem ou no ícone +
    pizzariaItem.querySelector('a').addEventListener('click', (e)=>{

        // Tira a ação natural de link(atualizar a página)
        e.preventDefault();

        // Parte 3 - A partir do a vai procurar o elemento mais próximo que tenha a classe pizza-item
        // e vai pegar o atributo data-key
        let key = e.target.closest('.pizza-item').getAttribute('data-key')
        modalQtd = 1;

        // console.log(pizzaJson[key])

        // Parte 3 - Preeche os campos da modal
        c('.pizzaBig img').src = pizzaJson[key].img;
        c('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
        c('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;
        c('.pizzaInfo--actualPrice').innerHTML = `R$ ${pizzaJson[key].price.toFixed(2).replace('.', ',')}`;

        // 1 - Resetar tamanho selecionado
        c('.pizzaInfo--size.selected').classList.remove('selected');

        // Parte 4 - 2 - Preeche os tamanhos da pizza
        cs('.pizzaInfo--size').forEach((size, sizeIndex)=>{

            if(sizeIndex == 2){
                size.classList.add('selected');
            }

            // size é o próprio item, pois o cs retorna um array de elementos
            size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex];
        });

        c('.pizzaInfo--qt').innerHTML = modalQtd;

        //Parte 2 -  Animação para abrir a modal de detalhes da pizza - Acontece(0 para 1) em 0.5 segundo de acordo com o css
        c('.pizzaWindowArea').style.opacity = 0;
        c('.pizzaWindowArea').style.display = 'flex';
        setTimeout(()=>{
            c('.pizzaWindowArea').style.opacity = 1;
        }, 200)
    })
    
    // Parte 1 - Adicionar os clones na area de pizza - joga na tela 3
    c('.pizza-area').append(pizzariaItem);
});