import profile from "../../assets/images/profile.png";

const Header = () => {
    return (
        <div className="flex justify-between mt-5 pb-5 mx-5 border-b-2 border-gray-500">
            <h1 className="text-5xl font-bold text-center">Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;