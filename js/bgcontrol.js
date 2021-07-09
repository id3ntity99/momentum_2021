const todoFrame = document.querySelector(".todo-frame");
const greetingFrame = document.querySelector(".greeting-frame");
const toTop = document.querySelector(".toTop");
const toBottom = document.querySelector(".toBottom");

const gradColor = [
  {
    id: "purple love",
    first: "#cc2b5e",
    second: "#753a88",
  },
  {
    id: "piglet",
    first: "#ee9ca7",
    second: "#ffdde1",
  },
  {
    id: "a lost memory",
    first: "#de6262",
    second: "#ffb88c",
  },
  {
    id: "socialive",
    first: "#06beb6",
    second: "#48b1bf",
  },
  {
    id: "pinky",
    first: "#dd5e89",
    second: "#f7bb97",
  },
  {
    id: "lush",
    first: "#56ab2f",
    second: "#a8e063",
  },
  {
    id: "tranquil",
    first: "#eecda3",
    second: "#ef628f",
  },
  {
    id: "green beach",
    first: "#02aab0",
    second: "#00cdac",
  },
  {
    id: "almost",
    first: "#ddd6f3",
    second: "#faaca8",
  },
  {
    id: "virgin america",
    first: "#7b4397",
    second: "#dc2430",
  },
  {
    id: "endless river",
    first: "#43cea2",
    second: "#185a9d",
  },
  {
    id: "bloody mary",
    first: "#ff512f",
    second: "#dd2478",
  },
  {
    id: "can you feel the love tonight",
    first: "#4568dc",
    second: "#b06ab3",
  },
];

function paintTodoFrame(bgChosenClr) {
  const todoChosenClr = gradColor[Math.floor(Math.random() * gradColor.length)];
  todoFrame.style.background = `linear-gradient(to bottom right, ${todoChosenClr.first}, ${todoChosenClr.second})`;
  if (todoChosenClr.id === bgChosenClr.id) {
    paintGreeting();
  }
}

function paintGreeting() {
  const bgChosenClr = gradColor[Math.floor(Math.random() * gradColor.length)];
  greetingFrame.style.background = `linear-gradient(to bottom right, ${bgChosenClr.first}, ${bgChosenClr.second})`;
  paintTodoFrame(bgChosenClr);
}

paintGreeting();

// Scroll Blur Control
toTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
toBottom.addEventListener("click", () => {
  window.scrollTo({ top: 1000, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  let scrollCoord = window.scrollY;

  for (i = 0; i < 10; i++) {
    const scrollCoordMin = i * 100;
    const scrollCoordMax = scrollCoord + 100;
    if (scrollCoord >= scrollCoordMin && scrollCoord < scrollCoordMax) {
      greetingFrame.style.filter = `blur(${0.5 * i}px)`;
      todoFrame.style.filter = `blur(${5 - 0.5 * i}px)`;
    }
  }
});

//Blur Manual Check
/*  if (scrollCoord >= 0 && scrollCoord < 100) {
    greetingFrame.style.filter = "blur(0px)";
    todoFrame.style.filter = "blur(5px)";
  } else if (scrollCoord >= 100 && scrollCoord < 200) {
    greetingFrame.style.filter = "blur(0.5px)";
    todoFrame.style.filter = "blur(4.5px)";
  } else if (scrollCoord >= 200 && scrollCoord < 300) {
    greetingFrame.style.filter = "blur(1px)";
    todoFrame.style.filter = "blur(4px)";
  } else if (scrollCoord >= 300 && scrollCoord < 400) {
    greetingFrame.style.filter = "blur(1.5px)";
    todoFrame.style.filter = "blur(3.5px)";
  } else if (scrollCoord >= 400 && scrollCoord < 500) {
    greetingFrame.style.filter = "blur(2px)";
    todoFrame.style.filter = "blur(3px)";
  } else if (scrollCoord >= 500 && scrollCoord < 600) {
    greetingFrame.style.filter = "blur(2.5px)";
    todoFrame.style.filter = "blur(2.5px)";
  } else if (scrollCoord >= 600 && scrollCoord < 700) {
    greetingFrame.style.filter = "blur(3px)";
    todoFrame.style.filter = "blur(2px)";
  } else if (scrollCoord >= 700 && scrollCoord < 800) {
    greetingFrame.style.filter = "blur(3.5px)";
    todoFrame.style.filter = "blur(1.5px)";
  } else if (scrollCoord >= 800 && scrollCoord < 900) {
    greetingFrame.style.filter = "blur(4px)";
    todoFrame.style.filter = "blur(1px)";
  } else if (scrollCoord >= 900 && scrollCoord < 941) {
    greetingFrame.style.filter = "blur(5px)";
    todoFrame.style.filter = "blur(0px)";
  } */
