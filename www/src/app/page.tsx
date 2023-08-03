import Hero from "@components/Hero";
import SimpleForm from "@components/SimpleForm";
import FeaturedRow from "@components/FeaturedRow";
import Accordian from "@components/Accordian";
import DisplayTable from "@components/DisplayTable";
import StatsRow from "@components/StatsRow"


export default function Home() {

  return (
    <>
      <Hero />
      <FeaturedRow/>
      <StatsRow/>
      <DisplayTable/>
      <Accordian/>
      <SimpleForm/>
    </>
  );
}
