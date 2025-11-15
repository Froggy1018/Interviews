document.addEventListener('DOMContentLoaded', function(){
    const formContainer = document.getElementById('form');
    if(!formContainer) return;
    
    const form = formContainer.querySelector('form');
    if(!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const data = new FormData();

        const nameEl= document.getElementById('name');
        const contactEl = document.getElementById('contact');
        const whyEl = document.getElementById('why');
        const struggleEl = document.getElementById('struggles');        
        const overcomeEl = document.getElementById('overcome');

        data.append('entry1960824641', nameEl? nameEl.value : '');
        data.append('entry326120523', contactEl? contactEl.value : '');
        data.append('entry1847306347', whyEl? whyEl.value : '');
        data.append('entry1572120235', struggleEl? struggleEl.value : '');
        data.append('entry595161132', overcomeEl? overcomeEl.value : '');

        fetch('https://docs.google.com/forms/d/e/1FAIpQLSfdTliXv1FtplR6cPlw5jXQpw8V_T6tBigU2zSluqOT7pW7fQ/formResponse', {
            method: 'POST',
            mode: 'no-cors',
            body: data
        }).then(function(){
            alert('Thank you for your time!');
            window.location.href="https://froggy1018.github.io/interviews/"
            form.reset();
        }).catch(function(){
            alert('There was an error...');
        });
    });
});