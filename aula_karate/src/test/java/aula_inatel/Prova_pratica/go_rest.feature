Feature: Testando a API do GO Rest

Background: Funções executadas em cada teste
    * def url_base = 'https://pokeapi.co'

Scenario: Testando retorno
    Given url url_base
    And path '/api/v2/berry'
    When method get 
    Then status 200

Scenario: Testando retorno com erro
    Given url url_base
    And path '/api/v2/berrys'
    When method get 
    Then status 404

Scenario: Mudando o version-group/1/
    Given url url_base
    And path '/api/v2/version-group/1/'
    When method get 
    Then status 200
    And match response.pokedexes[0] == {name:"kanto", url:"https://pokeapi.co/api/v2/pokedex/2/"}

Scenario: Testando o retorno JSON
    Given url url_base
    And path '/api/v2/version'
    When method get 
    Then status 200
    And def next = $.results[3].url
    And print next 
    And url next
    When method get
    Then status 200

Scenario: Testando o retorno JSON
    Given url url_base
    And path '/api/v2/egg-group'
    When method get 
    Then status 200
    And def next = $.results[0].url
    And print next 
    And url next
    When method get
    Then status 200


