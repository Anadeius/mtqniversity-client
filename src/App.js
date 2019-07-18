import React from 'react';
import './style.css';
import Request from './components/Request';
import RequestOneLine from './components/RequestOneLine';
import RequestMinimal from './components/RequestMinimal';

function App() {
  return (
    <div className="container">
      <h1 className="header">MTQniversity</h1>
      <section className="requests">
        <section>
          <h3 className="requestTitle">Eden's Gate: 
            <span className="requestSubTitle">Resurrection</span>
          </h3>
          <Request role='Healer' twitchName='anadeius' characterName='Anadeius Etherius' timestamp='July 17, 2019 - 4:15am'/>
          <Request role='Tank' twitchName='mtqcapture' characterName='Mizzteq Aran' timestamp='July 18, 2019 - 12:15pm' />
          <Request role='Damage' twitchName='solu_9' characterName="Harlequin D'ranged" timestamp='July 21, 2019 - 3:15pm'/>
          <Request role='Tank' twitchName='amazeringone' characterName='Amazering One' timestamp='July 30, 2019 - 6:15pm'/>
          <Request role='Healer' twitchName='anadeius' characterName='Anadeius Etherius' timestamp='July 17, 2019 - 4:15am'/>
          <Request role='Tank' twitchName='mtqcapture' characterName='Mizzteq Aran' timestamp='July 18, 2019 - 12:15pm' />
          <Request role='Damage' twitchName='solu_9' characterName="Harlequin D'ranged" timestamp='July 21, 2019 - 3:15pm'/>
          <Request role='Tank' twitchName='amazeringone' characterName='Amazering One' timestamp='July 30, 2019 - 6:15pm'/>
        </section>
        <section>
          <h3 className="requestTitle">Eden's Gate: 
            <span className="requestSubTitle">Descent</span>
          </h3>
          <Request role='Healer' twitchName='anadeius' characterName='Anadeius Etherius' timestamp='July 17, 2019 - 4:15am'/>
          <Request role='Tank' twitchName='mtqcapture' characterName='Mizzteq Aran' timestamp='July 18, 2019 - 12:15pm' />
          <Request role='Damage' twitchName='solu_9' characterName="Harlequin D'ranged" timestamp='July 21, 2019 - 3:15pm'/>
          <Request role='Tank' twitchName='amazeringone' characterName='Amazering One' timestamp='July 30, 2019 - 6:15pm'/>
          <Request role='Healer' twitchName='anadeius' characterName='Anadeius Etherius' timestamp='July 17, 2019 - 4:15am'/>
          <Request role='Tank' twitchName='mtqcapture' characterName='Mizzteq Aran' timestamp='July 18, 2019 - 12:15pm' />
          <Request role='Damage' twitchName='solu_9' characterName="Harlequin D'ranged" timestamp='July 21, 2019 - 3:15pm'/>
          <Request role='Tank' twitchName='amazeringone' characterName='Amazering One' timestamp='July 30, 2019 - 6:15pm'/>
        </section>
        <section>
          <h3 className="requestTitle">Eden's Gate: 
            <span className="requestSubTitle">Inundation</span>
          </h3>
          <Request role='Healer' twitchName='anadeius' characterName='Anadeius Etherius' timestamp='July 17, 2019 - 4:15am'/>
          <Request role='Tank' twitchName='mtqcapture' characterName='Mizzteq Aran' timestamp='July 18, 2019 - 12:15pm' />
          <Request role='Damage' twitchName='solu_9' characterName="Harlequin D'ranged" timestamp='July 21, 2019 - 3:15pm'/>
          <Request role='Tank' twitchName='amazeringone' characterName='Amazering One' timestamp='July 30, 2019 - 6:15pm'/>
          <Request role='Healer' twitchName='anadeius' characterName='Anadeius Etherius' timestamp='July 17, 2019 - 4:15am'/>
          <Request role='Tank' twitchName='mtqcapture' characterName='Mizzteq Aran' timestamp='July 18, 2019 - 12:15pm' />
          <Request role='Damage' twitchName='solu_9' characterName="Harlequin D'ranged" timestamp='July 21, 2019 - 3:15pm'/>
          <Request role='Tank' twitchName='amazeringone' characterName='Amazering One' timestamp='July 30, 2019 - 6:15pm'/>
        </section>
        <section>
          <h3 className="requestTitle">Eden's Gate: 
            <span className="requestSubTitle">Sepulture</span>
          </h3>
          <Request role='Healer' twitchName='anadeius' characterName='Anadeius Etherius' timestamp='July 17, 2019 - 4:15am' />
          <Request role='Tank' twitchName='mtqcapture' characterName='Mizzteq Aran' timestamp='July 18, 2019 - 12:15pm' />
          <Request role='Damage' twitchName='solu_9' characterName="Harlequin D'ranged" timestamp='July 21, 2019 - 3:15pm' />
          <Request role='Tank' twitchName='amazeringone' characterName='Amazering One' timestamp='July 30, 2019 - 6:15pm' />
          <Request role='Healer' twitchName='anadeius' characterName='Anadeius Etherius' timestamp='July 17, 2019 - 4:15am'/>
          <Request role='Tank' twitchName='mtqcapture' characterName='Mizzteq Aran' timestamp='July 18, 2019 - 12:15pm' />
          <Request role='Damage' twitchName='solu_9' characterName="Harlequin D'ranged" timestamp='July 21, 2019 - 3:15pm'/>
          <Request role='Tank' twitchName='amazeringone' characterName='Amazering One' timestamp='July 30, 2019 - 6:15pm'/>
        </section>
      </section>

      <section className="requestsOneLine">
        <section>
          <h3 className="requestTitle">Eden's Gate: 
            <span className="requestSubTitle">Resurrection</span>
          </h3>
          <RequestOneLine role='Healer' twitchName='anadeius' characterName='Anadeius Etherius' timestamp='July 17, 2019 - 4:15am' />
          <RequestOneLine role='Tank' twitchName='mtqcapture' characterName='Mizzteq Aran' timestamp='July 18, 2019 - 12:15pm'  />
          <RequestOneLine role='Damage' twitchName='solu_9' characterName="Harlequin D'ranged" timestamp='July 21, 2019 - 3:15pm' />
          <RequestOneLine role='Tank' twitchName='amazeringone' characterName='Amazering One' timestamp='July 30, 2019 - 6:15pm' />
          <RequestOneLine role='Healer' twitchName='anadeius' characterName='Anadeius Etherius' timestamp='July 17, 2019 - 4:15am' />
          <RequestOneLine role='Tank' twitchName='mtqcapture' characterName='Mizzteq Aran' timestamp='July 18, 2019 - 12:15pm'  />
          <RequestOneLine role='Damage' twitchName='solu_9' characterName="Harlequin D'ranged" timestamp='July 21, 2019 - 3:15pm' />
          <RequestOneLine role='Tank' twitchName='amazeringone' characterName='Amazering One' timestamp='July 30, 2019 - 6:15pm' />
        </section>
        <section>
          <h3 className="requestTitle">Eden's Gate: 
            <span className="requestSubTitle">Descent</span>
          </h3>
          <RequestOneLine role='Healer' twitchName='anadeius' characterName='Anadeius Etherius' timestamp='July 17, 2019 - 4:15am' />
          <RequestOneLine role='Tank' twitchName='mtqcapture' characterName='Mizzteq Aran' timestamp='July 18, 2019 - 12:15pm'  />
          <RequestOneLine role='Damage' twitchName='solu_9' characterName="Harlequin D'ranged" timestamp='July 21, 2019 - 3:15pm' />
          <RequestOneLine role='Tank' twitchName='amazeringone' characterName='Amazering One' timestamp='July 30, 2019 - 6:15pm' />
          <RequestOneLine role='Healer' twitchName='anadeius' characterName='Anadeius Etherius' timestamp='July 17, 2019 - 4:15am' />
          <RequestOneLine role='Tank' twitchName='mtqcapture' characterName='Mizzteq Aran' timestamp='July 18, 2019 - 12:15pm'  />
          <RequestOneLine role='Damage' twitchName='solu_9' characterName="Harlequin D'ranged" timestamp='July 21, 2019 - 3:15pm' />
          <RequestOneLine role='Tank' twitchName='amazeringone' characterName='Amazering One' timestamp='July 30, 2019 - 6:15pm' />
        </section>
        <section>
          <h3 className="requestTitle">Eden's Gate: 
            <span className="requestSubTitle">Inundation</span>
          </h3>
          <RequestOneLine role='Healer' twitchName='anadeius' characterName='Anadeius Etherius' timestamp='July 17, 2019 - 4:15am' />
          <RequestOneLine role='Tank' twitchName='mtqcapture' characterName='Mizzteq Aran' timestamp='July 18, 2019 - 12:15pm'  />
          <RequestOneLine role='Damage' twitchName='solu_9' characterName="Harlequin D'ranged" timestamp='July 21, 2019 - 3:15pm' />
          <RequestOneLine role='Tank' twitchName='amazeringone' characterName='Amazering One' timestamp='July 30, 2019 - 6:15pm' />
          <RequestOneLine role='Healer' twitchName='anadeius' characterName='Anadeius Etherius' timestamp='July 17, 2019 - 4:15am' />
          <RequestOneLine role='Tank' twitchName='mtqcapture' characterName='Mizzteq Aran' timestamp='July 18, 2019 - 12:15pm'  />
          <RequestOneLine role='Damage' twitchName='solu_9' characterName="Harlequin D'ranged" timestamp='July 21, 2019 - 3:15pm' />
          <RequestOneLine role='Tank' twitchName='amazeringone' characterName='Amazering One' timestamp='July 30, 2019 - 6:15pm' />
        </section>
        <section>
          <h3 className="requestTitle">Eden's Gate: 
            <span className="requestSubTitle">Sepulture</span>
          </h3>
          <RequestOneLine role='Healer' twitchName='anadeius' characterName='Anadeius Etherius' timestamp='July 17, 2019 - 4:15am' />
          <RequestOneLine role='Tank' twitchName='mtqcapture' characterName='Mizzteq Aran' timestamp='July 18, 2019 - 12:15pm'  />
          <RequestOneLine role='Damage' twitchName='solu_9' characterName="Harlequin D'ranged" timestamp='July 21, 2019 - 3:15pm' />
          <RequestOneLine role='Tank' twitchName='amazeringone' characterName='Amazering One' timestamp='July 30, 2019 - 6:15pm' />
          <RequestOneLine role='Healer' twitchName='anadeius' characterName='Anadeius Etherius' timestamp='July 17, 2019 - 4:15am' />
          <RequestOneLine role='Tank' twitchName='mtqcapture' characterName='Mizzteq Aran' timestamp='July 18, 2019 - 12:15pm'  />
          <RequestOneLine role='Damage' twitchName='solu_9' characterName="Harlequin D'ranged" timestamp='July 21, 2019 - 3:15pm' />
          <RequestOneLine role='Tank' twitchName='amazeringone' characterName='Amazering One' timestamp='July 30, 2019 - 6:15pm' />
        </section>
      </section>

      <section className="requestsMinimal">
        <section>
          <h3 className="requestTitleMinimal">Eden's Gate: 
            <span className="requestSubTitleMinimal">  Resurrection</span>
          </h3>
          <hr className="divider" />
          <RequestMinimal role='Healer' twitchName='anadeius' characterName='Anadeius Etherius' timestamp='July 17, 2019 - 4:15am' />
          <RequestMinimal role='Tank' twitchName='mtqcapture' characterName='Mizzteq Aran' timestamp='July 18, 2019 - 12:15pm'  />
          <RequestMinimal role='Damage' twitchName='solu_9' characterName="Harlequin D'ranged" timestamp='July 21, 2019 - 3:15pm' />
          <RequestMinimal role='Tank' twitchName='amazeringone' characterName='Amazering One' timestamp='July 30, 2019 - 6:15pm' />
          <RequestMinimal role='Healer' twitchName='anadeius' characterName='Anadeius Etherius' timestamp='July 17, 2019 - 4:15am' />
          <RequestMinimal role='Tank' twitchName='mtqcapture' characterName='Mizzteq Aran' timestamp='July 18, 2019 - 12:15pm'  />
          <RequestMinimal role='Damage' twitchName='solu_9' characterName="Harlequin D'ranged" timestamp='July 21, 2019 - 3:15pm' />
          <RequestMinimal role='Tank' twitchName='amazeringone' characterName='Amazering One' timestamp='July 30, 2019 - 6:15pm' />
        </section>
        <section>
          <h3 className="requestTitleMinimal">Eden's Gate: 
            <span className="requestSubTitleMinimal">  Descent</span>
          </h3>
          <hr className="divider" />
          <RequestMinimal role='Healer' twitchName='anadeius' characterName='Anadeius Etherius' timestamp='July 17, 2019 - 4:15am' />
          <RequestMinimal role='Tank' twitchName='mtqcapture' characterName='Mizzteq Aran' timestamp='July 18, 2019 - 12:15pm'  />
          <RequestMinimal role='Damage' twitchName='solu_9' characterName="Harlequin D'ranged" timestamp='July 21, 2019 - 3:15pm' />
          <RequestMinimal role='Tank' twitchName='amazeringone' characterName='Amazering One' timestamp='July 30, 2019 - 6:15pm' />
          <RequestMinimal role='Healer' twitchName='anadeius' characterName='Anadeius Etherius' timestamp='July 17, 2019 - 4:15am' />
          <RequestMinimal role='Tank' twitchName='mtqcapture' characterName='Mizzteq Aran' timestamp='July 18, 2019 - 12:15pm'  />
          <RequestMinimal role='Damage' twitchName='solu_9' characterName="Harlequin D'ranged" timestamp='July 21, 2019 - 3:15pm' />
          <RequestMinimal role='Tank' twitchName='amazeringone' characterName='Amazering One' timestamp='July 30, 2019 - 6:15pm' />
        </section>
        <section>
          <h3 className="requestTitleMinimal">Eden's Gate: 
            <span className="requestSubTitleMinimal">  Inundation</span>
          </h3>
          <hr className="divider" />
          <RequestMinimal role='Healer' twitchName='anadeius' characterName='Anadeius Etherius' timestamp='July 17, 2019 - 4:15am' />
          <RequestMinimal role='Tank' twitchName='mtqcapture' characterName='Mizzteq Aran' timestamp='July 18, 2019 - 12:15pm'  />
          <RequestMinimal role='Damage' twitchName='solu_9' characterName="Harlequin D'ranged" timestamp='July 21, 2019 - 3:15pm' />
          <RequestMinimal role='Tank' twitchName='amazeringone' characterName='Amazering One' timestamp='July 30, 2019 - 6:15pm' />
          <RequestMinimal role='Healer' twitchName='anadeius' characterName='Anadeius Etherius' timestamp='July 17, 2019 - 4:15am' />
          <RequestMinimal role='Tank' twitchName='mtqcapture' characterName='Mizzteq Aran' timestamp='July 18, 2019 - 12:15pm'  />
          <RequestMinimal role='Damage' twitchName='solu_9' characterName="Harlequin D'ranged" timestamp='July 21, 2019 - 3:15pm' />
          <RequestMinimal role='Tank' twitchName='amazeringone' characterName='Amazering One' timestamp='July 30, 2019 - 6:15pm' />
        </section>
        <section>
          <h3 className="requestTitleMinimal">Eden's Gate: 
            <span className="requestSubTitleMinimal">  Sepulture</span>
          </h3>
          <hr className="divider" />
          <RequestMinimal role='Healer' twitchName='anadeius' characterName='Anadeius Etherius' timestamp='July 17, 2019 - 4:15am' />
          <RequestMinimal role='Tank' twitchName='mtqcapture' characterName='Mizzteq Aran' timestamp='July 18, 2019 - 12:15pm'  />
          <RequestMinimal role='Damage' twitchName='solu_9' characterName="Harlequin D'ranged" timestamp='July 21, 2019 - 3:15pm' />
          <RequestMinimal role='Tank' twitchName='amazeringone' characterName='Amazering One' timestamp='July 30, 2019 - 6:15pm' />
          <RequestMinimal role='Healer' twitchName='anadeius' characterName='Anadeius Etherius' timestamp='July 17, 2019 - 4:15am' />
          <RequestMinimal role='Tank' twitchName='mtqcapture' characterName='Mizzteq Aran' timestamp='July 18, 2019 - 12:15pm'  />
          <RequestMinimal role='Damage' twitchName='solu_9' characterName="Harlequin D'ranged" timestamp='July 21, 2019 - 3:15pm' />
          <RequestMinimal role='Tank' twitchName='amazeringone' characterName='Amazering One' timestamp='July 30, 2019 - 6:15pm' />
        </section>
      </section>

    </div>
  );
}

export default App;
