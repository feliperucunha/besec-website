import React from "react";
//import about data
import { formData } from "../data";
import emailjs from "emailjs-com";
import { useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { TfiLocationPin } from "react-icons/tfi";
const TalkToUsForm = () => {
  //About data Content
  const {
    title,
    phoneNumber,
    whatsappNumber,
    address,
    addressCity,
    emailData,
  } = formData;
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [buttonLoading, setButtonLoading] = React.useState(false);
  const [buttonText, setButtonText] = React.useState("Enviar Mensagem");

  const nameHandler = (e) => setName(e.target.value);
  const emailHandler = (e) => setEmail(e.target.value);
  const phoneHandler = (e) => setPhone(e.target.value);
  const messageHandler = (e) => setMessage(e.target.value);

  // const navigate = useNavigate();

  useEffect(() => {
    if (buttonText === "Enviado!" || buttonText === "Falha no Envio!") {
      setTimeout(function () {
        setButtonText("Enviar Mensagem");
      }, 2000);
    }
  }, [buttonText]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Enviando");

    const templateParams = {
      name: name,
      email: email,
      phone: phone,
      message: message,
    };
    emailjs
      .send(
        "service_smcvuxr",
        "template_cg3tfgk",
        templateParams,
        "WBxSfk0KmotE8sAva"
      )
      .then((response) => {
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setButtonText("Enviado!");
      })
      .catch((error) => {
        console.error(error);
        setButtonText("Falha no Envio!");
      });
  };
  return (
    <section
      id="contact"
      className="my-[20px] flex justify-center items-center py-20"
      data-aos="fade-up"
      data-aos-offset="150"
    >
      <div className="w-[90%] md:w-full md:min-w-[600px] grid grid-cols-1.5fr gap-2 bg-white p-1 rounded-md h-auto md:grid-cols-2 md:w-[90%] md:max-w-full md:min-w-0 md:gap-0">
        <div className="bg-[#08083f] rounded-[7px] relative p-[30px] flex flex-col items-center h-auto pb-[100px] md:pb-[80px] pt-2">
          <div className="flex flex-col items-center">
            <p className="text-center text-white md:text-[48px] font-bold text-[30px]">
              {title}
            </p>
            {/* <p className="text-center text-white text-[12px] leading-[18px]">
              Fill up the form and our team will get back to you within 24 hours
            </p> */}
          </div>

          <div>
            <a
              href="tel:+233543201893"
              className="flex w-[200px] mt-[50px] cursor-pointer no-underline"
            >
              
              <FiPhone className="w-6 h-6 fill-white" />
              <div className="text-white text-[15px] ml-[10px]">
                {phoneNumber}
              </div>
            </a>
            <a
              href="tel:+233543201893"
              className="flex w-[200px] mt-[10px] cursor-pointer no-underline"
            >
              <FaWhatsapp className="w-6 h-6 fill-white" />
              <div className="text-white text-[15px] ml-[10px]">
                {whatsappNumber}
              </div>
            </a>

            <a
              href="mailto:aljay3334@gmail.com"
              className="flex w-[200px] mt-[10px] cursor-pointer no-underline"
            >
              
              <MdOutlineMailOutline className="w-6 h-6 fill-white" />
              <div className="text-white text-[15px] ml-[10px]">{emailData}</div>
            </a>

            <div className="flex pt-2">
            <TfiLocationPin className="w-6 h-6 fill-white" />
            <div className="text-white text-[15px] ml-[10px]">{address}</div>
            </div>

            <div className="text-white text-[15px] ml-[35px]">
              {addressCity}
            </div>
          </div>
        </div>
        <form className="relative p-2 pb-[100px]" onSubmit={handleSubmit}>
          <div className="border-2 border-transparent w-[90%] flex flex-col pl-2">
            <div class="relative">
              <input
                type="text"
                id="floating_outlined"
                class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-black bg-transparent rounded-lg border border-black appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={name}
                onChange={nameHandler}
              />
              <label
                for="floating_outlined"
                class="absolute text-sm text-black dark:text-black duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                Nome
              </label>
            </div>
          </div>

          <div className="border-2 border-transparent w-[90%] flex flex-col pl-2 mt-4">
            <div class="relative">
              <input
                type="text"
                id="floating_outlined"
                class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-black bg-transparent rounded-lg border border-black appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={phone}
                onChange={phoneHandler}
              />
              <label
                for="floating_outlined"
                class="absolute text-sm text-black dark:text-black duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                Telefone
              </label>
            </div>
          </div>

          <div className="border-2 border-transparent w-[90%] flex flex-col pl-2 mt-4">
            <div class="relative">
              <input
                type="text"
                id="floating_outlined"
                class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-black bg-white rounded-lg border border-black appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={email}
                onChange={emailHandler}
              />
              <label
                for="floating_outlined"
                class="absolute text-sm text-black dark:text-black duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                Email
              </label>
            </div>
          </div>

          <div className="border-2 border-transparent w-[90%] flex flex-col pl-2 mt-4">
            <label className="mb-1">Mensagem</label>
            <textarea
              required
              placeholder="Escreva sua mensagem"
              value={message}
              onChange={messageHandler}
              className="text-[#333] w-full text-[15px] py-2 border-b-[1px] border-b-[rgb(100,21,173)] outline-none"
            />
          </div>

          <button
            type="submit"
            className={`absolute bottom-5 right-5 py-2 px-6 bg-[#08083f] text-white rounded-[5px] cursor-pointer ${
              buttonText === "Enviando" ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={buttonLoading}
          >
            {buttonText}
          </button>
        </form>
      </div>
    </section>
  );
};

export default TalkToUsForm;
