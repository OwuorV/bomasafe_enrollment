// type NavLink = {
//   label: string;
//   href: string;
// };
// interface NavBarProps {
//   links: NavLink[];
//   logo: React.ReactNode;
// }
// export default function NavBar({ links, logo }: NavBarProps) {
//   return (
//     <main>
//       <div className="nav">{logo}</div>
//       <div>
//         {links.map((link) => (
//           <a key={link.href} href={link.href}>
//             {link.label}
//           </a>
//         ))}
//       </div>
//     </main>
//   );
// }
import Image from "next/image";
export default function NavBar() {
  return (
    <main>
      <div className="navigation h-[65px] w-full border-b-[#E5E8EB] border-b-[1px] border-b-solid flex px-[40px] py-[12px] justify-between ">
        <div className="logo flex gap-[16px] items-center">
          <div className="logo h-[16px] w-[16px] object-cover">
            <Image
              src={"/logo.svg"}
              alt={"bomasafeLogo"}
              width={16}
              height={16}
              className="object-cover"
            />
          </div>
          <span className="text-black font-bold text-[18px]">BomaSafe</span>
        </div>
        <div className="NavLinks flex items-center gap-[36px] ">
          <div className="ul flex items-center gap-[32px]">
            <ul className="hidden md:flex gap-[36px] text-black font-500 text-[#0D141C]">
              <li>Home</li>
              <li>Courses</li>
              <li>Instructors</li>
              <li>About Us</li>
            </ul>
            <span className="h-[40px] hidden md:flex  w-[84px] bg-[#E8EDF2] flex items-center justify-center rounded-[20px] text-black p-[16px]">
              Login
            </span>
            <div className="userProfile overflow-hidden h-[40px] w-[40px]">
              <Image
                src={"/user-profile.svg"}
                alt="user profile image"
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
