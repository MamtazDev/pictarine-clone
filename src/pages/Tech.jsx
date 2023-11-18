import "../styles/Tech.css";
import BusinessInfos from "../components/BusinessInfos";
import businessinfos from "../utils/businessinfos.json";
import { useLocation } from "react-router";
import stackinfos from "../utils/stackinfos.json";
import StackCard from "../components/StackCard";
import Description from "../components/Description";
import description from "../utils/description.json";
import problemsolvers from "../utils/problemsolvers.json";
import ProblemSolvers from "../components/ProblemSolvers";
import { Link } from "react-router-dom";
import CarouselTeam from "../components/CarouselTeam";

function Tech() {
  const LastDataCard = problemsolvers[6];
  const location = useLocation();
  const isTechPage = location.pathname === "/Tech";
  const tentaculaire = "/* --------------- Un exemple --------------- */";
  const tentaculaireBis = " //et oui, c'était tentaculaire";
  const cardNumberClasses = isTechPage
    ? "container-number container-number-tech"
    : "container-number";

  return (
    <>
      <div className="tech_section ">
        <div className="tech_team section-padding pb-0">
          <div className="container">
            <div className="row align-items-center">

              <div className="col-lg-6">
                <div className="left-block-first-block">
                  <h2>
                    Bonjour la<br></br>
                    <span className="picta-app-tech">Tech team</span>
                  </h2>
                  <p className="fs_14">
                    Chez Pictarine, la Tech n&apos;est pas seulement le coeur de notre
                    produit, c&apos;est l&apos;essence même de notre ADN. Une seule
                    chose est obligatoire dans la Tech Team : proposer de nouvelles
                    choses ! Les idées peuvent (et doivent !) venir de tout le monde,
                    que ce soit de nouvelles technos ou des idées produit/business.
                  </p>
                </div>
              </div>

              <div className="col-lg-6">
                <img
                  className="img-fluid"
                  src="https://a.storyblok.com/f/189744/2900x2252/e160b820a2/team-tech.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="vision_tech section-padding pb-0">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-4">
                <div className="vision_tech_img">
                  <img
                    className="img-fluid"
                    src="	https://a.storyblok.com/f/189744/1540x1960/3c6bb0a52e/prez-cto.jpg/m/1200x0"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-8">

                <div className="right-block-second-block-tech">
                  <h2 className="h2-tech fs_40 fw-bold mb-4">Notre vision tech</h2>
                  <div className="middle-block-right-block-second-block-tech">
                    <div className="block-middle-icons">
                      <img
                        className="eyes-cartoon"
                        src="https://img.icons8.com/ios/50/eyes-cartoon.png"
                        alt=""
                      />
                      <p>Une veille technique régulière</p>
                    </div>
                    <div className="block-middle-icons">
                      <img
                        src="https://img.icons8.com/ios-glyphs/30/so-so.png"
                        alt=""
                      />
                      <p>Du code de qualité et maintenable</p>
                    </div>
                    <div className="block-middle-icons">
                      <img
                        src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/external-database-web-hosting-flatart-icons-outline-flatarticons-16.png"
                        alt=""
                      />
                      <p>Une stack simple et moderne</p>
                    </div>
                    <div className="block-middle-icons">
                      <img
                        src="https://img.icons8.com/carbon-copy/100/test-tube.png"
                        alt=""
                      />
                      <p>Notre devise : Build and Learn !</p>
                    </div>
                  </div>
                  <p>
                    <span className="matrix">{tentaculaire}</span>
                    <br></br>
                    Notre plus grande fierté ? Le projet Calamar !{" "}
                    <span className="matrix">{tentaculaireBis}</span>
                    <br></br>Il s&apos;agit de la refacto from scratch de toutes nos
                    apps. Finie en 2022, on a dit adieu aux vieilles technos et aux
                    problèmes de dépendances !
                  </p>
                </div>



              </div>
            </div>
          </div>
        </div>

        <div className="business_info section-padding pb-0">
          <div className="container">
            <div className={cardNumberClasses}>
              <div className="row">
                {businessinfos.slice(4, 7).map((data, id) => (
                  <div className="col-lg-4">
                    <BusinessInfos
                      key={id}
                      number={data.number}
                      title={data.title}
                      text={data.text}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="nore_stack section-padding pb-0">
          <div className="container">
            <h2 className="h2-tech">Notre Stack</h2>
            <div className="row">
              {stackinfos.map((data, id) => (
                <div className="col-lg-6 mb-5">
                  <StackCard
                    key={id}
                    logo={data.logo}
                    title={data.title}
                    tags={data.tags}
                    stacklogo={data.stacklogo}
                  />
                </div>

              ))}
            </div>
          </div>
        </div>

        <div className="devs section-padding">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="left-block-3">
                  <h2 className="sobusiness mb-5">La vie de nos devs</h2>
                  {description.slice(3, 5).map((data, id) => (
                    <Description
                      key={id}
                      img={data.img}
                      title={data.title}
                      text={data.text}
                    />
                  ))}
                </div>
              </div>

              <div className="col-lg-6">
                <div className="right-block-3-tech">
                  <h2 className="four-words-tech">Harder, Better, Faster, Coder</h2>
                  {description[5] && (
                    <Description
                      key={description[5].id}
                      img={description[5].img}
                      title={description[5].title}
                      text={description[5].text}
                    />
                  )}
                  <div className="techno">
                    <h2 className="text-techno">
                      Aussi, parfois on s’amuse. Découvre la Picta Life, et plein de
                      belles photos
                    </h2>
                    <Link to={"/Pictalife"} className="button-picta">
                      La Picta quoi ?
                    </Link>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>

        <div className="carosusal">
          <CarouselTeam />
        </div>

        <div className="problem_solver section-padding pt-0">
          <div className="container">
            <h2 className="sobusiness">We are problem solvers!</h2>
            <div className="row">

              <div className="col-lg-3 mb-5">
                <div className="first-card-problemsolvers">
                  <h3>Notre lab</h3>
                  <p>
                    Chez Pictarine on adore le challenge de créer nos propres outils
                    qui répondent exactement à nos besoins. L’avantage de créer
                    plutôt qu’utiliser une solution existante ? Le challenge et la
                    praticité ! Overview de nos outils handmade et parfaitement
                    tailored pour nos besoins.
                  </p>
                </div>
              </div>

              {problemsolvers.slice(0, 6).map((data, id) => {
                return (
                  <div className="col-lg-3 mb-5">
                    <ProblemSolvers
                      key={id}
                      logo={data.logo}
                      title={data.title}
                      text={data.text}
                    />
                  </div>
                );
              })}

              <div></div>

              <div className="col-lg-3">
                <div></div>
                <ProblemSolvers
                  logo={LastDataCard.logo}
                  title={LastDataCard.title}
                  text={LastDataCard.text}
                />
              </div>

              <div className="col-lg-3">
                <div className="container-problemsolvers-p">
                  <p>
                    Et toi, quelle app rêves-tu de développer ? Le Lab Picta t’est
                    ouvert !
                  </p>
                </div>

              </div>

              <div className="col-lg-3 offset-lg-3 offset-0">
                <div className="last-block-problemsolvers">
                  <p className="text-techno">
                    Découvre en détail notre App et nos explos Produits
                  </p>
                  <Link to={"/Product"} className="button-picta">
                    Nos produits
                  </Link>
                </div>
              </div>




            </div>
          </div>
        </div>



        <div className="block-7-pictalife text-center">
          <h2 className="mb-5 fs_60">
            Ça donne envie ?<br></br>
            <span className="picta-app">Rejoins-nous!</span>
          </h2>
          <Link className="button-picta" to={"/rejoinsnous"}>
            Nos postes ouverts
          </Link>
        </div>



      </div>


    </>
  );
}

export default Tech;
