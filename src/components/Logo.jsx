import Image from "next/image";
import LogoImage from "../../public/mojeb-ai-logo.png";
export default function Logo() {
  return <Image src={LogoImage} alt={"logo image"} className="w-20 " />;
}
