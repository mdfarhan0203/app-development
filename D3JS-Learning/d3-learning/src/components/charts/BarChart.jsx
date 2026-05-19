import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";
function BarChart() {
  const sveRef = useRef();


  // https://chatgpt.com/g/g-p-6a0c2c7ca28481919acf23b606035f12-learing/c/6a0c2cb0-dc98-83e8-b95f-f1b46ccdd4f2
  //https://chatgpt.com/c/6a0c3295-21c4-83ec-94fb-93c99a4af77b
  useEffect(() => {
    const data = [40, 80, 120, 60, 150];
    const height = 500;
    const width = 300;

    const svg = d3.select(sveRef.current);

    // JS
    // const div = document.createElement("div");
    // in js - div.setAttribute("id", "box");
    // is used to manipulate dom elements and update
    // same this attr is used in d3.js
    svg.attr("width", width).attr("height", height);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data)])  // 0 - max value of data 
      .range([0, height]);   // 0 - height (inverted because svg y-axis starts from top)


      // y = frac{(x - d_0)}{(d_1 - d_0)} \times (r_1 - r_0) + r_0

      y = ((x - d0) / (d1 - d0)) * (r1 - r0) + r0

//       x  = input value

// d0 = domain start
// d1 = domain end

// r0 = range start
// r1 = range end

// y  = output value


// domain([0, 150])
// range([0, 500])


// d0 = 0
// d1 = 150

// r0 = 0
// r1 = 500


yScale(40) // 133.33
 //y = ((40 - 0) / (150 - 0)) * (500 - 0) + 0
//y = (40 / 150) * 500
//y = 0.2667 * 500
//y = 133.33
// 40 is 26% of 150   
//26% of 500 = 133px
yScale(80) // 200
yScale(120) // 400
yScale(60) // 300
yScale(150) // 500

    // svg.selectAll("rect").
    //     data(data).
    //     join("rect").
    //     attr("x",(d,i)=> i * 80).
    //     attr("y",d=>height -yScale(d)).
    //     attr("width",50).
    //     attr("height",d=>yScale(d)).
    //     attr("fill","steelblue");

    //   svg.selectAll("circle").
    // data(data).
    // join("circle").
    // attr("cx",(d,i)=> i * 80 + 25).
    // attr("cy",d=>height -yScale(d)).
    // attr("r",10).
    // attr("fill","steelblue");

     svg
      .selectAll("line")
      .data(data)
      .join("line")
      .attr("x1", (d, i) => i * 80 + 40)
      .attr("y1", height)
      .attr("x2", (d, i) => i * 80 + 40)
      .attr("y2", (d) => height - yScale(d))
      .attr("stroke", "steelblue")
      .attr("stroke-width", 50)
      // .attr("stroke-linecap", "round");
  }, []);

  return (
    <div>
      <h1>Bar Chart</h1>
      {/* <svg ref={sveRef}></svg> */}
          <svg
        ref={sveRef}
        style={{
          border: "1px solid black",
          background: "#f5f5f5",
        }}
      ></svg>
    </div>
  );
}

export default BarChart;
