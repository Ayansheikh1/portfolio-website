// import Contact from "./components/contact/Contact"
// import Portfolio from "./components/portfolio/portfolio"
// import Hero from "./components/hero/Hero"
// import Services from "./components/services/Services"  ---> STATIC IMPORT

import { lazy } from "react"
import LazyLoad from "react-lazyload"

const Hero = lazy(() => import("./components/hero/Hero"))
const Portfolio = lazy(() => import("./components/portfolio/portfolio"))
const Services = lazy(() => import("./components/services/Services"))
const Contact = lazy(() => import("./components/contact/Contact"))  //---->DYNAMIC IMPORT


const App = () => {
  return (
    <div className='container'>

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