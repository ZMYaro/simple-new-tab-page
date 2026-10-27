# Extremely Simple New Tab Page

A new tab page with just your top sites and nothing else.  No news feeds, no ads, no Internet connection required.

I got fed up with Chrome, Edge, etc. having New Tab pages that took far too long to load due to fetching news feeds, account information, photos, ads, etc. from remote servers.  This takes the New Tab page back to its roots—a bare-bones page with just your top sites.  It doesn't need to fetch anything from any company's servers, so it loads in a blink.


## Principles

- **Fast and lightweight** - New features shouldn't make ESNTP noticeably slower to start or use.
- **Offline** - No part of ESNTP should require an Internet connection.
- **Privacy-conscious** - ESNTP shouldn't send user-identifying data to anyone else.  Apart from automatically collected basic anonymous extension store analytics, data should only be stored in the user's browser profile.
- **Dependency-conscious** - New CSS/JS libraries should only be added if necessary, and after serious consideration.


## Compatibility

Currently, I have only confirmed ESNTP works in Chrome and Edge, but it should work in other Chromium-based browsers.  It partially works in Firefox, but because Firefox doesn't support [Chromium's recommended method of getting site icons](https://developer.chrome.com/docs/extensions/how-to/ui/favicons), icons don't show up.


## Roadmap

I want to add these features at some point:

- Hide sites from showing up on top sites
- “Pin” sites to the front of the top sites list
- _[Maybe]_ browser theme integration (beyond light/dark theme)


## Tread carefully

I wouldn't say never, but I don't plan to add these:

- Search boxes (browsers already have these)
- Weather (would require an exception to the offline-only requirement and need to have minimal performance and data usage impact)


## Off-course

These will never be on the roadmap due to their performance and privacy impacts:

- Ads
- News feeds
