import { sendTweet } from "./sendTweet.js";
import { tweetsOfMonth } from "./tweetsOfMonth.js";

function generateTweetForToday() {
  const currentDate = new Date();
  const currentDayOfMonth = currentDate.getDate();

  if (currentDayOfMonth >= 1 && currentDayOfMonth <= tweetsOfMonth.length) {
    const tweetDoDia = tweetsOfMonth[currentDayOfMonth - 1];
    return tweetDoDia;
  } else {
    return "Desculpe, não há um tweet programado para hoje.";
  }
}

const tweetDoDiaAtual = generateTweetForToday();

sendTweet(tweetDoDiaAtual)