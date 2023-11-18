import IsotopeFilter from "../components/isotopeFilter/IsotopeFilter";
import "../styles/Team.css";
import { Link } from "react-router-dom";
import { pictaTeam } from "../utils/pictaTeam";
import { useState } from "react";
function Team() {

  const [selectedTab, setSelectedTab] = useState('all'); // Default to show all data

  const handleTabClick = (type) => {
    setSelectedTab(type);
  };

  const filteredData = selectedTab === 'all'
    ? pictaTeam
    : pictaTeam.filter(item => item.type === selectedTab);
  return (
    <>
      <div className="la_team">
        <div className="la_team_cover section-padding pb-0">
          <div className="container">
            <div className="la_team_img">
              <img
                className="img-picta-palma img-fluid mb-5"
                src="https://a.storyblok.com/f/189744/2800x1078/10c9740197/team-complete-majorque.jpg"
                alt=""
              />
              <p className="xplore-title">
                La seule, la vraie,
                <span className="picta-app-italic">la Picta Team</span>
              </p>
            </div>
          </div>
        </div>

        <div className="masonaary-items">
          <div className="container">
            <div className='btn-category d-flex flex-wrap gap-4'>
              {["all", 'product', 'people', 'marketing', 'finance', 'engineering', 'partnership',].map((type, index) => (
                <button key={index} onClick={() => handleTabClick(type)} className="text-capitalize">
                  {type}
                </button>
              ))}
            </div>

            <div className="row">
              {
                selectedTab === 'all' && (
                  <div className="col-lg-3">
                    <div className="d-flex align-items-end h-100 p-4">
                      <div>
                        <h1>49</h1>
                        <h2>people</h2>
                        <p>Mais on grandit très vite!</p>
                      </div>
                    </div>
                  </div>
                )

              }

              {filteredData.map((item) => (
                <div className="col-lg-3 mb-4" key={item.id}>
                  <div className="team_info_wrapper position-relative">
                    <div className="team_img">
                      <img className="img-fluid" src={item.img} alt={item.name} />
                    </div>
                    <div className="team_des position-absolute top-0">
                      <div className="team_info position-absolute bottom-0">
                        <p className="fw-bold fs-4 mb-0">{item.name}</p>
                        <p>{item.title}</p>
                      </div>
                      <div className="team_hover_info">
                        <p className="fw-bold fs-4 mb-0">{item.name}</p>
                        <p>{item.title}</p>
                        <p>{item.otherInfoOne}</p>
                        <p>{item.otherInfoTwo}</p>
                        <p>{item.otherInfoThree}</p>
                        <p>{item.otherInfoFour}</p>
                        <p>{item.otherInfoFive}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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

export default Team;
