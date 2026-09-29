import { logoSrc } from "@/lib/brand-assets";
import { featuredAmazonUrl, featuredProduct } from "@/lib/products";
import HeaderBar from "./HeaderBar";

const expectedLogoPath = "/brand/furryfix-logo.png";

export default function Header() {
  return (
    <HeaderBar
      logoSrc={logoSrc ?? expectedLogoPath}
      amazonUrl={featuredAmazonUrl}
      productName={featuredProduct.name}
    />
  );
}
