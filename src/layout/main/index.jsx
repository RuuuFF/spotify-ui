import {
  Container,
  MainContent
} from "./style"

import MainHeader from "../../components/mainHeader"
import CardWide from "../../components/cardWide"
import Card from "../../components/card"

const Main = props => {
  function getGreeting() {
    const hourNow = new Date().getHours()
    if (hourNow >= 5 && hourNow < 12) {
      return "Good morning"
    } else if (hourNow >= 12 && hourNow < 18) {
      return "Good afternoon"
    } else {
      return "Good evening"
    }
  }

  return (
    <Container>
      <MainHeader />
      <MainContent>
        <section className="main-section">
          <div className="main-section-header">
            <h2 className="main-section-title">{getGreeting()}</h2>
          </div>

          <div className="main-section-cards">
            <CardWide title="Daily Mix 1" image="./images/daily-example1.jpg" />
            <CardWide title="Daily Mix 2" image="./images/daily-example2.jpg" />
            <CardWide title="Liked Songs" image="./images/liked-songs.png" />
            <CardWide title="My Playlist #1" />
            <CardWide title="My Playlist #2" />
            <CardWide title="My Playlist #3" />
          </div>
        </section>

        <section className="first-section">
          <div className="first-section-header">
            <h2 className="first-section-title">
              <a href="/" onClick={e => e.preventDefault()}>Your top mixes</a>
            </h2>
          </div>

          <div className="first-section-cards">
            <Card title="My Playlist #1" description="Best Hardtyle tracks and remixes of 2020, 2019, 2012 and all time | Hard Dance | Rawstyle | Euphoric | Hardcore | Carnaval..." player />
            <Card title="My Playlist #2" description="John De Sohn, Martin Garrix, David Guetta and more" player />
            <Card title="My Playlist #3" description="The Fratellis, Panic! At The Disco, Bleachers and more" player />
          </div>
        </section>
      </MainContent>
    </Container>
  )
}

export default Main