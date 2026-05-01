export const getYoutubeLink = (skillName, taskTitle) => {
  const query = encodeURIComponent(`${skillName} ${taskTitle}`);
  return `https://www.youtube.com/results?search_query=${query}`;
};

export const getResourceLink = (skillName, taskTitle, zone) => {
  let sites = 'site:coursera.org OR site:edx.org';
  if (zone === 'tech')     sites = 'site:developer.mozilla.org OR site:freecodecamp.org OR site:geeksforgeeks.org';
  if (zone === 'language') sites = 'site:duolingo.com OR site:bbc.co.uk/languages OR site:memrise.com';
  const query = encodeURIComponent(`${skillName} ${taskTitle} ${sites}`);
  return `https://www.google.com/search?q=${query}`;
};
