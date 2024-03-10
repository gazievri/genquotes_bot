export const QUOTES = [
    {
        id: 1,
        quote: "Девчонки стоят в сторонке пироженки свои теребят.",
        author: "Сергей",
    },
    {
        id: 2,
        quote: "Cредний показатель фронта — 250 милисекунд.",
        author: "Руслан",
    },
    {
        id: 3,
        quote: "Фронт должен быть максимально тупой.",
        author: "Руслан",
    },
    {
        id: 4,
        quote: "Руслан ты видел Серёжиного гуся?",
        author: "Маша",
    },
    {
        id: 5,
        quote: "А хули я работаю вообще в обед?",
        author: "Сережа",
    },
    {
        id: 6,
        quote: "Надо не просто нажать на нее, надо с чиркашом.",
        author: "Сережа",
    },
    {
        id: 7,
        quote: "Ебать у дантиста бур огромный я покажу фотку если успею сфоткать.",
        author: "Ульяна",
    },
    {
        id: 8,
        quote: "Я засунул его под своего мохнатого опоссума.",
        author: "Сережа",
    },
    {
        id: 9,
        quote: "Приборы говорят что все нормально.",
        author: "Руслан",
    },
]


export const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * QUOTES.length);
    return QUOTES[randomIndex];
} 
