const goodTones = [
  "Market on the rise",
  "Good news, job seekers",
  "Competition heating up",
  "Upswing in the market",
  "Perfect timing to job hunt",
  "Shining opportunities",
  "Time to showcase your skills",
  "Networking is key",
  "Celebrate",
  "Time to shine",
  "Seize the moment",
  "Embrace success",
  "Keep up the momentum",
  "Congratulations",
  "Opportunities abound",
  "Your time has come",
  "Leap into action",
  "Embrace new beginnings",
  "Unlock your potential",
  "Great things ahead",
  "Success is near",
  "Your efforts pay off",
  "Victory is yours",
  "Thriving in your career",
  "Feeling fulfilled and accomplished",
  "Receiving positive feedback",
  "Seeing progress and growth",
  "Feeling confident and empowered",
  "Experiencing success and achievement",
  "Celebrating milestones",
  "Inspiring others with your journey",
];
const goodEmojis = [
  "🚀",
  "🌟",
  "🎉",
  "👏",
  "🙌",
  "💪",
  "🥳",
  "✨",
  "🎈",
  "💼",
  "😄",
  "🎊",
  "🌈",
  "🎆",
  "🌞",
  "🎇",
  "🎖️",
  "🏆",
  "🥇",
  "🎯",
  "💎",
  "💰",
  "🎵",
];

const badTones = [
  "Uh oh, more job seekers",
  "Downward trend alert",
  "Job market getting flooded",
  "Resume update needed",
  "Time to network actively",
  "Diversify your search",
  "Sharpen your skills",
  "Don't give up",
  "Target your applications",
  "Collaboration is key",
  "Stay resilient",
  "Embrace challenges",
  "Adapt and persevere",
  "Revise your strategy",
  "Seek feedback",
  "Keep exploring options",
  "Keep pushing forward",
  "Stay motivated",
  "Stay proactive",
  "Keep learning",
  "Stay persistent",
  "Keep your head up",
  "Stay resourceful",
  "Stay optimistic",
  "Tough times ahead",
  "Feeling overwhelmed",
  "Facing obstacles",
  "Struggling to find opportunities",
  "Feeling stuck in your job search",
  "Experiencing setbacks",
  "Pressure is on",
  "Worrying about the future",
];
const badEmojis = [
  "😟",
  "😓",
  "😩",
  "💼",
  "🔄",
  "🔍",
  "🛠️",
  "💔",
  "🎯",
  "🤝",
  "👎",
  "😔",
  "💥",
  "💣",
  "🌧️",
  "😖",
  "😕",
  "😥",
  "😞",
  "😣",
  "😫",
  "😵",
  "😰",
];

const getRandomItem = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

/**
 * Get a random tone from the specified category.
 * @param {string} tone - The tone category ("bad" or "good").
 * @returns {string} A randomly selected tone.
 */
export const getRandomTone = (tone) => {
  if (tone === "good") {
    const tone = getRandomItem(goodTones);
    const emoji = getRandomItem(goodEmojis);
    // return `${emoji}`;
    // return "⬆️"
    return "🎉";
  }

  if (tone === "bad") {
    const tone = getRandomItem(badTones);
    const emoji = getRandomItem(badEmojis);
    // return `${emoji}`;
    return "⬇️";
  }

  const invalidTone = "Invalid tone category. Please provide 'bad' or 'good'.";

  console.error(invalidTone);
  throw new Error(invalidTone);
};
