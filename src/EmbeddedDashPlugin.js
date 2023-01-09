import React from 'react';
import { VERSION } from '@twilio/flex-ui';
import { FlexPlugin } from '@twilio/flex-plugin';
import * as Flex from '@twilio/flex-ui';

import DashboardSelector from './components/DashboardSelector/DashboardSelector.jsx'
import reducers, { namespace } from './states';

const PLUGIN_NAME = 'EmbeddedDashPlugin';

export default class EmbeddedDashPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   * @param manager { import('@twilio/flex-ui').Manager }
   */
  async init(flex, manager) {
    this.registerReducers(manager);

    const removeDefaultDashboard = ["dashboards", "analyze", "questionnaires"];
    removeDefaultDashboard.forEach(key => {
    Flex.SideNav.Content.remove(key);
    Flex.ViewCollection.Content.remove(key);
  });

    Flex.SideNav.Content.add(  
    <Flex.SideLink  
    showLabel={true}  
    icon="DefaultAvatar"  
    onClick={() =>  
    Flex.Actions.invokeAction("NavigateToView", {  
    viewName: "supervisor-dashboard"  
    })}  
    key="SupervisorDashboard"  
    >  
    Supervisor Dashboard  
    </Flex.SideLink>  
 );  
     
    const options = { sortOrder: -1 };  
    
    Flex.ViewCollection.Content.add(
      <Flex.View name="supervisor-dashboard" key="supervisor-dashboard-view" >
        <div>
          <DashboardSelector></DashboardSelector>
        </div>
      </Flex.View>,
      options
    );

  }



  /**
   * Registers the plugin reducers
   *
   * @param manager { Flex.Manager }
   */
  registerReducers(manager) {
    if (!manager.store.addReducer) {
      // eslint-disable-next-line
      console.error(`You need FlexUI > 1.9.0 to use built-in redux; you are currently on ${VERSION}`);
      return;
    }

    manager.store.addReducer(namespace, reducers);
  }
}
