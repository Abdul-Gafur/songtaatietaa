 
import BoardOfDirectors from './BoD'
import OurTeamMembers from './Team'

const TeamPage = () => {
  return (
    <div className='flex flex-col justify-center container mx-auto py-20 px-4 space-y-40'>
      <OurTeamMembers />
      <BoardOfDirectors />
    </div>
  )
}

export default TeamPage