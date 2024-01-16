import React from "react";
import SimpleImageSlider from "react-simple-image-slider";

const SliderImg = ({ images }) => {
  const data = images.map((i) => {
    return "http://localhost:5000/" + i.name;
  })
  return (
    <div>
      <SimpleImageSlider
        width={180}
        height={170}
        images={data}
        showBullets={true}
        showNavs={true}
        navSize={50}
        navMargin={1}
      />
    </div>
  );
};

export default SliderImg;
