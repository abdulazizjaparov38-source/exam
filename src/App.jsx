import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Four from "./components/four/Four";
import Flashsale from "./components/flashsale/Flashsale";
import Cartlar from "./components/cartlar/Cartlar";
import Arrivals from "./components/arrivals/Arrivals";

import Sale from './components/sale/Sale';
import Card from './components/card/Card';
import Banner from './components/banner/Banner';
import Apples from './components/apples/Apples';
import Second from './components/second/Second';
import Choose from './components/choose/Choose';
import Footer from './components/footer/Footer';
import Carts from './components/carts/Carts';

const malumotlar = [
  {
    nomi: "Smartphones",
    t1: "iPhone",
    t2: "iPhone Accessories",
    t3: "Postpaids Phones",
    t4: "Sale off",
    button: "All Smartphones",
  },
  {
    nomi: "Smartphones",
    t1: "iPhone",
    t2: "iPhone Accessories",
    t3: "Postpaids Phones",
    t4: "Sale off",
    button: "All Camera",
  },
  {
    nomi: "Smartphones",
    t1: "iPhone",
    t2: "iPhone Accessories",
    t3: "Postpaids Phones",
    t4: "Sale off",
    button: "All Wristwatch",
  },
  {
    nomi: "Smartphones",
    t1: "iPhone",
    t2: "iPhone Accessories",
    t3: "Postpaids Phones",
    t4: "Sale off",
    button: "All Headphones",
  },
  {
    nomi: "Smartphones",
    t1: "iPhone",
    t2: "iPhone Accessories",
    t3: "Postpaids Phones",
    t4: "Sale off",
    button: "All Tablets",
  },
  {
    nomi: "Smartphones",
    t1: "iPhone",
    t2: "iPhone Accessories",
    t3: "Postpaids Phones",
    t4: "Sale off",
    button: "All Laptop",
  },
];
const two = [
  {
    title:'Keyboard',
    bigtitle:'Sale 20% off',
    button:'Shop Now'
  },
  {
    title:'Keyboard',
    bigtitle:'Sale 20% off',
    button:'Shop Now'
  },
]
const datatwo = [
  {
    name: "Anna Jean",
    job: "Graphic Designer",
    text: "Lorem ipsum dolor sit amet consectetur. Dis volutpat semper semper tortor id maecenas pharetra. Dignissim sed vitae tristique risus interdum viverra odio."
  },
  {
    name: "Albert Flores",
    job: "Doctor",
    text: "Lorem ipsum dolor sit amet consectetur. Dis volutpat semper semper tortor id maecenas pharetra. Dignissim sed vitae tristique risus interdum viverra odio."
  }
];
const service = ["My Account", "Payments", "Term of Use", "Deliveries & Returns", "Gift Card"];
const about = ["Product", "Our Story", "Job Opportunities", "Store Locator", "Blog"];



function App() {
  return (
    <Router>
      <Header />
      <Hero />
      <Four />
      <Flashsale />
      <Cartlar data={malumotlar} />
      <Arrivals />
      <Carts/>
      <Sale two={two}/>
      <Card/>
      <Banner/>
      <Apples data={datatwo}/>
      <Second data={datatwo}/>
      <Choose/>
      <Footer services={service} about={about} />
    </Router>
  );
}

export default App;
