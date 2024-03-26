import {IFeedback} from "../interfaces/feedback";

// описание файлов, которые будут записываться в базу данных
export class FeedbackDto implements IFeedback {
    theme: string;
    name: string;
    mail: string;
    text: string;
    id: string;

    constructor(theme, name, mail, text) {
        this.theme = theme;
        this.name = name;
        this.mail = mail;
        this.text = text;
    }

}