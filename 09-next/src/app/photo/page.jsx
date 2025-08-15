import Image from "next/image";
import summersale from "../../../public/summersale.jpg";

export default function Page() {
  return (
    <>
      {/* <img src={summersale.src} /> */}
      <Image
        src={summersale}
        quality={75}
        placeholder="blur"
        alt="Summer sale"
      />
    </>
  );
}
