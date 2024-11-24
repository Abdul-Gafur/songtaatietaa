import CompetitiveAdvantage from '../../components/CompetitiveAdv'
import IntroText from '../../components/Intro'
import InvestmentAsk from '../../components/InvestmentAsk'
import MarketValidation from '../../components/MarketValidation'
import ProductsPortfolio from '../../components/Products'
import TargetAudience from '../../components/TargetAudience'
import TheProblem from '../../components/TheProblem'
import BoardOfDirectors from '../team/BoD'
import OurTeamMembers from '../team/Team'
import Hero from './Hero'

const HomePage = () => {
  return (
    <div className=" " id='top'>
      <Hero />
      <ul className="container mx-auto my-6 space-y-20 px-4">
        <li>
          <IntroText  />
        </li>
        <li id='problem'>
          <TheProblem />
        </li>
        <li id='products'>
          <ProductsPortfolio />
        </li>
        <li id='validation'>
          <MarketValidation />
        </li>
        <li id='audience'>
          <TargetAudience />
        </li>
        <li id='investment'>
          <InvestmentAsk />
        </li>
        <li id='competitive-adv'>
          <CompetitiveAdvantage />
        </li>
        <li id='team'>
          <OurTeamMembers />
        </li>
        <li id='directors'>
          <BoardOfDirectors />
        </li>
      </ul>
    </div>
  )
}

export default HomePage
