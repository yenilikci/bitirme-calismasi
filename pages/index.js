import {Breadcrumbs, Hero} from "@components/common";
import {EthRates, Walletbar} from "@components/web3";
import {CourseList} from "@components/course";
import {OrderCard} from "@components/order";
import {BaseLayout} from "@components/layout";

export default function Home() {
  return (
      <>
          <Hero/>
          <Breadcrumbs/>
          <Walletbar/>
          <EthRates/>
          <OrderCard/>
          <CourseList/>
      </>
  );
}

Home.Layout = BaseLayout;
