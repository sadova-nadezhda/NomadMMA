export function filterMember() {
  const typeLinks = document.querySelectorAll('.teams-page__type a');
  const weightLinks = document.querySelectorAll('.teams-page__weight a');
  const cardTeams = document.querySelectorAll('.teams-card');

  let selectedType = 'all';
  let selectedWeight = 'all';

  function applyFilters() {
      cardTeams.forEach(card => {
          const cardType = card.getAttribute('data-type');
          const cardWeight = card.getAttribute('data-weight');

          const matchesType = selectedType === 'all' || cardType===selectedType;
          const matchesWeight = selectedWeight === 'all' || cardWeight===selectedWeight;

          if (matchesType && matchesWeight) {
              card.classList.remove('teams-card-hide');
          } else {
              card.classList.add('teams-card-hide');
          }
      });
  }

  function handleFilterClick(links, filterType) {
      links.forEach(link => {
          link.addEventListener('click', function (e) {
              e.preventDefault();
              links.forEach(l => l.classList.remove('active'));
              this.classList.add('active');

              if (filterType === 'type') {
                  selectedType = this.textContent.trim().toLowerCase();
              } else {
                  selectedWeight = this.getAttribute('data-weight');
              }

              applyFilters();
          });
      });
  }

  handleFilterClick(typeLinks, 'type');
  handleFilterClick(weightLinks, 'weight');

  applyFilters();
}