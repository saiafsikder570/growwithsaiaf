document.addEventListener('DOMContentLoaded', () => {
    // Portfolio Filter Logic
    const filters = document.querySelectorAll('#portfolio-filters-final li');
    const portfolioItems = document.querySelectorAll('.portfolio-card');

    if (filters.length > 0 && portfolioItems.length > 0) {
        filters.forEach(filter => {
            filter.addEventListener('click', function() {
                filters.forEach(item => item.classList.remove('filter-active'));
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
    }
});
