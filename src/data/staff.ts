import ceo from '../assets/staff/AnitaSutha.png'
import advisor from '../assets/staff/BernardGuri.png'
import other from '../assets/staff/BridgetNuotuo.png'
import executiveAssistant from '../assets/staff/VictorNara.png'
import deputyDirector from '../assets/staff/TracyNuotuo.png'

const team = [
  {
    id: 1,
    name: 'Mrs Anita Sutha',
    role: 'CEO and Founder',
    image: ceo,
    specialRole: 'Experience in agriculture and nutrition',
  },
  {
    id: 2,
    name: 'Mr. Bernard Guri',
    role: 'ADVISOR',
    image: advisor,
    specialRole: 'Civil society',
  },
  {
    id: 3,
    name: 'Ms Tracy Nuotuo',
    role: 'DEPUTY DIRECTOR',
    image: deputyDirector,
    specialRole: 'Experience in data analysis',
  },
  {
    id: 4,
    name: 'Mr. Victor Nara',
    role: 'EXECUTIVE ASST',
    image:executiveAssistant,
    specialRole: 'Experience in technology and business mgt',
  },
]
const directors = [
  {
    name: 'Mrs Anita Sutha',
    role: 'CEO',
    image:ceo,
    position: 'Board Member',
  },
  {
    name: 'Mr. Bernard Guri',
    role: 'ADVISOR',
    image: advisor,
    position: 'Board Chair',
  },
  {
    name: 'Bridget KamintaLekanong Nuotuo',
    image: other,
    position: 'Board Member',
  },
]

export const staff = {
  directors,
  team,
  members: {
    ceo: team.find((m) => m.id == 1),
    deputyDirector: team.find((m) => m.id == 3),
    executiveAssist: team.find((m) => m.id == 4),
  },
}
