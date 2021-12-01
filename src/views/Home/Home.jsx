import React from "react";
import Main from "../../components/Main/Main";

import foto1 from "../../assets/image_1.jpg";
import foto2 from "../../assets/image_2.jpg";
import foto3 from "../../assets/image_4.jpg";

function Home() {
  return (
    <div>
      <Main foto1={foto1} foto2={foto2} foto3={foto3} />
    </div>
  );
}

export default Home;
