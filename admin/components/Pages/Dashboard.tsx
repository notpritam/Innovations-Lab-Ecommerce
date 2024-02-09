import CustomCard from "../CustomCard";
import Header from "../Header";

const Dashboard = () => {
  return (
    <>
      <div className="flex flex-col w-full gap-8">
        <Header title="Dashboard" subtile="Welcome to your dashboard" />

        <div className="flex gap-4 w-full">
          <CustomCard title="100" description="Orders" />
          <CustomCard title="5" description="Category" />
          <CustomCard title="10K" description="Users" />
          <CustomCard title="3" description="Admin" />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
