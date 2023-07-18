let cards = document.getElementsByClassName("card");
let textCardsClicked = document.querySelector(".text-cards-clicked");

const classCardClicked = "card-clicked";
const cardsClicked = [];

textCardsClicked.innerHTML = "Você não selecionou :(";

for (let card of cards) {
    card.addEventListener("click", function (e) {
        let cardIsClicked = card.classList.contains(classCardClicked);

        let { serie, name } = card.dataset;

        if (!cardIsClicked) {
            card.classList.add(classCardClicked);
            cardsClicked.push({ serie, name });
        } else {
            card.classList.remove(classCardClicked);
            let index = cardsClicked.findIndex(cardClicked => cardClicked.serie == serie);
            cardsClicked.splice(index, 1);
        }

        if (cardsClicked.length == 0) {
            textCardsClicked.innerHTML = "Você não selecionou :(";
            textCardsClicked.classList.remove("text-card-clicked");
            textCardsClicked.classList.add("no-text-card-clicked");
        } else {
            let text = "Você selecionou:";

            for (let cardClicked of cardsClicked) {
                text += `<p>${cardClicked.name}</p>`;
            }

            text += ":)";

            textCardsClicked.innerHTML = text;

            textCardsClicked.classList.remove("no-text-card-clicked");
            textCardsClicked.classList.add("text-card-clicked");
        }
    });
}
