// $(document).ready(() => {

//     $('#oi').attr('style', 'background-color: red;');
    
// });


   




function imagemTexto(mg,nu) {
    
    document.getElementById('imagem').src= mg;
    document.getElementById('paragrafo').innerHTML=lista_p[nu];
    
}

function clicar(){
   document.getElementById('B').innerHTML='Botão clicado';

}

// function retorneImagem(){

var lista_p = Array()
lista_p[1] = 'Git é um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software, mas pode ser usado para registrar o histórico de edições de qualquer tipo de arquivo (Exemplo: alguns livros digitais são disponibilizados no GitHub e escrito aos poucos publicamente). O Git foi inicialmente projetado e desenvolvido por Linus Torvalds para o desenvolvimento do kernel Linux, mas foi adotado por muitos outros projetos. Cada diretório de trabalho do Git é um repositório com um histórico completo e habilidade total de acompanhamento das revisões, não dependente de acesso a uma rede ou a um servidor central.'
lista_p[2] = 'Basicamente, terminal é aquela famosa tela preta na qual você digita comandos para dar instruções para um computador e visualizar informações dessa máquina. Ou seja, ele serve para você executar tarefas no computador sem utilizar a interface gráfica, com pastinhas e ícones, ou o bom e velho mouse. Todos os comandos são executados através de digitação de texto puro.'
lista_p[3] = 'Algoritmo é simplesmente uma "receita" para executarmos uma tarefa ou resolver algum problema. E como toda receita, um algoritmo também deve ser finito. Se seguirmos uma receita de bolo corretamente, conseguiremos fazer o bolo. A computação utiliza muito esse recurso, então se você pretende aprender programação, obviamente deve saber o que é algoritmo.'
lista_p[4] = 'GitHub é uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git. Ele permite que programadores, utilitários ou qualquer usuário cadastrado na plataforma contribuam em projetos privados e/ou Open Source de qualquer lugar do mundo.'
lista_p[5] = 'O licenciamento de software funciona como um tipo de contrato estabelecido entre o fabricante (desenvolvedor) e a pessoa ou empresa que o usará. Nele, podem existir restrições para downloads, instalações, manutenções, alterações (mudanças no código-fonte), uso de certas funcionalidades e distribuição.'
lista_p[6] = 'Resumidamente e de forma objetiva o versionamento semântico ou Semantic Versioning é um conjunto de regras e requerimentos para atribuição de versão de software.'
lista_p[7] = 'SSH (Secure Socket Shell) é um protocolo de rede que permite aos usuários acessar e gerenciar servidores pela internet. Mas ele não se resume apenas a isso.'
lista_p[8] = 'HTTPS (Hyper Text Transfer Protocol Secure - protocolo de transferência de hipertexto seguro) é uma implementação do protocolo HTTP sobre uma camada adicional de segurança que utiliza o protocolo SSL/TLS. Essa camada adicional permite que os dados sejam transmitidos por meio de uma conexão criptografada e que se verifique a autenticidade do servidor e do cliente por meio de certificados digitais. A porta TCP usada por norma para o protocolo HTTPS é a 443.'
lista_p[9] = 'Os padrões de projeto (design patterns) são como plantas pré-projetadas de uma construção, que você pode alterar para se adequar melhor na resolução de um problema recorrente em seu código.'
lista_p[10] = 'Uma codificação de caracteres é um padrão de relacionamento entre um conjunto de caracteres com um conjunto de outra coisa, como por exemplo números ou pulsos elétricos com o objetivo de facilitar o armazenamento de texto em computadores e sua transmissão através de redes de telecomunicação.'

