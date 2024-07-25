import * as React from "react";
import { Breadcrumb } from "gatsby-plugin-breadcrumb";

import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { StaticImage } from "gatsby-plugin-image";
import { SecondaryButtonLink } from "../../components/Button";

const HmiPage = ({ pageContext }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext;
  const projects = [
    {
      id: 1,
      destination: "Mexico",
      year: "1998",
      image: (
        <StaticImage src="../../images/flag-mexico.png" alt="Flag of Mexico" />
      ),
    },
    {
      id: 2,
      destination: "Kenya",
      year: "2002",
      image: (
        <StaticImage src="../../images/flag-kenya.png" alt="Flag of Kenya" />
      ),
    },
    {
      id: 3,
      destination: "India",
      year: "2006-2008",
      image: (
        <StaticImage src="../../images/flag-india.png" alt="Flag of India" />
      ),
    },
    {
      id: 4,
      destination: "AA & Detroit",
      year: "2009",
      image: (
        <StaticImage
          src="../../images/flag-michigan.png"
          alt="Flag of Michigan"
        />
      ),
    },
    {
      id: 5,
      destination: "Indonesia",
      year: "2012",
      image: (
        <StaticImage
          src="../../images/flag-indonesia.png"
          alt="Flag of Indonesia"
        />
      ),
    },
    {
      id: 6,
      destination: "Chicago",
      year: "2014, 2022",
      image: (
        <StaticImage
          src="../../images/flag-chicago.png"
          alt="Flag of Chicago"
        />
      ),
    },
    {
      id: 7,
      destination: "Peru",
      year: "1999-2005, 2016-2024",
      image: (
        <StaticImage
          src="../../images/flag-peru.png"
          alt="Flag of Peru"
          height="2rem"
        />
      ),
    },
    {
      id: 8,
      destination: "Jordan",
      year: "2018-2020",
      image: (
        <StaticImage src="../../images/flag-jordan.png" alt="Flag of Jordan" />
      ),
    },
  ];
  const workers = [
    {
      id: 1,
      ministry: "Camino De Vida, Peru",
      workers: "Robert & Karyn Barriger",
      image: (
        <StaticImage
          src="../../images/barrigers.png"
          alt="Robert & Karyn Barriger"
        />
      ),
      description:
        "Robert and Karyn Barriger founded Camino de Vida church in Lima, Peru in 1989. They desire to build up the local church as an instrument of God to make himself known as the hope for this world. ",
      moreInfo: "https://caminodevida.com/#",
    },
    {
      id: 2,
      ministry: "HMCC of Detroit",
      workers: "Sam & Sunghyun Beck",
      image: (
        <StaticImage src="../../images/becks.png" alt="Sam & Sunghyun Beck" />
      ),
      description:
        "Pastor Sam and his wife Sunghyun were called to lead the HMCC Detroit church in 2017 with a mission to see redemption, reconciliation, and restoration in families, communities, and systems as gospel infiltrates the city.",
      moreInfo: "https://detroit.hmcc.net/",
    },
    {
      id: 3,
      ministry: "HMCC of Hong Kong",
      workers: "Seth & Christina Kim",
      image: (
        <StaticImage src="../../images/kims.png" alt="Seth & Christinga Kim" />
      ),
      description:
        "Pastor Seth and Christina planted HMCC of Hong Kong in 2015 along with a team from HMCC of Ann Arbor. They desire to be a demonstration of Christ’s love, seeing people be radically changed through the Gospel, trained to be a Christ disciple, and sent out to other nations to be the light unto the world. ",
      moreInfo: "https://hongkong.hmcc.net/",
    },
    {
      id: 4,
      ministry: "Muslim Bridge Builders",
      workers: "Timothy & Miriam Harris",
      image: (
        <StaticImage
          src="../../images/harris.png"
          alt="Book: Loving Your Muslim Neighbor "
        />
      ),
      description:
        'In 2006, Pastor Tim and Miriam were led to do the work of "Bridge-Building" with Muslims and Christians. They build relationships and share the gospel with Muslims both in the US and internationally, and train and mobilize Christians to love their Muslim neighbors.',
      moreInfo: "http://lovingyourmuslimneighbor.com",
    },
    {
      id: 5,
      ministry: "HMCC of Jakarta",
      workers: "Eric & Tina Yee",
      image: <StaticImage src="../../images/yees.png" alt="Eric & Tina Yee" />,
      description:
        "Pastor Eric and Tina Yee helped to plant the HMCC of Jakarta church in 2015. Originally both members of HMCC of Ann Arbor, both felt lead to bring the Gospel to unreached people in Indonesia in 2010. Their desire is to see people’s lives transformed, redirected to God’s purposes, and set out to transform the world for the glory of God.",
      moreInfo: "https://jakarta.hmcc.net/",
    },
    {
      id: 6,
      ministry: "HMCC of Tangerang",
      workers: "John & Ester Eom",
      image: <StaticImage src="../../images/eoms.png" alt="John & Ester Eom" />,
      description:
        "In 2009 Pastor John moved to Indonesia with a team to plant HMCC of Indonesia. In 2014 he became pastor of HMCC of Tangerang.",
      moreInfo: "https://tangerang.hmcc.net/",
    },
    {
      id: 7,
      ministry: "HMCC of Tangerang",
      workers: "Andrew & Nicole Jun",
      image: (
        <StaticImage src="../../images/juns.png" alt="Andrew & Nicole Jun" />
      ),
      description:
        "Andrew, Nickey, and their family moved to Indonesia in 2010 to lead a church planting team with HMCC. After years of local church leadership, the family is transitioning to focused outreach to unreached people groups in their area. Their mission is to see God start disciple-making movements among the millions of unreached Indonesians that live around them.",
      moreInfo: "https://tangerang.hmcc.net/",
    },
    {
      id: 8,
      ministry: "East Asia",
      workers: "T & J",
      image: <StaticImage src="../../images/tj.png" alt="T & J" />,
      description:
        "T & J were sent out from HMCC of Ann Arbor to serve in an East Asian nation as missionaries in 2024",
    },
  ].reduce(
    (rows, key, index) =>
      (index % 4 === 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) &&
      rows,
    []
  );

  const project_cols = 2;
  const project_lg_cols = 3;
  let project_rows = (projects.length + project_cols - 1) / project_cols;
  let project_lg_rows =
    (projects.length + project_lg_cols - 1) / project_lg_cols;

  return (
    <Layout>
      <div className="px-2 flex flex-col w-full items-center pt-[1.375rem] pb-[7.3125rem] md:pt-10">
        <div className="w-full flex flex-col items-center">
          <div className="w-full flex flex-col gap-y-[2.1875rem] md:gap-y-[3.75rem]">
            <div className="px-2 md:px-6 flex flex-col items-center">
              <Breadcrumb crumbs={crumbs} crumbSeparator=" > " />
            </div>
            <div className="flex flex-col gap-y-8 md:gap-y-15 w-full items-center">
              <div className="px-2 md:px-6 flex flex-col gap-y-8 md:gap-y-15 items-center w-full">
                <div className="flex flex-col gap-y-9 md:gap-y-15 max-w-container w-full">
                  <h1 className="uppercase text-center text-2xl md:text-4xl font-bold leading-tighter mb-0">
                    Harvest Mission International (HMI)
                  </h1>
                  <div className="flex flex-col md:flex-row gap-y-[1.25rem]  gap-x-15">
                    <div className="md:order-1 image-container">
                      <StaticImage
                        src="../../images/hmi-hands-all-in.jpeg"
                        alt="Hands All In"
                      />
                    </div>
                    <div className="text-center md:text-left content-container">
                      <p className="mb-6 md:mb-[1.3125rem]">
                        As Christ has called us to &apos;make disciples of all
                        nations&apos; (Matthew 28:19), we value the importance
                        of the local church making an impact in its surrounding
                        community and the nations for the Gospel of Jesus
                        Christ.
                      </p>
                      <p className="mb-0">
                        Harvest Mission International (HMI) is our outreach
                        ministry, committed to planting churches, sending
                        short-term mission teams, and partnering with
                        missionaries locally and abroad. We currently have
                        church plants in Austin, Jakarta, Tangerang, Hong Kong,
                        and Detroit.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-full gap-y-5 md:gap-y-10 max-w-container">
                  <div className="flex flex-col gap-y-5 md:gap-y-3 max-w-[55rem] text-center md:text-left">
                    <h2 className="uppercase text-xl md:text-3xl">
                      Past Projects
                    </h2>
                    <p className="mb-0 text-base md:text-lg">
                      Harvest Mission International (HMI) is committed to
                      participating in short-term missions projects. By sending
                      out teams to serve in a cross-cultural missions
                      environment, it is our hope that kingdom workers will be
                      trained to serve the body of Christ and to commit to
                      life-long involvement in world missions. As team members
                      learn to selflessly serve and support local churches, they
                      have the opportunity to witness how God is working in
                      other parts of the world. Here are a selection of past
                      short-term teams that we have sent:
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <div className="grid grid-rows-4 md:grid-rows-3 grid-flow-col gap-y-4 md:gap-y-10 justify-betweenn w-full gap-x-4">
                      {projects.map(project => (
                        <div
                          className="flex gap-x-2 md:gap-x-5"
                          key={`project-${project.id}`}
                        >
                          <div className="w-[2.5rem] md:w-[5rem]">
                            {project.image}
                          </div>
                          <div className="flex flex-col md:gap-y-3">
                            <span className="text-lg md:text-xl font-medium text-Primary-1000 uppercase">
                              {project.destination}
                            </span>
                            <span className="text-sm md:text-2xl font-semibold leading-tighter">
                              {project.year}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:px-6 flex flex-col gap-y-8 md:gap-y-15 items-center w-full">
                <div className="flex flex-col gap-y-5 md:gap-y-10 items-center lg:items-start max-w-container w-full">
                  <div className="flex flex-col gap-y-5 md:gap-y-3 max-w-[55rem] text-center md:text-left">
                    <h2 className="uppercase text-xl md:text-3xl leading-tighter">
                      Supported Workers
                    </h2>
                    <p className="mb-0 text-base md:text-lg">
                      Partnership is critical as we strive to reach the nations
                      with the Gospel message. We know that missions cannot be
                      done by a sole missionary, but that it is our privilege to
                      participate in God&apos;s work around the world through
                      our prayers and financial support.
                    </p>
                  </div>
                  <div className="flex gap-x-4 md:gap-x-5 text-left max-w-[35rem] lg:max-w-none">
                    {workers.map((list, index) => (
                      <div
                        className="flex flex-col gap-y-10 w-[49.1526%]"
                        key={`list-${index}`}
                      >
                        {list.map(worker => (
                          <div
                            className="flex flex-col lg:flex-row gap-5"
                            key={`project-${worker.id}`}
                          >
                            <div className="md:min-w-[11.25rem] max-w-[11.25rem]">
                              <div className="relative pb-[111.115%] overflow-hidden">
                                <div className="absolute top-0 left-0">
                                  {worker.image}
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-y-5">
                              <div className="flex flex-col gap-y-3">
                                <span className="text-sm md:text-xl font-medium text-Primary-1000 uppercase">
                                  {worker.ministry}
                                </span>
                                <span className="text-lg md:text-2xl font-semibold leading-tighter">
                                  {worker.workers}
                                </span>
                                <p className="mb-0 text-sm md:text-base font-medium tracking-medium-wide">
                                  {worker.description}
                                </p>
                              </div>
                              <div className="flex">
                                {worker.moreInfo && (
                                  <SecondaryButtonLink
                                    to={worker.moreInfo}
                                    hasArrow={true}
                                  >
                                    More Info
                                  </SecondaryButtonLink>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="Harvest Mission International (HMI)" />;

export default HmiPage;
