import Breadcrumbs from "@/components/breadcrumbs";
import MainHeader from "@/components/main-header";
import Newsletter from "@/components/newsletter";
import SecondHeader from "@/components/second-header";
import SiteFooter from "@/components/site-footer";
import Tabs from "@/components/tabs";

export default function Home() {
  return (
    <main className="min-h-screen">
      <MainHeader />
      <SecondHeader />
      <Breadcrumbs />
      <Tabs />
      <Newsletter />
      <SiteFooter />
    </main>
  );
}
