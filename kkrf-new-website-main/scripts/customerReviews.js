const reviews = [{
        id: 1,
        name: "Ronald Richards",
        role: "Web Developer",
        review: "I was amazed by ByteFix's expertise in recovering my critical data. From the initial consultation to the final recovery, their team was responsive, professional, and incredibly knowledgeable. I would highly recommend their services to anyone in need of reliable data recovery!",

    },
    {
        id: 2,
        name: "Jane Cooper",
        role: "Project Manager",
        review: "ByteFix exceeded my expectations with their fast and reliable service. The team was extremely cooperative and handled my data recovery project with the utmost care.",

    },
    {
        id: 3,
        name: "Robert Fox",
        role: "IT Specialist",
        review: "Their professional approach and deep knowledge made the data recovery process seamless. I couldn't be happier with the results!",

    }
];


// Function to create dynamic review slides
function renderReviews() {
    const carouselInner = document.getElementById('customerReviews');

    // Clear existing content
    carouselInner.innerHTML = '';

    // Loop through reviews array
    reviews.forEach((review, index) => {
        const isActive = index === 0 ? 'active' : ''; // First item is active

        const reviewHTML = `
      <div class="carousel-item ${isActive}">
        <div class="mb-4">
          <img src="https://cdn.prod.website-files.com/6753c944298bec1f730af5a1/675521e96a09d65d0bc2699a_quote.svg" 
               alt="Quote Icon">
        </div>
        <div class="fs-5 mt-lg-5">
          <p>${review.review}</p>
          <p class="mb-1 mt-lg-5">${review.name}</p>
          <p class="client-reviews-facts-card-para text-secondary-50">${review.role}</p>
        </div>
      </div>
    `;

        carouselInner.insertAdjacentHTML('beforeend', reviewHTML);
    });
}

// Call the function on page load
document.addEventListener('DOMContentLoaded', renderReviews);


// Sample array of customer stories
const customerStories = [{
    image: "assets/client-reviews/client-reviews-image-2.webp",
    title: "Empowering Small Businesses",
    description: "Discover how our solutions empower small businesses to achieve their goals efficiently.",
    link: "#"
}, {
    image: "assets/client-reviews/client-reviews-image-3.webp",
    title: "Our Customer Stories",
    description: "Learn how our timely IT solutions help growing companies and why local businesses rely on ByteFix.",
    link: "#"
} ];

// Get the carousel container
const carouselContainer = document.getElementById('customerStoriesCarousel');

// Populate the carousel dynamically
customerStories.forEach((story, index) => {
    const isActive = index === 0 ? 'active' : '';
    carouselContainer.innerHTML += `
    <div class="carousel-item ${isActive}">
      <div>
        <div>
          <img src="${story.image}" class="client-reviews-stories-card-image w-100" alt="${story.title}">
        </div>
        <div class="client-reviews-stories-card-content px-4">
          <p class="mb-2 fs-5">${story.title}</p>
          <p class="mb-2 client-reviews-facts-card-para">${story.description}</p>
          <div>
            <a href="${story.link}" class="text-decoration-none text-light">
              <button type="button" class="mb-5 btn text-light px-0 client-reviews-facts-card-para">
                Read More
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                  class="bi bi-arrow-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  `;
});