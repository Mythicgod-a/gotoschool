// 找到所有"可点击的照片按钮"和那句问题文字
const photoButtons = document.querySelectorAll(".quiz-photo");
const question = document.getElementById("quizQuestion");

// 记住问题原本的文字,方便以后需要"重置"时用
const originalQuestion = question.textContent;

photoButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // 把文字换成揭晓答案
    question.textContent = "It's you! 😄";

    // 清掉所有按钮身上的 selected 状态,只给刚点的这个加上
    photoButtons.forEach((btn) => btn.classList.remove("selected"));
    button.classList.add("selected");
  });
});
