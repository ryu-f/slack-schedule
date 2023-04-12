import { DefineFunction, Schema, SlackFunction } from 'deno-slack-sdk/mod.ts';

export const ScheduleFunctionDefinition = DefineFunction({
  callback_id: 'schedule_function',
  title: 'Schedule function',
  source_file: 'functions/schedule_function.ts',
  output_parameters: {
    properties: {
      channel_id: {
        type: Schema.types.string,
        description: 'Send channel id',
      },
      message: {
        type: Schema.types.string,
        description: 'Send message',
      },
    },
    required: ['message', 'channel_id'],
  },
});

export default SlackFunction(
  ScheduleFunctionDefinition,
  ({ env }) => {
    return { outputs: { message: 'Test Message', channel_id: env.CHANNEL_ID } };
  },
);
