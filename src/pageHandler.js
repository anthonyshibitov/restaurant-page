export default function pageHandler() {
    // Page to eventually be drawn
    let pageDrawResult = undefined;

    const evokeListeners = () => {
        const navOne = document.querySelector('#nav-one');
        navOne.addEventListener('click', () => {
            homeEvent();
        });
        const navTwo = document.querySelector('#nav-two');
        navTwo.addEventListener('click', () => {
            // Code
            console.log('2');
            infoEvent();
        });
        const NavThree = document.querySelector('#nav-three');
        NavThree.addEventListener('click', () => {
            // Code
            console.log('3');
        });
    }

    const clearContent = () => {
        document.querySelector('.content').innerHTML = '';
    }

    const homeEvent = () => {
        clearContent();

        pageDrawResult = document.createElement('div');
        pageDrawResult.classList.add('home-img');

        const egoImg = document.createElement('img');
        egoImg.src = './ego_heart.jpg';
        
        pageDrawResult.appendChild(egoImg);
        document.querySelector('.content').appendChild(pageDrawResult);
    }

    const infoEvent = () => {
        clearContent();

        pageDrawResult = document.createElement('div');
        pageDrawResult.classList.add('info-test');

        const infoMsg = document.createElement('div');
        infoMsg.innerText = 'page two :o';

        pageDrawResult.appendChild(infoMsg);
        document.querySelector('.content').appendChild(pageDrawResult);
    }

    return {
        evokeListeners,
        homeEvent
    }
}

//rebuild

//let page = pageHandler();
//page.homeEvent();

// Import modules are ran asynchronously