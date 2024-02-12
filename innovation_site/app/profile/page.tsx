import useUserStore from "@/lib/store/store";
import UserProfile from "@/components/UserProfile";

function Page() {
  return (
    <div className="mt-[60px]">
      <div className="p-4 border-b-[1px] border-black">
        <h1 className="text-xl font-medium">Profile</h1>
      </div>
      <UserProfile />
    </div>
  );
}

export default Page;
