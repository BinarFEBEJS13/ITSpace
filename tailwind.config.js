/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        gradientkanan: "linear-gradient(to right, #073A75, #7805A1)",
        gradientbawah: "linear-gradient(to bottom, #073A75, #7805A1)",
        gradientbutton: "linear-gradient(to right, #A35EFD, #B285EC)",
      },
      colors: {
        biru: ["#073A75"],
        ungu: ["#7805A1"],
        merah: ["#FF0000"],
        hijau: ["#73CA5C"],
        birumuda: ["#E8F1FF"],
      },
      boxShadow: {
        "sm-shadow": ["0px 11px 4px 0px rgba(0, 0, 0, 0.25)"],
        "sm-button": ["0px 4px 9.3px 0px rgba(0, 0, 0, 0.25)"],
      },
    },
  },
  plugins: [],
};
