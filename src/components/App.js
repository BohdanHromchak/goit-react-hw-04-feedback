import { useEffect, useState } from "react";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Section from "./Section/Section";
import Notification from "./Notification/Notification";


export default function App() {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [totalFeedback, setTotalFeedback] = useState(0)
  const [positivePercentage, setPositivePercentage] = useState()

  const handleGoodFeedback = () => {
    setGood(state => state + 1)
  }
  const handleNeutralFeedback = () => {
    setNeutral(state => state + 1)
  }
  const handleBadFeedback = () => {
    setBad(state => state + 1)
  }

useEffect(() => {
const totalFeedback = good + neutral + bad
setTotalFeedback(totalFeedback)
}, [good, neutral, bad])

useEffect(() => {
const positivePercentagen = ((good / totalFeedback) * 100).toFixed(0)
setPositivePercentage(positivePercentagen)
}, [good, totalFeedback])

    return (
      <Section title="Please leave feedback" className="App">
        <FeedbackOptions setGood={handleGoodFeedback} setNeutral={handleNeutralFeedback} setBad={handleBadFeedback}/>
        {good > 0 || neutral > 0 || bad > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    );

}

