import { Link } from "react-router-dom";
import partnershipscards from "../utils/partnerships.json";
import PartnerShips from "../components/PartnerShips";
import form from "../assets/Img/form.png";
import '../styles/PartnerShip.css'
import { useTranslation } from "react-i18next";

function Partnerships() {
  const { t } = useTranslation();
  return (
    <>
      <div className="partnerships">
        <div className="de_pictarine section-padding pb-0">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="first-block-partnerships mb-5 mb-lg-0">
                  <h2 className="h2-block-1">
                    {t('partnershipsTitle')}
                    <br></br>
                    <span className="picta-app-italic">
                      {t('partnershipsTitle2')}
                    </span>
                  </h2>
                  <p>
                    {t('partnershipsDes')}
                  </p>
                  <p>
                    {t('partnershipsDes2')}
                  </p>
                  <Link to={""} className="button-picta">
                    {t('partnershipsBtn')}
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
              <h2 className="b-memories">
                {t('partnershipsTitle3')}
              </h2>
              <p>
                {t('partnershipsDes3')}
              </p>
              <p>
                {t('partnershipsDes4')}
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
            <h2 className="b-memories mb-5 text-center">
              {t('partnershipsTitle4')}
            </h2>

            <div className="row">
              <div className="col-lg-3">
                <div className="first-left-card-partnerships">
                  <h2 className="title-block-2">
                    {t('partnershipsDes5')}
                  </h2>

                  <p>
                    {t('partnershipsDes6')}
                  </p>
                </div>
              </div>
              {t("partnershipsCards", {returnObjects: true}).map((data, id) => (
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
                  <p className="text-techno">
                    {t('discover')}
                  </p>
                  <Link to={"/Product"} className="button-picta">
                    {t('discoverBtn')}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pourquoi section-padding pb-0" style={{ backgroundColor: '#f8f8f8' }} >
          <div className="container">
            <div className="whypartner">
              <h2 className="b-memories">
                {t('partnershipsTitle5')}
              </h2>
              <p>
                {t('partnershipsDes7')}
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
                  <h2 className="last-seminar">
                    {t('quoteTitle')}
                  </h2>
                  <div className="block-greymarginleft">
                    <p style={{ borderLeft: '3px solid #a4a4a4', paddingLeft: '10px' }} className="fs_14">
                      {t('quoteDes')}
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
                t("partnershipsCardTwo", {returnObjects: true}).map((data, id) => (
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
            <h2 className="b-memories text-center">
              {t('getInTouch')}
            </h2>

            <div className="d-flex justify-content-center">
              <div className="g-container-form" style={{ maxWidth: '650px', width: '100%' }}>
                <img src={form} alt="" />
                <div className="inputs">
                  <label htmlFor="fname">
                    Your name<span>*</span>
                  </label>
                  <input className="w-100" type="text" id="fname" />
                </div>
                <div className="inputs">
                  <label htmlFor="lname">
                    Your last name<span>*</span>
                  </label>
                  <input className="w-100" type="text" id="lname" />
                </div>
                <div className="inputs">
                  <label htmlFor="email">
                    Your email<span>*</span>
                  </label>
                  <input className="w-100" type="text" id="email" />
                </div>
                <div className="inputs">
                  <label htmlFor="company">
                    Your company number<span>*</span>
                  </label>
                  <input className="w-100" type="text" id="company" />
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
                  <label htmlFor="companyNbr">
                    Your company number<span>*</span>
                  </label>
                  <input className="w-100" type="text" id="companyNbr" />
                </div>
                <div className="inputs">
                  <label htmlFor="business">What business are you in ?</label>
                  <input className="w-100" type="text" id="business" />
                </div>
                <div className="inputs">
                  <label htmlFor="from">Where are you from ?</label>
                  <input className="w-100" type="text" id="from" />
                </div>
                <div className="inputs">
                  <label htmlFor="thoughts">Share your thoughts!</label>
                  <input className="w-100" type="text" id="thoughts" />
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


      </div>




    </>
  );
}

export default Partnerships;
