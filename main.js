(function($) {
    'use strict';
    
    const WiBCP = {
        timer: {
            seconds: 0,
            interval: null,
            isRunning: false,
            startTime: null
        },
        history: [],
        
        init() {
            this.loadHistory();
            this.setupEvents();
            this.updateTimerDisplay();
            this.renderHistory();
        },
        
        setupEvents() {
            $('#startBtn').on('click', () => this.startTimer());
            $('#stopBtn').on('click', () => this.stopTimer());
            $('#resetBtn').on('click', () => this.resetTimer());
            $('#genesysBtn').on('click', () => this.openGenesysURL());
            $('#genesysInput').on('keypress', (e) => {
                if (e.key === 'Enter') this.openGenesysURL();
            });
        },
        
        startTimer() {
            if (this.timer.isRunning) return;
            
            this.timer.isRunning = true;
            this.timer.startTime = Date.now() - (this.timer.seconds * 1000);
            
            this.timer.interval = setInterval(() => {
                this.timer.seconds = Math.floor((Date.now() - this.timer.startTime) / 1000);
                this.updateTimerDisplay();
                this.updateProgressRing();
            }, 1000);
            
            this.updateButtons();
            $('#timerStatus').text('En ejecución...');
            this.showToast('Cronómetro iniciado', 'success');
        },
        
        stopTimer() {
            if (!this.timer.isRunning) return;
            
            clearInterval(this.timer.interval);
            this.timer.isRunning = false;
            
            if (this.timer.seconds > 0) {
                this.saveToHistory();
            }
            
            this.updateButtons();
            $('#timerStatus').text('Pausado');
            this.showToast('Cronómetro pausado', 'warning');
        },
        
        resetTimer() {
            clearInterval(this.timer.interval);
            this.timer.seconds = 0;
            this.timer.isRunning = false;
            
            this.updateTimerDisplay();
            this.updateProgressRing();
            this.updateButtons();
            $('#timerStatus').text('Listo para iniciar');
            this.showToast('Cronómetro reiniciado', 'info');
        },
        
        updateTimerDisplay() {
            const minutes = Math.floor(this.timer.seconds / 60);
            const seconds = this.timer.seconds % 60;
            $('#timerValue').text(`${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`);
        },
        
        updateProgressRing() {
            const circle = $('.progress-ring-circle')[0];
            const maxSeconds = 3600;
            const progress = Math.min(this.timer.seconds / maxSeconds, 1);
            const offset = 502.65 * (1 - progress);
            circle.style.strokeDashoffset = offset;
            
            if (this.timer.seconds > 1800) {
                $(circle).addClass('warning');
            } else {
                $(circle).removeClass('warning');
            }
        },
        
        updateButtons() {
            $('#startBtn').prop('disabled', this.timer.isRunning);
            $('#stopBtn').prop('disabled', !this.timer.isRunning);
            $('#resetBtn').prop('disabled', this.timer.seconds === 0 && !this.timer.isRunning);
        },
        
        saveToHistory() {
            const duration = this.timer.seconds;
            const minutes = Math.floor(duration / 60);
            const seconds = duration % 60;
            
            const entry = {
                id: Date.now(),
                duration: duration,
                durationText: `${minutes}m ${seconds}s`,
                timestamp: new Date().toISOString(),
                date: new Date().toLocaleDateString('es-ES'),
                time: new Date().toLocaleTimeString('es-ES')
            };
            
            this.history.unshift(entry);
            if (this.history.length > 20) this.history.pop();
            
            localStorage.setItem('wibcp_history', JSON.stringify(this.history));
            this.renderHistory();
            this.showToast('Sesión guardada en el historial', 'success');
        },
        
        renderHistory() {
            const $container = $('#historyList');
            
            if (this.history.length === 0) {
                $container.html(`
                    <div class="empty-state">
                        <i class="fas fa-clock"></i>
                        <h4>Sin historial</h4>
                        <p>Tus sesiones aparecerán aquí</p>
                    </div>
                `);
                return;
            }
            
            const html = this.history.map(entry => {
                const durationClass = this.getDurationClass(entry.duration);
                return `
                    <div class="history-item ${durationClass}">
                        <div class="history-content">
                            <div class="history-duration">${entry.durationText}</div>
                            <div class="history-time">
                                <span><i class="fas fa-calendar"></i> ${entry.date}</span>
                                <span><i class="fas fa-clock"></i> ${entry.time}</span>
                            </div>
                        </div>
                        <button class="history-delete" data-id="${entry.id}">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                `;
            }).join('');
            
            $container.html(html);
            
            $('.history-delete').on('click', (e) => {
                const id = $(e.currentTarget).data('id');
                this.deleteHistory(id);
            });
        },
        
        getDurationClass(seconds) {
            if (seconds < 300) return 'duration-short';
            if (seconds > 1800) return 'duration-long';
            return 'duration-normal';
        },
        
        deleteHistory(id) {
            this.history = this.history.filter(entry => entry.id !== id);
            localStorage.setItem('wibcp_history', JSON.stringify(this.history));
            this.renderHistory();
            this.showToast('Entrada eliminada', 'info');
        },
        
        loadHistory() {
            const stored = localStorage.getItem('wibcp_history');
            this.history = stored ? JSON.parse(stored) : [];
        },
        
        openGenesysURL() {
            const url = $('#genesysInput').val().trim();
            
            if (!url) {
                this.showToast('Ingresa una URL válida', 'error');
                return;
            }
            
            if (!url.includes('genesys') && !url.includes('mypurecloud')) {
                this.showToast('URL no parece ser de Genesys Cloud', 'warning');
            }
            
            window.open(url, '_blank');
            $('#genesysInput').val('');
            this.showToast('Abriendo conversación...', 'success');
        },
        
        showToast(message, type = 'info') {
            const icons = {
                success: 'fa-check-circle',
                error: 'fa-exclamation-circle',
                warning: 'fa-exclamation-triangle',
                info: 'fa-info-circle'
            };
            
            const $toast = $(`
                <div class="toast toast-${type}">
                    <i class="fas ${icons[type]}"></i>
                    <span>${message}</span>
                </div>
            `);
            
            $('body').append($toast);
            
            setTimeout(() => $toast.addClass('show'), 10);
            setTimeout(() => {
                $toast.removeClass('show');
                setTimeout(() => $toast.remove(), 300);
            }, 3000);
        }
    };
    
    $(document).ready(() => {
        WiBCP.init();
        window.app = WiBCP;
    });
    
})(jQuery);

console.log('🎯 WiBCP v2.2 - Cronómetro Profesional cargado! ⏱️ by @wtaype');