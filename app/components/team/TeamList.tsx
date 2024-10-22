'use client';
import TeamCard from '../common/cards/TeamCard';
import { team, advisors, trainers } from '@/app/data/team';
import { motion } from 'framer-motion';
import TeamHero from './TeamHero';

const TeamList = () => {
  return (
    <div>
      <div className='mb-16'>
        <TeamHero title=' SCT Team' />
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 sm:gap-x-5 gap-y-12 z-10'>
          {team.map((memeber) => {
            return (
              <div key={memeber.id}>
                <TeamCard {...memeber} />
              </div>
            );
          })}
        </div>
      </div>
      <div className='mb-16'>
        <TeamHero title=' SCT Advisors' />
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 sm:gap-x-5 gap-y-12 z-10'>
          {advisors.map((memeber) => {
            return (
              <div key={memeber.id}>
                <TeamCard {...memeber} />
              </div>
            );
          })}
        </div>
      </div>
      <div className='mb-16'>
        <TeamHero title='Technical Trainers' />
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 sm:gap-x-5 gap-y-12 z-10'>
          {trainers.map((memeber) => {
            return (
              <div key={memeber.id}>
                <TeamCard {...memeber} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TeamList;
