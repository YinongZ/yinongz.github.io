// JavaScript for content pages

document.addEventListener('DOMContentLoaded', function() {
    // Parse URL parameters to get the day
    const urlParams = new URLSearchParams(window.location.search);
    const day = urlParams.get('day');
    
    if (day) {
        // Update page content based on the day parameter
        updatePageForDay(day);
    }
    
    // Function to dynamically update page content based on the day
    function updatePageForDay(dayNumber) {
        // This is a simplified example. In a real application, you'd fetch content from a database
        // or load different HTML files based on the day
        
        // Update date display
        document.querySelector('.day-number').textContent = dayNumber;
        
        // Update navigation links
        const prevDay = parseInt(dayNumber) - 1;
        const nextDay = parseInt(dayNumber) + 1;
        
        const prevLink = document.querySelector('.prev-content');
        const nextLink = document.querySelector('.next-content');
        
        if (prevLink && prevDay >= 1) {
            prevLink.href = `content.html?day=${prevDay}`;
            prevLink.textContent = `← Previous (Feb ${prevDay})`;
        }
        
        if (nextLink && nextDay <= 28) { // Assuming February has 28 days
            nextLink.href = `content.html?day=${nextDay}`;
            nextLink.textContent = `Next (Feb ${nextDay}) →`;
        }
        
        // You could load different content based on the day
        // For a simple implementation, this would work with the existing structure
    }
    
    // Share button functionality
    document.querySelectorAll('.share-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const pageTitle = document.title;
            const pageUrl = window.location.href;
            
            switch(this.classList[1]) {
                case 'facebook':
                    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`, 
                                '_blank', 'width=600,height=400');
                    break;
                case 'twitter':
                    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(pageTitle)}`, 
                                '_blank', 'width=600,height=400');
                    break;
                case 'email':
                    window.location.href = `mailto:?subject=${encodeURIComponent(pageTitle)}&body=${encodeURIComponent(`Check out this article: ${pageUrl}`)}`;
                    break;
            }
        });
    });
});