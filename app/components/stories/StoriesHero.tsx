"use client";
import YellowLine from "../common/YellowLine";
import { motion } from "framer-motion";
export default function StoriesHero() {
  return (
    <div className="flex justify-center flex-col items-center">
      <motion.p
        className="font-bold text-center text-4xl leading-loose text-sctblue"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        Our Success Stories
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <YellowLine />
      </motion.div>

      <motion.div
        className=" font-extralight text-center text-lg md:text-xl mb-16 leading-loose text-black"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        Over the years, She Codes Too bootcamps graduates have successfully
        transitioned into careers as web developers or related fields, often
        securing roles within just a few months of graduating. With over 90% of
        our alumni placed in tech jobs, their journeys are a testament to the
        power of dedication and skill development. Read their stories here.
      </motion.div>
    </div>
  );
}
