import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink 
  } from "react-router-dom";

import * as Flex from '@twilio/flex-ui';
import { VERSION } from '@twilio/flex-ui';
import { FlexPlugin } from '@twilio/flex-plugin';

import './styles.css'
import { DashboardIframe } from '../DashboardIframe/DashboardIframe';
//import { GoodDataLogin } from '../../GoodDataLogin';
import { HandleUserActionEvent } from './HandleUserActionEvent.jsx';
import { getFlexState } from '../../helpers/manager'


// get the value of supervisor's data permission - value of market worker attribute
const market = getFlexState().worker.attributes['market'];  
console.log(market);

// set analytics portal workspace id, and dashboard identifiers
const workspaceId = 'INSERT_YOUR_ANALYTICS_PORTAL_WORKSPACE_ID';  
const dashboard1Id = 'acfGTXlycGpy';
const dashboard2Id = 'aaeR8ZV3gsZh';


// define URL for the dashboard filtered on conversation_attribute_1
let dashUrl1='https://analytics.ytica.com/dashboard.html?label.conversations.conversation_attribute_1=' +market+ '#project=/gdc/projects/' +workspaceId+ '&dashboard=/gdc/md/' +workspaceId+ '/obj/identifier:' +dashboard1Id+ '&override=ui.link';
console.log(dashUrl1);

//define URL for the dashboard filtered on agent_attribute_1
let dashUrl2='https://analytics.ytica.com/dashboard.html?label.agents.agent_label_1=' +market+ '#project=/gdc/projects/' +workspaceId+ '&dashboard=/gdc/md/' +workspaceId+ '/obj/identifier:' +dashboard2Id+ '&override=ui.link';
console.log(dashUrl2);


export class DashboardSelector extends React.Component {

  render() {
    return (
      <Router>
    <div>
      <div className="wrapper">
       
        <NavLink  exact to="/supervisor-dashboard/" className="button" activeClassName="button-active">
        Dashboard 1 
        </NavLink>
            
        <NavLink exact to="/supervisor-dashboard/dashboard-2" className="button" activeClassName="button-active">
        Dashboard 2 
        </NavLink>
        
      </div>
        <HandleUserActionEvent />

        <Switch>
          <Route exact path="/supervisor-dashboard/dashboard-2">
            <DashboardIframe url={dashUrl2} />
          </Route>

          <Route exact path="/supervisor-dashboard/">
            <DashboardIframe url={dashUrl1} />
          </Route>

        </Switch>

        
      </div>
    </Router>
      
    )
  }
}


export default (DashboardSelector)
