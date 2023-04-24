// Armezando o form dentro de um const
const form = document.querySelector('.quiz-form');
const resultadoFinal = document.querySelector('.resultado');

//Array das alternativas corretas
const alternativasCorretas = ['B', 'B', 'B', 'B'];

form.addEventListener('submit', event => {
    event.preventDefault()//previnindo recarregamento da pagina ao enviar o form

    let score = 0; 
    // inicio da pontuação do usuario
    const respostaUsuarios = [ // Array que armazena os valores das respostas do usuário
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value,
    ]

    //forEach para percorrer o array de resposta do usuário que compara com o array das alternativas corretas(const alternartivasCorretas)
  //Array das resposta     // item de cada resposta
    respostaUsuarios.forEach((respostaUsuario, index) =>{
        // se resposta do usuário for igual a resposta das alternativas corretas no indice do Array alternativasCorretas 
        if(respostaUsuario === alternativasCorretas[index])
        //pontução vai receber o que ele já tem, mais 25, para isso é usado o += no score
        score+= 25
    })

    //rolar página para o topo quando o form é enviado
    scrollTo(0,0)
    
    // removendo a class display none aplicado para aparecer somente quando o form é enviado
    resultadoFinal.classList.remove('d-none')

    //contador da porcentagem acertada, inicia o contador zerado
    let counter = 0

    const timer = setInterval(() =>{
    //setinterval inicia e quando o contador for igual o score ele vai parar usando o clearInterval
    if(counter === score){
        clearInterval(timer)
    }
    //Exibe a porcentagem acertada disparando o contador
    resultadoFinal.querySelector('span').textContent = `${counter}%`
    //incrementação do contador até o score
    counter++

    // 10 milesegundos
    }, 10)
})


