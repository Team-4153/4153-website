// @ts-ignore
import Calendar from '@ericz1803/react-google-calendar'

export default function SiteCalendar() {
  const key = 'AIzaSyCV2g6aUdU88cwThzWeYBR-WPzCd7fXYwk'
  console.log(key, process.env.CALENDAR)
  const calendars = [
    {calendarId: 'team4153.erickson@gmail.com'}
  ]
  return(
    <Calendar apiKey={key} calendars={calendars}/>
  )
}