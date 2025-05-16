let currentPage = 1;
let score = 0;
const correctAnswers = [1, 1, 2]; // Jawaban benar dari tiap soal

function showPage(pageNum) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(`page${pageNum}`).classList.add('active');
  currentPage = pageNum;
}

function startQuiz() {
  score = 0;
  showPage(2);
}

function answerQuestion(questionIndex, selectedOption) {
  if (selectedOption === correctAnswers[questionIndex]) {
    score++;
  }
  const nextPage = currentPage + 1;
  if (nextPage <= 4) {
    showPage(nextPage);
  } else {
    document.getElementById('scoreDisplay').innerText = `Kamu mendapatkan ${score} dari 3 pertanyaan.`;
    showPage(5);
  }
}
