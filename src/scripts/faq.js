const QUERY = '.js-query';
const ANSWER = '.js-answer';

document.addEventListener("DOMContentLoaded", ()=>{

    $(QUERY).on('click', (event)=>{
        const $item = $(event.currentTarget);
        const $wrap = $item.children().last();
        const $answer = $item.find(ANSWER);
        const targetHeight = $answer.outerHeight(true);

        if ($wrap.outerHeight() === 0) {
            // show answer
            $wrap.css('height', targetHeight);
        } else {
            // hide answer
            $wrap.css('height', 0);
        }
    });
});