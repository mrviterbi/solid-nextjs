import { Blog } from "@/types/blog";

const BlogData: Blog[] = [
  {
    _id: 1,
    mainImage: "/images/blog/ibmBlog.jpg",
    title: "Blockchain for supply chain solutions",
    blogLink:"https://www.ibm.com/blockchain-supply-chain",
    metadata:
      "In times of disruption, this matters more than ever. Businesses and consumers want brands to guarantee product authenticity, while supply chain participants demand responsible sourcing and better visibility to minimize disputes.",
  },
  {
    _id: 2,
    mainImage: "/images/blog/delBlog.png",
    title: "Using blockchain to drive supply chain transparency",
    blogLink:"https://www2.deloitte.com/us/en/pages/operations/articles/blockchain-supply-chain-innovation.html",
    metadata:
      "The COVID-19 pandemic gave the world a close-up view of the key factor determining the effectiveness of an organization—its supply chain management. Using blockchain can improve both supply chain transparency and traceability as well as reduce administrative costs.",
  },
  {
    _id: 2,
    mainImage: "/images/blog/consBlog.png",
    title: "Blockchain in Supply Chain Management",
    blogLink:"https://consensys.io/blockchain-use-cases/supply-chain-management",
    metadata:
      "Supply chains underpin the macroeconomy and global markets. Enterprise Ethereum provides next-generation solutions to achieve the interoperable exchange of transaction information, transaction history, and transaction statements in compliance with industry standards.",
  },
  {
    _id: 1,
    mainImage: "/images/blog/tokenBlog.png",
    title: "Data Provenance on the Blockchain: Establishing Trust and Traceability in a Digital World",
    blogLink:"https://tokenminds.co/blog/knowledge-base/data-provenance-on-the-blockchain",
    metadata:
      "Blockchain technology provides an immutable and transparent record for data lineage. With each transaction recorded on a distributed ledger, the origin, transformations, and ownership of data can be reliably tracked over time",
  },
  {
    _id: 2,
    mainImage: "/images/blog/provBlog.png",
    title: "Blockchain: the solution for transparency in product supply chains",
    blogLink:"https://www.provenance.org/news-insights/blockchain-the-solution-for-transparency-in-product-supply-chains",
    metadata:
      "This white paper is by social enterprise Project Provenance Ltd. and describes a prototype that uses blockchain technology to enable secure traceability of certifications and other salient information in supply chains.",
  },
  {
    _id: 2,
    mainImage: "/images/blog/foodBlog.png",
    title: "Food Provenance & Blockchain: Ensuring Integrity & Identity",
    blogLink:"#",
    metadata:
      "How much insight does the average person have into what’s on their plate? Do we know our dolphin-friendly tuna is actually dolphin-friendly? ",
  },
];

export default BlogData;
