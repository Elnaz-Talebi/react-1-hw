import OurPartners from "./ourPartners";
import OurCrew from "./ourCrew";
import OurValues from "./ourValues";

export const Crew = () => {
  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>About us</h1>
        <section className="card">
          <h2>Our Values</h2>
          <OurValues />
        </section>
        <section className="card">
          <h2>The crew</h2>
          <OurCrew />
        </section>
        <section className="card">
          <h2>Our Partners</h2>
          <OurPartners />
        </section>
      </main>
    </div>
  );
};

export default Crew;
