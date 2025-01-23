import { FeatureTab } from "@/types/featureTab";

const featuresTabData: FeatureTab[] = [
  {
    id: "tabOne",
    title: "HyperLedger Fabric based Permissioned Blockchain.",
    desc1: `HyperLog uses the industry standard Hyperledger Fabric based Permissioned Blockchain`,
    desc2: `This helps in adding only verified persons and community owned and driven provenance and marketplace`,
    image: "/images/features/features-light-01.png",
    imageDark: "/images/features/features-dark-01.svg",
  },
  {
    id: "tabTwo",
    title: "Inbuilt Inventory.",
    desc1: `HyperLog provides an inbuilt inventory to track the supplies and purchases`,
    desc2: `The user is at liberty to choose which items provenance is to be pushed on the blockchain.`,
    image: "/images/features/features-light-01.png",
    imageDark: "/images/features/features-dark-01.svg",
  },
  {
    id: "tabThree",
    title: "Provenance based Market Place",
    desc1: `The ingredients for the products can be sourced from the marketplace, thereby improving quality with provenance proved inputs.`,
    desc2: `The products made are further available to be sold on the marketplace, along with provenance explorer.`,
    image: "/images/features/features-light-01.png",
    imageDark: "/images/features/features-dark-01.svg",
  },
];

export default featuresTabData;
