import MainHeader from "@/components/main-header";
import Newsletter from "@/components/newsletter";
import SiteFooter from "@/components/site-footer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <MainHeader />
      <Newsletter />
      <SiteFooter />
    </main>
  );
}
