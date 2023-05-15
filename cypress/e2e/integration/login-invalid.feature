Funcionalidade: Login

  Cenário: Exibir mensagem de erro em tentativa de login inválida
    Dado que estou na página de login
    Quando eu digitar um nome de usuário inválido
    E eu digitar uma senha inválida
    E eu clicar no botão de login
    Então devo ver uma mensagem de erro indicando que o nome de usuário é inválido
    E devo permanecer na página de login
