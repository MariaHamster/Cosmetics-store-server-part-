import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Feedback, FeedbackDocument} from "../../shemas/feedback";


@Injectable()
export class FeedbackService {

    constructor(@InjectModel(Feedback.name) private feedbackModel: Model<FeedbackDocument>) {
    }

    async getAllFeedback(): Promise<Feedback[]> {
        return this.feedbackModel.find();
    }


    async sendFeedback(data): Promise<Feedback> {
        const feedbackData = new this.feedbackModel(data);
        return feedbackData.save();
    }
}
