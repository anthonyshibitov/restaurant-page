export default function homeHandler() {
    // module to draw home page

    // content is what we will be appending our finished page to
    const content = document.querySelector('.content');

    const imgElement = document.createElement('img');
    imgElement.src = 'cyber-angel.png';
    imgElement.alt = 'A Star logo';

    const centerDiv = document.createElement('div');
    centerDiv.classList.add('center');

    centerDiv.appendChild(imgElement);

    content.appendChild(centerDiv);

    const divSpan2 = document.createElement('div');
    divSpan2.classList.add('span-2');

    const h1Text = document.createElement('h1');
    h1Text.innerText = "WHO ARE YOU PEOPLE??????";

    const pText = document.createElement('h3');
    pText.innerText = "Can you put your hand on my heart? Can you hear my slow breath? Does my faint heartbeat still pump and throb? Can you feel it swell, stutter, and collapse? Can you feel me? Am I still here? Are you still kneeling next to me? How long are you staying? Will you wake me up and say goodbye before you leave? Will you still squeeze my hand? Do you trust me to keep it intact? Do you promise to make me feel beautiful?";

    divSpan2.appendChild(h1Text);
    divSpan2.appendChild(pText);

    content.appendChild(divSpan2);

    const divSpan2Center = document.createElement('div');
    divSpan2Center.classList.add('span-2');
    divSpan2Center.classList.add('center');
    divSpan2Center.classList.add('text-center');

    const h1Text2 = document.createElement('h1');
    h1Text2.innerText = 'UNSPEAKABLE NEED, UNQUENCHABLE DESIRE';

    divSpan2Center.appendChild(h1Text2);

    content.appendChild(divSpan2Center);

    const imgElement2 = document.createElement('img');
    imgElement2.src = 'in-thought.jpg';
    imgElement2.alt = "girl in thought...";

    const divCenter = document.createElement('div');
    divCenter.classList.add('center');

    divCenter.appendChild(imgElement2);

    content.appendChild(divCenter);

}