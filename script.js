document.addEventListener('DOMContentLoaded', () => {
    const filters = document.querySelectorAll('#portfolio-filters li');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filters.forEach(filter => {
        filter.addEventListener('click', function() {
            // Remove active class from all filters
            filters.forEach(item => item.classList.remove('filter-active'));
            // Add active class to the clicked filter
            this.classList.add('filter-active');

            const filterValue = this.getAttribute('data-filter');

            portfolioItems.forEach(item => {
                if (filterValue === '*' || item.classList.contains(filterValue.substring(1))) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});




// GLightbox initialization
const lightbox = GLightbox({
    selector: '.glightbox'
});
