// script.js

document.addEventListener('DOMContentLoaded', () => {
  const searchBtn = document.querySelector('.search-bar button');
  const searchInput = document.querySelector('.search-bar input');
  const categorySelect = document.querySelector('.search-bar select');
  const productCards = document.querySelectorAll('.product-highlight .card');

  searchBtn.addEventListener('click', () => {
    const keyword = searchInput.value.trim().toLowerCase();
    const selectedCategory = categorySelect.value.toLowerCase();

    let matched = false;

    productCards.forEach(card => {
      const productName = card.querySelector('h4').textContent.toLowerCase();
      const imgAlt = card.querySelector('img').alt.toLowerCase();

      if (
        (keyword && productName.includes(keyword)) ||
        (selectedCategory !== 'all categories' && imgAlt.includes(selectedCategory))
      ) {
        card.style.display = 'block';
        matched = true;
      } else {
        card.style.display = 'none';
      }
    });

    if (!matched && keyword === '') {
      productCards.forEach(card => card.style.display = 'block');
    }
  });
});
