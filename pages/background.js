import Footer from "../components/Footer";

export default function Background() {
  let education = [
    {
      title: "Programming language",
      content: "Python, R, SQL, JavaScript, Java",
    },
    { title: "Tools", content: "Tableau, React, Postman, Shiny, Markdown" },
    {
      title: "Interests",
      content:
        "Deep Learning, Machine Learning, Temporal data mining, Volleyball",
    },
    {
      title: "Certifications",
      content:
        "Data Science and Machine Learning: Making Data-Driven Decisions from MIT, Macau Insurance Intermediaries Certification",
    },
    { title: "Languages", content: "Cantonese, Mandarin, English, Portuguese" },
  ];

  let experience = [
    {
      title: "Algorithm Engineer Intern",
      company: "JD iCity",
      date: "Jul 2022 - Dec 2022",
      intro:
        "JD iCity focuses on empowering intelligent cities with AI and Big Data, it is the companys intelligent city brand which provides total intelligent solutions for Chinas urban development.",
      work1:
        "Delveloped a visual analystic system for predicting the spread of COVID-19 using Data mining skills and Deep Learning",
      work2:
        "Contributed my knowledge to academic community by submitting a regular paper to conference",
      team: "Worked with a team of 10.",
    },
    {
      title: "Data Scientist",
      company: "PPBasia",
      date: "Jul 2021 - Present",
      intro:
        "PPBasia is a pioneering film and entertainment insurance startup that provides guarantees to production companies in case of disappointing box office, production delays, or unexpected expenses.",
      work1:
        "Conducted quantitative and quantitative analysis for 5+ films to predict profitability which impacts $2.6 million in deal value. Used  R, bigML, and Tableau to analyze data including the films’ production budget, cast, and emotional/topical analysis.",
      work2:
        "Designed new automatic data crawlers which enhanced 90%  predictive capability, collaborated with engineers and brought prototypes into production, resulting in 140 hrs of weekly labor saved.",
      team: "Led a team of 3-full time data analysts.",
    },
  ];

  let competitions = [
    {
      title: "International Biomedical Quiz",
      team: "Macau Team",
      date: "Jun 2018 - Jun 2018",
      d1: "Biomedical disciplines competition for high school students all over the world",
      d2: "Bronze medal",
    },
    {
      title: "The 2017 & 2018 International Geography Olympiad",
      team: "Macau Team",
      date: "Jun 2017 & Jun 2018",
      d1: "Annual geography competition for 16 to 19-year-old high school students from all over the world",
      d2: "Bronze for 2017 and Silver for 2018",
    },
    {
      title: "The 14th International Junior Science Olympiad",
      team: "Macau Team",
      date: "Dec 2016",
      d1: "Annual science competition for students aged 15 and under from all over the world",
      d2: " The only international academical competition that covers physics, chemistry and biology at the same time",
    },
  ];

  let athelete_and_awards = [
    {
      title: "Annual & quarterly Dean’s List",
      org: "University of Washington",
      date: "Oct 2020 - Present",
      desc: [
        "Attain a quarterly GPA of 3.50 or higher in at least 12 graded credits",
      ],
    },
    {
      title: "Athlete(Volleyball)",
      org: "Macau Volleyball Team/DePaul Catholic High School/ Storm King School",
      date: "Oct 2015 - Present",
      desc: [
        "Participated in 4 international tournaments and were ranked the  highest in Macau history in two of them as vice captain",
        "Chosen as NJ’s top girls volleyball player in 2018",
        "Brought the team to win SKS’ first-ever NEPSAC volleyball championship as Captain and won the MVP"
      ],
    },
  ];

  return (
    <div className="flex flex-col h-screen w-screen">
      <div className="flex-1 flex flex-col main">
        <div className="bg-black h-full w-full">
          <div className="bg-zinc-200 mx-52 backgroundTitle">
            <h1 className="text-4xl font-semibold flex justify-center pt-5">
              UT (JO JO)
            </h1>
            <h1 className="text-4xl font-semibold flex justify-center pt-2">
              GONG
            </h1>

            <h2 className="text-xl font-bold pt-5 pl-10">Education</h2>
            <div className="paragraph">
              <div className="flex flex-row justify-between pt-1 pl-10 text-sm font-light">
                <div className="">University of Washington</div>
                <div className="pr-10"> Seattle, WA</div>
              </div>
              <div className="paragraph flex flex-row justify-between pl-10 text-sm font-light">
                <div className="flex flex-row">
                  <div className="">
                    B.S. Informatics & Computational Finance and Risk Management
                  </div>
                  <div className="ml-2 text-red-600">GPA: 3.87</div>
                </div>
                <div className="pr-10">Expected Grad: Jun 2024</div>
              </div>
              <ul className="text-sm pl-10 pr-10 pt-1">
                {education.map((item, index) => (
                  <li className="flex flex-row">
                    <div className="font-medium pr-1 " key={index}>
                      {"- " + item.title + ": " + item.content}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div class="sepLine"></div>

            <h2 className="text-xl font-semibold pt-3 pl-10">Experience</h2>
            <div className="paragraph pl-10 text-sm font-light">
              {experience.map((item, index) => (
                <div key={index} className="text-sm font-light pt-2">
                  <div className="flex flex-row justify-between pb-1">
                    <div className="flex flex-row text-md">
                      <div className="underline underline-offset-1 font-bold">
                        {item.title}
                      </div>
                      <div className="text-red-600 pl-2">{item.company}</div>
                    </div>
                    <div className="pr-10 font-extralight">{item.date}</div>
                  </div>
                  <div className="pr-10">
                    <div>{"- " + item.intro}</div>
                    <div>{"- " + item.work1}</div>
                    <div>{"- " + item.work2}</div>
                    <div className="">{"- " + item.team}</div>
                  </div>
                </div>
              ))}
            </div>
            <div class="sepLine"></div>

            <h2 className="text-xl font-semibold pt-4 pl-10">Volunteer</h2>
            <div className="text-sm font-light pt-2">
              <div className="paragraph pl-10 text-sm font-light">
                <div className="flex flex-row justify-between pb-1">
                  <div className="flex flex-row text-md">
                    <div className="underline underline-offset-1 font-bold">
                      UW leader
                    </div>
                    <div className="text-red-600 pl-2">
                      University Of Washington
                    </div>
                  </div>
                  <div className="pr-10 font-extralight">
                    Jan 2021 - Jun 2021
                  </div>
                </div>
                <div className="pr-10">
                  <div>
                    - Worked closely with fellow leaders in my community where
                    we learned about how to be a leader
                  </div>
                  <div>
                    - Topics included: Finance budgeting, self care and setting
                    boundaries, resume building, and many more other items
                  </div>
                  <div>
                    - To conclude our overall meeting results, we focus on
                    individual projects to combine all our learned skills into
                    one final showcase
                  </div>
                </div>
              </div>
            </div>
            <div class="sepLine"></div>

            <h2 className="text-xl font-semibold pt-4 pl-10">Competitions</h2>
            <div className="paragraph pl-10 text-sm font-light">
              {competitions.map((item, index) => (
                <div key={index} className="text-sm font-light pt-2">
                  <div className="flex flex-row justify-between pb-1">
                    <div className="flex flex-row text-md">
                      <div className="underline underline-offset-1 font-bold">
                        {item.title}
                      </div>
                      <div className="text-red-600 pl-2">{item.team}</div>
                    </div>
                    <div className="pr-10 font-extralight">{item.date}</div>
                  </div>
                  <div className="pr-10">
                    <div>{"- " + item.d1}</div>
                    <div>{"- " + item.d2}</div>
                  </div>
                </div>
              ))}
            </div>
            <div class="sepLine"></div>

            <h2 className="text-xl font-semibold pt-4 pl-10">
              Althletic Activities & Awards
            </h2>
            <div className="paragraph pl-10 text-sm font-light pb-4">
              {athelete_and_awards.map((item, index) => (
                <div key={index} className="text-sm font-light pt-2">
                  <div className="flex flex-row justify-between pb-1">
                    <div className="flex flex-row text-md">
                      <div className="underline underline-offset-1 font-bold">
                        {item.title}
                      </div>
                      <div className="text-red-600 pl-2">{item.team}</div>
                    </div>
                    <div className="pr-10 font-extralight">{item.date}</div>
                  </div>
                  <div className="pr-10">
                    {item.desc.map((d, i) => (
                      <div key={i}>{"- " + d}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
