import { Manifest } from 'deno-slack-sdk/mod.ts';
import { ScheduleWorkflow } from './workflows/schedule_workflow.ts';

export default Manifest({
  name: 'slack-schedule',
  description: 'Slack Schedule Template',
  icon: 'assets/default_new_app_icon.png',
  workflows: [ScheduleWorkflow],
  outgoingDomains: [],
  botScopes: ['commands', 'chat:write', 'chat:write.public'],
});
