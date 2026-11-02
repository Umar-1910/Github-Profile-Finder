# GitHub Profile Finder 🔍
A responsive React app that looks up any public GitHub account and shows profile details, total stars and a searchable, sortable list of repositories.

## Features
- Search any GitHub username by pressing Enter or clicking "Find profile"
- Profile card with avatar, name, username link and join date
- Stats for repositories, total stars, followers and following
- Repository list with filtering by name, topic or language
- Sorting by most stars, recently updated or name A-Z
- Repository cards with language color dot, forks and "updated" time
- Recent searches (last 5 users) saved in the browser for one-click lookup
- Friendly empty and "user not found" messages
- Fully responsive layout for phones, tablets and desktops

## Tech Stack
- [React](https://react.dev/) (functional components, `useState`, `useEffect`)
- [Tailwind CSS](https://tailwindcss.com/) (utility classes and responsive breakpoints)
- [GitHub REST API](https://docs.github.com/en/rest) (`/users/:username` and the user's repos)
- Browser `localStorage` (recent searches)

## Project Structure
```
src/
├── Home.jsx         # Page layout: title, search bar and footer
├── Title.jsx        # Heading and short description
├── SearchBar.jsx    # Username input, API call and recent searches
├── UserAccount.jsx  # Shows the empty, not-found or profile state
├── Profile.jsx      # Profile card, stats and total stars calculation
├── ReposList.jsx    # Repo filter, sort and list
├── RepoCard.jsx     # Single repository card
└── Footer.jsx       # Page footer
```

## Responsive Design
Built mobile-first with Tailwind breakpoints:
| Prefix | Applies from |
|---|---|
| (none) | Phones, all widths |
| `sm:` | 640px and up |
| `md:` | 768px and up |
| `lg:` | 1024px and up |
| `xl:` | 1280px and up |

## Getting Started
1. Clone the repo:
   ```bash
   git clone https://github.com/<your-username>/<your-repo-name>.git
   cd <your-repo-name>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open the local URL shown in your terminal.

## Notes
- The app uses GitHub's public API without authentication, which allows about 60 requests per hour per IP address. If lookups stop working, wait a while and try again.
- Only the first page of a user's repositories is fetched (up to 30 by default), so the star total covers those repositories.

## License
This project is for educational purposes only and is not affiliated with GitHub.