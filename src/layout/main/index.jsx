import {
  Container,
  MainContent
} from "./style"

import MainHeader from "../../components/mainHeader"
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
            <Card title="Daily Mix 1" image="./images/liked-songs.png" />
          </div>
        </section>
      </MainContent>
    </Container>
  )
}

export default Main