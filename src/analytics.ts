import mixpanel from 'mixpanel-browser';

if (import.meta.env.VITE_BUILD_ENV === 'production') {
  // mixpanel
  mixpanel.init(import.meta.env.VITE_MIXPANEL_TOKEN, {
    debug: true,
    ignore_dnt: true,
    track_pageview: true,
    persistence: 'localStorage'
  });
}
