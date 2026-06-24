import PageHeading from "../components/PageHeading";
import Description from "../components/Description";
import { FaLinkedin } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

function LetsConnect() {
  return (
    <div className="max-w-[782.075px] mx-auto my-6 space-y-3">
      <p className="text-md font-medium font-btn text-purple-950">// get in touch</p>
      <PageHeading>Lets Connect</PageHeading>
      <div className="flex w-full  h-[450.0 px] p-6 rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl shadow-2xl shadow-slate-900/20 m-4">
        <div className="flex-1">
          <p className="text-3xl font-heading text-white">
            Open to
            <br />
            Opportunities
          </p>
          <Description className="max-w-xl">
            Currently looking for full-time roles and freelance projects. If you
            have an interesting project or opportunity, feel free to reach out!
          </Description>

          <div className="mt-6 flex flex-col flex-wrap gap-4">
            <button className="min-w-[181.0 px] rounded-md bg-sky-500 px-4 py-3 text-white font-btn font-semibold hover:bg-sky-400 transition">
              Email me
            </button>
            <button className="min-w-[181.0 px] rounded-md bg-white/10 text-white px-4 py-3 font-btn font-semibold hover:text-black transition">
              Download Resume
            </button>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-end gap-4">
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
    </div>
  );
}

export default LetsConnect;
