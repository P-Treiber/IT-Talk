import {PairingTimer} from "./pairingtimer"

describe('Pairing timer unit tests', () => {
    let target: PairingTimer;

    beforeEach(() => {
        jasmine.clock().install();
        target = new PairingTimer(15);
    });

    afterEach(() => {
       jasmine.clock().uninstall(); 
    });

    it("is started by default", () => {
        expect(target.isStarted()).toBe(true);
    });

    it("can be stopped", () => {
        target.stop();
        expect(target.isStarted()).toBe(false);
    });

    it("can be restarted", () => {
        target.stop();
        target.start();
        expect(target.isStarted()).toBe(true);
    });

    it("is not started after 15 seconds", () => {
        jasmine.clock().tick(16);
        expect(target.isStarted()).toBe(false);
    });

    it("is not started after 10 seconds", () => {
        target = new PairingTimer(10);
        jasmine.clock().tick(11);
        expect(target.isStarted()).toBe(false);
    });

    it("after a restart, is stopped again after 15s", () => {
        restartTimer();
        expect(target.isStarted()).toBe(true);
    });

    it("timer triggers after a restart again", () => {
        restartTimer();
        jasmine.clock().tick(16);
        expect(target.isStarted()).toBe(false);
    });

    it("manually stopping the clock works as expected", () => {
        jasmine.clock().tick(10);
        target.stop();
        target.start();
        jasmine.clock().tick(10);
        expect(target.isStarted()).toBe(true);
    });

    it("does not signal a break after first start", () => {
        expect(target.isTimeForABreak()).toBe(false);
    });

    it("does signal a break after 3 cycles", () => {
        [1, 1, 1].forEach(restartTimer);
        expect(target.isTimeForABreak()).toBe(true); 
    });

    it("MIr ist dran", () => {
        expect(true).toBeFalsy();
    })

    function restartTimer() {
        jasmine.clock().tick(16);
        target.start();
    }
})