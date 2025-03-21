export default function Services() {
  const services = [
    {
      title: "Digital Transformation",
      text: "Guide businesses through modern technology adoption, ensuring seamless transitions to agile, data-driven, and automated operations.",
    },
    {
      title: "Automation Solutions",
      text: "Develop and deploy tailored automation solutions using advanced workflows and AI technologies to streamline operations and enhance productivity.",
    },
    {
      title: "Web Development Services",
      text: "Build modern web solutions using React, Next.js, Lit, and API integrations to create seamless and efficient digital experiences.",
    },
    {
      title: "Process Optimization",
      text: "Identify inefficiencies and optimise workflows to improve operational effectiveness and business scalability.",
    },
    {
      title: "Strategy & Support Services",
      text: "Provide expert guidance, training, and ongoing support to ensure smooth adoption and continuous improvement of digital solutions.",
    },
    {
      title: "AI Agents Design",
      text: "Harness AI agents to uncover insights, drive automation, and improve decision-making in business operations.",
    },
  ];

  return (
    <div>
      <section className="border-t-border dark:border-t-darkBorder dark:bg-darkBg border-t-2 bg-bg py-20 font-base lg:py-[100px]">
        <h2 className="mb-14 px-5 text-center text-2xl font-heading md:text-3xl lg:mb-20 lg:text-4xl">
          Our Services
        </h2>

        <div className="mx-auto grid w-container max-w-full grid-cols-1 gap-5 px-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <div
              className="border-border dark:border-darkBorder dark:bg-secondaryBlack shadow-light dark:shadow-dark flex flex-col gap-3 rounded-base border-2 bg-white p-5"
              key={i}
            >
              <h4 className="text-xl font-heading">{service.title}</h4>
              <p>{service.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
