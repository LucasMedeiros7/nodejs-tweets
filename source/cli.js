import { argv } from 'node:process';
import { sendTweet } from './sendTweet.js';


async function main() {
  if (argv.length >= 3) {
    for (let i = 2; i < argv.length; i++) {
      const tweetText = argv[i];
      await sendTweetWithDelay(tweetText, i);
    }
  } else {
    console.log('Please provide one or more tweet messages.');
  }
};

const sendTweetWithDelay = async (text, index) => {
  const delay = 100 * index;
  await sleep(delay);
  await sendTweet(text);
};

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

main();
