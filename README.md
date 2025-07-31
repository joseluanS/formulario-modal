# Projeto de Formulário de Contato com Validação Client-Side

Este projeto demonstra um formulário de contato simples e responsivo, implementado como um modal (janela pop-up), com validação de campos no lado do cliente utilizando JavaScript e jQuery. A validação garante que os dados inseridos pelo usuário estejam no formato correto antes do envio, proporcionando uma melhor experiência de usuário e dados mais limpos.

## Funcionalidades

* **Modal de Contato:** Um botão principal aciona a abertura de um modal com o formulário de contato.
* **Fechamento Flexível:** O modal pode ser fechado clicando no botão "X" ou em qualquer área fora do formulário.
* **Validação de Campos:** Validação em tempo real dos seguintes campos ao tentar enviar o formulário:
    * **Nome Completo:** Verifica se o nome contém apenas letras (incluindo acentuadas), espaços e hífens, com um mínimo de 3 caracteres.
    * **E-mail:** Valida o formato do e-mail utilizando uma expressão regular padrão (`exemplo@dominio.com`).
    * **Telefone:** Valida números de telefone no formato brasileiro, aceitando variações como `(00)99999-9999` ou `(00)9999-9999`.
* **Feedback Visual:**
    * Campos inválidos são destacados com uma borda vermelha.
    * Mensagens de erro descritivas aparecem acima do botão de envio, informando ao usuário quais campos precisam ser corrigidos.
* **Envio Condicional:** O formulário só é "enviado" (neste exemplo, ele fecha e limpa os campos, simulando um envio bem-sucedido) se todos os campos passarem na validação.

## Tecnologias Utilizadas

* **HTML5:** Estrutura básica do formulário e da página.
* **CSS3:** Estilização do formulário, do modal e dos elementos de feedback de validação.
* **JavaScript:** Lógica principal para manipulação do DOM e controle de eventos.
* **jQuery (v3.7.1):** Biblioteca JavaScript utilizada para simplificar a manipulação do DOM e a gestão de eventos.
* **Expressões Regulares (Regex):** Essenciais para a validação de padrões de entrada de dados nos campos de nome, e-mail e telefone.

## Contribuição

Sinta-se à vontade para explorar o código, sugerir melhorias ou reportar issues.


