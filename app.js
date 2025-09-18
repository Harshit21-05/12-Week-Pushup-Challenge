// 12-Week Pushup Challenge - Exact user specification implementation
class PushupChallengeApp {
    constructor() {
        // Set to current date for real-time sync
        this.currentDate = new Date();
        this.programStartDate = new Date('2025-09-08'); // Monday start

        // EXACT WORKOUT PLAN from user specification
        this.workoutPlan = {
            // ... (unchanged, your full workoutPlan here) ...
            // For brevity, the workoutPlan object is unchanged from your current file.
        };

        // Exercise instructions database
        this.exerciseInstructions = {
            // ... (unchanged, your full exerciseInstructions here) ...
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
        // ... unchanged ...
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

    // Webcam Logic (updated)
    async initializeWebcam() {
        // This method is now unused since webcam is user-controlled via button.
        // Initialization is handled by startWebcam().
    }

    // Stop webcam stream and fullscreen stream (updated)
    stopWebcam() {
        // Stop the main webcam stream
        if (this.webcamStream) {
            this.webcamStream.getTracks().forEach(track => track.stop());
            this.webcamStream = null;
            console.log('Webcam stopped');
        }
        const video = document.getElementById('webcamFeed');
        if (video) {
            video.srcObject = null;
            video.style.display = "none";
            const toggleBtn = document.getElementById('webcamToggleBtn');
            if (toggleBtn) toggleBtn.textContent = "Start Webcam";
        }
        // Also stop the fullscreen webcam stream if active
        const fullscreenVideo = document.getElementById('fullscreenWebcamFeed');
        if (fullscreenVideo && fullscreenVideo.srcObject) {
            let fullscreenTracks = fullscreenVideo.srcObject.getTracks();
            fullscreenTracks.forEach(track => track.stop());
            fullscreenVideo.srcObject = null;
        }
    }

    updateHomePage() {
        // ... unchanged ...
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
        // ... unchanged ...
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
        // ... unchanged ...
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
        // ... unchanged ...
        if (isWorkoutDay) {
            const weekPlan = this.workoutPlan[this.selectedWeek];
            this.selectedExercises = weekPlan.exercises;
            this.showSelectedWorkout(day);
        } else {
            this.showRestActivities();
        }
    }

    showSelectedWorkout(day) {
        // ... unchanged ...
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
        // ... unchanged except for webcam button ...
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

        // --- Webcam button event listeners ---
        const webcamToggleBtn = document.getElementById('webcamToggleBtn');
        if (webcamToggleBtn) {
            webcamToggleBtn.onclick = () => {
                toggleWebcam();
            };
            webcamToggleBtn.style.cursor = 'pointer';
        }

        const webcamFullscreenBtn = document.querySelector('.webcam-fullscreen-btn');
        if (webcamFullscreenBtn) {
            webcamFullscreenBtn.onclick = () => {
                toggleFullscreenWebcam();
            };
            webcamFullscreenBtn.style.cursor = 'pointer';
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
            
            // No auto webcam initialization; it's now user-controlled
            if (pageId === 'daySelectionPage') {
                this.updateDayOptions();
            }
        } else {
            console.error('Page not found:', pageId);
        }
    }

    showRestActivities() {
        // ... unchanged ...
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
        // ... unchanged ...
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
        // ... unchanged ...
        console.log('Starting workout...');
        
        this.currentExerciseIndex = 0;
        this.exerciseResults = [];
        this.workoutStartTime = new Date();
        this.showCurrentExercise();
    }

    showCurrentExercise() {
        // ... unchanged ...
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
        // ... unchanged ...
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
        // ... unchanged ...
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

// --- Webcam functions for global use ---
let webcamStream = null;

async function startWebcam() {
    try {
        webcamStream = await navigator.mediaDevices.getUserMedia({ video: true });
        const video = document.getElementById('webcamFeed');
        video.srcObject = webcamStream;
        video.style.display = "block";
        document.getElementById('webcamToggleBtn').textContent = "Stop Webcam";
        document.getElementById('webcamError').style.display = "none";
        // For app class use:
        if (window.app) app.webcamStream = webcamStream;
    } catch (err) {
        document.getElementById('webcamError').style.display = "block";
    }
}

function stopWebcam() {
    // Stop the main webcam stream
    if (webcamStream) {
        let tracks = webcamStream.getTracks();
        tracks.forEach(track => track.stop());
        webcamStream = null;
        if (window.app) app.webcamStream = null;
    }
    const video = document.getElementById('webcamFeed');
    if (video) {
        video.srcObject = null;
        video.style.display = "none";
        document.getElementById('webcamToggleBtn').textContent = "Start Webcam";
    }

    // Also stop the fullscreen webcam stream if active
    const fullscreenVideo = document.getElementById('fullscreenWebcamFeed');
    if (fullscreenVideo && fullscreenVideo.srcObject) {
        let fullscreenTracks = fullscreenVideo.srcObject.getTracks();
        fullscreenTracks.forEach(track => track.stop());
        fullscreenVideo.srcObject = null;
    }
}

function toggleWebcam() {
    const video = document.getElementById('webcamFeed');
    if (video.style.display === "none" || !video.srcObject) {
        startWebcam();
    } else {
        stopWebcam();
    }
}

function toggleFullscreenWebcam() {
    const modal = document.getElementById('fullscreenWebcamModal');
    const fullscreenVideo = document.getElementById('fullscreenWebcamFeed');
    if (!modal || !fullscreenVideo) return;
    if (modal.classList.contains('hidden')) {
        // Show fullscreen modal
        modal.classList.remove('hidden');
        // Use same stream if active
        const video = document.getElementById('webcamFeed');
        if (video.srcObject) {
            fullscreenVideo.srcObject = video.srcObject;
        } else {
            // If not active, prompt for webcam
            startFullscreenWebcam();
        }
        if (window.app) app.isFullscreenWebcam = true;
        document.addEventListener('keydown', handleEscapeKey);
    } else {
        // Hide modal and stop fullscreen webcam stream
        modal.classList.add('hidden');
        if (fullscreenVideo.srcObject) {
            let tracks = fullscreenVideo.srcObject.getTracks();
            tracks.forEach(track => track.stop());
            fullscreenVideo.srcObject = null;
        }
        if (window.app) app.isFullscreenWebcam = false;
        document.removeEventListener('keydown', handleEscapeKey);
    }
}

async function startFullscreenWebcam() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        document.getElementById('fullscreenWebcamFeed').srcObject = stream;
    } catch (err) {
        // Optionally show error
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