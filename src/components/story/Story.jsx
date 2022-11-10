import React from 'react'
import './story.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { story, Users} from '../../data';
import { NewStory } from '../newStory/NewStory';

const Story = () => {
  return (
    <div className='story'>
        <Tabs>
    <TabList>
      <Tab>Story</Tab>
      <Tab>Reels</Tab>
      <Tab>Rooms</Tab>
    </TabList>

    <TabPanel>
      <div className="storyGroups">
        <div className="storyGroup">
          <div className="storyCard">
           <label htmlFor="add">
           <div className="storyBody">
              <img src="./assets/images/user/ja.png" alt="" className='storyBodyImg' />
            </div>
            <div className="storyFooter">
                <FontAwesomeIcon  icon={faAdd}/>
                <h4 className='storyTitle'>Create a story</h4>
            </div>
           </label>
           <input type="file" id='add' className='hidden' />
          </div>
        </div>
        {story.map((s) => (
          <NewStory s={s} key={s.id}/>
        ))}
      </div>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
    </div>
  )
}

export default Story