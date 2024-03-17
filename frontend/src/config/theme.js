export const buildCoordinates = len => {
  const [width, height, radius, conversion, deltaAngle] = [
    380,
    120,
    450,
    Math.PI / 180,
    Number((360 / len).toFixed(8)),
  ];
  let angle = 0;
  const deltaQuadrant = 90;
  const coords = new Array(len).fill([]).map(() => {
    let [x, y] = [
      Math.round(radius * Math.sin(angle * conversion)),
      Math.round(radius * Math.cos(angle * conversion)),
    ];

    const padding = 287;
    const divHeight = 322 / 2;
    if (angle > 0 && angle <= deltaQuadrant * 2) {
      const deltaAngle = Number((deltaQuadrant - angle).toFixed(8));
      const deltaY = Math.round(radius * Math.sin(deltaAngle * conversion));
      [x, y] = [
        (deltaY + height * 0.5 > padding && deltaY > 0) ||
        (deltaY < 0 && Math.abs(deltaY + height * 0.5) < divHeight)
          ? 250
          : Math.round(radius * Math.cos(deltaAngle * conversion)) -
            width * 0.3,
        deltaY,
      ];
    } else if (angle > 0) {
      const quadrant = deltaQuadrant * 3;
      const deltaAngle = Number((angle - quadrant).toFixed(8));
      const deltaX =
        Math.round(radius * Math.cos(deltaAngle * conversion)) + width * 0.6;
      const deltaY = Math.round(radius * Math.sin(deltaAngle * conversion));

      [x, y] = [
        (deltaY + height * 0.5 > padding && deltaY > 0) ||
        (deltaY < 0 && Math.abs(deltaY + height * 0.5) < divHeight)
          ? -630
          : -deltaX,
        deltaY,
      ];
    }
    if (y < 0) {
      y = radius + Math.abs(y);
    }
    angle += deltaAngle;
    return [x, y];
  });

  return coords;
};

export const translatesArray = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
  .map(buildCoordinates)
  .map(coords =>
    coords.reduce(
      ({ x, y }, [xCoords, yCoords]) => ({
        x: {
          ...x,
          [xCoords]: `${(xCoords / 16).toFixed(4)}rem`,
        },
        y: {
          ...y,
          [yCoords]: `${(yCoords / 16).toFixed(4)}rem`,
        },
      }),
      { x: {}, y: {} }
    )
  )
  .map(({ x, y }) => {
    let keysX = Object.keys(x);
    let keysY = Object.keys(y);
    keysX = keysX.filter(value => Number(value) !== 0);
    keysY = keysY.filter(value => Number(value) !== 0);
    let xCoords = {};
    let yCoords = {};
    keysX.forEach(key => {
      xCoords[key] = x[key];
    });
    keysY.forEach(key => {
      yCoords[key] = y[key];
    });
    return {
      x: xCoords,
      y: yCoords,
    };
  });

const theme = {
  colors: {
    Neutral: {
      50: "#f0f3f5",
      100: "#e6eef2",
      200: "#d0e3ed",
      300: "#adcfe0",
      400: "#8bb6cc",
      500: "#6097b2",
      600: "#376e8a",
      700: "#164c66",
      800: "#062d40",
      900: "#01151f",
      1000: "rgba(255,255,255,.8)",
    },
    Primary: {
      50: "#6494fa",
      300: "#1a56d6",
      500: "#0047ab",
      700: "#0c2966",
      900: "#061433",
      1000: "#4352B1",
    },
    Secondary: {
      50: "#faffd7",
      300: "#ecf2c2",
      500: "#e1ee90",
      700: "#daf14b",
      900: "#c3e200",
    },
    Accent: {
      50: "#f9f871",
      200: "#ff8069",
      300: "#ffbd57",
      500: "#ff8069",
      700: "#f0508b",
      900: "#a842a8",
      1000: "#F0DF5C",
    },
    Success: {
      50: "#ecfdf5",
      300: "#6ee7b7",
      500: "#10b981",
      700: "#047857",
      900: "#064e3b",
    },
    Warning: {
      50: "#fffbeb",
      300: "#fcd34d",
      500: "#f59e08",
      700: "#b45309",
      900: "#78350f",
    },
    Error: {
      50: "#fef2f2",
      300: "#f39ea2",
      500: "#ef4444",
      700: "#b91c1c",
      900: "#7f1d1d",
    },
    Shades: { 0: "#ffffff", 50: "#262626", 100: "#000000" },
    transparent: "transparent",
  },
  fontSize: {
    xs: "0.6875rem",
    sm: "0.75rem",
    base: "0.875rem",
    lg: "1rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "2rem",
    "3.5xl": "2.25rem",
    "4xl": "2.5rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
  },
  fontFamily: {
    montserrat: "Montserrat",
    raleway: "Raleway",
    inter: "Inter",
    roboto: "Roboto",
    ubuntu: "Ubuntu",
  },
  borderRadius: {
    none: "0",
    xs: "0.125rem",
    sm: "0.25rem",
    default: "0.3125rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1.25rem",
    "3xl": "1.875rem",
    "4xl": "2.5rem",
    "5xl": "3.75rem",
    "6xl": "5rem",
    full: "9999px",
  },
  extend: {
    maxWidth: {
      container: "73.75rem",
      btn: "10.3125rem",
      "sm-md": "21.875rem",
      "sm-lg": "30rem",
      "md-lg": "31.25rem",
      "xl-md": "40.625rem",
      "3.25xl": "50.8125rem",
      "3.4xl": "53.125rem",
      "3.5xl": "53.625rem",
    },
    gap: {
      sm: "7.5rem",
      15: "3.75rem",
      30: "7.5rem",
    },
    width: {
      sm: "30rem",
      smx2: "36.25rem",
      med: "66.3rem",
    },
    height: {
      sm: "21.63rem",
      smx2: "26.125rem",
      med: "66.6rem",
    },
    lineHeight: {
      tighter: "1.2",
    },
    flexBasis: {
      "689/1180": "58.389831%",
    },
    boxShadow: {
      button: "0 2px 8px 0 rgba(0, 0, 0, 0.12)",
    },
    letterSpacing: {
      "medium-wide": "0.06em",
      wide: ".84px",
    },
    padding: {
      1.75: "0.4375rem",
      2.25: "0.5625rem",
      2.75: "0.6875rem",
      11.25: "3.3125rem",
      15: "3.75rem",
      17: "4.1875rem",
      18: "4.5625rem",
      20.25: "5.0625rem",
      20.5: "5.125rem",
      24.5: "6.125rem",
      31: "7.625rem",
    },
    borderWidth: {
      1.5: "1.5px",
    },
    spacing: {
      2.25: "0.5625rem",
      4.5: "1.125rem",
      25: "6.25rem",
      26: "6.5rem",
      43: "10.75rem",
      50: "12.5rem",
    },
    rotate: {
      50: "50deg",
    },
    strokeWidth: {
      4: "4",
    },
    scale: {
      10: ".10",
    },
    backgroundImage: {
      about: "url('../images/background/about.png')",
      connect: "url('../images/background/connect.jpeg')",
      "next-steps": "url('../images/background/next-steps.jpg')",
      events: "url('../images/background/events.jpeg')",
      watch: "url('../images/background/watch.jpeg')",
      give: "url('../images/background/give.jpeg')",
      new: "url('../images/background/new.jpeg')",
    },
    screens: {
      xs: "375px",
    },
    gridTemplateColumns: {
      49: "repeat(49, minmax(0, 1fr))",
      59: "repeat(59, minmax(0, 1fr))",
    },
    gridColumn: {
      "span-22": "span 22 / span 22",
      "span-24": "span 24 / span 24",
      "span-27": "span 27 / span 27",
      "span-29": "span 29 / span 29",
      "span-49": "1 / span 49",
    },
    gridColumnStart: {
      26: "26",
      33: "33",
    },
    translate: {
      ...translatesArray.reduce(
        (accumulator, { x, y }) => ({
          ...accumulator,
          ...x,
          ...y,
        }),
        {}
      ),
    },
  },
};

export default theme;
