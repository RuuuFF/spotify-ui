import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { togglePlayer, updateTime } from "../store/spotifyReducer"

const useTimer = ({ time, isPlaying, durationInSeconds }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    const timerId = isPlaying ? setInterval(() => {
      if (time >= durationInSeconds) return dispatch(togglePlayer())
      dispatch(updateTime(++time))
    }, 1000) : false

    return () => clearInterval(timerId)
  }, [time, isPlaying, durationInSeconds, dispatch])
}

export default useTimer