// feedback.js
const REVIEWS = [
    {
        id: 6,
        name: 'Hưng',
        role: 'Khách hàng',
        avatar: 'https://i.pravatar.cc/150?img=23',
        review: `Sản phẩm handmade của shop rất độc đáo và chất lượng!`,
        rating: 4, // Star rating out of 5
        location: 'Hà Nội' // Customer location
    },
    {
        id: 0,
        name: 'Hùng',
        role: 'Khách hàng',
        avatar: 'https://i.pravatar.cc/150?img=13',
        review: `Tôi rất thích những sản phẩm ở đây. Chất lượng tuyệt vời!`,
        rating: 5,
        location: 'Hồ Chí Minh'
    },
    {
        id: 2,
        name: 'Tuấn',
        role: 'Khách hàng',
        avatar: 'https://i.pravatar.cc/150?img=8',
        review: `Đội ngũ nhân viên nhiệt tình, sản phẩm đẹp và chất lượng.`,
        rating: 4,
        location: 'Đà Nẵng'
    },
    {
        id: 7,
        name: 'Duy',
        role: 'Khách hàng',
        avatar: 'https://i.pravatar.cc/150?img=15',
        review: `Giá cả hợp lý, dịch vụ tốt. Tôi sẽ quay lại mua lần nữa.`,
        rating: 5,
        location: 'Hà Nội'
    },
    {
        id: 8,
        name: 'Hà',
        role: 'Khách hàng',
        avatar: 'https://i.pravatar.cc/150?img=20',
        review: `Sản phẩm rất đẹp và tinh tế. Tôi rất hài lòng.`,
        rating: 5,
        location: 'TP. HCM'
    },
    {
        id: 9,
        name: 'Minh',
        role: 'Khách hàng',
        avatar: 'https://i.pravatar.cc/150?img=25',
        review: `Shop có nhiều sản phẩm đa dạng, phù hợp với nhiều sở thích.`,
        rating: 4,
        location: 'Nha Trang'
    },
    {
        id: 10,
        name: 'Lan',
        role: 'Khách hàng',
        avatar: 'https://i.pravatar.cc/150?img=30',
        review: `Nhân viên tư vấn rất nhiệt tình và chu đáo.`,
        rating: 5,
        location: 'Cần Thơ'
    },
    {
        id: 11,
        name: 'Phúc',
        role: 'Khách hàng',
        avatar: 'https://i.pravatar.cc/150?img=35',
        review: `Sản phẩm chất lượng, giao hàng nhanh chóng.`,
        rating: 4,
        location: 'Hải Phòng'
    },
    {
        id: 12,
        name: 'Quỳnh',
        role: 'Khách hàng',
        avatar: 'https://i.pravatar.cc/150?img=40',
        review: `Tôi rất hài lòng với dịch vụ của shop. Sẽ giới thiệu cho bạn bè.`,
        rating: 5,
        location: 'Thừa Thiên Huế'
    },
    {
        id: 13,
        name: 'Tùng',
        role: 'Khách hàng',
        avatar: 'https://i.pravatar.cc/150?img=45',
        review: `Sản phẩm đẹp, chất lượng tốt, giá cả phải chăng.`,
        rating: 4,
        location: 'Long An'
    }
];

let currentCard;

function renderReviews() {
    const tplCard = document.querySelector("#tpl-card");
    const listCards = document.querySelector("#list-cards");

    REVIEWS.forEach((r, idx) => {
        const clone = tplCard.content.cloneNode(true);
        clone.querySelector(".review-quote").innerText = `"${r.review}"`;
        clone.querySelector("[review-name]").innerText = r.name;
        clone.querySelector("[review-role]").innerText = r.role;
        clone.querySelector("[review-img]").src = r.avatar;

        // Add location if available
        const locationElement = clone.querySelector("[review-location]");
        if (r.location) {
            locationElement.innerText = r.location;
            locationElement.style.display = 'block'; // Ensure it is visible
        } else {
            locationElement.style.display = 'none'; // Hide if no location
        }

        // Render star rating
        const starContainer = clone.querySelector(".star-rating");
        starContainer.innerHTML = ''; // Clear any previous stars
        for (let i = 0; i < 5; i++) {
            const star = document.createElement('span');
            star.className = 'star';
            star.innerHTML = i < r.rating ? '&#9733;' : '&#9734;'; // Filled or empty star
            starContainer.appendChild(star);
        }
        
        const card = clone.querySelector(".review-card");
        if (idx === 0) {
            card.classList.add('active');
            currentCard = card;
        }
        
        listCards.append(clone);
    });
}

function sliderInit() {
    renderReviews();

    let currentIndex = 0;
    const slider = document.querySelector("#slider");
    const slides = slider.querySelectorAll(".review-card");
    const totalSlides = REVIEWS.length;
    const sliderButtons = document.querySelectorAll("[data-slide]");

    sliderButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            // Remove active class from current card
            currentCard.classList.remove('active');

            // Update current index
            if (btn.getAttribute("data-slide") === "prev") {
                currentIndex = (totalSlides + currentIndex - 1) % totalSlides;
            } else {
                currentIndex = (currentIndex + 1) % totalSlides;
            }

            // Update current card and add active class
            currentCard = slides[currentIndex];
            currentCard.classList.add('active');
        });
    });
}

// Initialize slider when DOM is loaded
document.addEventListener('DOMContentLoaded', sliderInit);
