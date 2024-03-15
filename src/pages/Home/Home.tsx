import hero from "../../assets/hero.webp";
import womanCategory from "../../assets/category-woman.png";
import manCategory from "../../assets/category-man.png";
import casualCategory from "../../assets/category-casual.png";
import tShirt1 from "../../assets/t-shirt-1.png";
import tShirt2 from "../../assets/t-shirt-2.png";
import tShirt3 from "../../assets/t-shirt-3.png";
import tShirt4 from "../../assets/t-shirt-4.png";
import profile1 from "../../assets/profile1.svg";
import profile2 from "../../assets/profile2.svg";
import profile3 from "../../assets/profile3.svg";
import profile4 from "../../assets/profile4.svg";
import quotes from "../../assets/quotes.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { LuChevronRight, LuChevronLeft } from 'react-icons/lu';
import "swiper/css";

const tShirtsList = [
  {
    title: "705 Seven Zero Five - T-Shirt",
    description: "Printed Cotton T-Shirt",
    price: 42.0,
    percentageDiscount: 10,
    img: tShirt1,
  },
  {
    title: "705 Seven Zero Five",
    description: "Printed Cotton T-Shirt",
    price: 129.99,
    percentageDiscount: 20,
    img: tShirt2,
  },
  {
    title: "705 California",
    description: "Printed Cotton T-Shirt",
    price: 349.99,
    percentageDiscount: 10,
    img: tShirt3,
  },
  {
    title: "Refined Granite Computer",
    description: "Printed Cotton T-Shirt",
    price: 98.0,
    percentageDiscount: 5,
    img: tShirt4,
  },
  {
    title: "705 Seven Zero Five - T-Shirt",
    description: "Printed Cotton T-Shirt",
    price: 119.99,
    percentageDiscount: 10,
    img: tShirt1,
  },
  {
    title: "705 Seven Zero Five - T-Shirt",
    description: "Printed Cotton T-Shirt",
    price: 239.99,
    percentageDiscount: 10,
    img: tShirt2,
  },
];

const feedbacks = [
  {
    name: 'Georgia Murazik',
    text: 'Ab amet reprehenderit saepe quia veniam. Voluptas dolore officia sequi aut rerum molestiae iure. Laborum dicta qui praesentium laborum sint.',
    img: profile2
  },
  {
    name: 'Alison Nikolaus',
    text: 'Ab amet reprehenderit saepe quia veniam. Voluptas dolore officia sequi aut rerum molestiae iure. Laborum dicta qui praesentium laborum sint.',
    img: profile3
  },
  {
    name: 'Camille Ferros',
    text: 'Ab amet reprehenderit saepe quia veniam. Voluptas dolore officia sequi aut rerum molestiae iure. Laborum dicta qui praesentium laborum sint.',
    img: profile1
  },
  {
    name: 'Rafael Lazzari',
    text: 'Ab amet reprehenderit saepe quia veniam. Voluptas dolore officia sequi aut rerum molestiae iure. Laborum dicta qui praesentium laborum sint.',
    img: profile4
  }
]

const Home = () => {
  const handleScrollLeft = () => {
    const div = document.getElementById('swiper');
    if (div) div.scrollLeft -= 200;
  }
  const handleScrollRight = () => {
    const div = document.getElementById('swiper');
    if (div) div.scrollLeft += 200;
  }

  return (
    <>
      <section id="hero" className="w-full h-[90vh] flex items-center justify-center pt-10 pb-40">
        <div className="w-full max-w-8xl h-full flex items-center justify-around bg-secondary bg-opacity-60 gap-6 px-10 rounded-lg border border-tertiary border-opacity-10">
          <div className="">
            <h1 className="text-6xl font-serif font-bold mb-5">
              Descubra o seu estilo <br /> na iShirts
            </h1>
            <p className="text-3xl font-sans mb-10">Descontos de até 40% OFF</p>
            <a href="" className="font-sans bg-primary text-white px-5 py-3 rounded-lg">COMPRAR AGORA</a>
          </div>
          <img src={hero} className="self-end h-5/6" alt="Imagem de uma modelo posando com camiseta preta e chapéu branco" />
        </div>
      </section>

      <section id="shop-by-categories" className="px-4">
        <div className="flex justify-between items-center gap-2">
          <h2 className="font-bold text-2xl md:text-4xl sm:text-3xl">
            Comprar por categoria
          </h2>
          <button className="bg-primary text-sm text-secondary w-36 py-2.5 rounded-lg transition hover:opacity-90 hover:underline">
            Ver todas
          </button>
        </div>
        <div className="flex gap-6 2xl:gap-10 mt-10 justify-center flex-wrap md:justify-between md:flex-nowrap">
          <div
            style={{ backgroundImage: `url(${womanCategory})` }}
            className="bg-no-repeat bg-top 2xl:flex-1 2xl:bg-cover w-96 h-96 flex items-end justify-center rounded-xl"
          >
            <button className="w-11/12 bg-white font-medium py-3 rounded-lg mb-3 transition-colors hover:bg-primary hover:text-white">
              Feminino
            </button>
          </div>
          <div
            style={{ backgroundImage: `url(${manCategory})` }}
            className="bg-no-repeat bg-top 2xl:flex-1 2xl:bg-cover w-96 h-96 flex items-end justify-center rounded-xl"
          >
            <button className="w-11/12 bg-white font-medium py-3 rounded-lg mb-3 transition-colors hover:bg-primary hover:text-white">
              Masculino
            </button>
          </div>
          <div
            style={{ backgroundImage: `url(${casualCategory})` }}
            className="bg-no-repeat bg-top 2xl:flex-1 2xl:bg-cover w-96 h-96 flex items-end justify-center rounded-xl"
          >
            <button className="w-11/12 bg-white font-medium py-3 rounded-lg mb-3 transition-colors hover:bg-primary hover:text-white">
              Casual
            </button>
          </div>
        </div>
      </section>

      <section id="best-sellers" className="px-4 mt-24">
        <div className="flex justify-between items-center gap-2">
          <h2 className="font-bold text-2xl md:text-4xl sm:text-3xl">
            Mais vendidos
          </h2>
          <button className="bg-primary text-sm text-secondary w-36 py-2.5 rounded-lg transition hover:opacity-90 hover:underline">
            Ver mais
          </button>
        </div>
        <div className="mt-10 text-lg">
          <Swiper spaceBetween={20} slidesPerView={4.2} className="overflow-x-hidden flex">
            {tShirtsList.map((tShirt, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col gap-3 max-w-80 cursor-pointer">
                  <img
                    src={tShirt.img}
                    alt="Modelo de camiseta iShirts"
                    className="border border-tertiary border-opacity-30 rounded-xl"
                  />
                  <div>
                    <strong>{tShirt.title}</strong>
                    <p>{tShirt.description}</p>
                    <div className="flex gap-4 mt-3">
                      <strong className="font-medium">
                        R$
                        {(
                          tShirt.price -
                          (tShirt.price * tShirt.percentageDiscount) / 100
                        ).toFixed(2)}
                      </strong>
                      <p className="text-tertiary line-through">
                        R${tShirt.price.toFixed(2)}
                      </p>{" "}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section id="feedbacks" className="px-4 mt-24">
        <div className="flex justify-between items-center gap-2">
          <h2 className="font-bold text-2xl md:text-4xl sm:text-3xl">O que nossos clientes dizem</h2>
          <div className="flex gap-4">
            <button onClick={handleScrollLeft} className="bg-tertiary text-xl text-center text-secondary font-extrabold p-2 pe-2.5 rounded-lg transition hover:opacity-90"><LuChevronLeft /></button>
            <button onClick={handleScrollRight} className="bg-primary text-xl text-center text-secondary font-extrabold p-2 pe-2.5 rounded-lg transition hover:opacity-90"><LuChevronRight /></button>
          </div>
        </div>
        <div className="mt-10 text-lg">
          <Swiper id="swiper" spaceBetween={30} slidesPerView={2.5} className="overflow-x-hidden flex mb-20" style={{ scrollBehavior: 'smooth', transition: 'scroll 0.8s' }}>
            {feedbacks.map((feedback, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col gap-7 p-8 bg-secondary bg-opacity-45 border border-tertiary border-opacity-15 rounded-xl">
                  <img className="w-10" src={quotes} alt="" />
                  <p className="font-medium">{feedback.text}</p>
                  <div className="flex items-center gap-3">
                    <img className="h-10 w-10 rounded-full" src={feedback.img} alt={`Imagem de usuário de ${feedback.name}`} />
                    <strong>{feedback.name}</strong>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Home;