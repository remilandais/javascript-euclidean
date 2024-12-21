const audioCtx = new (window.AudioContext || window.webkitAudioContext)();


function playSound (frequency = 440, duration = 1){
    const osc = audioCtx.createOscillator();
    const envelope = audioCtx.createGain()
    osc.connect(envelope);
    envelope.connect(audioCtx.destination)

    envelope.gain.setValueAtTime(0, audioCtx.currentTime);
    envelope.gain.linearRampToValueAtTime(0.05,audioCtx.currentTime + 0.005);
    envelope.gain.linearRampToValueAtTime(0,audioCtx.currentTime + duration/10 );
    osc.frequency.setValueAtTime(frequency, audioCtx.currentTime);
    osc.start();
    
    osc.stop(audioCtx.currentTime + duration);
    
}