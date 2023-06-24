Funcionalidade: Comportamento de alertas em JavaScript

  Cenário: Verificar funcionamento dos alertas
    Dado que estou na página "https://the-internet.herokuapp.com/javascript_alerts"
    Quando eu clico em "Click for JS Alert"
    Então o alerta exibe a mensagem "I am a JS Alert"

    Quando eu clico em "Click for JS Confirm"
    E eu escolho "Cancelar" no alerta
    Então o resultado exibe o texto "You clicked: Cancel"

    Quando eu clico em "Click for JS Confirm"
    E eu escolho "OK" no alerta
    Então o resultado exibe o texto "You clicked: OK"
