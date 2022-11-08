//import { container } from "webpack";
import homeHandler from './homeHandler.js';
import infoHandler from './infoHandler.js';
import credzHandler from './credzHandler.js';

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
            infoEvent();
        });
        const NavThree = document.querySelector('#nav-three');
        NavThree.addEventListener('click', () => {
            credzEvent();
        });
    }

    const clearContent = () => {
        document.querySelector('.content').innerHTML = '';
    }

    const homeEvent = () => {
        clearContent();
        homeHandler();
    }

    const infoEvent = () => {
        clearContent();
        infoHandler();
    }

    const credzEvent = () => {
        clearContent();
        credzHandler();
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