import { Link } from "react-router";
import { Button } from "../components/Button";
import { PageHeading } from "../components/PageHeading";

const Home = () => {
  return (
    <div className={`flex flex-col items-center`}>
      <section className={`flex-1`}>
        <PageHeading>
          Welcome to <b>BenStack's Shop!</b>
        </PageHeading>
        <div className={`bg-[url(src/assets/shopping-bags.svg)] 
          bg-contain size-100 lg:size-150 mx-auto`}>
        </div>
      </section>
      <section className={`flex justify-center`}>
        <Button size="medium">
          <Link to="shop">Start Shopping Now!</Link>
        </Button>
      </section>
    </div>
  );
};

export { Home };