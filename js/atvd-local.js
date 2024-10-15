document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get form values
    var title = document.getElementById('titulo').value;
    var type = document.getElementById('tipo').value;
    var link = document.getElementById('link').value;
    var materia = document.getElementById('materia').value;
    var ano = document.getElementById('ano').value;
    var unidade = document.getElementById('unidade').value;
    var data = document.getElementById('data').value;
    var desc = document.getElementById('desc').value;

    // Display the submitted data
    var infoDiv = document.getElementById('info');
    infoDiv.innerHTML = `
        <p>
    {<br>
        title: "${title}",<br>
        desc: "${desc}",<br>
        typeAtvd: "${type}",<br>
        data: "${data}",<br>
        img: "${link}",<br>
        link: "${link}",<br>
        materia: "${materia}",<br>
        ano: "${ano}",<br>
        unidade: "${unidade}"<br>
    }
  </p>
    `;
    
    // Optionally, you can clear the form inputs after submission
    document.getElementById('myForm').reset();
});

function copyText() {
    // Seleciona o elemento de texto
    var textToCopy = document.getElementById("info").innerText;

    // Cria um elemento temporário para armazenar o texto
    var tempInput = document.createElement("input");
    tempInput.value = textToCopy;
    document.body.appendChild(tempInput);

    // Seleciona o conteúdo do elemento temporário
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // Para dispositivos móveis

    // Copia o texto selecionado
    document.execCommand("copy");

    // Remove o elemento temporário
    document.body.removeChild(tempInput);
}