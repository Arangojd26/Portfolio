import ContainerDescription from "../../../Shared/ContainerDescription/ContainerDescription.component";
import ContainerParallax from "../ContainerParallax/ContainerParallax.component";
import Description from "../Description/Description.component";
import "./ContainerProfile.scss";

const title = <>DAVID <br /> ARANGO</>;
const subtitle = <>web developer / <br /> multimedia engineer</>;

const ContainerProfile = ({ idPage, showPicture }) => {
  return (
    <div className="o-container-profile">
      {idPage === 0 && (
        <ContainerDescription>
          <Description title={title} subtitle={subtitle} />
        </ContainerDescription>
      )}
      <div className="o-container-image-profile">
        <ContainerParallax idPage={idPage} showPicture={showPicture} />
      </div>
    </div>
  );
};

export default ContainerProfile;
