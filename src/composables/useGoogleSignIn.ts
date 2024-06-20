import { localStorage } from '@/utils/storage';

export function useGoogleSignIn() {
  function initialize() {
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.defer = true;
    script.async = true;
    script.onload = () => {
      (window as any).google.accounts.id.initialize({
        client_id:
          '275618919602-u5grlvdhmcqqd7as36v790gitktelhbu.apps.googleusercontent.com',
        cancel_on_tap_outside: false,
        context: 'signin',
        login_uri: 'http://localhost:3000/oauth2/google/callback',
        callback: (res: any) => {
          localStorage.set('token', res.credential);
        }
      });

      (window as any).google.accounts.id.prompt();
    };
    document.head.appendChild(script);
  }

  onMounted(() => {
    const token = localStorage.get('token');

    if (!token) {
      initialize();
    }
  });
}
