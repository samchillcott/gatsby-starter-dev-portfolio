# Sam Chillcott Portfolio

Portfolio site to host completed projects and resume as well as showcase skills/tech stack.

## Tech Used

- Gatsby.js
- GraphQL
- React.js
- Sass/CSS.
- Netlify.
- Subdomain hosting.
- Built based on a starter template (via Dinesh Pandiyan and @codigoMate). Not built using a follow along tutorial.

## Features

- Minimalistic display of portfolio items on landing Page.
- Gifs of each project in action.
- Links to Live site, readme (further project notes and learnings) and source code for each project.
- About Section including icons for skills and contact email which auto opens a pre-composed subject.
- Viewable and downloadable resume pdf.
- Social Media links.
- Descriptions of each technology on hover state for those not familiar with the logos.
- Mobile responsive.
- TLS certificate.
- Hosted on personal subdomain.

## What I learned

- Gatsby.js
- Getting more comfortable with static servers.
- GraphQL.
- How to create and embed gifs.
- Reduce the clicks to improve UX. Don't hide the inof the visitor needs behind animations. If you know why they are on your site then give them that info ASAP. Find the balance between clean/Minimal interface and number of clicks. I had it way in favour of clean but user has to do 3 clicks to view projects and readme.
- DNS - what it is and how to set mine up.
- SSL/TLS - what they are and how to set mine up with a basic TLS cert.
- More efficient ways of hosting docs eg moving resume to be stored as an asset making it easier to update (no need to change any links).
- Ask for help / Call my hosting provider earlier - I spent about 7 hours on something that could have been fixed in less than a minute.

## Challenges

- Understanding the architecture of a template/someone else’s codebase.
- Understanding domains, hosting, deployment and DNS.
- Title metadata in gatsby. It changes the index.html so had to use react helmet as a workaround. Without it it would just show the url.
- Resizing svg.
- Working out the best way to store CV - started with link to shared google drive link then decided adding to assets and update from there (with same filename) probably better.
- Working with someone else’s sass - understanding their classes.
- Using flex & grid across multiple components that get rendered inside each other.

## Improvements

- Possibly make it myself from scratch but the point of this was to get an MVP up.
- Not use Gatsby - seems overkill?
- Have a drop down or expansion to house more detailed notes on the project in the landing page not just the readme link. Or have each project take up more screen real estate and have the info inside. Scrolling > Click & Scroll.
- Add my other projects.
- Use icons in the "Tech used" part of the description.
- Enlarge gifs on click.
- Use tooltips instead of title text for tech icon descriptions.
- Add some interesting micro interactions.
- Accessibility test and revamp.
- Performance test and tweaks.

## Watch Me Build This

- #100daysofcode 95, 96, 100 & #daysofcode 20/7/20 - 28/7/20.
- [Daily Videos - Instagram](https://www.instagram.com/samchillcott/)
