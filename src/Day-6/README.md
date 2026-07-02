                   🔗React Router v6🔗

## The problem
A React app is really just ONE HTML page (a Single Page App). But users expect
multiple pages — URLs that change, a back button that works, links they can
bookmark and share. A plain SPA can't do that; the URL stays frozen.

React Router fixes this: it swaps which component shows based on the URL —
without ever reloading the page.

## How it clicked
Before this, routing was the server's job — every click fetched a new HTML file
and reloaded the whole page (slow, blank flash). Router moves routing into the
browser instead. The URL changes, the back button works, but there's no reload —
React just swaps the component under the hood.

## The pieces
- BrowserRouter — wraps the app, turns routing on
- Route — one rule: "at this URL, show this component"
- Routes — the box holding all the rules
- Link — navigate without reloading (NOT <a>, which reloads and kills the SPA)
- Navigate — redirect the user by rendering it
- useNavigate — redirect from code (e.g. after login)
- useParams — read a value out of the URL (/profile/:userId)
- Outlet — where nested child pages render inside a shared layout

## Protected routes (the important one)
Wrap a page in a gatekeeper component that checks if you're logged in — if not,
it redirects to /login using <Navigate>. This is the pattern asked in almost
every frontend interview.
