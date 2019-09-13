import React from 'react';
import NavBar from './components/Navbar'
import Header from './components/Header'
import Product from './components/Product'
import Main from './components/Main'
import Features from './components/Features'
import Features2 from './components/Features2'
import PopularTools from './components/PopularTools'
import Footer from './components/Footer'

export default function App() {
  return (
    <div>
        <link rel="shortcut icon" type="image/png" href="/favicon.ico" />
        <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Montserrat:300,300i,400,600,800" />
        <link rel="stylesheet" href="//cdn.versoly.com/main.min.css" />
        <link rel="stylesheet" href="//use.fontawesome.com/releases/v5.8.1/css/all.css" />
        <style dangerouslySetInnerHTML={{__html: "\nbody {\n  font-family: Montserrat, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n}\n.btn-primary {\n  background-color: #337ab7;\n}\n.anchor {\n  padding-top: 200px;\n  margin-top: -200px;\n}\n#navbar {\n  background-color: white;\n}\n" }} />
        <NavBar />
        <Header />
        <Product />
        <Main />
        <Features />
        <Features2 />
        <PopularTools />
        <Footer />
    </div>
  )
}
