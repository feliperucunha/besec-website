//* import Image
import heroimage from "./assets/heroimg.png";
import about from "./assets/about.png";
import partners from "./assets/partners.png";
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
import whatsappLogo from "./assets/whatsappLogo.jpg";
import Partner1 from "./assets/3CX.png";
import Partner2 from "./assets/Cisco.png";
import Partner3 from "./assets/Dell.png";
import Partner4 from "./assets/Fortinet.png";
import Partner5 from "./assets/Kaspersky.png";
import Partner6 from "./assets/Microsoft.png";
import Partner7 from "./assets/Skaymail.png";
import Partner8 from "./assets/Veeam.png";
import Partner9 from "./assets/Wispot.png";

//* import React icon
import { FaGithub, FaInstagram, FaYoutube } from "react-icons/fa6";
import { BsChatDotsFill } from "react-icons/bs";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";

export const heroData = {
  title: "Soluções em T.I.",
  subtitle:
    "Impulsione o crescimento do seu negócio com nossas tecnologias inovadores e soluções personalizadas.",
  btnText: "Fale Conosco",
  image: heroimage,
};

export const aboutData = {
  image: about,
  title: "SOBRE NÓS",
  subtitle: `A BESEC (Be Secure) é uma empresa de soluções integradas de Tecnologia da Informação e Comunicação Empresarial sediada na cidade de Curitiba/PR, com mais de 7 anos de experiência no mercado e uma equipe experiente e capacitada de técnicos e analistas certificados. </br></br>
    Com um amplo portfólio de serviços, nos dedicamos a otimizar os resultados empresariais a partir da estruturação da rede de TI, com ganhos operacionais, garantia de segurança e prevenção contra falhas e ataques.
    `,
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
  title: "SERVIÇOS",
  subtitle: "",
  list: [
    {
      text: "Suporte TI",
      Icon: SiIcons.SiJavascript,
      doc: "https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/What_is_JavaScript",
    },
    {
      text: "Cibersegurança",
      Icon: SiIcons.SiTypescript,
      doc: "https://www.typescriptlang.org/",
    },
    {
      text: "Firewall",
      Icon: FaIcons.FaReact,
      doc: "https://pt-br.reactjs.org/docs/getting-started.html",
    },
    {
      text: "Telefonia",
      Icon: SiIcons.SiRedux,
      doc: "https://redux.js.org/",
    },
    {
      text: "Conectividade",
      Icon: SiIcons.SiNextdotjs,
      doc: "https://pt-br.reactjs.org/docs/getting-started.html",
    },
    {
      text: "Servidores",
      Icon: FaIcons.FaEmber,
      doc: "https://pt-br.reactjs.org/docs/getting-started.html",
    },
    {
      text: "Antivírus",
      Icon: SiIcons.SiAntdesign,
      doc: "https://pt-br.reactjs.org/docs/getting-started.html",
    },
    {
      text: "Monitoramento",
      Icon: FaIcons.FaBootstrap,
      doc: "https://pt-br.reactjs.org/docs/getting-started.html",
    },
    {
      text: "LGPD",
      Icon: SiIcons.SiJquery,
      doc: "https://pt-br.reactjs.org/docs/getting-started.html",
    },
    {
      text: "Consultoria",
      Icon: SiIcons.SiStyledcomponents,
      doc: "https://styled-components.com/docs",
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
  email: "contato@besec.com.br",
  phone: "(41) 4042-1023",
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

const currentYear = new Date().getFullYear();

export const accomplishmentsData = [
  { number: currentYear - 2017, text: "Anos de atuação" },
  { number: 200, text: "Clientes satisfeitos" },
  { number: 120, text: "Projetos no último ano" },
];

export const whatsappData = {
  accountName: "Suporte BESEC",
  statusMessage: "Responde em até uma hora",
  chatMessage: "Olá, como podemos ajudar?",
  placeholder: "Digite uma mensagem...",
  phoneNumber: "+554134117173",
  message: "Olá",
  avatar: whatsappLogo,
};

export const partersData = {
  image: partners,
  title: "NOSSOS PARCEIROS",
  partersLogos: [
    Partner1,
    Partner2,
    Partner3,
    Partner4,
    Partner5,
    Partner6,
    Partner7,
    Partner8,
    Partner9,
  ],
};

export const instagramData = {
  title: "PUBLICAÇÕES",
  subtitle: "Fique por dentro das novidades!",
};

export const testimonials = {
  title: "DEPOIMENTOS DE CLIENTES",
};

export const cookieData = {
  title: "Estamos usando cookies para melhorar sua experiência!",
  description:
    "Ao clicar em Permitir, você estará de acordo com o uso de todos os cookies.",
};

export const formData = {
  title: "FALE CONOSCO",
  phoneNumber: "(41) 4042-1023",
  whatsappNumber: "(41) 3411-7173",
  emailData: "contato@besec.com.br",
  address: "Rua Morretes, n 285, Sala 71",
  addressCity: "Curitiba-PR",
};
