import React from "react";
//import about data
import { formData } from "../data";
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

  const nameHandler = (e) => setName(e.target.value);
  const emailHandler = (e) => setEmail(e.target.value);
  const phoneHandler = (e) => setPhone(e.target.value);
  const messageHandler = (e) => setMessage(e.target.value);

  // const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonLoading(true);
    const response = await fetch("https://formspree.io/f/<your-form-id>", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, phone, message }),
    });

    if (response.ok) {
      // navigate("/success");
      setButtonLoading(false);
    } else {
      alert("Failed to submit form");
      setButtonLoading(false);
    }
  };
  return (
    <section
      id="contact"
      className="my-[20px] flex justify-center items-center py-20"
      data-aos="fade-up"
      data-aos-offset="150"
    >
      <div className="w-full min-w-[600px] grid grid-cols-1.5fr gap-2 bg-white p-1 rounded-md h-auto md:grid-cols-2 md:w-[90%] md:max-w-full md:min-w-0 md:gap-0">
        <div className="bg-[#08083f] rounded-[7px] relative p-[30px] flex flex-col items-center h-auto pb-[100px] md:pb-[80px]">
          <div className="flex flex-col items-center">
            <p className="text-center text-white text-[18px] font-bold">
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
              {/* <Icon.Phone size={15} color="rgb(252, 113, 137)" /> */}
              <div className="text-white text-[15px] ml-[10px]">
                {phoneNumber}
              </div>
            </a>

            <a
              href="mailto:aljay3334@gmail.com"
              className="flex w-[200px] mt-[10px] cursor-pointer no-underline"
            >
              {/* <Icon.Mail size={15} color="rgb(252, 113, 137)" /> */}
            </a>
            <div className="text-white text-[15px] ml-[10px]">{emailData}</div>

            <div className="text-white text-[15px] ml-[10px]">{address}</div>
            <div className="text-white text-[15px] ml-[10px]">
              {addressCity}
            </div>
          </div>

          <div className="relative mt-[30px]">
            <div className="h-[50px] w-[50px] bg-[rgb(100,21,173)] rounded-full z-20"></div>
            <div className="absolute left-[10px] bg-[rgb(252,113,137)] rounded-full h-[30px] w-[30px]"></div>
          </div>

          <div className="flex justify-center absolute bottom-[30px] cursor-pointer">
            <a
              href="https://www.facebook.com/profile.php?id=100021937291259"
              className="w-[35px] h-[35px] rounded-full flex justify-center items-center hover:bg-[rgb(252,113,137)]"
            >
              {/* <Icon.Facebook color="#fff" size={20} /> */}
            </a>
            <a
              href="https://www.instagram.com/_allenjones/"
              className="w-[35px] h-[35px] rounded-full flex justify-center items-center hover:bg-[rgb(252,113,137)] ml-[10px]"
            >
              {/* <Icon.Instagram color="#fff" size={20} /> */}
            </a>
            <a
              href="https://www.linkedin.com/in/allen-jones-b799b7171/"
              className="w-[35px] h-[35px] rounded-full flex justify-center items-center hover:bg-[rgb(252,113,137)] ml-[10px]"
            >
              {/* <Icon.Linkedin color="#fff" size={20} /> */}
            </a>
          </div>
        </div>
        <form className="relative p-2 pb-[100px]" onSubmit={handleSubmit}>
          <div className="border-2 border-transparent w-[90%] flex flex-col pl-2">
            <label className="mb-1">Nome</label>
            <input
              type="text"
              required
              placeholder="João da Silva"
              value={name}
              onChange={nameHandler}
              className="text-[#333] w-full text-[15px] py-2 border-b-[1px] border-b-[rgb(100,21,173)] outline-none"
            />
          </div>

          <div className="border-2 border-transparent w-[90%] flex flex-col pl-2 mt-4">
            <label className="mb-1">Telefone</label>
            <input
              type="tel"
              required
              placeholder="(41) 93333-3333"
              value={phone}
              onChange={phoneHandler}
              className="text-[#333] w-full text-[15px] py-2 border-b-[1px] border-b-[rgb(100,21,173)] outline-none"
            />
          </div>

          <div className="border-2 border-transparent w-[90%] flex flex-col pl-2 mt-4">
            <label className="mb-1">Email</label>
            <input
              type="email"
              required
              placeholder="teste@gmail.com"
              value={email}
              onChange={emailHandler}
              className="text-[#333] w-full text-[15px] py-2 border-b-[1px] border-b-[rgb(100,21,173)] outline-none"
            />
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
              buttonLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={buttonLoading}
          >
            {buttonLoading ? "Carregando..." : "Enviar Mensagem"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default TalkToUsForm;
