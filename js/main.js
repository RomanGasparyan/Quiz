const btnDarkMode = document.querySelector(".dark-mode-btn");

// 1. Проверка темной темы на уровне системных настроек
if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  btnDarkMode.classList.add("dark-mode-btn--active");
  document.body.classList.add("dark");
}

// 2. Проверка темной темы в localStorage
if (localStorage.getItem("darkMode") === "dark") {
  btnDarkMode.classList.add("dark-mode-btn--active");
  document.body.classList.add("dark");
} else if (localStorage.getItem("darkMode") === "light") {
  btnDarkMode.classList.remove("dark-mode-btn--active");
  document.body.classList.remove("dark");
}

// Если меняются системные настройки, меняем тему
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (event) => {
    const newColorScheme = event.matches ? "dark" : "light";

    if (newColorScheme === "dark") {
      btnDarkMode.classList.add("dark-mode-btn--active");
      document.body.classList.add("dark");
      localStorage.setItem("darkMode", "dark");
    } else {
      btnDarkMode.classList.remove("dark-mode-btn--active");
      document.body.classList.remove("dark");
      localStorage.setItem("darkMode", "light");
    }
  });

// Включение ночного режима по кнопке
btnDarkMode.onclick = function () {
  btnDarkMode.classList.toggle("dark-mode-btn--active");
  const isDark = document.body.classList.toggle("dark");

  if (isDark) {
    localStorage.setItem("darkMode", "dark");
  } else {
    localStorage.setItem("darkMode", "light");
  }
};

// **************************quiz********************

const questions = [
  {
    question: "Приветствуем вас! Кем был Марк? ?",
    answers: ["Миссионер", "Пророк", "Апостол", "Писатель Евангелист"],
    correct: 4,
  },
  {
    question: "Что Бог дает на лице земли?",
    answers: [
      "Проклятие",
      "Дождь",
      "Явление Христа народу",
      "Нашествие саранчи",
    ],
    correct: 2,
  },
  {
    question: "Кто болел горячкой?",
    answers: ["Тёща Петра", "Бесноватый", "Отец Сергия", "Марк"],
    correct: 1,
  },

  {
    question: "К какому разделу литературы относится книга Иов?",
    answers: ["Пророческая", "Поэтическая", "Эзотерическая", "Историческая"],
    correct: 2,
  },
  {
    question: "с кем был Даниил во рву?",
    answers: ["С преступниками", "С крысами", "С мышами", "Со львами"],
    correct: 4,
  },
  {
    question: "Аарон помогал Моисею...",
    answers: ["Кушать", "Говорить", "Молиться", "Работать"],
    correct: 2,
  },
  {
    question: "Назовите великое поручение Иисуса?",
    answers: [
      "Идите,научите все народы",
      "Веруйте в меня",
      "Ожидайте моего возвращения",
      "Покайтесь",
    ],
    correct: 1,
  },
  {
    question: "Животное,прообраз Иисуса?",
    answers: ["Серна", "Медведь", "Леопард", "Лев"],
    correct: 4,
  },
  {
    question: "О чём свидетельствует проколотое ухо у Еврея?",
    answers: [
      "Единственный сын",
      "Был у врача",
      "Потерял украшение",
      "Раб навечно",
    ],
    correct: 4,
  },
  {
    question: "Что получил Иаков у отца?",
    answers: [
      "Разноцветную одежду",
      "Наследство",
      "Первородство",
      "Благословение",
    ],
    correct: 4,
  },
  {
    question: "Какое растение было изображено в храме Соломона?",
    answers: ["Кипарис", "Пальма", "Нард", "Мирт"],
    correct: 2,
  },
  {
    question: "Что не должен делать пророк?",
    answers: [
      "Грозить судом",
      "Предсказывать будущее",
      "Унижать грешников",
      "Призывать покаяться",
    ],
    correct: 3,
  },
  {
    question: "Что такое сикера?",
    answers: ["Топор", "Пила", "Нож", "Спиртной напиток"],
    correct: 4,
  },
  {
    question: "Как понять фразу-КОЛЕНА ИЗРАИЛЯ?",
    answers: [
      "Родственные кланы",
      "Военное построение",
      "Коленные суставы",
      "Рода войск",
    ],
    correct: 1,
  },
  {
    question: "Кто ел мед, тем самым, нарушая не осознанно клятву отца?",
    answers: ["Верзелий", "Манассия", "Самсон", "Ионафан"],
    correct: 4,
  },

  {
    question: "Блаженны живущие в ...?",
    answers: ["Доме Господнем", "Израиле", "Раю", "Иерусалиме"],
    correct: 1,
  },
  {
    question: "Онисим убежал ...?",
    answers: ["От Иудеев", "От язычников", "От Филимона", "Из тюрьмы"],
    correct: 3,
  },
  {
    question: "Кто толковал значение непонятных снов?",
    answers: ["Иисус", "Даниил", "Жрецы", "Павел"],
    correct: 2,
  },
  {
    question: "Совершали ли ученики чудеса при жизни Иисуса Христа?",
    answers: ["Только однажды", "Нет", "Да", "Чуть-чуть"],
    correct: 3,
  },
  {
    question: "Кем был Варнава?",
    answers: ["Евангелистом", "Левитом", "Пророком", "дьяконом"],
    correct: 2,
  },
];

const headerContainer = document.querySelector("#header");
const listContainer = document.querySelector("#list");
const submitBtn = document.querySelector("#submit");

let score = 0;
let questionIndex = 0;

clearPage();
showQuestion();
submitBtn.onclick = checkAnswer;

function clearPage() {
  headerContainer.innerHTML = "";
  listContainer.innerHTML = "";
}

function showQuestion() {
  console.log("showQuestion");

  //   Вопрос
  const headerTemplate = `<h2 class="title">%title%</h2>`;
  const title = headerTemplate.replace(
    "%title%",
    questions[questionIndex]["question"]
  );
  headerContainer.innerHTML = title;

  //   Варианты ответов

  let answerNumber = 1;

  for (answerText of questions[questionIndex]["answers"]) {
    const questionTemplate = `<li>
                  <label>
                      <input value="%number%" type="radio" class="answer" name="answer" />
                      <span>%answer%</span>
                  </label>
              </li>`;

    const answerHTML = questionTemplate
      .replace("%answer%", answerText)
      .replace("%number%", answerNumber);

    listContainer.innerHTML += answerHTML;
    answerNumber++;
  }
}

function checkAnswer() {
  console.log("checkAnswer started!");
  const checkedRadio = listContainer.querySelector("input:checked");

  if (!checkedRadio) {
    submitBtn.blur();
    return;
  }

  const userAnswer = parseInt(checkedRadio.value);

  if (userAnswer === questions[questionIndex]["correct"]) {
    score++;
  }
  console.log("score = ", score);

  if (questionIndex !== questions.length - 1) {
    console.log("Это НЕ последний вопрос");
    questionIndex++;
    clearPage();
    showQuestion();
    return;
  } else {
    console.log("Это последний вопрос");
    clearPage();
    showResults();
  }
}

function showResults() {
  console.log("showResults started");
  console.log(score);

  const resultsTemplate = `<h2 class="title">%title%</h2>
    <h3 class="summary">%message%</h3>
    <p class="result">%result%</p>`;

  let title, message;

  if (score === questions.length) {
    title = "Поздравляем! 👼 🧚‍♂️ 🥳";
    message = "Вы ответили верно на все вопросы! Вы много читали. 🙌";
  } else if ((score * 100) / questions.length >= 50) {
    title = "Неплохой результат, вы дали более половины правильных ответов. 😐";
    message = "Недалеко вы от царствия Божия 👏";
  } else {
    title = "Вы мало читали Библию 😞";
    message =
      "Царство Небесное силою берется, и употребляющие усилие восхищают его 🙂";
  }

  let result = `${score} из ${questions.length}`;

  const finalMessage = resultsTemplate
    .replace("%title%", title)
    .replace("%message%", message)
    .replace("%result%", result);

  headerContainer.innerHTML = finalMessage;

  submitBtn.blur();
  submitBtn.innerText = "Начать заново";
  submitBtn.onclick = () => history.go();
}
