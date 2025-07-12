var swiper = new Swiper('.blog-slider', {
    spaceBetween: 30, // Khoảng cách giữa các slide
    effect: 'fade', // Hiệu ứng chuyển đổi
    loop: true, // Cho phép lặp lại slide
    mousewheel: {
        invert: false, // Không đảo ngược cuộn chuột
    },
    pagination: {
        el: '.blog-slider__pagination', // Phần tử pagination
        clickable: true, // Cho phép nhấp vào pagination
    },
});

document.addEventListener("DOMContentLoaded", function () {
    const blogContainer = document.querySelector('.blog-section'); // Lấy container chứa danh sách blog

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Tỷ lệ phần tử xuất hiện (10%)
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Khi phần tử xuất hiện, thêm lớp 'scroll-animation' và 'visible'
                blogContainer.classList.add('scroll-animation', 'visible'); 
            } else {
                // Khi phần tử không còn trên màn hình, xóa lớp 'visible' và 'scroll-animation'
                blogContainer.classList.remove('visible');
                // Đặt lại CSS để hiệu ứng có thể lặp lại
                setTimeout(() => {
                    blogContainer.classList.remove('scroll-animation'); // Xóa lớp để có thể áp dụng lại
                }, 500); // Thời gian chờ để hiệu ứng hoàn thành
            }
        });
    }, options);

    observer.observe(blogContainer); // Theo dõi container
});
