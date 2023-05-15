Funcionalidade: Adicionar/Remover Elementos

  Cenário: Adicionar e remover elementos
    Dado que estou na página de adicionar/remover elementos
    Então não deve haver elementos na lista inicialmente
    Quando eu clicar no botão "Add Element" para adicionar um elemento
    Então o elemento deve ser adicionado à lista
    E quando eu clicar no botão "Delete" para remover o elemento
    Então o elemento deve ser removido da lista
