export default function pageHandler() {
    // Page to eventually be drawn
    let pageDrawResult = undefined;

    const evokeListeners = () => {
        const navOne = document.querySelector('#nav-one');
        navOne.addEventListener('click', () => {
            // Code
            console.log('1');
        });
        const navTwo = document.querySelector('#nav-two');
        navTwo.addEventListener('click', () => {
            // Code
            console.log('2');
        });
        const NavThree = document.querySelector('#nav-three');
        NavThree.addEventListener('click', () => {
            // Code
            console.log('3');
        });
    }

    return {
        evokeListeners
    }
}

// Import modules are ran asynchronously