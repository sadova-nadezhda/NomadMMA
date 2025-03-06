export function filterMember() {
  const weightLinks = document.querySelectorAll('.tab__content.active .teams-page__weight a');
  const cardTeams = document.querySelectorAll('.teams-card');

  let selectedWeight = 'all';

  function applyFilters() {
      cardTeams.forEach(card => {
          const cardWeight = card.getAttribute('data-weight');

          const matchesWeight = selectedWeight === 'all' || cardWeight===selectedWeight;

          if ( matchesWeight) {
              card.classList.remove('teams-card-hide');
          } else {
              card.classList.add('teams-card-hide');
          }
      });
  }

  function handleFilterClick(links) {
      links.forEach(link => {
          link.addEventListener('click', function (e) {
              e.preventDefault();
              links.forEach(l => l.classList.remove('active'));
              this.classList.add('active');
              selectedWeight = this.getAttribute('data-weight');

              applyFilters();
          });
      });
  }

  handleFilterClick(weightLinks, 'weight');
}