const INVALID = 'form__input--invalid';


$(document).ready(()=>{
    let formIsSubmitted = false;

    const $form = $('.js-form');
    const $email = $('input[name="email"]');
    const $phone = $('input[name="phone"]');
    const $date = $('input[name="date"]');
    const $time = $('input[name="time"]');
    const $inputs = [$email, $phone, $date, $time];

    const onBlur = ($el) => {
        if (formIsSubmitted) {
            $el.addClass(INVALID)
        }
    }

    const onFill = ($el) => {
        if (formIsSubmitted) {
            $el.removeClass(INVALID);
        }
    }

    $email.inputmask({
        alias: 'email',
        greedy: false,
        onincomplete: () => onBlur($email),
        oncomplete: () => onFill($email),
    });

    $phone.inputmask({
        mask: '8(999)-999-9999',
        greedy: false,
        onincomplete: () => onBlur($phone),
        oncomplete: () => onFill($phone),
    });

    $date.inputmask({
        regex: '(0[1-9]|[12]\\d|3[01])-(0[1-9]|1[0-2])-([12]\\d{3})',
        greedy: false,
        onincomplete: () => onBlur($date),
        oncomplete: () => onFill($date),
    });

    $time.inputmask({
        regex: '^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$',
        greedy: false,
        onincomplete: () => onBlur($time),
        oncomplete: () => onFill($time),
    });


    const isComplete = () => {
        return $inputs.filter(($el)=>{
            return !($el.inputmask("isComplete"));
        })
    }

    const showMessage = () => {
        const $title = $('.js-subscribe-title');

        $title.text('Успешно!');

        setTimeout(()=>{
            $title.text('Подпишись');
        }, 5000)
    }

    $form.on('submit',(event)=>{
        event.preventDefault();
        const invalid = isComplete();

        if (invalid.length === 0) {
            console.log('success');
            formIsSubmitted = false;
            $form[0].reset();
            showMessage();
        } else {
            formIsSubmitted = true;
            invalid.forEach(($el)=>{
                $el.addClass(INVALID);
            })
            invalid[0].focus();
        }
    })
});