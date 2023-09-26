import { HiAcademicCap, HiNewspaper, HiClock, HiBriefcase, HiGlobeAsiaAustralia, HiUserGroup } from 'react-icons/hi2';

function SolutionsCard({ icon, heading, content }) {

  const icons = {
    HiAcademicCap,
    HiNewspaper,
    HiClock,
    HiBriefcase,
    HiGlobeAsiaAustralia,
    HiUserGroup,
  };
  const Icon = icons[icon];
  return (
    <div className="min-h-[200px] flex flex-col items-center p-2 bg-[#0047B3] space-y-2 rounded-lg shadow-2xl shadow-[#0047B3] text-center">
      {Icon && <Icon className="text-3xl text-white" />}
      <h2 className="font-bold  text-[#61C0BF]">{heading}</h2>
      <p className="text-sm text-white">
        {content}
      </p>
    </div>
  );
}

export default SolutionsCard;
