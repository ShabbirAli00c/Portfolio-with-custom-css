import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/Hero";
import About from "./about/page";
import Contact from "./contact/page";

export default function Home() {
  return (
  <div>
    <Hero />
    <About/>
    <Contact />
  </div>
  );
}
