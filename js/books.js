const booksData = [
    {
        id: 1,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        price: 12.99,
        category: "Fiction",
        rating: 4.5,
        description: "A story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan.",
        image: "./assets/images/image_1.png",
        language: "English",
        isNew: false,
        isBestseller: true
    },
    {
        id: 2,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        price: 14.99,
        category: "Fiction",
        rating: 4.8,
        description: "A gripping tale of racial injustice and childhood innocence in the American South.",
        image: "./assets/images/image_2.png",
        language: "English",
        isNew: false,
        isBestseller: true
    },
    {
        id: 3,
        title: "1984",
        author: "George Orwell",
        price: 11.99,
        category: "Sci-Fi",
        rating: 4.7,
        description: "A dystopian social science fiction novel and cautionary tale about the dangers of totalitarianism.",
        image: "./assets/images/image_3.png",
        language: "English",
        isNew: false,
        isBestseller: true
    },
    {
        id: 4,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        price: 9.99,
        category: "Romance",
        rating: 4.6,
        description: "A romantic novel of manners that depicts the British Regency era.",
        image: "./assets/images/image_4.png",
        language: "English",
        isNew: false,
        isBestseller: false
    },
    {
        id: 5,
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        price: 13.99,
        category: "Fiction",
        rating: 4.2,
        description: "A story about teenage angst and alienation in post-war America.",
        image: "./assets/images/image_5.png",
        language: "English",
        isNew: false,
        isBestseller: false
    },
    {
        id: 6,
        title: "The Da Vinci Code",
        author: "Dan Brown",
        price: 15.99,
        category: "Mystery",
        rating: 4.3,
        description: "A mystery thriller that follows symbologist Robert Langdon and cryptologist Sophie Neveu.",
        image: "./assets/images/image_6.png",
        language: "English",
        isNew: false,
        isBestseller: true
    },
    {
        id: 7,
        title: "Sapiens: A Brief History of Humankind",
        author: "Yuval Noah Harari",
        price: 18.99,
        category: "Non-Fiction",
        rating: 4.7,
        description: "A brief history of humankind, from the Stone Age to the modern age.",
        image: "./assets/images/image_7.png",
        language: "English",
        isNew: false,
        isBestseller: true
    },
    {
        id: 8,
        title: "Dune",
        author: "Frank Herbert",
        price: 16.99,
        category: "Sci-Fi",
        rating: 4.8,
        description: "A science fiction masterpiece set on the desert planet Arrakis.",
        image: "./assets/images/image_8.png",
        language: "English",
        isNew: false,
        isBestseller: true
    },
    {
        id: 9,
        title: "The Silent Patient",
        author: "Alex Michaelides",
        price: 14.99,
        category: "Mystery",
        rating: 4.4,
        description: "A psychological thriller about a woman's act of violence against her husband.",
        image: "./assets/images/image_9.png",
        language: "English",
        isNew: true,
        isBestseller: true
    },
    {
        id: 10,
        title: "Becoming",
        author: "Michelle Obama",
        price: 19.99,
        category: "Non-Fiction",
        rating: 4.9,
        description: "The memoir of former First Lady Michelle Obama.",
        image: "./assets/images/image_10.png",
        language: "English",
        isNew: false,
        isBestseller: true
    },
    {
        id: 11,
        title: "The Notebook",
        author: "Nicholas Sparks",
        price: 11.99,
        category: "Romance",
        rating: 4.5,
        description: "A romantic novel about a young couple who fall in love in the 1940s.",
        image: "./assets/images/image_11.png",
        language: "English",
        isNew: false,
        isBestseller: false
    },
    {
        id: 12,
        title: "Project Hail Mary",
        author: "Andy Weir",
        price: 17.99,
        category: "Sci-Fi",
        rating: 4.9,
        description: "A lone astronaut must save Earth from an extinction-level threat.",
        image: "./assets/images/image_12.png",
        language: "English",
        isNew: true,
        isBestseller: true
    },
    {
        id: 13,
        title: "The Midnight Library",
        author: "Matt Haig",
        price: 16.99,
        category: "Fiction",
        rating: 4.6,
        description: "Between life and death there is a library with infinite possibilities.",
        image: "./assets/images/image_13.png",
        language: "English",
        isNew: true,
        isBestseller: true
    },
    {
        id: 14,
        title: "Educated",
        author: "Tara Westover",
        price: 15.99,
        category: "Non-Fiction",
        rating: 4.8,
        description: "A memoir about a young girl who leaves her survivalist family to pursue education.",
        image: "./assets/images/image_14.png",
        language: "English",
        isNew: false,
        isBestseller: true
    },
    {
        id: 15,
        title: "Gone Girl",
        author: "Gillian Flynn",
        price: 13.99,
        category: "Mystery",
        rating: 4.4,
        description: "A thriller about a marriage gone terribly wrong.",
        image: "./assets/images/image_15.png",
        language: "English",
        isNew: false,
        isBestseller: true
    },
    {
        id: 16,
        title: "The Alchemist",
        author: "Paulo Coelho",
        price: 12.99,
        category: "Fiction",
        rating: 4.7,
        description: "A philosophical book about following your dreams.",
        image: "./assets/images/image_16.png",
        language: "English",
        isNew: false,
        isBestseller: true
    },
    {
        id: 17,
        title: "Atomic Habits",
        author: "James Clear",
        price: 18.99,
        category: "Non-Fiction",
        rating: 4.9,
        description: "An easy and proven way to build good habits and break bad ones.",
        image: "./assets/images/image_17.png",
        language: "English",
        isNew: true,
        isBestseller: true
    },
    {
        id: 18,
        title: "The Seven Husbands of Evelyn Hugo",
        author: "Taylor Jenkins Reid",
        price: 15.99,
        category: "Romance",
        rating: 4.8,
        description: "A reclusive Hollywood movie icon finally tells her story.",
        image: "./assets/images/image_18.png",
        language: "English",
        isNew: true,
        isBestseller: true
    },
    {
        id: 19,
        title: "Thinking, Fast and Slow",
        author: "Daniel Kahneman",
        price: 17.99,
        category: "Non-Fiction",
        rating: 4.6,
        description: "The two systems that drive the way we think.",
        image: "./assets/images/image_19.png",
        language: "English",
        isNew: false,
        isBestseller: false
    },
    {
        id: 20,
        title: "The Hunger Games",
        author: "Suzanne Collins",
        price: 11.99,
        category: "Sci-Fi",
        rating: 4.7,
        description: "In a dystopian future, teenagers are forced to fight to the death on live television.",
        image: "./assets/images/image_20.png",
        language: "English",
        isNew: false,
        isBestseller: true
    },
    {
        id: 21,
        title: "Where the Crawdads Sing",
        author: "Delia Owens",
        price: 16.99,
        category: "Fiction",
        rating: 4.8,
        description: "A murder mystery and coming-of-age story set in the marshes of North Carolina.",
        image: "./assets/images/image_21.png",
        language: "English",
        isNew: false,
        isBestseller: true
    },
    {
        id: 22,
        title: "The Psychology of Money",
        author: "Morgan Housel",
        price: 14.99,
        category: "Non-Fiction",
        rating: 4.8,
        description: "Timeless lessons on wealth, greed, and happiness.",
        image: "./assets/images/image_22.png",
        language: "English",
        isNew: true,
        isBestseller: true
    },
    {
        id: 23,
        title: "Sherlock Holmes: The Complete Novels",
        author: "Arthur Conan Doyle",
        price: 19.99,
        category: "Mystery",
        rating: 4.9,
        description: "The complete collection of Sherlock Holmes mysteries.",
        image: "./assets/images/image_23.png",
        language: "English",
        isNew: false,
        isBestseller: false
    },
    {
        id: 24,
        title: "The Invisible Life of Addie LaRue",
        author: "V.E. Schwab",
        price: 16.99,
        category: "Fiction",
        rating: 4.6,
        description: "A woman makes a Faustian bargain to live forever and is cursed to be forgotten by everyone she meets.",
        image: "./assets/images/image_24.png",
        language: "English",
        isNew: true,
        isBestseller: true
    },
    {
        id: 25,
        title: "أولاد حارتنا",
        titleEn: "Children of the Alley",
        author: "نجيب محفوظ",
        authorEn: "Naguib Mahfouz",
        price: 14.99,
        category: "Arabic",
        rating: 4.8,
        description: "رواية خالدة تدور حول حارة مصرية وصراع الخير والشر عبر أجيال متعاقبة.",
        descriptionEn: "A timeless novel about an Egyptian alley and the struggle between good and evil across generations.",
        image: "./assets/images/image_25.png",
        language: "Arabic",
        isNew: false,
        isBestseller: true
    },
    {
        id: 26,
        title: "اللص والكلاب",
        titleEn: "The Thief and the Dogs",
        author: "نجيب محفوظ",
        authorEn: "Naguib Mahfouz",
        price: 12.99,
        category: "Arabic",
        rating: 4.6,
        description: "رواية ترصد رحلة رجل خرج من السجن يبحث عن الانتقام.",
        descriptionEn: "A novel tracking the journey of a man released from prison seeking revenge.",
        image: "./assets/images/image_26.png",
        language: "Arabic",
        isNew: false,
        isBestseller: true
    },
    {
        id: 27,
        title: "موسم الهجرة إلى الشمال",
        titleEn: "Season of Migration to the North",
        author: "الطيب صالح",
        authorEn: "Tayeb Salih",
        price: 13.99,
        category: "Arabic",
        rating: 4.9,
        description: "من أعظم الروايات العربية، تناقش الصراع بين الشرق والغرب.",
        descriptionEn: "One of the greatest Arabic novels, discussing the clash between East and West.",
        image: "./assets/images/image_27.png",
        language: "Arabic",
        isNew: false,
        isBestseller: true
    },
    {
        id: 28,
        title: "أحلام مستغانمي",
        titleEn: "The Bridges of Constantine",
        author: "أحلام مستغانمي",
        authorEn: "Ahlam Mosteghanemi",
        price: 15.99,
        category: "Arabic",
        rating: 4.7,
        description: "الجزء الأول من ثلاثية تحكي حكايات الحب والوطن في الجزائر.",
        descriptionEn: "First part of a trilogy telling tales of love and homeland in Algeria.",
        image: "./assets/images/image_28.png",
        language: "Arabic",
        isNew: false,
        isBestseller: true
    },
    {
        id: 29,
        title: "الخبز الحافي",
        titleEn: "For Bread Alone",
        author: "محمد شكري",
        authorEn: "Mohamed Choukri",
        price: 11.99,
        category: "Arabic",
        rating: 4.5,
        description: "سيرة ذاتية صادقة عن طفولة بائسة في المغرب.",
        descriptionEn: "An honest autobiography about a miserable childhood in Morocco.",
        image: "./assets/images/image_29.png",
        language: "Arabic",
        isNew: false,
        isBestseller: false
    },
    {
        id: 30,
        title: "أرض البرتقال الحزين",
        titleEn: "The Land of Sad Oranges",
        author: "غسان كنفاني",
        authorEn: "Ghassan Kanafani",
        price: 10.99,
        category: "Arabic",
        rating: 4.8,
        description: "مجموعة قصصية عن النكبة الفلسطينية والشتات.",
        descriptionEn: "Short stories about the Palestinian Nakba and diaspora.",
        image: "./assets/images/image_30.png",
        language: "Arabic",
        isNew: false,
        isBestseller: true
    },
    {
        id: 31,
        title: "الأيام",
        titleEn: "The Days",
        author: "طه حسين",
        authorEn: "Taha Hussein",
        price: 13.99,
        category: "Arabic",
        rating: 4.7,
        description: "سيرة ذاتية لعميد الأدب العربي عن نشأته في الصعيد.",
        descriptionEn: "Autobiography of the Dean of Arabic Literature about his upbringing in Upper Egypt.",
        image: "./assets/images/image_31.png",
        language: "Arabic",
        isNew: false,
        isBestseller: false
    },
    {
        id: 32,
        title: "الحرافيش",
        titleEn: "The Harafish",
        author: "نجيب محفوظ",
        authorEn: "Naguib Mahfouz",
        price: 16.99,
        category: "Arabic",
        rating: 4.6,
        description: "ملحمة روائية عن حارة مصرية وأهلها عبر عدة أجيال.",
        descriptionEn: "An epic novel about an Egyptian alley and its people across generations.",
        image: "./assets/images/image_32.png",
        language: "Arabic",
        isNew: false,
        isBestseller: true
    },
    {
        id: 33,
        title: "عزازيل",
        titleEn: "Azazeel",
        author: "يوسف زيدان",
        authorEn: "Youssef Ziedan",
        price: 14.99,
        category: "Arabic",
        rating: 4.5,
        description: "رواية تاريخية عن صراع الكنيسة في القرن الخامس الميلادي.",
        descriptionEn: "Historical novel about church conflict in the 5th century AD.",
        image: "./assets/images/image_33.png",
        language: "Arabic",
        isNew: true,
        isBestseller: true
    },
    {
        id: 34,
        title: "فيرتيجو",
        titleEn: "Vertigo",
        author: "أحمد مراد",
        authorEn: "Ahmed Mourad",
        price: 12.99,
        category: "Arabic",
        rating: 4.4,
        description: "رواية بوليسية مشوقة عن مصور يكتشف جريمة قتل بالصدفة.",
        descriptionEn: "An exciting crime novel about a photographer who accidentally discovers a murder.",
        image: "./assets/images/image_34.png",
        language: "Arabic",
        isNew: false,
        isBestseller: true
    },
    {
        id: 35,
        title: "الفيل الأزرق",
        titleEn: "The Blue Elephant",
        author: "أحمد مراد",
        authorEn: "Ahmed Mourad",
        price: 13.99,
        category: "Arabic",
        rating: 4.6,
        description: "طبيب نفسي يعود إلى العمل بعد خمس سنوات في قسم الحبس.",
        descriptionEn: "A psychiatrist returns to work after five years in solitary confinement.",
        image: "./assets/images/image_35.png",
        language: "Arabic",
        isNew: false,
        isBestseller: true
    },
    {
        id: 36,
        title: "سر الغرفة 207",
        titleEn: "Secret of Room 207",
        author: "أحمد خالد توفيق",
        authorEn: "Ahmed Khaled Tawfik",
        price: 9.99,
        category: "Arabic",
        rating: 4.3,
        description: "من سلسلة ما وراء الطبيعة، رعب وإثارة في مستشفى مهجور.",
        descriptionEn: "From the Paranormal series, horror and thriller in an abandoned hospital.",
        image: "./assets/images/image_36.png",
        language: "Arabic",
        isNew: false,
        isBestseller: true
    },
    {
        id: 37,
        title: "النبي",
        titleEn: "The Prophet",
        author: "جبران خليل جبران",
        authorEn: "Kahlil Gibran",
        price: 11.99,
        category: "Arabic",
        rating: 4.9,
        description: "من أشهر كتب الأدب العالمي، محادثات في الحب والحياة والموت.",
        descriptionEn: "One of the most famous books in world literature, conversations on love, life, and death.",
        image: "./assets/images/image_37.png",
        language: "Arabic",
        isNew: false,
        isBestseller: true
    },
    {
        id: 38,
        title: "رحلتي من الشك إلى الإيمان",
        titleEn: "My Journey from Doubt to Faith",
        author: "مصطفى محمود",
        authorEn: "Mostafa Mahmoud",
        price: 10.99,
        category: "Arabic",
        rating: 4.7,
        description: "رحلة فكرية وروحية في البحث عن الحقيقة.",
        descriptionEn: "An intellectual and spiritual journey in search of truth.",
        image: "./assets/images/image_38.png",
        language: "Arabic",
        isNew: false,
        isBestseller: false
    },
    {
        id: 39,
        title: "الجنائزي",
        titleEn: "The Funerals",
        author: "إبراهيم عيسى",
        authorEn: "Ibrahim Eissa",
        price: 12.99,
        category: "Arabic",
        rating: 4.4,
        description: "رواية تاريخية عن مصر في أواخر القرن التاسع عشر.",
        descriptionEn: "Historical novel about Egypt in the late 19th century.",
        image: "./assets/images/image_39.png",
        language: "Arabic",
        isNew: true,
        isBestseller: true
    },
    {
        id: 40,
        title: "1919",
        titleEn: "1919",
        author: "أحمد مراد",
        authorEn: "Ahmed Mourad",
        price: 14.99,
        category: "Arabic",
        rating: 4.5,
        description: "رواية تاريخية عن ثورة 1919 في مصر.",
        descriptionEn: "Historical novel about the 1919 revolution in Egypt.",
        image: "./assets/images/image_40.png",
        language: "Arabic",
        isNew: true,
        isBestseller: true
    },
    {
        id: 41,
        title: "ساقية البامبو",
        titleEn: "The Bamboo Stalk",
        author: "سعود السنعوسي",
        authorEn: "Saud Alsanousi",
        price: 13.99,
        category: "Arabic",
        rating: 4.6,
        description: "رواية فائزة بجائزة البوكر عن الهوية والانتماء.",
        descriptionEn: "IPAF-winning novel about identity and belonging.",
        image: "./assets/images/image_41.png",
        language: "Arabic",
        isNew: false,
        isBestseller: true
    },
    {
        id: 42,
        title: "أرض السافلين",
        titleEn: "The Land of the Wretched",
        author: "غازي القصيبي",
        authorEn: "Ghazi Al-Gosaibi",
        price: 11.99,
        category: "Arabic",
        rating: 4.3,
        description: "رواية عن العمالة الوافدة في الخليج العربي.",
        descriptionEn: "A novel about migrant workers in the Arabian Gulf.",
        image: "./assets/images/image_42.png",
        language: "Arabic",
        isNew: false,
        isBestseller: false
    },
    {
        id: 43,
        title: "ذاكرة الجسد",
        titleEn: "Memory in the Flesh",
        author: "أحلام مستغانمي",
        authorEn: "Ahlam Mosteghanemi",
        price: 15.99,
        category: "Arabic",
        rating: 4.7,
        description: "الجزء الثاني من الثلاثية، حب وثورة وفن.",
        descriptionEn: "Second part of the trilogy: love, revolution, and art.",
        image: "./assets/images/image_43.png",
        language: "Arabic",
        isNew: false,
        isBestseller: true
    },
    {
        id: 44,
        title: "الأسود يليق بك",
        titleEn: "Black Suits You",
        author: "أحلام مستغانمي",
        authorEn: "Ahlam Mosteghanemi",
        price: 14.99,
        category: "Arabic",
        rating: 4.6,
        description: "الجزء الثالث من الثلاثية، ختام ملحمي للسلسلة.",
        descriptionEn: "Third part of the trilogy, an epic conclusion to the series.",
        image: "./assets/images/image_44.png",
        language: "Arabic",
        isNew: false,
        isBestseller: true
    },
    {
        id: 45,
        title: "يوتوبيا",
        titleEn: "Utopia",
        author: "أحمد خالد توفيق",
        authorEn: "Ahmed Khaled Tawfik",
        price: 10.99,
        category: "Arabic",
        rating: 4.4,
        description: "رواية ديستوبية عن مصر في المستقبل.",
        descriptionEn: "A dystopian novel about Egypt in the future.",
        image: "./assets/images/image_45.png",
        language: "Arabic",
        isNew: false,
        isBestseller: true
    },
    {
        id: 46,
        title: "الإنسان المستحيل",
        titleEn: "The Impossible Man",
        author: "مصطفى محمود",
        authorEn: "Mostafa Mahmoud",
        price: 9.99,
        category: "Arabic",
        rating: 4.5,
        description: "دراسة فلسفية في طبيعة الإنسان وقدراته.",
        descriptionEn: "A philosophical study on human nature and capabilities.",
        image: "./assets/images/image_46.png",
        language: "Arabic",
        isNew: false,
        isBestseller: false
    },
    {
        id: 47,
        title: "الحرية أو الدم",
        titleEn: "Freedom or Blood",
        author: "علاء الأسواني",
        authorEn: "Alaa Al Aswany",
        price: 13.99,
        category: "Arabic",
        rating: 4.2,
        description: "رواية عن الثورة المصرية وأحلام التغيير.",
        descriptionEn: "A novel about the Egyptian revolution and dreams of change.",
        image: "./assets/images/image_47.png",
        language: "Arabic",
        isNew: true,
        isBestseller: true
    },
    {
        id: 48,
        title: "عمارة يعقوبيان",
        titleEn: "The Yacoubian Building",
        author: "علاء الأسواني",
        authorEn: "Alaa Al Aswany",
        price: 14.99,
        category: "Arabic",
        rating: 4.6,
        description: "رواية شهيرة عن المجتمع المصري من خلال عمارة سكنية.",
        descriptionEn: "A famous novel about Egyptian society through a residential building.",
        image: "./assets/images/image_48.png",
        language: "Arabic",
        isNew: false,
        isBestseller: true
    }
];

document.addEventListener('DOMContentLoaded', function() {
    const path = window.location.pathname;
    
    if (path.includes('index.html') || path === '/' || path.endsWith('/bookstore/')) {
        loadFeaturedBooks();
        loadBestsellers();
        loadArabicBooks();
        loadNewArrivals();
    } else if (path.includes('books.html')) {
        loadAllBooks();
        checkCategoryFilter();
    } else if (path.includes('book-details.html')) {
        loadBookDetails();
    }
});

function loadFeaturedBooks() {
    const container = document.getElementById('featured-books');
    if (!container) return;
    
    const featuredBooks = booksData.slice(0, 8);
    
    container.innerHTML = featuredBooks.map(book => createBookCard(book)).join('');
}

function loadBestsellers() {
    const container = document.getElementById('bestsellers-container');
    if (!container) return;
    
    const bestsellers = booksData.filter(book => book.isBestseller).slice(0, 10);
    
    container.innerHTML = bestsellers.map(book => createHorizontalBookCard(book)).join('');
}

function loadArabicBooks() {
    const container = document.getElementById('arabic-books-grid');
    if (!container) return;
    
    const arabicBooks = booksData.filter(book => book.language === 'Arabic').slice(0, 8);
    
    container.innerHTML = arabicBooks.map(book => createBookCard(book, true)).join(''); // Pass true here
}

function loadNewArrivals() {
    const container = document.getElementById('new-arrivals');
    if (!container) return;
    
    const newArrivals = booksData.filter(book => book.isNew).slice(0, 4);
    
    container.innerHTML = newArrivals.map(book => createBookCard(book)).join('');
}

function createBookCard(book, forceArabic = false) {
    const isInWishlist = isBookInWishlist(book.id);
    
    const showArabic = book.language === 'Arabic' && (forceArabic || book.category === 'Arabic');
    
    const displayTitle = showArabic ? book.title : (book.titleEn || book.title);
    const displayAuthor = showArabic ? book.author : (book.authorEn || book.author);
    const displayDescription = showArabic ? book.description : (book.descriptionEn || book.description);
    
    const arabicClass = book.language === 'Arabic' ? 'font-arabic' : '';
    const rtlAttr = book.language === 'Arabic' ? 'dir="rtl"' : '';
    
    return `
        <div class="book-card bg-white dark:bg-dark rounded-xl shadow-lg overflow-hidden group h-full flex flex-col" ${rtlAttr}>
            <div class="relative aspect-[2/3] overflow-hidden cursor-pointer" onclick="viewBookDetails(${book.id})">
                <img src="${book.image}" alt="${displayTitle}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                ${book.isNew ? '<span class="absolute top-3 left-3 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full">NEW</span>' : ''}
                ${book.isBestseller ? '<span class="absolute top-3 right-3 bg-gold text-white text-xs font-bold px-3 py-1 rounded-full">BESTSELLER</span>' : ''}
                <button onclick="event.stopPropagation(); toggleWishlist(${book.id})" 
                    class="absolute bottom-3 right-3 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:scale-110 transition-transform ${isInWishlist ? 'text-red-500' : 'text-gray-400'}">
                    <svg class="w-5 h-5 ${isInWishlist ? 'fill-current' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                </button>
            </div>
            <div class="p-5 flex-1 flex flex-col">
                <div class="flex items-center justify-between mb-2">
                    <span class="text-xs font-semibold text-primary uppercase tracking-wide">${book.category}</span>
                    ${book.language === 'Arabic' ? '<span class="text-xs bg-emerald/10 text-emerald px-2 py-1 rounded font-arabic">عربي</span>' : ''}
                </div>
                <h3 class="font-bold text-lg mb-1 line-clamp-2 ${arabicClass}" title="${displayTitle}">${displayTitle}</h3>
                <p class="text-gray-600 dark:text-gray-400 text-sm mb-2 ${arabicClass}">${displayAuthor}</p>
                <div class="flex items-center mb-3">
                    ${getStarRating(book.rating)}
                    <span class="ml-2 text-sm text-gray-500">(${book.rating})</span>
                </div>
                <p class="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2 flex-1 ${arabicClass}">${displayDescription}</p>
                <div class="flex items-center justify-between mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
                    <span class="text-xl font-bold text-primary">${formatCurrency(book.price)}</span>
                    <button onclick="addToCart(${book.id})" 
                        class="px-4 py-2 bg-primary text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center space-x-2">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span>Add</span>
                    </button>
                </div>
            </div>
        </div>
    `;
}
function createHorizontalBookCard(book) {
    const isInWishlist = isBookInWishlist(book.id);
    const displayTitle = book.titleEn || book.title;
    const displayAuthor = book.authorEn || book.author;
    
    return `
        <div class="flex-none w-72 snap-start">
            <div class="bg-white dark:bg-dark rounded-xl shadow-lg overflow-hidden group h-full">
                <div class="relative aspect-[3/4] overflow-hidden cursor-pointer" onclick="viewBookDetails(${book.id})">
                    <img src="${book.image}" alt="${displayTitle}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                    ${book.isNew ? '<span class="absolute top-3 left-3 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full">NEW</span>' : ''}
                    <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span class="text-white font-semibold px-4 py-2 border-2 border-white rounded-full">View Details</span>
                    </div>
                </div>
                <div class="p-4">
                    <h3 class="font-bold text-lg mb-1 line-clamp-1" title="${displayTitle}">${displayTitle}</h3>
                    <p class="text-gray-600 dark:text-gray-400 text-sm mb-2">${displayAuthor}</p>
                    <div class="flex items-center justify-between">
                        <span class="text-lg font-bold text-primary">${formatCurrency(book.price)}</span>
                        <button onclick="toggleWishlist(${book.id})" class="${isInWishlist ? 'text-red-500' : 'text-gray-400'} hover:scale-110 transition-transform">
                            <svg class="w-6 h-6 ${isInWishlist ? 'fill-current' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function scrollBestsellers(direction) {
    const container = document.getElementById('bestsellers-container');
    if (container) {
        const scrollAmount = 300;
        container.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth'
        });
    }
}

function loadAllBooks() {
    const container = document.getElementById('books-grid');
    if (!container) return;
    
    displayBooks(booksData);
}

function displayBooks(books) {
    const container = document.getElementById('books-grid');
    const noResults = document.getElementById('no-results');
    
    if (!container) {
        console.error('Books grid container not found!');
        return;
    }
    
    if (books.length === 0) {
        container.innerHTML = '';
        if (noResults) noResults.classList.remove('hidden');
        return;
    }
    
    if (noResults) noResults.classList.add('hidden');
    container.innerHTML = books.map(book => createBookCard(book)).join('');
}

function viewBookDetails(bookId) {
    sessionStorage.setItem('selectedBookId', bookId);
    window.location.href = 'book-details.html';
}

function loadBookDetails() {
    const bookId = parseInt(sessionStorage.getItem('selectedBookId'));
    const container = document.getElementById('book-details-container');
    
    if (!container || !bookId) {
        window.location.href = 'books.html';
        return;
    }
    
    const book = booksData.find(b => b.id === bookId);
    if (!book) {
        window.location.href = 'books.html';
        return;
    }
    
    const isInWishlist = isBookInWishlist(book.id);
    const isArabic = book.language === 'Arabic';
    const displayTitle = isArabic ? book.title : (book.titleEn || book.title);
    const displayAuthor = isArabic ? book.author : (book.authorEn || book.author);
    const displayDescription = isArabic ? book.description : (book.descriptionEn || book.description);
    const arabicClass = isArabic ? 'font-arabic' : '';
    const rtlAttr = isArabic ? 'dir="rtl"' : '';
    
    container.innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12" ${rtlAttr}>
            <div class="relative">
                <div class="aspect-[2/3] rounded-2xl overflow-hidden shadow-2xl">
                    <img src="${book.image}" alt="${displayTitle}" class="w-full h-full object-cover">
                </div>
                ${book.isNew ? '<span class="absolute top-4 left-4 bg-secondary text-white text-sm font-bold px-4 py-2 rounded-full">NEW ARRIVAL</span>' : ''}
                ${book.isBestseller ? '<span class="absolute top-4 right-4 bg-gold text-white text-sm font-bold px-4 py-2 rounded-full">BESTSELLER</span>' : ''}
            </div>
            <div class="flex flex-col justify-center">
                <div class="flex items-center space-x-2 mb-4">
                    <span class="text-sm font-semibold text-primary uppercase tracking-wide">${book.category}</span>
                    ${isArabic ? '<span class="bg-emerald/10 text-emerald px-3 py-1 rounded-full text-sm font-arabic">العربية</span>' : ''}
                    <span class="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full text-sm">${book.language}</span>
                </div>
                <h1 class="text-5xl font-bold mb-2 ${arabicClass}">${displayTitle}</h1>
                <p class="text-2xl text-gray-600 dark:text-gray-400 mb-6 ${arabicClass}">by ${displayAuthor}</p>
                <div class="flex items-center mb-6">
                    ${getStarRating(book.rating)}
                    <span class="ml-3 text-gray-500 text-lg">(${book.rating} out of 5)</span>
                </div>
                <p class="text-gray-700 dark:text-gray-300 text-xl mb-8 leading-relaxed ${arabicClass}">${displayDescription}</p>
                <div class="text-4xl font-bold text-primary mb-8">${formatCurrency(book.price)}</div>
                <div class="flex flex-col sm:flex-row gap-4">
                    <button onclick="addToCart(${book.id})" 
                        class="flex-1 px-8 py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-purple-700 transition-all flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span>Add to Cart</span>
                    </button>
                    <button onclick="toggleWishlist(${book.id})" 
                        class="px-8 py-4 border-2 ${isInWishlist ? 'border-red-500 text-red-500' : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300'} rounded-xl font-bold text-lg hover:border-primary hover:text-primary transition-all flex items-center justify-center space-x-3">
                        <svg class="w-6 h-6 ${isInWishlist ? 'fill-current' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        <span>${isInWishlist ? 'In Wishlist' : 'Add to Wishlist'}</span>
                    </button>
                </div>
            </div>
        </div>
    `;
}

function searchBooks(query) {
    const filtered = booksData.filter(book => {
        const searchIn = `${book.title} ${book.titleEn || ''} ${book.author} ${book.authorEn || ''} ${book.category}`.toLowerCase();
        return searchIn.includes(query.toLowerCase());
    });
    displayBooks(filtered);
}

function filterBooks() {
    const category = document.getElementById('category-filter').value;
    const searchQuery = document.getElementById('search-input').value.toLowerCase();
    
    let filtered = booksData;
    
    if (category !== 'all') {
        filtered = filtered.filter(book => book.category === category || (category === 'Arabic' && book.language === 'Arabic'));
    }
    
    if (searchQuery) {
        const searchIn = book => {
            const text = `${book.title} ${book.titleEn || ''} ${book.author} ${book.authorEn || ''}`.toLowerCase();
            return text.includes(searchQuery);
        };
        filtered = filtered.filter(searchIn);
    }
    
    displayBooks(filtered);
}

function sortBooks() {
    const sortValue = document.getElementById('sort-filter').value;
    const category = document.getElementById('category-filter').value;
    const searchQuery = document.getElementById('search-input').value.toLowerCase();
    
    let filtered = [...booksData];
    
    if (category !== 'all') {
        filtered = filtered.filter(book => book.category === category || (category === 'Arabic' && book.language === 'Arabic'));
    }
    
    if (searchQuery) {
        const searchIn = book => {
            const text = `${book.title} ${book.titleEn || ''} ${book.author} ${book.authorEn || ''}`.toLowerCase();
            return text.includes(searchQuery);
        };
        filtered = filtered.filter(searchIn);
    }
    
    switch(sortValue) {
        case 'price-low':
            filtered.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filtered.sort((a, b) => b.price - a.price);
            break;
        case 'rating':
            filtered.sort((a, b) => b.rating - a.rating);
            break;
        case 'newest':
            filtered.sort((a, b) => (b.isNew === a.isNew) ? 0 : b.isNew ? 1 : -1);
            break;
    }
    
    displayBooks(filtered);
}

function checkCategoryFilter() {
    const selectedCategory = sessionStorage.getItem('selectedCategory');
    if (selectedCategory) {
        const filterSelect = document.getElementById('category-filter');
        if (filterSelect) {
            filterSelect.value = selectedCategory;
            filterBooks();
        }
        sessionStorage.removeItem('selectedCategory');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        const booksGrid = document.getElementById('books-grid');
        if (booksGrid && window.location.pathname.includes('books.html')) {
            if (booksGrid.children.length === 0) {
                console.log('Force loading books...');
                loadAllBooks();
            }
        }
        
        const arabicGrid = document.getElementById('arabic-books-grid');
        if (arabicGrid && window.location.pathname.includes('index.html')) {
            if (arabicGrid.children.length === 0) {
                console.log('Force loading Arabic books...');
                loadArabicBooks();
            }
        }
    }, 100);
});