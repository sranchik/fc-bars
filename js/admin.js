// Основной файл для админ-панели

// Проверка авторизации
function checkAuth() {
    if (!window.bookingAPI.isAuthenticated()) {
        window.location.href = 'admin/login.html';
        return false;
    }
    return true;
}

// ========== ОБЩИЕ ФУНКЦИИ ==========

// Форматирование даты
function formatDate(dateString) {
    return window.bookingAPI.formatDate(dateString);
}

// Форматирование статуса
function formatBookingStatus(status) {
    return window.bookingAPI.formatStatus(status, 'booking');
}

function formatMessageStatus(status) {
    return window.bookingAPI.formatStatus(status, 'message');
}

// Показать уведомление
function showAdminNotification(message, type = 'success') {
    // Удаляем предыдущие уведомления
    const existingNotifications = document.querySelectorAll('.admin-notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Создаем новое уведомление
    const notification = document.createElement('div');
    notification.className = `admin-notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Добавляем стили
    const style = document.createElement('style');
    style.textContent = `
        .admin-notification {
            position: fixed;
            top: 100px;
            right: 20px;
            background: var(--card-bg);
            border: 1px solid ${type === 'success' ? 'var(--primary-color)' : type === 'error' ? '#ff4757' : '#4299E1'};
            border-left: 4px solid ${type === 'success' ? 'var(--primary-color)' : type === 'error' ? '#ff4757' : '#4299E1'};
            padding: 15px 20px;
            border-radius: 8px;
            box-shadow: var(--shadow);
            z-index: 9999;
            transform: translateX(120%);
            transition: transform 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: space-between;
            min-width: 300px;
            max-width: 400px;
        }
        
        .admin-notification.show {
            transform: translateX(0);
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            gap: 10px;
            color: var(--text-color);
        }
        
        .notification-content i {
            color: ${type === 'success' ? 'var(--primary-color)' : type === 'error' ? '#ff4757' : '#4299E1'};
            font-size: 1.2rem;
        }
        
        .notification-close {
            background: none;
            border: none;
            color: var(--text-light);
            cursor: pointer;
            font-size: 1rem;
            transition: color 0.3s ease;
            padding: 0;
            margin-left: 15px;
        }
        
        .notification-close:hover {
            color: var(--primary-color);
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(notification);
    
    // Показываем уведомление
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Закрытие уведомления
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
                style.remove();
            }
        }, 300);
    });
    
    // Автоматическое закрытие
    setTimeout(() => {
        if (notification.parentNode) {
            notification.classList.remove('show');
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                    style.remove();
                }
            }, 300);
        }
    }, 5000);
}

// ========== СТРАНИЦА ВХОДА ==========

function initLoginPage() {
    const loginForm = document.getElementById('loginForm');
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');
    
    if (togglePassword && passwordInput) {
        togglePassword.addEventListener('click', function() {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            this.innerHTML = type === 'password' ? '<i class="fas fa-eye"></i>' : '<i class="fas fa-eye-slash"></i>';
        });
    }
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            const result = window.bookingAPI.login(username, password);
            
            if (result.success) {
                showAdminNotification('Успешный вход в систему!', 'success');
                setTimeout(() => {
                    window.location.href = 'dashboard.html';
                }, 1000);
            } else {
                showAdminNotification(result.error, 'error');
            }
        });
    }
    
    // Автозаполнение для тестирования
    document.getElementById('username').value = 'admin';
    document.getElementById('password').value = 'admin123';
}

// ========== ОБЩИЕ ЭЛЕМЕНТЫ АДМИН-ПАНЕЛИ ==========

function initAdminCommon() {
    if (!checkAuth()) return;
    
    // Установка имени пользователя
    const user = window.bookingAPI.getCurrentUser();
    const usernameElements = document.querySelectorAll('#adminUsername');
    usernameElements.forEach(el => {
        if (el) el.textContent = user.username || 'Администратор';
    });
    
    // Установка текущей даты
    const dateElements = document.querySelectorAll('#currentDate');
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    dateElements.forEach(el => {
        if (el) el.textContent = now.toLocaleDateString('ru-RU', options);
    });
    
    // Переключение боковой панели
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.querySelector('.sidebar');
    
    if (sidebarToggle && sidebar) {
        sidebarToggle.addEventListener('click', function() {
            sidebar.classList.toggle('collapsed');
            sidebar.classList.toggle('show');
        });
    }
    
    // Выход из системы
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.bookingAPI.logout();
            window.location.href = 'login.html';
        });
    }
    
    // Обновление счетчиков в реальном времени
    updateAdminCounters();
    
    // Автоматическое обновление каждые 30 секунд
    setInterval(updateAdminCounters, 30000);
}

// Обновление счетчиков
function updateAdminCounters() {
    const bookingStats = window.bookingAPI.getBookingStats();
    const messageStats = window.bookingAPI.getMessageStats();
    
    // Обновляем бейджи в меню
    const pendingBookingsElements = document.querySelectorAll('#pendingBookingsCount');
    pendingBookingsElements.forEach(el => {
        if (el) el.textContent = bookingStats.pending;
    });
    
    const newMessagesElements = document.querySelectorAll('#newMessagesCount');
    newMessagesElements.forEach(el => {
        if (el) el.textContent = messageStats.new;
    });
    
    // Обновляем статистику на дашборде
    const totalBookingsElement = document.getElementById('totalBookings');
    if (totalBookingsElement) totalBookingsElement.textContent = bookingStats.total;
    
    const pendingBookingsElement = document.getElementById('pendingBookings');
    if (pendingBookingsElement) pendingBookingsElement.textContent = bookingStats.pending;
    
    const totalMessagesElement = document.getElementById('totalMessages');
    if (totalMessagesElement) totalMessagesElement.textContent = messageStats.total;
    
    const totalRevenueElement = document.getElementById('totalRevenue');
    if (totalRevenueElement) totalRevenueElement.textContent = bookingStats.revenue.toLocaleString('ru-RU') + ' сом';
}

// ========== ДАШБОРД ==========

function initDashboard() {
    initAdminCommon();
    
    // Загрузка статистики
    loadDashboardStats();
    
    // Загрузка последних бронирований
    loadRecentBookings();
    
    // Загрузка последних сообщений
    loadRecentMessages();
    
    // Инициализация графика
    initBookingsChart();
    
    // Кнопка обновления
    const refreshBtn = document.getElementById('refreshBtn');
    if (refreshBtn) {
        refreshBtn.addEventListener('click', function() {
            loadDashboardStats();
            loadRecentBookings();
            loadRecentMessages();
            initBookingsChart();
            showAdminNotification('Данные обновлены', 'success');
        });
    }
}

function loadDashboardStats() {
    const bookingStats = window.bookingAPI.getBookingStats();
    const messageStats = window.bookingAPI.getMessageStats();
    
    // Обновляем элементы на странице
    const elements = {
        'totalBookings': bookingStats.total,
        'pendingBookings': bookingStats.pending,
        'totalMessages': messageStats.total,
        'totalRevenue': bookingStats.revenue.toLocaleString('ru-RU') + ' сом'
    };
    
    Object.keys(elements).forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = elements[id];
        }
    });
}

function loadRecentBookings() {
    const bookings = window.bookingAPI.getAllBookings();
    const recentBookings = bookings.slice(0, 5);
    const tableBody = document.getElementById('recentBookingsTable');
    
    if (!tableBody) return;
    
    if (recentBookings.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="7" class="text-center">
                    <p>Бронирования не найдены</p>
                </td>
            </tr>
        `;
        return;
    }
    
    let html = '';
    recentBookings.forEach(booking => {
        const checkIn = new Date(booking.checkIn);
        const checkOut = new Date(booking.checkOut);
        const nights = Math.ceil((checkOut - checkIn) / (1000 * 3600 * 24));
        
        html += `
            <tr>
                <td><code>${booking.id.substring(0, 8)}</code></td>
                <td>
                    <strong>${booking.firstName} ${booking.lastName}</strong><br>
                    <small class="text-muted">${booking.country || 'Не указана'}</small>
                </td>
                <td>${checkIn.toLocaleDateString('ru-RU')} - ${checkOut.toLocaleDateString('ru-RU')}<br>
                    <small>${nights} ночей</small>
                </td>
                <td>
                    ${booking.roomType === 'standard' ? 'Стандарт' : 
                      booking.roomType === 'deluxe' ? 'Делюкс' : 
                      booking.roomType === 'suite' ? 'Люкс' : 'Семейный'}<br>
                    <small>${booking.roomCount} номер(а)</small>
                </td>
                <td><strong>${booking.totalPrice?.toLocaleString('ru-RU') || '0'} сом</strong></td>
                <td>${formatBookingStatus(booking.status)}</td>
                <td>
                    <button class="action-btn btn-view view-booking" data-id="${booking.id}">
                        <i class="fas fa-eye"></i>
                    </button>
                </td>
            </tr>
        `;
    });
    
    tableBody.innerHTML = html;
    
    // Добавляем обработчики для кнопок просмотра
    document.querySelectorAll('.view-booking').forEach(btn => {
        btn.addEventListener('click', function() {
            const bookingId = this.getAttribute('data-id');
            viewBookingDetails(bookingId);
        });
    });
}

function loadRecentMessages() {
    const messages = window.bookingAPI.getAllMessages();
    const recentMessages = messages.slice(0, 5);
    const messagesList = document.getElementById('recentMessagesList');
    
    if (!messagesList) return;
    
    if (recentMessages.length === 0) {
        messagesList.innerHTML = `
            <div class="text-center">
                <p>Сообщения не найдены</p>
            </div>
        `;
        return;
    }
    
    let html = '';
    recentMessages.forEach(message => {
        const date = new Date(message.createdAt);
        
        html += `
            <div class="message-item">
                <div class="message-header">
                    <div class="message-sender">
                        <strong>${message.name}</strong>
                        <span>${message.subjectText}</span>
                    </div>
                    ${formatMessageStatus(message.status)}
                </div>
                <div class="message-preview">
                    ${message.message}
                </div>
                <div class="message-footer">
                    <div class="message-contact">
                        ${message.email} • ${message.phone || 'Телефон не указан'}
                    </div>
                    <div class="message-date">
                        ${date.toLocaleDateString('ru-RU')}
                    </div>
                </div>
            </div>
        `;
    });
    
    messagesList.innerHTML = html;
}

function initBookingsChart() {
    const ctx = document.getElementById('bookingsChart');
    if (!ctx) return;
    
    const bookings = window.bookingAPI.getAllBookings();
    
    // Группируем по месяцам
    const monthlyData = {};
    bookings.forEach(booking => {
        const date = new Date(booking.createdAt);
        const monthYear = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
        
        if (!monthlyData[monthYear]) {
            monthlyData[monthYear] = {
                bookings: 0,
                revenue: 0
            };
        }
        
        monthlyData[monthYear].bookings++;
        monthlyData[monthYear].revenue += booking.totalPrice || 0;
    });
    
    // Сортируем по дате
    const sortedMonths = Object.keys(monthlyData).sort();
    const last12Months = sortedMonths.slice(-12);
    
    const labels = last12Months.map(month => {
        const [year, monthNum] = month.split('-');
        const monthNames = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];
        return `${monthNames[parseInt(monthNum) - 1]} ${year}`;
    });
    
    const bookingCounts = last12Months.map(month => monthlyData[month]?.bookings || 0);
    const revenues = last12Months.map(month => monthlyData[month]?.revenue || 0);
    
    // Уничтожаем предыдущий график, если он существует
    if (window.bookingsChartInstance) {
        window.bookingsChartInstance.destroy();
    }
    
    window.bookingsChartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Количество бронирований',
                    data: bookingCounts,
                    borderColor: '#D4AF37',
                    backgroundColor: 'rgba(212, 175, 55, 0.1)',
                    borderWidth: 2,
                    fill: true,
                    tension: 0.4,
                    yAxisID: 'y'
                },
                {
                    label: 'Доход (сом)',
                    data: revenues,
                    borderColor: '#64FFDA',
                    backgroundColor: 'rgba(100, 255, 218, 0.1)',
                    borderWidth: 2,
                    fill: true,
                    tension: 0.4,
                    yAxisID: 'y1'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                mode: 'index',
                intersect: false
            },
            scales: {
                x: {
                    grid: {
                        color: 'rgba(136, 146, 176, 0.1)'
                    },
                    ticks: {
                        color: 'var(--text-light)'
                    }
                },
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    grid: {
                        color: 'rgba(136, 146, 176, 0.1)'
                    },
                    ticks: {
                        color: 'var(--text-light)'
                    }
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    grid: {
                        drawOnChartArea: false
                    },
                    ticks: {
                        color: 'var(--text-light)'
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: 'var(--text-color)'
                    }
                }
            }
        }
    });
}

// ========== СТРАНИЦА БРОНИРОВАНИЙ ==========

function initBookingsPage() {
    initAdminCommon();
    
    // Инициализация переменных для пагинации
    let currentPage = 1;
    let itemsPerPage = 10;
    let filteredBookings = [];
    let currentFilters = {
        status: 'all',
        roomType: 'all',
        search: '',
        date: ''
    };
    
    // Загрузка данных
    loadBookingsTable();
    
    // Обработчики фильтров
    const statusFilter = document.getElementById('statusFilter');
    const roomTypeFilter = document.getElementById('roomTypeFilter');
    const searchInput = document.getElementById('searchBookings');
    const dateFilter = document.getElementById('dateFilter');
    const clearFiltersBtn = document.getElementById('clearFiltersBtn');
    
    if (statusFilter) {
        statusFilter.addEventListener('change', function() {
            currentFilters.status = this.value;
            currentPage = 1;
            loadBookingsTable();
        });
    }
    
    if (roomTypeFilter) {
        roomTypeFilter.addEventListener('change', function() {
            currentFilters.roomType = this.value;
            currentPage = 1;
            loadBookingsTable();
        });
    }
    
    if (searchInput) {
        searchInput.addEventListener('input', debounce(function() {
            currentFilters.search = this.value.toLowerCase();
            currentPage = 1;
            loadBookingsTable();
        }, 300));
    }
    
    if (dateFilter) {
        dateFilter.addEventListener('change', function() {
            currentFilters.date = this.value;
            currentPage = 1;
            loadBookingsTable();
        });
    }
    
    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', function() {
            currentFilters = {
                status: 'all',
                roomType: 'all',
                search: '',
                date: ''
            };
            
            if (statusFilter) statusFilter.value = 'all';
            if (roomTypeFilter) roomTypeFilter.value = 'all';
            if (searchInput) searchInput.value = '';
            if (dateFilter) dateFilter.value = '';
            
            currentPage = 1;
            loadBookingsTable();
        });
    }
    
    // Пагинация
    const itemsPerPageSelect = document.getElementById('itemsPerPage');
    const prevPageBtn = document.getElementById('prevPage');
    const nextPageBtn = document.getElementById('nextPage');
    
    if (itemsPerPageSelect) {
        itemsPerPageSelect.addEventListener('change', function() {
            itemsPerPage = parseInt(this.value);
            currentPage = 1;
            loadBookingsTable();
        });
    }
    
    if (prevPageBtn) {
        prevPageBtn.addEventListener('click', function() {
            if (currentPage > 1) {
                currentPage--;
                loadBookingsTable();
            }
        });
    }
    
    if (nextPageBtn) {
        nextPageBtn.addEventListener('click', function() {
            const totalPages = Math.ceil(filteredBookings.length / itemsPerPage);
            if (currentPage < totalPages) {
                currentPage++;
                loadBookingsTable();
            }
        });
    }
    
    // Кнопка добавления бронирования
    const addBookingBtn = document.getElementById('addBookingBtn');
    if (addBookingBtn) {
        addBookingBtn.addEventListener('click', showAddBookingModal);
    }
    
    // Экспорт данных
    const exportBtn = document.getElementById('exportBtn');
    if (exportBtn) {
        exportBtn.addEventListener('click', exportBookingsToCSV);
    }
}

function loadBookingsTable() {
    const allBookings = window.bookingAPI.getAllBookings();
    
    // Применяем фильтры
    filteredBookings = allBookings.filter(booking => {
        // Фильтр по статусу
        if (currentFilters.status !== 'all' && booking.status !== currentFilters.status) {
            return false;
        }
        
        // Фильтр по типу номера
        if (currentFilters.roomType !== 'all' && booking.roomType !== currentFilters.roomType) {
            return false;
        }
        
        // Поиск
        if (currentFilters.search) {
            const searchTerm = currentFilters.search.toLowerCase();
            const searchableText = `
                ${booking.firstName} ${booking.lastName}
                ${booking.email}
                ${booking.phone}
                ${booking.id}
            `.toLowerCase();
            
            if (!searchableText.includes(searchTerm)) {
                return false;
            }
        }
        
        // Фильтр по дате
        if (currentFilters.date) {
            const bookingDate = new Date(booking.checkIn).toISOString().split('T')[0];
            if (bookingDate !== currentFilters.date) {
                return false;
            }
        }
        
        return true;
    });
    
    // Пагинация
    const totalItems = filteredBookings.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
    const currentPageBookings = filteredBookings.slice(startIndex, endIndex);
    
    // Обновляем таблицу
    const tableBody = document.getElementById('bookingsTable');
    const noBookingsMessage = document.getElementById('noBookingsMessage');
    const loadingElement = document.getElementById('bookingsLoading');
    const pageInfo = document.getElementById('pageInfo');
    const prevPageBtn = document.getElementById('prevPage');
    const nextPageBtn = document.getElementById('nextPage');
    
    if (loadingElement) {
        loadingElement.style.display = 'none';
    }
    
    if (totalItems === 0) {
        if (tableBody) tableBody.innerHTML = '';
        if (noBookingsMessage) noBookingsMessage.style.display = 'block';
        if (pageInfo) pageInfo.textContent = 'Страница 1 из 1';
        if (prevPageBtn) prevPageBtn.disabled = true;
        if (nextPageBtn) nextPageBtn.disabled = true;
        return;
    }
    
    if (noBookingsMessage) {
        noBookingsMessage.style.display = 'none';
    }
    
    // Обновляем информацию о пагинации
    if (pageInfo) {
        pageInfo.textContent = `Страница ${currentPage} из ${totalPages}`;
    }
    
    if (prevPageBtn) {
        prevPageBtn.disabled = currentPage === 1;
    }
    
    if (nextPageBtn) {
        nextPageBtn.disabled = currentPage === totalPages;
    }
    
    // Обновляем статистику
    updateBookingsStats(filteredBookings);
    
    // Заполняем таблицу
    let html = '';
    currentPageBookings.forEach(booking => {
        const checkIn = new Date(booking.checkIn);
        const checkOut = new Date(booking.checkOut);
        const nights = Math.ceil((checkOut - checkIn) / (1000 * 3600 * 24));
        const createdAt = new Date(booking.createdAt);
        
        html += `
            <tr>
                <td><code>${booking.id.substring(0, 8)}</code></td>
                <td>
                    <strong>${booking.firstName} ${booking.lastName}</strong><br>
                    <small class="text-muted">${booking.country || 'Не указана'}</small>
                </td>
                <td>
                    ${booking.email}<br>
                    ${booking.phone}
                </td>
                <td>
                    ${checkIn.toLocaleDateString('ru-RU')} - ${checkOut.toLocaleDateString('ru-RU')}<br>
                    <small>${nights} ночей</small>
                </td>
                <td>
                    ${booking.roomType === 'standard' ? 'Стандарт' : 
                      booking.roomType === 'deluxe' ? 'Делюкс' : 
                      booking.roomType === 'suite' ? 'Люкс' : 'Семейный'}<br>
                    <small>${booking.roomCount} номер(а)</small>
                </td>
                <td>
                    ${booking.adults} взр.<br>
                    ${booking.children > 0 ? booking.children + ' дет.' : 'Без детей'}
                </td>
                <td><strong>${booking.totalPrice?.toLocaleString('ru-RU') || '0'} сом</strong></td>
                <td>${formatBookingStatus(booking.status)}</td>
                <td>${createdAt.toLocaleDateString('ru-RU')}</td>
                <td>
                    <div class="action-buttons">
                        <button class="action-btn btn-view view-booking" data-id="${booking.id}" title="Просмотр">
                            <i class="fas fa-eye"></i>
                        </button>
                        <button class="action-btn btn-edit edit-booking" data-id="${booking.id}" title="Редактировать">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="action-btn btn-delete delete-booking" data-id="${booking.id}" title="Удалить">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `;
    });
    
    if (tableBody) {
        tableBody.innerHTML = html;
    }
    
    // Добавляем обработчики событий
    document.querySelectorAll('.view-booking').forEach(btn => {
        btn.addEventListener('click', function() {
            const bookingId = this.getAttribute('data-id');
            viewBookingDetails(bookingId);
        });
    });
    
    document.querySelectorAll('.edit-booking').forEach(btn => {
        btn.addEventListener('click', function() {
            const bookingId = this.getAttribute('data-id');
            editBooking(bookingId);
        });
    });
    
    document.querySelectorAll('.delete-booking').forEach(btn => {
        btn.addEventListener('click', function() {
            const bookingId = this.getAttribute('data-id');
            deleteBooking(bookingId);
        });
    });
}

function updateBookingsStats(bookings) {
    const total = bookings.length;
    const pending = bookings.filter(b => b.status === 'pending').length;
    const confirmed = bookings.filter(b => b.status === 'confirmed').length;
    const revenue = bookings
        .filter(b => b.status === 'confirmed' || b.status === 'completed')
        .reduce((sum, b) => sum + (b.totalPrice || 0), 0);
    
    const elements = {
        'totalBookingsCount': total,
        'pendingCount': pending,
        'confirmedCount': confirmed,
        'revenueCount': revenue.toLocaleString('ru-RU') + ' сом'
    };
    
    Object.keys(elements).forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = elements[id];
        }
    });
}

function viewBookingDetails(bookingId) {
    const booking = window.bookingAPI.getBookingById(bookingId);
    if (!booking) {
        showAdminNotification('Бронирование не найдено', 'error');
        return;
    }
    
    const modal = document.getElementById('bookingModal');
    const modalTitle = document.getElementById('modalTitle');
    const detailsTab = document.getElementById('detailsTab');
    const bookingNotes = document.getElementById('bookingNotes');
    
    if (!modal || !modalTitle || !detailsTab || !bookingNotes) return;
    
    // Заполняем детали
    const checkIn = new Date(booking.checkIn);
    const checkOut = new Date(booking.checkOut);
    const nights = Math.ceil((checkOut - checkIn) / (1000 * 3600 * 24));
    const createdAt = new Date(booking.createdAt);
    
    const roomTypeText = {
        'standard': 'Стандарт',
        'deluxe': 'Делюкс', 
        'suite': 'Люкс',
        'family': 'Семейный'
    }[booking.roomType] || booking.roomType;
    
    detailsTab.innerHTML = `
        <div class="booking-details">
            <div class="detail-row">
                <span class="detail-label">ID бронирования:</span>
                <div class="detail-value"><code>${booking.id}</code></div>
            </div>
            <div class="detail-row">
                <span class="detail-label">Статус:</span>
                <div class="detail-value">${formatBookingStatus(booking.status)}</div>
            </div>
            <div class="detail-row">
                <span class="detail-label">Гость:</span>
                <div class="detail-value">${booking.firstName} ${booking.lastName}</div>
            </div>
            <div class="detail-row">
                <span class="detail-label">Контакты:</span>
                <div class="detail-value">
                    <div>📧 ${booking.email}</div>
                    <div>📞 ${booking.phone}</div>
                    <div>📍 ${booking.country || 'Не указана'}</div>
                </div>
            </div>
            <div class="detail-row">
                <span class="detail-label">Даты пребывания:</span>
                <div class="detail-value">
                    <div>Заезд: ${checkIn.toLocaleDateString('ru-RU')}</div>
                    <div>Выезд: ${checkOut.toLocaleDateString('ru-RU')}</div>
                    <div>Ночей: ${nights}</div>
                </div>
            </div>
            <div class="detail-row">
                <span class="detail-label">Номер:</span>
                <div class="detail-value">
                    <div>Тип: ${roomTypeText}</div>
                    <div>Количество: ${booking.roomCount}</div>
                </div>
            </div>
            <div class="detail-row">
                <span class="detail-label">Гости:</span>
                <div class="detail-value">
                    <div>Взрослые: ${booking.adults}</div>
                    <div>Дети: ${booking.children || 0}</div>
                    ${booking.childrenAge ? `<div>Возраст детей: ${booking.childrenAge}</div>` : ''}
                </div>
            </div>
            <div class="detail-row">
                <span class="detail-label">Стоимость:</span>
                <div class="detail-value">
                    <strong>${booking.totalPrice?.toLocaleString('ru-RU') || '0'} сом</strong>
                </div>
            </div>
            <div class="detail-row" style="grid-column: 1 / -1;">
                <span class="detail-label">Особые пожелания:</span>
                <div class="detail-value">
                    ${booking.specialRequests || 'Нет особых пожеланий'}
                </div>
            </div>
            <div class="detail-row" style="grid-column: 1 / -1;">
                <span class="detail-label">Дата создания:</span>
                <div class="detail-value">
                    ${createdAt.toLocaleDateString('ru-RU')} ${createdAt.toLocaleTimeString('ru-RU')}
                </div>
            </div>
        </div>
    `;
    
    // Заполняем заметки
    bookingNotes.value = booking.notes || '';
    
    // Обновляем историю
    updateNotesHistory(bookingId);
    updateStatusHistory(bookingId);
    
    // Устанавливаем заголовок
    modalTitle.textContent = `Бронирование: ${booking.firstName} ${booking.lastName}`;
    
    // Показываем модальное окно
    modal.classList.add('show');
    
    // Обработчики для вкладок
    const tabBtns = modal.querySelectorAll('.tab-btn');
    const tabContents = modal.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Убираем активный класс у всех кнопок и контента
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Добавляем активный класс текущей кнопке и контенту
            this.classList.add('active');
            document.getElementById(`${tabId}Tab`).classList.add('active');
        });
    });
    
    // Обработчики для кнопок действий
    const actionBtns = modal.querySelectorAll('.action-btn');
    actionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const action = this.getAttribute('data-action');
            handleBookingAction(bookingId, action);
        });
    });
    
    // Обработчики для сохранения и закрытия
    const closeModalBtn = document.getElementById('closeModal');
    const cancelModalBtn = document.getElementById('cancelModal');
    const saveBookingBtn = document.getElementById('saveBookingBtn');
    
    if (closeModalBtn) {
        closeModalBtn.onclick = function() {
            modal.classList.remove('show');
        };
    }
    
    if (cancelModalBtn) {
        cancelModalBtn.onclick = function() {
            modal.classList.remove('show');
        };
    }
    
    if (saveBookingBtn) {
        saveBookingBtn.onclick = function() {
            saveBookingNotes(bookingId);
        };
    }
    
    // Закрытие по клику вне модального окна
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    });
}

function updateNotesHistory(bookingId) {
    const notesHistory = document.getElementById('notesHistory');
    if (!notesHistory) return;
    
    // В реальном приложении здесь была бы загрузка истории заметок
    notesHistory.innerHTML = `
        <div class="history-item">
            <div class="history-content">
                История заметок будет отображаться здесь
            </div>
            <div class="history-meta">
                <span>Система</span>
                <span>${new Date().toLocaleDateString('ru-RU')}</span>
            </div>
        </div>
    `;
}

function updateStatusHistory(bookingId) {
    const statusHistory = document.getElementById('statusHistory');
    if (!statusHistory) return;
    
    const booking = window.bookingAPI.getBookingById(bookingId);
    if (!booking) return;
    
    statusHistory.innerHTML = `
        <div class="history-item">
            <div class="history-content">
                Бронирование создано
            </div>
            <div class="history-meta">
                <span>Система</span>
                <span>${new Date(booking.createdAt).toLocaleDateString('ru-RU')}</span>
            </div>
        </div>
    `;
}

function handleBookingAction(bookingId, action) {
    const statusMap = {
        'confirm': 'confirmed',
        'pending': 'pending',
        'cancel': 'cancelled',
        'complete': 'completed'
    };
    
    const statusText = {
        'confirm': 'подтверждено',
        'pending': 'возвращено в ожидание',
        'cancel': 'отменено',
        'complete': 'отмечено как завершенное'
    };
    
    const newStatus = statusMap[action];
    
    if (newStatus && window.bookingAPI.updateBookingStatus(bookingId, newStatus)) {
        showAdminNotification(`Бронирование успешно ${statusText[action]}!`, 'success');
        loadBookingsTable();
        updateStatusHistory(bookingId);
    } else {
        showAdminNotification('Ошибка при обновлении статуса', 'error');
    }
}

function saveBookingNotes(bookingId) {
    const bookingNotes = document.getElementById('bookingNotes');
    if (!bookingNotes) return;
    
    const notes = bookingNotes.value;
    
    if (window.bookingAPI.updateBookingStatus(bookingId, null, notes)) {
        showAdminNotification('Заметки успешно сохранены!', 'success');
    } else {
        showAdminNotification('Ошибка при сохранении заметок', 'error');
    }
}

function showAddBookingModal() {
    const modal = document.getElementById('addBookingModal');
    if (!modal) return;
    
    modal.classList.add('show');
    
    // Закрытие модального окна
    const closeModal = document.getElementById('closeAddModal');
    const cancelModal = document.getElementById('cancelAddModal');
    
    if (closeModal) {
        closeModal.onclick = function() {
            modal.classList.remove('show');
        };
    }
    
    if (cancelModal) {
        cancelModal.onclick = function() {
            modal.classList.remove('show');
        };
    }
    
    // Обработчик отправки формы
    const submitBtn = document.getElementById('submitAddBookingBtn');
    const form = document.getElementById('addBookingForm');
    
    if (submitBtn && form) {
        submitBtn.onclick = function() {
            // Здесь должна быть логика добавления бронирования
            // Аналогично handleBookingForm в script.js
            showAdminNotification('Функция добавления бронирования в разработке', 'info');
        };
    }
    
    // Закрытие по клику вне модального окна
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    });
}

function deleteBooking(bookingId) {
    if (confirm('Вы уверены, что хотите удалить это бронирование? Это действие нельзя отменить.')) {
        if (window.bookingAPI.deleteBooking(bookingId)) {
            showAdminNotification('Бронирование успешно удалено!', 'success');
            loadBookingsTable();
        } else {
            showAdminNotification('Ошибка при удалении бронирования', 'error');
        }
    }
}

function exportBookingsToCSV() {
    const bookings = window.bookingAPI.getAllBookings();
    
    if (bookings.length === 0) {
        showAdminNotification('Нет данных для экспорта', 'warning');
        return;
    }
    
    // Заголовки CSV
    const headers = [
        'ID',
        'Имя',
        'Фамилия',
        'Email',
        'Телефон',
        'Страна',
        'Дата заезда',
        'Дата выезда',
        'Тип номера',
        'Количество номеров',
        'Взрослые',
        'Дети',
        'Возраст детей',
        'Особые пожелания',
        'Статус',
        'Общая стоимость',
        'Дата создания'
    ];
    
    // Данные
    const rows = bookings.map(booking => [
        booking.id,
        booking.firstName,
        booking.lastName,
        booking.email,
        booking.phone,
        booking.country || '',
        booking.checkIn,
        booking.checkOut,
        booking.roomType,
        booking.roomCount,
        booking.adults,
        booking.children,
        booking.childrenAge || '',
        booking.specialRequests || '',
        booking.status,
        booking.totalPrice || 0,
        new Date(booking.createdAt).toLocaleString('ru-RU')
    ]);
    
    // Создаем CSV содержимое
    const csvContent = [
        headers.join(','),
        ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n');
    
    // Создаем blob и скачиваем
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    
    link.setAttribute('href', url);
    link.setAttribute('download', `bookings_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    showAdminNotification('Данные успешно экспортированы в CSV', 'success');
}

// ========== УТИЛИТЫ ==========

// Дебаунс для поиска
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Автоматическая инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Определяем текущую страницу и инициализируем соответствующий скрипт
    const path = window.location.pathname;
    
    if (path.includes('login.html')) {
        initLoginPage();
    } else if (path.includes('dashboard.html')) {
        initDashboard();
    } else if (path.includes('bookings.html')) {
        initBookingsPage();
    } else if (path.includes('messages.html')) {
        // initMessagesPage(); // Будущая реализация
    } else if (path.includes('rooms.html')) {
        // initRoomsPage(); // Будущая реализация
    } else if (path.includes('/admin/') || path.includes('admin.html')) {
        // Для других админ-страниц проверяем авторизацию
        initAdminCommon();
    }
});