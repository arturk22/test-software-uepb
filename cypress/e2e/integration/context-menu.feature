Funcionalidade: Menu de Contexto

  Como usuário
  Eu quero ser capaz de interagir com o menu de contexto
  Para que eu possa realizar ações com base nas opções selecionadas

  Cenário: Exibir a opção de menu de contexto "the-internet" ao clicar com o botão direito do mouse
    Dado que estou na página do Menu de Contexto
    Quando eu clico com o botão direito do mouse na caixa
    Então devo ver a opção de menu de contexto "the-internet"

  Cenário: Disparar um alerta em JavaScript ao clicar na opção "the-internet"
    Dado que estou na página do Menu de Contexto
    Quando eu clico com o botão direito do mouse na caixa
    E eu clico na opção de menu de contexto "the-internet"
    Então um alerta em JavaScript com a mensagem "Você selecionou um menu de contexto" deve ser exibido
