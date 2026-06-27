// Simple mobile navigation hamburger toggle & active link auto-highlighting
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Animate hamburger bars to 'X' shape
            const spans = hamburger.querySelectorAll('span');
            if (navLinks.classList.contains('active')) {
                spans[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }

    // Auto-highlight active link based on current filename
    const currentPath = window.location.pathname.split('/').pop().toLowerCase();
    const navLinksList = document.querySelectorAll('.nav-links a');
    
    navLinksList.forEach(link => {
        const linkPath = link.getAttribute('href').toLowerCase();
        
        if (currentPath === linkPath) {
            link.classList.add('active');
        } else if (currentPath === '' || currentPath === 'index.html') {
            if (linkPath === 'index.html') link.classList.add('active');
        } else {
            // Group other sub-files under main nav items
            if (linkPath.includes('singly_linked_lists') || linkPath.includes('doubly_linked_lists') || linkPath.includes('circularly_linked_lists')) {
                if (currentPath.includes('linked_list') && linkPath === 'singly_linked_lists_collapsible.html') {
                    link.classList.add('active');
                }
            } else if (linkPath === 'stack.html') {
                const isStackGroup = ['stack.html', 'queue.html', 'infix.html', 'postfix.html'].includes(currentPath);
                if (isStackGroup) link.classList.add('active');
            } else if (linkPath === 'binary_tree.html') {
                const isTreeGroup = ['binary_tree.html', 'binary_search_tree.html'].includes(currentPath);
                if (isTreeGroup) link.classList.add('active');
            } else if (linkPath === 'linear_search.html') {
                const isSearchGroup = ['linear_search.html', 'binary_search.html'].includes(currentPath);
                if (isSearchGroup) link.classList.add('active');
            } else if (linkPath === 'insertion_sort.html') {
                const isSortGroup = ['insertion_sort.html', 'quick_sort.html', 'merge_sort.html', 'heap_sort.html'].includes(currentPath);
                if (isSortGroup) link.classList.add('active');
            }
        }
    });
});
