import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import 'react-tabs/style/react-tabs.css';
import './style.css';

import Request from './components/Request';
import RequestContainer from './components/RequestContainer';
import NoRequests from './components/NoRequests';

function App() {
  return (
    <div className="container">
      <h1 className="header">MTQniversity</h1>
	  {/*<RequestContainer datacenter='aether' />*/}

	<section id="aether">
	  <h2 className="header">Aether</h2>

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
					<Request role='healer' twitchName='anadeius' characterName='Anadeius Etherius' timestamp='July 17, 2019 - 4:15am' />
					<Request role='tank' twitchName='mtqcapture' characterName='Mizzteq Aran' timestamp='July 18, 2019 - 12:15pm'  />
					<Request role='damage' twitchName='solu_9' characterName="Harlequin D'ranged" timestamp='July 21, 2019 - 3:15pm' />
					<Request role='tank' twitchName='amazeringone' characterName='Amazering One' timestamp='July 30, 2019 - 6:15pm' />
					<Request role='healer' twitchName='anadeius' characterName='Anadeius Etherius' timestamp='July 17, 2019 - 4:15am' />
				</section>
			
				<section>
					<h3 className="requestTitle">Eden's Gate: 
						<span className="requestSubTitle">  Descent</span>
					</h3>
					<hr className="divider" />
					<Request role='tank' twitchName='mtqcapture' characterName='Mizzteq Aran' timestamp='July 18, 2019 - 12:15pm'  />
					<Request role='damage' twitchName='solu_9' characterName="Harlequin D'ranged" timestamp='July 21, 2019 - 3:15pm' />
					<Request role='tank' twitchName='amazeringone' characterName='Amazering One' timestamp='July 30, 2019 - 6:15pm' />
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
				</section>
				
				<section>
					<h3 className="requestTitle">Eden's Gate: 
						<span className="requestSubTitle">  Sepulture</span>
					</h3>
					<hr className="divider" />
					<Request role='healer' twitchName='anadeius' characterName='Anadeius Etherius' timestamp='July 17, 2019 - 4:15am' />
					<Request role='tank' twitchName='mtqcapture' characterName='Mizzteq Aran' timestamp='July 18, 2019 - 12:15pm'  />
					<Request role='damage' twitchName='solu_9' characterName="Harlequin D'ranged" timestamp='July 21, 2019 - 3:15pm' />
				</section> 
			</section>
	  </TabPanel>
	  <TabPanel>
	  	<section className="requests">
			<section>
				<h3 className="requestTitle">Titania Ex
				</h3>
				<hr className="divider" />
				<Request role='healer' twitchName='anadeius' characterName='Anadeius Etherius' timestamp='July 17, 2019 - 4:15am' />
				<Request role='tank' twitchName='mtqcapture' characterName='Mizzteq Aran' timestamp='July 18, 2019 - 12:15pm'  />
				<Request role='damage' twitchName='solu_9' characterName="Harlequin D'ranged" timestamp='July 21, 2019 - 3:15pm' />
				<Request role='tank' twitchName='amazeringone' characterName='Amazering One' timestamp='July 30, 2019 - 6:15pm' />
				<Request role='healer' twitchName='anadeius' characterName='Anadeius Etherius' timestamp='July 17, 2019 - 4:15am' />
			</section>
		
			<section>
				<h3 className="requestTitle">Innocence EX
				</h3>
				<hr className="divider" />
				<Request role='tank' twitchName='mtqcapture' characterName='Mizzteq Aran' timestamp='July 18, 2019 - 12:15pm'  />
				<Request role='damage' twitchName='solu_9' characterName="Harlequin D'ranged" timestamp='July 21, 2019 - 3:15pm' />
				<Request role='tank' twitchName='amazeringone' characterName='Amazering One' timestamp='July 30, 2019 - 6:15pm' />
				<Request role='damage' twitchName='solu_9' characterName="Harlequin D'ranged" timestamp='July 21, 2019 - 3:15pm' />
				<Request role='tank' twitchName='amazeringone' characterName='Amazering One' timestamp='July 30, 2019 - 6:15pm' />
			</section>
		</section>
	  </TabPanel>
	</Tabs>
	</section>
    <section id="primal">
		<h2 className="header">Primal</h2>
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
						<Request role='healer' twitchName='anadeius' characterName='Anadeius Etherius' timestamp='July 17, 2019 - 4:15am' />
						<Request role='tank' twitchName='mtqcapture' characterName='Mizzteq Aran' timestamp='July 18, 2019 - 12:15pm'  />
						<Request role='damage' twitchName='solu_9' characterName="Harlequin D'ranged" timestamp='July 21, 2019 - 3:15pm' />
						<Request role='tank' twitchName='amazeringone' characterName='Amazering One' timestamp='July 30, 2019 - 6:15pm' />
					</section>
					
					<section>
						<h3 className="requestTitle">Eden's Gate: 
							<span className="requestSubTitle">  Descent</span>
						</h3>
						<hr className="divider" />
						<Request role='healer' twitchName='anadeius' characterName='Anadeius Etherius' timestamp='July 17, 2019 - 4:15am' />
						<Request role='tank' twitchName='mtqcapture' characterName='Mizzteq Aran' timestamp='July 18, 2019 - 12:15pm'  />
					</section>
					
					<section>
						<h3 className="requestTitle">Eden's Gate: 
							<span className="requestSubTitle">  Inundation</span>
						</h3>
						<hr className="divider" />
						<Request role='healer' twitchName='anadeius' characterName='Anadeius Etherius' timestamp='July 17, 2019 - 4:15am' />
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

		</TabPanel>
		<TabPanel>
		<section className="requests">
			<section>
				<h3 className="requestTitle">Titania Ex
				</h3>
				<hr className="divider" />
				<NoRequests />
			</section>
		
			<section>
				<h3 className="requestTitle">Innocence EX
				</h3>
				<hr className="divider" />
				<NoRequests />
			</section>
		</section>
		</TabPanel>
	</Tabs>
	</section>
	
	
	
</div>
  );
}

export default App;
