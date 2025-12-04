// Описание товаров.
// ТУТ МЕНЯЕШЬ: ссылки на фото, названия, цены, описания.
// Я встроил сюда твои слова (Attribute, Invention, Specialist, Mechanism, Stimulate и т.д.),
// чтобы они использовались в тексте.

const productsData = [
    {
        id: 1,
        name: "Quantum Hoodie «Butterfly Effect»",
        price: 4990,
        images: [
            "URL_TOVAR_1_MAIN",
            "URL_TOVAR_1_SIDE",
            "URL_TOVAR_1_BACK"
        ],
        // СЮДА ВСТАВЬ ССЫЛКИ НА ФОТО ТОВАРА 1
        // вместо URL_TOVAR_1_MAIN / SIDE / BACK

        description: "This hoodie is an invention for every technophile and specialist " +
            "who loves sophisticated streetwear. Each detail is an attribute of modern cybernetics: " +
            "a breathable mechanism of fabrics that stimulate comfort, safeguard your body temperature " +
            "like a smart furnace and support convenient movement in both vertical and horizontal planes. " +
            "Wireless design lines create a butterfly effect without chaos — predictable style " +
            "with just enough impact to empower your look and accelerate your confidence. " +
            "The pattern database was built systematically, using computer literacy, " +
            "neuroscience-inspired ergonomics, evidence-based nutrition of materials and " +
            "innovations from software development and cyber security. " +
            "This is not a mediocre piece: every trait was tested like an experiment " +
            "with plausible results, life expectancy of the fabric, peripheral seams, " +
            "domino effect of upgrades and even placebo effect on your mood. " +
            "Perfect for space exploration of the city, with hormones of happiness as a side effect."
    },
    {
        id: 2,
        name: "Cybernetic Jacket «Wireless»",
        price: 7490,
        images: [
            "URL_TOVAR_2_MAIN",
            "URL_TOVAR_2_SIDE",
            "URL_TOVAR_2_BACK"
        ],
        // СЮДА ВСТАВЬ ССЫЛКИ НА ФОТО ТОВАРА 2

        description: "This jacket was designed as a breakthrough discovery in urban cybernetics. " +
            "It works like a convenient wearable safeguard: the fabric reacts like a smart mechanism " +
            "and the cut follows a clear theory of motion. The design team avoided to overstate " +
            "features and instead focused on real impact and effect. " +
            "Broadband reflective details look like surveillance lines but actually " +
            "protect you in the dark and empower your confidence. " +
            "Even a technophobe will appreciate the simple, predictable interface — " +
            "no unnecessary triggers, only clean upgrade of your style. " +
            "The Арех (Apex) stitching line uses vertical and horizontal tension control, " +
            "so the jacket sits like it was tailored by a specialist in neuroscience of comfort."
    },
    {
        id: 3,
        name: "Space Exploration Sneakers",
        price: 8290,
        images: [
            "URL_TOVAR_3_MAIN",
            "URL_TOVAR_3_SIDE",
            "URL_TOVAR_3_TOP"
        ],
        // СЮДА ВСТАВЬ ССЫЛКИ НА ФОТО ТОВАРА 3

        description: "These sneakers are inspired by space exploration and wireless technologies. " +
            "The sole works like a mini cybernetics experiment: a mechanism that distributes pressure " +
            "systematically so the domino effect of steps feels soft and predictable. " +
            "A sophisticated cushioning system is based on a theory of controlled chaos — " +
            "like a butterfly effect but with full safeguard for your joints and life expectancy " +
            "of your knees. The upper mesh uses breathable materials with traits " +
            "similar to an efficient furnace for heat management: stimulate airflow when you run, " +
            "protect when you slow down. Every upgrade in these sneakers has clear evidence " +
            "and is not just marketing overstatement."
    },
    {
        id: 4,
        name: "Apex Tech T-Shirt «Upgrade»",
        price: 2990,
        images: [
            "URL_TOVAR_4_MAIN",
            "URL_TOVAR_4_SIDE",
            "URL_TOVAR_4_DETAIL"
        ],
        // СЮДА ВСТАВЬ ССЫЛКИ НА ФОТО ТОВАРА 4

        description: "This T-shirt is a convenient base layer for any technophile or technophobe: " +
            "simple, predictable and comfortable. The fabric was selected with attention to nutrition " +
            "for your skin — soft touch, breathable structure and smart hormone-friendly comfort. " +
            "Its design attribute is a clean vertical print with cyber security inspired graphics, " +
            "as if your chest was a database protected from any surveillance. " +
            "The style was tested like an experiment with specialists from fashion, " +
            "neuroscience and software development to find a plausible balance between " +
            "impact and minimalism. This is your everyday safeguard against mediocre outfits."
    }
];

// ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ДЛЯ ПОИСКА ТОВАРОВ

function getProducts() {
    return productsData;
}

function getProductById(id) {
    return productsData.find(p => p.id === id);
}
