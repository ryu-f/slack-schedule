import { DefineWorkflow, Schema } from 'deno-slack-sdk/mod.ts';
import { ScheduleFunctionDefinition } from '../functions/schedule_function.ts';

export const ScheduleWorkflow = DefineWorkflow({
  callback_id: 'schedule_workflow',
  title: 'Schedule workflow',
  input_parameters: { properties: {}, required: [] },
});

const scheduleFunctionStep = ScheduleWorkflow.addStep(
  ScheduleFunctionDefinition,
  {},
);

ScheduleWorkflow.addStep(Schema.slack.functions.SendMessage, {
  channel_id: scheduleFunctionStep.outputs.channel_id,
  message: scheduleFunctionStep.outputs.message,
});

export default ScheduleWorkflow;
