// 12-Week Pushup Challenge - Built from scratch following user requirements
class PushupChallengeApp {
    constructor() {
        // REAL DATE DETECTION (FINAL REQUIREMENT)
        this.currentDate = new Date(); // Must use actual current date
        
        // For September 10, 2025 detection
        this.programStartDate = new Date('2025-09-08'); // Monday start
        
        // Exercise database with user's exact specifications
        this.exercises = [
            {
                name: "Wall Pushups",
                target: 12,
                targetText: "Do this 12 times",
                icon: "🧱",
                instructions: "Stand arm's length from wall. Put your hands flat against wall at shoulder height. Lean forward and push back with control.",
                tips: ["Keep your feet planted on ground", "Keep your body straight", "Move slowly and controlled", "Push all the way back"],
                question: "How many times did you complete this?",
                suffix: "times completed"
            },
            {
                name: "Knee Pushups",
                target: 5,
                targetText: "Do this 5 times",
                icon: "🦵",
                instructions: "Get on your hands and knees. Keep your body straight from knees to head. Lower your chest to the floor and push back up.",
                tips: ["Keep straight line from knees to head", "Let your chest touch the floor", "Move slowly", "Keep your core tight"],
                question: "How many times did you complete this?",
                suffix: "times completed"
            },
            {
                name: "Plank Hold",
                target: 50,
                targetText: "Hold for 50 seconds",
                unit: "seconds",
                icon: "⏱️",
                instructions: "Get in pushup position and hold steady. Keep your body straight and breathe normally.",
                tips: ["Keep your body straight", "Don't hold your breath", "Keep your core and glutes tight", "Look down at the floor"],
                question: "How many seconds did you hold this?",
                suffix: "seconds completed"
            }
        ];

        // 12-Week Timeline Data
        this.timeline = [
            {week: 1, phase: "Foundation Building", exercises: ["Wall Pushups", "Knee Pushups", "Plank Hold"]},
            {week: 2, phase: "Foundation Building", exercises: ["Wall Pushups", "Incline Pushups", "Plank Hold"]},
            {week: 3, phase: "Strength Building", exercises: ["Incline Pushups", "Knee Pushups", "Side Plank"]},
            {week: 4, phase: "Strength Building", exercises: ["Incline Pushups", "Regular Pushups", "Mountain Climbers"]},
            {week: 5, phase: "Power Development", exercises: ["Regular Pushups", "Wide Pushups", "Burpees"]},
            {week: 6, phase: "Power Development", exercises: ["Regular Pushups", "Diamond Pushups", "Jump Squats"]},
            {week: 7, phase: "Advanced Training", exercises: ["Diamond Pushups", "Pike Pushups", "High Knees"]},
            {week: 8, phase: "Advanced Training", exercises: ["Pike Pushups", "Archer Pushups", "Russian Twists"]},
            {week: 9, phase: "Peak Performance", exercises: ["Archer Pushups", "One-Arm Pushups", "Plank Jacks"]},
            {week: 10, phase: "Peak Performance", exercises: ["One-Arm Pushups", "Handstand Pushups", "Flutter Kicks"]},
            {week: 11, phase: "Mastery Level", exercises: ["Handstand Pushups", "Clap Pushups", "Bear Crawls"]},
            {week: 12, phase: "Mastery Level", exercises: ["Clap Pushups", "One-Arm Clap Pushups", "Full Body Circuit"]}
        ];

        // Rest activities
        this.restActivities = [
            { icon: '🧘', title: 'Gentle Stretching', description: 'Do some light stretching exercises' },
            { icon: '🚶', title: 'Light Walking', description: 'Take a 10-15 minute easy walk' },
            { icon: '💧', title: 'Stay Hydrated', description: 'Drink plenty of water throughout the day' },
            { icon: '🥗', title: 'Healthy Eating', description: 'Focus on nutritious meals' },
            { icon: '😌', title: 'Relaxation', description: 'Practice deep breathing and relaxation' }
        ];

        // Workout tracking
        this.currentExerciseIndex = 0;
        this.exerciseResults = [];
        this.workoutStartTime = null;

        this.calculateCurrentStatus();
    }

    calculateCurrentStatus() {
        // Detect September 10, 2025 (Wednesday)
        // Calculate: Week 1, Day 3 of 84
        const timeDiff = this.currentDate.getTime() - this.programStartDate.getTime();
        const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        
        this.currentWeek = Math.min(Math.floor(daysDiff / 7) + 1, 12);
        this.programDay = Math.min(daysDiff + 1, 84);
        
        // Wednesday = WORKOUT DAY (M/W/F schedule)
        const currentDayOfWeek = this.currentDate.getDay(); // 0=Sunday, 1=Monday, etc.
        this.isWorkoutDay = currentDayOfWeek === 1 || currentDayOfWeek === 3 || currentDayOfWeek === 5; // M/W/F
        
        this.currentDateString = this.currentDate.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
        
        this.currentDayString = this.currentDate.toLocaleDateString('en-US', { 
            weekday: 'long' 
        }).toUpperCase();
        
        this.currentPhase = this.timeline[this.currentWeek - 1]?.phase || "Foundation Building";
        this.progress = Math.round((this.programDay / 84) * 100);
    }

    init() {
        console.log('Initializing app...');
        this.updateHomePage();
        this.populateTimeline();
        this.showPage('homePage');
        
        // Setup event listeners after DOM is ready
        setTimeout(() => {
            this.setupEventListeners();
        }, 100);
    }

    updateHomePage() {
        // Update date and day
        document.getElementById('currentDate').textContent = this.currentDateString;
        document.getElementById('currentDay').textContent = this.currentDayString;
        document.getElementById('weekBadge').textContent = `WEEK ${this.currentWeek} • Day ${this.programDay} of 84`;
        document.getElementById('phaseBadge').textContent = this.currentPhase;
        document.getElementById('progressCircle').textContent = `${this.progress}%`;

        // Show "Workout Day" status with 💪 icon
        const statusIcon = document.getElementById('statusIcon');
        const statusTitle = document.getElementById('statusTitle');
        const statusDescription = document.getElementById('statusDescription');

        if (this.isWorkoutDay) {
            statusIcon.textContent = '💪';
            statusTitle.textContent = 'Workout Day';
            statusDescription.textContent = 'Time to get stronger! Ready for today\'s exercises?';
        } else {
            statusIcon.textContent = '😌';
            statusTitle.textContent = 'Rest Day';
            statusDescription.textContent = 'Focus on recovery and preparation for tomorrow';
        }
    }

    populateTimeline() {
        const timelineGrid = document.getElementById('timelineGrid');
        timelineGrid.innerHTML = this.timeline.map(week => {
            const isCurrent = week.week === this.currentWeek;
            return `
                <div class="timeline-week ${isCurrent ? 'current' : ''}">
                    <div class="week-number">Week ${week.week}</div>
                    <div class="week-phase">${week.phase}</div>
                    <div class="week-exercises">${week.exercises.join(' • ')}</div>
                </div>
            `;
        }).join('');
    }

    setupEventListeners() {
        console.log('Setting up event listeners...');
        
        // Rest Activities → Rest Activities page
        const restCard = document.getElementById('restActivitiesCard');
        if (restCard) {
            restCard.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Rest activities clicked');
                this.showRestActivities();
            });
            restCard.style.cursor = 'pointer';
        }

        // Today's Workout → Day Workout page
        const workoutCard = document.getElementById('todayWorkoutCard');
        if (workoutCard) {
            workoutCard.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Today workout clicked');
                if (this.isWorkoutDay) {
                    this.showTodayWorkout();
                } else {
                    this.showRestActivities();
                }
            });
            workoutCard.style.cursor = 'pointer';
        }

        // Make Up Missed Days → Makeup Sessions page
        const makeupCard = document.getElementById('makeupCard');
        if (makeupCard) {
            makeupCard.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Makeup clicked');
                this.showMakeupSessions();
            });
            makeupCard.style.cursor = 'pointer';
        }

        // Back buttons → Previous pages
        this.attachEventListener('restBackBtn', () => {
            console.log('Rest back clicked');
            this.showPage('homePage');
        });

        this.attachEventListener('workoutBackBtn', () => {
            console.log('Workout back clicked');
            this.showPage('homePage');
        });

        this.attachEventListener('exerciseBackBtn', () => {
            console.log('Exercise back clicked');
            this.showPage('todayWorkoutPage');
        });

        this.attachEventListener('makeupBackBtn', () => {
            console.log('Makeup back clicked');
            this.showPage('homePage');
        });

        // Start Exercise → Exercise page
        this.attachEventListener('startWorkoutBtn', () => {
            console.log('Start workout clicked');
            this.startWorkout();
        });

        // Save & Continue → Next exercise or completion
        this.attachEventListener('saveContinueBtn', () => {
            console.log('Save and continue clicked');
            this.saveAndContinue();
        });

        // Back to Dashboard → Home page
        this.attachEventListener('backToDashboardBtn', () => {
            console.log('Back to dashboard clicked');
            this.showPage('homePage');
        });

        // Enter key support for reps input
        const repsInput = document.getElementById('repsInput');
        if (repsInput) {
            repsInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.saveAndContinue();
                }
            });
        }

        console.log('Event listeners setup complete');
    }

    attachEventListener(elementId, handler) {
        const element = document.getElementById(elementId);
        if (element) {
            element.addEventListener('click', handler);
            element.style.cursor = 'pointer';
            console.log(`Attached listener to ${elementId}`);
        } else {
            console.warn(`Element ${elementId} not found`);
        }
    }

    showPage(pageId) {
        console.log('Showing page:', pageId);
        
        // Hide all pages
        document.querySelectorAll('.page').forEach(page => {
            page.classList.add('hidden');
        });
        
        // Show target page
        const targetPage = document.getElementById(pageId);
        if (targetPage) {
            targetPage.classList.remove('hidden');
            console.log('Page shown successfully:', pageId);
        } else {
            console.error('Page not found:', pageId);
        }
    }

    showRestActivities() {
        console.log('Showing rest activities...');
        
        const activitiesList = document.getElementById('activitiesList');
        if (activitiesList) {
            activitiesList.innerHTML = this.restActivities.map(activity => `
                <div class="activity-item">
                    <div class="activity-icon">${activity.icon}</div>
                    <div class="activity-info">
                        <h4>${activity.title}</h4>
                        <p>${activity.description}</p>
                    </div>
                </div>
            `).join('');
        }

        this.showPage('restActivitiesPage');
    }

    showTodayWorkout() {
        console.log('Showing today workout...');
        
        const exerciseList = document.getElementById('exerciseList');
        if (exerciseList) {
            exerciseList.innerHTML = this.exercises.map(exercise => `
                <div class="exercise-preview">
                    <div class="exercise-icon">${exercise.icon}</div>
                    <div class="exercise-info">
                        <h4>${exercise.name}</h4>
                        <p>${exercise.targetText}</p>
                    </div>
                </div>
            `).join('');
        }

        this.showPage('todayWorkoutPage');
    }

    showMakeupSessions() {
        console.log('Showing makeup sessions...');
        
        const makeupList = document.getElementById('makeupList');
        if (makeupList) {
            makeupList.innerHTML = `
                <div class="makeup-option" onclick="app.showTodayWorkout()">
                    <h4>Week 1 Foundation Workout</h4>
                    <p>Wall Pushups, Knee Pushups, Plank Hold</p>
                </div>
                <div class="makeup-option" onclick="app.showTodayWorkout()">
                    <h4>Previous Week Workout</h4>
                    <p>Complete any missed training sessions</p>
                </div>
            `;
        }

        this.showPage('makeupPage');
    }

    startWorkout() {
        console.log('Starting workout...');
        
        this.currentExerciseIndex = 0;
        this.exerciseResults = [];
        this.workoutStartTime = new Date();
        this.showCurrentExercise();
    }

    showCurrentExercise() {
        console.log('Showing current exercise:', this.currentExerciseIndex);
        
        if (this.currentExerciseIndex >= this.exercises.length) {
            this.showWorkoutComplete();
            return;
        }

        const exercise = this.exercises[this.currentExerciseIndex];
        
        // Update exercise progress
        const progressElement = document.getElementById('exerciseProgress');
        if (progressElement) {
            progressElement.textContent = `Exercise ${this.currentExerciseIndex + 1} of ${this.exercises.length}`;
        }

        // Update exercise demo section
        const demoIcon = document.getElementById('demoIcon');
        const exerciseName = document.getElementById('exerciseName');
        const demoTarget = document.getElementById('demoTarget');
        
        if (demoIcon) demoIcon.textContent = exercise.icon;
        if (exerciseName) exerciseName.textContent = exercise.name;
        if (demoTarget) demoTarget.textContent = exercise.targetText;

        // Update instructions
        const instructionsElement = document.getElementById('exerciseInstructions');
        if (instructionsElement) instructionsElement.textContent = exercise.instructions;

        // Update tips
        const tipsContainer = document.getElementById('exerciseTips');
        if (tipsContainer) {
            tipsContainer.innerHTML = exercise.tips.map(tip => `<li>${tip}</li>`).join('');
        }

        // Update tracking section
        const trackingQuestion = document.getElementById('trackingQuestion');
        const trackingSuffix = document.getElementById('trackingSuffix');
        
        if (trackingQuestion) trackingQuestion.textContent = exercise.question;
        if (trackingSuffix) trackingSuffix.textContent = exercise.suffix;
        
        // Clear and focus input
        const repsInput = document.getElementById('repsInput');
        if (repsInput) {
            repsInput.value = '';
            setTimeout(() => repsInput.focus(), 200);
        }

        this.showPage('exercisePage');
    }

    saveAndContinue() {
        console.log('Save and continue...');
        
        const repsInput = document.getElementById('repsInput');
        if (!repsInput) return;
        
        const repsValue = parseInt(repsInput.value);

        if (!repsInput.value || repsValue < 0 || isNaN(repsValue)) {
            alert('Please enter a valid number (0 or more).');
            repsInput.focus();
            return;
        }

        // Save result
        this.exerciseResults.push({
            exercise: this.exercises[this.currentExerciseIndex].name,
            completed: repsValue,
            target: this.exercises[this.currentExerciseIndex].target
        });

        // Move to next exercise
        this.currentExerciseIndex++;
        this.showCurrentExercise();
    }

    showWorkoutComplete() {
        console.log('Showing workout complete...');
        
        // Calculate stats
        const totalCompleted = this.exerciseResults.reduce((sum, result) => sum + result.completed, 0);
        const exercisesCompleted = this.exercises.length;
        const workoutDuration = this.workoutStartTime ? 
            Math.round((new Date() - this.workoutStartTime) / 1000 / 60) : 1;

        // Update stats in landscape completion screen
        const totalElement = document.getElementById('totalCompleted');
        const exercisesElement = document.getElementById('exercisesCompleted');
        const timeElement = document.getElementById('timeSpent');
        
        if (totalElement) totalElement.textContent = `Total Completed: ${totalCompleted}`;
        if (exercisesElement) exercisesElement.textContent = `Exercises Completed: ${exercisesCompleted}`;
        if (timeElement) timeElement.textContent = `Time Spent: ~${workoutDuration} min`;

        this.showPage('completePage');
    }
}

// Global app instance
let app;

// Initialize app when DOM loads
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing app...');
    try {
        app = new PushupChallengeApp();
        app.init();
        console.log('App initialized successfully');
    } catch (error) {
        console.error('App initialization failed:', error);
    }
});