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
    roleCategory: '',
    hazardKnowledge: '',
    ppeKnowledge: '',
    emergencyKnowledge: '',
    equipmentKnowledge: '',
    quizScore: 0
};

// Knowledge base for different roles
const roleKnowledge = {
    hvac: {
        title: "HVAC Technician",
        hazards: [
            "Refrigerant exposure (chemical burns, frostbite)",
            "Electrical shock from wiring and circuits",
            "Falls from ladders and rooftops",
            "Confined spaces (attics, crawl spaces)",
            "Carbon monoxide exposure",
            "Heavy equipment injuries"
        ],
        ppe: [
            "Safety glasses (ANSI Z87.1 rated)",
            "Insulated gloves when working with electrical",
            "Steel-toe boots",
            "Respirator when handling refrigerants",
            "Hard hat when working on roofs",
            "Hearing protection for loud equipment"
        ],
        equipment: [
            "Refrigerant recovery machine",
            "Torch and brazing equipment",
            "Vacuum pump",
            "Manifold gauges",
            "Power tools (drills, saws)",
            "Ladders and scaffolding"
        ],
        emergencies: [
            "Refrigerant leak: Evacuate area, ventilate, call supervisor",
            "Electrical shock: Do not touch victim, cut power, call 911",
            "Fall injury: Do not move victim, call 911, secure area",
            "Fire: Use Class ABC extinguisher, evacuate if spreading"
        ]
    },
    electrician: {
        title: "Electrician",
        hazards: [
            "Electrical shock and electrocution",
            "Arc flash and arc blast",
            "Burns from electrical equipment",
            "Falls from ladders and lifts",
            "Confined space entry",
            "Crushing injuries from equipment"
        ],
        ppe: [
            "Insulated gloves (rated for voltage)",
            "Arc-rated clothing (flame-resistant)",
            "Safety glasses with side shields",
            "Hard hat (Class E rated)",
            "Steel-toe boots with electrical hazard rating",
            "Face shield for high-voltage work"
        ],
        equipment: [
            "Multimeter and voltage testers",
            "Wire strippers and cutters",
            "Circuit breakers and panels",
            "Conduit benders",
            "Power drills and saws",
            "Insulated tools"
        ],
        emergencies: [
            "Electrical shock: Cut power immediately, call 911, begin CPR if needed",
            "Arc flash incident: Call 911, treat burns, do not remove clothing stuck to skin",
            "Fire from electrical: Use Class C extinguisher only, evacuate if unsafe",
            "Lockout/tagout violation: Stop work immediately, notify supervisor"
        ]
    },
    plumber: {
        title: "Plumber",
        hazards: [
            "Exposure to sewage and contaminants",
            "Burns from hot water and pipes",
            "Cuts from sharp tools and pipes",
            "Falls in wet conditions",
            "Confined spaces (crawl spaces, pits)",
            "Back injuries from lifting"
        ],
        ppe: [
            "Safety glasses",
            "Cut-resistant gloves",
            "Steel-toe waterproof boots",
            "Respirator when working with sewage",
            "Knee pads for protection",
            "Hard hat in construction sites"
        ],
        equipment: [
            "Pipe wrenches and cutters",
            "Torch and soldering equipment",
            "Drain snakes and augers",
            "Power threading machines",
            "Inspection cameras",
            "Pressure testing equipment"
        ],
        emergencies: [
            "Sewage exposure: Wash thoroughly, seek medical attention if ingested",
            "Gas leak: Evacuate area, no sparks or flames, call gas company",
            "Flooding: Shut off water main, evacuate if unsafe, call supervisor",
            "Burns: Cool with water, do not apply ice, seek medical attention"
        ]
    },
    construction: {
        title: "Construction Worker",
        hazards: [
            "Falls from heights (leading cause of death)",
            "Struck by falling objects",
            "Caught between equipment/materials",
            "Electrical hazards on site",
            "Heavy machinery accidents",
            "Trench and excavation cave-ins"
        ],
        ppe: [
            "Hard hat (always on site)",
            "Safety glasses",
            "Steel-toe boots",
            "High-visibility vest",
            "Fall protection harness (when above 6 feet)",
            "Hearing protection near loud equipment"
        ],
        equipment: [
            "Power tools (saws, drills, grinders)",
            "Ladders and scaffolding",
            "Heavy machinery (forklifts, loaders)",
            "Nail guns and pneumatic tools",
            "Concrete cutting equipment",
            "Material hoists"
        ],
        emergencies: [
            "Fall from height: Do not move victim, call 911 immediately",
            "Struck by object: Secure area, treat bleeding, call 911",
            "Electrical contact: Cut power, do not touch victim, call 911",
            "Equipment accident: Shut down equipment, secure area, call supervisor"
        ]
    },
    landscaping: {
        title: "Landscaping/Grounds Maintenance",
        hazards: [
            "Mower and trimmer injuries",
            "Chemical exposure (pesticides, fertilizers)",
            "Heat exhaustion and dehydration",
            "Insect bites and plant allergies",
            "Cuts and lacerations",
            "Noise-induced hearing loss"
        ],
        ppe: [
            "Safety glasses or goggles",
            "Hearing protection (mowers, blowers)",
            "Heavy-duty work gloves",
            "Steel-toe boots",
            "Long pants and sleeves",
            "Respirator when applying chemicals"
        ],
        equipment: [
            "Lawn mowers and riding mowers",
            "String trimmers and edgers",
            "Leaf blowers",
            "Chainsaws and pole saws",
            "Hedge trimmers",
            "Chemical sprayers"
        ],
        emergencies: [
            "Chemical exposure: Remove contaminated clothing, rinse with water 15+ min, call poison control",
            "Cuts/lacerations: Apply pressure, elevate, seek medical attention if deep",
            "Heat exhaustion: Move to shade, hydrate, cool with water, call 911 if severe",
            "Equipment injury: Stop equipment, secure area, call supervisor"
        ]
    }
};

// Determine role category from user input
function determineRole(input) {
    const lower = input.toLowerCase();
    if (lower.includes('hvac') || lower.includes('heating') || lower.includes('cooling') || lower.includes('air conditioning')) {
        return 'hvac';
    } else if (lower.includes('electric') || lower.includes('sparky')) {
        return 'electrician';
    } else if (lower.includes('plumb')) {
        return 'plumber';
    } else if (lower.includes('construct') || lower.includes('labor') || lower.includes('carpenter') || lower.includes('framing')) {
        return 'construction';
    } else if (lower.includes('landscap') || lower.includes('lawn') || lower.includes('grounds') || lower.includes('mow')) {
        return 'landscaping';
    }
    return 'general'; // fallback
}

function addMessage(text, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
    
    // Format text with line breaks
    const formattedText = text.replace(/\n/g, '<br>');
    
    messageDiv.innerHTML = isUser ? 
        `<strong>You:</strong> ${formattedText}` : 
        `<strong>Safety Assistant:</strong> ${formattedText}`;
    chatContainer.appendChild(messageDiv);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function handleResponse(userMessage) {
    addMessage(userMessage, true);
    
    switch(step) {
        case 0: // Get name
            userData.name = userMessage;
            setTimeout(() => addMessage(`Great to meet you, ${userData.name}! What role will you be working in?\n\n(Examples: HVAC Technician, Electrician, Plumber, Construction Worker, Landscaper)`), 600);
            step++;
            break;
            
        case 1: // Get role
            userData.role = userMessage;
            userData.roleCategory = determineRole(userMessage);
            
            if (userData.roleCategory === 'general') {
                setTimeout(() => {
                    addMessage(`I'll provide general construction safety training. For the best experience, please specify your exact role next time.\n\nLet's begin with workplace hazards. What are THREE common safety hazards you might encounter in your work?`);
                }, 600);
            } else {
                const roleInfo = roleKnowledge[userData.roleCategory];
                setTimeout(() => {
                    addMessage(`Perfect! You'll be working as a ${roleInfo.title}. Let's make sure you're prepared to work safely.\n\nFirst question: What are THREE common safety hazards you might encounter in this role?`);
                }, 600);
            }
            step++;
            break;
            
        case 2: // Hazard knowledge check
            userData.hazardKnowledge = userMessage;
            const roleData = roleKnowledge[userData.roleCategory] || roleKnowledge.construction;
            
            setTimeout(() => {
                addMessage(`Good awareness! Let me make sure you know all the critical hazards for your role:\n\n` + 
                    roleData.hazards.map((h, i) => `${i + 1}. ${h}`).join('\n') +
                    `\n\nAlways be alert for these hazards. Now, what Personal Protective Equipment (PPE) is required for your position? Name at least THREE items.`);
            }, 800);
            step++;
            break;
            
        case 3: // PPE knowledge check
            userData.ppeKnowledge = userMessage;
            const roleData2 = roleKnowledge[userData.roleCategory] || roleKnowledge.construction;
            
            setTimeout(() => {
                addMessage(`Excellent! Here's the complete PPE requirements for your role:\n\n` +
                    roleData2.ppe.map((p, i) => `${i + 1}. ${p}`).join('\n') +
                    `\n\n⚠️ Remember: PPE is your last line of defense. NEVER skip required PPE.\n\nNext - Emergency procedures. If there's an emergency on the job site, what are the THREE most important steps you should take immediately?`);
            }, 800);
            step++;
            break;
            
        case 4: // Emergency procedures
            userData.emergencyKnowledge = userMessage;
            
            setTimeout(() => {
                addMessage(`Good thinking! Here are the critical emergency procedures for your role:\n\n` +
                    roleKnowledge[userData.roleCategory].emergencies.map((e, i) => `${i + 1}. ${e}`).join('\n\n') +
                    `\n\n🚨 ALWAYS prioritize safety over completing the job. It's better to stop work than risk injury.\n\nAlmost done! What equipment will you be using regularly in your role? Name at least TWO pieces.`);
            }, 800);
            step++;
            break;
            
        case 5: // Equipment knowledge
            userData.equipmentKnowledge = userMessage;
            const roleData3 = roleKnowledge[userData.roleCategory] || roleKnowledge.construction;
            
            setTimeout(() => {
                addMessage(`Perfect! Here's important safety information about common equipment in your role:\n\n` +
                    roleData3.equipment.map((e, i) => `${i + 1}. ${e}`).join('\n') +
                    `\n\n⚙️ Key safety rules for ALL equipment:\n• Inspect before each use\n• Never bypass safety features\n• Use proper guards and shields\n• Report any defects immediately\n• Lockout/tagout when servicing`);
            }, 800);
            
            setTimeout(() => {
                addMessage(`Excellent work, ${userData.name}! You've completed your safety training for ${roleKnowledge[userData.roleCategory].title}.\n\nYou've demonstrated strong knowledge of:\n✅ Workplace hazard identification\n✅ Proper PPE requirements\n✅ Emergency response procedures\n✅ Equipment safety protocols\n\nYour manager is being notified now. You're cleared to begin work!`);
            }, 2000);
            
            setTimeout(() => {
                showCertification();
            }, 3500);
            
            step++;
            break;
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
    
    const roleData = roleKnowledge[userData.roleCategory] || roleKnowledge.construction;
    
    certContent.innerHTML = `
        <p><strong>Employee:</strong> ${userData.name}</p>
        <p><strong>Position:</strong> ${roleData.title}</p>
        <p><strong>Training Status:</strong> ✅ COMPLETE & CERTIFIED</p>
        <p><strong>Clearance:</strong> Approved to begin work</p>
        <hr style="margin: 1rem 0; border: none; border-top: 1px solid #e5e7eb;">
        <p style="font-size: 0.95rem;"><strong>Training Modules Completed:</strong></p>
        <p style="font-size: 0.9rem;">✓ Workplace Hazard Recognition (${roleData.hazards.length} hazards covered)</p>
        <p style="font-size: 0.9rem;">✓ Personal Protective Equipment Requirements (${roleData.ppe.length} items)</p>
        <p style="font-size: 0.9rem;">✓ Emergency Response Procedures (${roleData.emergencies.length} scenarios)</p>
        <p style="font-size: 0.9rem;">✓ Equipment Safety Protocols (${roleData.equipment.length} items covered)</p>
        <hr style="margin: 1rem 0; border: none; border-top: 1px solid #e5e7eb;">
        <p style="font-size: 0.9rem;"><strong>Employee Responses:</strong></p>
        <p style="font-size: 0.85rem; color: #6b7280;">Hazards identified: ${userData.hazardKnowledge}</p>
        <p style="font-size: 0.85rem; color: #6b7280;">PPE knowledge: ${userData.ppeKnowledge}</p>
        <p style="font-size: 0.85rem; color: #6b7280;">Emergency procedures: ${userData.emergencyKnowledge}</p>
        <p style="font-size: 0.85rem; color: #6b7280;">Equipment experience: ${userData.equipmentKnowledge}</p>
        <hr style="margin: 1rem 0; border: none; border-top: 1px solid #e5e7eb;">
        <p style="font-size: 0.9rem; color: #059669;"><strong>📅 Next Safety Check-In:</strong> ${getNextCheckInDate()}</p>
        <p style="font-size: 0.85rem; color: #6b7280;"><strong>Manager Notified:</strong> ${timeString}</p>
    `;
    
    timestamp.textContent = timeString;
    notification.classList.remove('hidden');
    
    notification.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function getNextCheckInDate() {
    const next = new Date();
    next.setMonth(next.getMonth() + 3);
    return next.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

sendBtn.addEventListener('click', () => {
    const message = userInput.value.trim();
    if (message && step < 6) {
        handleResponse(message);
    }
});

userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const message = userInput.value.trim();
        if (message && step < 6) {
            handleResponse(message);
        }
    }
});
