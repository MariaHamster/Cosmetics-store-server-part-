import { Module } from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {Feedback, FeedbackSchema} from "../../shemas/feedback";
import {FeedbackController} from "./feedback.controller";
import {FeedbackService} from "../../services/feedback/feedback.service";

@Module({
    imports: [MongooseModule.forFeature([{name: Feedback.name, schema: FeedbackSchema}])],
    controllers: [FeedbackController],
    providers: [FeedbackService],
})
export class FeedbackModule {}
