const prompt = require('prompt');
const { createTweets } = require('./tweetstorm');
const { postTwit, replyTwit } = require('./twitter-api');

console.log('Para iniciar o Tweetstorm configure as variaveis de ambiente no arquivo .env.'); 

const schema = {
  properties: {
    text: {
      description: "Cole ou escreva o texto para gerar o tweetstorm"
    }
  }
};

prompt.start();

prompt.get(schema, function (err, result) {
  let { text } = result;

  const twitStorm = createTweets(text);

  postTwit(`1/${twitStorm.next().trim()}`).then(result => {
    console.log('reply', result.id_str);

    replyTwit(result.id_str, twitStorm).then(result => {
      console.log('Tweeted success!');
    }).catch(err =>{
      console.log('Error on retweet', err);
    });
  }).catch(err => {
    console.log('Error on tweet', err);
  })
});