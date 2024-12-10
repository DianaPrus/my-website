 // Массив шагов с описаниями, изображениями и координатами выделения
 const steps = [
    {
        text: "Шаг 1: Откройте программу 1С.",
        image: "step1.png",
        highlight: { left: "50px", top: "100px", width: "100px", height: "50px" } // Координаты выделения
    },
    {
        text: "Шаг 2: Перейдите в раздел 'Справки'.",
        image: "step2.png",
        highlight: { left: "65px", top: "155px", width: "50px", height: "20px" }
    },
    {
        text: "Шаг 3: Выберите 'Справка 2-НДФЛ'.",
        image: "step3.png",
        highlight: { left: "100px", top: "200px", width: "180px", height: "60px" }
    },
    {
        text: "Шаг 4: Следуйте указаниям на экране.",
        image: "step4.png",
        highlight: { left: "300px", top: "50px", width: "50px", height: "30px" }
    }
];

let currentStep = 0; // Индекс текущего шага

function startGuide() {
    document.getElementById('main-menu').style.display = 'none';
    document.getElementById('helper-screen').style.display = 'block';
}

 // Функция отображает шаг обучения
function showStep(stepIndex) {
    currentStep = stepIndex;
    const guideDiv = document.getElementById('guide-step');
    const step = steps[stepIndex];
 // Генерация контента для текущего шага
    guideDiv.innerHTML = `
        <div style="position: relative; display: inline-block;">
            <img src="${step.image}" alt="Шаг ${stepIndex + 1}" class="guide-image">
            <div class="highlight" style="
                position: absolute;
                left: ${step.highlight.left};
                top: ${step.highlight.top};
                width: ${step.highlight.width};
                height: ${step.highlight.height};
                border: 2px solid blue;
                cursor: pointer;" 
                onclick="nextStep()"></div>
        </div>
    `;

    document.getElementById('dialog-text').innerText = step.text;
    // Скрыть помощника, показать шаг
    document.getElementById('helper-screen').style.display = 'none';
    document.getElementById('guide').style.display = 'block';
   
}

 // Функция для перехода к следующему шагу
function nextStep() {
    if (currentStep < steps.length - 1) {
        showStep(currentStep + 1);// Переход к следующему шагу
    } else {
        showCompletionScreen(); // Завершение обучения
    }
}

// Отображение экрана завершения
function showCompletionScreen() {
    document.getElementById('guide').style.display = 'none';
    document.getElementById('completion-screen').style.display = 'block';
}

// Возврат в главное меню
function returnToMenu() {
    document.getElementById('guide').style.display = 'none';
    document.getElementById('helper-screen').style.display = 'none';
    document.getElementById('completion-screen').style.display = 'none';
    document.getElementById('main-menu').style.display = 'block';
}