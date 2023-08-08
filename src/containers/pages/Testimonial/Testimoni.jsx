import React, { useEffect } from "react";
import "./Testimoni.css";
import { GlobalConsumer } from "../../../config/context/Context";
import avtr from "../../../assets/img/icons/orang.jpg";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const Testimoni = (props) => {
  return (
    <section id="testimoni">
      <div className="container x-content">
        <h2>Testimonial</h2>
        <Swiper // install Swiper modules
          modules={[Pagination]}
          pagination={{ clickable: true }}
          className="content"
        >
          {props.state.dataTestimoni.map((data, i) => {
            return (
              <SwiperSlide key={i} className="box-testimoni">
                <div className="image">
                  <img src={data.avatar} alt="avatar" />
                </div>
                <h3>{data.name}</h3>
                <h5>{data.profession}</h5>
                <p>{data.review}</p>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default GlobalConsumer(Testimoni);
