
# CSS
1. Qual a diferença entre progressive enhancement e graceful degradation? Por que você escolheria um ou outro?
Progressive Enhancement é a pratica que visa cuidar da acessibilidade da aplicação, enquanto Graceful Degradation foca na usabilidade.
Acredito que as duas praticas se complementam, porém utilizaria o Progressive Enhancement para tornar a aplicação mais acessivel, diminuindo problemas de cross-browser, e utilizaria o Graceful Degradation para diminuir a complexidade da experiencia do usuário, deixa-lo intuitivo.


2. Como centralizar o bloco segundo o desenho abaixo considerando que as medidas da div.outer são indefinidas?
```
 ________________________________________
|                                        |
|  div.outer                             |
|          ________200px______           |
|          |                  |          |
|     100px|  div.inner       |          |
|          |                  |          |
|          |__________________|          |
|                                        |
|                                        |
|________________________________________|
```
```
div.outer {
  position: relative;
}

div.inner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

3. Você já usou algum framework de CSS? Qual? Por que?
Já utilizei o compass, mas muito pouco, utilizei pois a aplicação que trabalhei já existia e era padrão para trabalhar com sprites. 

4. Você já usou algum pré-processador de CSS? Qual? Por que?
Sim, Sass. Porque torna o trabalho com css mais produtivo, ajuda com reaproveitamento de código, e permite organizar melhor. 

5. Você já usou algum pós-processador de JS? Qual? Por que?
Sim, Babel. Para trabalhar com as verões mais novas do JS como ES2015 e ES2016. E o JSX do React para trabalhar com a sintaxe dos templates html dentro do JS. 

6. Como alinhar horizontalmente um bloco com largura definida?
```
margin: 0 auto;
```

7. Como você mantem os seletores (classes, ids, etc) de uma base de código que evolui com o tempo? Como faz para remover o que não está sendo usado (e pior, como saber o que está sendo usado)?
CSSLint é uma ferramenta que auxilia na manutenção, você pode configura-lo para não permitir código não utilizados. 

# Questions
1. Qual a sua experiência com automação de qualidade no front end (ex testes unitários, testes de integração)
Tenho experiencia com testes unitários com Jest e Enzyme.

2. Qual o bug mais difícil que depurou nos últimos anos?
Fui responsável por criar uma editor de e-mail bem específico, com a funcionalidade de mention. Porém tive muita dor de cabeça com problemas relacionado ao range no cross-browser, tive que entender melhor as API de Range dos browsers.

3. Tem alguma experiência com programação funcional? Caso tenha, como ela pode ajudar no desenvolvimento de UI?
Após conhecer o Redux e assistir algumas palestras da Anjana Vakil, me apaixonei por programação funcional. Desde o ano passado venho inserindo em meus códigos os principais conceitos como immutabilidade e funções puras. Isso pode ajudar e tem ajudado muito na diminuição de problemas relacionados alteração de variaveis por referencia, facilitado a manuteção dos códigos, sem falar que os códigos ficam mais elegantes :). 

4. Como você controla dependências? Você usa um gerenciador de pacotes? Qual? Por quê?
Utilizo o Npm, mas a ferramenta que tenho utilizado é o Yarn. Ele gera um arquivo `yarn.lock` que salva as versões dos pacotes de cada dependencia, deixando a instalação muito mais rápida.

5. Tem alguma experiência com Reactive Programming (rx)? Caso tenha, como ela pode ajudar no desenvolvimento de UI?
Sim, trabalho com React há mais de 2 dois anos. O principais benefício que vejo no React é a reaproveitamento de cóigo através da componentização e rapidez na renderização através dos estados. React permite criar arquiteturas bem escalaveis.