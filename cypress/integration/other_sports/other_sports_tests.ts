import { CricketPage } from "../../pages/cricket_page";
import { TennisPage } from "../../pages/tennis_page";
import { Actions } from "../../pages/utils/actions";
import { Verifications } from "../../pages/utils/verifications";

const actions = new Actions();
const verifications = new Verifications();
const tennis_page = new TennisPage();
const cricket_page = new CricketPage();

describe('Other sports tests', ()=>{

    it('select tennis tab', function(){
        actions.select_tab('Tenis');
        verifications.verify_url("https://www.flashscore.ro/tenis/");
        verifications.verify_tab_selected('Tenis');
        verifications.verify_color_of_header(tennis_page.tennis_header_primary_colour);
    })

    it('verify names of my tennis leagues', ()=>{
        actions.select_tab('Tenis');
        tennis_page.verify_my_leagues_titles();
    })

    it('verify my tennis teams entry', ()=>{
        actions.select_tab("Tenis");
        verifications.verify_my_teams_entry();
    })

    it('select Crichet tab', ()=> {
        let name = 'Crichet'
        actions.open_other_sports_menu();
        actions.select_other_sport(name);
        verifications.verify_url("https://www.flashscore.ro/crichet/");
        verifications.verify_page_is_loaded(name);
        verifications.verify_color_of_header(cricket_page.cricket_header_primary_color);
    })
})