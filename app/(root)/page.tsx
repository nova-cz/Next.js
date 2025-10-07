import Image from "next/image";
import styles from "./page.module.css";
import Hello from "../components/hello";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Welcome to Next.js</h1>
      <Hello />
    </>
  );
}
