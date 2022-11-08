export default function credzHandler() {
    // module to draw info page

    // content is what we will be appending our finished page to
    const content = document.querySelector('.content');

    const divCenterSpan3 = document.createElement('div');
    divCenterSpan3.classList.add('center');
    divCenterSpan3.classList.add('span-3');

    const ul = document.createElement('ul');

    const h2Text = document.createElement('h2');
    h2Text.classList.add('text-center');
    h2Text.innerText = 'pic credzzzz :p';

    const li1 = document.createElement('li');
    li1.innerText = 'cyber angel - https://www.pinterest.com/pin/875176140068402715/';

    const li2 = document.createElement('li');
    li2.innerText = 'star girl - https://www.pinterest.com/pin/875176140068411399/';

    const li3 = document.createElement('li');
    li3.innerText = 'sleepy ascii cat - https://www.pinterest.com/pin/16536723623489515/';

    ul.appendChild(h2Text);
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);

    divCenterSpan3.appendChild(ul);

    content.appendChild(divCenterSpan3);
}