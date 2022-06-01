
export const lightTheme = {
  bg: {
    button_primary: "#271AC1",
    muted: "#F6F7F9",
    default_1:"#1F0041",
    default_2: "#0E0127",
    primary: "#FFFFFF",

  },
  text:{
    primary: "#FFFFFF",
    inverted: "#000000",
    muted: "#707070",
    active_link: "#FF00F7",
    blog_main: "#1E232C",
    secondary_button: "#7C0ED5"
  },
  button:{
    primary: "#271AC1",
    secondary: "#7C0ED5",
  },
  circle:{
    bottom: "#211539"
  },
  moon:{
    moon_1: "#7F1E7B", 
    moon_2: "#203C71",
    moon_3: "#7C4029",
  },

  paper:{
    paper_1: "#970f93",
    paper_2: "rgba(0, 255, 255, 0.315)",
    paper_3: "#7f4129",
  },

  font:{
    content: "16px"
  },
  
  weight: {
    normal: 400,
  },
  screen:{
    tablet:"768px",
    phone:"480px",
    small_screen:"1024px"
  }
  
}


export type ThemeType = typeof lightTheme

