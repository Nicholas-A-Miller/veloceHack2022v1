import { LightningElement,api} from 'lwc';

export default class FlowStagesLWC extends LightningElement {
    @api stages;
    @api currentStage;
}