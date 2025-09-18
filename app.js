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
            // ... rest of workoutPlan unchanged ...
            // Copy all weeks as in your existing code!
            // (For brevity, omitted here.)
        };

        // Exercise instructions database
        this.exerciseInstructions = {
            // ... unchanged ...
            // Copy all instructions as in your existing code!
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

    // ... rest of class unchanged ...
    // All other methods remain as in your current code

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