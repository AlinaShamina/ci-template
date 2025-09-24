export default function sortByHealth(characters) {
  return [...characters].sort((a, b) => b.health - a.health);
}
