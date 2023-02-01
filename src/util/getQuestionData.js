import formatQuestionData from "./formatQuestionData";

export default function getQuestionData(formData) {
  return (
    fetch(`https://opentdb.com/api.php?amount=10&type=multiple${formData ? ('&' + formData) : ''}`)
    .then((res) => res.json())
    .then((data) => {
      return(
        data.results.map((data) => {
          return formatQuestionData(data);
        })
      );
    })
  );
}