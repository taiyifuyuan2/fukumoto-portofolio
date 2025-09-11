// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded - Initializing components...');
    
    try {
        // Initialize all components
        initStarfield();
        console.log('Starfield initialized');
        
        initTypewriter();
        console.log('Typewriter initialized');
        
        initScrollReveal();
        console.log('Scroll reveal initialized');
        
        initSmoothScroll();
        console.log('Smooth scroll initialized');
        
        // 少し遅延を追加してDOM要素の存在を確認
        setTimeout(() => {
            loadProjects();
            console.log('Projects loaded');
            
            loadSkills();
            console.log('Skills loaded');
            
            // プロジェクトとスキルを読み込んだ後、スクロールリビールを再初期化
            initScrollReveal();
            console.log('Scroll reveal re-initialized');
        }, 100);
        
        updateYear();
        console.log('Year updated');
        
        console.log('All components initialized successfully');
    } catch (error) {
        console.error('Error during initialization:', error);
    }
});

// Starfield Animation
function initStarfield() {
    const canvas = document.getElementById('starfield');
    const ctx = canvas.getContext('2d');
    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    const stars = [];
    const numStars = 100;
    
    // Create stars
    for (let i = 0; i < numStars; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 2,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            opacity: Math.random()
        });
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        stars.forEach(star => {
            star.x += star.vx;
            star.y += star.vy;
            
            // Wrap around screen
            if (star.x < 0) star.x = canvas.width;
            if (star.x > canvas.width) star.x = 0;
            if (star.y < 0) star.y = canvas.height;
            if (star.y > canvas.height) star.y = 0;
            
            // Draw star
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
            ctx.fill();
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
}

// Typewriter Effect
function initTypewriter() {
    const element = document.getElementById('typewriter');
    const text = element.getAttribute('data-text');
    let index = 0;
    
    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, 50);
        }
    }
    
    // Start typing after a delay
    setTimeout(type, 1000);
}

// Scroll Reveal Animation
function initScrollReveal() {
    const elements = document.querySelectorAll('[data-reveal]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    elements.forEach(element => {
        observer.observe(element);
    });
}

// Smooth Scroll for Navigation
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed nav
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Projects Data (embedded)
const projectsData = [
  {
    "id": 1,
    "title": "FirstApp",
    "description": "RailsのMVCフレームワークを意識したメモ投稿アプリ。基本的なCRUD操作とRailsの構造を学習。",
    "category": "学習",
    "technologies": "Ruby on Rails, HTML, CSS, SQLite",
    "image_url": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=400&q=80",
    "github_url": "https://github.com/taiyifuyuan2/first_app",
    "live_url": "",
    "featured": false
  },
  {
    "id": 3,
    "title": "ChatApp",
    "description": "多対多のDB設計やActiveStorageによる画像投稿機能を備えたSlackのようなチャットアプリ。リアルタイム通信機能を実装。",
    "category": "学習",
    "technologies": "Ruby on Rails, ActionCable, ActiveStorage, PostgreSQL",
    "image_url": "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=400&q=80",
    "github_url": "https://github.com/taiyifuyuan2/chat-app",
    "live_url": "",
    "featured": false
  },
  {
    "id": 5,
    "title": "ProtoSpace",
    "description": "これまでの学習の復習を兼ねたコンテンツ投稿アプリ。複雑な機能を組み合わせた総合的なアプリケーション。",
    "category": "学習",
    "technologies": "Ruby on Rails, ActiveStorage, Devise, Bootstrap",
    "image_url": "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=400&q=80",
    "github_url": "https://github.com/taiyifuyuan2/protospace-46285",
    "live_url": "",
    "featured": false
  },
  {
    "id": 6,
    "title": "FURIMA",
    "description": "商品の出品・表示・編集・削除・購入などを行うフリーマーケットアプリ。決済機能と商品管理機能を実装。",
    "category": "オリジナル",
    "technologies": "Ruby on Rails, Pay.jp, ActiveStorage, PostgreSQL",
    "image_url": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=400&q=80",
    "github_url": "https://github.com/taiyifuyuan2/furima-46285",
    "live_url": "http://35.79.137.148/",
    "featured": true
  },
  {
    "id": 8,
    "title": "オリジナルアプリケーション (ペット健康管理)",
    "description": "ペットの健康管理をサポートする独自開発アプリ。ワクチン記録、体重管理、健康チェック機能を実装。\n\n【テストアカウント】\nID: test@test.jp\nPASS: asd123",
    "category": "オリジナル",
    "technologies": "Ruby on Rails, Chart.js, ActiveStorage, PostgreSQL",
    "image_url": "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=400&q=80",
    "github_url": "https://github.com/taiyifuyuan2/pet-health2",
    "live_url": "https://pet-health2.onrender.com",
    "featured": true
  },
  {
    "id": 9,
    "title": "TodoApp",
    "description": "Next.js、Supabase、Drizzle ORMを使用した本格的なTodoアプリ。認証、画像添付、メール通知、Stripe決済機能を実装。",
    "category": "オリジナル",
    "technologies": "Next.js, TypeScript, Supabase, Drizzle ORM, Stripe",
    "image_url": "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=400&q=80",
    "github_url": "https://github.com/taiyifuyuan2/my-todo-app",
    "live_url": "",
    "featured": true
  },
  {
    "id": 10,
    "title": "ポートフォリオサイト",
    "description": "自身のスキルとプロジェクトを紹介するポートフォリオサイト。レスポンシブデザインとアニメーション効果を実装。",
    "category": "オリジナル",
    "technologies": "HTML, CSS, JavaScript, Vercel",
    "image_url": "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=400&q=80",
    "github_url": "https://github.com/taiyifuyuan2/fukumoto-portofolio",
    "live_url": "https://fukumoto-portofolio-eu8deoezj-taiyifuyuan2-gmailcoms-projects.vercel.app/",
    "featured": false
  },
  {
    "id": 11,
    "title": "企業ホームページ",
    "description": "企業向けのシンプルなホームページ。モダンなデザインとユーザビリティを重視した構成。",
    "category": "オリジナル",
    "technologies": "HTML, CSS, JavaScript, Netlify",
    "image_url": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80",
    "github_url": "https://github.com/taiyifuyuan2/company-website",
    "live_url": "https://elegant-stroopwafel-d00153.netlify.app/",
    "featured": false
  }
];

// Load Projects Data
function loadProjects() {
    try {
        const learningProjects = projectsData.filter(project => project.category === '学習');
        const originalProjects = projectsData.filter(project => project.category === 'オリジナル');
        
        console.log(`Found ${learningProjects.length} learning projects:`, learningProjects.map(p => p.title));
        console.log(`Found ${originalProjects.length} original projects:`, originalProjects.map(p => p.title));
        
        renderProjects(learningProjects, 'learning-projects');
        renderProjects(originalProjects, 'original-projects');
    } catch (error) {
        console.error('Error loading projects:', error);
    }
}

// Render Projects
function renderProjects(projects, containerId) {
    console.log(`Rendering ${projects.length} projects in container: ${containerId}`);
    const container = document.getElementById(containerId);
    
    if (!container) {
        console.error(`Container with id '${containerId}' not found`);
        return;
    }
    
    projects.forEach((project, index) => {
        try {
            const projectCard = createProjectCard(project);
            container.appendChild(projectCard);
            console.log(`Project ${index + 1} rendered: ${project.title}`);
        } catch (error) {
            console.error(`Error rendering project ${index + 1}:`, error);
        }
    });
}

// Create Project Card Element
function createProjectCard(project) {
    const card = document.createElement('article');
    card.className = project.featured ? 'card featured' : 'card';
    card.setAttribute('data-reveal', '');
    
    const technologies = project.technologies.split(',').map(tech => tech.trim());
    const primaryTech = technologies[0];
    
    card.innerHTML = `
        <div class="thumb" style="background-image:url('${project.image_url}')"></div>
        <div class="content">
            <span class="tag ${project.featured ? 'featured-tag' : ''}">${project.category} / ${primaryTech}</span>
            <div class="title">${project.title}</div>
            <p class="meta">${project.description}</p>
            <div class="actions">
                ${project.github_url ? `<a class="btn" href="${project.github_url}" target="_blank" rel="noopener">GitHub</a>` : ''}
                ${project.live_url ? `<a class="btn ${project.featured ? 'primary' : ''}" href="${project.live_url}" target="_blank" rel="noopener">Live</a>` : ''}
            </div>
        </div>
    `;
    
    return card;
}

// Skills Data (embedded)
const skillsData = [
  {
    "id": 1,
    "name": "Ruby on Rails",
    "description": "MVCフレームワークの理解と実践的なアプリケーション開発",
    "category": "バックエンド",
    "proficiency": 4,
    "icon": "💎"
  },
  {
    "id": 2,
    "name": "HTML/CSS",
    "description": "セマンティックなHTMLとモダンなCSS設計（BEM, FLOCSS）",
    "category": "フロントエンド",
    "proficiency": 4,
    "icon": "🌐"
  },
  {
    "id": 3,
    "name": "JavaScript",
    "description": "DOM操作、イベント処理、非同期処理の基礎",
    "category": "フロントエンド",
    "proficiency": 3,
    "icon": "💡"
  },
  {
    "id": 4,
    "name": "Git/GitHub",
    "description": "バージョン管理、プルリクエスト、ブランチ戦略",
    "category": "ツール・その他",
    "proficiency": 4,
    "icon": "🐙"
  },
  {
    "id": 5,
    "name": "SQL (PostgreSQL)",
    "description": "基本的なクエリ操作、DB設計",
    "category": "バックエンド",
    "proficiency": 3,
    "icon": "🐘"
  },
  {
    "id": 6,
    "name": "Figma",
    "description": "デザインカンプ作成、プロトタイピング",
    "category": "ツール・その他",
    "proficiency": 3,
    "icon": "🎨"
  },
  {
    "id": 7,
    "name": "Excel VBA",
    "description": "業務自動化ツールの開発",
    "category": "ツール・その他",
    "proficiency": 4,
    "icon": "📊"
  },
  {
    "id": 8,
    "name": "ChatGPT/Genspark",
    "description": "AIツールを活用した業務効率化、提案資料作成、ナレッジ共有",
    "category": "ツール・その他",
    "proficiency": 4,
    "icon": "🤖"
  },
  {
    "id": 9,
    "name": "法人営業",
    "description": "中小企業・医療法人向けIT/OA機器、ホームページ制作の提案。顧客課題の可視化と解決提案。",
    "category": "ツール・その他",
    "proficiency": 5,
    "icon": "🤝"
  },
  {
    "id": 10,
    "name": "課題発見・解決力",
    "description": "業務フロー分析、本質的な課題特定、仕組みによる解決策構築・実行",
    "category": "ツール・その他",
    "proficiency": 5,
    "icon": "🔍"
  },
  {
    "id": 11,
    "name": "プロジェクトマネジメント",
    "description": "新規開拓から導入、アフターフォローまで一貫した担当",
    "category": "ツール・その他",
    "proficiency": 4,
    "icon": "🗓️"
  }
];

// Load Skills Data
function loadSkills() {
    try {
        renderSkills(skillsData);
    } catch (error) {
        console.error('Error loading skills:', error);
    }
}

// Render Skills
function renderSkills(skills) {
    console.log(`Rendering ${skills.length} skills`);
    const container = document.getElementById('skills-container');
    
    if (!container) {
        console.error('Container with id "skills-container" not found');
        return;
    }
    
    skills.forEach((skill, index) => {
        try {
            const skillElement = createSkillElement(skill);
            container.appendChild(skillElement);
            console.log(`Skill ${index + 1} rendered: ${skill.name}`);
        } catch (error) {
            console.error(`Error rendering skill ${index + 1}:`, error);
        }
    });
}

// Create Skill Element
function createSkillElement(skill) {
    const skillDiv = document.createElement('div');
    skillDiv.className = 'skill';
    
    const stars = '★'.repeat(skill.proficiency) + '☆'.repeat(5 - skill.proficiency);
    
    skillDiv.innerHTML = `
        <strong>${skill.icon} ${skill.name}</strong>
        <div>${skill.description}</div>
        <div class="proficiency mt-2 text-yellow-500">
            ${stars}
        </div>
    `;
    
    return skillDiv;
}

// Update Copyright Year
function updateYear() {
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// Add CSS class for yellow text
const style = document.createElement('style');
style.textContent = `
    .text-yellow-500 {
        color: #f59e0b;
    }
    .mt-2 {
        margin-top: 0.5rem;
    }
`;
document.head.appendChild(style);
