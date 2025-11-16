document.addEventListener('DOMContentLoaded', function(){
    const form = document.querySelector('#form form');
    if(!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const data = new FormData(form);

        fetch('https://docs.google.com/forms/d/e/1FAIpQLSfdTliXv1FtplR6cPlw5jXQpw8V_T6tBigU2zSluqOT7pW7fQ/formResponse', {
            method: 'POST',
            mode: 'no-cors',
            body: data
        }).then(function(){
            alert('Thank you for your time!');
            window.location.href = "https://froggy1018.github.io/interviews/";
        }).catch(function(error){
            console.error('Error:', error);
            alert('There was an error submitting the form. Please try again.');
        });
    });
});
