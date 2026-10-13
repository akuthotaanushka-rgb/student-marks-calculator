const form = document.getElementById("marksForm");
const result = document.getElementById("result");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("studentName").value.trim();
  const roll = document.getElementById("rollNumber").value.trim();
  const marks = [1, 2, 3, 4, 5].map((number) =>
    Number(document.getElementById(`subject${number}`).value)
  );

  if (!name || !roll || marks.some((mark) => !Number.isFinite(mark) || mark < 0 || mark > 100)) {
    alert("Please enter valid student details and marks between 0 and 100.");
    return;
  }

  const total = marks.reduce((sum, mark) => sum + mark, 0);
  const percentage = total / 5;
  const passed = marks.every((mark) => mark >= 35);

  let grade;
  if (!passed) {
    grade = "F";
  } else if (percentage >= 90) {
    grade = "A+";
  } else if (percentage >= 80) {
    grade = "A";
  } else if (percentage >= 70) {
    grade = "B";
  } else if (percentage >= 60) {
    grade = "C";
  } else if (percentage >= 50) {
    grade = "D";
  } else {
    grade = "E";
  }

  document.getElementById("resultName").textContent = name;
  document.getElementById("resultRoll").textContent = roll;
  document.getElementById("totalMarks").textContent = total;
  document.getElementById("percentage").textContent = percentage.toFixed(2);
  document.getElementById("grade").textContent = grade;
  document.getElementById("status").textContent = passed ? "Pass" : "Fail";
  document.getElementById("status").style.color = passed ? "#15803d" : "#b91c1c";

  result.classList.remove("hidden");
});

form.addEventListener("reset", function () {
  result.classList.add("hidden");
});
