import Link from "next/link";
import { Fragment } from "react";

const NewsPage = () => {
  return (
    <Fragment>
      <h1>News Page</h1>
      <ul>
        <li><Link href='/news/next'>Go to NextJS!</Link></li>
        <li><Link href='/news/react'>Go to ReactJS!</Link></li>
      </ul>

    </Fragment>
  )
}

export default NewsPage;