import React, { Component } from 'react';
import { ReactComponent as Loader } from '../img/loading.svg';
import firestore from '../firebase';
import Request from './Request';
import moment from 'moment';

class RequestContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            aether: {},
			primal: {},
			isLoading: false,
        };
	}
	
	async componentDidMount() {
		this.setState({ isLoading: true });
		
		let fetchedAether = {};
		let fetchedPrimal = {};

		await firestore.firestore().collection('aether').orderBy('timestamp', 'asc').get().then((snapshot) => {
			snapshot.forEach(doc => {
				fetchedAether[doc.id] = doc.data();
			})
		});

		await firestore.firestore().collection('primal').orderBy('timestamp', 'asc').get().then((snapshot) => {
			snapshot.forEach(doc => {
				fetchedPrimal[doc.id] = doc.data();
			})
		});

		this.setState({
			aether: fetchedAether,
			primal: fetchedPrimal,
			isLoading: false
		});
	}

    render() {
		const { aether, primal } = this.state;

		let aetherRequests = Object.values(aether).map((request) => (
			<Request role={request.role} twitchName={request.twitch} characterName={`${request.firstName} ${request.lastName}`} timestamp={moment.unix(request.timestamp.seconds).format("MMMM Do YYYY, H:mma")} />
		));

		let primalRequests = Object.values(primal).map((request) => (
			<Request role={request.role} twitchName={request.twitch} characterName={`${request.firstName} ${request.lastName}`} timestamp={moment.unix(request.timestamp.seconds).format("MMMM Do YYYY, H:mma")} />
		))

        return (
            <section id={this.props.datacenter}>
				<section className="requests">
					<section>
						<h3 className="requestTitle">Eden's Gate: 
							<span className="requestSubTitle">  Resurrection</span>
						</h3>
						
						<hr className="divider" />
						
						{aetherRequests}

						{/* <RequestMinimal role='Healer' twitchName='anadeius' characterName='Anadeius Etherius' timestamp='July 17, 2019 - 4:15am' />
						<RequestMinimal role='Tank' twitchName='mtqcapture' characterName='Mizzteq Aran' timestamp='July 18, 2019 - 12:15pm'  />
						<RequestMinimal role='Damage' twitchName='solu_9' characterName="Harlequin D'ranged" timestamp='July 21, 2019 - 3:15pm' />
						<RequestMinimal role='Tank' twitchName='amazeringone' characterName='Amazering One' timestamp='July 30, 2019 - 6:15pm' />
						<RequestMinimal role='Healer' twitchName='anadeius' characterName='Anadeius Etherius' timestamp='July 17, 2019 - 4:15am' />
						<RequestMinimal role='Tank' twitchName='mtqcapture' characterName='Mizzteq Aran' timestamp='July 18, 2019 - 12:15pm'  />
						<RequestMinimal role='Damage' twitchName='solu_9' characterName="Harlequin D'ranged" timestamp='July 21, 2019 - 3:15pm' />
						<RequestMinimal role='Tank' twitchName='amazeringone' characterName='Amazering One' timestamp='July 30, 2019 - 6:15pm' /> */}
					</section>
					
					<section>
						<h3 className="requestTitle">Eden's Gate: 
							<span className="requestSubTitle">  Descent</span>
						</h3>
						
						<hr className="divider" />
						
						<Request role='tank' twitchName='mtqcapture' characterName='Mizzteq Aran' timestamp='July 18, 2019 - 12:15pm'  />
						<Request role='damage' twitchName='solu_9' characterName="Harlequin D'ranged" timestamp='July 21, 2019 - 3:15pm' />
						<Request role='tank' twitchName='amazeringone' characterName='Amazering One' timestamp='July 30, 2019 - 6:15pm' />
						<Request role='healer' twitchName='anadeius' characterName='Anadeius Etherius' timestamp='July 17, 2019 - 4:15am' />
						<Request role='healer' twitchName='anadeius' characterName='Anadeius Etherius' timestamp='July 17, 2019 - 4:15am' />
						<Request role='tank' twitchName='mtqcapture' characterName='Mizzteq Aran' timestamp='July 18, 2019 - 12:15pm'  />
						<Request role='damage' twitchName='solu_9' characterName="Harlequin D'ranged" timestamp='July 21, 2019 - 3:15pm' />
						<Request role='tank' twitchName='amazeringone' characterName='Amazering One' timestamp='July 30, 2019 - 6:15pm' />
					</section>
					
					<section>
						<h3 className="requestTitle">Eden's Gate: 
							<span className="requestSubTitle">  Inundation</span>
						</h3>
						
						<hr className="divider" />
						
						<Request role='healer' twitchName='anadeius' characterName='Anadeius Etherius' timestamp='July 17, 2019 - 4:15am' />
						<Request role='tank' twitchName='mtqcapture' characterName='Mizzteq Aran' timestamp='July 18, 2019 - 12:15pm'  />
						<Request role='damage' twitchName='solu_9' characterName="Harlequin D'ranged" timestamp='July 21, 2019 - 3:15pm' />
						<Request role='tank' twitchName='amazeringone' characterName='Amazering One' timestamp='July 30, 2019 - 6:15pm' />
						<Request role='healer' twitchName='anadeius' characterName='Anadeius Etherius' timestamp='July 17, 2019 - 4:15am' />
						<Request role='tank' twitchName='mtqcapture' characterName='Mizzteq Aran' timestamp='July 18, 2019 - 12:15pm'  />
						<Request role='damage' twitchName='solu_9' characterName="Harlequin D'ranged" timestamp='July 21, 2019 - 3:15pm' />
						<Request role='tank' twitchName='amazeringone' characterName='Amazering One' timestamp='July 30, 2019 - 6:15pm' />
					</section>
					
					<section>
						<h3 className="requestTitle">Eden's Gate: 
							<span className="requestSubTitle">  Sepulture</span>
						</h3>
						
						<hr className="divider" />
						
						<Request role='healer' twitchName='anadeius' characterName='Anadeius Etherius' timestamp='July 17, 2019 - 4:15am' />
						<Request role='tank' twitchName='mtqcapture' characterName='Mizzteq Aran' timestamp='July 18, 2019 - 12:15pm'  />
						<Request role='damage' twitchName='solu_9' characterName="Harlequin D'ranged" timestamp='July 21, 2019 - 3:15pm' />
						<Request role='tank' twitchName='amazeringone' characterName='Amazering One' timestamp='July 30, 2019 - 6:15pm' />
						<Request role='healer' twitchName='anadeius' characterName='Anadeius Etherius' timestamp='July 17, 2019 - 4:15am' />
						<Request role='tank' twitchName='mtqcapture' characterName='Mizzteq Aran' timestamp='July 18, 2019 - 12:15pm'  />
						<Request role='damage' twitchName='solu_9' characterName="Harlequin D'ranged" timestamp='July 21, 2019 - 3:15pm' />
						<Request role='tank' twitchName='amazeringone' characterName='Amazering One' timestamp='July 30, 2019 - 6:15pm' />
					</section>
			</section>
		</section>
        )
    };
}

export default RequestContainer;