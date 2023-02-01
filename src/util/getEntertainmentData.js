export default function getEntertainmentData() {
  return (
    fetch('https://opentdb.com/api_category.php')
    .then(res => res.json())
    .then(data => {
      return data
    })
  );
}