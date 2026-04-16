const form = document.getElementById("noteForm");
const messageInput = document.getElementById("messageInput");
const nameInput = document.getElementById("nameInput");
const board = document.getElementById("board");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // stop page reload

  const message = messageInput.value;
  const name = nameInput.value;

  // create new post-it
  const note = document.createElement("div");
note.classList.add("post-it");

note.innerHTML = `
  <p>${message}</p>
  <small>- ${name}</small>
`;
  const deleteBtn = document.createElement("button");
deleteBtn.textContent = "✕";
deleteBtn.classList.add("delete-btn");

deleteBtn.addEventListener("click", function () {
  note.remove();
});

note.appendChild(deleteBtn)

  const rotations = [-3, 2, -2, 4, -4];
  const colors = ["#FFF7E6", "#E6EAFF", "#F7E6FF", "#F7FFE6", "#FFE6EA"];

  const randomRotation =
    rotations[Math.floor(Math.random() * rotations.length)];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  note.style.transform = `rotate(${randomRotation}deg)`;
  note.style.background = randomColor;

  board.appendChild(note);

  // clear inputs
  messageInput.value = "";
  nameInput.value = "";
});
