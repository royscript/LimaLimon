import React from "react";
import Card from "./Card";
import ceviche from "../assets/Ceviche-Lima-Limón-1024x768.jpg";
import pescado from "../assets/Lima2edit.jpg";
import tampa from "../assets/tampa.jpg";

const specialsData = [
  {
    img: ceviche,
    title: "Ceviche",
    price: 15000.00,
    description:
      `Elabora con pescado o mariscos frescos cortados en trozos pequeños y marinados en una mezcla de jugo de limón, cebolla, ají, cilantro y sal. El ácido del limón "cocina" los ingredientes y les da un sabor fresco y vibrante.`,
  },
  {
    img: pescado,
    title: "Pescado Frito con verduras",
    price: 20000,
    description:
      `El pescado frito con verduras es un plato clásico de la gastronomía peruana que consiste en un filete de pescado fresco, generalmente de corvina o lenguado, frito en aceite y servido con una guarnición de verduras salteadas.`,
  },
  {
    img: tampa,
    title: "Tampa",
    price: 25000,
    description:
      "El plato de Tampa es una deliciosa combinación de comida cubana y americana que se originó en la ciudad de Tampa, Florida. El plato consiste en arroz blanco, frijoles negros, yuca frita y carne de cerdo asada o en mojo, que es una salsa cubana hecha con jugo de naranja agria, ajo y otras especias. ",
  },
];

function Main() {
  const specialsCards = specialsData.map((item) => {
    return (
      <Card
        key={item.title}
        image={item.img}
        title={item.title}
        price={item.price}
        description={item.description}
      />
    );
  });

  return (
    <main>
      <section className="specials">
        <div className="top">
          <h1>Try our weekly special!</h1>
        </div>
        <div className="cards">{specialsCards}</div>
      </section>
      <br></br>
    </main>
  );
}

export default Main;