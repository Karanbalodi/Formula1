import { convertToOrdinal } from "@/utils";

export const scatterPlotConstants = {
  scales: {
    x: {
      title: {
        display: true,
        text: "Starting Position",
      },
      beginAtZero: true,
    },
    y: {
      title: {
        display: true,
        text: "Finishing Position",
      },
      beginAtZero: true,
      reverse: true,
    },
  },
  plugins: {
    legend: {
      position: "bottom" as any,
      onClick: () => {},
    },
    tooltip: {
      callbacks: {
        label: (tooltipItem: any) => {
          return [
            `${tooltipItem.dataset.label}`,
            `Grid: ${tooltipItem.raw.x}`,
            `Finish: ${tooltipItem.raw.y}`,
          ];
        },
      },
    },
  },
};

export const fastestLapConstants = {
  indexAxis: "y" as any, // This makes the bar chart horizontal
  scales: {
    x: {
      title: {
        display: true,
        text: "Average Speed (km/h)",
      },
    },
    y: {
      title: {
        display: true,
        text: "Driver",
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: (context: any) => `${context.raw} km/h`,
      },
    },
  },
};

export const lapChartOptions = {
  scales: {
    x: { title: { display: true, text: "Lap Number" } },
    y: { title: { display: true, text: "Position" }, reverse: true },
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        title: (tooltipItem: any) => {
          console.log(tooltipItem);
          return `Lap Time: ${tooltipItem?.[0]?.raw?.lapTime}`;
        },
        label: (tooltipItem: any) =>
          ` On Lap ${tooltipItem.raw.x}, ${
            tooltipItem.dataset.label
          } was at ${convertToOrdinal(Number(tooltipItem.raw.y))} Position`,
      },
    },
  },
};
