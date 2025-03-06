export function tabsInit() {
  const tabs = document.querySelectorAll(".tab");
  const contents = document.querySelectorAll(".tab__content");

  tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => {
          tabs.forEach(t => t.classList.remove("active"));
          contents.forEach(c => c.classList.remove("active"));
          
          tab.classList.add("active");
          contents[index].classList.add("active");

          initFilter(contents[index]);
      });
  });
}

function initFilter(activeTabContent) {
  const filterLinks = activeTabContent.querySelectorAll(".teams-page__weight a");
  const cards = activeTabContent.querySelectorAll(".teams-page__card");
  if(filterLinks) {
    filterLinks.forEach(link => {
      link.addEventListener("click", (event) => {
          event.preventDefault();
          
          const selectedWeight = link.getAttribute("data-weight");
          
          // Удаляем активный класс у всех ссылок
          filterLinks.forEach(l => l.classList.remove("active"));
          link.classList.add("active");
          
          // Фильтруем карточки бойцов
          cards.forEach(card => {
              const cardWeight = card.getAttribute("data-weight");
              
              if (selectedWeight === "all" || cardWeight === selectedWeight) {
                  card.style.display = "flex";
              } else {
                  card.style.display = "none";
              }
          });
      });
    });
  }
}