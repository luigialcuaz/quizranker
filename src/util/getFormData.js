export default function getFormData(id) {
  const quizForm = document.getElementById(id).parentElement;
  const quizFormData = new FormData(quizForm);

  let category = '';
  let difficulty = '';

  if (quizFormData.get('category')) {
    category = `category=${quizFormData.get('category')}`;
  }

  if (quizFormData.get('difficulty')) {
    difficulty = `difficulty=${quizFormData.get('difficulty')}`;
  }

  if(quizFormData.get('category') && quizFormData.get('difficulty')) {
    category += '&';
  }

  return ({
    category, 
    difficulty,
  });
}