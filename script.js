const chatContainer = document.getElementById('chatContainer');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');
const notification = document.getElementById('notification');
const certContent = document.getElementById('certContent');
const timestamp = document.getElementById('timestamp');

let step = 0;
let userData = {
    name: '',
    role: '',
    hazards: '',
    ppe: '',
    emergency: '',
    equipment: ''
};

const questions = [
    { 
        text: "Great to meet you! What role will you be working in? (e.g., HVAC Technician, Electrician, Plumber, etc.)",
        key: 'role'
    },
    { 
        text: "Perfect. Let's cover the key safety topics. First - what are the three most common workplace hazards in your role?",
        key: 'hazards'
    },
    { 
        text: "Good awareness! Now, what Personal Protective Equipment (PPE) is required for your position? List at least 3 items.",
        key: 'ppe'
    },
    { 
        text: "Excellent. In case of emergency, what are the three critical steps you should take immediately?",
        key: 'emergency'
    },
    { 
        text: "Almost done! Name two pieces of equipment you'll be using regularly that require specific safety protocols.",
        key: 'equipment'
    }
];

function addMessage(text, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
    messageDiv.innerHTML = isUser ? 
        `<strong>You:</strong> ${text}` : 
        `<strong>Safety Assistant:</strong> ${text}`;
    chatContainer.appendChild(messageDiv);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function handleResponse(userMessage) {
    addMessage(userMessage, true);
    
    if (step === 0) {
        // Store name
        userData.name = userMessage;
        setTimeout(() => addMessage(questions[step].text), 600);
        step++;
    } else if (step >= 1 && step <= 5) {
        // Store current answer
        const currentKey = questions[step - 1].key;
        userData[currentKey] = userMessage;
        
        if (step < 5) {
            // Ask next question
            setTimeout(() => addMessage(questions[step].text), 600);
            step++;
        } else {
            // Training complete
            setTimeout(() => {
                addMessage(`Outstanding work, ${userData.name}! You've successfully completed your safety training. You demonstrated strong knowledge of:`);
            }, 600);
            
            setTimeout(() => {
                addMessage(`✅ Workplace hazard identification\n✅ Proper PPE usage\n✅ Emergency response procedures\n✅ Equipment safety protocols`);
            }, 1500);
            
            setTimeout(() => {
                addMessage(`Your manager has been notified that you're cleared to begin work. You'll receive quarterly safety check-ins to ensure we maintain a safe work environment. Welcome to the team!`);
            }, 2500);
            
            setTimeout(() => {
                showCertification();
            }, 3500);
            
            step++;
        }
    }
    
    userInput.value = '';
}

function showCertification() {
    const now = new Date();
    const timeString = now.toLocaleString('en-US', { 
        month: 'long', 
        day: 'numeric', 
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    });
    
    certContent.innerHTML = `
        <p><strong>Employee:</strong> ${userData.name}</p>
        <p><strong>Role:</strong> ${userData.role}</p>
        <p><strong>Training Score:</strong> 100% (All modules completed)</p>
        <p><strong>Status:</strong> Certified & Cleared for Work</p>
        <hr style="margin: 1rem 0; border: none; border-top: 1px solid #e5e7eb;">
        <p style="font-size: 0.9rem;"><strong>Topics Covered:</strong></p>
        <p style="font-size: 0.9rem;">• Hazard identification: ${userData.hazards}</p>
        <p style="font-size: 0.9rem;">• PPE requirements: ${userData.ppe}</p>
        <p style="font-size: 0.9rem;">• Emergency procedures: ${userData.emergency}</p>
        <p style="font-size: 0.9rem;">• Equipment safety: ${userData.equipment}</p>
        <hr style="margin: 1rem 0; border: none; border-top: 1px solid #e5e7eb;">
        <p style="font-size: 0.9rem; color: #059669;"><strong>✓ Next Check-in:</strong> Scheduled for 3 months from today</p>
    `;
    
    timestamp.textContent = timeString;
    notification.classList.remove('hidden');
    
    // Scroll to show notification
    notification.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

sendBtn.addEventListener('click', () => {
    const message = userInput.value.trim();
    if (message && step <= 5) {
        handleResponse(message);
    }
});

userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const message = userInput.value.trim();
        if (message && step <= 5) {
            handleResponse(message);
        }
    }
});
