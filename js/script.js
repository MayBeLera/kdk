// burger-menu
document.addEventListener('click', burgerInit);

function burgerInit(e) {
    const burgerIcon = e.target.closest('.burger-icon');
    const burgerNav = document.querySelector('.header-burger-nav');
    const header = document.querySelector('.header');
    
    const isClickInsideMenu = burgerNav && burgerNav.contains(e.target);
    const isClickInsideHeader = header && header.contains(e.target);
    const isClickOnBurger = !!burgerIcon;
    
    if (isClickOnBurger) {
        e.preventDefault();
        document.body.classList.toggle('body--opened-menu');
        return;
    }
    
    if (document.body.classList.contains('body--opened-menu') && 
        !isClickInsideMenu && 
        !isClickInsideHeader) {
        document.body.classList.remove('body--opened-menu');
    }
}

document.querySelector('.header-burger-nav')?.addEventListener('click', (e) => {
    e.stopPropagation();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && document.body.classList.contains('body--opened-menu')) {
        document.body.classList.remove('body--opened-menu');
    }
});



// hero-modal
const modal = document.querySelector('.modal-hero');
const modalButtons = document.querySelectorAll('.hero-slide__btn');

modalButtons.forEach(button => {
    button.addEventListener('click', openModal);
});

function openModal(e) {
    e.preventDefault();
    document.body.classList.add('body--opened-modal'); 
}

modal.addEventListener('click', closeModal);

function closeModal(e) {
    e.preventDefault();
    const target = e.target;
    
    if (target.closest('.modal__cancel') || target === modal) {
        document.body.classList.remove('body--opened-modal');
    }
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && document.body.classList.contains('body--opened-modal')) {
        document.body.classList.remove('body--opened-modal');
    }
});



// hero-slider
const heroSwiper = new Swiper('.hero-swiper', {
    slidesPerView: 1, 
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.hero-button-next',
        prevEl: '.hero-button-prev',
    },
});


// direction-slider
document.addEventListener('DOMContentLoaded', function() {
    function checkAndInitSwiper() {
        if (window.innerWidth >= 1101) {
            return; 
        }
        
        new Swiper('.directions-swiper', {
            slidesPerView: 1,
            spaceBetween: 20,
            centeredSlides: window.innerWidth <= 800,
            scrollbar: {
                el: '.directions-scrollbar',
                hide: false,
                draggable: true,
            },
            breakpoints: {
                801: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                    centeredSlides: false
                }
            }
        });
    }
    
    checkAndInitSwiper();
});



// portfolio-slider
let portfolioSlider = new Swiper('.portfolio-swiper', {
    slidesPerView: 1, 
    centeredSlides: true,
    loop: true,
    navigation: {
        nextEl: '.portfolio-next',
        prevEl: '.portfolio-prev',
    },
});



//rewies
(function() {
    const reviewsData = [
        {
        name: "Инна",
        date: "1 сентября 2025",
        stars: 5,
        text: "Отличная клиника, оборудование современное, все специалисты высококвалифицированные. Одна гигиена только чего стоит, так качественно под микроскопом мне нигде не делали! У меня было очень ограниченное время для лечения, мне пошли на встречу и нашли окошки дополнительные на мои даты. Сделали все супер качественно. Обязательно приеду ещё!  Успехов вам и процветания!"
    },
    {
        name: "Инна",
        date: "2 сентября 2025",
        stars: 5,
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis laborum nesciunt nostrum, veniam, voluptatibus labore sequi quis error non voluptate asperiores iure deserunt tenetur itaque. Aspernatur eaque maxime nemo voluptatem? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis laborum nesciunt nostrum, veniam, voluptatibus labore sequi quis error non voluptate asperiores iure deserunt tenetur itaque. Aspernatur eaque maxime nemo voluptatem? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis laborum nesciunt nostrum, veniam, voluptatibus labore sequi quis error non voluptate asperiores iure deserunt tenetur itaque. Aspernatur eaque maxime nemo voluptatem?"
    },
    {
        name: "Инна",
        date: "3 сентября 2025",
        stars: 5,
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis laborum nesciunt nostrum, veniam, voluptatibus labore sequi quis error non voluptate asperiores iure deserunt tenetur itaque. Aspernatur eaque maxime nemo voluptatem? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis laborum nesciunt nostrum, veniam, voluptatibus labore sequi quis error non voluptate asperiores iure deserunt tenetur itaque. Aspernatur eaque maxime nemo voluptatem? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis laborum nesciunt nostrum, veniam, voluptatibus labore sequi quis error non voluptate asperiores iure deserunt tenetur itaque. Aspernatur eaque maxime nemo voluptatem?"
    },
    {
        name: "Инна",
        date: "4 сентября 2025",
        stars: 5,
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis laborum nesciunt nostrum, veniam, voluptatibus labore sequi quis error non voluptate asperiores iure deserunt tenetur itaque. Aspernatur eaque maxime nemo voluptatem? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis laborum nesciunt nostrum, veniam, voluptatibus labore sequi quis error non voluptate asperiores iure deserunt tenetur itaque. Aspernatur eaque maxime nemo voluptatem? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis laborum nesciunt nostrum, veniam, voluptatibus labore sequi quis error non voluptate asperiores iure deserunt tenetur itaque. Aspernatur eaque maxime nemo voluptatem?"
    },
    {
        name: "Инна",
        date: "5 сентября 2025",
        stars: 5,
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis laborum nesciunt nostrum, veniam, voluptatibus labore sequi quis error non voluptate asperiores iure deserunt tenetur itaque. Aspernatur eaque maxime nemo voluptatem? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis laborum nesciunt nostrum, veniam, voluptatibus labore sequi quis error non voluptate asperiores iure deserunt tenetur itaque. Aspernatur eaque maxime nemo voluptatem? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis laborum nesciunt nostrum, veniam, voluptatibus labore sequi quis error non voluptate asperiores iure deserunt tenetur itaque. Aspernatur eaque maxime nemo voluptatem?"
    },
    ];

    const MAX_SYMBOLS = 95;

    function truncateText(text, maxLength) {
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength).trim() + '...';
    }

    function escapeHtml(str) {
        if (!str) return '';
        return str.replace(/[&<>]/g, function(m) {
            if (m === '&') return '&amp;';
            if (m === '<') return '&lt;';
            if (m === '>') return '&gt;';
            return m;
        });
    }

    function renderFeedbackSlides() {
        const swiperWrapper = document.querySelector('.feedback-wrapper');
        if (!swiperWrapper) return;
        
        swiperWrapper.innerHTML = '';
        
        reviewsData.forEach((review, index) => {
            const shortText = truncateText(review.text, MAX_SYMBOLS);
            const needModal = review.text.length > MAX_SYMBOLS;
            
            const slide = document.createElement('div');
            slide.className = 'swiper-slide feedback-slide';
            slide.innerHTML = `
                <p class="feedback-user__name">${escapeHtml(review.name)}</p>
                <p class="feedback-date">${escapeHtml(review.date)}</p>
                <div class="feedback-stars">${'★'.repeat(review.stars)}${'☆'.repeat(5-review.stars)}</div>
                <div class="feedback-text">
                    <p class="feedback-text__short">${escapeHtml(shortText)}</p>
                    ${needModal ? '<button class="feedback-readmore" data-index="' + index + '">Читать полностью</button>' : ''}
                </div>
                <div class="feedback-text__full" style="display: none;">${escapeHtml(review.text)}</div>
            `;
            
            swiperWrapper.appendChild(slide);
        });
        
        initFeedbackReadMoreButtons();
    }

    let feedbackModal = null;

    function initFeedbackReadMoreButtons() {
        feedbackModal = document.getElementById('reviewModal');
        if (!feedbackModal) return;
        
        const modalTitle = feedbackModal.querySelector('.modal__title');
        const modalDate = feedbackModal.querySelector('.modal__date');
        const modalStars = feedbackModal.querySelector('.modal__stars');
        const modalText = feedbackModal.querySelector('.modal__text');
        const closeBtn = feedbackModal.querySelector('.modal__close');
        
        function openModal(title, date, starsHtml, text) {
            if (modalTitle) modalTitle.textContent = title;
            if (modalDate) modalDate.textContent = date;
            if (modalStars) modalStars.innerHTML = starsHtml;
            if (modalText) modalText.textContent = text;
            feedbackModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
        
        function closeModal() {
            if (feedbackModal) {
                feedbackModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        }
        
        document.querySelectorAll('.feedback-readmore').forEach(btn => {
            btn.removeEventListener('click', btn._listener);
            btn._listener = (e) => {
                e.stopPropagation();
                const slide = btn.closest('.feedback-slide');
                const name = slide.querySelector('.feedback-user__name')?.textContent || '';
                const date = slide.querySelector('.feedback-date')?.textContent || '';
                const fullText = slide.querySelector('.feedback-text__full')?.textContent || '';
                const starsHtml = slide.querySelector('.feedback-stars')?.innerHTML || '';
                
                openModal(name, date, starsHtml, fullText);
            };
            btn.addEventListener('click', btn._listener);
        });
        
        if (closeBtn) {
            closeBtn.removeEventListener('click', closeBtn._listener);
            closeBtn._listener = closeModal;
            closeBtn.addEventListener('click', closeBtn._listener);
        }
        
        feedbackModal.removeEventListener('click', feedbackModal._listener);
        feedbackModal._listener = (e) => {
            if (e.target === feedbackModal) closeModal();
        };
        feedbackModal.addEventListener('click', feedbackModal._listener);
        
        document.removeEventListener('keydown', feedbackModal._escListener);
        feedbackModal._escListener = (e) => {
            if (e.key === 'Escape' && feedbackModal && feedbackModal.classList.contains('active')) {
                closeModal();
            }
        };
        document.addEventListener('keydown', feedbackModal._escListener);
    }

    function initFeedbackSwiper() {
        if (document.querySelector('.feedback-swiper') && !document.querySelector('.feedback-swiper').swiper) {
            new Swiper('.feedback-swiper', {
                slidesPerView: 1,
                spaceBetween: 20,
                centeredSlides: true,
                navigation: {
                    nextEl: '.feedback-next',
                    prevEl: '.feedback-prev',
                },
                breakpoints: {
                    768: { slidesPerView: 2, centeredSlides: false },
                    1024: { slidesPerView: 3, centeredSlides: false }
                }
            });
        }
    }


    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            renderFeedbackSlides();
            initFeedbackSwiper();
        });
    } else {
        renderFeedbackSlides();
        initFeedbackSwiper();
    }
})();



// team-slider
let teamSlider = new Swiper('.team-swiper', {
    spaceBetween: 20,
    slidesPerView: 1, 
    loop: true,
    navigation: {
        nextEl: '.team-next',
        prevEl: '.team-prev',
    },
    breakpoints: {
        501: { slidesPerView: 2, },
        801: { slidesPerView: 3, },
        1001: { slidesPerView: 4,}
    }
});


// video
const video = document.getElementById('myVideo');
const customPlayBtn = document.getElementById('customPlayBtn');
let videoStarted = false;

customPlayBtn.addEventListener('click', () => {
    video.play();
    videoStarted = true;
    customPlayBtn.style.display = 'none';
});

video.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        customPlayBtn.style.display = 'none';
    }
});

video.addEventListener('pause', () => {
    if (videoStarted && !video.ended) {
        customPlayBtn.style.display = 'flex'; 
    }
});

video.addEventListener('play', () => {
    customPlayBtn.style.display = 'none';
});

video.addEventListener('ended', () => {
    videoStarted = false;
    customPlayBtn.style.display = 'flex'; 
});



// promo
// const promosData = [
//     {
//         title: "Скидка -15%:",
//         badge: "Счастливые часы",
//         description: "По будням с 10:00 до 16:00 скидка 20% на прием специалиста Х.",
//         btn: "Записаться на прием",
//     },
//     {
//         title: "Скидка -30%:",
//         badge: "Имплантация зубов",
//         description: "Восстановление зубов по технологиям All on 4 и 6 - 420 000₽ вместо 600 000₽.",
//         btn: "Записаться на прием",
//     },
//     {
//         title: "Скидка -15%:",
//         badge: "Первичный прием",
//         description: "Скидка для новых пациентов - прием специалиста по сниженной цене..",
//         btn: "Записаться на прием",
//     },
//     {
//         title: "Скидка -15%:",
//         badge: "Счастливые часы",
//         description: "По будням с 10:00 до 16:00 скидка 20% на прием специалиста Х.",
//         btn: "Записаться на прием",
//     },
//     {
//         title: "Скидка -15%:",
//         badge: "Счастливые часы",
//         description: "По будням с 10:00 до 16:00 скидка 20% на прием специалиста Х.",
//         btn: "Записаться на прием",
//     }
// ];

// let swiperInstance = null;  

// function renderSlides() {
//     const wrapper = document.getElementById('promoSlidesWrapper');
//     if (!wrapper) return;
//     if (!promosData.length) {
//         wrapper.innerHTML = `<div class="swiper-slide" style="display:flex; align-items:center; justify-content:center; min-height:300px;">
//                                 <div style="text-align:center; color:#9b7c64;">На данный момент акций нет.<br>Загляните позже!</div>
//                              </div>`;
//         return;
//     }

//     let slidesHtml = '';
//     for (let promo of promosData) {
//         slidesHtml += `
//             <div class="swiper-slide">
//                 <div class="promo-slide">
//                     <div>
//                         <div class="promo-slide__title title  title__accent">${escapeHtml(promo.title)}</div>
//                         <div class="promo-slide__badge title">${escapeHtml(promo.badge)}</div>
//                         <div class="promo-slide__desc">${escapeHtml(promo.description)}</div>
//                     </div>
//                     <div class="promo-slide__footer">
//                         <a class="promo-slide__btn" href="#form">${escapeHtml(promo.btn)}</a>
//                     </div>
//                 </div>
//             </div>
//         `;
//     }
//     wrapper.innerHTML = slidesHtml;
// }

// function initSwiper() {
//     if (swiperInstance) {
//         swiperInstance.destroy(true, true); 
//     }
//     const container = document.querySelector('#promoSwiperContainer');
//     if (!container) return;
    
//     swiperInstance = new Swiper(container, {
//         slidesPerView: 1,
//         spaceBetween: 20,
//         loop: promosData.length > 1,    
//         navigation: {
//             nextEl: '.promo-next',
//             prevEl: '.promo-prev',
//         },
//         effect: 'slide',
//         speed: 400,
//         grabCursor: true,     
//         simulateTouch: true,  
//         touchRatio: 1,
//         threshold: 5,
//         breakpoints: {
//             1001: { slidesPerView: 2,}
//         }
//     });
// }

// function escapeHtml(str) {
//     if (!str) return '';
//     return str.replace(/[&<>]/g, function(m) {
//         if (m === '&') return '&amp;';
//         if (m === '<') return '&lt;';
//         if (m === '>') return '&gt;';
//         return m;
//     });
// }

// const modalOverlay = document.getElementById('promoModalOverlay');
// const openBtn = document.getElementById('promoShowBtn');
// const closeBtn = document.getElementById('promoModalCloseBtn');

// function openPromoModal() {
//     if (!modalOverlay) return;

//     renderSlides();
        
//     modalOverlay.classList.add('active');
//     document.body.style.overflow = 'hidden';
        
//     setTimeout(() => {
//         initSwiper();
//     }, 80);
// }

// function closePromoModal() {
//     if (modalOverlay) {
//         modalOverlay.classList.remove('active');
//         document.body.style.overflow = '';
//          if (swiperInstance) {
//             swiperInstance.destroy(true, true);
//             swiperInstance = null;
//         }
//     }
// }

// if (openBtn) {
//     openBtn.addEventListener('click', (e) => {
//         e.preventDefault();
//             openPromoModal();
//     });
// }
// if (closeBtn) {
//     closeBtn.addEventListener('click', closePromoModal);
// }

// if (modalOverlay) {
//     modalOverlay.addEventListener('click', (e) => {
//         if (e.target === modalOverlay) closePromoModal();
//     });
// }

// document.addEventListener('keydown', (e) => {
//     if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) {
//         closePromoModal();
//     }
// });

// renderSlides();  

// // Добавьте эту функцию после существующего кода
// function handlePromoButtonClick(event, targetElement) {
//     // Предотвращаем стандартное поведение ссылки
//     event.preventDefault();
    
//     // Закрываем модальное окно
//     closePromoModal();
    
//     // Небольшая задержка перед прокруткой, чтобы модалка успела закрыться
//     setTimeout(() => {
//         // Находим форму
//         const formElement = document.querySelector('#form');
//         if (formElement) {
//             formElement.scrollIntoView({
//                 behavior: 'smooth',
//                 block: 'start'
//             });
//         }
//     }, 100);
// }

// // Измените функцию renderSlides, добавив data-атрибуты и обработчик:
// function renderSlides() {
//     const wrapper = document.getElementById('promoSlidesWrapper');
//     if (!wrapper) return;
//     if (!promosData.length) {
//         wrapper.innerHTML = `<div class="swiper-slide" style="display:flex; align-items:center; justify-content:center; min-height:300px;">
//                                 <div style="text-align:center; color:#9b7c64;">На данный момент акций нет.<br>Загляните позже!</div>
//                              </div>`;
//         return;
//     }

//     let slidesHtml = '';
//     for (let i = 0; i < promosData.length; i++) {
//         const promo = promosData[i];
//         slidesHtml += `
//             <div class="swiper-slide">
//                 <div class="promo-slide">
//                     <div>
//                         <div class="promo-slide__title title title__accent">${escapeHtml(promo.title)}</div>
//                         <div class="promo-slide__badge title">${escapeHtml(promo.badge)}</div>
//                         <div class="promo-slide__desc">${escapeHtml(promo.description)}</div>
//                     </div>
//                     <div class="promo-slide__footer">
//                         <a class="promo-slide__btn" href="#form" data-promo-index="${i}">${escapeHtml(promo.btn)}</a>
//                     </div>
//                 </div>
//             </div>
//         `;
//     }
//     wrapper.innerHTML = slidesHtml;
    
//     // Добавляем обработчики на все кнопки в слайдах
//     const promoButtons = document.querySelectorAll('.promo-slide__btn');
//     promoButtons.forEach(button => {
//         // Удаляем старый обработчик, если есть
//         button.removeEventListener('click', handlePromoButtonClick);
//         // Добавляем новый обработчик
//         button.addEventListener('click', (event) => handlePromoButtonClick(event, button));
//     });
// }

// // Также добавим обработчик для обновления кнопок после инициализации Swiper
// // Измените функцию initSwiper:
// function initSwiper() {
//     if (swiperInstance) {
//         swiperInstance.destroy(true, true); 
//     }
//     const container = document.querySelector('#promoSwiperContainer');
//     if (!container) return;
    
//     swiperInstance = new Swiper(container, {
//         slidesPerView: 1,
//         spaceBetween: 20,
//         loop: promosData.length > 1,    
//         navigation: {
//             nextEl: '.promo-next',
//             prevEl: '.promo-prev',
//         },
//         effect: 'slide',
//         speed: 400,
//         grabCursor: true,     
//         simulateTouch: true,  
//         touchRatio: 1,
//         threshold: 5,
//         breakpoints: {
//             1001: { slidesPerView: 2,}
//         },
//         on: {
//             init: function() {
//                 // После инициализации Swiper обновляем обработчики кнопок
//                 setTimeout(() => {
//                     const promoButtons = document.querySelectorAll('.promo-slide__btn');
//                     promoButtons.forEach(button => {
//                         button.removeEventListener('click', handlePromoButtonClick);
//                         button.addEventListener('click', (event) => handlePromoButtonClick(event, button));
//                     });
//                 }, 50);
//             },
//             slideChange: function() {
//                 // При смене слайда также обновляем обработчики
//                 setTimeout(() => {
//                     const promoButtons = document.querySelectorAll('.promo-slide__btn');
//                     promoButtons.forEach(button => {
//                         button.removeEventListener('click', handlePromoButtonClick);
//                         button.addEventListener('click', (event) => handlePromoButtonClick(event, button));
//                     });
//                 }, 50);
//             }
//         }
//     });
// }
const promosData = [
    {
        title: "Скидка -15%:",
        badge: "Счастливые часы",
        description: "По будням с 10:00 до 16:00 скидка 20% на прием специалиста Х.",
        btn: "Записаться на прием",
    },
    {
        title: "Скидка -30%:",
        badge: "Имплантация зубов",
        description: "Восстановление зубов по технологиям All on 4 и 6 - 420 000₽ вместо 600 000₽.",
        btn: "Записаться на прием",
    },
    {
        title: "Скидка -15%:",
        badge: "Первичный прием",
        description: "Скидка для новых пациентов - прием специалиста по сниженной цене..",
        btn: "Записаться на прием",
    },
    {
        title: "Скидка -15%:",
        badge: "Счастливые часы",
        description: "По будням с 10:00 до 16:00 скидка 20% на прием специалиста Х.",
        btn: "Записаться на прием",
    },
    {
        title: "Скидка -15%:",
        badge: "Счастливые часы",
        description: "По будням с 10:00 до 16:00 скидка 20% на прием специалиста Х.",
        btn: "Записаться на прием",
    }
];

let swiperInstance = null;

function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>]/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
}

function handlePromoButtonClick(event) {
    event.preventDefault();
    closePromoModal();
    
    setTimeout(() => {
        const formElement = document.querySelector('#form');
        if (formElement) {
            formElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }, 100);
}

function renderSlides() {
    const wrapper = document.getElementById('promoSlidesWrapper');
    if (!wrapper) return;
    
    if (!promosData.length) {
        wrapper.innerHTML = `<div class="swiper-slide" style="display:flex; align-items:center; justify-content:center; min-height:300px;">
                                <div style="text-align:center; color:#9b7c64;">На данный момент акций нет.<br>Загляните позже!</div>
                             </div>`;
        return;
    }

    let slidesHtml = '';
    for (let i = 0; i < promosData.length; i++) {
        const promo = promosData[i];
        slidesHtml += `
            <div class="swiper-slide">
                <div class="promo-slide">
                    <div>
                        <div class="promo-slide__title title title__accent">${escapeHtml(promo.title)}</div>
                        <div class="promo-slide__badge title">${escapeHtml(promo.badge)}</div>
                        <div class="promo-slide__desc">${escapeHtml(promo.description)}</div>
                    </div>
                    <div class="promo-slide__footer">
                        <a class="promo-slide__btn" href="#form" data-promo-index="${i}">${escapeHtml(promo.btn)}</a>
                    </div>
                </div>
            </div>
        `;
    }
    wrapper.innerHTML = slidesHtml;
    
    const promoButtons = document.querySelectorAll('.promo-slide__btn');
    promoButtons.forEach(button => {
        button.removeEventListener('click', handlePromoButtonClick);
        button.addEventListener('click', handlePromoButtonClick);
    });
}

function initSwiper() {
    if (swiperInstance) {
        swiperInstance.destroy(true, true);
    }
    
    const container = document.querySelector('#promoSwiperContainer');
    if (!container) return;
    
    swiperInstance = new Swiper(container, {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: promosData.length > 1,
        navigation: {
            nextEl: '.promo-next',
            prevEl: '.promo-prev',
        },
        effect: 'slide',
        speed: 400,
        grabCursor: true,
        simulateTouch: true,
        touchRatio: 1,
        threshold: 5,
        breakpoints: {
            1001: { slidesPerView: 2 }
        },
        on: {
            init: function() {
                setTimeout(() => {
                    const promoButtons = document.querySelectorAll('.promo-slide__btn');
                    promoButtons.forEach(button => {
                        button.removeEventListener('click', handlePromoButtonClick);
                        button.addEventListener('click', handlePromoButtonClick);
                    });
                }, 50);
            },
            slideChange: function() {
                setTimeout(() => {
                    const promoButtons = document.querySelectorAll('.promo-slide__btn');
                    promoButtons.forEach(button => {
                        button.removeEventListener('click', handlePromoButtonClick);
                        button.addEventListener('click', handlePromoButtonClick);
                    });
                }, 50);
            }
        }
    });
}

function openPromoModal() {
    if (!modalOverlay) return;
    
    renderSlides();
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    setTimeout(() => {
        initSwiper();
    }, 80);
}

function closePromoModal() {
    if (modalOverlay) {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
        
        if (swiperInstance) {
            swiperInstance.destroy(true, true);
            swiperInstance = null;
        }
    }
}

const modalOverlay = document.getElementById('promoModalOverlay');
const openBtn = document.getElementById('promoShowBtn');
const closeBtn = document.getElementById('promoModalCloseBtn');

if (openBtn) {
    openBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openPromoModal();
    });
}

if (closeBtn) {
    closeBtn.addEventListener('click', closePromoModal);
}

if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closePromoModal();
    });
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) {
        closePromoModal();
    }
});




// --------------input-tel
document.addEventListener('DOMContentLoaded', function() {
  if (typeof Inputmask === 'function') {
    Inputmask("+7 (999) 999-99-99").mask('input[type="tel"]');
  }
});