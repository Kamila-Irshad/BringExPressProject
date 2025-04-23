
import Container from "./Container";
import TableOfJobs from "./TableOfJobs"

const Careers = () => {
  return (
    <Container>
      <div className="leading-relaxed max-w-4xl lg:mx-12 animate-slideUp transition-all py-4 text-start">
        <h1 className=" font-bold mt-4 text-[50px] ">Careers</h1>
        <p className="leading-relaxed mt-4 md:mr-28 text-[13px]  ">
          Become a part of our amazing team. bring Express is an equal
          opportunity employer, which means we do not discriminate on the basis
          of race, color, religion, marital status, age, and national origin.
        </p>
      </div>
  <TableOfJobs ></TableOfJobs>
    </Container>
  );
};

export default Careers;
