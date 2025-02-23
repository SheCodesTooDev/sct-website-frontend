"use client";
import TeamCard from "../common/cards/TeamCard";
import { team, trustee, volunteer } from "@/app/data/team";
import TeamHero from "./TeamHero";

const TeamList = () => {
  return (
    <div>
      <div className="mb-16">
        <TeamHero title="Staff Members" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 sm:gap-x-5 gap-y-12 z-10">
          {team.map((memeber, index) => {
            return (
              <div key={memeber.id}>
                <TeamCard index={index} {...memeber} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="mb-16">
        <TeamHero title="Trustees" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 sm:gap-x-5 gap-y-12 z-10">
          {trustee.map((memeber, index) => {
            return (
              <div key={memeber.id}>
                <TeamCard index={index} {...memeber} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="mb-16">
        <TeamHero title="Volunteers" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 sm:gap-x-5 gap-y-12 z-10">
          {volunteer.map((memeber, index) => {
            return (
              <div key={memeber.id}>
                <TeamCard index={index} {...memeber} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TeamList;
