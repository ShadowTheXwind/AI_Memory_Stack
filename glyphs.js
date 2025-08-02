document.querySelectorAll('.glyph').forEach((glyph, i) => {
  glyph.addEventListener('mouseenter', () => playTone(220 + i * 40));
});
