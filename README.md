# Sundown Studio Clone

A high-fidelity recreation of Sundown Studio's award-winning website, built from scratch using vanilla JavaScript to demonstrate core web development fundamentals and performance optimization.

![Sundown Studio Preview](screenshot.png) <!-- Add your screenshot -->

🔗 **Live Demo:** [mak-sundown-studio.netlify.app](https://mak-sundown-studio.netlify.app/)  
🎨 **Original Site:** [sundown-studio.com](https://sundown-studio.com)

## ✨ Features

- **Translate Animations** - Smooth element transitions on scroll
- **Hover Effects** - Interactive UI elements with CSS transforms
- **Structured Grid Layout** - Responsive design system
- **Portfolio Carousel** - Swiper.js integration for work showcase
- **Smooth Scrolling** - Custom scroll behavior implementation
- **Performance Optimized** - 95/100 Lighthouse score with vanilla JS

## 🎯 Lighthouse Scores

- 🟢 Performance: **95/100**
- 🟢 Accessibility: **93/100**
- 🟢 Best Practices: **100/100**
- 🟢 SEO: **91/100**

> **Outstanding scores achieved with vanilla JavaScript** - proving that modern frameworks aren't always necessary for high-performance web experiences.

## 🛠️ Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom animations & grid layouts
- **Vanilla JavaScript** - No frameworks, pure JS
- **Swiper.js** - Touch-enabled carousel
- **Netlify** - Deployment & hosting

## 🚀 Key Technical Implementations

- **Pure JavaScript** DOM manipulation without jQuery
- **CSS Grid & Flexbox** for responsive layouts
- **CSS transforms** for hardware-accelerated animations
- **Intersection Observer API** for scroll-triggered effects
- **Swiper.js** with custom configuration
- **Optimized assets** for faster load times
- **Semantic HTML5** with proper accessibility attributes

## 📦 Installation
```bash
# Clone the repository
git clone https://github.com/yourusername/sundown-studio-clone.git

# Navigate to project directory
cd sundown-studio-clone

# Open with live server (VS Code extension)
# Or simply open index.html in your browser
```

No build process required! Pure HTML, CSS, and JavaScript.

## 🎨 Project Structure
```
sundown-studio-clone/
├── index.html          # Main HTML file
├── css/
│   ├── style.css       # Main styles
│   └── responsive.css  # Media queries
├── js/
│   ├── main.js         # Core JavaScript
│   └── animations.js   # Animation logic
├── assets/
│   ├── images/         # Optimized images
│   └── videos/         # Video assets
└── README.md
```

## 💡 Code Highlights

### Smooth Scroll Animation
```javascript
// Scroll-triggered translate animation
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.animate-on-scroll');
  
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
    
    if (isVisible) {
      el.style.transform = 'translateY(0)';
      el.style.opacity = '1';
    }
  });
};

window.addEventListener('scroll', animateOnScroll);
```

### Swiper Configuration
```javascript
const swiper = new Swiper('.swiper', {
  slidesPerView: 'auto',
  spaceBetween: 30,
  loop: true,
  speed: 800,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
```

## 📊 Performance Optimizations

- ✅ Minimal JavaScript (no framework overhead)
- ✅ Optimized images (WebP format with fallbacks)
- ✅ CSS transforms for smooth 60 FPS animations
- ✅ Lazy loading for images and videos
- ✅ Minified CSS and JavaScript
- ✅ Efficient event listeners with debouncing
- ✅ No render-blocking resources

## 💡 What I Learned

- **Vanilla JS Mastery** - Building complex interactions without frameworks
- **Performance Optimization** - Achieving 95+ scores without build tools
- **CSS Animation Techniques** - Hardware-accelerated transforms
- **Responsive Design** - Mobile-first approach with CSS Grid
- **Accessibility Best Practices** - Semantic HTML and ARIA labels
- **DOM Manipulation** - Efficient querying and event handling

## 🎯 Why Vanilla JavaScript?

This project demonstrates that:
- Modern web development doesn't always need frameworks
- Vanilla JS can be more performant than React for simpler sites
- Understanding fundamentals makes you a better developer
- Sometimes less is more (smaller bundle, faster load)

## 📱 Responsive Design

Fully responsive across all devices:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large screens (1920px+)

## 🔮 Future Enhancements

- [ ] Add page transitions
- [ ] Implement dark mode toggle
- [ ] Add more interactive hover effects
- [ ] Create custom cursor follower
- [ ] Add loading animations
- [ ] Optimize for Core Web Vitals

## 🎓 Learning Resources

If you want to build similar projects:
- [MDN Web Docs - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Swiper.js Documentation](https://swiperjs.com/)
- [CSS Tricks - Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

## 📧 Contact

**Manik Sharma**  
📧 maniksharma13213@gmail.com  
🔗 [LinkedIn](https://linkedin.com/in/manik-sharma-312664283)  
💼 [Portfolio](https://mak-game-zone.vercel.app)

---

⭐ If this project helped you learn vanilla JavaScript or web performance, please star it!

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Original design by [Sundown Studio](https://sundown-studio.com)
- Built as a learning project to practice vanilla JavaScript and performance optimization
- This is a non-commercial educational clone

---

**Note:** This is a clone project created for educational purposes. All design credits go to the original Sundown Studio team.
```

---

## GitHub Topics/Tags to Add:
```
vanilla-javascript
html-css-javascript
swiper
web-animations
clone-project
frontend-development
responsive-design
performance-optimization
lighthouse
netlify
