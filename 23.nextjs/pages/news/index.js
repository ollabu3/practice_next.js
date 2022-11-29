import { Fragment } from "react";
import Link from "next/link";

// domainname/news
const NewsPage = () => {
  return (
    <Fragment>
      <h1>The NewsPage</h1>
      <ul>
        <Link href="/news/dsdsddsds">NextJS is a great framework</Link>
      </ul>
      <ul>Somethins Else</ul>
    </Fragment>
  );
};

export default NewsPage;
