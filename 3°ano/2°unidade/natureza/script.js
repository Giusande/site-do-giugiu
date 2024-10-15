import atvd from "../../../js/atividades.js"

document.addEventListener("DOMContentLoaded", function(){

    const tdn = document.querySelector(".tdn");

    atvd.forEach(atividades => {

        if(atividades.unidade === "2" && atividades.ano === "3" && atividades.materia === "natureza") {

            const atvdElement = document.createElement("div");
            atvdElement.classList.add("atvd");
            tdn.appendChild(atvdElement);

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

    })

});