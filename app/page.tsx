import { Droplets, MapPin, Search, Sun, Thermometer, Wind } from 'lucide-react'

const hourlyForecast = [
  { time: 'Now', temperature: '23°' },
  { time: '3 PM', temperature: '24°' },
  { time: '4 PM', temperature: '23°' },
  { time: '5 PM', temperature: '22°' },
  { time: '6 PM', temperature: '20°' },
]

const details = [
  { label: 'Feels like', value: '20°', icon: Thermometer },
  { label: 'Humidity', value: '21%', icon: Droplets },
  { label: 'Wind speed', value: '7 km/h', icon: Wind },
]

export default function Page() {
  return (
    <main className="weather-shell">
      <section className="hero-panel" aria-label="Current weather">
        <div className="rain-layer" aria-hidden="true" />
        <div className="hero-content">
          <div className="brand" aria-label="Aura weather">AURA<span>°</span></div>

          <div className="current-weather">
            <div className="location"><MapPin size={21} strokeWidth={1.8} /> <span>Tashkent, UZ</span></div>
            <div className="temperature-row">
              <p className="temperature">24°</p>
              <div className="condition-mark">
                <Sun size={52} strokeWidth={1.6} />
                <span>Clear Sky</span>
              </div>
            </div>
            <p className="date">Monday, October 19</p>
          </div>

          <div className="live-status">
            <span>LIVE CONDITIONS</span>
            <strong>UPDATED JUST NOW</strong>
          </div>
        </div>
      </section>

      <aside className="details-panel" aria-label="Weather forecast details">
        <header className="city-header">
          <span>Tashkent</span>
          <button className="icon-button" aria-label="Search city"><Search size={26} strokeWidth={1.8} /></button>
        </header>

        <div className="details-content">
          <div className="section-heading"><span>WEATHER DETAILS</span><i aria-hidden="true" /></div>
          <h1>Clear Sky</h1>
          <div className="metric-list">
            {details.map(({ label, value, icon: Icon }) => (
              <div className="metric" key={label}>
                <Icon size={25} strokeWidth={1.7} />
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>

          <div className="forecast-section">
            <div className="forecast-title">HOURLY FORECAST</div>
            <div className="forecast-list">
              {hourlyForecast.map(({ time, temperature }) => (
                <div className="forecast-row" key={time}>
                  <span>{time}</span>
                  <Sun size={27} strokeWidth={1.7} />
                  <strong>{temperature}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </main>
  )
}
