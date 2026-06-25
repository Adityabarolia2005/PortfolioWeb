import PageHeading from "../components/PageHeading";
import Description from "../components/Description";
import { FaLinkedin } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

function LetsConnect() {
  return (
    <section id="contacts" className="w-full max-w-[1200px] mx-auto my-6 space-y-4 px-4 h-auto ">

      <PageHeading className="text-center ">Lets Connect</PageHeading>
      <div className="flex flex-col  md:flex-row w-full my-mar p-6 rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl shadow-2xl shadow-slate-900/20 space-y-4">
        <div className="flex-1 text-center md:text-left">
          <p className="text-3xl font-heading text-white  mb-3">
            Open to
            <br />
            Opportunities
          </p>
          <Description className="max-w-xl m-2">
            Currently looking for full-time roles and freelance projects. If you
            have an interesting project or opportunity, feel free to reach out!
          </Description>

          <div className="mt-6 flex  flex-row gap-4 justify-center">
            <button className="sm: text-center w-[45%] rounded-md bg-sky-500 px-4 py-3 text-white font-btn font-semibold hover:bg-sky-400 transition">
              Email me
            </button>
            <button className="sm:text-center w-[45%] rounded-md bg-white/10 text-white px-4 py-3 font-btn font-semibold hover:text-black transition">
              Download Resume
            </button>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center md:justify-end gap-4">
          <a
            href="mailto:adityabarolia@gmail.com"
            target="_blank"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white text-2xl hover:bg-white/20 hover:border-white/30 hover:text-sky-400  hover:scale-105 cursor-pointer"
          >
            <MdOutlineMail />
          </a>
          <a
            href="https://www.linkedin.com/in/aditya-barolia-22bb12294/"
            target="_blank"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white text-2xl hover:bg-white/20 hover:border-white/30 hover:text-sky-400  hover:scale-105 cursor-pointer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Adityabarolia2005"
            target="_blank"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white text-2xl hover:bg-white/20 hover:border-white/30 hover:text-sky-400  hover:scale-105 cursor-pointer"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
}

export default LetsConnect;
