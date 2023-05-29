Feature: Cadastro de Usuário
    Scenario Outline: Realizando cadastro

        Given que eu visite a Ebac-Store na aba de login/cadastro
        When eu preencher os campos de "<email>" e "<senha>"
        Then o painel de minha conta deve ser exibido

        Examples:
            | Emai                     | senha       |
            | teste.testinha@gmail.com | 123456Jesus |