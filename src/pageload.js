export default function pageload(){
    /*const element = document.createElement('div');

    element.innerHTML = '<h1>test</h1>';

    document.body.appendChild(element);*/

    const contentElement = document.querySelector('.content');

    const navOne = document.querySelector('#nav-one');
    navOne.addEventListener('click', () => {
        contentElement.innerHTML = 'item one';
    });

    const navTwo = document.querySelector('#nav-two');
    navTwo.addEventListener('click', () => {
        contentElement.innerHTML = 'item two';
    });

    const navThree = document.querySelector('#nav-three');
    navThree.addEventListener('click', () => {
        contentElement.innerHTML = 'item three';
    });
}