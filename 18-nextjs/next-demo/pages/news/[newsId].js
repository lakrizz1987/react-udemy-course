import { useRouter } from "next/router";


const DetailsPage = () => {
  const router = useRouter();
  const title = router.query.newsId;

  return <h1>Details Page - {title}</h1>
}

export default DetailsPage;