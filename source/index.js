import { twitterClient } from "./twitter.js"
import { argv } from 'node:process';

const tweet = async (arg) => {
  try {
    await twitterClient.v2.tweet(arg);
    console.log('Twittado => ', arg)
  } catch (e) {
    console.log(e)
  }
}


if (argv.length >= 3) {

  for (let i = 2; i < argv.length; i++) {
    setTimeout(() => {
      tweet(argv[i])
    }, 100)
  }
} else {
  console.log('Insira um ou mais argumentos para ser twittado')
}


