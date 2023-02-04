import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import jobs from "../../public/jobs";

function Job() {
  const router = useRouter();
  const { id } = router.query;
  const jobDetail = jobs?.find((x) => x.id === Number(id));

  return (
    <>
      <main className="singleJobview">
        <article>
          <div className="left_col">
            <Image priority src={jobDetail?.logo} alt={""} />
          </div>
          <div className="right_col">
            <h3>{jobDetail?.job}</h3>

            <p className="aboutJob">
              <span>{jobDetail?.createdAt}</span>
              <span>•</span>
              <span>{jobDetail?.typeOfJob}</span>
            </p>
            <p className="company">{jobDetail?.company}</p>
            <p className="location">{jobDetail?.location}</p>
          </div>
        </article>
        <Link href="/" className="backToHomeBtn" aria-label="back to home">
          Back to home
        </Link>
      </main>
    </>
  );
}

export default Job;
