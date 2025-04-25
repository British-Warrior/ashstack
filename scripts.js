// XP Tile Modal Triggers
document.addEventListener('DOMContentLoaded', () => {
  const tiles = document.querySelectorAll('.tile');
  tiles.forEach(tile => {
    tile.addEventListener('click', () => {
      const id = tile.textContent.toLowerCase().trim();
      const modal = document.getElementById(`modal-${id}`);
      if (modal) modal.classList.remove('hidden');
    });
  });

  // Modal Close Buttons
  const closeButtons = document.querySelectorAll('.modal .close');
  closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-close');
      document.getElementById(target).classList.add('hidden');
    });
  });

  // CTA Button
  document.getElementById('ctaButton')?.addEventListener('click', () => {
    document.getElementById('ctaModal')?.classList.remove('hidden');
  });

  document.querySelector('#ctaModal .close')?.addEventListener('click', () => {
    document.getElementById('ctaModal')?.classList.add('hidden');
  });

  // "Join Now" inside CTA Modal
  document.getElementById('joinNow')?.addEventListener('click', () => {
    alert('Functionality coming soon. Ash will notify you when active.');
  });

  // Stripe Button Placeholder
  const stripeButtons = document.querySelectorAll('.stripe-button');
  stripeButtons.forEach(button => {
    button.addEventListener('click', () => {
      const tier = button.getAttribute('data-tier');
      const type = button.getAttribute('data-type');
      const anon = document.getElementById(`anon-${tier}`)?.checked;

      alert(`💡 Simulated: ${type} payment for "${tier}"\nAnonymous: ${anon ? 'Yes' : 'No'}`);
      // Stripe integration hook goes here
    });
  });

  // Dark Mode Toggle
  const darkToggle = document.getElementById('darkModeToggle');
  darkToggle?.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    darkToggle.textContent = document.body.classList.contains('dark-mode') ?
      '☀️ Toggle Light Mode' : '🌓 Toggle Dark Mode';
  });

  // Quote Rotation (Ash Style)
  const quotes = [
    "What you build will outlast what you buy.",
    "Silence is not absence — it's readiness.",
    "To step forward is to change history.",
    "Legacy is a system, not a statue.",
    "Purpose is a technology. Deploy it well."
  ];
  const quoteEl = document.getElementById('ashQuote');
  if (quoteEl) {
    let i = 0;
    setInterval(() => {
      quoteEl.textContent = quotes[i];
      i = (i + 1) % quotes.length;
    }, 6000);
  }
});
