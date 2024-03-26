import {HydratedDocument} from "mongoose";
import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {IFeedback} from "../interfaces/feedback";

export type FeedbackDocument = HydratedDocument<Feedback>;

@Schema()
export class Feedback implements IFeedback {

    @Prop() theme:string;

    @Prop() name:string;

    @Prop() mail:string;

    @Prop() text: string;

    @Prop() id: string;

}

export const FeedbackSchema = SchemaFactory.createForClass(Feedback);