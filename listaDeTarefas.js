(() => {
    const criarTarefa = (evento) => {

        evento.preventDeFault()

        const lista = document.querySelector('[data-list]');
        const input = document.querySelector('[data-form-input]');
        const valor = input.value;

        const tarefa = document.createElement('li');
        tarefa.classList.add('task');

        const conteudo = `<p class="content">${valor}</p>`;

        tarefa.innerHTML = conteudo;

        tarefa.appendChild(BotaoConclui())
        lista.appendChild(tarefa);
        input.value = " "

    }


    const novaTarefa = document.querySelector('[data-form-button]');

    novaTarefa.addEventListener('click', criarTarefa);

    const BotaoConclui = () => {

        const botaoConclui = document.createElement('button');

        botaoConclui.classList.add('check-button');
        botaoConclui.innerText = 'concluir';

        botaoConclui.addEventListener('click', concluirTarefa);

        return botaoConclui;

    }

    const concluirTarefa = (evento) => {
        const botaoConcluir = evento.target;

        const tarefaCompleta  = botaoConclui.parentEleement;
        tarefaCompleta.classList.toggle('done');


    }

})(); 