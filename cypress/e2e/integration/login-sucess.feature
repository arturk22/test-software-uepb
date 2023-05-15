Funcionalidade: Login

  Cenário: Login bem-sucedido
    Dado que estou na página de login
    Quando eu digitar o nome de usuário "tomsmith"
    E eu digitar a senha "SuperSecretPassword!"
    E eu clicar no botão de login
    Então devo ser redirecionado para a área segura
    E devo ver uma mensagem de sucesso
