//* import Image
import heroimage from "./assets/heroimg.png";
import about from "./assets/about.png";
import feature1 from "./assets/feature1.png";
import feature1bg from "./assets/feature1_bg.png";
import feature2 from "./assets/feature2.png";
import feature2bg from "./assets/feature2_bg.png";
import feature3 from "./assets/feature3.png";
import feature3bg from "./assets/feature3_bg.png";
import feature4 from "./assets/feature4.png";
import feature4bg from "./assets/feature4_bg.png";
import avatar1 from "./assets/avatar1.png";
import avatar2 from "./assets/avatar2.png";
import avatar3 from "./assets/avatar3.png";
import logo from "./assets/logo.png";
//* import React icon
import { FaGithub, FaInstagram, FaYoutube } from "react-icons/fa6";
import { BsChatDotsFill } from "react-icons/bs";
export const heroData = {
  title: "Soluções em T.I.",
  subtitle:
    "Impulsione o crescimento do seu negócio com nossas tecnologias inovadores e soluções personalizadas.",
  btnText: "Fale Conosco",
  image: heroimage,
};

export const aboutData = {
  image: about,
  title: "Find Out A Little More About Us",
  subtitle:
    "Owing to this to be Vasukam aims to bring people closer to each other as the company’s name is inspired by the Sanskrit phrase ‘Vasudhaiva Kutumbakam’ meaning ‘The World Is One Family’ Vasukam inspires the creators to see the world differently, discover new interests, express themselves and own their space through the application named Ownsfare And More To Come.",
};

export const navigationData = [
  {
    name: "Home",
    href: "#",
  },
  {
    name: "Sobre Nós",
    href: "#aboutus",
  },
  {
    name: "Soluções",
    href: "#solution",
  },
  {
    name: "Contato",
    href: "#contact",
  },
];

export const featuresData = {
  title: "Some Services We Offer",
  subtitle:
    "With our apps you can view the route of your Innovative minds and Building better networks, from our local headquarters to the place where you are. Look for the app now!",
  list: [
    {
      image: feature1,
      imagebg: feature1bg,
      title: "Payment Done",
      description: "Pay with a Visa or PayPal card and without much ado",
      linkText: "Learn more",
      delay: "400",
    },
    {
      image: feature2,
      imagebg: feature2bg,
      title: "Find Your Product",
      description:
        "It’s not unusual to see people coming to Ownsfare to chat, meet up or even work.",
      linkText: "Learn more",
      delay: "400",
    },
    {
      image: feature3,
      imagebg: feature3bg,
      title: "Print Out",
      description:
        "Print out service gives you convenience if someday you need print data, just edit it all and just print it.",
      linkText: "Learn more",
      delay: "700",
    },
    {
      image: feature4,
      imagebg: feature4bg,
      title: "Product Received",
      description: "In our app you can see the delay time of your order...",
      linkText: "Learn more",
      delay: "1300",
    },
  ],
};

export const testimonialsData = [
  {
    image: avatar1,
    name: "Serena",
    web: "rena.com",
    message:
      "Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.",
    delay: "300",
  },
  {
    image: avatar2,
    name: "Natalia",
    web: "natalia.com",
    message:
      "Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.",
    delay: "600",
  },
  {
    image: avatar3,
    name: "Vebin",
    web: "Vebin.com",
    message:
      "Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.",
    delay: "900",
  },
];

export const ctaData = {
  title: "Contact Us Form Here",
  subtitle: "Get limited 1 week free try our features!",
  btnText1: "Learn more",
  btnText2: "Reauest Demo",
};

export const footerData = {
  logo: logo,
  adress: "Product Texas, 234 Bokki Avence Street BPW 99388",
  email: "info@producttexas.project",
  phone: "1-232-7788 (Main)",
  list1: [
    {
      name: "Profile",
      href: "#",
    },
    {
      name: "Features",
      href: "#features",
    },
    {
      name: "Careers",
      href: "#careers",
    },
    {
      name: "DW News",
      href: "#dWNews",
    },
  ],
  list2: [
    {
      name: "Support",
      href: "#support",
    },
    {
      name: "Sign Up",
      href: "#signUp",
    },
    {
      name: "Guide",
      href: "#guide",
    },
    {
      name: "Reports",
      href: "#reports",
    },
    {
      name: "Q & A",
      href: "#q",
    },
  ],
  sociallist: [
    {
      icon: <FaYoutube />,
      href: "#",
    },
    {
      icon: <FaInstagram />,
      href: "#",
    },
    {
      icon: <FaGithub />,
      href: "#",
    },
  ],
};

export const copyrightdata = {
  text: "BESEC, 2024.",
  icon: <BsChatDotsFill />,
};
