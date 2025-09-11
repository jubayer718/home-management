import SectionHeader from "../ui/Reuseable/SectionHeader";

import { MdArrowOutward } from "react-icons/md";
import SwiperFeatureList from "../ui/Reuseable/SwiperFeatureList";
const FeatureList = () => {
  return (
    <div className="my-8">
      <SectionHeader
        headerText="Discover Our Featured Listings"
        paragraphText="Aliquam lacinia diam quis lacus euismod"
        label="See All Properties"
        icon={MdArrowOutward}
        className="font-semibold"
      />

      {/*feature card section */}
      <div className="">
    <SwiperFeatureList/>
      </div>
    </div>
  );
};

export default FeatureList;