import { Link } from "react-router-dom";
import partnershipscards from "../utils/partnerships.json";
import PartnerShips from "../components/PartnerShips";
import form from "../assets/Img/form.png";
import '../styles/PartnerShip.css'


function Partnerships() {
  return (
    <>
      <div className="partnerships">
        <div className="de_pictarine section-padding pb-0">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="first-block-partnerships mb-5 mb-lg-0">
                  <h2 className="h2-block-1">
                    Être partenaire<br></br>
                    <span className="picta-app-italic">de Pictarine</span>
                  </h2>
                  <p>
                    Concevoir, construire et développer des applications uniques : ce
                    n&apos;est que la partie émergée de l&apos;iceberg. Être
                    partenaire de Pictarine, c&apos;est exploiter de nouvelles
                    opportunités de croissance. Que vous soyez distributeur, licensor,
                    fabricant, marketeur... il n&apos;y a pas de limite à ce que nous
                    pouvons faire avec nos partenaires.
                  </p>
                  <p>
                    Rejoignez-nous et construisons ensemble votre prochain axe de
                    croissance !
                  </p>
                  <Link to={""} className="button-picta">
                    Contactez-nous !
                  </Link>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="de_pictarine_img">
                  <img
                    className="img-fluid"
                    src="https://a.storyblok.com/f/189744/2648x2252/641e690db8/partnership-at-cvs.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="nos_partenaires section-padding pb-0">
          <div className="container">
            <div className="second-block-partnerships mb-5">
              <h2 className="b-memories">Nos Partenaires</h2>
              <p>
                Quelques unes des plus grandes entreprises du classement Fortune 500
                nous font confiance chaque jour. Et vous ?
              </p>
              <p>
                Nos équipes fournissent les meilleures expériences pour vos clients
                en utilisant les technologies les plus récentes, un UX et des
                designs sur-mesure pour notre éternelle recherche de perfection.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="partnership_img mb-5">
                  <img
                    className="img-fluid"
                    src="https://a.storyblok.com/f/189744/1329x272/240ad92cee/cvs.png/m/1200x0"
                    alt=""
                  />
                </div>
              </div>


              <div className="col-lg-4">
                <div className="partnership_img mb-5">
                  <img
                    className="img-fluid"
                    src="https://a.storyblok.com/f/189744/1330x272/c784ae5162/wg.png/m/1200x0"
                    alt=""
                  />
                </div>
              </div>

              <div className="col-lg-4">
                <div className="partnership_img mb-5">
                  <img
                    className="img-fluid"
                    src="https://a.storyblok.com/f/189744/1329x272/5247dbdda1/wb-1.png/m/1200x0"
                    alt=""
                  />
                </div>
              </div>

              <div className="col-lg-4">
                <div className="partnership_img mb-5">
                  <img
                    className="img-fluid"
                    src="https://a.storyblok.com/f/189744/1329x272/4cac6ae5c6/district.png/m/1200x0"
                    alt=""
                  />
                </div>
              </div>

              <div className="col-lg-4">
                <div className="partnership_img mb-5">
                  <img
                    className="img-fluid"
                    src="https://a.storyblok.com/f/189744/1330x272/c27910f8e3/wm.png/m/1200x0"
                    alt=""
                  />
                </div>
              </div>

              <div className="col-lg-4">
                <div className="partnership_img mb-5">
                  <img
                    className="img-fluid"
                    src="https://a.storyblok.com/f/189744/1329x272/4a48742519/ravensburger-1.png/m/1200x0"
                    alt=""
                  />
                </div>
              </div>



            </div>
          </div>
        </div>

        <div className="quelques section-padding">
          <div className="container">
            <h2 className="b-memories mb-5 text-center">Quelques chiffres</h2>

            <div className="row">
              <div className="col-lg-3">
                <div className="first-left-card-partnerships">
                  <h2 className="title-block-2">
                    Notre devise : Rien n&apos;est impossible !
                  </h2>
                  <p>
                    La porte est fermée ? Essayons la fenêtre, puis le toit ! Chez
                    Pictarine, on porte les idées jusqu&apos;au bout !
                  </p>
                </div>
              </div>
              {partnershipscards.slice(0, 5).map((data, id) => (
                <div className="col-lg-3 mb-5">
                  <PartnerShips
                    key={id}
                    logo={data.logo}
                    title={data.title}
                    text={data.text}
                  />
                </div>
              ))}
              <div className="col-lg-3 offse-0 offset-lg-1">
                <div className="last-block-partnerships">
                  <p className="text-techno">Découvrez en plus sur notre produit !</p>
                  <Link to={"/Product"} className="button-picta">
                    Notre produit
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pourquoi section-padding pb-0" style={{ backgroundColor: '#f8f8f8' }} >
          <div className="container">
            <div className="whypartner">
              <h2 className="b-memories">Pourquoi être notre partenaire ?</h2>
              <p>
                Parce que nous avons des années d&apos;expertise dans
                l&apos;impression rapide et facile de photos pour des millions de
                clients dans les magasins de nos partenaires à travers les US.
                Chez Pictarine, nous sommes toujours avides d&apos;idées, de défis
                et... de nouveaux partenariats !
              </p>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="pourquoi_img">
                  <img
                    className="img-fluid"
                    src="https://a.storyblok.com/f/189744/1920x1364/af61d46768/team-partnership.png/m/1200x0"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="right-block-pictures-whypartner bg-white">
                  <h2 className="last-seminar">Le mot de l&apos;équipe</h2>
                  <div className="block-greymarginleft">
                    <p style={{ borderLeft: '3px solid #a4a4a4', paddingLeft: '10px' }} className="fs_14">
                      Tout est possible ! Partagez nous vos idées de partenariat les
                      plus folles : qu&apos;il s&apos;agisse de courtes
                      collaborations ou de projets à long terme, nous sommes à
                      l&apos;écoute. N&apos;hésitez pas à nous contacter et à nous
                      faire part de vos idées !
                    </p>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>

        <div className="last_block section-padding" style={{ backgroundColor: '#f8f8f8' }}>
          <div className="container">
            <div className="row">
              {
                partnershipscards.slice(5, 8).map((data, id) => (
                  <div className="col-lg-4">
                    <div className="partnerships-card mb-5" key={id}>
                      <img src={data.logo} alt="" />
                      <h2>{data.title}</h2>
                      <p>{data.text}</p>
                    </div>
                  </div>
                ))
              }

            </div>
          </div>
        </div>

        <div className="partersip_contact section-padding pb-0">
          <div className="container">
            <h2 className="b-memories text-center">Contactez-nous</h2>

            <div className="g-container-form">
              <img src={form} alt="" />
              <div className="inputs">
                <label htmlFor="name">
                  Your name<span>*</span>
                </label>
                <input className="w-100" type="text" id="name" />
              </div>
              <div className="inputs">
                <label htmlFor="name">
                  Your last name<span>*</span>
                </label>
                <input className="w-100" type="text" id="name" />
              </div>
              <div className="inputs">
                <label htmlFor="name">
                  Your email<span>*</span>
                </label>
                <input className="w-100" type="text" id="name" />
              </div>
              <div className="inputs">
                <label htmlFor="name">
                  Your company number<span>*</span>
                </label>
                <input className="w-100" type="text" id="name" />
              </div>
              <div className="inputs">
                <label htmlFor="partnerType">Partnership Type</label>
                <select id="partnerType">
                  <option value="" disabled>
                    Please select
                  </option>
                  <option value="Retailer">Retailer</option>
                  <option value="PrintLab">Print Lab</option>
                  <option value="Affiliate">Affiliate</option>
                  <option value="Designer">Designer</option>
                  <option value="Licensor">Licensor</option>
                  <option value="Gaming Merchandising">Gaming Merchandising</option>
                  <option value="New Tech">New Tech</option>
                  <option value="Package Insert Agencies">
                    Package Insert Agencies
                  </option>
                  <option value="Package Insert Program">
                    Package Insert Program
                  </option>
                  <option value="Press Media Blogs">Press Media Blogs</option>
                  <option value="Public Figure">Public Figure</option>
                  <option value="Reward Program">Reward Program</option>
                  <option value="Wellness & Fitness Apps">
                    Wellness & Fitness Apps
                  </option>
                  <option value="SaaS">SaaS</option>
                  <option value="Print Manufacturer">Print Manufacturer</option>
                  <option value="Other">Other</option>
                  <option value="Framing Business">Framing Business</option>
                  <option value="Product Manufacturer">Product Manufacturer</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Snack Puzzles">Snack Puzzles</option>
                </select>
              </div>
              <div className="inputs">
                <label htmlFor="name">
                  Your company number<span>*</span>
                </label>
                <input className="w-100" type="text" id="name" />
              </div>
              <div className="inputs">
                <label htmlFor="name">What business are you in ?</label>
                <input className="w-100" type="text" id="name" />
              </div>
              <div className="inputs">
                <label htmlFor="name">Where are you from ?</label>
                <input className="w-100" type="text" id="name" />
              </div>
              <div className="inputs">
                <label htmlFor="name">Share your thoughts!</label>
                <input className="w-100" type="text" id="name" />
              </div>
              <button className="form-btn">Submit</button>
              <div className="hubspot-pub">
                <img
                  src="https://companieslogo.com/img/orig/HUBS-3bd277ce.png?t=1597493082"
                  alt=""
                />
                <p>
                  Create your own<span> free form with HubSpot</span>
                </p>
              </div>
            </div>

          </div>
        </div>


      </div>




    </>
  );
}

export default Partnerships;
