import { sendTweet } from "./sendTweet.js";
import { tweetsOfMonth } from "./tweetsOfMonth.js";

function generateTweetForToday() {
  const currentDate = new Date();
  const currentDayOfMonth = currentDate.getDate();

  if (currentDayOfMonth >= 1 && currentDayOfMonth <= tweetsOfMonth.length) {
    const tweetOfToday = tweetsOfMonth[currentDayOfMonth - 1];
    return tweetOfToday;
  } else {
    return "Sorry, tweet for today was not found.";
  }
}

const tweetOfTodayAtual = generateTweetForToday();

sendTweet(tweetOfTodayAtual)