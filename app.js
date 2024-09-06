// console.log(dados); //para referenciar uma variável não se utiliza aspas ""
// [] para ver o índice 
// se eu quiser ver apenas o título dos meus dados eu adiciono um . e o campo escolhido, nesse caso .descricao

// uma função para o botão
function pesquisar() {
    let section = document.getElementById("resultados-pesquisa")
 console.log(section);
    let resultados = ""
 // para cada dado dentro da lista de dados - isso serve para uma repetição
 for (let dado of dados) {
  // é uma crase!
  resultados += ` 
        <div class="item-resultado">
            <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href= ${dado.link} target="_blank">Mais informações acesse</a>
        </div>
        `
 }
 // atribui os resultados gerados à seção HTML
 section.innerHTML = resultados
console.log("fui clicado")  
};




