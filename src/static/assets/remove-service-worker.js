if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations()
    .then((registrations) => {
      for(let registration of registrations) {
            registration.unregister()
    }}).catch((err) => {
        console.log('Service Worker registration failed: ', err);
    });
}