const { config } = require('dotenv');
const Twit = require('twit');

config();

const T = new Twit({
 consumer_key:         process.env.CONSUMER_KEY,
 consumer_secret:      process.env.CONSUMER_SECRET,
 access_token:         process.env.ACCESS_TOKEN,
 access_token_secret:  process.env.ACCESS_TOKEN_SECRET,
 timeout_ms:           60*1000,
});

const callUpdate = (twitText, resolve, reject) => {
  T.post('statuses/update', { status: twitText }, function(err, data, response) {
    if (data.id) {
      resolve(data);
    } else {
      reject(data);
    }
  })
}

const callRetweet = (id, twitText, resolve, reject) => {
  T.post('statuses/update', { in_reply_to_status_id: id, status: twitText  }, function (err, data, response) {
    if (data.id) {
      resolve(data);
    } else {
      reject(data);
    }
  })
}

const postTwit = (twitText) => {
  return new Promise((resolve, reject) => {
    console.log('Tweet:', twitText.trim());

    callUpdate(twitText, resolve, reject);
  })
}

const replyTwit = (id, twitStorm) => {
  return new Promise((resolve, reject) => {
    let index = 2;
    
    function next(data) {
      const twitText = twitStorm.next();

      console.log('Reply: ', `${index}/${twitText.trim()}`);

      if (twitText) {
          callRetweet(id, `${index}/${twitText.trim()}`, next, reject);
          index += 1;
      } else {
        resolve(data);
      }
    }

    next();

  })
}

module.exports = {
  postTwit,
  replyTwit,
}