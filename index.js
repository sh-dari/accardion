const accordeonButtons = document.querySelectorAll(".accordeon__button");
const continueButton = document.querySelector('.body__button');

let buttonClicked = [];

const isAllAccordeons = () => {
    let intersection = ['1', '2', '3'].filter(x => !buttonClicked.includes(x));
    if (intersection.length == 0) {
        continueButton.disabled = false;
    }
}

const handleAccordeon = (evt) => {
    const {id} = evt.currentTarget;
    const accordeon = evt.target.closest('.accordeon__item');
    accordeon.querySelector(".accordeon__content").classList.toggle("accordeon__content_active");
    evt.target.classList.toggle("accordeon__button_active");
    accordeon.classList.toggle("accordeon__item_active");
    accordeon.querySelector(".accordeon__img").classList.toggle("accordeon__img_active");
    buttonClicked.push(id);
    isAllAccordeons();
};

accordeonButtons.forEach(button => button.addEventListener('click', handleAccordeon));