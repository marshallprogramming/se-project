import React, { Component } from 'react';
import axios from 'axios'

import Header from './components/headerComponents/Header'
import Feed from './components/feedComponents/Feed'
import Footer from './components/footerComponents/Footer'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      itemTypes: ['story', 'job', 'comment', 'poll', 'pollopt'],
      selectedItemType: 'story',
      items: [],
      baseUrl: 'https://hacker-news.firebaseio.com/',
      selectedListing: 'top'
    }

    this.handleClick = this.handleClick.bind(this)
    this.getTopItemIds = this.getTopItemIds.bind(this)
    this.getRecentItemIds = this.getRecentItemIds.bind(this)
    this.toggleListingType = this.toggleListingType.bind(this)
  }

  toggleListingType () {
    this.setState({
      selectedListing: this.state.selectedListing === 'top' ? 'recent' : 'top'
    })
  }

  handleClick (e) {
    const { value } = e.target
    this.setState({ selectedItemType: value })
  }

  getTopItemIds () {
    return axios.get(this.state.baseUrl + 'v0/topstories.json')
      .then(topData => {
        return axios.get(this.state.baseUrl + 'v0/jobstories.json')
          .then(jobData => topData.concat(jobData))
      })
      .catch(error => console.log('topItemIds', error))
  }

  generateRecentIds (recentId) {
    const ids = [recentId]

    for (let i = 0; i < 499; i++) {
      const currId = ids[i]
      const prevId = currId - 1
      ids.push(prevId)
    }

    return ids
  }

  getRecentItemIds () {
    return axios.get(this.state.baseUrl + 'v0/maxitem.json')
      .then(data => this.generateRecentIds(data.data))
      .catch(error => console.log('recentItemIds', error))
  }

  setItemsInState () {
    const getIds =  this.state.selectedListing === 'top' ? this.getTopItemIds : this.getRecentItemIds
    return getIds()  
      .then(ids => {
        const itemRequests = ids.map(id => axios.get(`${this.state.baseUrl}/v0/item/${id}/.json`))
        return Promise.all(itemRequests)
      })
      .then(items => items.filter(item => item.data && item.data.type === this.state.selectedItemType))
      .then(items => {
        this.setState({ items: items && items.length ? items : [] })
      })
      .catch(error => console.log('Set items in state', error))
  }

  componentDidMount () {
    return this.setItemsInState()
  }

  componentDidUpdate (prevProps, prevState) {
    const { selectedListing: prevListing, selectedItemType: prevType } = prevState
    const { selectedListing, selectedItemType } = this.state
    const shouldGetItems = prevListing !== selectedListing || prevType !== selectedItemType
    return shouldGetItems ? this.setItemsInState() : undefined
  }

  render() {
    const { itemTypes, selectedListing } = this.state
    const { toggleListingType, handleClick } = this
    console.log(this.state)
    return (
      <div className="App">
        <Header data={{
          handleClick,
          itemTypes,
          toggleListingType,
          selectedListing
        }}/>
        <Feed items={ items } />
        <Footer />
      </div>
    )
  }
}

export default App;
