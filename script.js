// ПРОСТОЙ СКРИПТ ДЛЯ ГАЛЕРЕИ ПО ЗАДАНИЮ

// Функция для подсчёта фотографий
function countPhotos() {
    let photos = document.querySelectorAll('.image-card'); // по заданию — photo, но у тебя class="image-card"
    let counter = document.getElementById('image-counter');
    
    if (counter) {
        counter.textContent = photos.length;
    }

    console.log('Найдено фотографий:', photos.length);
}

// Функция для работы с лайками
function setupLikes() {
    let likeButtons = document.querySelectorAll('.like-btn');
    let totalLikesElement = document.getElementById('total-likes');
    let totalLikes = 0;

    likeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            let likesSpan = this.querySelector('.like-count'); // по заданию было '.likes'
            let currentLikes = parseInt(likesSpan.textContent);

            if (this.classList.contains('liked')) {
                currentLikes--;
                totalLikes--;
                this.classList.remove('liked');
            } else {
                currentLikes++;
                totalLikes++;
                this.classList.add('liked');
            }

            likesSpan.textContent = currentLikes;
            totalLikesElement.textContent = totalLikes;

            // Простая анимация кнопки
            this.style.transform = 'scale(1.2)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);

            console.log('Лайков всего:', totalLikes);
        });
    });
}

// Когда страница загрузится
document.addEventListener('DOMContentLoaded', function() {
    console.log('Галерея загружена!');

    countPhotos();
    setupLikes();

    // Статус JS
    let status = document.querySelector('.js-status');
    if (status) {
        status.textContent = '✅ JavaScript работает правильно!';
    }
});

