// Данные о команде - ФК Барс (Каракол) - полный состав с детальной информацией
const teamData = [
    // ===== ВРАТАРИ =====
    {
        id: 1,
        name: "Marsel Islamkulov",
        position: "Вратарь",
        number: 71,
        photo: "https://img.a.transfermarkt.technology/portrait/header/491512-1744347789.png?lm=1",
        fullInfo: {
            fullName: "Marsel Islamkulov",
            birthDate: "18 апреля 1994 г.",
            age: 31,
            birthplace: "Кант",
            nationality: "Кыргызстан",
            height: "1,88 м",
            position: "Вратарь",
            nationalTeam: "Сборная Кыргызстана",
            nationalMatches: 2,
            nationalGoals: 0,
            description: "Игрок национальной сборной Кыргызстана. Надёжный вратарь с хорошей реакцией."
        }
    },
    {
        id: 2,
        name: "Azamat Zhomartov",
        position: "Вратарь",
        number: 35,
        photo: "https://img.a.transfermarkt.technology/portrait/header/287192-1584679522.png?lm=1",
        fullInfo: {
            fullName: "Azamat Zhomartov",
            birthDate: "19 июля 1995 г.",
            age: 30,
            birthplace: "Атырау",
            nationality: "Казахстан",
            height: "1,93 м",
            position: "Вратарь",
            description: "Рост 193 см, отличная игра на выходах. Имеет опыт выступлений в чемпионате Казахстана."
        }
    },
    {
        id: 3,
        name: "Nursultan Nusupov",
        position: "Вратарь",
        number: 45,
        photo: "https://img.a.transfermarkt.technology/portrait/header/770699-1743838927.png?lm=1",
        fullInfo: {
            fullName: "Nursultan Nusupov",
            birthDate: "22 июля 2004 г.",
            age: 21,
            birthplace: "Гульча (Алайский р-н)",
            nationality: "Кыргызстан",
            height: "1,92 м",
            position: "Вратарь",
            nationalTeam: "Бывший игрок сборной Кыргызстана",
            nationalMatches: 0,
            nationalGoals: 0,
            description: "Молодой перспективный вратарь с отличными антропометрическими данными."
        }
    },

    // ===== ЗАЩИТНИКИ =====
    {
        id: 4,
        name: "Valeriy Kichin",
        position: "Защитник",
        number: 2,
        photo: "https://img.a.transfermarkt.technology/portrait/header/211878-1744347852.png?lm=1",
        fullInfo: {
            fullName: "Valeriy Kichin",
            birthDate: "12 октября 1992 г.",
            age: 33,
            birthplace: "Бишкек",
            nationality: "Кыргызстан",
            height: "1,85 м",
            position: "Центральный защитник",
            nationalTeam: "Капитан сборной Кыргызстана",
            nationalMatches: 59,
            nationalGoals: 6,
            description: "Опытнейший защитник, капитан команды и сборной. Лидер обороны."
        }
    },
    {
        id: 5,
        name: "Aleksey Abramov",
        position: "Защитник",
        number: 13,
        photo: "https://img.a.transfermarkt.technology/portrait/header/731138-1744347992.png?lm=1",
        fullInfo: {
            fullName: "Aleksey Abramov",
            birthDate: "24 марта 2000 г.",
            age: 25,
            birthplace: "Минск",
            nationality: "Беларусь",
            height: "1,96 м",
            position: "Центральный защитник",
            description: "Рост 196 см - один из самых высоких игроков команды. Отлично играет на втором этаже."
        }
    },
    {
        id: 6,
        name: "Ayzar Akmatov",
        position: "Защитник",
        number: 34,
        photo: "https://img.a.transfermarkt.technology/portrait/header/606631-1744347907.png?lm=1",
        fullInfo: {
            fullName: "Ayzar Akmatov",
            birthDate: "24 августа 1998 г.",
            age: 27,
            birthplace: "Бишкек",
            nationality: "Кыргызстан",
            height: "1,78 м",
            position: "Центральный защитник",
            nationalTeam: "Бывший игрок сборной Кыргызстана",
            nationalMatches: 23,
            nationalGoals: 2,
            description: "Техничный защитник, хорошо начинающий атаки."
        }
    },
    {
        id: 7,
        name: "Gia Chaduneli",
        position: "Защитник",
        number: 44,
        photo: "https://img.a.transfermarkt.technology/portrait/header/255518-1752313491.png?lm=1",
        fullInfo: {
            fullName: "Gia Chaduneli",
            birthDate: "15 мая 1994 г.",
            age: 31,
            birthplace: "Поти",
            nationality: "Грузия",
            height: "1,91 м",
            position: "Центральный защитник",
            description: "Опытный грузинский защитник, выступал в различных европейских лигах."
        }
    },
    {
        id: 8,
        name: "Bekzhan Sagynbaev",
        position: "Защитник",
        number: 9,
        photo: "https://img.a.transfermarkt.technology/portrait/header/309823-1744347934.png?lm=1",
        fullInfo: {
            fullName: "Bekzhan Sagynbaev",
            birthDate: "11 сентября 1994 г.",
            age: 31,
            birthplace: "Бишкек",
            nationality: "Кыргызстан",
            height: "1,79 м",
            position: "Левый защитник",
            nationalTeam: "Бывший игрок сборной Кыргызстана",
            nationalMatches: 37,
            nationalGoals: 3,
            description: "Атакующий защитник с хорошей скоростью и навесами."
        }
    },
    {
        id: 9,
        name: "Said Datsiev",
        position: "Защитник",
        number: 4,
        photo: "https://img.a.transfermarkt.technology/portrait/header/765431-1744347961.png?lm=1",
        fullInfo: {
            fullName: "Said Datsiev",
            birthDate: "10 апреля 2003 г.",
            age: 22,
            birthplace: "Липенка (Иссык-Кульская обл.)",
            nationality: "Кыргызстан",
            height: "1,80 м",
            position: "Правый защитник",
            nationalTeam: "Сборная Кыргызстана U23",
            nationalMatches: 8,
            nationalGoals: 1,
            description: "Молодой перспективный защитник, регулярно вызывается в молодёжную сборную."
        }
    },
    {
        id: 10,
        name: "Bogdan Logachev",
        position: "Защитник",
        number: 55,
        photo: "https://img.a.transfermarkt.technology/portrait/header/607813-1744348046.png?lm=1",
        fullInfo: {
            fullName: "Bogdan Logachev",
            birthDate: "19 марта 2002 г.",
            age: 23,
            birthplace: "Антрацит (Луганская обл.)",
            nationality: "Россия",
            height: "1,76 м",
            position: "Правый защитник",
            nationalTeam: "Бывший игрок сборной России U17",
            nationalMatches: 11,
            nationalGoals: 0,
            description: "Техничный крайний защитник, прошедший школу российского футбола."
        }
    },

    // ===== ПОЛУЗАЩИТНИКИ =====
    {
        id: 11,
        name: "Dmitriy Velikorodnyi",
        position: "Полузащитник",
        number: 26,
        photo: "https://img.a.transfermarkt.technology/portrait/header/380989-1744348161.png?lm=1",
        fullInfo: {
            fullName: "Dmitriy Velikorodnyi",
            birthDate: "6 июня 2000 г.",
            age: 25,
            birthplace: "Ставрополь",
            nationality: "Россия",
            height: "1,83 м",
            position: "Опорный полузащитник",
            nationalTeam: "Бывший игрок сборной России U19",
            nationalMatches: 7,
            nationalGoals: 0,
            description: "Разрушитель в центре поля, отлично читает игру."
        }
    },
    {
        id: 12,
        name: "Sardorbek Nematov",
        position: "Полузащитник",
        number: 8,
        photo: "https://img.a.transfermarkt.technology/portrait/header/1087533-1743915472.png?lm=1",
        fullInfo: {
            fullName: "Sardorbek Nematov",
            birthDate: "17 августа 2005 г.",
            age: 20,
            nationality: "Кыргызстан",
            height: "1,78 м",
            position: "Опорный полузащитник",
            nationalTeam: "Сборная Кыргызстана U20",
            nationalMatches: 9,
            nationalGoals: 0,
            description: "Молодой опорник с хорошим отбором и видением поля."
        }
    },
    {
        id: 13,
        name: "Azim Obonov",
        position: "Полузащитник",
        number: 69,
        photo: "https://img.a.transfermarkt.technology/portrait/header/1423074-1752325790.png?lm=1",
        fullInfo: {
            fullName: "Azim Obonov",
            birthDate: "29 апреля 2005 г.",
            age: 20,
            nationality: "Кыргызстан",
            height: "1,90 м",
            position: "Полузащитник",
            description: "Высокий полузащитник, хорошо играет головой и в подыгрыше."
        }
    },
    {
        id: 14,
        name: "Harun Karic",
        position: "Полузащитник",
        number: 17,
        photo: "https://img.a.transfermarkt.technology/portrait/header/620724-1743681164.png?lm=1",
        fullInfo: {
            fullName: "Harun Karic",
            birthDate: "30 ноября 2002 г.",
            age: 22,
            birthplace: "Тузла",
            nationality: "Босния и Герцеговина",
            height: "1,84 м",
            position: "Центральный полузащитник",
            nationalTeam: "Бывший игрок сборной Боснии U21",
            nationalMatches: 8,
            nationalGoals: 0,
            description: "Балканский полузащитник с отличной техникой и видением поля."
        }
    },
    {
        id: 15,
        name: "Magamed Uzdenov",
        position: "Полузащитник",
        number: 6,
        photo: "https://img.a.transfermarkt.technology/portrait/header/253603-1744348099.png?lm=1",
        fullInfo: {
            fullName: "Magamed Uzdenov",
            birthDate: "25 февраля 1994 г.",
            age: 31,
            birthplace: "Бишкек",
            nationality: "Кыргызстан",
            height: "1,88 м",
            position: "Центральный полузащитник",
            nationalTeam: "Сборная Кыргызстана",
            nationalMatches: 9,
            nationalGoals: 0,
            description: "Опытный полузащитник с хорошей физической подготовкой."
        }
    },
    {
        id: 16,
        name: "Farkhat Musabekov",
        position: "Полузащитник",
        number: 11,
        photo: "https://img.a.transfermarkt.technology/portrait/header/257136-1744348128.png?lm=1",
        fullInfo: {
            fullName: "Farkhat Musabekov",
            birthDate: "3 января 1994 г.",
            age: 31,
            birthplace: "Бишкек",
            nationality: "Кыргызстан",
            height: "1,75 м",
            position: "Центральный полузащитник",
            nationalTeam: "Бывший игрок сборной Кыргызстана",
            nationalMatches: 56,
            nationalGoals: 2,
            description: "Ветеран команды, один из самых опытных игроков в составе."
        }
    },
    {
        id: 17,
        name: "Argen Zhumataev",
        position: "Полузащитник",
        number: 7,
        photo: "https://img.a.transfermarkt.technology/portrait/header/257690-1744348186.png?lm=1",
        fullInfo: {
            fullName: "Argen Zhumataev",
            birthDate: "21 октября 1994 г.",
            age: 31,
            nationality: "Кыргызстан",
            height: "1,76 м",
            position: "Центральный полузащитник",
            nationalTeam: "Сборная Кыргызстана",
            description: "Работоспособный полузащитник, выполняющий большой объём черновой работы."
        }
    },
    {
        id: 18,
        name: "Kayrat Zhyrgalbek uulu",
        position: "Полузащитник",
        number: 20,
        photo: "https://img.a.transfermarkt.technology/portrait/header/224695-1744347876.png?lm=1",
        fullInfo: {
            fullName: "Kayrat Zhyrgalbek uulu",
            birthDate: "13 июня 1993 г.",
            age: 32,
            birthplace: "Бишкек",
            nationality: "Кыргызстан",
            height: "1,77 м",
            position: "Правый полузащитник",
            nationalTeam: "Сборная Кыргызстана",
            nationalMatches: 77,
            nationalGoals: 4,
            description: "Рекордсмен команды по количеству матчей за сборную. Лидер и мотор команды."
        }
    },

    // ===== НАПАДАЮЩИЕ =====
    {
        id: 19,
        name: "Yryskeldi Madanov",
        position: "Нападающий",
        number: 19,
        photo: "https://img.a.transfermarkt.technology/portrait/header/1280923-1743915748.png?lm=1",
        fullInfo: {
            fullName: "Yryskeldi Madanov",
            birthDate: "22 февраля 2006 г.",
            age: 19,
            nationality: "Кыргызстан",
            height: "1,76 м",
            position: "Левый вингер",
            nationalTeam: "Сборная Кыргызстана U23",
            nationalMatches: 1,
            nationalGoals: 0,
            description: "Один из самых молодых игроков команды, быстрый и техничный вингер."
        }
    },
    {
        id: 20,
        name: "Hibiki Mochizuki",
        position: "Нападающий",
        number: 98,
        photo: "https://img.a.transfermarkt.technology/portrait/header/1187383-1753702590.png?lm=1",
        fullInfo: {
            fullName: "Hibiki Mochizuki",
            birthDate: "9 октября 1998 г.",
            age: 27,
            nationality: "Япония",
            height: "1,75 м",
            position: "Левый вингер",
            description: "Японский вингер с отличным дриблингом и скоростью."
        }
    },
    {
        id: 21,
        name: "Daniel Omarov",
        position: "Нападающий",
        number: 24,
        photo: "https://img.a.transfermarkt.technology/portrait/header/1124952-1711863269.png?lm=1",
        fullInfo: {
            fullName: "Daniel Omarov",
            birthDate: "29 марта 2005 г.",
            age: 20,
            nationality: "Кыргызстан",
            height: "1,79 м",
            position: "Оттянутый нападающий",
            nationalTeam: "Сборная Кыргызстана U20",
            nationalMatches: 4,
            nationalGoals: 0,
            description: "Нападающий, умеющий сыграть в оттяжке и создать моменты для партнёров."
        }
    },
    {
        id: 22,
        name: "Beka Kavtaradze",
        position: "Нападающий",
        number: 80,
        photo: "https://img.a.transfermarkt.technology/portrait/header/412617-1684723108.png?lm=1",
        fullInfo: {
            fullName: "Beka Kavtaradze",
            birthDate: "15 июня 1999 г.",
            age: 26,
            birthplace: "Душети",
            nationality: "Грузия",
            height: "1,85 м",
            position: "Центральный нападающий",
            nationalTeam: "Бывший игрок сборной Грузии U21",
            nationalMatches: 10,
            nationalGoals: 1,
            description: "Мощный грузинский форвард, хорошо играет спиной к воротам."
        }
    },
    {
        id: 23,
        name: "Mirlan Murzaev",
        position: "Нападающий",
        number: 10,
        photo: "https://img.a.transfermarkt.technology/portrait/header/125802-1744348393.png?lm=1",
        fullInfo: {
            fullName: "Mirlan Murzaev",
            birthDate: "29 марта 1990 г.",
            age: 35,
            birthplace: "Кочкор-Ата",
            nationality: "Кыргызстан",
            height: "1,82 м",
            position: "Центральный нападающий",
            nationalTeam: "Бывший игрок сборной Кыргызстана",
            nationalMatches: 57,
            nationalGoals: 16,
            description: "Лучший бомбардир в истории клуба. Легенда и символ команды!"
        }
    },
    {
        id: 24,
        name: "Nurlan Ryspaev",
        position: "Нападающий",
        number: 12,
        photo: "https://img.a.transfermarkt.technology/portrait/header/750489-1744348291.png?lm=1",
        fullInfo: {
            fullName: "Nurlan Ryspaev",
            birthDate: "12 июля 1990 г.",
            age: 35,
            nationality: "Кыргызстан",
            height: "1,83 м",
            position: "Центральный нападающий",
            description: "Опытный нападающий с хорошим голевым чутьём."
        }
    },
    {
        id: 25,
        name: "Emmanuel Yaghr",
        position: "Нападающий",
        number: 15,
        photo: "https://img.a.transfermarkt.technology/portrait/big/531918-1619024229.png?lm=1",
        fullInfo: {
            fullName: "Emmanuel Yaghr",
            birthDate: "13 августа 1998 г.",
            age: 27,
            nationality: "Гана",
            height: "1,83 м",
            position: "Центральный нападающий",
            description: "Ганский форвард с отличными физическими данными."
        }
    },
    {
        id: 26,
        name: "Temur Chogadze",
        position: "Нападающий",
        number: 77,
        photo: "https://img.a.transfermarkt.technology/portrait/big/400719-1687739431.png?lm=1",
        fullInfo: {
            fullName: "Temur Chogadze",
            birthDate: "5 мая 1998 г.",
            age: 27,
            birthplace: "Батуми",
            nationality: "Грузия",
            height: "1,77 м",
            position: "Правый вингер",
            nationalTeam: "Бывший игрок сборной Грузии U21",
            nationalMatches: 2,
            nationalGoals: 0,
            description: "Техничный вингер с хорошим дриблингом и скоростью."
        }
    }
];

// Данные о матчах
const matchesData = {
    upcoming: [
        { date: "2026-03-15", opponent: "Динамо (Бишкек)", location: "Дома", time: "16:00" },
        { date: "2026-03-22", opponent: "Алай (Ош)", location: "В гостях", time: "15:30" },
        { date: "2026-03-29", opponent: "Нефтчи (Кочкор-Ата)", location: "Дома", time: "16:00" },
        { date: "2026-04-05", opponent: "Абдыш-Ата (Кант)", location: "В гостях", time: "15:00" },
        { date: "2026-04-12", opponent: "Дордой (Бишкек)", location: "Дома", time: "16:30" }
    ],
    past: [
        { date: "2026-02-08", opponent: "Илбирс (Бишкек)", result: "2:0", location: "Дома" },
        { date: "2026-02-15", opponent: "Алга (Бишкек)", result: "1:1", location: "В гостях" },
        { date: "2026-02-22", opponent: "Кара-Балта", result: "3:1", location: "Дома" }
    ]
};

// Турнирная таблица
const standingsData = [
    { position: 1, team: "Дордой", games: 8, wins: 6, draws: 2, losses: 0, goals: "18-5", points: 20 },
    { position: 2, team: "Абдыш-Ата", games: 8, wins: 5, draws: 2, losses: 1, goals: "14-7", points: 17 },
    { position: 3, team: "Алай", games: 8, wins: 5, draws: 1, losses: 2, goals: "13-8", points: 16 },
    { position: 4, team: "БАРС", games: 8, wins: 4, draws: 2, losses: 2, goals: "12-9", points: 14 },
    { position: 5, team: "Нефтчи", games: 8, wins: 3, draws: 3, losses: 2, goals: "10-9", points: 12 },
    { position: 6, team: "Алга", games: 8, wins: 3, draws: 1, losses: 4, goals: "9-12", points: 10 },
    { position: 7, team: "Динамо", games: 8, wins: 2, draws: 2, losses: 4, goals: "8-13", points: 8 },
    { position: 8, team: "Илбирс", games: 8, wins: 1, draws: 2, losses: 5, goals: "6-15", points: 5 }
];

// DOM элементы
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const teamGrid = document.getElementById('teamGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const contactForm = document.getElementById('contactForm');

// Инициализация
document.addEventListener('DOMContentLoaded', function() {
    setActiveNavItem();
    initScrollAnimations();

    // Страница команды
    if (teamGrid) {
        renderTeam('all');
        if (filterBtns.length > 0) {
            filterBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    filterBtns.forEach(b => b.classList.remove('active'));
                    this.classList.add('active');
                    renderTeam(this.dataset.filter);
                });
            });
        }
    }

    // Страница матчей
    const upcomingList = document.getElementById('upcomingMatchesList');
    const pastList = document.getElementById('pastMatchesList');
    const standingsBody = document.getElementById('standingsBody');
    
    if (upcomingList) renderUpcomingMatches();
    if (pastList) renderPastMatches();
    if (standingsBody) renderStandings();

    // Переключение вкладок матчей
    const tabBtns = document.querySelectorAll('.tab-btn');
    if (tabBtns.length) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                tabBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                const tab = this.dataset.tab;
                document.getElementById('upcomingMatches').style.display = tab === 'upcoming' ? 'block' : 'none';
                document.getElementById('pastMatches').style.display = tab === 'past' ? 'block' : 'none';
            });
        });
    }

    // Форма обратной связи
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }

    initEventListeners();
});

function setActiveNavItem() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (currentPage === href || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.quick-link-card, .benefit-card, .player-card, .match-card').forEach(el => {
        observer.observe(el);
    });
}

function renderTeam(filter) {
    teamGrid.innerHTML = '';
    const filtered = filter === 'all' ? teamData : teamData.filter(p => 
        p.position.toLowerCase() === filter.toLowerCase()
    );
    
    filtered.forEach((player, index) => {
        const card = document.createElement('div');
        card.className = 'player-card fade-in-up';
        card.style.animationDelay = `${index * 0.1}s`;
        card.dataset.id = player.id;
        
        const nationality = player.fullInfo?.nationality || 'Кыргызстан';
        const age = player.fullInfo?.age || '';
        const height = player.fullInfo?.height || '';
        
        card.innerHTML = `
            <div class="player-image" style="background-image: url('${player.photo}')">
                <div class="player-number">${player.number}</div>
            </div>
            <div class="player-info">
                <h3 class="player-name">${player.name}</h3>
                <div class="player-position">${player.position}</div>
                <div class="player-short-info">
                    <span class="player-nation">${nationality}</span>
                    ${age ? `${age} лет` : ''} ${height ? `• ${height}` : ''}
                </div>
            </div>
        `;
        
        card.addEventListener('click', () => showPlayerModal(player));
        teamGrid.appendChild(card);
    });
}

function showPlayerModal(player) {
    const info = player.fullInfo || {};
    
    const modal = document.createElement('div');
    modal.className = 'player-modal';
    modal.innerHTML = `
        <div class="modal-overlay"></div>
        <div class="modal-content">
            <div class="modal-header">
                <h2>${player.name} #${player.number}</h2>
                <button class="modal-close"><i class="fas fa-times"></i></button>
            </div>
            <div class="modal-body">
                <div class="player-detail">
                    <img src="${player.photo}" alt="${player.name}" class="player-detail-image">
                    <div class="player-detail-info">
                        <div class="detail-row">
                            <span class="detail-label">Полное имя:</span>
                            <span class="detail-value">${info.fullName || player.name}</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">Дата рождения:</span>
                            <span class="detail-value">${info.birthDate || '—'}</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">Возраст:</span>
                            <span class="detail-value">${info.age || '—'} лет</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">Место рождения:</span>
                            <span class="detail-value">${info.birthplace || '—'}</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">Национальность:</span>
                            <span class="detail-value">${info.nationality || '—'}</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">Рост:</span>
                            <span class="detail-value">${info.height || '—'}</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">Амплуа:</span>
                            <span class="detail-value">${info.position || player.position}</span>
                        </div>
                        ${info.nationalTeam ? `
                        <div class="detail-row">
                            <span class="detail-label">Сборная:</span>
                            <span class="detail-value">${info.nationalTeam}</span>
                        </div>
                        ` : ''}
                        ${info.nationalMatches !== undefined ? `
                        <div class="detail-row">
                            <span class="detail-label">Матчи за сборную:</span>
                            <span class="detail-value">${info.nationalMatches} (голов: ${info.nationalGoals || 0})</span>
                        </div>
                        ` : ''}
                        <div class="player-bio">
                            <strong>О игроке:</strong>
                            <p>${info.description || 'Нет дополнительной информации'}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Закрытие модального окна
    const closeModal = () => modal.remove();
    modal.querySelector('.modal-close').addEventListener('click', closeModal);
    modal.querySelector('.modal-overlay').addEventListener('click', closeModal);
}

function renderUpcomingMatches() {
    const container = document.getElementById('upcomingMatchesList');
    if (!container) return;
    
    container.innerHTML = matchesData.upcoming.map(m => `
        <div class="match-card">
            <div class="match-info">
                <div class="match-date">${new Date(m.date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' })} • ${m.time}</div>
                <div class="match-teams">Барс – ${m.opponent}</div>
                <div class="match-location">${m.location === 'Дома' ? 'Стадион «Спартак»' : 'Выезд'}</div>
            </div>
            <div class="match-result">?</div>
        </div>
    `).join('');
}

function renderPastMatches() {
    const container = document.getElementById('pastMatchesList');
    if (!container) return;
    
    container.innerHTML = matchesData.past.map(m => `
        <div class="match-card">
            <div class="match-info">
                <div class="match-date">${new Date(m.date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' })}</div>
                <div class="match-teams">Барс – ${m.opponent}</div>
                <div class="match-location">${m.location === 'Дома' ? 'Стадион «Спартак»' : 'Выезд'}</div>
            </div>
            <div class="match-result">${m.result}</div>
        </div>
    `).join('');
}

function renderStandings() {
    const container = document.getElementById('standingsBody');
    if (!container) return;
    
    container.innerHTML = standingsData.map(row => `
        <tr ${row.team === 'БАРС' ? 'class="highlight"' : ''}>
            <td>${row.position}</td>
            <td>${row.team}</td>
            <td>${row.games}</td>
            <td>${row.wins}</td>
            <td>${row.draws}</td>
            <td>${row.losses}</td>
            <td>${row.goals}</td>
            <td><strong>${row.points}</strong></td>
        </tr>
    `).join('');
}

function handleContactForm(e) {
    e.preventDefault();
    
    const data = {
        name: document.getElementById('name')?.value,
        email: document.getElementById('email')?.value,
        phone: document.getElementById('phone')?.value,
        subject: document.getElementById('subject')?.value,
        message: document.getElementById('message')?.value
    };
    
    if (window.bookingAPI) {
        window.bookingAPI.addMessage(data);
        showNotification('Сообщение отправлено! Мы свяжемся с вами.', 'success');
        e.target.reset();
    } else {
        showNotification('Ошибка отправки.', 'error');
    }
}

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content"><i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i> ${message}</div>
        <button class="notification-close"><i class="fas fa-times"></i></button>
    `;
    
    // Стили для уведомления
    const style = document.createElement('style');
    style.textContent = `
        .notification {
            position: fixed;
            top: 100px;
            right: 20px;
            background: white;
            border-left: 4px solid ${type === 'success' ? '#0047AB' : '#DC143C'};
            padding: 15px 20px;
            border-radius: 8px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            z-index: 10000;
            transform: translateX(120%);
            transition: transform 0.3s;
            display: flex;
            align-items: center;
            gap: 15px;
            min-width: 300px;
        }
        .notification.show { transform: translateX(0); }
        .notification-content i { color: ${type === 'success' ? '#0047AB' : '#DC143C'}; margin-right: 10px; }
        .notification-close { background: none; border: none; font-size: 1rem; cursor: pointer; color: #6c757d; }
        .notification-close:hover { color: #0047AB; }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(notification);
    
    setTimeout(() => notification.classList.add('show'), 10);
    
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    });
    
    setTimeout(() => {
        if (notification.parentNode) {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

function initEventListeners() {
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuToggle.innerHTML = navMenu.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
    }
    
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        if (header && window.scrollY > 100) {
            header.classList.add('scrolled');
        } else if (header) {
            header.classList.remove('scrolled');
        }
    });
    
    // Закрытие меню при клике на ссылку
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            if (menuToggle) menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
}
// В вашем contact.html (или основном скрипте)
function saveContactMessage(name, email, subject, message) {
    const messages = JSON.parse(localStorage.getItem('fcbars_messages') || '[]');
    messages.push({
        name: name,
        email: email,
        subject: subject,
        message: message,
        date: new Date().toLocaleString(),
        status: 'new'
    });
    localStorage.setItem('fcbars_messages', JSON.stringify(messages));
}