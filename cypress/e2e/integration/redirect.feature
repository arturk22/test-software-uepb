Feature: Teste de Redirecionamento de Página

  Scenario: Redirecionamento para a página correta
    Given que estou na página inicial
    When eu clico no link de redirecionamento
    Then eu devo ser redirecionado para a página correta
