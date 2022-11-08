export default function infoHandler(){
    // module to draw info page

    // content is what we will be appending our finished page to
    const content = document.querySelector('.content');

    const centerSpan3Div = document.createElement('div');
    centerSpan3Div.classList.add('center');
    centerSpan3Div.classList.add('span-3');

    const h1CenterText = document.createElement('h1');
    h1CenterText.classList.add('text-center');
    h1CenterText.innerText = 'what is this :p';

    const h2Text = document.createElement('h2');
    h2Text.innerHTML = 'this is a simple lil demo website to show how generating DOM nodes in javascipt is <em>FUN!!!</em> and <em>EASY!!!</em>';

    const h3Text = document.createElement('h3');
    h3Text.innerHTML = 'in all honestly, its kind of tedious. this is a part of the odin project course, and i assume it\'s to show how it <em>used</em> to be done before jsx and react and other fun stuff. but it\'s probably good to know how it works in vanilla JS, just like its good to know vanilla CSS before jumping into a preprocessor!!!';
    centerSpan3Div.appendChild(h1CenterText);
    centerSpan3Div.appendChild(h2Text);
    centerSpan3Div.appendChild(h3Text);

    content.appendChild(centerSpan3Div);

    const centerSpan3DivTC = document.createElement('div');
    centerSpan3DivTC.classList.add('span-3');
    centerSpan3DivTC.classList.add('center');
    centerSpan3DivTC.classList.add('text-center');

    const h5Text = document.createElement('h5');
    h5Text.innerText = 'shh... shes sleeping..';

    const kittyImg = document.createElement('img');
    kittyImg.src = 'sleepy-kitty.jpg';
    kittyImg.alt = 'sleepy ascii kitty';

    centerSpan3DivTC.appendChild(h5Text);
    centerSpan3DivTC.appendChild(kittyImg);

    content.appendChild(centerSpan3DivTC);
}