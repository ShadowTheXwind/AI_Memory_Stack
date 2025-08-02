const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
function playTone(frequency = 440, duration = 2) {
  const oscillator = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  oscillator.type = 'sine';
  oscillator.frequency.setValueAtTime(frequency, audioCtx.currentTime);
  gainNode.gain.setValueAtTime(0.2, audioCtx.currentTime);

  oscillator.start();
  oscillator.stop(audioCtx.currentTime + duration);
}
window.addEventListener('scroll', () => {
  playTone(330); // A low, mystical tone
});
