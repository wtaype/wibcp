import '@fortawesome/fontawesome-free/css/all.min.css';
import $ from 'jquery';

/*
=== WIBCP - Core Application & Timer System ===
Main application class with timer functionality and browser detection
Enhanced version by @wtaype - 2025
*/

class MIBCPApp {
    constructor() {
        // Core properties
        this.isRecognitionActive = false;
        this.recognition = null;
        this.isTimerRunning = false;
        this.currentTimer = null;
        this.remainingSeconds = 60;
        this.startTime = null;
        this.progressCircle = null;
        this.browser = this.detectBrowser();
        this.detectionEnabled = false;
        this.originalTitle = document.title;
        this.titleUpdateInterval = null;
        
        // Fixed phrases - no user management
        this.startTriggers = [
            'momento',
            'un momento',
            'espera un momento',
            'un momento en la línea',
            'dame un minuto en la línea',
            'dame un minuto en la línea',
            'me esperas un momento en la linea',
        ];
        
        this.stopTriggers = [
            'gracias',
            'disculpe la demora',
            'gracias por esperar',
            'gracias por tiempo de espera',
            'muchas gracias por el tiempo',
            'Disculpa por la demora, gracias por la espera',
        ];
        
        this.init();
    }
    
    init() {
        this.setupProgressCircle();
        this.setupEventListeners();
        this.initSpeechRecognition();
        this.displayPhrases();
        this.setupDynamicTitle();
        this.showInitMessage();
    }
    
    detectBrowser() {
        const userAgent = navigator.userAgent;
        
        if (userAgent.includes('Edg/')) {
            return 'edge';
        } else if (userAgent.includes('Chrome/') && !userAgent.includes('Edg')) {
            return 'chrome';
        } else if (userAgent.includes('Firefox/')) {
            return 'firefox';
        } else if (userAgent.includes('Safari/') && !userAgent.includes('Chrome')) {
            return 'safari';
        }
        
        return 'unknown';
    }
    
    setupProgressCircle() {
        this.progressCircle = $('.progress-ring-circle')[0];
        const circumference = 2 * Math.PI * 80;
        this.progressCircle.style.strokeDasharray = circumference;
        this.progressCircle.style.strokeDashoffset = 0;
    }
    
    setupDynamicTitle() {
        // Update title every second when timer is running
        this.titleUpdateInterval = setInterval(() => {
            this.updateDynamicTitle();
        }, 1000);
        
        // Update title on visibility change
        document.addEventListener('visibilitychange', () => {
            this.updateDynamicTitle();
        });
        
        console.log('📱 Dynamic title system initialized');
    }
    
    updateDynamicTitle() {
        let newTitle = this.originalTitle;
        
        if (this.isTimerRunning) {
            // Show countdown in title - SUPER USEFUL!
            newTitle = `⏱️ ${this.remainingSeconds}s - ${this.originalTitle}`;
            
            if (this.remainingSeconds <= 10) {
                newTitle = `🔥 ${this.remainingSeconds}s - ${this.originalTitle}`;
            }
        } else if (!this.isRecognitionActive && this.browser !== 'chrome') {
            // Microphone available but not active
            newTitle = `🎤 Listo - ${this.originalTitle}`;
        } else if (this.isRecognitionActive) {
            // Microphone active and listening
            newTitle = `🎤 Escuchando - ${this.originalTitle}`;
        } else if (this.browser === 'chrome') {
            // Chrome detected - suggest better browser
            newTitle = `Estas en Chrome! - ${this.originalTitle}`;
        }
        
        // Only update if changed
        if (document.title !== newTitle) {
            document.title = newTitle;
        }
    }
    
    setupEventListeners() {
        // Timer controls
        $('#startTimer').on('click', () => this.startTimer());
        $('#stopTimer').on('click', () => this.stopTimer());
        $('#resetTimer').on('click', () => this.resetTimer());
        
        // Detection toggle
        $('#toggleDetection').on('click', () => this.toggleDetection());
        
        // Global controls
        $('#clearAllData').on('click', () => this.clearAllData());
        
        // Keyboard shortcuts
        $(document).on('keydown', (e) => {
            if ($(e.target).is('input, textarea')) return;
            
            switch(e.code) {
                case 'Space':
                    e.preventDefault();
                    this.isTimerRunning ? this.stopTimer() : this.startTimer();
                    break;
                case 'KeyR':
                    e.preventDefault();
                    this.resetTimer();
                    break;
                case 'KeyD':
                    e.preventDefault();
                    this.toggleDetection();
                    break;
                case 'KeyG':
                    e.preventDefault();
                    if (typeof this.openGenesysCloud === 'function') {
                        this.openGenesysCloud();
                    }
                    break;
            }
            
            // Image shortcuts (1-4)
            if (e.key >= '1' && e.key <= '4') {
                const slot = parseInt(e.key);
                $(`.image-box[data-slot="${slot}"] .image-dropzone`).click();
            }
        });
        
        // Save before unload
        $(window).on('beforeunload', () => {
            this.cleanupResources();
        });
    }
    
    cleanupResources() {
        // Save data
        if (typeof this.saveNotes === 'function') {
            this.saveNotes();
        }
        if (typeof this.saveGenesysUrl === 'function') {
            this.saveGenesysUrl();
        }
        if (typeof this.saveDetectionPreference === 'function') {
            this.saveDetectionPreference();
        }
        
        // Cleanup dynamic title interval
        if (this.titleUpdateInterval) {
            clearInterval(this.titleUpdateInterval);
        }
        
        // Reset title to original
        document.title = this.originalTitle;
        
        // Stop recognition
        if (this.isRecognitionActive && this.recognition) {
            this.recognition.stop();
        }
        
        // Cleanup blob URLs if available
        if (typeof this.cleanupAllBlobUrls === 'function') {
            this.cleanupAllBlobUrls();
        }
    }
    
    initSpeechRecognition() {
        if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
            console.warn('Speech Recognition not supported');
            this.showMessage('🎤 Reconocimiento de voz no disponible', 'warning');
            $('#toggleDetection').prop('disabled', true).addClass('disabled');
            this.updateDynamicTitle();
            return;
        }
        
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        this.recognition = new SpeechRecognition();
        
        this.recognition.continuous = true;
        this.recognition.interimResults = false;
        this.recognition.lang = 'es-ES';
        
        this.recognition.onstart = () => {
            console.log('🎤 Speech recognition started');
            $('#toggleDetection').addClass('active');
            this.updateDetectionStatus('Escuchando...');
            this.updateDynamicTitle();
        };
        
        this.recognition.onresult = (event) => {
            const transcript = event.results[event.results.length - 1][0].transcript.toLowerCase().trim();
            console.log('🎤 Speech detected:', transcript);
            this.processSpeechResult(transcript);
        };
        
        this.recognition.onerror = (event) => {
            console.error('🎤 Speech error:', event.error);
            
            if (event.error === 'not-allowed') {
                this.showMessage('🚫 Permisos de micrófono denegados', 'error');
                this.isRecognitionActive = false;
                $('#toggleDetection').removeClass('active');
                this.updateDetectionStatus('Sin permisos');
                this.updateDynamicTitle();
            } else if (event.error !== 'no-speech') {
                this.restartRecognition();
            }
        };
        
        this.recognition.onend = () => {
            if (this.isRecognitionActive) {
                this.restartRecognition();
            } else {
                $('#toggleDetection').removeClass('active');
                this.updateDetectionStatus('Inactivo');
                this.updateDynamicTitle();
            }
        };
    }
    
    showChromeWarningOnDetectionClick() {
        // Only show warning when trying to activate detection in Chrome
        const warningHtml = `
            <div class="smart-browser-warning glass-card" id="smartBrowserWarning">
                <div class="warning-content">
                    <div class="warning-icon">⚠️</div>
                    <h3>Te recomiendo Edge para esta función </h3>
                    <p><strong>En Chrome:</strong> puedes usar manualmente</p>
                    
                    <div class="recommendation">
                        <div class="browser-setup">
                            <div class="browser-item">
                                <i class="fab fa-chrome"></i>
                                <span>Chrome: Genesys Cloud (llamadas)</span>
                            </div>
                            <div class="browser-item recommended">
                                <i class="fab fa-edge"></i>
                                <span>Edge: WIBCP (contador + detección)</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="warning-actions">
                        <button onclick="app.openInEdge()" class="btn-primary">
                            <i class="fab fa-edge"></i> Abrir en Edge
                        </button>
                        <button onclick="app.dismissWarning()" class="btn-secondary">
                            Entendido
                        </button>
                    </div>
                    
                    <div class="auto-dismiss-counter">
                        Se cerrará automáticamente en <span id="dismissCounter">10</span>s
                    </div>
                </div>
            </div>
        `;
        
        $('body').prepend(warningHtml);
        
        // Auto-dismiss after 10 seconds
        let countdown = 10;
        const countdownInterval = setInterval(() => {
            countdown--;
            $('#dismissCounter').text(countdown);
            
            if (countdown <= 0) {
                clearInterval(countdownInterval);
                this.dismissWarning();
            }
        }, 1000);
        
        console.log('⚠️ Smart Chrome warning shown (10s auto-dismiss)');
    }
    
    dismissWarning() {
        $('#smartBrowserWarning').fadeOut(400, () => {
            $('#smartBrowserWarning').remove();
        });
    }
    
    openInEdge() {
        const currentUrl = window.location.href;
        const edgeUrl = `microsoft-edge:${currentUrl}`;
        
        window.location.href = edgeUrl;
        
        setTimeout(() => {
            this.showMessage('💡 Copia esta URL en Microsoft Edge para mejor experiencia', 'info');
        }, 1000);
        
        this.dismissWarning();
    }
    
    toggleDetection() {
        // Show Chrome warning only when trying to activate detection
        if (this.browser === 'chrome' && window.innerWidth > 960){
            this.showChromeWarningOnDetectionClick();
            return;
        }
        
        if (!this.recognition) {
            this.showMessage('🚫 Reconocimiento de voz no disponible', 'warning');
            return;
        }
        
        this.isRecognitionActive = !this.isRecognitionActive;
        this.detectionEnabled = this.isRecognitionActive;
        
        if (this.isRecognitionActive) {
            try {
                this.recognition.start();
                this.showMessage('🎤 Detección automática activada', 'success');
            } catch (e) {
                console.error('Failed to start recognition:', e);
                this.isRecognitionActive = false;
                this.detectionEnabled = false;
                this.showMessage('❌ Error al iniciar reconocimiento', 'error');
            }
        } else {
            this.recognition.stop();
            $('#toggleDetection').removeClass('active');
            this.updateDetectionStatus('Inactivo');
            this.showMessage('🔇 Detección automática desactivada', 'info');
        }
        
        this.updateDynamicTitle();
    }
    
    updateDetectionStatus(status) {
        const $button = $('#toggleDetection');
        const $span = $button.find('span');
        const originalText = $span.data('original') || $span.text();
        
        if (!$span.data('original')) {
            $span.data('original', originalText);
        }
        
        $span.text(status === 'Inactivo' ? originalText : status);
    }
    
    restartRecognition() {
        if (this.isRecognitionActive && this.recognition) {
            setTimeout(() => {
                try {
                    this.recognition.start();
                } catch (e) {
                    console.log('🎤 Recognition restart failed:', e.message);
                }
            }, 1500);
        }
    }
    
    processSpeechResult(transcript) {
        const normalizedTranscript = this.normalizeText(transcript);
        
        // Check start triggers
        const startMatch = this.startTriggers.some(trigger => 
            normalizedTranscript.includes(this.normalizeText(trigger))
        );
        
        // Check stop triggers
        const stopMatch = this.stopTriggers.some(trigger => 
            normalizedTranscript.includes(this.normalizeText(trigger))
        );
        
        if (startMatch && !this.isTimerRunning) {
            console.log('✅ Start trigger detected:', transcript);
            this.startTimer();
            this.showMessage(`🎯 "${transcript}" detectado`, 'success');
        } else if (stopMatch && this.isTimerRunning) {
            console.log('⏹️ Stop trigger detected:', transcript);
            this.stopTimer();
            this.showMessage(`🎯 "${transcript}" detectado`, 'success');
        }
    }
    
    normalizeText(text) {
        return text.toLowerCase()
                   .normalize('NFD')
                   .replace(/[\u0300-\u036f]/g, '')
                   .replace(/[^\w\s]/g, '')
                   .trim();
    }
    
    startTimer() {
        if (this.isTimerRunning) return;
        
        this.isTimerRunning = true;
        this.remainingSeconds = 60;
        this.startTime = new Date();
        
        $('#timerStatus').text('Contando tiempo...');
        
        this.currentTimer = setInterval(() => {
            this.remainingSeconds--;
            this.updateTimerDisplay();
            this.updateDynamicTitle(); // Update title with countdown!
            
            if (this.remainingSeconds <= 0) {
                this.finishTimer();
            }
        }, 1000);
        
        this.showMessage('⏱️ Timer iniciado', 'success');
        this.updateDynamicTitle();
        console.log('⏱️ Timer started:', this.startTime.toISOString());
    }
    
    updateTimerDisplay() {
        $('#timerValue').text(this.remainingSeconds);
        
        // Update progress ring
        const circumference = 2 * Math.PI * 80;
        const progress = (60 - this.remainingSeconds) / 60;
        const offset = circumference * progress;
        this.progressCircle.style.strokeDashoffset = offset;
        
        // Warning state
        if (this.remainingSeconds <= 10) {
            $('.progress-ring-circle').addClass('warning');
            $('#timerValue').css('color', 'var(--warning-color)');
        } else {
            $('.progress-ring-circle').removeClass('warning');
            $('#timerValue').css('color', 'var(--text-primary)');
        }
    }
    
    finishTimer() {
        this.stopTimer();
        this.showMessage('⏰ ¡Tiempo completado!', 'warning');
        
        // Enhanced visual and audio notification
        $('body').addClass('timer-finished');
        setTimeout(() => $('body').removeClass('timer-finished'), 3000);
        
        // Flash title for attention
        document.title = '🔥 ¡COMPLETADO! - ' + this.originalTitle;
        setTimeout(() => {
            this.updateDynamicTitle();
        }, 3000);
        
        this.playNotificationSound();
    }
    
    playNotificationSound() {
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.value = 800;
            oscillator.type = 'sine';
            
            gainNode.gain.setValueAtTime(0, audioContext.currentTime);
            gainNode.gain.linearRampToValueAtTime(0.1, audioContext.currentTime + 0.01);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.5);
            
        } catch (e) {
            console.log('🔊 Audio notification not supported');
        }
    }
    
    stopTimer() {
        if (!this.isTimerRunning) return;
        
        clearInterval(this.currentTimer);
        this.isTimerRunning = false;
        
        const endTime = new Date();
        const durationSeconds = 60 - this.remainingSeconds;
        
        if (durationSeconds > 0 && typeof this.addToHistory === 'function') {
            this.addToHistory(this.startTime, endTime, durationSeconds);
            this.showMessage(`⏹️ Duración: ${this.formatDuration(durationSeconds)}`, 'info');
        }
        
        this.resetTimer();
        this.updateDynamicTitle();
        console.log('⏹️ Timer stopped:', durationSeconds, 'seconds');
    }
    
    resetTimer() {
        clearInterval(this.currentTimer);
        this.isTimerRunning = false;
        this.remainingSeconds = 60;
        this.startTime = null;
        
        $('#timerValue').text('60');
        $('#timerStatus').text('Listo para iniciar');
        
        // Reset progress ring
        this.progressCircle.style.strokeDashoffset = 0;
        $('.progress-ring-circle').removeClass('warning');
        $('#timerValue').css('color', 'var(--text-primary)');
        
        this.updateDynamicTitle();
    }
    
    formatDuration(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return mins > 0 ? `${mins}m ${secs}s` : `${secs}s`;
    }
    
    displayPhrases() {
        // Display start phrases
        const startHtml = this.startTriggers.map(phrase => 
            `<span class="phrase-item default">${phrase}</span>`
        ).join('');
        $('#startPhrasesList').html(startHtml);
        
        // Display stop phrases  
        const stopHtml = this.stopTriggers.map(phrase => 
            `<span class="phrase-item default">${phrase}</span>`
        ).join('');
        $('#stopPhrasesList').html(stopHtml);
    }
    
    // Utility methods
    saveToLS(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (e) {
            console.error('💾 Save error:', e);
            return false;
        }
    }
    
    loadFromLS(key, defaultValue = null) {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : defaultValue;
        } catch (e) {
            console.error('💾 Load error:', e);
            return defaultValue;
        }
    }
    
    removeLS(key) {
        try {
            localStorage.removeItem(key);
            return true;
        } catch (e) {
            console.error('💾 Remove error:', e);
            return false;
        }
    }
    
    showMessage(message, type = 'info') {
        const icons = {
            success: 'fas fa-check-circle',
            warning: 'fas fa-exclamation-triangle', 
            error: 'fas fa-exclamation-circle',
            info: 'fas fa-info-circle'
        };
        
        const toast = $(`
            <div class="toast toast-${type}">
                <i class="${icons[type]}"></i>
                <span>${message}</span>
            </div>
        `);
        
        $('body').append(toast);
        
        setTimeout(() => toast.addClass('show'), 100);
        setTimeout(() => {
            toast.removeClass('show');
            setTimeout(() => toast.remove(), 300);
        }, 3500);
    }
    
    showInitMessage() {
        setTimeout(() => {
            const browserMsg = this.browser === 'chrome' ? 
                'Estas en Google Chrome' :
                `Perfecto en ${this.browser.toUpperCase()}`;
                // Chrome detectado - Recomendamos Edge
            this.showMessage(`${browserMsg}`, 'success');
        }, 2000);
    }
}

// Initialize app
$(document).ready(() => {
    window.app = new MIBCPApp();
    
    const shortcuts = window.app.browser === 'chrome' ? 
        '├─ ⚠️  Detección con advertencia (Chrome)' :
        '├─ ⌨️  D: Toggle detección';
        
    console.log(`
🎯 WIBCP v2.2 - Smart Call Center Tool
├─ ⌨️  Espacio: Start/Stop timer
├─ ⌨️  R: Reset timer  
${shortcuts}
├─ ⌨️  G: Abrir Genesys Cloud
├─ ⌨️  1-4: Focus image slots
├─ 🌐 Browser: ${window.app.browser}
├─ 📱 Dynamic title: ENABLED
└─ 🧠 Smart warnings: ON-DEMAND
    `);
});

// Enhanced styles with smart warning improvements
$('<style>').html(`
    .toast {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 12px;
        padding: 1rem 1.5rem;
        display: flex;
        align-items: center;
        gap: 0.75rem;
        z-index: 3000;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
        max-width: 350px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    }
    
    .toast.show {
        opacity: 1;
        transform: translateX(0);
    }
    
    .toast-success { border-left: 4px solid var(--success-color); }
    .toast-warning { border-left: 4px solid var(--warning-color); }
    .toast-error { border-left: 4px solid var(--danger-color); }
    .toast-info { border-left: 4px solid var(--primary-color); }
    
    .toast span { color: var(--text-primary); }
    
    .timer-finished {
        animation: timerFinishPulse 3s ease-in-out;
    }
    
    @keyframes timerFinishPulse {
        0%, 100% { background: inherit; }
        25%, 75% { background: rgba(245, 158, 11, 0.1); }
        50% { background: rgba(245, 158, 11, 0.15); }
    }
    
    /* Smart Browser Warning Styles */
    .smart-browser-warning {
        position: fixed;
        top: 10vh;
        left: 30vw; 
        z-index: 5000;
        width: 90%;
        max-width: 600px;
        border-radius: 5vh;
    }
    
    .warning-content {
        text-align: center;
        padding: 2rem;
    }
    
    .warning-icon {
        font-size: 3rem;
        margin-bottom: 1rem;
    }
    
    .warning-content h3 {
        color: var(--text-primary);
        margin-bottom: 1rem;
        font-size: 1.2rem;
    }
    
    .recommendation {
        margin: 1.5rem 0;
        padding: 1.5rem;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 12px;
        border: 1px solid rgba(255, 255, 255, 0.15);
    }
    
    .browser-setup {
        display: flex;
        gap: 2rem;
        justify-content: center;
        align-items: center;
    }
    
    .browser-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        padding: 1rem;
        border-radius: 10px;
        background: rgba(255, 255, 255, 0.05);
        font-size: 0.9rem;
    }
    
    .browser-item.recommended {
        background: rgba(16, 185, 129, 0.1);
        border: 2px solid rgba(16, 185, 129, 0.3);
    }
    
    .browser-item i {
        font-size: 2rem;
    }
    
    .warning-actions {
        display: flex;
        gap: 1rem;
        justify-content: center;
        margin: 1.5rem 0;
    }
    
    .auto-dismiss-counter {
        margin-top: 1rem;
        padding: 0.75rem;
        background: rgba(245, 158, 11, 0.1);
        border-radius: 8px;
        color: var(--warning-color);
        font-size: 0.85rem;
        font-weight: 600;
        border: 1px solid rgba(245, 158, 11, 0.2);
    }
    
    #dismissCounter {
        color: var(--danger-color);
        font-weight: 700;
    }
    
    @keyframes smartWarningSlideIn {
        from {
            opacity: 0;
            transform: translate(-50%, -60%) scale(0.9);
        }
        to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
    }
    
    .smart-browser-warning::before {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: hsl(0 100% 89% / 1);
        z-index: -1;
        border-radius: 5vh;
        animation: overlayFadeIn 0.3s ease-out;
    }
    
    @keyframes overlayFadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    @media (max-width: 768px) {
        .smart-browser-warning {
            width: 95%;
            margin: 1rem;
        }
        
        .browser-setup {
            flex-direction: column;
            gap: 1rem;
        }
        
        .warning-actions {
            flex-direction: column;
        }
        
        .warning-content {
            padding: 1.5rem;
        }
        
        .toast {
            bottom: 10px;
            right: 10px;
            left: 10px;
            max-width: none;
        }
    }
`).appendTo('head');

console.log('🎯 WIBCP Core with Dynamic Title & Smart Warnings loaded! ⏱️🧠📱 by @wtaype');

/*
=== WIBCP - History Management System ===
Enhanced history tracking with smart analytics and browser awareness
Created by @wtaype - 2025
*/

// Extend MIBCPApp with history functionality
$.extend(MIBCPApp.prototype, {
    
    // Initialize history system
    initHistorySystem() {
        this.loadDetectionPreference();
        this.loadData();
    },
    
    loadDetectionPreference() {
        const saved = this.loadFromLS('mibcp_detection_enabled', false);
        this.detectionEnabled = saved;
        
        if (saved && this.browser !== 'chrome') {
            setTimeout(() => {
                if (!this.isRecognitionActive) {
                    this.toggleDetection();
                }
            }, 1500);
        }
        
        console.log('🎤 Detection preference loaded:', saved ? 'enabled' : 'disabled');
    },
    
    saveDetectionPreference() {
        this.saveToLS('mibcp_detection_enabled', this.detectionEnabled);
    },
    
    loadData() {
        this.renderHistory();
        if (typeof this.loadNotes === 'function') {
            this.loadNotes();
        }
        if (typeof this.loadImages === 'function') {
            this.loadImages();
        }
        if (typeof this.loadGenesysUrl === 'function') {
            this.loadGenesysUrl();
        }
    },
    
    addToHistory(startTime, endTime, durationSeconds) {
        const historyItem = {
            id: Date.now(),
            startAt: startTime.toISOString(),
            endAt: endTime.toISOString(), 
            durationSeconds: durationSeconds,
            browser: this.browser,
            detectionUsed: this.isRecognitionActive,
            timestamp: new Date().getTime()
        };
        
        let history = this.loadFromLS('mibcp_history', []);
        history.unshift(historyItem);
        
        // Keep only last 5
        if (history.length > 5) {
            history = history.slice(0, 5);
        }
        
        this.saveToLS('mibcp_history', history);
        this.renderHistory();
        
        console.log('📊 Added to history:', historyItem);
        
        // Update dynamic title after history addition
        setTimeout(() => {
            this.updateDynamicTitle();
        }, 100);
    },
    
    renderHistory() {
        const history = this.loadFromLS('mibcp_history', []);
        const $historyList = $('#historyList');
        
        if (history.length === 0) {
            $historyList.html(`
                <div class="empty-state">
                    <i class="fas fa-clock"></i>
                    <h4>No hay registros</h4>
                    <p>Los tiempos aparecerán aquí automáticamente</p>
                    ${this.browser === 'chrome' ? 
                        '<small style="color: var(--warning-color);">💡 Para detección automática, usa Edge</small>' : 
                        '<small>Activa la detección de voz para registro automático</small>'
                    }
                </div>
            `);
            return;
        }
        
        const historyHtml = history.map((item, index) => {
            const duration = this.formatDuration(item.durationSeconds);
            const startTime = new Date(item.startAt).toLocaleTimeString('es-ES', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            });
            const endTime = new Date(item.endAt).toLocaleTimeString('es-ES', {
                hour: '2-digit', 
                minute: '2-digit',
                second: '2-digit'
            });
            
            // Smart detection indicator
            const detectionIcon = item.detectionUsed ? 
                '<i class="fas fa-microphone detection-used" title="Detección automática usada"></i>' :
                '<i class="fas fa-hand-paper detection-manual" title="Control manual"></i>';
            
            // Duration classification
            let durationClass = 'duration-normal';
            if (item.durationSeconds <= 15) durationClass = 'duration-short';
            else if (item.durationSeconds >= 45) durationClass = 'duration-long';
            
            return `
                <div class="history-item ${durationClass} fade-in-up" data-id="${item.id}" style="animation-delay: ${index * 100}ms">
                    <div class="history-main">
                        <div class="history-duration">${duration}</div>
                        <div class="history-times">
                            <span><i class="fas fa-play"></i> ${startTime}</span>
                            <span><i class="fas fa-stop"></i> ${endTime}</span>
                        </div>
                        <div class="history-meta">
                            ${detectionIcon}
                            <span class="browser-badge ${item.browser || 'unknown'}">${(item.browser || 'N/A').toUpperCase()}</span>
                        </div>
                    </div>
                    <button class="history-delete" onclick="app.deleteHistoryItem(${item.id})" title="Eliminar registro">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            `;
        }).join('');
        
        $historyList.html(historyHtml);
        this.renderSmartHistoryStats(history);
    },
    
    renderSmartHistoryStats(history) {
        if (history.length === 0) return;
        
        const totalTime = history.reduce((sum, item) => sum + item.durationSeconds, 0);
        const avgTime = Math.round(totalTime / history.length);
        const longestCall = Math.max(...history.map(item => item.durationSeconds));
        const autoDetected = history.filter(item => item.detectionUsed).length;
        const efficiency = autoDetected > 0 ? Math.round((autoDetected / history.length) * 100) : 0;
        
        let $statsContainer = $('.history-stats');
        if (!$statsContainer.length) {
            $statsContainer = $('<div class="history-stats"></div>');
            $('#historyList').before($statsContainer);
        }
        
        $statsContainer.html(`
            <div class="stats-grid">
                <div class="stat-item">
                    <div class="stat-value">${history.length}</div>
                    <div class="stat-label">Llamadas</div>
                </div>
                <div class="stat-item">
                    <div class="stat-value">${this.formatDuration(avgTime)}</div>
                    <div class="stat-label">Promedio</div>
                </div>
                <div class="stat-item">
                    <div class="stat-value">${this.formatDuration(longestCall)}</div>
                    <div class="stat-label">Más largo</div>
                </div>
                <div class="stat-item smart-stat">
                    <div class="stat-value">${efficiency}%</div>
                    <div class="stat-label">
                        <i class="fas fa-brain"></i> Smart
                    </div>
                </div>
            </div>
            <div class="stats-insights">
                ${this.generateSmartInsights(history)}
            </div>
        `);
    },
    
    generateSmartInsights(history) {
        const insights = [];
        const autoDetected = history.filter(item => item.detectionUsed).length;
        const avgDuration = history.reduce((sum, item) => sum + item.durationSeconds, 0) / history.length;
        const shortCalls = history.filter(item => item.durationSeconds <= 15).length;
        
        // Smart insights based on data
        if (autoDetected === 0 && this.browser !== 'chrome') {
            insights.push('🎤 Tip: Activa la detección automática para mayor eficiencia');
        }
        
        if (avgDuration > 45) {
            insights.push('⏱️ Tiempos de espera largos detectados');
        }
        
        if (shortCalls >= 2) {
            insights.push('⚡ Buena eficiencia en llamadas rápidas');
        }
        
        if (this.browser === 'chrome' && history.length >= 2) {
            insights.push('🌐 Considera Edge para detección automática');
        }
        
        if (insights.length === 0) {
            insights.push('📊 Estadísticas normales de call center');
        }
        
        return insights.map(insight => `<span class="insight">${insight}</span>`).join('');
    },
    
    deleteHistoryItem(id) {
        let history = this.loadFromLS('mibcp_history', []);
        const item = history.find(h => h.id === id);
        
        if (!item) return;
        
        const detectionMethod = item.detectionUsed ? '(auto)' : '(manual)';
        const browserInfo = item.browser ? `[${item.browser.toUpperCase()}]` : '';
        const confirmed = confirm(`¿Eliminar registro de ${this.formatDuration(item.durationSeconds)} ${detectionMethod} ${browserInfo}?`);
        if (!confirmed) return;
        
        history = history.filter(h => h.id !== id);
        this.saveToLS('mibcp_history', history);
        this.renderHistory();
        
        this.showMessage('🗑️ Registro eliminado', 'success');
        
        // Update title after deletion
        setTimeout(() => {
            this.updateDynamicTitle();
        }, 100);
    },
    
    clearAllData() {
        const history = this.loadFromLS('mibcp_history', []);
        const images = this.loadFromLS('mibcp_images', []);
        const notes = this.loadFromLS('mibcp_notes', { text: '' });
        const genesysUrl = this.loadFromLS('mibcp_genesys_url', '');
        const detectionPref = this.loadFromLS('mibcp_detection_enabled', false);
        
        const totalCalls = history.length;
        const totalTime = history.reduce((sum, item) => sum + item.durationSeconds, 0);
        const smartUsage = history.filter(item => item.detectionUsed).length;
        
        const confirmMessage = `⚠️ ELIMINAR TODOS LOS DATOS

📊 Resumen de datos a eliminar:
• ${totalCalls} registros del historial
• ${this.formatDuration(totalTime)} tiempo total registrado
• ${smartUsage} llamadas con detección automática
• ${images.length} imágenes guardadas  
• Notas${notes.text ? ' con contenido' : ' vacías'}
• URL de Genesys Cloud${genesysUrl ? ' guardada' : ''}
• Preferencia de detección${detectionPref ? ' (activada)' : ' (desactivada)'}

¿Continuar con la eliminación completa?`;
        
        const confirmed = confirm(confirmMessage);
        if (!confirmed) return;
        
        // Enhanced double confirmation
        const finalConfirm = confirm('🔴 CONFIRMACIÓN FINAL\n\n¿Estás COMPLETAMENTE seguro?\n\nSe perderán todas las estadísticas y configuraciones.');
        if (!finalConfirm) return;
        
        try {
            // Clear all localStorage data
            const keysCleared = [];
            ['mibcp_history', 'mibcp_notes', 'mibcp_images', 'mibcp_genesys_url', 'mibcp_detection_enabled'].forEach(key => {
                if (this.removeLS(key)) {
                    keysCleared.push(key);
                }
            });
            
            // Reset UI components
            this.renderHistory();
            $('#notesArea').val('');
            $('#genesysUrl').val('https://apps.mypurecloud.com');
            
            if (typeof this.clearAllImages === 'function') {
                this.clearAllImages();
            }
            if (typeof this.updateNotesCounter === 'function') {
                this.updateNotesCounter(0, 0, 1);
            }
            
            // Reset detection preference and update title
            this.detectionEnabled = false;
            if (this.isRecognitionActive) {
                this.toggleDetection();
            }
            
            // Reset dynamic title
            this.updateDynamicTitle();
            
            this.showMessage(`🧹 ${totalCalls} registros y ${keysCleared.length} configuraciones eliminadas`, 'success');
            
            // Enhanced visual feedback
            $('body').addClass('data-cleared');
            setTimeout(() => $('body').removeClass('data-cleared'), 2000);
            
            console.log('🧹 Complete data reset:', {
                recordsDeleted: totalCalls,
                timeCleared: this.formatDuration(totalTime),
                keysCleared: keysCleared.length,
                browser: this.browser
            });
            
        } catch (error) {
            console.error('Error clearing data:', error);
            this.showMessage('❌ Error al eliminar algunos datos. Intenta nuevamente.', 'error');
        }
    },
    
    // Get comprehensive statistics
    getHistoryAnalytics() {
        const history = this.loadFromLS('mibcp_history', []);
        
        if (history.length === 0) return null;
        
        const totalTime = history.reduce((sum, item) => sum + item.durationSeconds, 0);
        const avgTime = totalTime / history.length;
        const autoDetected = history.filter(item => item.detectionUsed).length;
        const shortCalls = history.filter(item => item.durationSeconds <= 15).length;
        const longCalls = history.filter(item => item.durationSeconds >= 45).length;
        
        return {
            totalCalls: history.length,
            totalTime: totalTime,
            avgTime: avgTime,
            autoDetectedPercent: Math.round((autoDetected / history.length) * 100),
            efficiency: {
                short: shortCalls,
                long: longCalls,
                normal: history.length - shortCalls - longCalls
            },
            browserUsage: {
                chrome: history.filter(item => item.browser === 'chrome').length,
                edge: history.filter(item => item.browser === 'edge').length,
                other: history.filter(item => !['chrome', 'edge'].includes(item.browser)).length
            },
            lastUsed: history[0]?.startAt || null
        };
    }
});

// Initialize history system when app is ready
$(document).ready(() => {
    if (window.app && typeof window.app.initHistorySystem === 'function') {
        window.app.initHistorySystem();
    }
});

// Enhanced history styles with smart insights
$('<style>').html(`
    .empty-state {
        text-align: center;
        padding: 3rem 1.5rem;
        color: var(--text-secondary);
    }
    
    .empty-state i {
        font-size: 3rem;
        margin-bottom: 1rem;
        opacity: 0.5;
    }
    
    .empty-state h4 {
        margin-bottom: 0.5rem;
        color: var(--text-primary);
        font-weight: 600;
    }
    
    .empty-state small {
        display: block;
        margin-top: 1rem;
        font-size: 0.8rem;
        padding: 0.5rem 1rem;
        background: rgba(255, 255, 255, 0.05);
        border-radius: 20px;
        border: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .history-stats {
        margin-bottom: 1.5rem;
        padding: 1rem;
        background: rgba(255, 255, 255, 0.08);
        border-radius: var(--border-radius-sm);
        border: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .stats-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1rem;
        text-align: center;
        margin-bottom: 1rem;
    }
    
    .stat-value {
        font-size: 1.2rem;
        font-weight: 700;
        color: var(--primary-color);
        margin-bottom: 0.25rem;
    }
    
    .stat-label {
        font-size: 0.75rem;
        color: var(--text-secondary);
        font-weight: 500;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.25rem;
    }
    
    .smart-stat .stat-value {
        color: var(--success-color);
    }
    
    .stats-insights {
        padding-top: 1rem;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
    }
    
    .insight {
        background: rgba(102, 126, 234, 0.1);
        color: var(--primary-color);
        padding: 0.25rem 0.75rem;
        border-radius: 15px;
        font-size: 0.75rem;
        font-weight: 500;
        border: 1px solid rgba(102, 126, 234, 0.2);
    }
    
    .history-item {
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.15);
        border-radius: var(--border-radius-sm);
        padding: 1.25rem;
        margin-bottom: 0.75rem;
        transition: var(--transition);
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .history-item:hover {
        background: rgba(255, 255, 255, 0.2);
        transform: translateX(4px);
    }
    
    /* Duration-based styling */
    .history-item.duration-short {
        border-left: 3px solid var(--success-color);
    }
    
    .history-item.duration-long {
        border-left: 3px solid var(--warning-color);
    }
    
    .history-item.duration-normal {
        border-left: 3px solid var(--primary-color);
    }
    
    .history-duration {
        font-size: 1.4rem;
        font-weight: 700;
        color: var(--primary-color);
        margin-bottom: 0.5rem;
    }
    
    .duration-short .history-duration {
        color: var(--success-color);
    }
    
    .duration-long .history-duration {
        color: var(--warning-color);
    }
    
    .history-times {
        display: flex;
        gap: 1rem;
        font-size: 0.85rem;
        color: var(--text-secondary);
        margin-bottom: 0.5rem;
    }
    
    .history-times span {
        display: flex;
        align-items: center;
        gap: 0.25rem;
    }
    
    .history-meta {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        font-size: 0.8rem;
    }
    
    .detection-used {
        color: var(--success-color);
    }
    
    .detection-manual {
        color: var(--text-secondary);
    }
    
    .browser-badge {
        padding: 0.2rem 0.5rem;
        border-radius: 4px;
        font-size: 0.7rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
    }
    
    .browser-badge.edge {
        background: rgba(0, 120, 215, 0.2);
        color: #0078d7;
        border: 1px solid rgba(0, 120, 215, 0.3);
    }
    
    .browser-badge.chrome {
        background: rgba(234, 67, 53, 0.2);
        color: #ea4335;
        border: 1px solid rgba(234, 67, 53, 0.3);
    }
    
    .browser-badge.firefox {
        background: rgba(255, 149, 0, 0.2);
        color: #ff9500;
        border: 1px solid rgba(255, 149, 0, 0.3);
    }
    
    .browser-badge.unknown {
        background: rgba(156, 163, 175, 0.2);
        color: #6b7280;
        border: 1px solid rgba(156, 163, 175, 0.3);
    }
    
    .history-delete {
        background: transparent;
        border: none;
        color: var(--danger-color);
        cursor: pointer;
        padding: 0.5rem;
        border-radius: 8px;
        transition: var(--transition);
    }
    
    .history-delete:hover {
        background: rgba(239, 68, 68, 0.1);
        transform: scale(1.1);
    }
    
    .data-cleared {
        animation: smartDataClearedEffect 2s ease-in-out;
    }
    
    @keyframes smartDataClearedEffect {
        0%, 100% { 
            opacity: 1; 
            filter: brightness(1) hue-rotate(0deg);
        }
        25% { 
            opacity: 0.8; 
            filter: brightness(1.1) hue-rotate(10deg);
        }
        50% { 
            opacity: 0.9; 
            filter: brightness(0.95) hue-rotate(-10deg);
        }
        75% { 
            opacity: 0.85; 
            filter: brightness(1.05) hue-rotate(5deg);
        }
    }
    
    .fade-in-up {
        animation: fadeInUp 0.5s ease-out;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @media (max-width: 768px) {
        .stats-grid {
            grid-template-columns: repeat(2, 1fr);
        }
        
        .stats-insights {
            margin-top: 1rem;
        }
        
        .insight {
            font-size: 0.7rem;
        }
        
        .history-item {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
        }
        
        .history-delete {
            align-self: flex-end;
        }
        
        .history-times {
            flex-direction: column;
            gap: 0.25rem;
        }
        
        .history-meta {
            justify-content: space-between;
            width: 100%;
        }
    }
`).appendTo('head');

console.log('📊 WIBCP Smart History with Advanced Analytics loaded! 📈🧠 by @wtaype');

/*
=== WIBCP - Smart Notes Management System ===
Enhanced notes with browser-aware features and dynamic title integration
Created by @wtaype - 2025
*/

// Extend MIBCPApp with smart notes functionality
$.extend(MIBCPApp.prototype, {
    
    // Notes system properties
    autosaveTimer: null,
    lastSavedLength: 0,
    
    loadNotes() {
        const notesData = this.loadFromLS('mibcp_notes', { text: '', lastSavedAt: '' });
        $('#notesArea').val(notesData.text || '');
        
        this.setupSmartNotesHandlers();
        this.updateNotesCounter();
        this.lastSavedLength = (notesData.text || '').length;
        
        if (notesData.lastSavedAt) {
            const lastSaved = new Date(notesData.lastSavedAt);
            const timeAgo = this.getTimeAgo(lastSaved);
            console.log('📝 Notes loaded from:', lastSaved.toLocaleString('es-ES'), `(${timeAgo})`);
            
            // Show restore message if recent and has content
            if (notesData.text && new Date() - lastSaved < 24 * 60 * 60 * 1000) {
                setTimeout(() => {
                    // this.showMessage(`📝 Notas restauradas (${timeAgo})`, 'info');
                  console.log(`📝 Notas restauradas (${timeAgo})`);
                }, 1500);
            }
        }
    },
    
    setupSmartNotesHandlers() {
        const $notesArea = $('#notesArea');
        
        // Real-time input handler with smart features
        $notesArea.on('input', () => {
            this.showSaveStatus('saving');
            this.scheduleAutosave();
            this.updateNotesCounter();
            this.checkNotesChanges();
        });
        
        // Enhanced keyboard shortcuts
        $notesArea.on('keydown', (e) => {
            // Ctrl+S to save manually
            if ((e.ctrlKey || e.metaKey) && e.key === 's') {
                e.preventDefault();
                this.saveNotes();
                this.showMessage('💾 Notas guardadas manualmente', 'success');
            }
            
            // Enhanced Tab support for indentation
            if (e.key === 'Tab') {
                e.preventDefault();
                const start = e.target.selectionStart;
                const end = e.target.selectionEnd;
                const value = e.target.value;
                
                if (e.shiftKey) {
                    // Shift+Tab: Remove indentation
                    const lineStart = value.lastIndexOf('\n', start - 1) + 1;
                    if (value.substring(lineStart, lineStart + 2) === '  ') {
                        e.target.value = value.substring(0, lineStart) + value.substring(lineStart + 2);
                        e.target.selectionStart = e.target.selectionEnd = start - 2;
                    }
                } else {
                    // Tab: Add indentation
                    e.target.value = value.substring(0, start) + '  ' + value.substring(end);
                    e.target.selectionStart = e.target.selectionEnd = start + 2;
                }
                
                this.scheduleAutosave();
            }
        });
        
        // Smart save on blur
        $notesArea.on('blur', () => {
            this.saveNotes();
        });
        
        // Enhanced focus styling with browser awareness
        $notesArea.on('focus', () => {
            $('.notes-section').addClass('focused');
            if (this.browser === 'chrome') {
                this.showChromeNotesHint();
            }
        });
        
        $notesArea.on('blur', () => {
            $('.notes-section').removeClass('focused');
        });
        
        // Smart paste handling with formatting preservation
        $notesArea.on('paste', (e) => {
            setTimeout(() => {
                this.scheduleAutosave();
                this.updateNotesCounter();
                this.checkNotesChanges();
            }, 0);
        });
    },
    
    checkNotesChanges() {
        const currentLength = $('#notesArea').val().length;
        
        // Update title if significant content change
        if (Math.abs(currentLength - this.lastSavedLength) > 50) {
            this.updateDynamicTitle();
            this.lastSavedLength = currentLength;
        }
    },
    
    showChromeNotesHint() {
        // Show hint only once per session
        if (!this.chromeNotesHintShown) {
            setTimeout(() => {
                this.showMessage('💡 Tip Chrome: Usa Ctrl+S para guardar manualmente', 'info');
                this.chromeNotesHintShown = true;
            }, 2000);
        }
    },
    
    scheduleAutosave() {
        if (this.autosaveTimer) {
            clearTimeout(this.autosaveTimer);
        }
        
        // Smart autosave timing based on browser
        const delay = this.browser === 'chrome' ? 3000 : 2000;
        
        this.autosaveTimer = setTimeout(() => {
            this.saveNotes();
        }, delay);
    },
    
    saveNotes() {
        const notesText = $('#notesArea').val();
        const now = new Date();
        
        const wordCount = notesText.trim() === '' ? 0 : 
            notesText.trim().split(/\s+/).filter(word => word.length > 0).length;
        const charCount = notesText.length;
        const lineCount = notesText.split('\n').length;
        
        const notesData = {
            text: notesText,
            lastSavedAt: now.toISOString(),
            wordCount: wordCount,
            charCount: charCount,
            lineCount: lineCount,
            browser: this.browser,
            version: '2.2',
            autoSaved: true,
            user: 'wtaype'
        };
        
        if (this.saveToLS('mibcp_notes', notesData)) {
            this.showSaveStatus('saved');
            this.updateNotesCounter(wordCount, charCount, lineCount);
            this.lastSavedLength = charCount;
            
            console.log('📝 Smart notes saved:', { 
                words: wordCount, 
                chars: charCount, 
                lines: lineCount,
                browser: this.browser,
                time: now.toLocaleTimeString('es-ES') 
            });
            
            // Update dynamic title after saving
            this.updateDynamicTitle();
        } else {
            this.showSaveStatus('error');
        }
    },
    
    updateNotesCounter(wordCount = null, charCount = null, lineCount = null) {
        if (wordCount === null) {
            const notesText = $('#notesArea').val();
            wordCount = notesText.trim() === '' ? 0 : 
                notesText.trim().split(/\s+/).filter(word => word.length > 0).length;
            charCount = notesText.length;
            lineCount = notesText.split('\n').length;
        }
        
        let $counter = $('.notes-counter');
        if (!$counter.length) {
            $counter = $('<div class="notes-counter"></div>');
            $('.notes-container').append($counter);
        }
        
        // Enhanced counter with smart features
        const readingTime = Math.max(1, Math.ceil(wordCount / 200));
        const showReadingTime = wordCount > 50;
        const complexity = this.calculateNotesComplexity(charCount, wordCount, lineCount);
        
        $counter.html(`
            <div class="counter-stats">
                <span title="Caracteres">
                    <i class="fas fa-keyboard"></i>
                    ${charCount.toLocaleString('es-ES')}
                </span>
                <span title="Palabras">
                    <i class="fas fa-font"></i>
                    ${wordCount.toLocaleString('es-ES')}
                </span>
                <span title="Líneas">
                    <i class="fas fa-list-ol"></i>
                    ${lineCount.toLocaleString('es-ES')}
                </span>
                ${showReadingTime ? `
                    <span title="Tiempo de lectura estimado" class="reading-time">
                        <i class="fas fa-clock"></i>
                        ~${readingTime}min
                    </span>
                ` : ''}
            </div>
            ${complexity ? `<div class="notes-complexity">${complexity}</div>` : ''}
        `);
    },
    
    calculateNotesComplexity(charCount, wordCount, lineCount) {
        if (wordCount < 10) return null;
        
        const avgWordsPerLine = wordCount / lineCount;
        const avgCharsPerWord = charCount / wordCount;
        
        let complexity = '';
        
        if (avgWordsPerLine > 15) {
            complexity += '<span class="complexity-item dense">📝 Denso</span>';
        } else if (avgWordsPerLine < 5) {
            complexity += '<span class="complexity-item structured">📋 Estructurado</span>';
        }
        
        if (avgCharsPerWord > 7) {
            complexity += '<span class="complexity-item technical">🔧 Técnico</span>';
        }
        
        if (lineCount > 30) {
            complexity += '<span class="complexity-item extensive">📄 Extenso</span>';
        }
        
        return complexity;
    },
    
    getTimeAgo(date) {
        const now = new Date();
        const diff = now - date;
        const minutes = Math.floor(diff / (1000 * 60));
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        
        if (minutes < 1) return 'hace un momento';
        if (minutes < 60) return `hace ${minutes} minuto${minutes > 1 ? 's' : ''}`;
        if (hours < 24) return `hace ${hours} hora${hours > 1 ? 's' : ''}`;
        if (days < 7) return `hace ${days} día${days > 1 ? 's' : ''}`;
        
        return date.toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    },
    
    showSaveStatus(status) {
        const $indicator = $('#saveStatus');
        const $saveIndicator = $('.save-indicator');
        
        $saveIndicator.removeClass('show saving error');
        
        switch(status) {
            case 'saving':
                $indicator.html('<i class="fas fa-circle-notch fa-spin"></i> Guardando...');
                $saveIndicator.addClass('show saving');
                break;
            case 'saved':
                const browserIcon = this.getBrowserIcon();
                $indicator.html(`<i class="fas fa-check"></i> Guardado ${browserIcon}`);
                $saveIndicator.addClass('show');
                setTimeout(() => $saveIndicator.removeClass('show'), 2500);
                break;
            case 'error':
                $indicator.html('<i class="fas fa-exclamation-triangle"></i> Error');
                $saveIndicator.addClass('show error');
                setTimeout(() => $saveIndicator.removeClass('show'), 3000);
                break;
        }
    },
    
    getBrowserIcon() {
        const icons = {
            'edge': '<i class="fab fa-edge" style="color: #0078d7;"></i>',
            'chrome': '<i class="fab fa-chrome" style="color: #ea4335;"></i>',
            'firefox': '<i class="fab fa-firefox" style="color: #ff9500;"></i>',
            'safari': '<i class="fab fa-safari" style="color: #006cff;"></i>'
        };
        return icons[this.browser] || '<i class="fas fa-browser"></i>';
    },
    
    // Enhanced export notes function
    exportNotes() {
        const notesData = this.loadFromLS('mibcp_notes', { text: '' });
        if (!notesData.text) {
            this.showMessage('❌ No hay notas para exportar', 'warning');
            return;
        }
        
        const now = new Date();
        const filename = `MIBCP_Notas_wtaype_${now.toISOString().split('T')[0]}.txt`;
        
        const exportContent = `WIBCP - Notas del Call Center
Exportado: ${now.toLocaleString('es-ES')}
Usuario: wtaype
Navegador: ${this.browser.toUpperCase()}
Palabras: ${notesData.wordCount || 'N/A'}
Caracteres: ${notesData.charCount || notesData.text.length}
Líneas: ${notesData.lineCount || notesData.text.split('\n').length}
Fecha actual: 2025-09-28 15:32:02 (UTC)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${notesData.text}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Generado por WIBCP v2.2 Smart - by @wtaype
GitHub: https://github.com/wtaype
Fecha: ${now.toLocaleDateString('es-ES')} ${now.toLocaleTimeString('es-ES')}`;
        
        const blob = new Blob([exportContent], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        a.click();
        
        URL.revokeObjectURL(url);
        this.showMessage(`📁 Notas exportadas: ${filename}`, 'success');
        
        console.log('📤 Notes exported:', {
            filename: filename,
            size: notesData.text.length,
            words: notesData.wordCount,
            browser: this.browser,
            user: 'wtaype'
        });
    },
    
    // Smart search in notes
    searchInNotes(searchTerm) {
        const notesText = $('#notesArea').val();
        if (!searchTerm || !notesText) return [];
        
        const lines = notesText.split('\n');
        const matches = [];
        
        lines.forEach((line, index) => {
            if (line.toLowerCase().includes(searchTerm.toLowerCase())) {
                matches.push({
                    line: index + 1,
                    text: line.trim(),
                    context: lines.slice(Math.max(0, index - 1), index + 2)
                });
            }
        });
        
        return matches;
    },
    
    // Get notes statistics
    getNotesStats() {
        const notesData = this.loadFromLS('mibcp_notes', { text: '' });
        const text = notesData.text || '';
        
        if (!text) return null;
        
        const words = text.trim().split(/\s+/).filter(word => word.length > 0);
        const lines = text.split('\n');
        const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
        const paragraphs = text.split(/\n\s*\n/).filter(p => p.trim().length > 0);
        
        return {
            characters: text.length,
            charactersNoSpaces: text.replace(/\s/g, '').length,
            words: words.length,
            lines: lines.length,
            sentences: sentences.length,
            paragraphs: paragraphs.length,
            avgWordsPerSentence: sentences.length > 0 ? Math.round(words.length / sentences.length) : 0,
            avgCharsPerWord: words.length > 0 ? Math.round(text.length / words.length) : 0,
            readingTime: Math.max(1, Math.ceil(words.length / 200)),
            complexity: this.calculateNotesComplexity(text.length, words.length, lines.length),
            lastModified: notesData.lastSavedAt,
            browser: notesData.browser || this.browser,
            user: 'wtaype'
        };
    }
});

// Enhanced notes styles with smart features
$('<style>').html(`
    .notes-section.focused {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(102, 126, 234, 0.15);
    }
    
    .notes-counter {
        position: absolute;
        bottom: 0.75rem;
        right: 1rem;
        background: rgba(255, 255, 255, 0.15);
        backdrop-filter: blur(15px);
        -webkit-backdrop-filter: blur(15px);
        padding: 0.5rem 0.75rem;
        border-radius: 12px;
        border: 1px solid rgba(255, 255, 255, 0.1);
        pointer-events: none;
        font-size: 0.75rem;
        transition: var(--transition);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
    
    .counter-stats {
        display: flex;
        gap: 0.75rem;
        flex-wrap: wrap;
        margin-bottom: 0.25rem;
    }
    
    .counter-stats span {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        color: var(--text-secondary);
        font-weight: 500;
    }
    
    .counter-stats i {
        font-size: 0.7rem;
        opacity: 0.8;
    }
    
    .reading-time {
        color: var(--primary-color) !important;
        font-weight: 600 !important;
    }
    
    .notes-complexity {
        display: flex;
        gap: 0.25rem;
        flex-wrap: wrap;
        margin-top: 0.25rem;
    }
    
    .complexity-item {
        background: rgba(102, 126, 234, 0.1);
        color: var(--primary-color);
        padding: 0.1rem 0.4rem;
        border-radius: 8px;
        font-size: 0.6rem;
        font-weight: 600;
        border: 1px solid rgba(102, 126, 234, 0.2);
    }
    
    .complexity-item.dense {
        background: rgba(245, 158, 11, 0.1);
        color: var(--warning-color);
        border-color: rgba(245, 158, 11, 0.2);
    }
    
    .complexity-item.structured {
        background: rgba(16, 185, 129, 0.1);
        color: var(--success-color);
        border-color: rgba(16, 185, 129, 0.2);
    }
    
    .complexity-item.technical {
        background: rgba(139, 92, 246, 0.1);
        color: #8b5cf6;
        border-color: rgba(139, 92, 246, 0.2);
    }
    
    .complexity-item.extensive {
        background: rgba(239, 68, 68, 0.1);
        color: var(--danger-color);
        border-color: rgba(239, 68, 68, 0.2);
    }
    
    .save-indicator {
        transition: var(--transition);
        border-radius: 8px;
    }
    
    .save-indicator.error {
        background: var(--danger-color);
        animation: errorPulseShake 0.6s ease-in-out;
    }
    
    @keyframes errorPulseShake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-4px) scale(1.05); }
        75% { transform: translateX(4px) scale(1.05); }
    }
    
    #notesArea {
        transition: var(--transition);
        font-family: 'Inter', 'Consolas', monospace;
        line-height: 1.6;
        resize: vertical;
        min-height: 50vh;
        border: .5vh solid var(--primary-color);
    }
    
    #notesArea:focus {
        background: rgba(255, 255, 255, 0.15);
        border-color: var(--primary-color);
        outline: none;
        box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        transform: translateY(-1px);
    }
    
    #notesArea::placeholder {
        color: var(--text-secondary);
        opacity: 0.7;
        font-style: italic;
    }
    
    /* Smart visual feedback for typing */
    .notes-section.typing #notesArea {
        border-left: 3px solid var(--primary-color);
    }
    
    .notes-section.saving .notes-counter {
        border-color: var(--warning-color);
        background: rgba(245, 158, 11, 0.05);
    }
    
    .notes-section.saved .notes-counter {
        border-color: var(--success-color);
        background: rgba(16, 185, 129, 0.05);
        animation: savedPulse 0.8s ease-out;
    }
    
    @keyframes savedPulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.02); }
        100% { transform: scale(1); }
    }
    
    /* Export button integration */
    .notes-export {
        position: absolute;
        top: -0.5rem;
        right: 1rem;
        background: var(--primary-color);
        color: white;
        border: none;
        padding: 0.3rem 0.8rem;
        border-radius: 15px;
        font-size: 0.7rem;
        font-weight: 600;
        cursor: pointer;
        opacity: 0;
        transition: var(--transition);
        box-shadow: 0 2px 8px rgba(102, 126, 234, 0.2);
    }
    
    .notes-section:hover .notes-export {
        opacity: 1;
    }
    
    .notes-export:hover {
        background: #5a67d8;
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
    }
    
    /* Browser-specific enhancements */
    .notes-section.chrome-notes .notes-counter {
        border-color: rgba(234, 67, 53, 0.3);
        background: rgba(234, 67, 53, 0.05);
    }
    
    .notes-section.edge-notes .notes-counter {
        border-color: rgba(0, 120, 215, 0.3);
        background: rgba(0, 120, 215, 0.05);
    }
    
    /* Responsive improvements */
    @media (max-width: 768px) {
        .notes-counter {
            position: static;
            margin-top: 0.75rem;
            align-self: flex-end;
        }
        
        .counter-stats {
            gap: 0.5rem;
            justify-content: center;
        }
        
        .notes-complexity {
            justify-content: center;
        }
        
        .notes-export {
            position: static;
            margin-top: 0.5rem;
            align-self: flex-end;
            opacity: 1;
        }
        
        #notesArea {
            font-size: 16px; /* Prevent zoom on iOS */
        }
    }
    
    /* Accessibility improvements */
    #notesArea:focus-visible {
        outline: 2px solid var(--primary-color);
        outline-offset: 2px;
    }
    
    /* Print styles */
    @media print {
        .notes-counter,
        .save-indicator,
        .notes-export {
            display: none !important;
        }
        
        #notesArea {
            border: 1px solid #ccc;
            background: white;
            color: black;
            font-size: 12pt;
            line-height: 1.5;
        }
    }
`).appendTo('head');

console.log('📝 WIBCP Smart Notes with Advanced Features loaded! 📄🧠 by @wtaype');

/*
=== WIBCP - Smart Image Management System ===  
Optimized image handling with Blob URLs for maximum performance
Clean interface with 4 slots - Enhanced by @wtaype - 2025
*/

// Extend MIBCPApp with smart image functionality
$.extend(MIBCPApp.prototype, {
    
    // Image system properties
    imageBlobUrls: new Map(),
    imageLoadingStates: new Map(),
    
    setupImageHandlers() {
        console.log('🖼️ Setting up 4 smart image slots with Blob URLs');
        
        $('.image-box').each((index, box) => {
            const $box = $(box);
            const slot = $box.data('slot');
            
            // Click to open file picker
            $box.find('.image-dropzone').on('click', () => {
                $box.find('.image-input')[0].click();
            });
            
            // File input change with enhanced feedback
            $box.find('.image-input').on('change', (e) => {
                const file = e.target.files[0];
                if (file) {
                    this.handleImageFile(file, slot);
                }
            });
            
            // Enhanced drag and drop with smart visual feedback
            $box.on('dragover dragenter', (e) => {
                e.preventDefault();
                e.stopPropagation();
                $box.addClass('dragover');
                $('.image-boxes').addClass('drag-active');
            });
            
            $box.on('dragleave dragend', (e) => {
                e.preventDefault();
                e.stopPropagation();
                
                // More precise drag leave detection
                const rect = box.getBoundingClientRect();
                const x = e.originalEvent.clientX;
                const y = e.originalEvent.clientY;
                
                if (x < rect.left || x > rect.right || y < rect.top || y > rect.bottom) {
                    $box.removeClass('dragover');
                    
                    if (!$('.image-box.dragover').length) {
                        $('.image-boxes').removeClass('drag-active');
                    }
                }
            });
            
            $box.on('drop', (e) => {
                e.preventDefault();
                e.stopPropagation();
                $box.removeClass('dragover');
                $('.image-boxes').removeClass('drag-active');
                
                const files = e.originalEvent.dataTransfer.files;
                if (files.length > 0) {
                    this.handleMultipleImageFiles(files, slot);
                }
            });
        });
        
        // Smart global paste handler
        $(document).on('paste', (e) => {
            if ($(e.target).is('input, textarea')) return;
            
            const items = e.originalEvent.clipboardData.items;
            
            for (let item of items) {
                if (item.type.indexOf('image') !== -1) {
                    e.preventDefault();
                    
                    const file = item.getAsFile();
                    const emptySlot = this.findEmptyImageSlot();
                    
                    if (emptySlot) {
                        this.handleImageFile(file, emptySlot);
                        this.showMessage(`📋 Imagen pegada en slot ${emptySlot}`, 'success');
                    } else {
                        const replaceSlot = this.askForSlotReplacement();
                        if (replaceSlot) {
                            this.handleImageFile(file, replaceSlot);
                            this.showMessage(`📋 Imagen reemplazada en slot ${replaceSlot}`, 'info');
                        } else {
                            this.showMessage('❌ No hay slots disponibles', 'warning');
                        }
                    }
                    break;
                }
            }
        });
        
        // Cleanup blob URLs when page unloads
        $(window).on('beforeunload', () => {
            this.cleanupAllBlobUrls();
        });
        
        console.log('🖼️ Smart image handlers initialized with Blob URL management');
    },
    
    handleMultipleImageFiles(files, preferredSlot) {
        const imageFiles = Array.from(files).filter(file => file.type.startsWith('image/'));
        
        if (imageFiles.length === 0) {
            this.showMessage('❌ No se encontraron imágenes válidas', 'warning');
            return;
        }
        
        if (imageFiles.length === 1) {
            this.handleImageFile(imageFiles[0], preferredSlot);
            return;
        }
        
        const availableSlots = this.getAvailableSlots();
        const maxFiles = Math.min(imageFiles.length, availableSlots.length || 4);
        
        if (availableSlots.length === 0) {
            this.showMessage('⚠️ Todos los slots ocupados. Solo se cargará la primera imagen.', 'warning');
            this.handleImageFile(imageFiles[0], preferredSlot || 1);
            return;
        }
        
        for (let i = 0; i < maxFiles; i++) {
            const file = imageFiles[i];
            const targetSlot = availableSlots[i] || (i + 1);
            
            setTimeout(() => {
                this.handleImageFile(file, targetSlot);
            }, i * 200);
        }
        
        this.showMessage(`📁 ${maxFiles} imágenes procesándose...`, 'info');
        
        if (imageFiles.length > maxFiles) {
            setTimeout(() => {
                this.showMessage(`⚠️ Solo se procesaron ${maxFiles} de ${imageFiles.length} imágenes`, 'warning');
            }, 1000);
        }
    },
    
    getAvailableSlots() {
        const availableSlots = [];
        for (let i = 1; i <= 4; i++) {
            const $box = $(`.image-box[data-slot="${i}"]`);
            if (!$box.find('.image-preview').hasClass('show')) {
                availableSlots.push(i);
            }
        }
        return availableSlots;
    },
    
    askForSlotReplacement() {
        const slot = prompt('Todos los slots están ocupados. ¿En qué slot quieres reemplazar la imagen? (1-4)');
        const slotNum = parseInt(slot);
        return (slotNum >= 1 && slotNum <= 4) ? slotNum : null;
    },
    
    findEmptyImageSlot() {
        for (let i = 1; i <= 4; i++) {
            const $box = $(`.image-box[data-slot="${i}"]`);
            if (!$box.find('.image-preview').hasClass('show')) {
                return i;
            }
        }
        return null;
    },
    
    isValidImageFile(file) {
        const validTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp', 'image/gif', 'image/svg+xml'];
        const maxSize = 8 * 1024 * 1024; // 8MB
        
        if (!validTypes.includes(file.type)) {
            this.showMessage('❌ Tipo no válido. Use PNG, JPG, WEBP, GIF o SVG', 'error');
            return false;
        }
        
        if (file.size > maxSize) {
            const sizeMB = (file.size / (1024 * 1024)).toFixed(1);
            this.showMessage(`❌ Archivo muy grande: ${sizeMB}MB. Máximo 8MB`, 'error');
            return false;
        }
        
        return true;
    },
    
    handleImageFile(file, slot) {
        if (!this.isValidImageFile(file)) return;
        
        const $box = $(`.image-box[data-slot="${slot}"]`);
        
        this.setImageLoadingState(slot, true);
        $box.addClass('image-loading');
        
        this.cleanupSlotBlobUrl(slot);
        
        const reader = new FileReader();
        
        reader.onloadstart = () => {
            this.updateLoadingProgress(slot, 10);
        };
        
        reader.onprogress = (e) => {
            if (e.lengthComputable) {
                const progress = Math.round((e.loaded / e.total) * 80);
                this.updateLoadingProgress(slot, progress);
            }
        };
        
        reader.onload = (e) => {
            this.updateLoadingProgress(slot, 90);
            
            const dataUrl = e.target.result;
            
            // Convert dataURL to Blob for optimal performance
            const blob = this.dataURLtoBlob(dataUrl);
            const blobUrl = URL.createObjectURL(blob);
            
            this.imageBlobUrls.set(slot, blobUrl);
            
            this.displayImagePreview(slot, blobUrl, dataUrl);
            
            setTimeout(() => {
                this.saveImage(slot, dataUrl, file.name);
                this.updateLoadingProgress(slot, 100);
                
                setTimeout(() => {
                    this.setImageLoadingState(slot, false);
                    $box.removeClass('image-loading');
                    this.clearLoadingProgress(slot);
                }, 300);
            }, 400);
        };
        
        reader.onerror = (e) => {
            console.error('File reading error:', e);
            this.showMessage('❌ Error al leer el archivo', 'error');
            this.setImageLoadingState(slot, false);
            $box.removeClass('image-loading');
            this.clearLoadingProgress(slot);
        };
        
        reader.readAsDataURL(file);
        
        console.log(`🖼️ Processing image for slot ${slot}:`, {
            name: file.name,
            size: this.formatFileSize(file.size),
            type: file.type,
            user: 'wtaype'
        });
    },
    
    setImageLoadingState(slot, isLoading) {
        this.imageLoadingStates.set(slot, isLoading);
        
        if (isLoading) {
            this.updateDynamicTitle();
        }
    },
    
    updateLoadingProgress(slot, progress) {
        const $box = $(`.image-box[data-slot="${slot}"]`);
        let $progress = $box.find('.loading-progress');
        
        if (!$progress.length && progress < 100) {
            $progress = $(`
                <div class="loading-progress">
                    <div class="progress-bar"></div>
                    <div class="progress-text">0%</div>
                    <small class="progress-label">Procesando imagen...</small>
                </div>
            `);
            $box.append($progress);
        }
        
        if ($progress.length) {
            const $bar = $progress.find('.progress-bar');
            const $text = $progress.find('.progress-text');
            
            $bar.css('width', `${progress}%`);
            $text.text(`${Math.round(progress)}%`);
            
            if (progress >= 100) {
                $progress.find('.progress-label').text('¡Completado!');
            } else if (progress >= 80) {
                $progress.find('.progress-label').text('Finalizando...');
            }
        }
    },
    
    clearLoadingProgress(slot) {
        const $box = $(`.image-box[data-slot="${slot}"]`);
        $box.find('.loading-progress').fadeOut(200, function() {
            $(this).remove();
        });
    },
    
    dataURLtoBlob(dataURL) {
        const arr = dataURL.split(',');
        const mime = arr[0].match(/:(.*?);/)[1];
        const bstr = atob(arr[1]);
        let n = bstr.length;
        const u8arr = new Uint8Array(n);
        
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        
        return new Blob([u8arr], { type: mime });
    },
    
    displayImagePreview(slot, blobUrl, dataUrl = null) {
        const $box = $(`.image-box[data-slot="${slot}"]`);
        const $preview = $box.find('.image-preview');
        const $dropzone = $box.find('.image-dropzone');
        const $link = $box.find('.image-link');
        
        // Clean preview - no file info as requested
        $preview.html(`
            <div class="image-container">
                <img src="${blobUrl}" alt="Imagen ${slot}" onload="this.classList.add('loaded')" 
                     onerror="this.classList.add('error')">
            </div>
        `);
        
        $preview.addClass('show');
        $dropzone.hide();
        
        // Simple and efficient link
        $link.attr('href', blobUrl).show();
        
        // Smooth reveal animation
        $preview.css({ 
            opacity: 0, 
            transform: 'scale(0.95)' 
        }).animate({ 
            opacity: 1 
        }, 500, () => {
            $preview.css({ transform: 'scale(1)' });
        });
        
        console.log(`🖼️ Image displayed in slot ${slot} with optimized Blob URL`);
    },
    
    saveImage(slot, dataUrl, filename = null) {
        const $box = $(`.image-box[data-slot="${slot}"]`);
        const $preview = $box.find('.image-preview');
        
        if (!$preview.hasClass('show') && !dataUrl) {
            this.showMessage('❌ No hay imagen para guardar', 'warning');
            return;
        }
        
        if (!dataUrl) {
            this.showMessage('⚠️ No se puede guardar imagen temporal', 'warning');
            return;
        }
        
        const now = new Date();
        const imageData = {
            slot: slot,
            dataUrl: dataUrl,
            filename: filename || `imagen_wtaype_${slot}_${now.getTime()}`,
            savedAt: now.toISOString(),
            browser: this.browser,
            fileSize: dataUrl.length * 0.75,
            version: '2.2',
            user: 'wtaype',
            uploadDate: '2025-09-28'
        };
        
        let images = this.loadFromLS('mibcp_images', []);
        images = images.filter(img => img.slot !== slot);
        images.push(imageData);
        
        if (this.saveToLS('mibcp_images', images)) {
            $box.addClass('image-saved');
            setTimeout(() => $box.removeClass('image-saved'), 2000);
            
            this.showMessage(`💾 Imagen guardada en slot ${slot}`, 'success');
            
            console.log(`💾 Image saved in slot ${slot}:`, {
                filename: imageData.filename,
                size: this.formatFileSize(imageData.fileSize),
                browser: this.browser,
                user: 'wtaype'
            });
        }
    },
    
    formatFileSize(bytes) {
        if (bytes === 0) return '0 B';
        const k = 1024;
        const sizes = ['B', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
    },
    
    deleteImage(slot) {
        const $box = $(`.image-box[data-slot="${slot}"]`);
        const $preview = $box.find('.image-preview');
        const $dropzone = $box.find('.image-dropzone');
        const $link = $box.find('.image-link');
        
        if (!$preview.hasClass('show')) {
            this.showMessage('❌ No hay imagen para eliminar', 'warning');
            return;
        }
        
        const confirmed = confirm(`¿Eliminar imagen del slot ${slot}?\n\nEsta acción no se puede deshacer.`);
        if (!confirmed) return;
        
        this.cleanupSlotBlobUrl(slot);
        
        let images = this.loadFromLS('mibcp_images', []);
        const deletedImage = images.find(img => img.slot === slot);
        images = images.filter(img => img.slot !== slot);
        
        if (this.saveToLS('mibcp_images', images)) {
            $preview.addClass('removing');
            
            setTimeout(() => {
                $preview.fadeOut(500, () => {
                    $preview.removeClass('show removing').empty();
                    $dropzone.fadeIn(500);
                });
            }, 150);
            
            $link.hide().attr('href', '#');
            $box.find('.image-input').val('');
            this.showMessage(`🗑️ Imagen eliminada del slot ${slot}`, 'success');
            
            console.log(`🗑️ Image deleted from slot ${slot}:`, deletedImage?.filename);
        }
    },
    
    loadImages() {
        const images = this.loadFromLS('mibcp_images', []);
        let loadedCount = 0;
        
        images.forEach(imageData => {
            if (imageData.slot >= 1 && imageData.slot <= 4 && imageData.dataUrl) {
                try {
                    const blob = this.dataURLtoBlob(imageData.dataUrl);
                    const blobUrl = URL.createObjectURL(blob);
                    
                    this.imageBlobUrls.set(imageData.slot, blobUrl);
                    
                    this.displayImagePreview(imageData.slot, blobUrl, imageData.dataUrl);
                    loadedCount++;
                } catch (error) {
                    console.error(`Error loading image for slot ${imageData.slot}:`, error);
                }
            }
        });
        
        if (loadedCount > 0) {
            const totalSize = images.reduce((sum, img) => sum + (img.fileSize || 0), 0);
            console.log(`🖼️ Loaded ${loadedCount} images:`, {
                totalSize: this.formatFileSize(totalSize),
                activeBlobUrls: this.imageBlobUrls.size,
                browser: this.browser,
                user: 'wtaype'
            });
            

        }
    },
    
    clearAllImages() {
        for (let slot = 1; slot <= 4; slot++) {
            const $box = $(`.image-box[data-slot="${slot}"]`);
            const $preview = $box.find('.image-preview');
            const $dropzone = $box.find('.image-dropzone');
            const $link = $box.find('.image-link');
            
            if ($preview.hasClass('show')) {
                this.cleanupSlotBlobUrl(slot);
                
                $preview.removeClass('show').empty();
                $dropzone.show();
                $link.hide().attr('href', '#');
                $box.find('.image-input').val('');
            }
        }
        
        console.log('🧹 All images cleared with complete blob URL cleanup');
    },
    
    cleanupSlotBlobUrl(slot) {
        const blobUrl = this.imageBlobUrls.get(slot);
        if (blobUrl) {
            URL.revokeObjectURL(blobUrl);
            this.imageBlobUrls.delete(slot);
            console.log(`🧹 Blob URL cleaned for slot ${slot}`);
        }
    },
    
    cleanupAllBlobUrls() {
        this.imageBlobUrls.forEach((blobUrl, slot) => {
            URL.revokeObjectURL(blobUrl);
        });
        this.imageBlobUrls.clear();
        console.log('🧹 All blob URLs cleaned up on page unload');
    },
    
    getImageStats() {
        const images = this.loadFromLS('mibcp_images', []);
        const totalSize = images.reduce((sum, img) => sum + (img.fileSize || 0), 0);
        const loadingCount = Array.from(this.imageLoadingStates.values()).filter(Boolean).length;
        
        return {
            count: images.length,
            totalSize: totalSize,
            formattedSize: this.formatFileSize(totalSize),
            slots: images.map(img => img.slot).sort(),
            blobsActive: this.imageBlobUrls.size,
            currentlyLoading: loadingCount,
            averageSize: images.length > 0 ? totalSize / images.length : 0,
            browser: this.browser,
            storageEfficiency: this.imageBlobUrls.size > 0 ? 'Optimized with Blob URLs' : 'Standard storage',
            user: 'wtaype'
        };
    }
});

// Enhanced image styles with advanced Blob optimization
$('<style>').html(`
    .image-boxes.drag-active .image-box {
        border-color: var(--primary-color);
        background: rgba(102, 126, 234, 0.08);
        transform: scale(1.01);
    }
    
    .image-box.dragover {
        border-color: var(--success-color) !important;
        background: rgba(16, 185, 129, 0.15) !important;
        transform: scale(1.05);
        box-shadow: 0 10px 30px rgba(16, 185, 129, 0.3);
    }
    
    .image-container {
        width: 100%;
        height: 100%;
        border-radius: var(--border-radius-sm);
        overflow: hidden;
        position: relative;
        background: rgba(255, 255, 255, 0.05);
    }
    
    .image-container img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: var(--transition);
        opacity: 0;
    }
    
    .image-container img.loaded {
        opacity: 1;
    }
    
    .image-container img.error {
        opacity: 0.5;
        filter: grayscale(100%);
    }
    
    .image-container:hover img.loaded {
        transform: scale(1.05);
    }
    
    /* Enhanced Loading Progress */
    .image-loading {
        position: relative;
    }
    
    .loading-progress {
        position: absolute;
        bottom: 1rem;
        left: 1rem;
        right: 1rem;
        background: rgba(0, 0, 0, 0.85);
        border-radius: 12px;
        padding: 0.75rem;
        color: white;
        font-size: 0.8rem;
        z-index: 25;
        backdrop-filter: blur(15px);
        border: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .progress-bar {
        height: 6px;
        background: var(--primary-color);
        border-radius: 3px;
        width: 0%;
        transition: width 0.3s ease;
        margin-bottom: 0.5rem;
        position: relative;
        overflow: hidden;
    }
    
    .progress-bar::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
        animation: progressShimmer 1.5s infinite;
    }
    
    @keyframes progressShimmer {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
    }
    
    .progress-text {
        text-align: center;
        font-weight: 600;
        margin-bottom: 0.25rem;
        color: var(--primary-color);
    }
    
    .progress-label {
        text-align: center;
        opacity: 0.8;
        font-size: 0.75rem;
    }
    
    /* Enhanced Save Animation */
    .image-saved {
        animation: smartImageSaved 2s ease-in-out;
    }
    
    @keyframes smartImageSaved {
        0%, 100% { 
            border-color: rgba(255, 255, 255, 0.3);
            box-shadow: none;
            transform: scale(1);
        }
        25% { 
            border-color: var(--success-color);
            box-shadow: 0 0 25px rgba(16, 185, 129, 0.4);
            transform: scale(1.02);
        }
        75% { 
            border-color: var(--success-color);
            box-shadow: 0 0 15px rgba(16, 185, 129, 0.3);
            transform: scale(1.01);
        }
    }
    
    /* Enhanced Remove Animation */
    .removing {
        animation: smartImageRemoving 0.6s ease-in-out forwards;
    }
    
    @keyframes smartImageRemoving {
        0% { 
            opacity: 1; 
            transform: scale(1) rotate(0deg);
        }
        60% { 
            opacity: 0.3; 
            transform: scale(0.85) rotate(-3deg);
        }
        100% { 
            opacity: 0; 
            transform: scale(0.7) rotate(-5deg);
        }
    }
    
    /* Enhanced Button Styling */
    .btn-save,
    .btn-delete {
        padding: 0.65rem;
        border: none;
        border-radius: 12px;
        font-size: 0.8rem;
        font-weight: 600;
        cursor: pointer;
        transition: var(--transition);
        flex: 1;
        min-width: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        overflow: hidden;
    }
    
    .btn-save {
        background: linear-gradient(135deg, var(--success-color), #059669);
        color: white;
        box-shadow: 0 3px 10px rgba(16, 185, 129, 0.2);
    }
    
    .btn-save:hover {
        background: linear-gradient(135deg, #059669, #047857);
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(16, 185, 129, 0.3);
    }
    
    .btn-delete {
        background: linear-gradient(135deg, var(--danger-color), #dc2626);
        color: white;
        box-shadow: 0 3px 10px rgba(239, 68, 68, 0.2);
    }
    
    .btn-delete:hover {
        background: linear-gradient(135deg, #dc2626, #b91c1c);
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(239, 68, 68, 0.3);
    }
    
    /* Simple and Efficient Link Button */
    .image-link {
        background: linear-gradient(135deg, var(--primary-color), #5a67d8);
        color: white;
        text-decoration: none;
        padding: 0.65rem;
        border-radius: 12px;
        font-size: 0.8rem;
        font-weight: 600;
        cursor: pointer;
        transition: var(--transition);
        flex: 1;
        min-width: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 3px 10px rgba(102, 126, 234, 0.2);
    }
    
    .image-link:hover {
        background: linear-gradient(135deg, #5a67d8, #4c51bf);
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(102, 126, 234, 0.3);
        text-decoration: none;
        color: white;
    }
    
    /* Smart Blob URL optimization indicator */
    .image-preview.show::before {
        content: 'BLOB';
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        background: rgba(16, 185, 129, 0.8);
        color: white;
        padding: 0.2rem 0.4rem;
        border-radius: 4px;
        font-size: 0.6rem;
        font-weight: 600;
        letter-spacing: 0.05em;
        opacity: 0;
        transition: var(--transition);
        z-index: 10;
        backdrop-filter: blur(5px);
    }
    
    .image-preview:hover::before {
        opacity: 0.9;
    }
    
    /* Loading state enhancements */
    .image-loading .image-dropzone {
        opacity: 0.5;
        pointer-events: none;
        position: relative;
    }
    
    .image-loading .image-dropzone::before {
        content: 'Procesando...';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 12px;
        font-size: 0.8rem;
        font-weight: 600;
        z-index: 20;
    }
    
    /* Responsive improvements */
    @media (max-width: 768px) {
        .loading-progress {
            left: 0.5rem;
            right: 0.5rem;
            bottom: 0.5rem;
            padding: 0.5rem;
        }
        
        .btn-save,
        .btn-delete,
        .image-link {
            padding: 0.5rem;
            font-size: 0.75rem;
            min-width: 44px;
        }
        
        .image-preview.show::before {
            font-size: 0.5rem;
            padding: 0.15rem 0.3rem;
        }
    }
`).appendTo('head');

console.log('🖼️ WIBCP Smart Image System with Optimized Blob URLs loaded! 📸⚡ by @wtaype');

/*
=== WIBCP - Smart Genesys Cloud Integration ===
Intelligent Genesys Cloud window management with default URL and dynamic title integration
Enhanced for call center workflow - by @wtaype - 2025
GitHub: https://github.com/wtaype
*/

// Extend MIBCPApp with smart Genesys Cloud functionality
$.extend(MIBCPApp.prototype, {
    
    // Genesys Cloud system properties
    genesysWindow: null,
    defaultGenesysUrl: 'https://apps.mypurecloud.com',
    genesysUrlSaveTimer: null,
    genesysWindowCheckInterval: null,
    lastGenesysOpened: null,
    
    setupGenesysCloud() {
        console.log('☁️ Setting up smart Genesys Cloud integration by @wtaype');
        
        this.setDefaultGenesysUrl();
        
        // Setup event handlers
        $('#openGenesys').on('click', () => this.openGenesysCloud());
        
        // Enhanced enter key support
        $('#genesysUrl').on('keypress', (e) => {
            if (e.which === 13) {
                e.preventDefault();
                this.openGenesysCloud();
            }
        });
        
        // Smart URL input handling
        $('#genesysUrl').on('input', () => {
            this.validateUrlRealtime();
            this.scheduleGenesysUrlSave();
        });
        
        // Enhanced URL validation and formatting
        $('#genesysUrl').on('blur', () => {
            this.validateAndFormatUrl();
            this.saveGenesysUrl();
        });
        
        // Smart paste handling
        $('#genesysUrl').on('paste', () => {
            setTimeout(() => {
                this.validateAndFormatUrl();
                this.scheduleGenesysUrlSave();
            }, 0);
        });
        
        // Enhanced focus handling
        $('#genesysUrl').on('focus', () => {
            $('.genesys-section').addClass('focused');
            if (this.browser === 'chrome') {
                this.showChromeGenesysHint();
            }
        });
        
        $('#genesysUrl').on('blur', () => {
            $('.genesys-section').removeClass('focused');
        });
        
        this.startSmartWindowStatusCheck();
        this.setupBrowserSpecificFeatures();
        
        console.log('☁️ Genesys Cloud integration initialized successfully');
    },
    
    setDefaultGenesysUrl() {
        const savedUrl = this.loadFromLS('mibcp_genesys_url', '');
        
        if (!savedUrl) {
            $('#genesysUrl').val(this.defaultGenesysUrl);
            this.saveGenesysUrl();
            console.log('☁️ Default Genesys URL set:', this.defaultGenesysUrl);
        }
    },
    
    setupBrowserSpecificFeatures() {
        const $input = $('#genesysUrl');
        const $button = $('#openGenesys');
        
        // Add browser-specific styling
        $input.addClass(`genesys-input-${this.browser}`);
        $button.addClass(`genesys-btn-${this.browser}`);
        
        // Browser-specific hints
        if (this.browser === 'edge') {
            this.addOptimalBrowserIndicator();
        }
    },
    
    addOptimalBrowserIndicator() {
        $('.genesys-info').append(`
            <span class="optimal-browser-badge">
                <i class="fab fa-edge"></i>
                <span>Óptimizado para ti</span>
            </span>
        `);
    },
    
    showChromeGenesysHint() {
        if (!this.chromeGenesysHintShown) {
            setTimeout(() => {
                this.showMessage('💡 Tip @wtaype: Edge es mejor para WIBCP + Chrome para Genesys', 'info');
                this.chromeGenesysHintShown = true;
            }, 1000);
        }
    },
    
    validateUrlRealtime() {
        const $input = $('#genesysUrl');
        const url = $input.val().trim();
        
        if (url.length > 8) {
            try {
                new URL(url.startsWith('http') ? url : 'https://' + url);
                $input.removeClass('invalid-url').addClass('valid-url');
            } catch (e) {
                $input.removeClass('valid-url').addClass('invalid-url');
            }
        } else {
            $input.removeClass('valid-url invalid-url');
        }
    },
    
    scheduleGenesysUrlSave() {
        if (this.genesysUrlSaveTimer) {
            clearTimeout(this.genesysUrlSaveTimer);
        }
        
        this.genesysUrlSaveTimer = setTimeout(() => {
            this.saveGenesysUrl();
        }, 1500);
    },
    
    validateAndFormatUrl() {
        const $input = $('#genesysUrl');
        let url = $input.val().trim();
        
        if (!url) {
            $input.val(this.defaultGenesysUrl);
            return;
        }
        
        // Smart URL formatting
        if (url && !url.match(/^https?:\/\//)) {
            url = 'https://' + url;
        }
        
        // Clean up common mistakes
        url = url.replace(/\/+$/, ''); // Remove trailing slashes
        url = url.replace(/\s+/g, ''); // Remove spaces
        
        $input.val(url);
        
        // Enhanced validation
        try {
            const urlObj = new URL(url);
            
            if (this.isLikelyGenesysUrl(urlObj.hostname)) {
                $input.removeClass('invalid-url').addClass('valid-url');
                this.showUrlValidationFeedback('valid');
            } else {
                $input.removeClass('invalid-url valid-url').addClass('warning-url');
                this.showUrlValidationFeedback('warning');
            }
            
        } catch (e) {
            $input.removeClass('valid-url warning-url').addClass('invalid-url');
            this.showUrlValidationFeedback('invalid');
        }
    },
    
    isLikelyGenesysUrl(hostname) {
        const genesysPatterns = [
            /mypurecloud/i,
            /pure\.cloud/i,
            /genesys/i,
            /purecloud/i
        ];
        
        return genesysPatterns.some(pattern => pattern.test(hostname));
    },
    
    showUrlValidationFeedback(type) {
        const messages = {
            valid: '✅ URL válida de Genesys Cloud',
            warning: '⚠️ URL válida pero verifica que sea Genesys',
            invalid: '❌ URL no válida'
        };
        
        // Only show feedback for invalid URLs to avoid spam
        if (type === 'invalid') {
            this.showMessage(messages[type], 'warning');
        }
    },
    
    openGenesysCloud() {
        const url = $('#genesysUrl').val().trim();
        
        if (!url) {
            $('#genesysUrl').val(this.defaultGenesysUrl);
            this.showMessage('⚠️ Usando URL por defecto de Genesys Cloud', 'info');
            return;
        }
        
        // Final validation
        let finalUrl = url;
        try {
            const urlObj = new URL(finalUrl);
            finalUrl = urlObj.toString();
        } catch (e) {
            this.showMessage('❌ URL no válida', 'error');
            $('#genesysUrl').focus().select();
            return;
        }
        
        // Close existing window if open
        if (this.genesysWindow && !this.genesysWindow.closed) {
            try {
                this.genesysWindow.close();
                this.showMessage('🔄 Ventana anterior cerrada', 'info');
            } catch (e) {
                console.log('Could not close existing window');
            }
        }
        
        // Smart window sizing - 100% width, 55% height as requested
        const windowConfig = this.calculateOptimalWindowSize();
        
        // Enhanced window features for call center agents
        const features = [
            `width=${windowConfig.width}`,
            `height=${windowConfig.height}`,
            `left=${windowConfig.left}`,
            `top=${windowConfig.top}`,
            'scrollbars=yes',
            'resizable=yes',
            'toolbar=no',          // Clean interface
            'menubar=no',          // No menu clutter  
            'location=yes',        // Show URL for security
            'directories=no',      // No directory buttons
            'status=yes'           // Keep status for security info
        ].join(',');
        
        try {
            // Add loading state
            this.updateGenesysButtonState('loading');
            
            // Open window with smart configuration
            this.genesysWindow = window.open(finalUrl, 'MIBCPGenesysCloud_wtaype', features);
            
            if (this.genesysWindow) {
                this.handleGenesysWindowSuccess(finalUrl);
            } else {
                throw new Error('Window blocked or failed to open');
            }
            
        } catch (error) {
            console.error('Error opening Genesys Cloud:', error);
            this.handleGenesysWindowError(error);
        }
    },
    
    calculateOptimalWindowSize() {
        const screenWidth = screen.availWidth;
        const screenHeight = screen.availHeight;
        
        // 100% width, 55% height as requested
        const width = Math.round(screenWidth);
        const height = Math.round(screenHeight * 0.55);
        const left = 0;
        const top = Math.round((screenHeight - height) / 3);
        
        return { width, height, left, top };
    },
    
    handleGenesysWindowSuccess(url) {
        this.lastGenesysOpened = new Date().toISOString();
        this.saveGenesysUrl();
        
        // Focus the new window
        setTimeout(() => {
            if (this.genesysWindow && !this.genesysWindow.closed) {
                this.genesysWindow.focus();
            }
        }, 500);
        
        // Update UI state and dynamic title
        this.updateGenesysButtonState('opened');
        this.updateDynamicTitle();
        
        // Success message with smart info
        const domain = new URL(url).hostname;
        this.showMessage(`☁️ Genesys Cloud abierto en nueva ventana: ${domain}`, 'success');
        
        console.log('☁️ Genesys Cloud opened successfully by @wtaype:', {
            url: url,
            browser: this.browser,
            windowSize: this.calculateOptimalWindowSize(),
            timestamp: this.lastGenesysOpened,
            user: 'wtaype'
        });
    },
    
    handleGenesysWindowError(error) {
        this.updateGenesysButtonState('error');
        
        let errorMessage = '❌ Error al abrir Genesys Cloud.';
        let suggestion = '';
        
        if (error.message.includes('blocked')) {
            suggestion = ' Revisa el bloqueador de pop-ups.';
        } else if (this.browser === 'chrome') {
            suggestion = ' @wtaype: Considera usar Microsoft Edge.';
        }
        
        this.showMessage(errorMessage + suggestion, 'error');
        
        // Reset button state after delay
        setTimeout(() => {
            this.updateGenesysButtonState('closed');
            this.updateDynamicTitle();
        }, 3000);
    },
    
    updateGenesysButtonState(state) {
        const $button = $('#openGenesys');
        const $icon = $button.find('i');
        const $span = $button.find('span');
        
        // Remove all state classes
        $button.removeClass('genesys-active genesys-loading genesys-error');
        
        switch(state) {
            case 'loading':
                $button.addClass('genesys-loading');
                $icon.removeClass().addClass('fas fa-circle-notch fa-spin');
                $span.text('Abriendo...');
                break;
            case 'opened':
                $button.addClass('genesys-active');
                $icon.removeClass().addClass('fas fa-cloud');
                $span.text('Genesys Abierto');
                break;
            case 'error':
                $button.addClass('genesys-error');
                $icon.removeClass().addClass('fas fa-exclamation-triangle');
                $span.text('Error');
                break;
            case 'closed':
            default:
                $icon.removeClass().addClass('fas fa-external-link-alt');
                $span.text('Abrir Genesys Cloud');
                break;
        }
    },
    
    startSmartWindowStatusCheck() {
        // Clear existing interval if any
        if (this.genesysWindowCheckInterval) {
            clearInterval(this.genesysWindowCheckInterval);
        }
        
        // Smart checking with variable intervals
        this.genesysWindowCheckInterval = setInterval(() => {
            if (this.genesysWindow) {
                if (this.genesysWindow.closed) {
                    this.handleGenesysWindowClosed();
                }
            }
        }, 2000);
    },
    
    handleGenesysWindowClosed() {
        this.updateGenesysButtonState('closed');
        this.updateDynamicTitle();
        console.log('☁️ Genesys Cloud window was closed by @wtaype');
        this.genesysWindow = null;
        
        // Optional: Brief notification
        this.showMessage('☁️ Ventana de Genesys Cloud cerrada', 'info');
    },
    
    saveGenesysUrl() {
        const url = $('#genesysUrl').val().trim();
        const now = new Date();
        
        const genesysData = {
            url: url,
            lastSaved: now.toISOString(),
            browser: this.browser,
            user: 'wtaype',
            version: '2.2',
            lastOpened: this.lastGenesysOpened
        };
        
        if (this.saveToLS('mibcp_genesys_url', url)) {
            this.saveToLS('mibcp_genesys_data', genesysData);
            console.log('☁️ Genesys URL saved by @wtaype:', url);
        }
    },
    
    loadGenesysUrl() {
        const savedUrl = this.loadFromLS('mibcp_genesys_url', this.defaultGenesysUrl);
        const genesysData = this.loadFromLS('mibcp_genesys_data', {});
        
        $('#genesysUrl').val(savedUrl);
        
        if (genesysData.lastOpened) {
            this.lastGenesysOpened = genesysData.lastOpened;
        }
        
        // Validate loaded URL
        setTimeout(() => {
            this.validateAndFormatUrl();
        }, 100);
        
        console.log('☁️ Genesys URL loaded by @wtaype:', savedUrl);
    },
    
    // Focus management with smart features
    focusGenesysWindow() {
        if (this.genesysWindow && !this.genesysWindow.closed) {
            try {
                this.genesysWindow.focus();
                this.showMessage('☁️ Genesys Cloud enfocado', 'info');
                
                // Highlight button briefly
                $('#openGenesys').addClass('genesys-focused');
                setTimeout(() => {
                    $('#openGenesys').removeClass('genesys-focused');
                }, 1000);
                
            } catch (e) {
                console.log('Could not focus Genesys window:', e);
                this.showMessage('⚠️ No se pudo enfocar la ventana de Genesys', 'warning');
            }
        } else {
            this.showMessage('⚠️ Ventana de Genesys Cloud no está abierta', 'warning');
        }
    },
    
    // Check if Genesys window is open for dynamic title
    isGenesysOpen() {
        return this.genesysWindow && !this.genesysWindow.closed;
    },
    
    // Get Genesys integration statistics
    getGenesysStats() {
        const genesysData = this.loadFromLS('mibcp_genesys_data', {});
        
        return {
            isWindowOpen: this.isGenesysOpen(),
            currentUrl: $('#genesysUrl').val(),
            isDefaultUrl: $('#genesysUrl').val() === this.defaultGenesysUrl,
            browser: this.browser,
            windowConfig: this.calculateOptimalWindowSize(),
            lastOpened: this.lastGenesysOpened,
            user: 'wtaype',
            version: '2.2',
            github: 'https://github.com/wtaype',
            savedData: genesysData
        };
    },
    
    // Cleanup resources when app closes
    cleanupGenesysResources() {
        if (this.genesysWindowCheckInterval) {
            clearInterval(this.genesysWindowCheckInterval);
        }
        
        if (this.genesysUrlSaveTimer) {
            clearTimeout(this.genesysUrlSaveTimer);
        }
        
        console.log('☁️ Genesys resources cleaned up by @wtaype');
    }
});

// Enhanced keyboard shortcuts
$(document).on('keydown', (e) => {
    // Ctrl+G to focus Genesys window (only when not in inputs)
    if ((e.ctrlKey || e.metaKey) && e.key === 'g' && !$(e.target).is('input, textarea')) {
        e.preventDefault();
        if (window.app && typeof window.app.focusGenesysWindow === 'function') {
            window.app.focusGenesysWindow();
        }
    }
    
    // Ctrl+Shift+G to open Genesys (global shortcut)
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'G') {
        e.preventDefault();
        if (window.app && typeof window.app.openGenesysCloud === 'function') {
            window.app.openGenesysCloud();
        }
    }
});

// Enhanced Genesys Cloud styles with smart features
$('<style>').html(`
    .genesys-section {
        margin-bottom: 2rem;
        border: 1px solid rgba(255, 255, 255, 0.15);
        transition: var(--transition);
    }
    
    .genesys-section.focused {
        border-color: var(--primary-color);
        box-shadow: 0 0 20px rgba(102, 126, 234, 0.1);
        transform: translateY(-1px);
    }
    
    .genesys-section h3 {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 1.5rem;
        font-size: 1.2rem;
        font-weight: 600;
        color: var(--text-primary);
    }
    
    .genesys-section h3 i {
        color: var(--primary-color);
    }
    
    .genesys-container {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    
    .genesys-input-group {
        display: flex;
        gap: 1rem;
        align-items: stretch;
    }
    
    .genesys-input {
        flex: 1;
        padding: 0.875rem 1.25rem;
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: var(--border-radius-sm);
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        font-family: 'Inter', monospace;
        font-size: 0.95rem;
        color: var(--text-primary);
        transition: var(--transition);
    }
    
    .genesys-input:focus {
        outline: none;
        border-color: var(--primary-color);
        box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        background: rgba(255, 255, 255, 0.15);
        transform: translateY(-1px);
    }
    
    .genesys-input::placeholder {
        color: var(--text-secondary);
        opacity: 0.8;
    }
    
    /* Smart URL validation states */
    .genesys-input.valid-url {
        border-color: var(--success-color);
        background: rgba(16, 185, 129, 0.05);
    }
    
    .genesys-input.warning-url {
        border-color: var(--warning-color);
        background: rgba(245, 158, 11, 0.05);
    }
    
    .genesys-input.invalid-url {
        border-color: var(--danger-color);
        background: rgba(239, 68, 68, 0.05);
        animation: invalidUrlShake 0.4s ease-in-out;
    }
    
    @keyframes invalidUrlShake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-3px); }
        75% { transform: translateX(3px); }
    }
    
    /* Browser-specific input styling */
    .genesys-input-edge {
        border-left: 3px solid #0078d7;
    }
    
    .genesys-input-chrome {
        border-left: 3px solid #ea4335;
    }
    
    .genesys-btn {
        padding: 0.875rem 2rem;
        white-space: nowrap;
        font-weight: 600;
        letter-spacing: 0.025em;
        transition: var(--transition);
        position: relative;
        overflow: hidden;
        border: none;
        border-radius: var(--border-radius-sm);
        cursor: pointer;
    }
    
    /* Smart button states */
    .genesys-btn.genesys-loading {
        background: rgba(102, 126, 234, 0.8);
        color: white;
        pointer-events: none;
    }
    
    .genesys-btn.genesys-active {
        background: linear-gradient(135deg, #10b981, #059669);
        color: white;
        box-shadow: 0 4px 14px 0 rgba(16, 185, 129, 0.3);
    }
    
    .genesys-btn.genesys-active:hover {
        background: linear-gradient(135deg, #059669, #047857);
        transform: translateY(-2px);
        box-shadow: 0 8px 25px 0 rgba(16, 185, 129, 0.4);
    }
    
    .genesys-btn.genesys-error {
        background: linear-gradient(135deg, #ef4444, #dc2626);
        color: white;
    }
    
    .genesys-btn.genesys-focused {
        animation: focusedPulse 1s ease-in-out;
    }
    
    @keyframes focusedPulse {
        0%, 100% { 
            box-shadow: 0 4px 14px 0 rgba(16, 185, 129, 0.3);
        }
        50% { 
            box-shadow: 0 8px 25px 0 rgba(16, 185, 129, 0.6);
            transform: scale(1.02);
        }
    }
    
    /* Browser-specific button styling */
    .genesys-btn-edge {
        border-bottom: 3px solid #0078d7;
    }
    
    .genesys-btn-chrome {
        border-bottom: 3px solid #ea4335;
    }
    
    .genesys-info {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--text-secondary);
        font-size: 0.85rem;
        margin-left: 0.5rem;
    }
    
    .genesys-info i {
        color: var(--primary-color);
        opacity: 0.8;
    }
    
    .optimal-browser-badge {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        background: rgba(16, 185, 129, 0.1);
        color: var(--success-color);
        padding: 0.25rem 0.5rem;
        border-radius: 12px;
        font-size: 0.75rem;
        font-weight: 600;
        border: 1px solid rgba(16, 185, 129, 0.2);
    }
    
    /* Loading animation for button */
    .genesys-btn.genesys-loading::after {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
        animation: loadingShimmer 1.5s infinite;
    }
    
    @keyframes loadingShimmer {
        0% { left: -100%; }
        100% { left: 100%; }
    }
    
    /* Enhanced responsive design */
    @media (max-width: 768px) {
        .genesys-input-group {
            flex-direction: column;
            gap: 0.75rem;
        }
        
        .genesys-btn {
            padding: 1rem;
            text-align: center;
            justify-content: center;
        }
        
        .genesys-input {
            padding: 1rem 1.25rem;
            font-size: 16px; /* Prevent zoom on iOS */
        }
        
        .genesys-info {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
        }
        
        .optimal-browser-badge {
            align-self: flex-end;
        }
    }
`).appendTo('head');

console.log('☁️ WIBCP Smart Genesys Cloud Integration loaded! 🌐🧠 by @wtaype');
console.log('🔗 GitHub: https://github.com/wtaype');

/*
=== WIBCP - Application Initialization & Setup ===
Final initialization, data loading, and system integration
Complete WIBCP v2.2 Smart Call Center Tool - by @wtaype - 2025
GitHub: https://github.com/wtaype | Date: 2025-09-28 15:36:03 UTC
*/

// Application initialization and data loading
$.extend(MIBCPApp.prototype, {
    
    // Initialize all systems and load data
    initializeApp() {
        console.log('🚀 Initializing WIBCP v2.2 Smart by @wtaype');
        console.log('📅 Current Date: 2025-09-28 15:36:03 UTC');
        console.log('👤 User: wtaype');
        console.log('🔗 GitHub Profile: https://github.com/wtaype');
        
        this.loadAllSystems();
        this.setupImageSystem();
        this.setupGenesysIntegration();
        this.displaySystemInfo();
        this.startPerformanceMonitoring();
    },
    
    loadAllSystems() {
        try {
            // Load core data
            if (typeof this.loadDetectionPreference === 'function') {
                this.loadDetectionPreference();
            }
            
            // Load modules data
            this.loadData();
            
            console.log('📊 All systems loaded successfully');
        } catch (error) {
            console.error('❌ Error loading systems:', error);
            this.showMessage('⚠️ Algunos módulos no se cargaron correctamente', 'warning');
        }
    },
    
    setupImageSystem() {
        if (typeof this.setupImageHandlers === 'function') {
            this.setupImageHandlers();
            
            // Load existing images
            if (typeof this.loadImages === 'function') {
                this.loadImages();
                
                // Log image statistics after loading
                setTimeout(() => {
                    if (typeof this.getImageStats === 'function') {
                        const stats = this.getImageStats();
                        if (stats && stats.count > 0) {
                            console.log('🖼️ Image System Stats by @wtaype:', stats);
                        }
                    }
                }, 2500);
            }
        }
    },
    
    setupGenesysIntegration() {
        if (typeof this.setupGenesysCloud === 'function') {
            this.setupGenesysCloud();
            
            // Load Genesys data
            if (typeof this.loadGenesysUrl === 'function') {
                this.loadGenesysUrl();
                
                // Log Genesys statistics
                setTimeout(() => {
                    if (typeof this.getGenesysStats === 'function') {
                        const stats = this.getGenesysStats();
                        console.log('☁️ Genesys Integration Stats by @wtaype:', stats);
                    }
                }, 1000);
            }
        }
    },
    
    displaySystemInfo() {
        const systemInfo = {
            version: '2.2 Smart',
            user: 'wtaype',
            github: 'https://github.com/wtaype',
            browser: this.browser,
            timestamp: '2025-09-28 15:36:03 UTC',
            features: {
                dynamicTitle: true,
                smartDetection: this.browser !== 'chrome',
                genesysIntegration: true,
                blobOptimization: true,
                smartAnalytics: true
            },
            repositories: [
                'https://github.com/wtaype/retodelmes',
                'https://github.com/wtaype/aver', 
                'https://github.com/wtaype/cartadehawka',
                'https://github.com/wtaype/tusfloresamor',
                'https://github.com/wtaype/wiimage'
            ]
        };
        
        console.log('🎯 WIBCP System Information:', systemInfo);
        
        // Display user info in console
        setTimeout(() => {
            console.log(`
╔════════════════════════════════════════════════════════════════╗
║                    WIBCP v2.2 SMART - by @wtaype               ║
╠════════════════════════════════════════════════════════════════╣
║ 🎯 Call Center Tool Inteligente                               ║
║ 📱 Título Dinámico: ${systemInfo.features.dynamicTitle ? 'ACTIVADO' : 'DESACTIVADO'}                              ║
║ 🎤 Detección Smart: ${systemInfo.features.smartDetection ? 'ACTIVADO' : 'DESACTIVADO (Chrome)'}                              ║
║ ☁️  Integración Genesys: ${systemInfo.features.genesysIntegration ? 'ACTIVADO' : 'DESACTIVADO'}                          ║
║ 🖼️ Optimización Blob: ${systemInfo.features.blobOptimization ? 'ACTIVADO' : 'DESACTIVADO'}                           ║
║ 📊 Analytics Smart: ${systemInfo.features.smartAnalytics ? 'ACTIVADO' : 'DESACTIVADO'}                             ║
╠════════════════════════════════════════════════════════════════╣
║ 👤 Usuario: wtaype                                            ║
║ 🌐 Navegador: ${this.browser.toUpperCase()}                                           ║
║ 📅 Fecha: 2025-09-28 15:36:03 UTC                            ║
║ 🔗 GitHub: https://github.com/wtaype                         ║
╚════════════════════════════════════════════════════════════════╝
            `);
        }, 3000);
    },
    
    startPerformanceMonitoring() {
        // Monitor memory usage and performance
        setInterval(() => {
            if (performance && performance.memory) {
                const memInfo = {
                    used: Math.round(performance.memory.usedJSHeapSize / 1024 / 1024),
                    total: Math.round(performance.memory.totalJSHeapSize / 1024 / 1024),
                    limit: Math.round(performance.memory.jsHeapSizeLimit / 1024 / 1024)
                };
                
                // Log if memory usage is high
                if (memInfo.used > 50) {
                    console.log('📊 Memory Usage by @wtaype:', memInfo, 'MB');
                }
            }
        }, 300000); // Check every 5 minutes
    },
    
    // Enhanced analytics and reporting
    generateFullReport() {
        const report = {
            timestamp: new Date().toISOString(),
            user: 'wtaype',
            version: '2.2',
            browser: this.browser,
            
            // History analytics
            history: typeof this.getHistoryAnalytics === 'function' ? 
                this.getHistoryAnalytics() : null,
            
            // Notes statistics
            notes: typeof this.getNotesStats === 'function' ? 
                this.getNotesStats() : null,
                
            // Image statistics
            images: typeof this.getImageStats === 'function' ? 
                this.getImageStats() : null,
                
            // Genesys statistics
            genesys: typeof this.getGenesysStats === 'function' ? 
                this.getGenesysStats() : null,
                
            // System status
            system: {
                timerRunning: this.isTimerRunning,
                detectionActive: this.isRecognitionActive,
                genesysOpen: typeof this.isGenesysOpen === 'function' ? 
                    this.isGenesysOpen() : false,
                title: document.title,
                uptime: Date.now() - (window.appStartTime || Date.now())
            }
        };
        
        return report;
    },
    
    // Export comprehensive data
    exportFullData() {
        const report = this.generateFullReport();
        const now = new Date();
        const filename = `MIBCP_FullReport_wtaype_${now.toISOString().split('T')[0]}.json`;
        
        const exportData = {
            ...report,
            exportedBy: 'wtaype',
            github: 'https://github.com/wtaype',
            repositories: [
                'retodelmes', 'aver', 'cartadehawka', 
                'tusfloresamor', 'wiimage'
            ],
            metadata: {
                appVersion: 'WIBCP v2.2 Smart',
                exportDate: now.toISOString(),
                utcTime: '2025-09-28 15:36:03',
                format: 'JSON',
                compressed: false
            }
        };
        
        const blob = new Blob([JSON.stringify(exportData, null, 2)], 
            { type: 'application/json;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        a.click();
        
        URL.revokeObjectURL(url);
        this.showMessage(`📁 Reporte completo exportado: ${filename}`, 'success');
        
        console.log('📤 Full data exported by @wtaype:', {
            filename: filename,
            size: blob.size,
            timestamp: now.toISOString()
        });
        
        return exportData;
    },
    
    // System health check
    performHealthCheck() {
        const health = {
            timestamp: new Date().toISOString(),
            user: 'wtaype',
            overall: 'healthy',
            checks: {
                localStorage: this.testLocalStorage(),
                speechRecognition: !!this.recognition,
                dynamicTitle: !!this.titleUpdateInterval,
                blobUrls: typeof this.imageBlobUrls !== 'undefined' && 
                         this.imageBlobUrls instanceof Map,
                genesysIntegration: typeof this.genesysWindow !== 'undefined'
            },
            performance: {
                memory: performance.memory ? {
                    used: Math.round(performance.memory.usedJSHeapSize / 1024 / 1024),
                    total: Math.round(performance.memory.totalJSHeapSize / 1024 / 1024)
                } : 'not available',
                uptime: Date.now() - (window.appStartTime || Date.now())
            }
        };
        
        const failedChecks = Object.values(health.checks).filter(check => !check).length;
        if (failedChecks > 0) {
            health.overall = failedChecks > 2 ? 'critical' : 'warning';
        }
        
        console.log('🏥 System Health Check by @wtaype:', health);
        
        if (health.overall !== 'healthy') {
            this.showMessage(`⚠️ Sistema: ${health.overall} (${failedChecks} fallas)`, 'warning');
        }
        
        return health;
    },
    
    testLocalStorage() {
        try {
            const testKey = 'mibcp_test';
            const testValue = 'test_by_wtaype';
            localStorage.setItem(testKey, testValue);
            const retrieved = localStorage.getItem(testKey);
            localStorage.removeItem(testKey);
            return retrieved === testValue;
        } catch (e) {
            return false;
        }
    }
});

// Initialize the complete application when DOM is ready
$(document).ready(() => {
    // Set app start time for uptime calculation
    window.appStartTime = Date.now();
    
    // Initialize app if not already initialized
    if (!window.app) {
        window.app = new MIBCPApp();
    }
    
    // Initialize all systems
    if (typeof window.app.initializeApp === 'function') {
        window.app.initializeApp();
    }
    
    // Perform initial health check after 5 seconds
    setTimeout(() => {
        if (typeof window.app.performHealthCheck === 'function') {
            window.app.performHealthCheck();
        }
    }, 5000);
    
    // Display complete shortcut information
    const shortcuts = window.app.browser === 'chrome' ? 
        '├─ ⚠️  Detección con advertencia inteligente (Chrome)' :
        '├─ ⌨️  D: Toggle detección automática';
        
    console.log(`
🎯 WIBCP v2.2 SMART - Complete Call Center Tool by @wtaype
├─ ⌨️  Espacio: Start/Stop timer
├─ ⌨️  R: Reset timer  
${shortcuts}
├─ ⌨️  G: Abrir Genesys Cloud
├─ ⌨️  Ctrl+G: Enfocar ventana Genesys
├─ ⌨️  Ctrl+Shift+G: Abrir Genesys (global)
├─ ⌨️  Ctrl+S: Guardar notas (en área de notas)
├─ ⌨️  1-4: Focus image slots
├─ 🌐 Browser: ${window.app.browser} (${window.app.browser === 'edge' ? 'OPTIMAL' : 'OK'})
├─ 📱 Dynamic title: ENABLED
├─ 🧠 Smart warnings: ON-DEMAND
├─ ☁️  Genesys Cloud: INTEGRATED
├─ 🖼️ Blob optimization: ENABLED
├─ 📊 Smart analytics: ENABLED
├─ 👤 User: wtaype
├─ 📅 Date: 2025-09-28 15:36:03 UTC
└─ 🔗 GitHub: https://github.com/wtaype
    `);
    
    // Show final initialization message
    setTimeout(() => {
        window.app.showMessage('🎉 WIBCP LISTO!', 'success');
    }, 4000);
});

// Global keyboard shortcuts for power users
$(document).on('keydown', (e) => {
    // Ctrl+Alt+H for health check
    if ((e.ctrlKey || e.metaKey) && e.altKey && e.key === 'h') {
        e.preventDefault();
        if (window.app && typeof window.app.performHealthCheck === 'function') {
            window.app.performHealthCheck();
        }
    }
    
    // Ctrl+Alt+E for full export
    if ((e.ctrlKey || e.metaKey) && e.altKey && e.key === 'e') {
        e.preventDefault();
        if (window.app && typeof window.app.exportFullData === 'function') {
            window.app.exportFullData();
        }
    }
    
    // Ctrl+Alt+I for system info
    if ((e.ctrlKey || e.metaKey) && e.altKey && e.key === 'i') {
        e.preventDefault();
        if (window.app && typeof window.app.displaySystemInfo === 'function') {
            window.app.displaySystemInfo();
        }
    }
});

// Enhanced cleanup on page unload
$(window).on('beforeunload', () => {
    console.log('👋 WIBCP v2.2 Smart shutting down gracefully by @wtaype');
    
    if (window.app) {
        // Save all data before unload
        if (typeof window.app.cleanupResources === 'function') {
            window.app.cleanupResources();
        }
        
        // Cleanup Genesys resources
        if (typeof window.app.cleanupGenesysResources === 'function') {
            window.app.cleanupGenesysResources();
        }
        
        // Final performance log
        const uptime = Date.now() - (window.appStartTime || Date.now());
        console.log(`📊 Session Summary by @wtaype - Uptime: ${Math.round(uptime/1000)}s`);
    }
});

// Additional styles for final touches
$('<style>').html(`
    /* Enhanced system-wide animations */
    @keyframes appInitialized {
        0% { opacity: 0.8; transform: scale(0.98); }
        50% { opacity: 1; transform: scale(1.01); }
        100% { opacity: 1; transform: scale(1); }
    }
    
    body.app-initialized {
        animation: appInitialized 1s ease-out;
    }
    
    /* Power user indicators */
    .power-user-active::after {
        content: '⚡ @wilder.taype';
        position: fixed;
        bottom: 5px;
        right: 5px;
        font-size: 0.7rem;
        color: var(--primary-color);
        opacity: 0.7;
        pointer-events: none;
        z-index: 9999;
    }
    
    /* System health indicators */
    .system-healthy {
        border-bottom: 2px solid var(--success-color);
    }
    
    .system-warning {
        border-bottom: 2px solid var(--warning-color);
    }
    
    .system-critical {
        border-bottom: 2px solid var(--danger-color);
        animation: criticalPulse 2s infinite;
    }
    
    @keyframes criticalPulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.7; }
    }
    
    /* GitHub integration styles */
    .github-integration {
        position: fixed;
        bottom: 10px;
        left: 10px;
        font-size: 0.7rem;
        color: var(--text-secondary);
        opacity: 0.6;
        pointer-events: none;
        z-index: 1000;
    }
    
    .github-integration a {
        color: var(--primary-color);
        text-decoration: none;
        pointer-events: all;
    }
    
    .github-integration a:hover {
        text-decoration: underline;
    }
    
    /* Mobile optimizations */
    @media (max-width: 768px) {
        .github-integration,
        .power-user-active::after {
            display: none;
        }
    }
`).appendTo('head');

// Add GitHub integration indicator
$('body').append(`
    <div class="github-integration">
        🔗 <a href="https://github.com/wtaype" target="_blank">@wtaype</a> | WIBCP v2.2
    </div>
`);

// Mark body as app initialized
setTimeout(() => {
    $('body').addClass('app-initialized power-user-active');
}, 4500);

console.log('🎉 WIBCP v2.2 Smart - Complete Initialization Module loaded! 🚀✨ by @wtaype');
console.log('📅 Built: 2025-09-28 15:36:03 UTC');
console.log('🔗 GitHub: https://github.com/wtaype');
console.log('👤 User: wtaype');


/*
=== WIBCP - Light About Modal - Real Project Description ===
Updated with actual WIBCP project information
Enhanced by @wtaype - 2025-09-28 17:49:27 UTC
*/

// Extend MIBCPApp with Real WIBCP About Modal functionality
$.extend(MIBCPApp.prototype, {
    
    setupAboutModal() {
        $('footer a[href="#about"]').on('click', (e) => {
            e.preventDefault();
            this.showLightAboutModal();
        });
        
        console.log('ℹ️ WIBCP About Modal initialized by @wtaype');
    },
    
    showLightAboutModal() {
        const aboutModalHtml = `
            <div class="light-about-modal" id="lightAboutModal">
                <div class="light-modal-content">
                    <div class="light-modal-header">
                        <div class="modal-icon">🎯</div>
                        <h3>Acerca de WIBCP</h3>
                        <button class="close-btn" onclick="app.dismissLightAboutModal()">×</button>
                    </div>
                    
                    <div class="light-modal-body">
                        <div class="about-section">
                            <h4>Acerca de WIBCP</h4>
                            <p>WIBCP (Smart Call Center Tool) es una herramienta inteligente diseñada para optimizar el trabajo diario en call centers, facilitando el control automático de tiempos de espera, detección por voz en español, gestión de imágenes con tecnología Blob, integración con Genesys Cloud y sistema de notas inteligentes. Fue desarrollado por mi <strong> <a class="ftx lkme" href="https://wtaype.github.io/" target="_blank">@wilder.taype</a> </strong>, creado con el fin de apoyar a mis compañeros brindando un apoyo más <em>rápido, inteligente y eficiente</em> en entornos profesionales.</p>
                        </div>
                        
                        <div class="features-section">
                            <h4>Características Principales</h4>
                            <div class="features-grid">
                                <div class="feature-item">🎤 Detección de voz automática</div>
                                <div class="feature-item">⏱️ Timer inteligente 60 segundos</div>
                                <div class="feature-item">☁️ Integración Genesys Cloud</div>
                                <div class="feature-item">🖼️ Gestión de imágenes Blob</div>
                                <div class="feature-item">📝 Notas con autosave</div>
                                <div class="feature-item">📱 Título dinámico en tiempo real</div>
                            </div>
                        </div>
                        
                        <div class="versions-section">
                            <h4>Versión Actual</h4>
                            <p><strong>WIBCP v2.2 Smart</strong> - Versión completa 2025 con todas las características inteligentes</p>
                        </div>
                        
                        <div class="privacy-section">
                            <h4>Política de Privacidad y Seguridad</h4>
                            <p class="privacy-text">Todos los datos ingresados se almacenan localmente en el dispositivo del usuario, garantizando la privacidad al no compartirse con terceros en ningún caso. Se recomienda proteger la información almacenada y utilizar "WIBCP" exclusivamente con fines profesionales en entornos de call center. La aplicación está implementada con funciones de seguridad que incluyen botones de reset y limpieza para eliminar los datos almacenados automáticamente, cleanup de Blob URLs, gestión inteligente de memoria y detección de navegador optimizada, asegurando que toda la información se mantenga segura y privada en todo momento.</p>
                        </div>
                        
                        <button class="understand-btn" onclick="app.dismissLightAboutModal()">ENTENDIDO</button>
                    </div>
                </div>
            </div>
        `;
        
        $('body').prepend(aboutModalHtml);
        
        console.log('ℹ️ WIBCP Real Project Modal shown by @wtaype');
    },
    
    dismissLightAboutModal() {
        $('#lightAboutModal').fadeOut(300, () => {
            $('#lightAboutModal').remove();
        });
        
        console.log('ℹ️ WIBCP Modal dismissed by @wtaype');
    }
});

// Initialize when ready
$(document).ready(() => {
    if (window.app && typeof window.app.setupAboutModal === 'function') {
        window.app.setupAboutModal();
    }
});

// Updated styles with features grid
$('<style>').html(`
    /* Light About Modal - Fixed Position */
    .light-about-modal {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(255, 255, 255, 0.25);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        z-index: 6000;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: lightModalFadeIn 0.3s ease-out;
    }
    
    .light-modal-content {
        background: rgba(255, 255, 255, 0.9);
        backdrop-filter: blur(25px);
        -webkit-backdrop-filter: blur(25px);
        border: 1px solid rgba(255, 255, 255, 0.3);
        border-radius: 20px;
        width: 90%;
        max-width: 650px;
        max-height: 85vh;
        overflow-y: auto;
        box-shadow: 
            0 20px 50px rgba(0, 0, 0, 0.1),
            0 10px 25px rgba(0, 0, 0, 0.05),
            inset 0 1px 0 rgba(255, 255, 255, 0.6);
        animation: lightModalSlideUp 0.4s ease-out;
    }
    
    .light-modal-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1.5rem 1.5rem 1rem;
        border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    }
    
    .modal-icon {
        font-size: 1.8rem;
        margin-right: 0.75rem;
    }
    
    .light-modal-header h3 {
        color: #2d3748;
        margin: 0;
        font-size: 1.25rem;
        font-weight: 700;
        flex: 1;
    }
    
    .close-btn {
        background: rgba(239, 68, 68, 0.1);
        color: #e53e3e;
        border: none;
        border-radius: 12px;
        width: 32px;
        height: 32px;
        cursor: pointer;
        transition: all 0.2s ease;
        font-size: 1.2rem;
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .close-btn:hover {
        background: rgba(239, 68, 68, 0.2);
        transform: scale(1.1);
    }
    
    .light-modal-body {
        padding: 1.5rem;
    }
    
    .about-section,
    .features-section,
    .versions-section,
    .privacy-section {
        margin-bottom: 1.5rem;
    }
    
    .light-modal-body h4 {
        color: #2d3748;
        font-size: 1rem;
        font-weight: 700;
        margin: 0 0 0.75rem 0;
        border-bottom: 2px solid rgba(102, 126, 234, 0.2);
        padding-bottom: 0.25rem;
    }
    
    .light-modal-body p {
        color: #4a5568;
        line-height: 1.5;
        margin-bottom: 0.75rem;
        font-size: 0.9rem;
    }
    
    .light-modal-body em {
        color: #3182ce;
        font-style: italic;
        font-weight: 600;
    }
    
    .light-modal-body strong {
        color: #2d3748;
        font-weight: 700;
    }
    
    /* Features Grid */
    .features-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        gap: 0.75rem;
        margin-top: 0.5rem;
    }
    
    .feature-item {
        background: linear-gradient(135deg, 
            rgba(102, 126, 234, 0.1) 0%, 
            rgba(59, 130, 246, 0.1) 50%, 
            rgba(16, 185, 129, 0.1) 100%);
        color: #2d3748;
        padding: 0.75rem;
        border-radius: 10px;
        text-align: center;
        font-size: 0.85rem;
        font-weight: 600;
        border: 1px solid rgba(102, 126, 234, 0.2);
        backdrop-filter: blur(10px);
        transition: all 0.2s ease;
    }
    
    .feature-item:hover {
        background: linear-gradient(135deg, 
            rgba(102, 126, 234, 0.2) 0%, 
            rgba(59, 130, 246, 0.2) 50%, 
            rgba(16, 185, 129, 0.2) 100%);
        transform: translateY(-2px);
        box-shadow: 0 4px 15px rgba(102, 126, 234, 0.2);
    }
    
    .privacy-text {
        font-size: 0.85rem !important;
        color: #4a5568 !important;
        line-height: 1.5 !important;
        text-align: justify;
        margin-bottom: 0 !important;
    }
    
    .understand-btn {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border: none;
        padding: 0.875rem 1.5rem;
        border-radius: 12px;
        font-weight: 700;
        font-size: 0.9rem;
        cursor: pointer;
        width: 100%;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
        margin-top: 1.5rem;
    }
    
    .understand-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
        background: linear-gradient(135deg, #5a67d8 0%, #667eea 100%);
    }
    
    @keyframes lightModalFadeIn {
        from { 
            opacity: 0; 
            backdrop-filter: blur(0px);
        }
        to { 
            opacity: 1; 
            backdrop-filter: blur(20px);
        }
    }
    
    @keyframes lightModalSlideUp {
        from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
        }
        to {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
    }
    
    /* Custom scrollbar */
    .light-modal-content::-webkit-scrollbar {
        width: 8px;
    }
    
    .light-modal-content::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0.05);
        border-radius: 4px;
    }
    
    .light-modal-content::-webkit-scrollbar-thumb {
        background: rgba(102, 126, 234, 0.4);
        border-radius: 4px;
    }
    
    .light-modal-content::-webkit-scrollbar-thumb:hover {
        background: rgba(102, 126, 234, 0.6);
    }
    
    /* Mobile responsive */
    @media (max-width: 768px) {
        .light-modal-content {
            width: 95%;
            margin: 1rem;
            max-height: 90vh;
        }
        
        .light-modal-header,
        .light-modal-body {
            padding: 1rem;
        }
        
        .features-grid {
            grid-template-columns: 1fr;
            gap: 0.5rem;
        }
        
        .feature-item {
            font-size: 0.8rem;
            padding: 0.5rem;
        }
        
        .light-modal-body h4 {
            font-size: 0.95rem;
        }
        
        .light-modal-body p,
        .privacy-text {
            font-size: 0.85rem !important;
        }
    }
`).appendTo('head');
$('.wty').text(new Date().getFullYear());

console.log('🎯 WIBCP Real Project About Modal loaded! ✨ by @wtaype');
console.log('📅 Updated: 2025-09-28 17:49:27 UTC');
console.log('👤 User: wtaype');
console.log('🚀 Project: WIBCP Smart Call Center Tool');