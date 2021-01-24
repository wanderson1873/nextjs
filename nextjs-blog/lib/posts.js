export async function getSortedPostsData() {
  // Instead of the file system,
  // fetch post data from an external API endpoint
  const res = await fetch('https://api.github.com/users/wanderson1873')
  return res.json()
}