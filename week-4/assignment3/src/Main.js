import React, { useState } from "react";

const Main = () => {
  const [className, setClassName] = useState("sectionBox");
  const switchBtn = () => {
    setClassName((pervClassName) => {
      return pervClassName === "sectionBox"
        ? "sectionBox active"
        : "sectionBox";
    });
  };
  return (
    <main>
      <h2>Section Title</h2>
      <section className="sectionBox">
        <div className="box">Content Box 1</div>
        <div className="box">Content Box 2</div>
        <div className="box">Content Box 3</div>
        <div className="box">Content Box 4</div>
      </section>

      <footer>
        <span className="action" onClick={switchBtn}>
          Call to Action
        </span>
      </footer>

      <section className={className} id="section2">
        <div className="box">Content Box 5</div>
        <div className="box">Content Box 6</div>
        <div className="box">Content Box 7</div>
        <div className="box">Content Box 8</div>
      </section>
    </main>
  );
};

export default Main;
