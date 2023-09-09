import { twitterClient } from "./twitter.js";

export async function sendTweet(text) {
  try {
    await twitterClient.v2.tweet(text);
    console.log('Tweet sent =>', text);
  } catch (error) {
    console.error('Error:', error);
  }
}
