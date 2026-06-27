// import Contact from "./components/contact/Contact"
// import Portfolio from "./components/portfolio/portfolio"
// import Hero from "./components/hero/Hero"
// import Services from "./components/services/Services"  ---> STATIC IMPORT




import { lazy } from "react"
import LazyLoad from "react-lazyload"
import { Suspense } from "react"

// Lazy import each section of the portfolio.
// These components are downloaded only when they are needed.
const Hero = lazy(() => import("./components/hero/Hero"))
const Portfolio = lazy(() => import("./components/portfolio/Portfolio"))
const Services = lazy(() => import("./components/services/Services"))
const Contact = lazy(() => import("./components/contact/Contact"))  //---->DYNAMIC IMPORT


const App = () => {
  return (
    <div className='container'>


 {/* Suspense displays the fallback UI while the Hero component is downloading */}
      {/* LazyLoad delays rendering until the section is close to the viewport */}
      <Suspense fallback={"loading..."}>
        <LazyLoad height={"100vh"} offset={-100}>
          <section id="#home">
            <Hero />
          </section>
        </LazyLoad>
      </Suspense>

      <Suspense fallback={"loading..."}>
        <LazyLoad height={"100vh"} offset={-100}>
          <section id="#services">
            <Services />
          </section>
        </LazyLoad>
      </Suspense>

      <Suspense fallback={"loading..."}>
        <LazyLoad height={"600vh"} offset={-100}>
          {/* <section id="#portfolio"> */}
          <Portfolio />
          {/* </section> */}
        </LazyLoad>
      </Suspense>

      <Suspense fallback={"loading..."}>
        <LazyLoad height={"100vh"} offset={-100}>
          <section id="#contact">
            <Contact />
          </section>
        </LazyLoad>
      </Suspense>









    </div>
  )
}

export default App


// lazy()
// Dynamically imports a component to reduce the initial bundle size.

// Suspense
// Displays fallback content until the lazy-loaded component finishes downloading.

// LazyLoad
// Prevents rendering of components until they are near the viewport,
// improving performance for long pages.