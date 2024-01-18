import React from "react";
import SimpleImageSlider from "react-simple-image-slider";

const SliderImg = ({ images }) => {
  const data = images?.map((i) => {
    return "http://localhost:5000/" + i.name;
  })
  return (
    <div>
      <SimpleImageSlider
        width={300}
        height={270}
        images={data}
        showBullets={true}
        showNavs={true}
        navSize={50}
        navMargin={0}
        style={{margin: "20px 20px"}}
      />
    </div>
  );
};

export default SliderImg;
