const accordeonButtons = document.querySelectorAll(".accordeon__button");
const accordeonItems = document.querySelectorAll(".accordeon__item");
const continueButton = document.querySelector('.body__button');

const countItems = accordeonItems.length;
let countItemsActive = 0;

const isAllAccordeons = () => {
    countItemsActive = document.querySelectorAll(".done").length;
    if (countItemsActive === countItems) {
        continueButton.disabled = false;
    }
}

const handleAccordeon = (evt) => {
    const accordeon = evt.target.closest('.accordeon__item');
    accordeon.querySelector(".accordeon__content").classList.toggle("accordeon__content_active");
    evt.target.classList.toggle("accordeon__button_active");
    accordeon.classList.toggle("accordeon__item_active");
    accordeon.querySelector(".accordeon__img").classList.toggle("accordeon__img_active");
    accordeon.classList.add("done");
    isAllAccordeons();
};

accordeonButtons.forEach(button => button.addEventListener('click', handleAccordeon));