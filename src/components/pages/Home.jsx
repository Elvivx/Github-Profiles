import Search from "../Search/Search"
import Results from "../Search/Results"
import { GitContext } from "../context/contexts"
import useDeviceTheme from "../helper/useDeviceTheme"
import { useContext, useEffect, useRef } from "react"

function Home() {
  const {
    state: { theme, users },
    dispatch,
  } = useContext(GitContext)

  const appTheme = useDeviceTheme()
  const app = useRef(document.querySelector("body"))

  useEffect(() => {
    dispatch({ type: "theme", payload: appTheme })
    app.current.classList.add(appTheme)
  }, [])

  const themeMode = () => {
    if (theme === "light") {
      app.current.classList.replace("dark", "light")
      dispatch({ type: "theme", payload: "dark" })
    }

    if (theme === "dark") {
      app.current.classList.replace("light", "dark")
      dispatch({ type: "theme", payload: "light" })
    }
  }

  return (
    <>
      <div className='logo'>
        <div className='logoIcon'>
          <svg enableBackground='new 0 0 212.4575 186.23' id='github' version='1.1' viewBox='0 0 212.4575 186.23' xmlns='http://www.w3.org/2000/svg'>
            <g>
              <path
                d='M151.7899,86.2343c-7.078,0.1229-14.154,0.5605-21.2324,0.7069c-12.3184,0.248-24.6404,0.5664-36.9608,0.512   c-11.1756-0.0472-22.3576-0.9728-33.5176-0.7052c-7.3164,0.1776-14.3732,2.2948-20.1308,7.584   c-9.9472,9.1368-12.5216,21-11.3144,33.8068c1.92,20.3572,9.2716,31.4492,29.1152,37.0644   c15.7928,4.4704,31.9628,5.2088,48.1992,4.9744c5.254,0,10.5096,0.1367,15.7576-0.0292   c12.7228-0.4064,25.264-2.2072,37.3576-6.3596c10.8456-3.7225,18.7988-10.6912,22.5724-22.166   c2.6736-8.1288,3.7148-16.3885,2.5544-24.8532C182.4131,103.8103,170.9151,85.91,151.7899,86.2343z M70.2139,146.2303   c-8.836,0-16-8.9551-16-20c0-11.0447,7.164-20,16-20s16,8.9553,16,20C86.2139,137.2752,79.0499,146.2303,70.2139,146.2303z    M146.2139,146.2303c-8.836,0-16-8.9551-16-20c0-11.0447,7.164-20,16-20s16,8.9553,16,20   C162.2139,137.2752,155.0499,146.2303,146.2139,146.2303z'
                fill='none'
              />
              <path
                d='M200.2451,59.1876c-2.5076-3.4493-4.3632-6.3888-3.8748-11.4396   c0.6796-7.0664-0.3536-14.3964-1.3204-21.5177C193.8311,17.246,191.5263,8.49,187.8723,0   c-9.0332,1.9356-17.9808,3.49-25.9632,8.0976c-8.4648,4.8908-16.6952,10.2148-25.08,15.25   c-0.9532,0.5704-2.3124,0.8848-3.3848,0.7032c-17.9668-3.1368-35.92-3.0196-53.8984-0.086   c-1.3632,0.2244-3.0724-0.2345-4.2948-0.9608c-4.4436-2.6604-8.6564-5.7344-13.1232-8.3516   c-11.656-6.844-23.66-12.8224-37.494-14.5901c-0.3928,0.8597-0.7188,1.4785-0.9612,2.1253   c-4.164,11.2204-6.6424,22.8436-7.4276,34.82c-0.2872,4.3516-0.6092,8.8048,0,13.0724c0.3456,2.4296-0.004,3.8788-1.3924,5.6132   C10.0011,61.742,6.2159,68.41,3.7511,75.912c-4.6972,14.2948-4.4004,28.8612-2.2756,43.4748   c1.7268,11.9744,4.7344,23.5368,11.3244,33.8728c13.1856,20.6816,32.8924,29.7736,55.5724,31.7052   c19.3084,1.6464,38.8004,1.1992,58.2128,1.2364c13.8552,0.0251,27.5704-1.4924,40.7148-6.6389   c20.3748-7.9727,33.8592-22.6035,40.2752-44.1659c3.7344-12.5448,5.2324-25.3964,4.8144-38.4981   C211.9483,83.088,208.3391,70.332,200.2451,59.1876z M181.6359,141.6228c-3.7736,11.4748-11.7268,18.4435-22.5724,22.166   c-12.0936,4.1524-24.6348,5.9532-37.3576,6.3596c-5.248,0.1659-10.5036,0.0292-15.7576,0.0292   c-16.2364,0.2344-32.4064-0.504-48.1992-4.9744c-19.8436-5.6152-27.1952-16.7072-29.1152-37.0644   c-1.2072-12.8068,1.3672-24.67,11.3144-33.8068c5.7576-5.2892,12.8144-7.4064,20.1308-7.584   c11.16-0.2676,22.342,0.658,33.5176,0.7052c12.3204,0.0544,24.6424-0.264,36.9608-0.512   c7.0784-0.1464,14.1544-0.584,21.2324-0.7069c19.1252-0.3243,30.6232,17.576,32.4004,30.5353   C185.3507,125.2343,184.3095,133.494,181.6359,141.6228z'
                fill='#2F4556'
              />
              <ellipse cx='70.2139' cy='126.2303' fill='#2F4556' rx='16' ry='20' />
              <ellipse cx='146.2139' cy='126.2303' fill='#2F4556' rx='16' ry='20' />
            </g>
          </svg>
          <h1>Finder</h1>
        </div>
        <div className='theme' onClick={themeMode}>
          {theme === "light" && (
            <svg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'>
              <rect fill='none' />
              <circle cx='128' cy='128' r='68' />
              <path d='M128,44a8,8,0,0,0,8-8V16a8,8,0,0,0-16,0V36A8,8,0,0,0,128,44Z' />
              <path d='M57.3,68.6a8.1,8.1,0,0,0,11.3,0,8,8,0,0,0,0-11.3L54.5,43.1A8.1,8.1,0,1,0,43.1,54.5Z' />
              <path d='M44,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H36A8,8,0,0,0,44,128Z' />
              <path d='M57.3,187.4,43.1,201.5a8.1,8.1,0,0,0,0,11.4,8.5,8.5,0,0,0,5.7,2.3,8.3,8.3,0,0,0,5.7-2.3l14.1-14.2a8,8,0,0,0-11.3-11.3Z' />
              <path d='M128,212a8,8,0,0,0-8,8v20a8,8,0,0,0,16,0V220A8,8,0,0,0,128,212Z' />
              <path d='M198.7,187.4a8,8,0,0,0-11.3,11.3l14.1,14.2a8.3,8.3,0,0,0,5.7,2.3,8.5,8.5,0,0,0,5.7-2.3,8.1,8.1,0,0,0,0-11.4Z' />
              <path d='M240,120H220a8,8,0,0,0,0,16h20a8,8,0,0,0,0-16Z' />
              <path d='M193.1,70.9a7.8,7.8,0,0,0,5.6-2.3l14.2-14.1a8.1,8.1,0,0,0-11.4-11.4L187.4,57.3a8,8,0,0,0,0,11.3A7.8,7.8,0,0,0,193.1,70.9Z' />
            </svg>
          )}

          {theme === "dark" && (
            <svg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'>
              <title />
              <path d='M264,480A232,232,0,0,1,32,248C32,154,86,69.72,169.61,33.33a16,16,0,0,1,21.06,21.06C181.07,76.43,176,104.66,176,136c0,110.28,89.72,200,200,200,31.34,0,59.57-5.07,81.61-14.67a16,16,0,0,1,21.06,21.06C442.28,426,358,480,264,480Z' />
            </svg>
          )}
        </div>
      </div>
      <Search />
      {!!users.length && <Results />}
    </>
  )
}
export default Home
