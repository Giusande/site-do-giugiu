import atividades from "./atividades.js"

function criarAtividades(atividades){
    const root = document.querySelector("#root");

    const atvdElement = document.createElement("div");
    atvdElement.classList.add("atvd");
    root.appendChild(atvdElement);

    const iframe = document.createElement("iframe");
    iframe.src = atividades.img;
    atvdElement.appendChild(iframe);

    const link = document.createElement("a");
    link.textContent = "Clique aqui caso esteja com problema de visualização da atividade";
    link.href = atividades.link;
    atvdElement.appendChild(link);

    const title = document.createElement("h2");
    title.textContent = atividades.title;
    atvdElement.appendChild(title);

    const desc = document.createElement("p");
    desc.textContent = atividades.desc;
    atvdElement.appendChild(desc);

    const tipo = document.createElement("span");
    tipo.textContent = `Tipo: ${atividades.typeAtvd}`;
    atvdElement.appendChild(tipo);

    const data = document.createElement("p");
    data.classList.add("data");
    data.textContent = atividades.data;
    atvdElement.appendChild(data);
}

function exibirAtividades() {
    
    // Selecionando os filtros
    const filtroMateria = document.getElementById("filter-materia").value;
    const filtroUnidade = document.getElementById("filter-unidade").value;

    if(localStorage.getItem('materia')){
        // Selecionando o elemento root
        const rootElement = document.getElementById("root");
        // Limpando o conteúdo anterior
        rootElement.innerHTML = '';

        // Filtrando as atividades de acordo com os filtros selecionados
        const atividadesFiltradas = atividades.filter(atividades => {
            return (filtroMateria === 'all' || atividades.materia === filtroMateria) &&
                (filtroUnidade === "all" || atividades.unidade === filtroUnidade)
        });

        // Exibindo cada atividade filtrada
        atividadesFiltradas.forEach(criarAtividades);
    } else{
        setTimeout(() => {
            window.location.href = "../"
        }, 2000);
    }
    
}

document.getElementById("filter-materia").addEventListener("change", exibirAtividades);
document.getElementById("filter-unidade").addEventListener("change", exibirAtividades);

window.onload = function() {
    exibirAtividades();
};