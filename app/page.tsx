import styles from "@/app/styles.module.css";
import { bungeeOutline } from "./fonts";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.home}>
      <div className="flex sm:flex-row flex-col justify-between items-center pb-6 px-10 sm:gap-0 gap-6">
        <div className="text-4xl">
          Blog<span className={`${bungeeOutline.className} text-4xl`}>Out</span>
        </div>
        <div className="flex gap-6 text-lg">
          <Link href="/" className={styles.link}>
            Blog
          </Link>
          <Link href="/" className={styles.link}>
            About Me
          </Link>
        </div>
      </div>
      <div className="grid gap-10 sm:grid-flow-col grid-flow-row">
        <div className={styles.divider}></div>
        <div className={`${styles.divider} hidden md:block`}></div>
      </div>
    </div>
  );
}
