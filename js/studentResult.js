const submit = document.getElementById("submit-button");

submit.addEventListener("click", () => {
  const nameValue = document.getElementById("name").value;
  const rollValue = document.getElementById("roll").value;
  const depertmentValue = document.getElementById("depertment").value;
  const semesterValue = document.getElementById("semester").value;
  const resultValue = document.getElementById("result").value;

  const newRow = document.createElement("tr");
  newRow.innerHTML = `<td>${nameValue}</td>
  <td>${rollValue}</td>
  <td>${depertmentValue}</td>
  <td>${semesterValue}</td>
  <td>${resultValue}</td>`;

  document.getElementById("table-content").appendChild(newRow);
});
