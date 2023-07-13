import BidComponent from "./profilecomp/BidComponent";
import ProductComponent from "./profilecomp/ProductComponent";
import ProfileComponent from "./profilecomp/ProfileComponent";


const Profile = () => {
  return (
    <div className="grid grid-cols-3 gap-14">
      <div>
        <ProfileComponent />
      </div>
      <div className="col-span-2 p-12 shadow-2xl flex flex-col gap-8">
          <ProductComponent />
          <BidComponent />
      </div>
    </div>
  );
};

export default Profile;
