// Main JavaScript file for Throne Entertainment website

document.addEventListener('DOMContentLoaded', function() {
  // Highlight current date in calendar if we're on the calendar page
  if (document.querySelector('.calendar-grid')) {
      const today = new Date();
      const currentDay = today.getDate();
      const dayElements = document.querySelectorAll('.day:not(.empty)');
      
      dayElements.forEach(day => {
          const dateElement = day.querySelector('.date');
          if (dateElement && parseInt(dateElement.textContent) === currentDay) {
              day.classList.add('today');
          }
      });
  }
  
  // Mobile navigation toggle (if you decide to add a hamburger menu later)
  const setupMobileNav = () => {
      // Code for mobile navigation would go here
  };
  
  // Handle quiz submission if we're on a content page with a quiz
  if (document.querySelector('.quiz-form')) {
      setupQuiz();
  }
  
  // Function to set up quiz functionality
  function setupQuiz() {
      const submitButton = document.querySelector('.submit-quiz');
      const resultsDiv = document.querySelector('.quiz-results');
      
      submitButton.addEventListener('click', function() {
          // Example answers (you would customize these)
          const correctAnswers = {
              q1: 'c', // 75%
              q2: 'c'  // Japan
          };
          
          let score = 0;
          let feedback = '';
          
          // Check question 1
          const q1Selected = document.querySelector('input[name="q1"]:checked');
          if (q1Selected) {
              if (q1Selected.value === correctAnswers.q1) {
                  score++;
                  feedback += '<p>Question 1: Correct! About 75% of people admit to using their smartphone on the toilet.</p>';
              } else {
                  feedback += '<p>Question 1: Incorrect. The correct answer is 75%.</p>';
              }
          } else {
              feedback += '<p>Question 1: No answer selected.</p>';
          }
          
          // Check question 2
          const q2Selected = document.querySelector('input[name="q2"]:checked');
          if (q2Selected) {
              if (q2Selected.value === correctAnswers.q2) {
                  score++;
                  feedback += '<p>Question 2: Correct! Japan is known for having the most high-tech toilets in the world.</p>';
              } else {
                  feedback += '<p>Question 2: Incorrect. The correct answer is Japan.</p>';
              }
          } else {
              feedback += '<p>Question 2: No answer selected.</p>';
          }
          
          // Display results
          resultsDiv.innerHTML = `
              <h3>Your Score: ${score}/2</h3>
              ${feedback}
          `;
          resultsDiv.style.display = 'block';
      });
  }
  
  // Add smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          
          const targetId = this.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);
          
          if (targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop,
                  behavior: 'smooth'
              });
          }
      });
  });
});