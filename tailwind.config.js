/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: '"Poppins", sans-serif',
      },
      colors: {
        "basic-100": "#FCFCFC",
        "basic-200": "#D9D9D9",
        "basic-300": "#F5F5F6",
        "basic-400": "#383636",
        "basic-500": "#efeeee",
        "basic-600": "#949496",
        "basic-700": "#DCE3E3",
        "basic-900": "#2C2C2F",
        "primary-100": "#1784E3",
        "primary-200": "#1269B5",
        "secondary-200": "#efefef",
        "additional-100": "#FCF8BC",
        "additional-200": "#d2f0fd",
        "additional-300": "#001A72",
        "additional-400": "#DCEB39",
      },
      boxShadow: {
        primary: "0px 4px 4px 0px #0000004D;",
        secondary: "0px 4px 10px 0px #2C2C2F40",
        notes: "-10px 0px 15px 0px #00000040;",
        tile: "3.56px 3.56px 10.68px 0px #0000001A;",
      },
      keyframes: {
        pulsePositive: {
          "0%": { boxShadow: "0 0 0 0 rgba(74, 222, 128, 0.8)" },
          "70%": { boxShadow: "0 0 0 10px rgba(74, 222, 128, 0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(74, 222, 128, 0)" },
        },
        pulseInformative: {
          "0%": { boxShadow: "0 0 0 0 rgba(56, 189, 248, 0.8)" },
          "70%": { boxShadow: "0 0 0 10px rgba(56, 189, 248, 0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(56, 189, 248, 0)" },
        },
        pulseNotice: {
          "0%": { boxShadow: "0 0 0 0 rgba(251, 191, 36, 0.8)" },
          "70%": { boxShadow: "0 0 0 10px rgba(251, 191, 36, 0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(251, 191, 36, 0)" },
        },
        pulseNegative: {
          "0%": { boxShadow: "0 0 0 0 rgba(248, 113, 113, 0.8)" },
          "70%": { boxShadow: "0 0 0 10px rgba(248, 113, 113, 0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(248, 113, 113, 0)" },
        },
      },
      animation: {
        "pulse-positive": "pulsePositive 1.5s",
        "pulse-informative": "pulseInformative 1.5s",
        "pulse-notice": "pulseNotice 1.5s ",
        "pulse-negative": "pulseNegative 1.5s ",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".centered-container": {
          paddingLeft: "20px",
          paddingRight: "20px",
          maxWidth: "1360px",
          marginLeft: "auto",
          marginRight: "auto",
          "@screen md": {
            paddingLeft: "40px",
            paddingRight: "40px",
          },
        },
      });
    },
  ],
};
