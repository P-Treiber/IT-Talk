export class PairingTimer{

    constructor(private time: number){
        this.startTimer();
    }

    private timeOutId: number;
    private startTimer() {
        this.timeOutId = setTimeout(() => this.stop(), this.time);
    }
    
    private isRunning = true;

    public isStarted(): boolean {
        return this.isRunning;
    }
    
    public stop(): void {
        this.isRunning = false;
        clearTimeout(this.timeOutId);
    }
    
    private cycleCounter = 0;
    public start(): void {
        this.cycleCounter++;
        this.isRunning = true;
        this.startTimer();    
    }

    public isTimeForABreak(): boolean {
        return this.cycleCounter > 2;
    }
}