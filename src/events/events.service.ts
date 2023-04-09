import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EventDocument } from './schema/events.schema';

@Injectable()
export class EventsService {
  constructor(@InjectModel(Event.name) private eventModel: Model<EventDocument>) {}

  create(createEventDto: CreateEventDto) {
    const createdEvent = new this.eventModel(createEventDto);
    return createdEvent.save();
  }

  findAll() {
    return this.eventModel.find().exec();
  }

  findOne(id: string) {
    return this.eventModel.findById(id).exec();
  }

  update(id: string, updateEventDto: UpdateEventDto) {
    return this.eventModel.findByIdAndUpdate(id, updateEventDto).exec();
  }

  remove(id: string) {
    return this.eventModel.findByIdAndDelete(id).exec();
  }

  cancel(id: string) {
    return this.eventModel.findByIdAndUpdate(id, { canceled: true }).exec();
  }
}
