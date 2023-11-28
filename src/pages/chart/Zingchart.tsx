
import "zingchart/es6";
import ZingChart from "zingchart-react";

const Chart = () => {
  const chartConfig = {
    gui: {
      contextMenu: {
        alpha: 0.9,
        button: {
          visible: true,
        },
        docked: true,
        item: {
          textAlpha: 1,
        },
        position: "right",
      },
    },
    graphset: [
      {
        type: "line",
        borderColor: "#cccccc",
        borderRadius: "2px",
        borderWidth: "1px",
        utc: true,
        title: {
          text: 'Graph',
          adjustLayout: true,
          marginTop: "20px",
        },
        plot: {
          aspect: "spline",
        },
        plotarea: {
          margin: "dynamic",
        },
        scaleX: {
          values: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21],
          itemsOverlap: true,
          zooming: true,
        },
        scaleY: {
          step: 50,
          guide: {
            lineStyle: "solid",
          },
          label: {
            text: "Value",
          },
        },
        crosshairX: {
          lineColor: "#555",
        },
        // tooltip: {
        //   visible: false,
        // },
        preview: {
          adjustLayout: true,
          live: true,
        },
        series: [
          {
            text: "Value",
            values: [1,22,30,4,51,4,39,2,100, 10, 40],
            "line-color": "orange",
            marker: {
              type: "none",
            },
          },
        ],
      },
    ],
  };
  return (
    <>
      <h3>Chart View</h3>

      <div style={{width: '80vw', marginLeft:'auto', marginRight: 'auto'}}>
      <ZingChart data={chartConfig}/>
      </div>
    </>
  );
};

export default Chart;
