
// Smooth scrolling effect
document.addEventListener('DOMContentLoaded', function() {
    var scrollLinks = document.querySelectorAll('a[href^="#"]');
    for (var i = 0; i < scrollLinks.length; i++) {
        scrollLinks[i].addEventListener('click', smoothScroll);
    }

    function smoothScroll(e) {
        e.preventDefault();
        var target = this.getAttribute('href');
        var targetElement = document.querySelector(target);
        var startPosition = window.pageYOffset;
        var targetPosition = targetElement.offsetTop;
        var distance = targetPosition - startPosition;
        var duration = 800;
        var start = null;

        function scrollAnimation(timestamp) {
            if (!start) start = timestamp;
            var progress = timestamp - start;
            window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
            if (progress < duration) {
                requestAnimationFrame(scrollAnimation);
            }
        }

        function easeInOutCubic(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t * t + b;
            t -= 2;
            return c / 2 * (t * t * t + 2) + b;
        }

        requestAnimationFrame(scrollAnimation);
    }
});
