import Card from "../Contact/Card";
import { MdOutlineMail } from "react-icons/md";
import { BsGithub, BsInstagram, BsTiktok } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Muhammad Haikal — AI Engineer & Data Scientist</title>
        <meta
          name="description"
          content="Get in touch with Muhammad Haikal for collaborations, freelance opportunities, or just to connect. Available via Email, LinkedIn, GitHub, Instagram, and TikTok."
        />
        <link rel="canonical" href="https://muhammadhaikal.vercel.app/contact" />
        <meta property="og:url" content="https://muhammadhaikal.vercel.app/contact" />
        <meta property="og:title" content="Contact Muhammad Haikal — AI Engineer & Data Scientist" />
      </Helmet>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="pb-16"
      >
        {/* Header — unified with other pages */}
        <div className="pt-2">
          <div className="flex items-center gap-2 mb-1">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs uppercase tracking-widest font-semibold text-emerald-600 dark:text-emerald-400">
              Get In Touch
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50">
            Contact
          </h1>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
            Let's connect and build something great together
          </p>
          <hr className="w-full border-t border-neutral-200 dark:border-neutral-800 my-6" />
        </div>

        <p className="mb-5 text-base font-semibold">Find me on</p>

        {/* Gmail Card */}
        <Card
          title="Stay in Touch"
          description="Reach out via email for any inquiries or collaborations."
          buttonText="Go to Gmail"
          buttonLink="mailto:h0325168@gmail.com"
          bgClass="bg-gradient-to-br from-red-700 to-red-600 mb-5"
          icon={<MdOutlineMail className="w-10 h-10 text-white" />}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
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
    </>
  );
}
