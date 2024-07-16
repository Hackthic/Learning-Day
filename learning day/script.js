const menuBtn = document.querySelector('.menu-btn');
  const nav = document.querySelector('nav');

  menuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
  });

 
  const toggleButton = document.getElementById('theme-toggle');
  const currentTheme = localStorage.getItem('theme') || 'light';
  
  document.body.classList.add(currentTheme + '-theme');
  
  toggleButton.addEventListener('click', () => {
    const newTheme = document.body.classList.contains('light-theme') ? 'dark' : 'light';
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(newTheme + '-theme');
    localStorage.setItem('theme', newTheme);
  });
  


 // Get the carousel elements
const carouselInner = document.querySelector('.carousel-inner');
const carouselNav = document.querySelector('.carousel-nav');
const prevBtn = document.querySelector('.nav-btn.prev');
const nextBtn = document.querySelector('.nav-btn.next');
const items = document.querySelectorAll('.item');

// Set the current item index
let currentItemIndex = 0;

// Function to show the next item
function showNextItem() {
  currentItemIndex++;
  if (currentItemIndex >= items.length) {
    currentItemIndex = 0;
  }
  updateCarousel();
}

// Function to show the previous item
function showPrevItem() {
  currentItemIndex--;
  if (currentItemIndex < 0) {
    currentItemIndex = items.length - 1;
  }
  updateCarousel();
}

// Function to update the carousel
function updateCarousel() {
  // Hide all items
  items.forEach((item) => {
    item.classList.remove('active');
  });

  // Show the current item
  items[currentItemIndex].classList.add('active');
}

// Add event listeners to the navigation buttons
prevBtn.addEventListener('click', showPrevItem);
nextBtn.addEventListener('click', showNextItem);

// Initialize the carousel
updateCarousel();

// Set the timer to slide the carousel every 0.5 seconds
setInterval(showNextItem, 5000);

const typingDemo = document.querySelector('.typing-demo');
const texts = [
  'This is a typing demo 1.',
  'This is a typing demo 2.',
  'This is a typing demo 3.',
  'This is a typing demo 4.',
  'Hello, world!....',
  'Welcome to my website!',
  'I am a typing demo.',
  'You can add more text here.'
];

let currentTextIndex = 0;
let currentCharIndex = 0;

function typeText() {
  const currentText = texts[currentTextIndex];
  typingDemo.textContent = currentText.substring(0, currentCharIndex + 1);

  if (currentCharIndex < currentText.length - 1) {
    currentCharIndex++;
    setTimeout(typeText, 50); // adjust the timeout to control the typing speed
  } else {
    currentTextIndex = (currentTextIndex + 1) % texts.length; // loop back to the first text when reaching the end
    currentCharIndex = 0;
    setTimeout(typeText, 1000); // adjust the timeout to control the delay between texts
  }
}

typeText();

// Select the ball element
const ball = document.querySelector('.ball');

// Function to update ball position
function updateBallPosition(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Set the ball's position to follow the mouse cursor
    ball.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
}

// Add event listener to track mouse movement
document.addEventListener('mousemove', updateBallPosition);


//whiteboard function

window.addEventListener('load', () => {
  const canvas = document.getElementById('whiteboard');
  const ctx = canvas.getContext('2d');
  const clearButton = document.getElementById('clear');
  const colorPicker = document.getElementById('color');
  const sizePicker = document.getElementById('size');

  // Set canvas dimensions
  canvas.width = window.innerWidth - 20;
  canvas.height = window.innerHeight - 100;

  // Set initial drawing settings
  let drawing = false;
  let drawColor = colorPicker.value;
  let drawSize = sizePicker.value;

  // Update drawing settings when controls change
  colorPicker.addEventListener('change', (e) => drawColor = e.target.value);
  sizePicker.addEventListener('change', (e) => drawSize = e.target.value);

  // Clear canvas
  clearButton.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  });

  // Start drawing
  canvas.addEventListener('mousedown', (e) => {
    drawing = true;
    ctx.beginPath();
    ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
  });

  // Draw on canvas
  canvas.addEventListener('mousemove', (e) => {
    if (drawing) {
      ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
      ctx.strokeStyle = drawColor;
      ctx.lineWidth = drawSize;
      ctx.lineCap = 'round'; // Smooth lines
      ctx.lineJoin = 'round';
      ctx.stroke();
    }
  });

  // Stop drawing
  canvas.addEventListener('mouseup', () => {
    drawing = false;
    ctx.closePath();
  });

  canvas.addEventListener('mouseout', () => {
    drawing = false;
  });
});

