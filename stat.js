if (window.location.search) {
    const url = new URLSearchParams(window.location.search).get('url');
    if (url) {
        fetch(url)
            .then(response => {
                if (response.ok) {
                    console.log('Online');
                } else {
                    console.log('Offline');
                }
            })
            .catch(error => {
                console.log('Error:', error);
            });
    } else {
        console.log('URL parameter not provided');
    }
} else {
    console.log('URL parameter not provided');
}
