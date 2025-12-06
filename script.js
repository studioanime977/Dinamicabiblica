// Base de datos de preguntas bíblicas (75+ preguntas con referencias)
const questions = [
    // Preguntas originales con referencias añadidas
    {
        question: "¿Cuántos libros tiene la Biblia?",
        answers: ["66", "73", "39", "27"],
        correct: 0,
        reference: "Biblia completa"
    },
    {
        question: "¿Quién construyó el arca?",
        answers: ["Moisés", "Abraham", "Noé", "David"],
        correct: 2,
        reference: "Génesis 6:13-22"
    },
    {
        question: "¿En qué ciudad nació Jesús?",
        answers: ["Nazaret", "Jerusalén", "Belén", "Capernaúm"],
        correct: 2,
        reference: "Mateo 2:1"
    },
    {
        question: "¿Cuál es el primer libro de la Biblia?",
        answers: ["Éxodo", "Génesis", "Levítico", "Números"],
        correct: 1,
        reference: "Biblia"
    },
    {
        question: "¿Cuántos discípulos tuvo Jesús?",
        answers: ["10", "11", "12", "13"],
        correct: 2,
        reference: "Mateo 10:1-4"
    },
    {
        question: "¿Quién fue tragado por un gran pez?",
        answers: ["Jonás", "Pedro", "Pablo", "Juan"],
        correct: 0,
        reference: "Jonás 1:17"
    },
    {
        question: "¿Qué significa el nombre 'Jesús'?",
        answers: ["Rey de reyes", "Dios con nosotros", "Dios salva", "Príncipe de paz"],
        correct: 2,
        reference: "Mateo 1:21"
    },
    {
        question: "¿Quién negó a Jesús tres veces?",
        answers: ["Juan", "Pedro", "Judas", "Tomás"],
        correct: 1,
        reference: "Mateo 26:69-75"
    },
    {
        question: "¿Cuál es el mandamiento más importante según Jesús?",
        answers: ["No robarás", "Amar a Dios sobre todas las cosas", "Honrar padre y madre", "No matarás"],
        correct: 1,
        reference: "Mateo 22:37-38"
    },
    {
        question: "¿Quién escribió la mayoría de las cartas del Nuevo Testamento?",
        answers: ["Pedro", "Juan", "Pablo", "Santiago"],
        correct: 2,
        reference: "Cartas Paulinas"
    },
    {
        question: "¿Cuántos días ayunó Jesús en el desierto?",
        answers: ["30 días", "40 días", "50 días", "7 días"],
        correct: 1,
        reference: "Mateo 4:2"
    },
    {
        question: "¿Quién fue el primer rey de Israel?",
        answers: ["David", "Salomón", "Saúl", "Samuel"],
        correct: 2,
        reference: "1 Samuel 10:1"
    },
    {
        question: "¿Con qué venció David a Goliat?",
        answers: ["Una espada", "Una lanza", "Una honda y una piedra", "Un arco"],
        correct: 2,
        reference: "1 Samuel 17"
    },
    {
        question: "¿Cuántos días estuvo Jonás en el vientre del pez?",
        answers: ["1 día", "3 días", "7 días", "40 días"],
        correct: 1,
        reference: "Jonás 1:17"
    },
    {
        question: "¿Quién bautizó a Jesús?",
        answers: ["Pedro", "Juan el Bautista", "Pablo", "Santiago"],
        correct: 1,
        reference: "Mateo 3:13-17"
    },
    {
        question: "¿Cuál es el fruto del Espíritu según Gálatas?",
        answers: ["Poder y autoridad", "Amor, gozo, paz...", "Sabiduría y conocimiento", "Fe y esperanza"],
        correct: 1,
        reference: "Gálatas 5:22-23"
    },
    {
        question: "¿Quién traicionó a Jesús?",
        answers: ["Pedro", "Juan", "Judas Iscariote", "Tomás"],
        correct: 2,
        reference: "Mateo 26:14-16"
    },
    {
        question: "¿En qué monte recibió Moisés los 10 mandamientos?",
        answers: ["Monte Sinaí", "Monte Hermón", "Monte Carmelo", "Monte de los Olivos"],
        correct: 0,
        reference: "Éxodo 19:20"
    },
    {
        question: "¿Cuál es el versículo más corto de la Biblia?",
        answers: ["Jesús lloró", "Dios es amor", "Orad sin cesar", "Regocijaos siempre"],
        correct: 0,
        reference: "Juan 11:35"
    },
    {
        question: "¿Quién fue lanzado al foso de los leones?",
        answers: ["José", "Daniel", "David", "Elías"],
        correct: 1,
        reference: "Daniel 6"
    },
    {
        question: "¿Cuántos hermanos tenía José (hijo de Jacob)?",
        answers: ["10", "11", "12", "13"],
        correct: 1,
        reference: "Génesis 37"
    },
    {
        question: "¿Quién fue la primera mujer según la Biblia?",
        answers: ["María", "Sara", "Eva", "Rebeca"],
        correct: 2,
        reference: "Génesis 2:22-23"
    },
    {
        question: "¿Cuántos años tenía Abraham cuando nació Isaac?",
        answers: ["75 años", "90 años", "100 años", "120 años"],
        correct: 2,
        reference: "Génesis 21:5"
    },
    {
        question: "¿Qué apóstol era cobrador de impuestos?",
        answers: ["Pedro", "Mateo", "Juan", "Felipe"],
        correct: 1,
        reference: "Mateo 9:9"
    },
    {
        question: "¿Cuántas plagas envió Dios a Egipto?",
        answers: ["7", "10", "12", "15"],
        correct: 1,
        reference: "Éxodo 7-12"
    },
    {
        question: "¿Quién fue el padre de Salomón?",
        answers: ["Saúl", "David", "Samuel", "Josué"],
        correct: 1,
        reference: "2 Samuel 12:24"
    },
    {
        question: "¿Cuántos días y noches llovió durante el diluvio?",
        answers: ["30 días", "40 días", "50 días", "100 días"],
        correct: 1,
        reference: "Génesis 7:12"
    },
    {
        question: "¿Quién fue vendido como esclavo por sus hermanos?",
        answers: ["José", "Benjamín", "Judá", "Rubén"],
        correct: 0,
        reference: "Génesis 37:28"
    },
    {
        question: "¿Cuál es el último libro de la Biblia?",
        answers: ["Judas", "Apocalipsis", "3 Juan", "Hebreos"],
        correct: 1,
        reference: "Biblia"
    },
    {
        question: "¿Quién caminó sobre las aguas con Jesús?",
        answers: ["Juan", "Pedro", "Santiago", "Andrés"],
        correct: 1,
        reference: "Mateo 14:28-31"
    },
    {
        question: "¿Cuántos panes y peces usó Jesús para alimentar a 5000?",
        answers: ["3 panes y 2 peces", "5 panes y 2 peces", "7 panes y 3 peces", "2 panes y 5 peces"],
        correct: 1,
        reference: "Juan 6:9"
    },
    {
        question: "¿Quién fue el sucesor de Moisés?",
        answers: ["Aarón", "Josué", "Caleb", "Samuel"],
        correct: 1,
        reference: "Josué 1:1-2"
    },
    {
        question: "¿En qué río fue bautizado Jesús?",
        answers: ["Río Nilo", "Río Éufrates", "Río Jordán", "Río Tigris"],
        correct: 2,
        reference: "Mateo 3:13"
    },
    {
        question: "¿Cuántos mandamientos dio Dios a Moisés?",
        answers: ["7", "10", "12", "15"],
        correct: 1,
        reference: "Éxodo 20:1-17"
    },
    {
        question: "¿Quién fue el hombre más fuerte de la Biblia?",
        answers: ["Goliat", "Sansón", "David", "Saúl"],
        correct: 1,
        reference: "Jueces 13-16"
    },
    {
        question: "¿Qué profeta fue llevado al cielo en un torbellino?",
        answers: ["Elías", "Eliseo", "Isaías", "Jeremías"],
        correct: 0,
        reference: "2 Reyes 2:11"
    },
    {
        question: "¿Cuántos años vagó Israel por el desierto?",
        answers: ["20 años", "30 años", "40 años", "50 años"],
        correct: 2,
        reference: "Números 14:33-34"
    },
    {
        question: "¿Quién interpretó el sueño del faraón?",
        answers: ["Moisés", "José", "Daniel", "Ezequiel"],
        correct: 1,
        reference: "Génesis 41"
    },
    {
        question: "¿Cuál fue el primer milagro de Jesús?",
        answers: ["Sanar un ciego", "Caminar sobre el agua", "Convertir agua en vino", "Multiplicar panes"],
        correct: 2,
        reference: "Juan 2:1-11"
    },
    {
        question: "¿Quién fue la madre de Juan el Bautista?",
        answers: ["María", "Elisabet", "Ana", "Sara"],
        correct: 1,
        reference: "Lucas 1:13"
    },
    {
        question: "¿Cuántos evangelios hay en el Nuevo Testamento?",
        answers: ["3", "4", "5", "6"],
        correct: 1,
        reference: "Nuevo Testamento"
    },
    {
        question: "¿Quién fue el rey más sabio de Israel?",
        answers: ["David", "Salomón", "Josías", "Ezequías"],
        correct: 1,
        reference: "1 Reyes 4:29-31"
    },
    {
        question: "¿Qué ciudad fue destruida por desobedecer a Dios?",
        answers: ["Jerusalén", "Babilonia", "Sodoma y Gomorra", "Nínive"],
        correct: 2,
        reference: "Génesis 19"
    },
    {
        question: "¿Quién fue el primer mártir cristiano?",
        answers: ["Pedro", "Pablo", "Esteban", "Santiago"],
        correct: 2,
        reference: "Hechos 7:54-60"
    },
    {
        question: "¿Cuántos hijos tuvo Jacob?",
        answers: ["10", "12", "14", "7"],
        correct: 1,
        reference: "Génesis 35:22-26"
    },
    {
        question: "¿Quién escribió el libro de Proverbios?",
        answers: ["David", "Salomón", "Moisés", "Samuel"],
        correct: 1,
        reference: "Proverbios 1:1"
    },
    {
        question: "¿Qué apóstol dudó de la resurrección de Jesús?",
        answers: ["Pedro", "Juan", "Tomás", "Felipe"],
        correct: 2,
        reference: "Juan 20:24-29"
    },
    {
        question: "¿Cuántos años vivió Matusalén?",
        answers: ["777 años", "969 años", "850 años", "1000 años"],
        correct: 1,
        reference: "Génesis 5:27"
    },
    {
        question: "¿Quién fue la esposa de Abraham?",
        answers: ["Rebeca", "Raquel", "Sara", "Lea"],
        correct: 2,
        reference: "Génesis 17:15"
    },
    {
        question: "¿Cuál fue la profesión de Pedro antes de seguir a Jesús?",
        answers: ["Carpintero", "Pescador", "Cobrador de impuestos", "Pastor"],
        correct: 1,
        reference: "Mateo 4:18"
    },
    {
        question: "¿Quién construyó el templo de Jerusalén?",
        answers: ["David", "Salomón", "Moisés", "Josué"],
        correct: 1,
        reference: "1 Reyes 6:1"
    },
    {
        question: "¿Cuántos días estuvo Lázaro muerto antes de resucitar?",
        answers: ["1 día", "2 días", "3 días", "4 días"],
        correct: 3,
        reference: "Juan 11:17"
    },
    {
        question: "¿Quién fue el hermano de Moisés?",
        answers: ["Aarón", "Josué", "Caleb", "Hur"],
        correct: 0,
        reference: "Éxodo 4:14"
    },
    {
        question: "¿Qué significa 'Emmanuel'?",
        answers: ["Dios salva", "Dios con nosotros", "Dios es amor", "Dios es fiel"],
        correct: 1,
        reference: "Mateo 1:23"
    },
    {
        question: "¿Cuántas veces debemos perdonar según Jesús?",
        answers: ["7 veces", "70 veces", "77 veces", "70 veces 7"],
        correct: 3,
        reference: "Mateo 18:21-22"
    },
    // NUEVAS PREGUNTAS AGREGADAS
    {
        question: "¿Cuál era el oficio de David antes de ser rey?",
        answers: ["Carpintero", "Pastor de ovejas", "Soldado", "Escriba"],
        correct: 1,
        reference: "1 Samuel 16:11"
    },
    {
        question: "¿Cuál era el nombre del monte donde Elías enfrentó a los profetas de Baal?",
        answers: ["Monte Sinaí", "Monte Carmelo", "Monte Hermón", "Monte Nebo"],
        correct: 1,
        reference: "1 Reyes 18:19-39"
    },
    {
        question: "¿Dónde murió Moisés?",
        answers: ["En Egipto", "En el desierto", "Monte Nebo viendo la Tierra Prometida", "En el río Jordán"],
        correct: 2,
        reference: "Deuteronomio 34:1-7"
    },
    {
        question: "¿Quién fue el profeta que confrontó al rey David por su pecado con Betsabé?",
        answers: ["Samuel", "Natán", "Elías", "Isaías"],
        correct: 1,
        reference: "2 Samuel 12:1-7"
    },
    {
        question: "Completa el versículo: 'Jehová es mi pastor...'",
        answers: ["...y nada temeré", "...nada me faltará", "...siempre me guiará", "...me dará descanso"],
        correct: 1,
        reference: "Salmo 23:1"
    },
    {
        question: "¿Cuál era el nombre del gigante que David derrotó?",
        answers: ["Og", "Goliat", "Sansón", "Absalón"],
        correct: 1,
        reference: "1 Samuel 17"
    },
    {
        question: "¿Cuántos frutos del Espíritu menciona Gálatas?",
        answers: ["7", "9", "10", "12"],
        correct: 1,
        reference: "Gálatas 5:22-23"
    },
    {
        question: "¿Quién fue el sumo sacerdote cuando Jesús fue arrestado?",
        answers: ["Anás", "Caifás", "Nicodemo", "José de Arimatea"],
        correct: 1,
        reference: "Mateo 26:57"
    },
    {
        question: "¿Cuántos años reinó el rey David?",
        answers: ["20 años", "30 años", "40 años", "50 años"],
        correct: 2,
        reference: "2 Samuel 5:4"
    },
    {
        question: "¿Quién fue la reina que visitó a Salomón?",
        answers: ["Reina de Saba", "Reina Ester", "Reina Jezabel", "Reina Vasti"],
        correct: 0,
        reference: "1 Reyes 10:1"
    },
    {
        question: "¿En qué idioma fue escrito principalmente el Antiguo Testamento?",
        answers: ["Griego", "Latín", "Hebreo", "Arameo"],
        correct: 2,
        reference: "Historia bíblica"
    },
    {
        question: "¿Cuántas personas se salvaron en el arca de Noé?",
        answers: ["2", "4", "8", "12"],
        correct: 2,
        reference: "Génesis 7:13"
    },
    {
        question: "¿Quién fue el padre de los doce hijos que formaron las tribus de Israel?",
        answers: ["Abraham", "Isaac", "Jacob", "José"],
        correct: 2,
        reference: "Génesis 35:22-26"
    },
    {
        question: "¿Qué le pidió Salomón a Dios?",
        answers: ["Riquezas", "Sabiduría", "Poder", "Larga vida"],
        correct: 1,
        reference: "1 Reyes 3:9"
    },
    {
        question: "¿Cuántos días estuvo Jesús en la tierra después de resucitar?",
        answers: ["10 días", "30 días", "40 días", "50 días"],
        correct: 2,
        reference: "Hechos 1:3"
    }
];

// Variables del juego
let currentTeam = null;
let currentTeamColor = null;
let currentQuestionIndex = 0;
let score = 0;
let timer = 30;
let timerInterval = null;
let selectedQuestions = [];
let teamScores = JSON.parse(localStorage.getItem('teamScores')) || {};
let gameInProgress = false;
let usedQuestionIndices = new Set();

// Elementos del DOM
const welcomeScreen = document.getElementById('welcome-screen');
const gameScreen = document.getElementById('game-screen');
const resultsScreen = document.getElementById('results-screen');
const teamButtons = document.querySelectorAll('.team-btn');
const questionText = document.getElementById('question-text');
const answersGrid = document.getElementById('answers-grid');
const currentQuestionSpan = document.getElementById('current-question');
const totalQuestionsSpan = document.getElementById('total-questions');
const scoreValue = document.querySelector('.score-value');
const timerValue = document.querySelector('.timer-value');
const progressFill = document.querySelector('.progress-fill');
const currentTeamSpan = document.querySelector('.current-team');

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    // Seleccionar 10 preguntas aleatorias
    selectedQuestions = getRandomQuestions(10);
    totalQuestionsSpan.textContent = selectedQuestions.length;
    
    // Event listeners para botones de equipo
    teamButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const teamNumber = btn.dataset.team;
            const teamName = btn.querySelector('.team-name').textContent;
            currentTeamColor = btn.style.getPropertyValue('--team-color');
            currentTeam = teamName;
            startGame();
        });
    });
    
    // Detector de cambio de pestaña/ventana
    setupVisibilityDetector();
});

// Detector de visibilidad de página
function setupVisibilityDetector() {
    document.addEventListener('visibilitychange', () => {
        if (document.hidden && gameInProgress) {
            // Usuario cambió de pestaña durante el juego
            handleTabSwitch();
        }
    });
    
    // Detector adicional para cuando se pierde el foco
    window.addEventListener('blur', () => {
        if (gameInProgress) {
            handleTabSwitch();
        }
    });
}

// Manejar cambio de pestaña
function handleTabSwitch() {
    // Pausar el temporizador
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    
    // Generar nuevas preguntas
    selectedQuestions = getRandomQuestions(10);
    
    // Reiniciar el juego desde la pregunta actual
    if (currentQuestionIndex < selectedQuestions.length) {
        loadQuestion();
    }
}

// Obtener preguntas aleatorias
function getRandomQuestions(count) {
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
}

// Iniciar juego
function startGame() {
    welcomeScreen.classList.remove('active');
    gameScreen.classList.add('active');
    currentTeamSpan.textContent = currentTeam;
    currentTeamSpan.style.color = currentTeamColor;
    currentTeamSpan.style.textShadow = `0 0 20px ${currentTeamColor}`;
    currentQuestionIndex = 0;
    score = 0;
    gameInProgress = true;
    
    // Generar nuevas preguntas aleatorias cada vez que se inicia
    selectedQuestions = getRandomQuestions(10);
    totalQuestionsSpan.textContent = selectedQuestions.length;
    
    updateScore();
    loadQuestion();
}

// Cargar pregunta
function loadQuestion() {
    if (currentQuestionIndex >= selectedQuestions.length) {
        endGame();
        return;
    }
    
    const question = selectedQuestions[currentQuestionIndex];
    questionText.textContent = question.question;
    currentQuestionSpan.textContent = currentQuestionIndex + 1;
    
    // Limpiar respuestas anteriores
    answersGrid.innerHTML = '';
    
    // Crear botones de respuesta
    question.answers.forEach((answer, index) => {
        const btn = document.createElement('button');
        btn.className = 'answer-btn';
        btn.textContent = answer;
        btn.addEventListener('click', () => checkAnswer(index, btn));
        answersGrid.appendChild(btn);
    });
    
    // Actualizar barra de progreso
    const progress = ((currentQuestionIndex + 1) / selectedQuestions.length) * 100;
    progressFill.style.width = `${progress}%`;
    
    // Iniciar temporizador
    startTimer();
}

// Temporizador
function startTimer() {
    timer = 30;
    updateTimer();
    
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    
    timerInterval = setInterval(() => {
        timer--;
        updateTimer();
        
        if (timer <= 0) {
            clearInterval(timerInterval);
            timeOut();
        }
    }, 1000);
}

function updateTimer() {
    timerValue.textContent = timer;
    timerValue.classList.remove('warning', 'danger');
    
    if (timer <= 10 && timer > 5) {
        timerValue.classList.add('warning');
    } else if (timer <= 5) {
        timerValue.classList.add('danger');
    }
}

function timeOut() {
    const buttons = document.querySelectorAll('.answer-btn');
    buttons.forEach(btn => btn.classList.add('disabled'));
    
    setTimeout(() => {
        currentQuestionIndex++;
        loadQuestion();
    }, 2000);
}

// Verificar respuesta
function checkAnswer(selectedIndex, button) {
    clearInterval(timerInterval);
    
    const question = selectedQuestions[currentQuestionIndex];
    const buttons = document.querySelectorAll('.answer-btn');
    
    // Deshabilitar todos los botones
    buttons.forEach(btn => btn.classList.add('disabled'));
    
    if (selectedIndex === question.correct) {
        button.classList.add('correct');
        // Puntos basados en tiempo restante
        const points = Math.max(5, Math.floor(timer / 3));
        score += points;
        updateScore();
        
        // Efecto de sonido (simulado con vibración si está disponible)
        if (navigator.vibrate) {
            navigator.vibrate([100, 50, 100]);
        }
    } else {
        button.classList.add('incorrect');
        // Mostrar respuesta correcta
        buttons[question.correct].classList.add('correct');
    }
    
    // Mostrar referencia bíblica
    showReference(question.reference);
    
    // Siguiente pregunta después de 3 segundos (más tiempo para leer la referencia)
    setTimeout(() => {
        currentQuestionIndex++;
        loadQuestion();
    }, 3000);
}

// Mostrar referencia bíblica
function showReference(reference) {
    // Crear elemento de referencia si no existe
    let refElement = document.querySelector('.bible-reference');
    if (!refElement) {
        refElement = document.createElement('div');
        refElement.className = 'bible-reference';
        document.querySelector('.question-container').appendChild(refElement);
    }
    
    refElement.textContent = `📖 ${reference}`;
    refElement.style.display = 'block';
    
    // Ocultar después de mostrar
    setTimeout(() => {
        refElement.style.display = 'none';
    }, 2800);
}

// Actualizar puntuación
function updateScore() {
    scoreValue.textContent = score;
}

// Finalizar juego
function endGame() {
    clearInterval(timerInterval);
    gameInProgress = false;
    gameScreen.classList.remove('active');
    resultsScreen.classList.add('active');
    
    // Guardar puntuación del equipo
    teamScores[currentTeam] = {
        score: score,
        color: currentTeamColor
    };
    localStorage.setItem('teamScores', JSON.stringify(teamScores));
    
    // Mostrar puntuación final
    document.querySelector('.final-score-value').textContent = score;
    
    // Mensaje según puntuación
    const messageText = document.querySelector('.message-text');
    const verseResult = document.querySelector('.verse-result');
    
    if (score >= 80) {
        messageText.textContent = '¡Excelente! Conoces muy bien la Palabra de Dios';
        verseResult.textContent = '"Bienaventurados los que oyen la palabra de Dios, y la guardan" - Lucas 11:28';
    } else if (score >= 60) {
        messageText.textContent = '¡Muy bien! Sigues creciendo en conocimiento';
        verseResult.textContent = '"Toda la Escritura es inspirada por Dios, y útil para enseñar" - 2 Timoteo 3:16';
    } else if (score >= 40) {
        messageText.textContent = '¡Buen intento! Sigue estudiando la Biblia';
        verseResult.textContent = '"Escudriñad las Escrituras" - Juan 5:39';
    } else {
        messageText.textContent = '¡Ánimo! Cada día es una oportunidad para aprender más';
        verseResult.textContent = '"Tu palabra es lámpara a mis pies" - Salmos 119:105';
    }
    
    // Mostrar ranking
    displayRanking();
}

// Mostrar ranking de equipos
function displayRanking() {
    const rankingList = document.getElementById('ranking-list');
    rankingList.innerHTML = '';
    
    // Convertir a array y ordenar por puntuación
    const teamsArray = Object.entries(teamScores)
        .map(([name, data]) => ({ name, ...data }))
        .sort((a, b) => b.score - a.score);
    
    teamsArray.forEach((team, index) => {
        const rankingItem = document.createElement('div');
        rankingItem.className = 'ranking-item';
        rankingItem.style.borderColor = team.color;
        
        const medals = ['🥇', '🥈', '🥉'];
        const medal = medals[index] || '🏆';
        
        rankingItem.innerHTML = `
            <span class="ranking-position" style="color: ${team.color}">${medal}</span>
            <span class="ranking-team">${team.name}</span>
            <span class="ranking-score" style="color: ${team.color}">${team.score} pts</span>
        `;
        
        rankingList.appendChild(rankingItem);
    });
}

// Jugar de nuevo con nuevas preguntas
function playAgain() {
    // Generar nuevas preguntas aleatorias
    selectedQuestions = getRandomQuestions(10);
    
    // Volver a la pantalla de bienvenida
    resultsScreen.classList.remove('active');
    welcomeScreen.classList.add('active');
    
    // Resetear variables
    currentQuestionIndex = 0;
    score = 0;
    gameInProgress = false;
}

// Mostrar todas las puntuaciones
function showAllScores() {
    alert('Funcionalidad de estadísticas completas - Próximamente');
}

// Efectos de partículas al hacer clic
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('answer-btn') || e.target.classList.contains('team-btn')) {
        createParticles(e.clientX, e.clientY);
    }
});

function createParticles(x, y) {
    const colors = ['#00ffff', '#ff00ff', '#00ff88', '#ffff00'];
    
    for (let i = 0; i < 6; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.width = '10px';
        particle.style.height = '10px';
        particle.style.borderRadius = '50%';
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '9999';
        particle.style.boxShadow = `0 0 10px ${particle.style.backgroundColor}`;
        
        document.body.appendChild(particle);
        
        const angle = (Math.PI * 2 * i) / 6;
        const velocity = 100;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;
        
        let posX = x;
        let posY = y;
        let opacity = 1;
        
        const animate = () => {
            posX += vx * 0.016;
            posY += vy * 0.016;
            opacity -= 0.02;
            
            particle.style.left = posX + 'px';
            particle.style.top = posY + 'px';
            particle.style.opacity = opacity;
            
            if (opacity > 0) {
                requestAnimationFrame(animate);
            } else {
                particle.remove();
            }
        };
        
        animate();
    }
}
