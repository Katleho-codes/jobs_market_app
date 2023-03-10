import Head from "next/head";
import jobs from "../public/jobs";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: any) => {
    setSearchTerm(e.target.value);
  };

  // interface jobProp {
  //   id: number;
  //   logo: React.ReactNode;
  //   job: string;
  //   createdAt: string;
  //   typeOfJob: string;
  //   company: string;
  //   location: string;
  //   list: any;
  // }
  const router = useRouter();

  // const CardProps = (props: any) =>
  //   props.list.map((card) => (
  //     <article
  //       className="job"
  //       key={card.id}
  //       onClick={() => {
  //         router.push("/job?id=" + card.id);
  //       }}
  //     >
  //       <div className="img_wrapper">
  //         <Image src={card.logo} alt={card.typeOfJob} />
  //       </div>
  //       <div className="first_row">
  //         <span>{card.createdAt}</span>
  //         <span>•</span>
  //         <span>{card.typeOfJob}</span>
  //       </div>
  //       <div className="second_row">
  //         <h3 className="job_name">{card.job}</h3>
  //       </div>
  //       <div className="third_row">
  //         <span className="company">{card.company}</span>
  //       </div>
  //       <div className="last_row">
  //         <span className="location">{card.location}</span>
  //       </div>
  //     </article>
  //   ));

  const CardProps = (props: any) =>
    props.list.map((card: any) => {
      const { id, logo, typeOfJob, createdAt, job, company, location } = card;
      return (
        <article
          className="job"
          key={id}
          onClick={() => {
            router.push("/job?id=" + id);
          }}
        >
          <div className="img_wrapper">
            <Image src={logo} alt={typeOfJob} />
          </div>
          <div className="first_row">
            <span>{createdAt}</span>
            <span>•</span>
            <span>{typeOfJob}</span>
          </div>
          <div className="second_row">
            <h3 className="job_name">{job}</h3>
          </div>
          <div className="third_row">
            <span className="company">{company}</span>
          </div>
          <div className="last_row">
            <span className="location">{location}</span>
          </div>
        </article>
      );
    });

  const filterJobs = jobs.filter((job) => {
    return job.job.includes(searchTerm.toLowerCase());
  });

  return (
    <>
      <Head>
        <title>Jobs</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="container">
          <div className="fields">
            <input
              type="text"
              name="searchJob"
              id="searchJob"
              placeholder="Search Job"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>

          <section className="jobs first_part">
            <CardProps list={filterJobs} />
          </section>
        </div>
      </main>
    </>
  );
}
