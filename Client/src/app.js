import Vue from 'vue'
import App from './Vue Views/App.vue'
import { Workspace } from './Workspace.js'
//require('./MathJax.js');
Vue.config.productionTip = false;

async function init()
{
    const response = await fetch('/api/workspace?workspaceId=1');
    const data = await response.json();
    let workspace = new Workspace(data);
    const section = workspace.getSection(1);

    new Vue({
        el: '#app',
        data: { workspace: workspace },
        template: '<App v-bind:workspace="workspace" />',
        components: {
            'App': App
        }
    });


}

init()

