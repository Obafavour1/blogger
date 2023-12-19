import React from "react";
import Sliding from "../Slider/Sliding";
import '../BlogFolder/BlogHome.css'
import Card from "./Card";
import CardTwo from "./CardTwo";
import Footer from "../Footerfolder/Footer";

const BlogHome = () =>{
  const data = [
    {
      id: 1,
        titleOne: "YOU CAN CHANGE THE WORLD",
        titletwo: "STRONG STYLE",
        paraOne: "How Women are Redirecting Hollywood",
        paraTwo: "New Ways to Wear Denim Belt Bags make a Comeback",
        name: "By Jasmin Smith",
        subTitle: "How to Shop Mindfully",
        qrCode: "/images/qrcode.png",
        cover: "/images/blog5.jpg",
    },
  ]


  return(
    <>
      <section className="home">
        <div className="left-content">
          {
            data.map((value) =>{
              return(
                <div key={value.id} className="content">
                  <div className="home-img"><img src={value.cover} alt="" /></div>
                  <div className="text-content">
                    <div className="logo"><h1>M</h1></div>
                    <div className="text1 text">
                        <h2>{value.titleOne}</h2>
                        <p>{value.paraOne}</p>
                        <span>{value.name}</span>
                    </div>
                    <div className="text2 text">
                        <h2>{value.titletwo}</h2>
                        <p>{value.paraTwo}</p>
                        <span>{value.subTitle}</span>
                    </div>
                    <div className="qrCode"><img src={value.qrCode} alt="" /></div>
                  </div>
                </div>
  
              )
            })
          }
        </div>
        <div className="right-content">
          <Sliding />
          <Card />
          <CardTwo />
          <Footer />
        </div>
      </section>
    </>
  )

}


export default BlogHome;


