import Breadcrumbs from "@/components/breadcrumbs";
import MainHeader from "@/components/main-header";
import Newsletter from "@/components/newsletter";
import SiteFooter from "@/components/site-footer";
import Tabs from "@/components/tabs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <MainHeader />
      <Breadcrumbs />
      <Tabs />
      <Newsletter />
      <SiteFooter />
    </main>
  );
}
