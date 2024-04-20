import MainHeader from "@/components/main-header";
import SiteFooter from "@/components/site-footer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <MainHeader />
      <SiteFooter />
    </main>
  );
}
