import { Verifications } from "../../pages/utils/verifications";

const verifications = new Verifications();

describe("General tests", ()=>{

    it('verify top ad content', ()=>{
        verifications.verify_ad_display();
    })
    
    it('check day theme', ()=>{
        verifications.verify_day_mode();
    })
    
    it('check night theme', ()=>{
        verifications.verify_night_mode();
    })
})