// Assessment Data Structure
const assessment = {
    currentQuestion: 0,
    answers: {},
    startTime: Date.now(),
    employeeData: {}
};

// Question Bank
const questions = [
    // Background (4 questions)
    {
        id: 'bg1',
        module: 'Background Information',
        question: 'What is your name?',
        type: 'text',
        required: true,
        dataField: 'name'
    },
    {
        id: 'bg2',
        module: 'Background Information',
        question: 'What role will you be working in?',
        type: 'single',
        options: ['HVAC Technician', 'Electrician', 'Plumber', 'Construction Worker', 'Landscaper'],
        dataField: 'role'
    },
    {
        id: 'bg3',
        module: 'Background Information',
        question: 'How many years of experience do you have in this role?',
        type: 'single',
        options: ['Less than 1 year', '1-3 years', '3-5 years', '5-10 years', 'More than 10 years'],
        scoring: { weight: 'experience' }
    },
    {
        id: 'bg4',
        module: 'Background Information',
        question: 'Have you ever been involved in a workplace safety incident?',
        type: 'single',
        options: ['Yes', 'No'],
        behavioral: 'risk-history'
    },
    
    // Hazard Recognition (8 questions)
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
        points: 5,
        behavioral: 'hazard-priority'
    },
    {
        id: 'hr2',
        module: 'Hazard Recognition',
        question: 'Which of these is the #1 cause of death for HVAC technicians according to OSHA?',
        type: 'single',
        options: [
            'Falls from heights',
            'Electrical shock',
            'Refrigerant exposure',
            'Carbon monoxide poisoning'
        ],
        correct: 0,
        points: 5,
        behavioral: 'knowledge-depth'
    },
    {
        id: 'hr3',
        module: 'Hazard Recognition',
        question: 'You see a tech working in an attic in summer wearing only shorts and a t-shirt. What hazards are present? (Select ALL that apply)',
        type: 'multiple',
        options: [
            'Heat exhaustion risk',
            'Insulation exposure to skin',
            'No respiratory protection',
            'Lack of PPE for sharp objects',
            'Inadequate eye protection'
        ],
        correct: [0, 1, 2, 3, 4],
        points: 8,
        behavioral: 'thoroughness'
    },
    {
        id: 'hr4',
        module: 'Hazard Recognition',
        question: 'A condensate drain line is clogged and water is pooling near electrical equipment. How urgent is this?',
        type: 'single',
        options: [
            'CRITICAL - Stop work immediately, electrical shock hazard',
            'HIGH - Fix within the hour',
            'MEDIUM - Address before end of day',
            'LOW - Note it for next visit'
        ],
        correct: 0,
        points: 5,
        behavioral: 'urgency-judgment'
    },
    {
        id: 'hr5',
        module: 'Hazard Recognition',
        question: 'You smell a "rotten egg" odor while working on a furnace. What is your FIRST action?',
        type: 'single',
        options: [
            'Continue working but open windows',
            'Evacuate the building immediately and call gas company from outside',
            'Check the gas line for leaks',
            'Turn off the furnace and investigate'
        ],
        correct: 1,
        points: 10,
        behavioral: 'emergency-response'
    },
    {
        id: 'hr6',
        module: 'Hazard Recognition',
        question: 'A homeowner says "that electrical panel buzzing has been there for years, it\'s fine." What do you do?',
        type: 'single',
        options: [
            'Agree - if it\'s been fine for years, it\'s probably okay',
            'Inform them it\'s an electrical hazard and refuse to work until electrician inspects it',
            'Work quickly to minimize exposure time',
            'Note it in your report but continue work'
        ],
        correct: 1,
        points: 8,
        behavioral: 'hazard-normalization-resistance'
    },
    {
        id: 'hr7',
        module: 'Hazard Recognition',
        question: 'When working in a confined space (attic/crawl space), which safety measures are required? (Select ALL)',
        type: 'multiple',
        options: [
            'Atmospheric testing before entry',
            'Continuous ventilation',
            'Someone outside monitoring',
            'Emergency rescue plan',
            'Proper lighting'
        ],
        correct: [0, 1, 2, 3],
        points: 8,
        behavioral: 'procedure-knowledge'
    },
    {
        id: 'hr8',
        module: 'Hazard Recognition',
        question: 'Rank these hazards from MOST to LEAST severe (drag to reorder):',
        type: 'ranking',
        options: [
            'Carbon monoxide leak in occupied space',
            'Missing equipment guard on rotating parts',
            'Ladder on uneven ground',
            'Refrigerant leak in outdoor unit'
        ],
        correctOrder: [0, 1, 2, 3],
        points: 10,
        behavioral: 'risk-assessment'
    },
    
    // PPE Knowledge (6 questions)
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
        points: 6,
        behavioral: 'ppe-knowledge'
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
        points: 5,
        behavioral: 'safety-conviction'
    },
    {
        id: 'ppe3',
        module: 'PPE Knowledge',
        question: 'Your respirator cartridge should be replaced:',
        type: 'single',
        options: [
            'When it becomes harder to breathe through',
            'When you smell/taste the contaminant',
            'According to manufacturer schedule OR when breathing resistance increases',
            'Every 6 months regardless'
        ],
        correct: 2,
        points: 5,
        behavioral: 'ppe-maintenance'
    },
    {
        id: 'ppe4',
        module: 'PPE Knowledge',
        question: 'It\'s 95°F outside. Your coworker removes his hard hat "because it\'s too hot." What do you do?',
        type: 'single',
        options: [
            'Nothing - it\'s his choice',
            'Remove yours too so he doesn\'t feel singled out',
            'Remind him of the hazard and encourage him to keep it on',
            'Report him to supervisor immediately'
        ],
        correct: 2,
        points: 6,
        behavioral: 'peer-safety-intervention'
    },
    {
        id: 'ppe5',
        module: 'PPE Knowledge',
        question: 'You forgot your safety glasses in the truck. The job is quick (10 minutes). What do you do?',
        type: 'single',
        options: [
            'Do the job carefully without them - it\'s only 10 minutes',
            'Borrow coworker\'s glasses',
            'Go back to truck and get them',
            'Squint to protect eyes'
        ],
        correct: 2,
        points: 8,
        behavioral: 'shortcut-resistance'
    },
    {
        id: 'ppe6',
        module: 'PPE Knowledge',
        question: 'When working with refrigerants, which type of gloves provides the best protection?',
        type: 'single',
        options: [
            'Leather work gloves',
            'Nitrile chemical-resistant gloves',
            'Insulated electrical gloves',
            'Cotton gloves'
        ],
        correct: 1,
        points: 5,
        behavioral: 'specific-ppe-knowledge'
    },
    
    // Emergency Response (6 questions)
    {
        id: 'er1',
        module: 'Emergency Response',
        question: 'A coworker is unconscious after electrical contact. What is your FIRST action?',
        type: 'single',
        options: [
            'Touch them to check for pulse',
            'Call 911 immediately',
            'Ensure power source is off/disconnected',
            'Start CPR'
        ],
        correct: 2,
        points: 10,
        behavioral: 'emergency-priorities'
    },
    {
        id: 'er2',
        module: 'Emergency Response',
        question: 'Refrigerant sprays directly into your eyes. What should you do FIRST?',
        type: 'single',
        options: [
            'Call supervisor',
            'Flush eyes with water for 15+ minutes',
            'Drive to urgent care',
            'Apply eye drops'
        ],
        correct: 1,
        points: 8,
        behavioral: 'first-aid-knowledge'
    },
    {
        id: 'er3',
        module: 'Emergency Response',
        question: 'A small fire starts in an electrical panel. You have a Class C fire extinguisher. What do you do?',
        type: 'single',
        options: [
            'Use extinguisher immediately',
            'Cut power first, then use extinguisher if fire is small and manageable',
            'Call 911 and evacuate',
            'Use water to put it out'
        ],
        correct: 1,
        points: 8,
        behavioral: 'fire-safety'
    },
    {
        id: 'er4',
        module: 'Emergency Response',
        question: 'You witness a coworker fall from a ladder. He is conscious but says his back hurts. What do you do?',
        type: 'single',
        options: [
            'Help him up slowly',
            'Tell him to stay still, call 911, do not move him',
            'Give him water and let him rest',
            'Drive him to urgent care'
        ],
        correct: 1,
        points: 8,
        behavioral: 'injury-response'
    },
    {
        id: 'er5',
        module: 'Emergency Response',
        question: 'Who should be notified after ANY safety incident, even minor ones?',
        type: 'single',
        options: [
            'No one if it\'s minor',
            'Coworkers only',
            'Direct supervisor immediately',
            'Only if injury requires medical attention'
        ],
        correct: 2,
        points: 5,
        behavioral: 'reporting-culture'
    },
    {
        id: 'er6',
        module: 'Emergency Response',
        question: 'In what situations should you call 911? (Select ALL that apply)',
        type: 'multiple',
        options: [
            'Severe bleeding that won\'t stop',
            'Loss of consciousness',
            'Suspected spinal injury',
            'Chemical burns to eyes',
            'Minor cuts and scrapes'
        ],
        correct: [0, 1, 2, 3],
        points: 6,
        behavioral: 'emergency-judgment'
    },
    
    // Equipment Safety (4 questions)
    {
        id: 'eq1',
        module: 'Equipment Safety',
        question: 'Before using a power drill, you should: (Select ALL)',
        type: 'multiple',
        options: [
            'Inspect cord for damage',
            'Ensure bit is secure',
            'Check that guards are in place',
            'Verify it\'s properly grounded'
        ],
        correct: [0, 1, 2, 3],
        points: 6,
        behavioral: 'pre-use-inspection'
    },
    {
        id: 'eq2',
        module: 'Equipment Safety',
        question: 'You notice your recovery machine is leaking refrigerant. What do you do?',
        type: 'single',
        options: [
            'Use it but work quickly',
            'Tag it "Out of Service" and report to supervisor',
            'Try to fix it yourself',
            'Use it outside where ventilation is better'
        ],
        correct: 1,
        points: 8,
        behavioral: 'equipment-defect-response'
    },
    {
        id: 'eq3',
        module: 'Equipment Safety',
        question: 'Lockout/Tagout is required when:',
        type: 'single',
        options: [
            'Only when servicing high-voltage equipment',
            'Whenever servicing equipment where unexpected startup could cause injury',
            'Only if required by site supervisor',
            'Only for equipment over 480V'
        ],
        correct: 1,
        points: 8,
        behavioral: 'loto-knowledge'
    },
    {
        id: 'eq4',
        module: 'Equipment Safety',
        question: 'Your ladder has a cracked rung. It\'s the only ladder available and the job needs to be done today. What do you do?',
        type: 'single',
        options: [
            'Use it carefully, avoiding the cracked rung',
            'Refuse to use it and request proper equipment, even if job is delayed',
            'Tape the crack and proceed',
            'Use it just this once and report it later'
        ],
        correct: 1,
        points: 10,
        behavioral: 'production-pressure-response'
    },
    
    // Situational Judgment (6 questions)
    {
        id: 'sj1',
        module: 'Situational Judgment',
        question: 'Your supervisor tells you to skip the safety check because the customer is upset about delays. What do you do?',
        type: 'single',
        options: [
            'Follow orders - supervisor knows best',
            'Explain the safety requirement and refuse to skip it',
            'Do a quick partial check',
            'Skip it but document that supervisor told you to'
        ],
        correct: 1,
        points: 10,
        behavioral: 'authority-challenge'
    },
    {
        id: 'sj2',
        module: 'Situational Judgment',
        question: 'Your crew regularly doesn\'t wear respirators when handling refrigerants because "it\'s fine, we\'ve always done it this way." What do you do?',
        type: 'single',
        options: [
            'Go along with the crew to fit in',
            'Wear yours anyway and encourage others to do the same',
            'Report the practice to management',
            'Both B and C'
        ],
        correct: 3,
        points: 10,
        behavioral: 'peer-pressure-resistance'
    },
    {
        id: 'sj3',
        module: 'Situational Judgment',
        question: 'You\'re running 30 minutes behind schedule. Cutting one safety step would get you back on track. What do you do?',
        type: 'single',
        options: [
            'Skip the step this once',
            'Follow all safety procedures and communicate delay to dispatcher',
            'Work faster to make up time',
            'Skip the step but be extra careful'
        ],
        correct: 1,
        points: 10,
        behavioral: 'time-pressure-response'
    },
    {
        id: 'sj4',
        module: 'Situational Judgment',
        question: 'Complete this statement: "Safety is important because..."',
        type: 'single',
        options: [
            'It keeps me from getting fired',
            'OSHA requires it',
            'I want to go home safely to my family every day',
            'It avoids company liability'
        ],
        correct: 2,
        points: 8,
        behavioral: 'safety-motivation'
    },
    {
        id: 'sj5',
        module: 'Situational Judgment',
        question: 'A safety incident occurred because:',
        type: 'single',
        options: [
            'Someone made a mistake or didn\'t follow procedures',
            'The equipment was faulty',
            'Bad luck',
            'Not enough time to do it safely'
        ],
        correct: 0,
        points: 6,
        behavioral: 'locus-of-control'
    },
    {
        id: 'sj6',
        module: 'Situational Judgment',
        question: 'You see a serious safety violation by another contractor on site (not your company). What do you do?',
        type: 'single',
        options: [
            'Not my problem - they don\'t work for my company',
            'Notify site supervisor or safety manager',
            'Tell the contractor directly',
            'Ignore it'
        ],
        correct: 1,
        points: 8,
        behavioral: 'bystander-intervention'
    }
];

// Initialize assessment
function init() {
    renderQuestion();
    updateProgress();
}

// Render current question
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
        input.addEventListener('input', () => checkAnswer());
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
            checkbox.onchange = () => checkAnswer();
            label.appendChild(checkbox);
            label.appendChild(document.createTextNode(option));
            container.appendChild(label);
        });
    } else if (q.type === 'ranking') {
        // Simple ranking implementation
        q.options.forEach((option, index) => {
            const div = document.createElement('div');
            div.className = 'ranking-item';
            div.innerHTML = `<span class="rank-number">${index + 1}</span> ${option}`;
            container.appendChild(div);
        });
    }
    
    // Show/hide back button
    document.getElementById('backBtn').style.display = assessment.currentQuestion > 0 ? 'inline-block' : 'none';
}

// Handle single choice selection
function selectSingle(index) {
    document.querySelectorAll('.option-btn').forEach(btn => btn.classList.remove('selected'));
    document.querySelectorAll('.option-btn')[index].classList.add('selected');
    assessment.answers[questions[assessment.currentQuestion].id] = index;
    checkAnswer();
}

// Check if answer is provided
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
    } else if (q.type === 'ranking') {
        answered = true; // Auto-answered for demo
        assessment.answers[q.id] = [0,1,2,3];
    }
    
    document.getElementById('nextBtn').disabled = !answered;
}

// Update progress bar
function updateProgress() {
    const progress = ((assessment.currentQuestion + 1) / questions.length) * 100;
    document.getElementById('progressBar').style.width = progress + '%';
    document.getElementById('progressText').textContent = `Question ${assessment.currentQuestion + 1} of ${questions.length}`;
}

// Next button
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

// Back button
document.getElementById('backBtn').onclick = () => {
    if (assessment.currentQuestion > 0) {
        assessment.currentQuestion--;
        renderQuestion();
        updateProgress();
    }
};

// Complete assessment and show results
function completeAssessment() {
    document.getElementById('assessmentContainer').classList.add('hidden');
    document.getElementById('resultsContainer').classList.remove('hidden');
    
    // Calculate scores
    const results = calculateScores();
    displayResults(results);
}

// Calculate all scores
function calculateScores() {
    let totalPoints = 0;
    let earnedPoints = 0;
    const moduleScores = {};
    const behavioralScores = {};
    
    questions.forEach(q => {
        if (q.correct !== undefined) {
            totalPoints += q.points || 5;
            const answer = assessment.answers[q.id];
            
            // Check correctness
            let correct = false;
            if (q.type === 'single') {
                correct = answer === q.correct;
            } else if (q.type === 'multiple') {
                correct = JSON.stringify(answer?.sort()) === JSON.stringify(q.correct.sort());
            }
            
            if (correct) {
                earnedPoints += q.points || 5;
            }
            
            // Module scores
            if (!moduleScores[q.module]) {
                moduleScores[q.module] = { earned: 0, total: 0 };
            }
            moduleScores[q.module].total += q.points || 5;
            if (correct) moduleScores[q.module].earned += q.points || 5;
            
            // Behavioral scoring
            if (q.behavioral) {
                if (!behavioralScores[q.behavioral]) behavioralScores[q.behavioral] = 0;
                if (correct) behavioralScores[q.behavioral]++;
            }
        }
    });
    
    const overallScore = Math.round((earnedPoints / totalPoints) * 100);
    
    return {
        overallScore,
        moduleScores,
        behavioralScores,
        totalTime: Math.round((Date.now() - assessment.startTime) / 1000 / 60)
    };
}

// Display results
function displayResults(results) {
    document.getElementById('overallScore').textContent = results.overallScore;
    
    // Certification status
    const passed = results.overallScore >= 70;
    document.getElementById('certResult').textContent = passed ? 'CERTIFIED' : 'NOT CERTIFIED';
    document.getElementById('certMessage').textContent = passed ? 
        'You have successfully completed the safety assessment' :
        'Additional training required before certification';
    
    // Module scores chart
    const ctx = document.getElementById('radarChart').getContext('2d');
    const moduleNames = Object.keys(results.moduleScores);
    const modulePercentages = moduleNames.map(m => 
        Math.round((results.moduleScores[m].earned / results.moduleScores[m].total) * 100)
    );
    
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: moduleNames,
            datasets: [{
                label: 'Your Score',
                data: modulePercentages,
                backgroundColor: 'rgba(0, 128, 128, 0.2)',
                borderColor: '#008080',
                pointBackgroundColor: '#008080'
            }]
        },
        options: {
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
    
    // Risk assessment (simplified)
    const riskScore = calculateRiskScore(results);
    document.getElementById('riskLevel').textContent = riskScore > 6 ? 'HIGH RISK' : riskScore > 3 ? 'MODERATE' : 'LOW RISK';
    document.getElementById('riskScore').textContent = riskScore.toFixed(1) + ' / 10';
    
    // Cert details
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

// Calculate risk score
function calculateRiskScore(results) {
    const experience = assessment.answers['bg3'] || 0;
    const incident = assessment.answers['bg4'] === 0 ? 2 : 0;
    const scoreRisk = results.overallScore < 70 ? 4 : results.overallScore < 85 ? 2 : 0;
    
    return Math.min(10, experience + incident + scoreRisk);
}

// Start assessment
window.onload = init;
