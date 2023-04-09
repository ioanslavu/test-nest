import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type EventDocument = HydratedDocument<Event>;

@Schema()
export class Event {

  @Prop()
  title: string;

  @Prop()
  description: string;

}

export const EventSchema = SchemaFactory.createForClass(Event);