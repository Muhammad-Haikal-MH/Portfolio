import Card from "../Contact/Card";
import { MdOutlineMail } from "react-icons/md";
import { BsGithub, BsInstagram, BsTiktok } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="min-h-screen  p-6 md:p-8"
    >
      <h1 className="text-2xl font-semibold mb-6">Contact</h1>
      <p className="text-gray-600 dark:text-gray-400 text-[17px] my-5">
        Let`s get in touch
      </p>
      <hr className="w-full border-1 border-dashed mb-10"></hr>
      <p className="mb-5 text-[18px] font-semibold">Find me on</p>

      {/* Gmail Card */}
      <Card
        title="Stay in Touch"
        description="Reach out via email for any inquiries or collaborations."
        buttonText="Go to Gmail"
        buttonLink="mailto:h0325168@gmail.com"
        bgClass="bg-gradient-to-br from-red-700 to-red-600 mb-5"
        icon={<MdOutlineMail className="w-10 h-10 text-white" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Instagram Card */}
        <Card
          title="Follow My Journey"
          description="Stay updated with my latest posts and stories on Instagram."
          buttonText="Go to Instagram"
          buttonLink="https://www.instagram.com/muhammad.haikal_07?igsh=N3VhZWE2YXF0YjNo"
          bgClass="bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400"
          icon={<BsInstagram className="w-10 h-10 text-white" />}
        />

        {/* LinkedIn Card */}
        <Card
          title="Let's Connect"
          description="Connect for collaboration or explore my professional experience."
          buttonText="Go to Linkedin"
          buttonLink="https://www.linkedin.com/in/muhammad-haikal-433681219?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          bgClass="bg-gradient-to-br from-blue-800 to-blue-600"
          icon={<BsLinkedin className="w-10 h-10 text-white" />}
        />

        {/* TikTok Card */}
        <Card
          title="Join the Fun"
          description="Follow me on TikTok for entertaining and engaging content."
          buttonText="Go to Tiktok"
          buttonLink="https://www.tiktok.com/@taikucink00?_t=ZS-8wSqM91yUrt&_r=1"
          bgClass="bg-gradient-to-br from-gray-700 to-gray-900"
          icon={<BsTiktok className="w-10 h-10 text-white" />}
        />

        {/* GitHub Card */}
        <Card
          title="Explore the Code"
          description="Explore the source code for all my projects on GitHub."
          buttonText="Go to Github"
          buttonLink="https://github.com/Muhammad-Haikal-MH"
          bgClass="bg-gradient-to-br from-gray-900 to-blue-900"
          icon={<BsGithub className="w-10 h-10 text-white" />}
        />
      </div>
    </motion.div>
  );
}
