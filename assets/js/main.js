

function projeto(img, titulo, info, url){

    const elemento = document.createElement("li");
    elemento.className = "item sombra";
    
    const template = `
            <img src="${img}" alt="Imagem do projeto ${titulo}" />
            <div class="descricao">
                <h2>${titulo}</h2>
                <p>
                    ${info} 
                </p>
            </div>
            
    `;

    elemento.innerHTML = template;

    document.getElementById("lista-projetos").appendChild(elemento);

}


projeto(
    "assets/images/galeria/1.jpg",
    "Lorem ipsum dolor sit amet",
    `Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas auctor tortor at ante sollicitudin commodo. Donec non purus quis libero varius tincidunt. Duis luctus lacus facilisis augue ultrices, vitae porta magna pretium. Aliquam vestibulum faucibus lectus, ut fermentum lacus viverra a. Proin congue nulla interdum, dignissim nisl ac, viverra dui. Vestibulum risus nisi, finibus et enim eget, laoreet dictum nisl. Proin ultrices lacinia elementum. Praesent vel vehicula risus.`,
)

projeto(
    "assets/images/galeria/2.jpg",
    "Lorem ipsum dolor sit amet",
    `Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas auctor tortor at ante sollicitudin commodo. Donec non purus quis libero varius tincidunt. Duis luctus lacus facilisis augue ultrices, vitae porta magna pretium. Aliquam vestibulum faucibus lectus, ut fermentum lacus viverra a. Proin congue nulla interdum, dignissim nisl ac, viverra dui. Vestibulum risus nisi, finibus et enim eget, laoreet dictum nisl. Proin ultrices lacinia elementum. Praesent vel vehicula risus.`
)

projeto(
    "assets/images/galeria/3.jpg",
    "Lorem ipsum dolor sit amet",
    `Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas auctor tortor at ante sollicitudin commodo. Donec non purus quis libero varius tincidunt. Duis luctus lacus facilisis augue ultrices, vitae porta magna pretium. Aliquam vestibulum faucibus lectus, ut fermentum lacus viverra a. Proin congue nulla interdum, dignissim nisl ac, viverra dui. Vestibulum risus nisi, finibus et enim eget, laoreet dictum nisl. Proin ultrices lacinia elementum. Praesent vel vehicula risus.`,
)

projeto(
    "assets/images/galeria/4.jpg",
    "Lorem ipsum dolor sit amet",
    `Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas auctor tortor at ante sollicitudin commodo. Donec non purus quis libero varius tincidunt. Duis luctus lacus facilisis augue ultrices, vitae porta magna pretium. Aliquam vestibulum faucibus lectus, ut fermentum lacus viverra a. Proin congue nulla interdum, dignissim nisl ac, viverra dui. Vestibulum risus nisi, finibus et enim eget, laoreet dictum nisl. Proin ultrices lacinia elementum. Praesent vel vehicula risus.`,
)
