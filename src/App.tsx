import { LocationProvider, ErrorBoundary, Router } from 'preact-iso'

// Synchronous
import Home from './Home'
import Projects from './Projects'
import Redirect from './Redirect'

// // Asynchronous (throws a promise)
// const Profiles = lazy(() => import('./routes/profiles.js'));
// const Profile = lazy(() => import('./routes/profile.js'));
// const NotFound = lazy(() => import('./routes/_404.js'));

const App = () => (
  <div className='layout'>
    <div className='header'>
      <a className='left' href='/'>Luke Redmore</a>
      <span className='right'>
        <a href='/'>About</a>
        <a href='/projects'>Projects</a>
      </span>
    </div>

    <div className='container'>
      <LocationProvider>
        <ErrorBoundary>
          <Router children={[<Home path='/' />, <Projects path='/projects' />, <Redirect to='/' default />]}>
            {/* Alternative dedicated route component for better TS support */}
            {/* <Route path="/profiles" component={Profiles} />*/}
            {/* <Route path="/" component={Home} />  */}
            {/* `default` prop indicates a fallback route. Useful for 404 pages */}
            {/* <NotF default /> */}
          </Router>
        </ErrorBoundary>
      </LocationProvider>
    </div>
  </div>
)

export default App
