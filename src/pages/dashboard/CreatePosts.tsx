import Sidebar from "../../components/sidebar/Sidebar";

const CreatePosts = () => {
  return (
    <div className="w-[100%] flex">
      <div className="w-[20%]">
        <Sidebar />
      </div>
      <div className="w-[50%] bg-[black] overflow-y-auto h-[100vh]"></div>
      <div className="w-[30%] bg-[black] overflow-y-auto h-[100vh]">
        <h1>CreatePosts</h1>
      </div>
    </div>
  );
};

export default CreatePosts;
