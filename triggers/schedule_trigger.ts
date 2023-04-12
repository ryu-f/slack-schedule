import type { Trigger } from 'deno-slack-api/types.ts';
import { ScheduleWorkflow } from '../workflows/schedule_workflow.ts';

const trigger: Trigger<typeof ScheduleWorkflow.definition> = {
  type: 'scheduled',
  name: 'Schedule trigger',
  workflow: `#/workflows/${ScheduleWorkflow.definition.callback_id}`,
  inputs: {},
  schedule: {
    start_time: new Date(new Date().getTime() + 60000).toISOString(),
    end_time: '2037-12-31T23:59:59Z',
    frequency: { type: 'daily', repeats_every: 1 },
  },
};

export default trigger;
