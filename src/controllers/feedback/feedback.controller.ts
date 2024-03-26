import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {FeedbackService} from "../../services/feedback/feedback.service";
import {Feedback} from "../../shemas/feedback";
import {FeedbackDto} from "../../dto/feedback-dto";

@Controller('feedback')
export class FeedbackController {

    constructor(private feedbackService: FeedbackService) {
    }

    @Get()
    getAllFeedback(): Promise<Feedback[]> {
        return this.feedbackService.getAllFeedback();
    }

    @Post()
    sendFeedback(@Body() data: FeedbackDto): Promise<Feedback>  {
        return this.feedbackService.sendFeedback(data);
    }

}
