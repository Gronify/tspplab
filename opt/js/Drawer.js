export default class Drawer {
  data = [];
  layout = {};

  constructor(result, compare) {
    if (arguments.length === 1) {
      try {
        this.data = [
          {
            opacity: 1,
            type: "scatter3d",
            x: result.x_arr,
            y: result.y_arr,
            z: result.z_arr,
          },

          // {
          //   opacity: 1,
          //   type: "scatter3d",
          //   x: result.x_arr,
          //   y: result.y_arr,
          //   z: result.z_arr,
          // },
        ];

        this.layout = {
          scene: {
            aspectmode: "manual",

            xaxis: {
              nticks: 9,
              range: [Math.min(result.x_arr), Math.max(result.x_arr)],
            },
            yaxis: {
              nticks: 7,
              range: [Math.min(result.y_arr), Math.max(result.y_arr)],
            },
            zaxis: {
              nticks: 10,
              range: [Math.min(result.z_arr), Math.max(result.z_arr)],
            },
          },
        };
      } catch (error) {
        return 1;
      }
    }
    if (arguments.length === 2) {
      this.data = [
        {
          opacity: 1,
          type: "scatter3d",
          x: result.x_arr,
          y: result.y_arr,
          z: result.z_arr,
        },

        {
          opacity: 1,
          type: "scatter3d",
          x: compare.x_arr,
          y: compare.y_arr,
          z: compare.z_arr,
        },
      ];

      this.layout = {
        scene: {
          aspectmode: "manual",

          xaxis: {
            nticks: 9,
            range: [Math.min(result.x_arr), Math.max(result.x_arr)],
          },
          yaxis: {
            nticks: 7,
            range: [Math.min(result.y_arr), Math.max(result.y_arr)],
          },
          zaxis: {
            nticks: 10,
            range: [Math.min(result.z_arr), Math.max(result.z_arr)],
          },
        },
      };
    }
  }

  drawPlot(divId, data) {
    if (arguments.length === 1) {
      try {
        Plotly.newPlot(divId, this.data, this.layout);
        return 0;
      } catch (error) {
        return 1;
      }
    }
    if (arguments.length === 2) {
      try {
        Plotly.newPlot(divId, data, this.layout);
        return 0;
      } catch (error) {
        return 1;
      }
    }
  }
}
