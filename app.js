document.addEventListener('DOMContentLoaded', function(){
    const formContainer = document.getElementById('form');
    if(!formContainer) return;
    
    const form = formContainer.querySelector('form');
    if(!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Use the actual form element to create FormData
        const data = new FormData(form);

        // Alternative: If you need to manually append with specific entry IDs:
        // const data = new FormData();
        // data.append('entry.1960824641', document.getElementById('name')?.value || '');
        // data.append('entry.326120523', document.getElementById('contact')?.value || '');
        // data.append('entry.1847306347', document.getElementById('why')?.value || '');
        // data.append('entry.1572120235', document.getElementById('struggles')?.value || '');
        // data.append('entry.595161132', document.getElementById('overcome')?.value || '');

        fetch('https://docs.google.com/forms/d/e/1FAIpQLSfdTliXv1FtplR6cPlw5jXQpw8V_T6tBigU2zSluqOT7pW7fQ/formResponse', {
            method: 'POST',
            mode: 'no-cors',
            body: data
        }).then(function(){
            // Note: With no-cors, this always appears successful
            // even if the form submission failed
            alert('Thank you for your time!');
            window.location.href = "https://froggy1018.github.io/interviews/";
        }).catch(function(error){
            console.error('Error:', error);
            alert('There was an error submitting the form. Please try again.');
        });
    });
});
