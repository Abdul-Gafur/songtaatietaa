import { FC } from 'react'
import MisAndVis from '../../assets/about/mission-and-vision.png'
import ListItem from '../../components/Li'
const AboutUs: FC = () => {
  return (
    <div className="container m-auto py-6 px-4">
      <h1 className="text-3xl text-primary font-semibold border-b-4 border-secondary pb-1">
        Overview
      </h1>

      <section className="space-y-8 my-5">
        <p>
          Founded in 2015 and officially registered in 2018, Songtaa Tietaa
          Company Ltd is a thriving agribusiness located in Zambo, Lawra
          District, Upper West Region. Established by visionary entrepreneur
          Anita Sutha, the enterprise has rapidly grown into a key player in the
          local agribusiness sector, specializing in the production, processing,
          packaging, transportation, and marketing of high-quality breakfast
          cereals.
        </p>
        <p>
          Songtaa Tietaa Company Ltd is dedicated to delivering nutritious and
          delicious breakfast cereals that cater to the diverse needs of its
          target customers, including nursing mothers, hotels, individual
          households, exporters, and schools. The enterprise&apos;s product line
          includes Tombrown, groundnut paste, Dawada, and shea butter, all
          crafted from the finest raw materials sourced directly from local
          farmers and women&apos;s groups in Lawra and Zambo.
        </p>

        <p>
          More than just a business, Songtaa Tietaa Company Ltd is a
          community-driven initiative, proudly employing a staff of 30
          individuals, with 90% of the workforce being women. The majority of
          the team members are youth under the age of 35, reflecting the
          enterprise&apos;s commitment to empowering the next generation. The
          business model supports local farmers and women&apos;s groups,
          ensuring a steady supply of raw materials while fostering economic
          growth in the community.
        </p>

        <p>
          On 10th September 2024, Songtaa Tietaa Company Ltd reached a
          significant milestone by transitioning into a limited liability
          company, marking a new chapter in its growth and development.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-semibold text-secondary">
          Mission and Vision:
        </h2>

        <div className="flex items-start max-md:flex-col gap-6">
          <ul className=" space-y-5 mt-5">
            <ListItem>
              <p>
                <strong>Mission: </strong>Our mission is to eradicate poverty,
                malnutrition, hunger, and inequality in communities, locally and
                internationally, by introducing improved standards, tools,
                technologies,modern farming practices, and ways of living.
              </p>
            </ListItem>

            <ListItem>
              <p>
                <strong>Vision: </strong>To see a world full of unrestricted
                potential and growth devoid of inequality, poverty, hunger, and
                malnutrition.
              </p>
            </ListItem>
          </ul>

          <img src={MisAndVis} alt="mission and vision" />
        </div>

        <div>
          <h2 className="text-3xl font-semibold text-secondary">
            Core Values:
          </h2>

          <ul className="space-y-4 mt-5">
            <ListItem text="Commitment to environmentally friendly practices."></ListItem>
            <ListItem text="Supporting smallholder farmers and creating job opportunities."></ListItem>
            <ListItem text=" Embracing new technologies and modern agricultural techniques."></ListItem>

            <ListItem text="Conducting business with transparency and accountability."></ListItem>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default AboutUs
