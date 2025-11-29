import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import images

// 📁 src/assets/photoshops/...
import img1 from "../assets/photoshops/worldcancerday.jpg";
import img2 from "../assets/photoshops/sports.jpg";
import img3 from "../assets/photoshops/thambolam.jpg";
import img4 from "../assets/photoshops/nrpf.png";
import img5 from "../assets/photoshops/logodsign-4.png";
import img6 from "../assets/photoshops/wh.jpg";
import img7 from "../assets/photoshops/cancer3.jpg";
import img8 from "../assets/photoshops/doodle.jpg";
import img9 from "../assets/photoshops/yogaday.jpg";
import img10 from "../assets/photoshops/yogaday.jpg";

import img11 from "../assets/photoshops/cancer2.png";
import img12 from "../assets/photoshops/dec.6-3.png";
import img13 from "../assets/photoshops/tourism.jpg";
import img14 from "../assets/photoshops/republic.png";
import img15 from "../assets/photoshops/abeesikka.png";
import img16 from "../assets/photoshops/iftar.png";

// 📁 src/assets/certificates/...
import img111 from "../assets/certificates/nss.jpg";
import img22 from "../assets/certificates/mcp.jpg";
import img33 from "../assets/certificates/dataanalytics.png";
import img44 from "../assets/certificates/ethicalhacking.png";
import img55 from "../assets/certificates/bootstrap.jpg";
import img65 from "../assets/certificates/ev.jpg";
import img77 from "../assets/certificates/flexbox.jpg";
import img88 from "../assets/certificates/js.jpg";

const sliderOneImages = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
];

const sliderTwoImages = [
  img111,
  img22,
  img33,
  img44,
  img55,
  img65,
  img77,
  img88,
];

export default function Slider() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      {/* POPUP MODAL */}
      {selectedImage && (
        <div className="popup-overlay" onClick={() => setSelectedImage(null)}>
          <div className="popup-image-box">
            <img src={selectedImage} alt="popup" />
          </div>
        </div>
      )}

      {/* ---- SLIDER #1 ---- */}
      <div className="others-swiper">
        <h1 className="mern">
          <strong className="purple">Photoshop</strong> Designs
        </h1>

        <Swiper
          loop={true}
          freeMode={true}
          freeModeMomentum={true}
          speed={2500}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            reverseDirection: true,
          }}
          slidesPerView={6}
          spaceBetween={16}
          modules={[Autoplay]}
          breakpoints={{
            320: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
        >
          {sliderOneImages.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                className="slider-img"
                src={img}
                alt=""
                onClick={() => setSelectedImage(img)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ---- SLIDER #2 ---- */}
      <div className="others-swiper2">
        <h1 className="mern">
          <strong className="purple">Certificates</strong> Received
        </h1>

        <Swiper
          loop
          speed={2500}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            reverseDirection: true,
          }}
          slidesPerView={5}
          spaceBetween={9}
          modules={[Autoplay]}
          breakpoints={{
            320: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 4 },
          }}
        >
          {sliderTwoImages.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                className="slider-img"
                src={img}
                alt=""
                onClick={() => setSelectedImage(img)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
