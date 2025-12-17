// スムーススクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ヘッダーのスクロール時のスタイル変更
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
    } else {
        header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    }
});

// 画像の読み込みエラー処理（既にHTMLで処理済みですが、念のため）
document.querySelectorAll('.feature-image img').forEach(img => {
    img.addEventListener('error', function() {
        this.style.display = 'none';
        const placeholder = this.nextElementSibling;
        if (placeholder && placeholder.classList.contains('image-placeholder')) {
            placeholder.style.display = 'flex';
        }
    });
});

// YouTube動画のプレースホルダー非表示処理
document.querySelectorAll('.youtube-video, .youtube-video-small').forEach(iframe => {
    if (iframe.src.includes('YOUR_VIDEO_ID_HERE')) {
        iframe.style.display = 'none';
        const placeholder = iframe.nextElementSibling;
        if (placeholder && placeholder.classList.contains('video-placeholder')) {
            placeholder.style.display = 'block';
        }
        if (placeholder && placeholder.classList.contains('video-placeholder-small')) {
            placeholder.style.display = 'block';
        }
    } else {
        const placeholder = iframe.nextElementSibling;
        if (placeholder) {
            placeholder.style.display = 'none';
        }
    }
});

