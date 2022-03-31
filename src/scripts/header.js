const HEADER_ACTIVE = 'header--active';
const TAB_OPEN = 'tab--open';
const BURGER_ACTIVE = 'burger--active';
const TABS_WRAP_OPEN = 'tabs-wrap--open';





document.addEventListener("DOMContentLoaded", ()=>{
    // Tabs
    const header = document.querySelector('.js-header');
    const tabs = document.querySelectorAll('.js-tab');
    const fade = document.querySelector('.js-fade');
    let previous;

    const setHeightToWrap = (el, height) =>{
        el.querySelector('.advantages__wrap').style.height = height
    }
    const openTab = (el) =>{
        const height = el.querySelector('.advantages__content').offsetHeight;

        el.classList.add(TAB_OPEN);
        setHeightToWrap(el, `${height}px`);
    }
    const closeTab = () => {
        const el = document.querySelector(`.${TAB_OPEN}`);
        if (!el) return;

        el.classList.remove(TAB_OPEN);
        setHeightToWrap(el, '0px');
    }

    tabs.forEach((item)=>{
       item.addEventListener('click',(event)=> {
           closeTab();
           if (previous === item) {
               header.classList.remove(HEADER_ACTIVE);
               previous = null;
               return;
           }

           header.classList.add(HEADER_ACTIVE);

           openTab(event.currentTarget.parentNode);
           previous = item;
       })
    })

    fade.addEventListener('click',()=>{
        header.classList.remove(HEADER_ACTIVE);
        closeTab();
        previous = null;
    })


    // Mobile menu
    const burger = document.querySelector('.js-burger');
    const tabWrap = document.querySelector('.js-tabs-wrap')

    burger.addEventListener('click', ()=>{
        burger.classList.toggle(BURGER_ACTIVE);
        header.classList.toggle(HEADER_ACTIVE);
        tabWrap.classList.toggle(TABS_WRAP_OPEN);
    });

    fade.addEventListener('click',()=>{
        burger.classList.remove(BURGER_ACTIVE);
        header.classList.remove(HEADER_ACTIVE);
        tabWrap.classList.remove(TABS_WRAP_OPEN);
    });
});