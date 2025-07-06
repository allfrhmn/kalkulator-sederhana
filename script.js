const display = document.getElementById("display");
const themeSwitch = document.getElementById("themeSwitch");
const themeLabel = document.getElementById("themeLabel");


// Tombol kalkulator
function appendValue(value) {
    if (display.value === "0" && value !== ".") {
      display.value = value;
    } else {
      display.value += value;
    }
}

function clearDisplay() {
  display.value = "0";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

// Keyboard support
document.addEventListener("keydown", (event) => {
  const key = event.key;

  if ("0123456789+-*/.".includes(key)) {
    appendValue(key);
  } else if (key === "Enter") {
    event.preventDefault();
    calculate();
  } else if (key === "Backspace") {
    deleteLast();
  } else if (key === "Escape") {
    clearDisplay();
  }
});

themeSwitch.addEventListener("change", () => {
    document.body.classList.toggle("dark");
    updateThemeLabel();
  });
  
// Fungsi untuk ubah label berdasarkan mode
function updateThemeLabel() {
    if (document.body.classList.contains("dark")) {
      themeLabel.textContent = "🌙 Dark Mode";
    } else {
      themeLabel.textContent = "🌞 Light Mode";
    }
}

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add("dark");
    themeSwitch.checked = true;
}
updateThemeLabel(); // <--- Tambahkan ini di akhir file