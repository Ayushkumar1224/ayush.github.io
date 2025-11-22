import { PROFILE_IMAGE } from "../../data/personal";

export default function Sidebar() {
  return (
    <aside className="w-20 bg-[#0a0f1f] flex flex-col items-center py-10">
      <img
        src={PROFILE_IMAGE}
        className="w-14 h-14 rounded-full border border-blue-500 object-cover"
        alt="Ayush"
      />

      {/* nav icons here */}
    </aside>
  );
}
