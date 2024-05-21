# React Cookie Guard

## Usage

To start using the library, install it in your project:

```javascript
npm install react-cookie-guard
```

Add <CookieGuardBanner /> to your app, it will be the place where banner will be rendered.

```javascript
import { CookieGuardBanner } from "react-cookie-guard"

// ...

function App() {

  const handleAccept = () => {
    // Do something when accept cookies
    console.log("Accept")
  }

  const handleReject = () => {
    // Do something when reject cookies
    console.log("Reject")
  }

  return (
    <>
      <CookieGuardBanner
        data-testid="cookieBanner"
        lang='en'
        configCookies='cookies'
        learnMore='policy'
        handleAccept={handleAccept} 
        handleReject={handleReject}/>
    </>
  )
}

export default App
```

### Translations 

Bases on Astro i18n oficial documentation. [Learn more](https://docs.astro.build/en/recipes/i18n/#translate-ui-strings)
