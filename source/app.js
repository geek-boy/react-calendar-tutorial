import React from 'react'
import { render } from 'react-dom'
import moment from 'moment'

//import BigCalendar from 'react-big-calendar'
import {
  Calendar,
  DateLocalizer,
  momentLocalizer,
  globalizeLocalizer,
  move,
  Views,
  Navigate,
  components,
} from 'react-big-calendar'

// a localizer for Calendar
const localizer = momentLocalizer(moment) // or globalizeLocalizer

import { getEvents } from './gcal'

// Load CSS from react-big-calendar
import css from 'react-big-calendar/lib/css/react-big-calendar.css'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      events: []
    }
  }
  componentDidMount () {
    getEvents((events) => {
      this.setState({events})
    })
  }
  render () {
    return (
      // React Components in JSX look like HTML tags
      <Calendar
        localizer={localizer}
        events={this.state.events}
        endAccessor="end"
        style={{ height: 500 }}
      />
    )
  }
}

render(<App />, document.getElementById('root'))
