import HeroPage from "@/components/portfolio/heroPage/page";
import HistoryPage from "@/components/portfolio/history/page";
import Brands from "@/components/portfolio/brands/page";
import AboutPage from "@/components/portfolio/about/page";
import ArticlePage from "@/components/portfolio/articles/page";
import NewsLetter from "@/components/portfolio/newsletters/page";
import Footer from "@/components/footer/page";
export default function Home() {
  return (
    <main className=" min-h-screen pt-8 lg:pt-32 bg-slate-100   text-[#081825] dark:bg-[#081825] dark:text-gray-100">
   
    
    <HeroPage /> 
    <HistoryPage /> 
    <Brands />
    <AboutPage />
    <ArticlePage />
    <NewsLetter />
    <Footer />
    </main>
  );
}
