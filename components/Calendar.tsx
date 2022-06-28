// @ts-ignore
import Calendar from '@ericz1803/react-google-calendar'

// @ts-ignore
export default function SiteCalendar({gKey}) {
  console.log(gKey)
  const calendars = [
    {calendarId: 'team4153.erickson@gmail.com'},
    {calendarId: "en.usa#holiday@group.v.calendar.google.com"}
  ]
  return(
    <Calendar apiKey={gKey} calendars={calendars}/>
  )
}