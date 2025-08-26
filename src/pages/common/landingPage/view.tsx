import LandingPageHeader from "../../../components/Header/LandingPageHeader";
import BlogsBanner from "./components/BlogsBanner";
import FavouriteDestinations from "./components/FavouriteDestinations";
import FoodBeverageBanner from "./components/FoodBeverageBanner";
import Footer from "./components/Footer";
import LandingPageOffers from "./components/LandingPageOffers";
import MainBanner from "./components/MainBanner";
import MediaMentions from "./components/MediaMentions";
import PickByTravelStyles from "./components/PickByTravelStyles";
import StayWithMoustacheBanner from "./components/StayWithMoustacheBanner";
import TrendingDestinations from "./components/TrendingDestinations";

export default function LandingPage() {
  return (
    <div className="flex flex-col h-[100dvh] w-[100dvw] overflow-y-auto">
      <LandingPageHeader />
      <div className="flex flex-col pt-[126px]">
        <MainBanner />
        <FavouriteDestinations />
        <PickByTravelStyles />
        <StayWithMoustacheBanner />
        <TrendingDestinations />
        <FoodBeverageBanner />
        <LandingPageOffers />
        <MediaMentions />
        <BlogsBanner />
        <Footer />
      </div>
    </div>
  );
}
