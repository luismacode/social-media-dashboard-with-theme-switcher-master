globalThis.addEventListener('DOMContentLoaded', () => {
   const app = document.querySelector('.App');
   const switcher = document.querySelector('#checkbox');
   switcher.addEventListener('change', e => {
      app.classList.contains('App--darkTheme')
         ? app.classList.remove('App--darkTheme')
         : app.classList.add('App--darkTheme');
   });
   return app;
});
