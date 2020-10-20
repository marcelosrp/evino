import React from "react";
import ProductDetails from "../ProductDetails/productDetails";
import { AiFillEye } from "react-icons/ai";
import { GiNoseFront } from "react-icons/gi";
import { GiLips } from "react-icons/gi";
import { GiKnifeFork } from "react-icons/gi";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import {
  Wrapper,
  SwipperContentWrapper,
  SwipperThumbWrapper,
  SwiperInfoWrapper,
  SwiperInfoItens,
} from "./styles";

SwiperCore.use([Navigation]);

const KitAbout = ({ bundleProducts }) => {
  return (
    <Wrapper>
      <h1>Sobre o Kit</h1>

      <Swiper spaceBetween={50} slidesPerView={1} navigation>
        {bundleProducts.map((item) => (
          <SwiperSlide key={item.name}>
            <SwipperContentWrapper>
              <SwipperThumbWrapper>
                <img src={item.images.medium} alt={item.name} />
              </SwipperThumbWrapper>
              <SwiperInfoWrapper>
                <h2>{item.name}</h2>
                <ProductDetails
                  country={item.producer.country}
                  region={item.producer.region}
                  type={item.type}
                  grapeList={item.grapeList}
                />
                <SwiperInfoItens>
                  {item.sommelier.color && (
                    <div>
                      <h3>
                        <AiFillEye />
                        Visual
                      </h3>
                      <p>{item.sommelier.color}</p>
                    </div>
                  )}
                  {item.sommelier.nose && (
                    <div>
                      <h3>
                        <GiNoseFront />
                        Nariz
                      </h3>
                      <p>{item.sommelier.nose}</p>
                    </div>
                  )}
                  {item.sommelier.mouth && (
                    <div>
                      <h3>
                        <GiLips />
                        Boca
                      </h3>
                      <p>{item.sommelier.mouth}</p>
                    </div>
                  )}
                  {item.pairing && (
                    <div>
                      <h3>
                        <GiKnifeFork />
                        Harmonização
                      </h3>
                      <p>{item.pairing}</p>
                    </div>
                  )}
                </SwiperInfoItens>
              </SwiperInfoWrapper>
            </SwipperContentWrapper>
          </SwiperSlide>
        ))}
      </Swiper>
    </Wrapper>
  );
};

export default KitAbout;
