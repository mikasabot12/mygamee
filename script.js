// script.js

// نمایش صفحه مورد نظر
function showPage(page) {
    let pages = document.querySelectorAll('.page');
    pages.forEach(p => p.style.display = 'none');
    
    let pageToShow = document.getElementById(page);
    if (pageToShow) {
        pageToShow.style.display = 'block';
    }
}

// script.js

// عملکرد دکمه Claim
let collectedRewards = 0;
let userScore = 0;
let timerValue = 60;  // زمان تایمر به ثانیه (1 دقیقه)

// نمایش صفحه مورد نظر
function showPage(page) {
    let pages = document.querySelectorAll('.page');
    pages.forEach(p => p.style.display = 'none');
    
    let pageToShow = document.getElementById(page);
    if (pageToShow) {
        pageToShow.style.display = 'block';
    }
}

// عملکرد دکمه Claim
function claimRewards() {
    // افزایش امتیاز کاربر
    collectedRewards += 10;
    userScore += 10;
    
    // به‌روزرسانی نمایش امتیازات
    document.getElementById('collected-rewards').textContent = collectedRewards;
    document.getElementById('user-score').textContent = userScore;

    // غیر فعال کردن دکمه Claim بعد از کلیک
    document.getElementById('claim-btn').disabled = true;
    timerValue = 60;  // ریست کردن تایمر

    // شروع تایمر جدید
    startTimer();
}

// تایمر برای دکمه Claim
function startTimer() {
    const timeLeftElement = document.getElementById('time-left');
    const claimButton = document.getElementById('claim-btn');

    const timerInterval = setInterval(() => {
        if (timerValue > 0) {
            timerValue--;
            timeLeftElement.textContent = timerValue;
        } else {
            // وقتی تایمر تمام می‌شود، دکمه Claim فعال می‌شود
            clearInterval(timerInterval);
            claimButton.disabled = false;  // فعال کردن دکمه
            timeLeftElement.textContent = '60'; // ریست کردن تایمر برای دفعه بعد
        }
    }, 1000);  // هر 1 ثانیه تایمر کاهش می‌یابد
}

// شروع تایمر برای اولین بار
startTimer();


// شبیه‌سازی افزایش امتیازات هر 1 دقیقه
setInterval(() => {
    collectedRewards += 5;
    document.getElementById('collected-rewards').textContent = collectedRewards;
}, 60000);
