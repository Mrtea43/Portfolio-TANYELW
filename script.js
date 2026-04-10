// Language Translation System
const translations = {
    en: {
        personal: 'PERSONAL',
        info: 'INFO',
        projects: 'PROJECTS',
        news: 'NEWS',
        projectsTitle: 'Projects',
        newsTitle: 'NEWS',
        skills: 'SKILLS',
        experience: 'EXPERIENCE',
        education: 'EDUCATION',
        languagesTools: 'LANGUAGES & TOOLS',
        certifications: 'CERTIFICATIONS',
        interests: 'INTERESTS',
        heroTitle: "I'M AN GRADUATED EXPERT IT, INDIE GAME DEVELOPER, WEB DESIGNER AND AI RESEARCHER.",
        footer: '© 2025 TANYELW. All rights reserved.'
    },
    nl: {
        personal: 'PERSOONLIJK',
        info: 'INFO',
        projects: 'PROJECTEN',
        news: 'NIEUWS',
        projectsTitle: 'Projecten',
        newsTitle: 'NIEUWS',
        skills: 'VAARDIGHEDEN',
        experience: 'ERVARING',
        education: 'OPLEIDING',
        languagesTools: 'TALEN & TOOLS',
        certifications: 'CERTIFICERINGEN',
        interests: 'INTERESSES',
        heroTitle: "IK BEN EEN AFGESTUDEERDE EXPERT IT, INDIE GAME ONTWIKKELAAR, WEB DESIGNER EN AI ONDERZOEKER.",
        footer: '© 2025 TANYELW. Alle rechten voorbehouden.'
    },
    tr: {
        personal: 'KİŞİSEL',
        info: 'BİLGİ',
        projects: 'PROJELER',
        news: 'HABERLER',
        projectsTitle: 'Projeler',
        newsTitle: 'HABERLER',
        skills: 'YETENEKLER',
        experience: 'DENEYİM',
        education: 'EĞİTİM',
        languagesTools: 'DİLLER & ARAÇLAR',
        certifications: 'SERTİFİKALAR',
        interests: 'İLGİ ALANLARI',
        heroTitle: "MEZUN OLMUŞ BİR UZMAN BT, BAĞIMSIZ OYUN GELİŞTİRİCİSİ, WEB TASARIMCI VE YAPAY ZEKA ARAŞTIRMACISIYIM.",
        footer: '© 2025 TANYELW. Tüm hakları saklıdır.'
    },
    jp: {
        personal: '個人',
        info: '情報',
        projects: 'プロジェクト',
        news: 'ニュース',
        projectsTitle: 'プロジェクト',
        newsTitle: 'ニュース',
        skills: 'スキル',
        experience: '経験',
        education: '学歴',
        languagesTools: '言語とツール',
        certifications: '認定資格',
        interests: '興味',
        heroTitle: "私は卒業したエキスパートIT、インディーゲーム開発者、ウェブデザイナー、AI研究者です。",
        footer: '© 2025 TANYELW. All rights reserved.'
    }
};

// Language Toggle Functionality
const langToggle = document.getElementById('langToggle');
let currentLang = localStorage.getItem('language') || 'en';

function updateLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    // Display appropriate language code
    const langCodes = { en: 'EN', nl: 'NL', tr: 'TR', jp: 'JP' };
    langToggle.textContent = langCodes[lang] || lang.toUpperCase();

    // Update navigation items
    const navItems = document.querySelectorAll('.nav-item');
    navItems[0].textContent = translations[lang].personal;
    navItems[2].textContent = translations[lang].info;
    navItems[3].textContent = translations[lang].projects;
    navItems[4].textContent = translations[lang].news;

    // Update section titles
    document.querySelectorAll('.section-title')[0].textContent = translations[lang].projectsTitle;
    document.querySelectorAll('.section-title')[1].textContent = translations[lang].newsTitle;

    // Update detail section headers
    const detailColumns = document.querySelectorAll('.details-column h3');
    detailColumns[0].textContent = translations[lang].skills;
    detailColumns[1].textContent = translations[lang].experience;
    detailColumns[2].textContent = translations[lang].education;
    detailColumns[3].textContent = translations[lang].languagesTools;
    detailColumns[4].textContent = translations[lang].certifications;
    detailColumns[5].textContent = translations[lang].interests;

    // Update hero title
    document.querySelector('.hero-title').textContent = translations[lang].heroTitle;

    // Update footer
    document.querySelector('footer p').textContent = translations[lang].footer;
}

// Initialize language on page load
window.addEventListener('DOMContentLoaded', function() {
    updateLanguage(currentLang);
});

// Toggle language on click - cycles through all languages
langToggle.addEventListener('click', function() {
    const languages = ['en', 'nl', 'tr', 'jp'];
    const currentIndex = languages.indexOf(currentLang);
    const nextIndex = (currentIndex + 1) % languages.length;
    updateLanguage(languages[nextIndex]);
});

// Dark Mode Toggle Functionality
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
body.setAttribute('data-theme', currentTheme);

// Update toggle icon based on theme
function updateToggleIcon(theme) {
    if (theme === 'dark') {
        themeToggle.textContent = '◑';
    } else {
        themeToggle.textContent = '◐';
    }
}

// Set initial icon
updateToggleIcon(currentTheme);

// Toggle theme on click
themeToggle.addEventListener('click', function() {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateToggleIcon(newTheme);
});

// Smooth scrolling for navigation items
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function() {
        // Skip if it's the theme toggle button or language toggle
        if (this.id === 'themeToggle' || this.id === 'langToggle') return;

        const text = this.textContent.toLowerCase();
        const textUpper = this.textContent.toUpperCase();

        // Projects section - support all languages
        if (text === 'projects' || text === 'projecten' || text === 'projeler' ||
            textUpper === 'PROJELER' || text === 'プロジェクト') {
            document.querySelector('.projects-section').scrollIntoView({
                behavior: 'smooth'
            });
        }
        // News section - support all languages
        else if (text === 'news' || text === 'nieuws' || text === 'haberler' ||
                 textUpper === 'HABERLER' || text === 'ニュース' || text === 'blog') {
            document.querySelector('.blog-section').scrollIntoView({
                behavior: 'smooth'
            });
        }
        // Info section - support all languages (including Turkish BİLGİ)
        else if (text === 'info' || text === 'bilgi' || textUpper === 'BİLGİ' ||
                 textUpper === 'INFO' || text === '情報') {
            document.querySelector('.details-section').scrollIntoView({
                behavior: 'smooth'
            });
        }
        // Personal/Home - support all languages
        else if (text === 'personal' || text === 'persoonlijk' || text === 'kişisel' ||
                 textUpper === 'KİŞİSEL' || text === '個人') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
});

// Project cards animation
document.querySelectorAll('.project-card').forEach((card, index) => {
    card.addEventListener('click', function(e) {
        // Don't trigger if clicking on a link
        if (e.target.tagName === 'A') return;

        const url = this.getAttribute('data-url');
        if (url) {
            window.open(url, '_blank', 'noopener,noreferrer');
        } else {
            alert(`Project ${index + 1} - Click to view details`);
        }
    });
});

// Scroll indicator functionality
window.addEventListener('scroll', function() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (window.scrollY > 100) {
        scrollIndicator.style.opacity = '0';
    } else {
        scrollIndicator.style.opacity = '1';
    }
});

// Typewriter effect for the title (optional enhancement)
const title = document.querySelector('.hero-title');
const originalText = title.textContent;
let index = 0;

function typeWriter() {
    if (index === 0) {
        title.textContent = '';
    }
    if (index < originalText.length) {
        title.textContent += originalText.charAt(index);
        index++;
        setTimeout(typeWriter, 30);
    }
}

// Uncomment to enable typewriter effect
// window.addEventListener('load', typeWriter);

// Retro Background - Click sun to toggle shutdown mode
const retroSun = document.querySelector("#retrobg-sun");
if (retroSun) {
    retroSun.onclick = () => {
        document.querySelector("#retrobg").classList.toggle("retrobg-shutdown");
    };
}

// RSS Feed Integration
const RSS_FEEDS = [
    'https://feeds.feedburner.com/TheHackersNews?format=xml',
    'https://www.fusioneer.net/rss'
];

// Fetch RSS feed using RSS2JSON API
async function fetchRSSFeed(rssUrl) {
    try {
        const RSS2JSON_API = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;
        const response = await fetch(RSS2JSON_API);
        const data = await response.json();

        if (data.status === 'ok') {
            return data.items || [];
        } else {
            console.error('RSS fetch error:', data.message);
            return [];
        }
    } catch (error) {
        console.error('Error fetching RSS feed:', error);
        return [];
    }
}

// Format date to YYYY.MM.DD format
function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}.${month}.${day}`;
}

// Strip HTML tags from content
function stripHTML(html) {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
}

// Create blog post card
function createBlogPost(post) {
    const article = document.createElement('article');
    article.className = 'blog-post';

    const date = document.createElement('div');
    date.className = 'blog-date';
    date.textContent = formatDate(post.pubDate);

    const title = document.createElement('h3');
    title.className = 'blog-title';
    title.textContent = post.title;

    const excerpt = document.createElement('p');
    excerpt.className = 'blog-excerpt';
    // Extract excerpt from description/content
    const plainText = stripHTML(post.description || post.content || '');
    excerpt.textContent = plainText.substring(0, 150) + (plainText.length > 150 ? '...' : '');

    const link = document.createElement('a');
    link.className = 'blog-link';
    link.href = post.link;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = 'READ MORE →';

    article.appendChild(date);
    article.appendChild(title);
    article.appendChild(excerpt);
    article.appendChild(link);

    return article;
}

// Load and display blog posts from RSS feeds
async function loadBlogPosts() {
    const blogGrid = document.querySelector('.blog-grid');
    if (!blogGrid) return;

    // Show loading state
    blogGrid.innerHTML = '<div class="blog-loading">Loading posts...</div>';

    try {
        // Fetch all RSS feeds
        const feedPromises = RSS_FEEDS.map(url => fetchRSSFeed(url));
        const feedResults = await Promise.all(feedPromises);

        // Combine and flatten all posts
        let allPosts = feedResults.flat();

        // Sort by date (newest first)
        allPosts.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));

        // Limit to 8 posts
        allPosts = allPosts.slice(0, 8);

        // Clear loading state
        blogGrid.innerHTML = '';

        // Display posts
        if (allPosts.length > 0) {
            allPosts.forEach(post => {
                blogGrid.appendChild(createBlogPost(post));
            });
        } else {
            blogGrid.innerHTML = '<div class="blog-error">No posts available at the moment.</div>';
        }
    } catch (error) {
        console.error('Error loading blog posts:', error);
        blogGrid.innerHTML = '<div class="blog-error">Failed to load blog posts. Please try again later.</div>';
    }
}

// Load blog posts when page loads
window.addEventListener('load', loadBlogPosts);
