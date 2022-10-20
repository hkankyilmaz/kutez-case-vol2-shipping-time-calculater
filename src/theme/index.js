import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html{ 
   overflow-x: hidden;
   font-size:14px ;
   @media (max-width:1400px) {
    font-size:13px ;
    }
   @media (max-width:1200px) {
    font-size:12px ;
   }
   @media (max-width:1100px) {
    font-size:10px ;
   }
   @media (max-width:650px) {
    font-size:9px ;
   }
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    overflow-x: hidden;
    transition:background-color 0.3s ease ;
    position: relative;
  }
 `;

export function fontStack(size = false, color = false, weight = false) {
  return `
        ${size ? "font-size: " + size + ";" : ""}
        ${color ? "color: " + color + ";" : ""}
        ${weight ? "font-weight: " + weight + ";" : ""}
      
    `;
}

export const theme = {
  colors: {
    text: {
      text: "#2B2E39",
      placeHolder: "#8D9092",
    },
    background: {
      primary: "#2414DB",
      secondary: "#AC6EFF",
    },
  },
  fontSizes: {
    smaller: "2.25rem", // 27pt= 2.25rem
    small: "2.41rem", // 29pt = 2.41rem
    regular: "3.58rem", // 43pt = 3.58rem
    regularBig: "4.58rem", //55pt = 4.58rem
    bigger: "5.58rem", // 70pt = 5.58rem
    biggest: "7.08rem", // 85pt=7.08rem
  },
  fontWeights: {
    thin: "100",
    extralight: "200",
    light: "300",
    normal: "400",
    medium: "500",
    semiBold: "600",
    bold: "700",
    extraBold: "800",
    heavy: "900",
  },
  gutters: {
    smaller: "0.5rem",
    small: "1rem",
    smallBig: "1.25rem",
    regular: "1.5rem",
    regularBig: "1.75rem",
    big: "2rem",
    large: "2.25rem",
    largest: "2.5rem",
    largestBig: "3rem",
    xlargest: "4rem",
  },
};
