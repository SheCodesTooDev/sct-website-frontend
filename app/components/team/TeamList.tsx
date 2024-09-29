'use client';
import TeamCard from '../common/cards/TeamCard';
import { team } from '@/app/data/team';
import { motion } from 'framer-motion';

const TeamList = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 sm:gap-x-5 gap-y-12 z-10'>
      {team.map((memeber) => {
        return (
          <div key={memeber.id}>
            <TeamCard {...memeber} />
          </div>
        );
      })}
    </div>
  );
};

export default TeamList;
