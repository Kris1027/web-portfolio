export interface ServiceProps {
    image: string;
    title: string;
    items: string[];
}

const servicesData = [
    {
        image: '/services-1.svg',
        title: 'Tworzenie stron internetowych',
        items: [
            'Strony wizytówki',
            'Blogi',
            'Portfolia osobiste',
            'Landing pages',
            'Portale informacyjne',
            'Sklepy internetowe',
        ],
    },
    {
        image: '/services-2.svg',
        title: 'Mobile-First Web Design',
        items: [
            'Responsywność',
            'UX/UI na urządzeniach mobilnych',
            'Przekształcanie istniejących stron, które nie spełniają wymagań urządzeń mobilnych',
        ],
    },
    {
        image: '/services-3.svg',
        title: 'Hosting',
        items: [
            'Pomoc w wyborze odpowiedniego hostingu',
            'Konfiguracja i wdrożenia',
            'Zarządzanie domenami',
            'Monitoring i utrzymanie',
        ],
    },
    {
        image: '/services-4.svg',
        title: 'SEO (Search Engine Optimization)',
        items: [
            'Analiza i dobór odpowiednich słów kluczowych (keyword research)',
            'Poprawa struktury strony dla lepszej indeksacji przez wyszukiwarki',
            'Optymalizacja meta tagów (title, description) i tagów alt dla obrazów',
        ],
    },
    {
        image: '/services-5.svg',
        title: 'Utrzymanie strony',
        items: [
            'Zapewnienie zgodności z najnowszymi przeglądarkami i urządzeniami',
            'Możliwość szybkiego przywracania strony w razie awarii - kopie zapasowe',
            'Rozwiązywanie problemów technicznych zgłaszanych przez klienta',
        ],
    },
];

export default servicesData;
