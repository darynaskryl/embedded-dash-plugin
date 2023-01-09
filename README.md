# Plugin Sample - Data Segregation Solution based on using embedded dashboard approach

## How it works

This sample will help you to get started with the [embedded dashboards solution](https://www.twilio.com/blog/separate-data-in-flex-insights) to implement data segregation functionality in Flex. The plugin removes all default Flex views related to Flex Insights and instead adds a custom view containing embedded GoodData dashboards that contain URl parameters used to dynamically filter data according to the current user permissions.
To construct the URL you will need to obtain a few identifiers from the analytics portal 
Workspace ID: Log in to the Analytics Portal and check the URL in the browser address bar. For example:

`Workspace ID`

The workspace ID is the string appearing between the `https://analytics.ytica.com/#s=/gdc/workspaces/` segment and the vertical bar. An example of the workspace ID  can be `qx8vgewnj2hyemje8f6bkrkbyqk8psrf`.


`Dashboard ID`

Within Analytics Portal navigate to the dashboard you'd like to embed, and check the URL in the address bar. It may look like this:

```
https://analytics.ytica.com/#s=/gdc/workspaces/abcdef...|workspaceDashboardPage|/gdc/md/abcdef.../obj/89678|8bce0be17c63
```

While it's practically possible to reference an embedded dashboard using the dashboard id above (`obj/89678`) we recommend referencing a dashboard via the dashboard identifier, which can be obtained from the id:

```
https://analytics.ytica.com/gdc/md/abcdef.../obj/89678
```

at the bottom of the response locate parameter `identifier`:

```
"identifier" : "aaeR8ZV3gsZh",
```

The dashboard identifier will be further used as variable `dashboard1Id` and `dashboard2Id`.


## Warning
For the solution to work as expected additional configuration of the Flex Insights workspace is required - please work with PS or support to enable necessary feature flag.


## Setup
Make sure you have [Node.js](https://nodejs.org) as well as [`npm`](https://npmjs.com). We support Node >= 10.12 (and recommend the _even_ versions of Node). Afterwards, install the dependencies by running `npm install`:

```bash
cd 

# If you use npm
npm install
```

Next, please install the [Twilio CLI](https://www.twilio.com/docs/twilio-cli/quickstart) by running:

```bash
brew tap twilio/brew && brew install twilio
```

Finally, install the [Flex Plugin extension](https://github.com/twilio-labs/plugin-flex/tree/v1-beta) for the Twilio CLI:

```bash
twilio plugins:install @twilio-labs/plugin-flex
```

## Development
Run `twilio flex:plugins --help` to see all the commands we currently support. For further details on Flex Plugins refer to our documentation on the [Twilio Docs](https://www.twilio.com/docs/flex/developer/plugins/cli) page.

