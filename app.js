// 12-Week Pushup Challenge - Exact user specification implementation
class PushupChallengeApp {
    constructor() {
        // Set to current date for real-time sync
        this.currentDate = new Date();
        this.programStartDate = new Date('2025-09-08'); // Monday start
        
        // EXACT WORKOUT PLAN from user specification
        this.workoutPlan = {
            1: {
                exercises: [
                    {name: "Wall Pushups", target: 24, icon: "🧱", unit: "reps"},
                    {name: "Knee Pushups", target: 6, icon: "🦵", unit: "reps"},
                    {name: "Plank Hold", target: 45, unit: "seconds", icon: "⏱️"}
                ],
                workoutDays: ["monday", "wednesday", "friday"],
                phase: "Foundation Building"
            },
            2: {
                exercises: [
                    {name: "Wall Pushups", target: 24, icon: "🧱", unit: "reps"},
                    {name: "Knee Pushups", target: 6, icon: "🦵", unit: "reps"},
                    {name: "Plank Hold", target: 45, unit: "seconds", icon: "⏱️"},
                    {name: "Pike Position Hold", target: 20, unit: "seconds", icon: "📐"}
                ],
                workoutDays: ["monday", "wednesday", "friday"],
                phase: "Foundation Building"
            },
            3: {
                exercises: [
                    {name: "Incline Pushups", target: 24, icon: "📐", unit: "reps"},
                    {name: "Standard Pushups", target: 12, icon: "💪", unit: "reps"},
                    {name: "Basic Pike Pushups", target: 6, icon: "🔺", unit: "reps"},
                    {name: "Wide Pushups", target: 8, icon: "↔️", unit: "reps"},
                    {name: "Plank to Down Dog", target: 15, icon: "🐕", unit: "reps"}
                ],
                workoutDays: ["monday", "wednesday", "friday"],
                phase: "Strength Building"
            },
            4: {
                exercises: [
                    {name: "Incline Pushups", target: 24, icon: "📐", unit: "reps"},
                    {name: "Standard Pushups", target: 12, icon: "💪", unit: "reps"},
                    {name: "Basic Pike Pushups", target: 6, icon: "🔺", unit: "reps"},
                    {name: "Wide Pushups", target: 8, icon: "↔️", unit: "reps"},
                    {name: "Plank to Down Dog", target: 15, icon: "🐕", unit: "reps"}
                ],
                workoutDays: ["monday", "wednesday", "friday"],
                phase: "Strength Building"
            },
            5: {
                exercises: [
                    {name: "Incline Pushups", target: 24, icon: "📐", unit: "reps"},
                    {name: "Standard Pushups", target: 12, icon: "💪", unit: "reps"},
                    {name: "Basic Pike Pushups", target: 6, icon: "🔺", unit: "reps"},
                    {name: "Wide Pushups", target: 8, icon: "↔️", unit: "reps"},
                    {name: "Plank to Down Dog", target: 15, icon: "🐕", unit: "reps"}
                ],
                workoutDays: ["monday", "wednesday", "friday"],
                phase: "Strength Building"
            },
            6: {
                exercises: [
                    {name: "Incline Pushups", target: 24, icon: "📐", unit: "reps"},
                    {name: "Standard Pushups", target: 12, icon: "💪", unit: "reps"},
                    {name: "Basic Pike Pushups", target: 6, icon: "🔺", unit: "reps"},
                    {name: "Wide Pushups", target: 8, icon: "↔️", unit: "reps"},
                    {name: "Plank to Down Dog", target: 15, icon: "🐕", unit: "reps"}
                ],
                workoutDays: ["monday", "wednesday", "friday"],
                phase: "Strength Building"
            },
            7: {
                exercises: [
                    {name: "Standard Pushups", target: 40, icon: "💪", unit: "reps"},
                    {name: "Diamond Pushups", target: 15, icon: "💎", unit: "reps"},
                    {name: "Pike Pushups", target: 16, icon: "🔺", unit: "reps"},
                    {name: "Elevated Pike Pushups", target: 6, icon: "⬆️", unit: "reps"},
                    {name: "Decline Pushups", target: 8, icon: "⬇️", unit: "reps"},
                    {name: "Archer Pushups", target: 4, icon: "🏹", unit: "reps"}
                ],
                workoutDays: ["monday", "wednesday", "friday"],
                phase: "Advanced Training"
            },
            8: {
                exercises: [
                    {name: "Standard Pushups", target: 40, icon: "💪", unit: "reps"},
                    {name: "Diamond Pushups", target: 15, icon: "💎", unit: "reps"},
                    {name: "Pike Pushups", target: 16, icon: "🔺", unit: "reps"},
                    {name: "Elevated Pike Pushups", target: 6, icon: "⬆️", unit: "reps"},
                    {name: "Decline Pushups", target: 8, icon: "⬇️", unit: "reps"},
                    {name: "Archer Pushups", target: 4, icon: "🏹", unit: "reps"}
                ],
                workoutDays: ["monday", "wednesday", "friday"],
                phase: "Advanced Training"
            },
            9: {
                exercises: [
                    {name: "Standard Pushups", target: 90, icon: "💪", unit: "reps"},
                    {name: "Diamond Pushups", target: 48, icon: "💎", unit: "reps"},
                    {name: "Pike Pushups", target: 25, icon: "🔺", unit: "reps"},
                    {name: "Handstand Progression", target: 90, unit: "seconds", icon: "🤸"},
                    {name: "One-Arm Pushups", target: 12, icon: "💪", unit: "reps"},
                    {name: "Endurance Sets", target: 1, unit: "max effort", icon: "🔥"},
                    {name: "Transition Flows", target: 30, icon: "🌊", unit: "reps"}
                ],
                workoutDays: ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday"],
                phase: "Elite Performance"
            },
            10: {
                exercises: [
                    {name: "Standard Pushups", target: 90, icon: "💪", unit: "reps"},
                    {name: "Diamond Pushups", target: 48, icon: "💎", unit: "reps"},
                    {name: "Pike Pushups", target: 25, icon: "🔺", unit: "reps"},
                    {name: "Handstand Progression", target: 90, unit: "seconds", icon: "🤸"},
                    {name: "One-Arm Pushups", target: 12, icon: "💪", unit: "reps"},
                    {name: "Endurance Sets", target: 1, unit: "max effort", icon: "🔥"},
                    {name: "Transition Flows", target: 30, icon: "🌊", unit: "reps"}
                ],
                workoutDays: ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday"],
                phase: "Elite Performance"
            },
            11: {
                exercises: [
                    {name: "Standard Pushups", target: 90, icon: "💪", unit: "reps"},
                    {name: "Diamond Pushups", target: 48, icon: "💎", unit: "reps"},
                    {name: "Pike Pushups", target: 25, icon: "🔺", unit: "reps"},
                    {name: "Handstand Progression", target: 90, unit: "seconds", icon: "🤸"},
                    {name: "One-Arm Pushups", target: 12, icon: "💪", unit: "reps"},
                    {name: "Endurance Sets", target: 1, unit: "max effort", icon: "🔥"},
                    {name: "Transition Flows", target: 30, icon: "🌊", unit: "reps"}
                ],
                workoutDays: ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday"],
                phase: "Elite Performance"
            },
            12: {
                exercises: [
                    {name: "Standard Pushups", target: 90, icon: "💪", unit: "reps"},
                    {name: "Diamond Pushups", target: 48, icon: "💎", unit: "reps"},
                    {name: "Pike Pushups", target: 25, icon: "🔺", unit: "reps"},
                    {name: "Handstand Progression", target: 90, unit: "seconds", icon: "🤸"},
                    {name: "One-Arm Pushups", target: 12, icon: "💪", unit: "reps"},
                    {name: "Endurance Sets", target: 1, unit: "max effort", icon: "🔥"},
                    {name: "Transition Flows", target: 30, icon: "🌊", unit: "reps"}
                ],
                workoutDays: ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday"],
                phase: "Elite Performance"
            }
        };

        // Exercise instructions database
        this.exerciseInstructions = {
            "Wall Pushups": {
                instructions: "Stand arm's length from wall. Put your hands flat against wall at shoulder height. Lean forward and push back with control.",
                tips: ["Keep your feet planted on ground", "Keep your body straight", "Move slowly and controlled", "Push all the way back"]
            },
            "Knee Pushups": {
                instructions: "Get on your hands and knees. Keep your body straight from knees to head. Lower your chest to the floor and push back up.",
                tips: ["Keep straight line from knees to head", "Let your chest touch the floor", "Move slowly", "Keep your core tight"]
            },
            "Plank Hold": {
                instructions: "Get in pushup position and hold steady. Keep your body straight and breathe normally.",
                tips: ["Keep your body straight", "Don't hold your breath", "Keep your core and glutes tight", "Look down at the floor"]
            },
            "Pike Position Hold": {
                instructions: "Get into downward dog position with hands and feet planted. Hold this position steady.",
                tips: ["Keep your legs straight", "Press hands firmly into ground", "Keep your back straight", "Breathe normally"]
            },
            "Incline Pushups": {
                instructions: "Place hands on elevated surface like bench or step. Perform pushups at an incline.",
                tips: ["Keep body straight", "Control the movement", "Full range of motion", "Keep core engaged"]
            },
            "Standard Pushups": {
                instructions: "Start in plank position. Lower chest to floor, then push back up to starting position.",
                tips: ["Keep body straight", "Full range of motion", "Control both up and down", "Keep core tight"]
            },
            "Basic Pike Pushups": {
                instructions: "Start in pike position with hands on ground. Lower head toward hands, then push back up.",
                tips: ["Keep legs straight", "Target your shoulders", "Control the descent", "Push through hands"]
            },
            "Wide Pushups": {
                instructions: "Perform pushups with hands placed wider than shoulder-width apart.",
                tips: ["Wider hand placement", "Target chest muscles", "Keep core engaged", "Full range of motion"]
            },
            "Plank to Down Dog": {
                instructions: "Start in plank position, then lift hips up to downward dog position. Return to plank.",
                tips: ["Smooth transition", "Keep hands planted", "Engage core throughout", "Control the movement"]
            },
            "Diamond Pushups": {
                instructions: "Place hands close together forming diamond shape with fingers. Perform pushups.",
                tips: ["Hands form diamond", "Target triceps", "Keep elbows close", "Control the movement"]
            },
            "Pike Pushups": {
                instructions: "Start in pike position. Lower head toward hands, focusing on shoulder strength.",
                tips: ["High pike position", "Target shoulders", "Keep legs straight", "Control descent"]
            },
            "Elevated Pike Pushups": {
                instructions: "Place feet on elevated surface, hands on ground in pike position. Perform pike pushups.",
                tips: ["Feet elevated", "Increase difficulty", "Target shoulders", "Control movement"]
            },
            "Decline Pushups": {
                instructions: "Place feet on elevated surface, hands on ground. Perform pushups in decline position.",
                tips: ["Feet elevated", "Targets upper chest", "Keep body straight", "Full range of motion"]
            },
            "Archer Pushups": {
                instructions: "Perform pushup shifting weight to one side, extending opposite arm out to side.",
                tips: ["Shift weight to one side", "Extend non-working arm", "Advanced movement", "Control throughout"]
            },
            "Handstand Progression": {
                instructions: "Practice handstand holds against wall or freestanding based on ability level.",
                tips: ["Use wall for support", "Keep body straight", "Build shoulder strength", "Progress gradually"]
            },
            "One-Arm Pushups": {
                instructions: "Perform pushups using only one arm, keep body straight and controlled.",
                tips: ["Advanced exercise", "Keep body stable", "Use core strength", "Perfect form essential"]
            },
            "Endurance Sets": {
                instructions: "Perform as many pushups as possible with good form until failure.",
                tips: ["Push to failure", "Maintain good form", "Test your limits", "Record your max"]
            },
            "Transition Flows": {
                instructions: "Flow between different pushup positions and movements in sequence.",
                tips: ["Smooth transitions", "Chain movements", "Keep moving", "Build endurance"]
            }
        };

        // Rest activities
        this.restActivities = [
            { icon: '🧘', title: 'Gentle Stretching', description: 'Do some light stretching exercises for 10-15 minutes' },
            { icon: '🚶', title: 'Light Walking', description: 'Take an easy 15-20 minute walk outdoors' },
            { icon: '💧', title: 'Stay Hydrated', description: 'Drink plenty of water throughout the day' },
            { icon: '🥗', title: 'Healthy Nutrition', description: 'Focus on nutritious meals and recovery foods' },
            { icon: '😌', title: 'Relaxation', description: 'Practice deep breathing and meditation' }
        ];

        // Workout tracking
        this.currentExerciseIndex = 0;
        this.exerciseResults = [];
        this.workoutStartTime = null;
        this.selectedWeek = 1;
        this.selectedExercises = [];
        
        // Webcam properties
        this.webcamStream = null;
        this.isFullscreenWebcam = false;

        this.calculateCurrentStatus();
    }

    calculateCurrentStatus() {
        const timeDiff = this.currentDate.getTime() - this.programStartDate.getTime();
        const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        
        this.currentWeek = Math.max(1, Math.min(Math.floor(daysDiff / 7) + 1, 12));
        this.programDay = Math.max(1, Math.min(daysDiff + 1, 84));
        
        const currentDayOfWeek = this.currentDate.getDay();
        const weekPlan = this.workoutPlan[this.currentWeek];
        
        const dayNames = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
        const todayName = dayNames[currentDayOfWeek];
        this.isWorkoutDay = weekPlan && weekPlan.workoutDays.includes(todayName);
        
        // Dynamic date formatting - real current date
        const localeOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        this.currentDateString = this.currentDate.toLocaleDateString(undefined, localeOptions);
        this.currentDayString = this.currentDate.toLocaleDateString(undefined, { weekday: 'long' }).toUpperCase();
        this.currentPhase = weekPlan ? weekPlan.phase : "Foundation Building";
        this.progress = Math.round((this.programDay / 84) * 100);
    }

    init() {
        console.log('Initializing app...');
        this.updateHomePage();
        this.populateTimeline();
        this.setupEventListeners();
        this.showPage('homePage');
    }

    // Initialize webcam when exercise page is shown
    async initializeWebcam() {
        try {
            const webcamFeed = document.getElementById('webcamFeed');
            const webcamError = document.getElementById('webcamError');
            
            if (!webcamFeed) return;
            
            // Request camera access
            this.webcamStream = await navigator.mediaDevices.getUserMedia({ 
                video: { 
                    width: { ideal: 1280 },
                    height: { ideal: 720 },
                    facingMode: 'user' 
                }, 
                audio: false 
            });
            
            webcamFeed.srcObject = this.webcamStream;
            webcamError.style.display = 'none';
            
            console.log('Webcam initialized successfully');
            
        } catch (error) {
            console.error('Error accessing webcam:', error);
            const webcamError = document.getElementById('webcamError');
            if (webcamError) {
                webcamError.style.display = 'flex';
            }
        }
    }

    // Stop webcam stream
    stopWebcam() {
        if (this.webcamStream) {
            this.webcamStream.getTracks().forEach(track => track.stop());
            this.webcamStream = null;
            console.log('Webcam stopped');
        }
    }

    updateHomePage() {
        const dateEl = document.getElementById('currentDate');
        const dayEl = document.getElementById('currentDay');
        const weekBadgeEl = document.getElementById('weekBadge');
        const phaseBadgeEl = document.getElementById('phaseBadge');
        const progressEl = document.getElementById('progressCircle');
        
        if (dateEl) dateEl.textContent = this.currentDateString;
        if (dayEl) dayEl.textContent = this.currentDayString;
        if (weekBadgeEl) weekBadgeEl.textContent = `WEEK ${this.currentWeek} • Day ${this.programDay} of 84`;
        if (phaseBadgeEl) phaseBadgeEl.textContent = this.currentPhase;
        if (progressEl) progressEl.textContent = `${this.progress}%`;

        const statusIcon = document.getElementById('statusIcon');
        const statusTitle = document.getElementById('statusTitle');
        const statusDescription = document.getElementById('statusDescription');

        if (this.isWorkoutDay) {
            if (statusIcon) statusIcon.textContent = '💪';
            if (statusTitle) statusTitle.textContent = 'Workout Day';
            if (statusDescription) statusDescription.textContent = 'Time to get stronger! Ready for today\'s exercises?';
        } else {
            if (statusIcon) statusIcon.textContent = '😌';
            if (statusTitle) statusTitle.textContent = 'Rest Day';
            if (statusDescription) statusDescription.textContent = 'Today is a recovery day. Focus on rest and preparation for Monday\'s workout.';
        }
    }

    populateTimeline() {
        const timelineGrid = document.getElementById('timelineGrid');
        if (!timelineGrid) return;
        
        const weeks = [];
        for (let i = 1; i <= 12; i++) {
            const weekPlan = this.workoutPlan[i];
            const isCurrent = i === this.currentWeek;
            weeks.push(`
                <div class="timeline-week ${isCurrent ? 'current' : ''}" data-week="${i}">
                    <div class="week-number">Week ${i}</div>
                    <div class="week-phase">${weekPlan.phase}</div>
                    <div class="week-exercises">${weekPlan.exercises.slice(0, 3).map(e => e.name).join(' • ')}</div>
                </div>
            `);
        }
        timelineGrid.innerHTML = weeks.join('');
        
        timelineGrid.addEventListener('click', (e) => {
            const timelineWeek = e.target.closest('.timeline-week');
            if (timelineWeek) {
                const week = parseInt(timelineWeek.getAttribute('data-week'));
                this.selectWeekFromTimeline(week);
            }
        });
    }

    selectWeekFromTimeline(week) {
        console.log('Week selected from timeline:', week);
        this.selectedWeek = week;
        this.showPage('daySelectionPage');
        this.updateDayOptions();
    }

    updateDayOptions() {
        const weekSelect = document.getElementById('weekSelect');
        const dayOptions = document.getElementById('dayOptions');
        
        if (weekSelect) {
            weekSelect.value = this.selectedWeek;
        }

        const weekPlan = this.workoutPlan[this.selectedWeek];
        if (!weekPlan || !dayOptions) return;

        const dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        const dayNamesLower = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
        
        dayOptions.innerHTML = dayNames.map((day, index) => {
            const dayLower = dayNamesLower[index];
            const isWorkoutDay = weekPlan.workoutDays.includes(dayLower);
            const exercises = isWorkoutDay ? weekPlan.exercises : [];
            
            return `
                <div class="day-option ${!isWorkoutDay ? 'rest-day' : ''}" data-day="${dayLower}" data-workout="${isWorkoutDay}">
                    <h4>${day}</h4>
                    <p>${isWorkoutDay ? `${exercises.length} exercises` : 'Rest Day'}</p>
                </div>
            `;
        }).join('');
        
        dayOptions.addEventListener('click', (e) => {
            const dayOption = e.target.closest('.day-option');
            if (dayOption) {
                const day = dayOption.getAttribute('data-day');
                const isWorkoutDay = dayOption.getAttribute('data-workout') === 'true';
                this.selectDay(day, isWorkoutDay);
            }
        });
    }

    selectDay(day, isWorkoutDay) {
        console.log('Day selected:', day, isWorkoutDay);
        if (isWorkoutDay) {
            const weekPlan = this.workoutPlan[this.selectedWeek];
            this.selectedExercises = weekPlan.exercises;
            this.showSelectedWorkout(day);
        } else {
            this.showRestActivities();
        }
    }

    showSelectedWorkout(day) {
        const workoutDayTitle = document.getElementById('workoutDayTitle');
        const workoutDescription = document.getElementById('workoutDescription');
        
        if (workoutDayTitle) {
            workoutDayTitle.textContent = `${day.charAt(0).toUpperCase() + day.slice(1)}'s Workout - Week ${this.selectedWeek}`;
        }
        if (workoutDescription) {
            workoutDescription.textContent = `Complete Week ${this.selectedWeek}'s training session`;
        }

        this.showTodayWorkout();
    }

    setupEventListeners() {
        console.log('Setting up event listeners...');
        
        const restCard = document.getElementById('restActivitiesCard');
        const workoutCard = document.getElementById('todayWorkoutCard');
        const makeupCard = document.getElementById('makeupCard');
        
        if (restCard) {
            restCard.onclick = (e) => {
                e.preventDefault();
                console.log('Rest activities clicked');
                this.showRestActivities();
            };
            restCard.style.cursor = 'pointer';
        }
        
        if (workoutCard) {
            workoutCard.onclick = (e) => {
                e.preventDefault();
                console.log('Today workout clicked');
                if (this.isWorkoutDay) {
                    const weekPlan = this.workoutPlan[this.currentWeek];
                    this.selectedExercises = weekPlan.exercises;
                    this.showTodayWorkout();
                } else {
                    this.showRestActivities();
                }
            };
            workoutCard.style.cursor = 'pointer';
        }
        
        if (makeupCard) {
            makeupCard.onclick = (e) => {
                e.preventDefault();
                console.log('Makeup clicked');
                this.showPage('daySelectionPage');
                this.updateDayOptions();
            };
            makeupCard.style.cursor = 'pointer';
        }

        this.setupBackButton('restBackBtn', 'homePage');
        this.setupBackButton('workoutBackBtn', 'homePage');
        this.setupBackButton('exerciseBackBtn', 'todayWorkoutPage');
        this.setupBackButton('daySelectionBackBtn', 'homePage');
        this.setupBackButton('backToDashboardBtn', 'homePage');

        const startBtn = document.getElementById('startWorkoutBtn');
        const saveBtn = document.getElementById('saveContinueBtn');
        
        if (startBtn) {
            startBtn.onclick = () => {
                console.log('Start workout clicked');
                this.startWorkout();
            };
        }
        
        if (saveBtn) {
            saveBtn.onclick = () => {
                console.log('Save continue clicked');
                this.saveAndContinue();
            };
        }

        const weekSelect = document.getElementById('weekSelect');
        if (weekSelect) {
            weekSelect.onchange = (e) => {
                this.selectedWeek = parseInt(e.target.value);
                this.updateDayOptions();
            };
        }

        const repsInput = document.getElementById('repsInput');
        if (repsInput) {
            repsInput.onkeypress = (e) => {
                if (e.key === 'Enter') {
                    this.saveAndContinue();
                }
            };
        }

        console.log('Event listeners setup complete');
    }

    setupBackButton(buttonId, targetPage) {
        const button = document.getElementById(buttonId);
        if (button) {
            button.onclick = (e) => {
                e.preventDefault();
                console.log(`${buttonId} clicked, going to ${targetPage}`);
                
                // Stop webcam when leaving exercise page
                if (buttonId === 'exerciseBackBtn') {
                    this.stopWebcam();
                }
                
                this.showPage(targetPage);
            };
            button.style.cursor = 'pointer';
        }
    }

    showPage(pageId) {
        console.log('Showing page:', pageId);
        
        const allPages = document.querySelectorAll('.page');
        allPages.forEach(page => {
            page.classList.add('hidden');
        });
        
        const targetPage = document.getElementById(pageId);
        if (targetPage) {
            targetPage.classList.remove('hidden');
            console.log('Page shown successfully:', pageId);
            
            // Initialize webcam when showing exercise page
            if (pageId === 'exercisePage') {
                setTimeout(() => this.initializeWebcam(), 500);
            }
            
            if (pageId === 'daySelectionPage') {
                this.updateDayOptions();
            }
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
        if (exerciseList && this.selectedExercises.length > 0) {
            exerciseList.innerHTML = this.selectedExercises.map(exercise => {
                const unitText = exercise.unit === 'seconds' ? 'seconds' : 
                                exercise.unit === 'max effort' ? 'max effort' : 'times';
                return `
                    <div class="exercise-preview">
                        <div class="exercise-icon">${exercise.icon}</div>
                        <div class="exercise-info">
                            <h4>${exercise.name}</h4>
                            <p>${exercise.target} ${unitText}</p>
                        </div>
                    </div>
                `;
            }).join('');
        }

        this.showPage('todayWorkoutPage');
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
        
        if (this.currentExerciseIndex >= this.selectedExercises.length) {
            this.showWorkoutComplete();
            return;
        }

        const exercise = this.selectedExercises[this.currentExerciseIndex];
        const exerciseDetails = this.exerciseInstructions[exercise.name] || {
            instructions: "Complete this exercise with proper form.",
            tips: ["Focus on good form", "Control the movement", "Breathe properly"]
        };
        
        const progressElement = document.getElementById('exerciseProgress');
        if (progressElement) {
            progressElement.textContent = `Exercise ${this.currentExerciseIndex + 1} of ${this.selectedExercises.length}`;
        }

        const exerciseName = document.getElementById('exerciseName');
        const demoTarget = document.getElementById('demoTarget');
        
        if (exerciseName) exerciseName.textContent = exercise.name;
        
        const unitText = exercise.unit === 'seconds' ? 'seconds' : 
                        exercise.unit === 'max effort' ? 'max effort' : 
                        exercise.unit === 'reps' ? 'times' : 'times';
        if (demoTarget) demoTarget.textContent = `${exercise.target} ${unitText}`;

        const instructionsEl = document.getElementById('exerciseInstructions');
        if (instructionsEl) instructionsEl.textContent = exerciseDetails.instructions;
        
        const tipsContainer = document.getElementById('exerciseTips');
        if (tipsContainer) {
            tipsContainer.innerHTML = exerciseDetails.tips.map(tip => `<li>${tip}</li>`).join('');
        }

        const question = exercise.unit === 'seconds' ? 
            'How many seconds did you hold this?' : 
            exercise.unit === 'max effort' ? 
            'Did you complete this exercise?' : 
            'How many times did you complete this?';
        
        const suffix = exercise.unit === 'seconds' ? 'seconds completed' :
                      exercise.unit === 'max effort' ? '(Enter 1 for completed)' : 
                      'times completed';
        
        const questionEl = document.getElementById('trackingQuestion');
        const suffixEl = document.getElementById('trackingSuffix');
        
        if (questionEl) questionEl.textContent = question;
        if (suffixEl) suffixEl.textContent = suffix;
        
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

        this.exerciseResults.push({
            exercise: this.selectedExercises[this.currentExerciseIndex].name,
            completed: repsValue,
            target: this.selectedExercises[this.currentExerciseIndex].target
        });

        this.currentExerciseIndex++;
        this.showCurrentExercise();
    }

    showWorkoutComplete() {
        console.log('Showing workout complete...');
        
        // Stop webcam when workout is complete
        this.stopWebcam();
        
        const totalCompleted = this.exerciseResults.reduce((sum, result) => sum + result.completed, 0);
        const exercisesCompleted = this.selectedExercises.length;
        const workoutDuration = this.workoutStartTime ? 
            Math.round((new Date() - this.workoutStartTime) / 1000 / 60) : 1;

        const totalEl = document.getElementById('totalCompleted');
        const exercisesEl = document.getElementById('exercisesCompleted');
        const timeEl = document.getElementById('timeSpent');
        
        if (totalEl) totalEl.textContent = `Total Completed: ${totalCompleted}`;
        if (exercisesEl) exercisesEl.textContent = `Exercises Completed: ${exercisesCompleted}`;
        if (timeEl) timeEl.textContent = `Time Spent: ~${workoutDuration} min`;

        this.showPage('completePage');
    }
}

// Global webcam functions
function toggleFullscreenWebcam() {
    const modal = document.getElementById('fullscreenWebcamModal');
    const fullscreenFeed = document.getElementById('fullscreenWebcamFeed');
    const regularFeed = document.getElementById('webcamFeed');
    
    if (!modal || !fullscreenFeed || !regularFeed) return;
    
    if (modal.classList.contains('hidden')) {
        // Show fullscreen
        modal.classList.remove('hidden');
        if (app && app.webcamStream) {
            fullscreenFeed.srcObject = app.webcamStream;
        }
        app.isFullscreenWebcam = true;
        
        // Add escape key listener
        document.addEventListener('keydown', handleEscapeKey);
    } else {
        // Hide fullscreen
        modal.classList.add('hidden');
        fullscreenFeed.srcObject = null;
        app.isFullscreenWebcam = false;
        
        // Remove escape key listener
        document.removeEventListener('keydown', handleEscapeKey);
    }
}

function handleEscapeKey(event) {
    if (event.key === 'Escape' && app.isFullscreenWebcam) {
        toggleFullscreenWebcam();
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