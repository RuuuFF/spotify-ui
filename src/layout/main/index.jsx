import {
  Container,
  MainContent
} from "./style"

import MainHeader from "../../components/mainHeader"
import MainSection from "../../components/mainSection"
import Section from "../../components/section"
import CardWide from "../../components/cardWide"
import Card from "../../components/card"

const Main = props => (
  <Container>
    <MainHeader />

    <MainContent>
      <MainSection>
        <CardWide name="Daily Mix 1" />
        <CardWide name="Daily Mix 2" />
        <CardWide name="Liked Songs" image="./images/liked-songs.png" />
        <CardWide name="My Playlist #1" />
        <CardWide name="My Playlist #2" />
        <CardWide name="My Playlist #3" />
      </MainSection>

      <Section title="Shows you might like">
        <Card name="Podcast 1" description="Podcast 1" />
        <Card name="Podcast 2" description="Podcast 2" />
        <Card name="Podcast 3" description="Podcast 3" />
        <Card name="Podcast 4" description="Podcast 4" />
        <Card name="Podcast 5" description="Podcast 5" />
      </Section>

      <Section title="Made For ruuuff">
        <Card name="Daily Mix 1" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, velit." player />
        <Card name="Daily Mix 2" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, velit." player />
        <Card name="Daily Mix 3" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, velit." player />
        <Card name="Daily Mix 4" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, velit." player />
        <Card name="Daily Mix 5" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, velit." player />
      </Section>

      <Section title="Recently played">
        <Card name="My Playlist #1" description="Lorem ipsum, dolor sit amet consectetur adipisicing." player />
        <Card name="My Playlist #2" description="Lorem ipsum, dolor sit amet consectetur adipisicing." player />
        <Card name="My Playlist #3" description="Lorem ipsum, dolor sit amet consectetur adipisicing." player />
        <Card name="My Playlist #4" description="Lorem ipsum, dolor sit amet consectetur adipisicing." player />
        <Card name="My Playlist #5" description="Lorem ipsum, dolor sit amet consectetur adipisicing." player />
      </Section>

      <Section title="Your favorite artists">
        <Card name="Kygo" image="./images/kygo.jpg" player artist />
        <Card name="WALK THE MOON" image="./images/walk-the-moon.jpg" player artist />
        <Card name="Sandro Cavazza" image="./images/sandro-cavazza.jpg" player artist />
        <Card name="James Blunt" image="./images/james-blunt.jpg" player artist />
        <Card name="David Guetta" image="./images/david-guetta.jpg" player artist />
      </Section>
    </MainContent>
  </Container>
)

export default Main