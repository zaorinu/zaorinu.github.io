const shareData = {
    title: 'Luis Antonio',
    text: 'Check out this personal space:',
    url: 'zaorinu.github.io'
};

document.body.addEventListener('click', async () => {
    if (navigator.share) {
    try {
        await navigator.share(shareData);
    } catch (err) {
        console.warn('Sharing was cancelled or failed.', err);
    }
    } else {
    alert('Sharing is not supported on this browser.');
    }

    // Redirect to the profile after share attempt
    window.location.href = shareData.url;
}, { once: true });
