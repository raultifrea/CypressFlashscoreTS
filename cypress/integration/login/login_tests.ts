import { FootballPage } from "../../pages/football/football_page"
import { Actions } from "../../pages/utils/actions"

const actions = new Actions();
const footbal_page = new FootballPage();

describe("Login using HTML UI", ()=>{

    beforeEach(()=>{
        cy.navigate("https://www.flashscore.ro/");
        cy.acceptDisclaimer();
    })

    it("successful login UI", ()=>{
        cy.fixture('users').then((users)=>{
            footbal_page.login_successful_ui(users.email, users.password);
        })
    })

    it("failed login UI", ()=>{
        cy.fixture('users').then((users)=>{
            footbal_page.login_failed_ui(users.email, "password");
        })
    })

    it("logout UI", ()=>{
        cy.fixture('users').then((users)=>{
            footbal_page.login_successful_ui(users.email, users.password);
        })
        footbal_page.logout();
    })
})