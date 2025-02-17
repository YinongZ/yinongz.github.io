const calendarGrid = document.querySelector('.calendar-grid');
const previewImage = document.querySelector('.preview-content img');
const previewText = document.querySelector('.preview-content p');
const previewLink = document.querySelector('.preview-content a');

// Sample data for previews and readings
const previews = {
  1: {
    image: 'images/previews/day1.png',
    text: 'Read: "The Art of Toilet Reading"',
    link: 'readings/day1.html',
  },
  2: {
    image: 'images/previews/day2.png',
    text: 'Play: "The 2nd Art of Toilet Reading"',
    link: 'readings/day2.html',
  },
  3: {
    image: 'images/previews/day3.jpg',
    text: 'News: "Latest in Toilet Tech"',
    link: 'readings/day3.html',
  },
  // Add more days here
};

// Function to generate the calendar
function generateCalendar(year, month) {
  const firstDay = new Date(2025, month, 1); // First day of the month
  const lastDay = new Date(2025, month + 1, 0); // Last day of the month
  const startingDay = firstDay.getDay(); // Day of the week (0 = Sunday, 6 = Saturday)

  let calendarHTML = '';

  // Add empty cells for days before the start of the month
  for (let i = 0; i < startingDay; i++) {
    calendarHTML += `<div class="day empty"></div>`;
  }

  // Add days of the month
  for (let day = 1; day <= lastDay.getDate(); day++) {
    calendarHTML += `<div class="day">${day}</div>`;
  }

  calendarGrid.innerHTML = calendarHTML;

  // Add click event to each day
  const days = document.querySelectorAll('.day:not(.empty)');
  days.forEach(day => {
    day.addEventListener('click', () => {
      const dayNumber = day.textContent;
      if (previews[dayNumber]) {
        previewImage.src = previews[dayNumber].image;
        previewText.textContent = previews[dayNumber].text;
        previewLink.href = previews[dayNumber].link;
      }
      console.log('Clicked on day:', dayNumber); // Log the clicked day
    });
  });
}

// Generate calendar for February 2025
console.log('Generating calendar for February 2025');
generateCalendar(2025, 1); // Note: Months are 0-indexed (1 = February)