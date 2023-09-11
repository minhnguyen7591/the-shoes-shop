import React, { useRef } from "react";
import { Carousel } from "antd";
import { CarouselRef } from "antd/es/carousel";

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const HomeCarousel: React.FC = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  /**
   * Để truy cập được những methods của component export ra thì ta dùng useRef
   */
  const refCarsousel = useRef<CarouselRef>(null);

  const handleNext = () => {
    refCarsousel.current?.next();
  };
  const handlePrev = () => {
    refCarsousel.current?.prev();
  };

  return (
    <div>
      <button onClick={handlePrev}>Previous</button>
      <button onClick={handleNext}>Next</button>

      {/* Đối với những props có giá trị là true thì chỉ cần truyền tên không cần truyền cụ thể giá trị true */}
      <Carousel ref={refCarsousel} dotPosition="bottom" afterChange={onChange}>
        <div>
          <img style={contentStyle} src="https://i.pravatar.cc?img=1" />
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
