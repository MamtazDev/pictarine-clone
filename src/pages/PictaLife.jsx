import "../styles/PictaLife.css";
import { Link } from "react-router-dom";
import insta from "../assets/Img/instaLogo.svg";
import linkedin from "../assets/Img/linkedinIcon.svg";
import wttj from "../assets/Img/welcometothejungleLogo.svg";
import Multislider from './../components/Multislider';
import Life from "../components/life/Life";

function PictaLife() {


  return (
    <>
      <div className="picta-life section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <h2 className="fs_60">
                C&apos;est ça, la<br></br>
                <span className="picta-app fs_70">Picta Life</span>
              </h2>
            </div>
            <div className="col-lg-8">
              <div className="picta_life_img">
                <img
                  className="img-fluid"
                  src="https://a.storyblok.com/f/189744/2900x2252/849d1be231/detente-rooftop.jpg"
                  alt="Photo de groupe de la société Pictarine"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="nos-plus section-padding pt-0">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="left-block-2-pictalife">
                <h2 className="b-memories pb-4">Nos plus beaux souvenirs</h2>
                <div className="pb-4">

                  <iframe
                    width="100%"
                    height="550"
                    src="https://www.youtube.com/embed/NOILceT9-5c"
                    allowFullScreen
                  ></iframe>
                </div>
                <h2 className="last-seminar">Notre dernier séminaire</h2>
                <p>
                  Que Calor ! C&apos;est sous le soleil de Palma de Majorque que nous
                  sommes partis en séminaire en 2022. Montgolfière, catamaran,
                  buggy... mais on en a aussi profité pour réfléchir à nos valeurs et
                  à ce qui fait notre ADN ! Bref, on est rentrés avec des étoiles
                  pleins les yeux, et des souvenirs pleins les coeurs.
                </p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="nos_plus_img">
                <img
                  className="img-fluid"
                  src="	https://a.storyblok.com/f/189744/1744x1340/9bbdd8aa3d/jeep-seminaire.jpg/m/1200x0"
                  alt="Photo de groupe"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="futur_carosuel">
        <div className="container">
          <Multislider />
          <div className="multislider_img d-flex gap-4 align-items-center justify-content-center">
            <p>+ sur nos réseaux</p>
            <div className="logo-social">
              <Link to={"https://www.instagram.com/pictarine/"}>
                <img src={insta} />
              </Link>
              <Link to={"https://www.linkedin.com/company/pictarine/"}>
                <img src={linkedin} alt="linkedin logo" />
              </Link>
              <Link
                to={"https://www.welcometothejungle.com/fr/companies/pictarine"}
              >
                <img className="wttj" src={wttj} alt="instagram logo" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="valeurs_picta section-padding pb-0">
        <div className="container">
          <div className="block-3-pictalife">
            <h2 className="b-memories fs_40">Les valeurs Picta</h2>
            <p>
              On a profité de notre séminaire 2022 à Palma de Majorque, pour définir
              tous ensemble nos valeurs ! Et oui, pour que ça ne soit pas que des
              mots et que ça nous ressemble vraiment.
            </p>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="valeurs_picta_fire">
                <img
                  className="post-it-fire img-fluid"
                  src="https://a.storyblok.com/f/189744/999x1068/5a536fe3e7/ignite-anim.gif/m/1200x0"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="middle-block-4-pictalife">
                <h2 className="last-seminar">Ignite your spark</h2>
                <p>
                  On sait reconnaitre chacun pour sa singularité et on réalise un
                  accompagnement personnalisé pour que tout le monde s&pos;épanouisse
                  dans son travail. Ce qui permet d&apos;évoluer facilement chez nous
                  ! Le record ? 1,2,3,4...5 métiers différents chez Pictarine ! Qui
                  dit mieux ?
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="block-4-pictalife">
                <img
                  className="post-it-teams-gif"
                  src="https://a.storyblok.com/f/189744/800x836/b0a6e1d3a1/evolution-team.gif/m/1200x0"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="teaming_up section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="teaming_up_img">
                <img
                  className="img-fluid"
                  src="https://a.storyblok.com/f/189744/934x1137/0cb0dca4ac/exercice-groupe-seminaire.png/m/1200x0"
                  alt=""
                />
              </div>
            </div>

            <div className="col-lg-3">
              <div className="teaming_up_img">
                <img
                  className="img-fluid"
                  src="	https://a.storyblok.com/f/189744/934x1137/4879eee38d/teambuilding-escapegame.png/m/1200x0"
                  alt=""
                />
              </div>
            </div>

            <div className="col-lg-3">
              <div className="teaming_up_img">
                <img
                  className="img-fluid"
                  src="https://a.storyblok.com/f/189744/930x987/04f9b61530/teaming-up-anim.gif/m/1200x0"
                  alt=""
                />
              </div>
            </div>

            <div className="col-lg-3">
              <div className="teaming-up">
                <h2 className="last-seminar">Teaming up for the adventure</h2>
                <p>
                  Chez Pictarine, on prône l&apos;entraide et l&apos;esprit
                  d&apos;équipe, mais aussi le partage et la transmission. Et
                  c&apos;est d&apos;autant plus utile quand on se challenge
                  continuellement pour explorer en dehors de notre zone de confort.
                  Seul on va plus vite, mais ensemble on va plus loin !
                </p>
              </div>
            </div>


          </div>
        </div>
      </div>

      <div className="making">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3">
              <div className="making_img">
                <img
                  className="img-fluid"
                  src="https://a.storyblok.com/f/189744/819x961/85eafdd7c0/impossible-possible-anim.gif/m/1200x0"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-3">
              <div className="discover-by-ceo">
                <h2 className="last-seminar">Making the impossible possible</h2>
                <p>
                  Parce qu’il nous a fallu beaucoup d’audace, de débrouillardise et de
                  résilience pour en arriver là ! Et le mieux placé pour expliquer
                  notre parcours et nos ambitions c’est Guillaume, notre CEO.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="block-6-pictalife">
                <iframe
                  width="100%"
                  height="360"
                  src="https://www.youtube.com/embed/AwrZoNgM6HU?si=-vEVAVMpw7JCuI58"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grandir section-padding pb-0">
        <Life />
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

    </>
  );
}

export default PictaLife;
