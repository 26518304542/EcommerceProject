import React from "react";
import TeamCard from "./TeamCards";

const team = [
  { name: "Username", role: "Profession", img: "/images/team-1.jpg" },
  { name: "Username", role: "Profession", img: "/images/team-2.jpg" },
  { name: "Username", role: "Profession", img: "/images/team-3.jpg" },
  { name: "Username", role: "Profession", img: "/images/team-4.jpg" },
];

export default function Team() {
  return (
    <section className="bg-white relative">
      {/* Container: mobile-first, desktop centered max width */}
      <div className="mx-auto w-[361px] md:w-[1050px] px-4 md:px-0 md:pt-[112px] py-8 flex flex-col items-center md:gap-[112px]">

        {/* Header */}
        <div className="w-full flex flex-col items-center md:pt-0">
          <div className="w-[361px] md:w-[607px] flex flex-col items-center text-center md:items-center">
            <h2
              className="text-[40px] leading-[50px] font-extrabold text-[#252B42]"
              style={{ fontFamily: "Montserrat, sans-serif", width: 316 }}
            >
              Meet Our Team
            </h2>

            <p
              className="text-[14px] leading-[20px] text-[#737373] mt-4 text-center"
              style={{ fontFamily: "Montserrat, sans-serif", width: 302 }}
            >
              Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
            </p>
          </div>
        </div>

        {/* Cards list - mobile stacked, desktop 3-column row */}
        <div className="w-full flex flex-col items-center mt-8 md:mt-0">
          <div className="w-[329px] md:w-[1034px] flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-[30px] justify-center">
            {team.slice(0, 3).map((member, idx) => (
              <div key={idx} className="md:flex-0">
                <TeamCard name={member.name} role={member.role} img={member.img} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
