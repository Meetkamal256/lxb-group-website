import {
  FiSearch,
  FiPenTool,
  FiCode,
  FiCheckCircle,
  FiArrowRight,
} from "react-icons/fi";

const approachSteps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We take time to understand your objectives, requirements and the challenges you want to address.",
    Icon: FiSearch,
  },
  {
    number: "02",
    title: "Design",
    description:
      "We plan a suitable solution, considering the required features, technologies and overall approach.",
    Icon: FiPenTool,
  },
  {
    number: "03",
    title: "Develop",
    description:
      "We build and configure the solution, focusing on functionality, usability and reliability.",
    Icon: FiCode,
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "We test the completed solution, make necessary refinements and prepare it for use.",
    Icon: FiCheckCircle,
  },
];

export default function DigitalSolutionsApproach() {
  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="container-main">
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-gold">
            Our Approach
          </span>
          
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            A Clear Approach to Digital Solutions
          </h2>
          
          <p className="mt-4 text-sm leading-7 text-slate sm:text-base">
            From understanding your requirements to delivering a working
            solution, we follow a structured approach throughout each project.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-5">
          {approachSteps.map(({ number, title, description, Icon }, index) => (
            <div key={number} className="relative">
              <article className="flex h-full flex-col items-center px-4 text-center">
                <div className="relative mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-gold/30 bg-off-white">
                  <Icon
                    className="h-7 w-7 text-gold"
                    strokeWidth={1.6}
                    aria-hidden="true"
                  />
                  
                  <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-navy text-xs font-semibold text-white">
                    {number}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-navy">{title}</h3>
                
                <p className="mt-3 text-sm leading-7 text-slate">
                  {description}
                </p>
              </article>
              
              {index !== approachSteps.length - 1 && (
                <FiArrowRight
                  className="absolute -right-4 top-5 hidden h-5 w-5 text-gold/60 md:block"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
