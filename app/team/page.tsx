import React from "react";
import TeamHero from "../components/team/TeamHero";
import TeamList from "../components/team/TeamList";

const Team = () => {
  return (
    <div className="sct-bg flex flex-col w-full justify-center items-center py-20 px-8 xl:px-32 text-start">
      <TeamHero title=" Meet the Team;" />
      <TeamList />
    </div>
  );
};

export default Team;
