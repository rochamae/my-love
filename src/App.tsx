import React from 'react';
import './App.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import img1 from './Let/1.jpg';
import img2 from './Let/2.jpeg';
import img3 from './Let/3.jpeg';
import img4 from './Let/4.jpeg';
import img5 from './Let/5.jpeg';
import img6 from './Let/6.jpeg';
import img7 from './Let/7.jpeg';
import img8 from './Let/8.jpeg';
import img9 from './Let/9.jpeg';
import img10 from './Let/10.jpeg';
import img11 from './Let/11.jpeg';
import img12 from './Let/12.jpeg';
import img13 from './Let/13.jpeg';
import img14 from './Let/14.jpeg';

function App() {
  return (
    <div className="App">
      <div className="declaracao">
        <h2>
          O quanto eu amo <span className="vs">você?</span> ❤️
        </h2>
        <p>
          Como falar o quanto te amo? Não tem como, é algo que eu nem sei
          explicar, é tão repentino, é tão leve, é tão minha casa. Ao seu lado,
          sinto-me livre para ser quem sou, para sorrir, para me permitir ser
          vulnerável, você me deixa muito leve e feliz, fez com que eu pudesse
          sentir como é ser amado realmente, um amor que dá pra sentir ao chegar
          perto de você, que da pra sentir na sua voz, eu te amo tanto Letícia,
          você não tem noção do quão bem que faz você.
        </p>
        <p>
          Nós estamos aprendendo muito um com o outro e crescendo juntos,
          evoluindo nosso relacionamento para uma coisa linda, quando eu estiver
          velho, quero estar do seu lado, sendo feliz e amando muito.
        </p>
        <p>
          Você me ensinou a me amar mais, a entender os meus problemas que não
          são problemas. E eu que era triste, descrente desse mundo, ao encontra
          você eu conheci, o que é felicidade meu amor, quero a vida sempre
          assim, com você perto de mim até o apagar da chama da minha vida. ❤️
        </p>
      </div>
      <div className="poema">
        <h2>Poema para minha Princesa 👸🏾</h2>
        <p>Eu te amo</p>
        <p>Tanto, tanto</p>
        <p>Que farei um acalanto</p>
        <p>Com beijos de doce espanto</p>
        <p>Para te adormecer.</p>
        <span> </span>
        <p>Eu te amo</p>
        <p>Tanto, tanto</p>
        <p>Que com meus versos</p>
        <p>Tecerei um manto</p>
        <p>Para enxugar o teu pranto</p>
        <p>E não te ver sofrer.</p>
        <span> </span>
        <p>Eu te amo</p>
        <p>Tanto, tanto</p>
        <p>E no entretando</p>
        <p>Não sei o quanto</p>
        <p>Desse imenso bem querer.</p>
        <span> </span>
        <p>Eu te amo</p>
        <p>Tanto, tanto</p>
        <p>Que se um dia te perder</p>
        <p>Na dor do desencanto</p>
        <p>Silenciarei meu canto</p>
        <p>Não mais saberei viver...</p>
      </div>
      <div className="fotos-carrossel">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{ delay: 1000 }}
          navigation={true}
          pagination={{ clickable: true }}
          className="swiper-container"
        >
          <SwiperSlide className="slide-item">
            <img src={img1} alt="" />
          </SwiperSlide>
          <SwiperSlide className="slide-item">
            <img src={img2} alt="" />
          </SwiperSlide>
          <SwiperSlide className="slide-item">
            <img src={img3} alt="" />
          </SwiperSlide>
          <SwiperSlide className="slide-item">
            <img src={img4} alt="" />
          </SwiperSlide>
          <SwiperSlide className="slide-item">
            <img src={img5} alt="" />
          </SwiperSlide>
          <SwiperSlide className="slide-item">
            <img src={img6} alt="" />
          </SwiperSlide>
          <SwiperSlide className="slide-item">
            <img src={img7} alt="" />
          </SwiperSlide>
          <SwiperSlide className="slide-item">
            <img src={img8} alt="" />
          </SwiperSlide>
          <SwiperSlide className="slide-item">
            <img src={img9} alt="" />
          </SwiperSlide>
          <SwiperSlide className="slide-item">
            <img src={img10} alt="" />
          </SwiperSlide>
          <SwiperSlide className="slide-item">
            <img src={img11} alt="" />
          </SwiperSlide>
          <SwiperSlide className="slide-item">
            <img src={img12} alt="" />
          </SwiperSlide>
          <SwiperSlide className="slide-item">
            <img src={img13} alt="" />
          </SwiperSlide>
          <SwiperSlide className="slide-item">
            <img src={img14} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="pedido">
        <h1>
          Minha pretinha, você aceita namorar comigo? Não tem opção de não
          aceitar! ❤️
        </h1>
        <a
          href="https://www.youtube.com/watch?v=iyJDuJggiEM"
          target="_blank"
          rel="noreferrer"
        >
          SIMMMMMMMM ❤️❤️❤️
        </a>
      </div>
    </div>
  );
}

export default App;
