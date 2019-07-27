import React, { Component } from 'react';
import firestore from '../firebase';
import moment from 'moment';
import Request from './Request';
import NoRequests from './NoRequests';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class Requests extends Component {
    constructor(props){
        super(props);
        this.state = {
			dataCenter: props.dataCenter,
			requests: {}
		};		
	}
	
	async componentDidMount() {		
		let fetchedRequests = {};
		
		await firestore.firestore().collection(`${this.state.dataCenter}`).orderBy('timestamp', 'asc').get().then((snapshot) => {
			snapshot.forEach(doc => {
				fetchedRequests[doc.id] = doc.data();
			})
		});

		let filteredRequests = {
			'floorOne': Object.values(fetchedRequests).filter(request => request.request === 'E1S').map(request => <Request characterRole={request.role} twitchName={request.twitch} characterName={`${request.firstName} ${request.lastName}`} timestamp={moment.unix(request.timestamp.seconds).format("MMMM Do YYYY, h:mma")}  />),
			'floorTwo': Object.values(fetchedRequests).filter(request => request.request === 'E2S').map(request => <Request characterRole={request.role} twitchName={request.twitch} characterName={`${request.firstName} ${request.lastName}`} timestamp={moment.unix(request.timestamp.seconds).format("MMMM Do YYYY, h:mma")}  />),
			'floorThree': Object.values(fetchedRequests).filter(request => request.request === 'E3S').map(request => <Request characterRole={request.role} twitchName={request.twitch} characterName={`${request.firstName} ${request.lastName}`} timestamp={moment.unix(request.timestamp.seconds).format("MMMM Do YYYY, h:mma")}  />),
			'floorFour': Object.values(fetchedRequests).filter(request => request.request === 'E4S').map(request => <Request characterRole={request.role} twitchName={request.twitch} characterName={`${request.firstName} ${request.lastName}`} timestamp={moment.unix(request.timestamp.seconds).format("MMMM Do YYYY, h:mma")}  />),
			'primalOne': Object.values(fetchedRequests).filter(request => request.request === 'Titania').map(request => <Request characterRole={request.role} twitchName={request.twitch} characterName={`${request.firstName} ${request.lastName}`} timestamp={moment.unix(request.timestamp.seconds).format("MMMM Do YYYY, h:mma")}  />),
			'primalTwo': Object.values(fetchedRequests).filter(request => request.request === 'Innocence').map(request => <Request characterRole={request.role} twitchName={request.twitch} characterName={`${request.firstName} ${request.lastName}`} timestamp={moment.unix(request.timestamp.seconds).format("MMMM Do YYYY, h:mma")}  />),
		};

		Object.keys(filteredRequests).forEach((key) => {
			if (filteredRequests[key].length === 0) 
				filteredRequests[key] = <NoRequests />
			});

		this.setState({
			requests: filteredRequests
		});
	}
	
	render() {
		let { requests } = this.state

		return (
			<section id={this.props.dataCenter}>
				<h2 className="header">{this.props.dataCenter}</h2>

				<Tabs>
					<TabList>
						<Tab>Eden's Gate</Tab>
						<Tab>Primals</Tab>
					</TabList>
				<TabPanel>
					<section className="requests">
						<section>
							<h3 className="requestTitle">Eden's Gate: 
								<span className="requestSubTitle">  Resurrection</span>
							</h3>
							
							<hr className="divider" />

							{requests.floorOne ? requests.floorOne : <NoRequests />}

						</section>
						
						<section>
							<h3 className="requestTitle">Eden's Gate: 
								<span className="requestSubTitle">  Descent</span>
							</h3>
							
							<hr className="divider" />
							
							{requests.floorTwo ? requests.floorTwo : <NoRequests />}
							
						</section>
						
						<section>
							<h3 className="requestTitle">Eden's Gate: 
								<span className="requestSubTitle">  Inundation</span>
							</h3>
							
							<hr className="divider" />
							
							{requests.floorThree ? requests.floorThree : <NoRequests />}
							
						</section>
						
						<section>
							<h3 className="requestTitle">Eden's Gate: 
								<span className="requestSubTitle">  Sepulture</span>
							</h3>
							
							<hr className="divider" />
							
							{requests.floorFour ? requests.floorFour : <NoRequests />}

						</section>
					</section>
				</TabPanel>
				<TabPanel>
					<section className="requests">
						<section>
							<h3 className="requestTitle">Titania Ex
							</h3>
							<hr className="divider" />
							
							{requests.primalOne}

						</section>
					
						<section>
							<h3 className="requestTitle">Innocence EX
							</h3>
							<hr className="divider" />
							
							{requests.primalTwo}

						</section>
					</section>
				</TabPanel>
			</Tabs>
			</section>
		)
	}
}

export default Requests;