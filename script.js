// Assessment Data
const assessment = {
    currentQuestion: 0,
    answers: {},
    startTime: Date.now()
};

// Question Bank
const questions = [
    {
        id: 'bg1',
        module: 'Background Information',
        question: 'What is your name?',
        type: 'text'
    },
    {
        id: 'bg2',
        module: 'Background Information',
        question: 'What role will you be working in?',
        type: 'single',
        options: ['HVAC Technician', 'Electrician', 'Plumber', 'Construction Worker', 'Landscaper']
    },
    {
        id: 'bg3',
        module: 'Background Information',
        question: 'How many years of experience do you have?',
        type: 'single',
        options: ['Less than 1 year', '1-3 years', '3-5 years', '5-10 years', 'More than 10 years']
    },
    {
        id: 'bg4',
        module: 'Background Information',
        question: 'Have you ever been involved in a workplace safety incident?',
        type: 'single',
        options: ['Yes', 'No']
    },
    {
        id: 'hr1',
        module: 'Hazard Recognition',
        question: 'You arrive at a job site and notice refrigerant lines are sweating heavily and frost is forming. What is the primary hazard?',
        type: 'single',
        options: [
            'Refrigerant leak - potential chemical exposure',
            'Water damage to equipment',
            'Electrical short circuit risk',
            'Mold growth concern'
        ],
        correct: 0,
        points: 5
    },
    {
        id: 'hr2',
        module: 'Hazard Recognition',
        question: 'Which is the #1 cause of death for HVAC technicians according to OSHA?',
        type: 'single',
        options: [
            'Falls from heights',
            'Electrical shock',
            'Refrigerant exposure',
            'Carbon monoxide poisoning'
        ],
        correct: 0,
        points: 5
    },
    {
        id: 'hr3',
        module: 'Hazard Recognition',
        question: 'You see a tech working in an attic in summer wearing only shorts and a t-shirt. What hazards are present? (Select ALL)',
        type: 'multiple',
        options: [
            'Heat exhaustion risk',
            'Insulation exposure to skin',
            'No respiratory protection',
            'Lack of PPE for sharp objects',
            'Inadequate eye protection'
        ],
        correct: [0, 1, 2, 3, 4],
        points: 8
    },
    {
        id: 'hr4',
        module: 'Hazard Recognition',
        question: 'Water is pooling near electrical equipment. How urgent is this?',
        type: 'single',
        options: [
            'CRITICAL - Stop work immediately, electrical shock hazard',
            'HIGH - Fix within the hour',
            'MEDIUM - Address before end of day',
            'LOW - Note it for next visit'
        ],
        correct: 0,
        points: 5
    },
    {
        id: 'hr5',
        module: 'Hazard Recognition',
        question: 'You smell "rotten egg" odor while working on a furnace. What is your FIRST action?',
        type: 'single',
        options: [
            'Continue working but open windows',
            'Evacuate building immediately and call gas company from outside',
            'Check the gas line for leaks',
            'Turn off the furnace and investigate'
        ],
        correct: 1,
        points: 10
    },
    {
        id: 'hr6',
        module: 'Hazard Recognition',
        question: 'Homeowner says "that electrical panel buzzing has been there for years, it\'s fine." What do you do?',
        type: 'single',
        options: [
            'Agree - if it\'s been fine for years, probably okay',
            'Inform them it\'s an electrical hazard and refuse to work until electrician inspects',
            'Work quickly to minimize exposure',
            'Note it in report but continue work'
        ],
        correct: 1,
        points: 8
    },
    {
        id: 'ppe1',
        module: 'PPE Knowledge',
        question: 'You are brazing refrigerant lines. What PPE is REQUIRED? (Select ALL)',
        type: 'multiple',
        options: [
            'Safety glasses with side shields',
            'Respirator',
            'Insulated gloves',
            'Flame-resistant clothing',
            'Hard hat'
        ],
        correct: [0, 3],
        points: 6
    },
    {
        id: 'ppe2',
        module: 'PPE Knowledge',
        question: 'Why do you wear safety glasses on the job?',
        type: 'single',
        options: [
            'Company policy requires it',
            'To avoid getting written up',
            'To protect my eyes from debris, chemicals, and injury',
            'OSHA regulation'
        ],
        correct: 2,
        points: 5
    },
    {
        id: 'ppe3',
        module: 'PPE Knowledge',
        question: 'Your respirator cartridge should be replaced:',
        type: 'single',
        options: [
            'When it becomes harder to breathe',
            'When you smell/taste the contaminant',
            'According to manufacturer schedule OR when breathing resistance increases',
            'Every 6 months regardless'
        ],
        correct: 2,
        points: 5
    },
    {
        id: 'ppe4',
        module: 'PPE Knowledge',
        question: 'It\'s 95°F. Your coworker removes his hard hat "too hot." What do you do?',
        type: 'single',
        options: [
            'Nothing - his choice',
            'Remove yours too',
            'Remind him of hazard and encourage him to keep it on',
            'Report to supervisor immediately'
        ],
        correct: 2,
        points: 6
    },
    {
        id: 'ppe5',
        module: 'PPE Knowledge',
        question: 'You forgot safety glasses in truck. Job is quick (10 min). What do you do?',
        type: 'single',
        options: [
            'Do job carefully without them',
            'Borrow coworker\'s glasses',
            'Go back to truck and get them',
            'Squint to protect eyes'
        ],
        correct: 2,
        points: 8
    },
    {
        id: 'er1',
        module: 'Emergency Response',
        question: 'Coworker unconscious after electrical contact. What is FIRST action?',
        type: 'single',
        options: [
            'Touch them to check pulse',
            'Call 911 immediately',
            'Ensure power source is off/disconnected',
            'Start CPR'
        ],
        correct: 2,
        points: 10
    },
    {
        id: 'er2',
        module: 'Emergency Response',
        question: 'Refrigerant sprays into your eyes. What FIRST?',
        type: 'single',
        options: [
            'Call supervisor',
            'Flush eyes with water for 15+ minutes',
            'Drive to urgent care',
            'Apply eye drops'
        ],
        correct: 1,
        points: 8
    },
    {
        id: 'er3',
        module: 'Emergency Response',
        question: 'Small fire in electrical panel. You have Class C extinguisher. What do you do?',
        type: 'single',
        options: [
            'Use extinguisher immediately',
            'Cut power first, then use extinguisher if fire small and manageable',
            'Call 911 and evacuate',
            'Use water'
        ],
        correct: 1,
        points: 8
    },
    {
        id: 'er4',
        module: 'Emergency Response',
        question: 'Coworker falls from ladder. Conscious but back hurts. What do you do?',
        type: 'single',
        options: [
            'Help him up slowly',
            'Tell him stay still, call 911, do not move him',
            'Give water and let rest',
            'Drive to urgent care'
        ],
        correct: 1,
        points: 8
    },
    {
        id: 'er5',
        module: 'Emergency Response',
        question: 'Who notify after ANY safety incident, even minor?',
        type: 'single',
        options: [
            'No one if minor',
            'Coworkers only',
            'Direct supervisor immediately',
            'Only if medical attention needed'
        ],
        correct: 2,
        points: 5
    },
    {
        id: 'eq1',
        module: 'Equipment Safety',
        question: 'Before using power drill: (Select ALL)',
        type: 'multiple',
        options: [
            'Inspect cord for damage',
            'Ensure bit is secure',
            'Check guards in place',
            'Verify properly grounded'
        ],
        correct: [0, 1, 2, 3],
        points: 6
    },
    {
        id: 'eq2',
        module: 'Equipment Safety',
        question: 'Recovery machine leaking refrigerant. What do you do?',
        type: 'single',
        options: [
            'Use it but work quickly',
            'Tag "Out of Service" and report to supervisor',
            'Try to fix it yourself',
            'Use outside where ventilation better'
        ],
        correct: 1,
        points: 8
    },
    {
        id: 'eq3',
        module: 'Equipment Safety',
        question: 'Lockout/Tagout required when:',
        type: 'single',
        options: [
            'Only high-voltage equipment',
            'Servicing equipment where unexpected startup could cause injury',
            'Only if supervisor requires',
            'Only equipment over 480V'
        ],
        correct: 1,
        points: 8
    },
    {
        id: 'eq4',
        module: 'Equipment Safety',
        question: 'Ladder has cracked rung. Only ladder available. Job needs done today. What do?',
        type: 'single',
        options: [
            'Use carefully, avoid cracked rung',
            'Refuse to use and request proper equipment, even if job delayed',
            'Tape crack and proceed',
            'Use just this once, report later'
        ],
        correct: 1,
        points: 10
    },
    {
        id: 'sj1',
        module: 'Situational Judgment',
        question: 'Supervisor says skip safety check - customer upset about delays. What do?',
        type: 'single',
        options: [
            'Follow orders - supervisor knows best',
            'Explain safety requirement and refuse to skip',
            'Quick partial check',
            'Skip but document supervisor told you'
        ],
        correct: 1,
        points: 10
    },
    {
        id: 'sj2',
        module: 'Situational Judgment',
        question: 'Crew doesn\'t wear respirators with refrigerants - "always done this way." What do?',
        type: 'single',
        options: [
            'Go along to fit in',
            'Wear yours and encourage others',
            'Report to management',
            'Both B and C'
        ],
        correct: 3,
        points: 10
    },
    {
        id: 'sj3',
        module: 'Situational Judgment',
        question: '30 min behind. Cutting safety step gets back on track. What do?',
        type: 'single',
        options: [
            'Skip step this once',
            'Follow all procedures and communicate delay',
            'Work faster',
            'Skip but be extra careful'
        ],
        correct: 1,
        points: 10
    },
    {
        id: 'sj4',
        module: 'Situational Judgment',
        question: '"Safety is important because..."',
        type: 'single',
        options: [
            'Keeps me from getting fired',
            'OSHA requires it',
            'I want to go home safely to family every day',
            'Avoids company liability'
        ],
        correct: 2,
        points: 8
    },
    {
        id: 'sj5',
        module: 'Situational Judgment',
        question: 'Safety incident occurred because:',
        type: 'single',
        options: [
            'Someone made mistake or didn\'t follow procedures',
            'Equipment was faulty',
            'Bad luck',
            'Not enough time'
        ],
        correct: 0,
        points: 6
    },
    {
        id: 'sj6',
        module: 'Situational Judgment',
        question: 'See serious safety violation by another contractor (not your company). What do?',
        type: 'single',
        options: [
            'Not my problem',
            'Notify site supervisor or safety manager',
            'Tell contractor directly',
            'Ignore'
        ],
        correct: 1,
        points: 8
    }
];

// Render question
function renderQuestion() {
    const q = questions[assessment.currentQuestion];
    document.getElementById('moduleLabel').textContent = q.module;
    document.getElementById('questionText').textContent = q.question;
    
    const container = document.getElementById('optionsContainer');
    container.innerHTML = '';
    
    if (q.type === 'text') {
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'text-input';
        input.id = 'textAnswer';
        input.placeholder = 'Enter your answer...';
        input.addEventListener('input', checkAnswer);
        container.appendChild(input);
    } else if (q.type === 'single') {
        q.options.forEach((option, index) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = option;
            btn.onclick = () => selectSingle(index);
            container.appendChild(btn);
        });
    } else if (q.type === 'multiple') {
        q.options.forEach((option, index) => {
            const label = document.createElement('label');
            label.className = 'checkbox-option';
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.value = index;
            checkbox.onchange = checkAnswer;
            label.appendChild(checkbox);
            label.appendChild(document.createTextNode(' ' + option));
            container.appendChild(label);
        });
    }
    
    document.getElementById('backBtn').style.display = assessment.currentQuestion > 0 ? 'inline-block' : 'none';
}

function selectSingle(index) {
    document.querySelectorAll('.option-btn').forEach(btn => btn.classList.remove('selected'));
    document.querySelectorAll('.option-btn')[index].classList.add('selected');
    assessment.answers[questions[assessment.currentQuestion].id] = index;
    checkAnswer();
}

function checkAnswer() {
    const q = questions[assessment.currentQuestion];
    let answered = false;
    
    if (q.type === 'text') {
        const val = document.getElementById('textAnswer')?.value.trim();
        answered = val && val.length > 0;
        if (answered) assessment.answers[q.id] = val;
    } else if (q.type === 'single') {
        answered = assessment.answers[q.id] !== undefined;
    } else if (q.type === 'multiple') {
        const checked = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(cb => parseInt(cb.value));
        answered = checked.length > 0;
        if (answered) assessment.answers[q.id] = checked;
    }
    
    document.getElementById('nextBtn').disabled = !answered;
}

function updateProgress() {
    const progress = ((assessment.currentQuestion + 1) / questions.length) * 100;
    document.getElementById('progressBar').style.width = progress + '%';
    document.getElementById('progressText').textContent = `Question ${assessment.currentQuestion + 1} of ${questions.length}`;
}

document.getElementById('nextBtn').onclick = () => {
    if (assessment.currentQuestion < questions.length - 1) {
        assessment.currentQuestion++;
        renderQuestion();
        updateProgress();
        document.getElementById('nextBtn').disabled = true;
    } else {
        completeAssessment();
    }
};

document.getElementById('backBtn').onclick = () => {
    if (assessment.currentQuestion > 0) {
        assessment.currentQuestion--;
        renderQuestion();
        updateProgress();
    }
};

function completeAssessment() {
    document.getElementById('assessmentContainer').classList.add('hidden');
    document.getElementById('resultsContainer').classList.remove('hidden');
    
    const results = calculateScores();
    displayResults(results);
}

function calculateScores() {
    let totalPoints = 0;
    let earnedPoints = 0;
    
    questions.forEach(q => {
        if (q.correct !== undefined) {
            totalPoints += q.points || 5;
            const answer = assessment.answers[q.id];
            
            let correct = false;
            if (q.type === 'single') {
                correct = answer === q.correct;
            } else if (q.type === 'multiple') {
                correct = JSON.stringify(answer?.sort()) === JSON.stringify(q.correct.sort());
            }
            
            if (correct) earnedPoints += q.points || 5;
        }
    });
    
    return {
        overallScore: Math.round((earnedPoints / totalPoints) * 100),
        totalTime: Math.round((Date.now() - assessment.startTime) / 1000 / 60)
    };
}

function displayResults(results) {
    document.getElementById('overallScore').textContent = results.overallScore;
    
    const passed = results.overallScore >= 70;
    document.getElementById('certResult').textContent = passed ? 'CERTIFIED' : 'NOT CERTIFIED';
    document.getElementById('certMessage').textContent = passed ? 
        'You have successfully completed the safety assessment' :
        'Additional training required before certification';
    
    const name = assessment.answers['bg1'] || 'Employee';
    const role = questions[1].options[assessment.answers['bg2']] || 'Unknown';
    document.getElementById('certDetails').innerHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Role:</strong> ${role}</p>
        <p><strong>Score:</strong> ${results.overallScore}/100</p>
        <p><strong>Time:</strong> ${results.totalTime} minutes</p>
        <p><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
    `;
}

window.onload = () => {
    renderQuestion();
    updateProgress();
};
