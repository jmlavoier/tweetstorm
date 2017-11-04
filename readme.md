## Tweetstorm
Create a program that receives a text or arbitrary length and creates a tweetstorm with it.

## Funcionamento
- Verificar dentro dos proximos 140 caracteres se existe ponto final.
- Caso houver alguma abertuda de aspas(`"` ou `'`) dar preferencia para o fechamento delas.
- Caso não houver, dar preferencia em quebrar os tweets em ponto finais.
- Caso não encontre procure alguma pontuação nesta ordem. `;`, `,`, `!`, `?`, `:`.
- Quando dentro de um tweet de 140 não tiver nenhuma pontuação inserir "..." e iniciar o proximo com `...`
- Iniciar cada tweet com `X/`, então será permitido somente 138 caracteres.

## Texto de exemplo
[https://medium.com/the-mission/8-things-every-person-should-do-before-8-a-m-2183b7178b17](Medium - 8 things every person should do before 8am) 

>Life is busy. It can feel impossible to move toward your dreams. If you have a full-time job and kids, it’s even harder. How do you move forward? If you don’t purposefully carve time out every day to progress and improve — without question, your time will get lost in the vacuum of our increasingly crowded lives. Before you know it, you’ll be old and withered — wondering where all that time went. As Professor Harold Hill has said — “You pile up enough tomorrows, and you’ll find you are left with nothing but a lot of empty yesterdays.” This article is intended to challenge you to rethink your entire approach to life. The purpose is to help you simplify and get back to the fundamentals. Sadly, most people’s lives are filled to the brim with the non-essential and trivial. They don’t have time to build toward anything meaningful. They are in survival mode. Are you in survival mode? Like Bilbo, most of us are like butter scraped over too much bread. Unfortunately, the bread is not even our own, but someone else’s. Very few have taken the time to take their lives into their own hands. It was social and cultural to live our lives on other people’s terms just one generation ago. And many millennials are perpetuating this process simply because it’s the only worldview we’ve been taught. However, there is a growing collective-consciousness that with a lot of work and intention — you can live every moment of your life on your own terms. You are the designer of your destiny. You are responsible. You get to decide. You must decide — because if you don’t, someone else will. Indecision is a bad decision. With this short morning routine, your life will quickly change.

## Bibliotecas
- Prompt - para trabalhar com linhas de comando
- Twit - para tweettar
- Dotenv - para variaveis de ambiente

## Configuração
Necessário a versão do seu Node `v8.8.1`.
Antes de iniciar o Tweetstorm Generator verifique o arquivo .env e insira as chaves de segurança da API do twitter. 
Caso ainda não possua acesse [ps://apps.twitter.com](Twitter Apps).


### Exemplo .env
```
CONSUMER_KEY=6jQIDcYGSDFGDGAjxyVmjOUmG
CONSUMER_SECRET=g9MyD89yb98dgisfsSSFa9njNHll0ZMo4hntPBI5bXZ
ACCESS_TOKEN=916352545340766383345-rfHqhslskgaafwv3pnVgpT6Gl7vs
ACCESS_TOKEN_SECRET=xK4izGPrNedflk432fsdlk1234123426dlkfg004d
```

## Quick start
Para iniciar o Tweetstorm Generator:
`$ node tweetstorm-generator.js`