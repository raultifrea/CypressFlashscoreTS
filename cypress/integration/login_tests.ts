import { use } from "chai";
import { isTypedArray } from "cypress/types/lodash";
import { FootballPage } from "../pages/football/football_page"
import { Actions } from "../pages/utils/actions"

const actions = new Actions();
const footbal_page = new FootballPage();

describe("Login using HTML UI", ()=>{

    const email = 'raoul_tifrea@yahoo.com'
    const password = 'Flashscore123'

    beforeEach(()=>{
        actions.navigate("https://www.flashscore.ro/");
        actions.accept_disclaimer();
    })

    it("successful login UI", ()=>{
        footbal_page.login_successful_ui(email, password);
    })

    it("failed login UI", ()=>{
        footbal_page.login_failed_ui(email, "password");
    })

    it("logout UI", ()=>{
        footbal_page.login_successful_ui(email, password);
        footbal_page.logout();
    })
})