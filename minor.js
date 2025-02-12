// я создам подобие машинного обучения модели для определения им вредных и полезных продуктов
// (то есть будет робот и через карусель будут показываться те или иные продукты, пользователям сайта будет предоставлен выбор и на его основе моя модель будет "типо учиться")
// это будет в разделе tech (актуальность: ну это в разделе технологий и типо вот инновация у нас свои ИИ убейте меня)
// описание этого как должно работать типо вот еда например фрукты будут преобразованы в значения и собираться в базе данных, то есть тут используем label encoder, например яблоко=1, апельсин=2 и так далее
// тут короче описание под моделью вот мы тестируем анау мнау сиыр бузау не хотите попробовать, тут актуальность в том, что из-за данной игры, пользователи будут больше времени проводить на сайте и это увеличит конверсию(конверсия в интернет-маркетинге), а так же мы сможем впарить больше рекламы и заработать больше денег на ней (реклама-за каждуб минуту на сайте нам будут капать деньги)
// при выборе продукта, пользователю будет показано, что он выбрал и будет предложено продолжить или нет
// в какой-то момент после определения около 5(мб значение поменяю) продуктов как полезных, при выборе вредного, всплывет диалоговое окно у робота с вопросами уверен ли пользователь, что он выбрал полезный продукт
// он не будет выпендриваться даже если после диалогового окна пользователь нажмет "полезный" на какой нибудь фастфуд
// это сделает имитацию того, что якобы модель учиться (хотя я думал мб реально ии-шку написать)
// SCREW IT, я решил сделать чат-бота, карусель с аи моделью не удалось реализовать
$(document).ready(function() {
    const chatBox = $("#chat-box");
    const chatInput = $("#chat-input");
    const sendButton = $("#send-btn");
    let foodIndex = 0;
    let userChoices = [];
    const foodList = [
        { name: "Wrap", healthy: true },
        { name: "Burger", healthy: false },
        { name: "Salad", healthy: true },
        { name: "Pizza", healthy: false },
        { name: "French fries", healthy: false },
        { name: "Beshbarmak", healthy: true },
        { name: "Boiled eggs", healthy: true },
        { name: "Ratatoille", healthy: true },
        { name: "Plov", healthy: true },
        { name: "Sushi", healthy: true },
    ];
    function sendMessage(message, fromUser = true) {
        const msgDiv = $("<div>").addClass("p-2 rounded mb-2").css("max-width", "80%");
        if (fromUser) {
            msgDiv.addClass("bg-light text-dark align-self-end");
        } else {
            msgDiv.addClass("bg-info text-dark");
        }
        msgDiv.text(message);
        chatBox.append(msgDiv);
        chatBox.scrollTop(chatBox[0].scrollHeight);
    }
    function handleUserChoice(choice) {
        userChoices.push({ food: foodList[foodIndex].name, choice });
        localStorage.setItem("userChoices", JSON.stringify(userChoices));
        if (userChoices.filter(c => c.choice.toLowerCase() === "healthy").length >= 5) {
            sendMessage(`You sure that, ${foodList[foodIndex].name} healthy? 🤔`, false);
            return;
        }
        nextFood();
    }
    function nextFood() {
        foodIndex = (foodIndex + 1) % foodList.length;
        sendMessage(`Next meal: ${foodList[foodIndex].name}`, false);
    }
    sendButton.on("click", function() {
        const userText = chatInput.val().trim();
        if (userText) {
            sendMessage(userText, true);
            handleUserChoice(userText); 
            chatInput.val("");
        }
    });
    sendMessage(`Hi! I'm a brand new AI Model developed by one individual that wants to get 90 points for his assignment, let's start with: ${foodList[foodIndex].name}`, false);
});
