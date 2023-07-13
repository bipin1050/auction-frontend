import img from "../../../assets/auction-icon.jpg";

const ProfileComponent = () => {
  return (
    <div className="px-10 py-6 shadow-2xl">
      <div className="flex justify-between items-center">
        <img src={img} width={100} />
        <div className="font-bold text-lg text-main leading-5 text-right">
          <div>Bipin Khanal</div>
          <div className="text-base">#bipin_1078</div>
        </div>
      </div>
      <div className="font-bold text-lg text-main py-3 leading-6">
        Bid Placed : 10
        <br />
        Active Bid : 3
        <br />
        Closed Bid : 7
      </div>
    </div>
  );
};

export default ProfileComponent;