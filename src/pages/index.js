import React from "react"
import { Parallax } from "react-spring/renderprops-addons.cjs"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Projects from "../components/projects"
import Menu from "../components/menu"
import About from "../components/about"
import Contact from "../components/contact"

const IndexPage = () => {
  let parallax;

  const scrollTo = (id) => {
    parallax.scrollTo(id);
  }
  
  return (<Layout>
    <Menu scrollTo={scrollTo} />
    <Parallax ref={ref => (parallax = ref)}  pages={5}>
      <Hero offset={0} factor={1} />
      <About offset={1} factor={1} />
      <Projects offset={2} factor={2} />
      <Contact offset={4} factor={1} />
    </Parallax>
  </Layout>);
  //<GitHub offset={2} factor={1} />
}

export default IndexPage
