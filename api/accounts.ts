import HTTP from "./http";

export default class Accounts {
    constructor(private httpservice: HTTP, public config: IJiraAPI) {}

    public get(username: string): Promise<IObject> {
        const url = new URL(`${this.config.url}/rest/api/latest/user`);

        url.searchParams.append("username", username);
        
        return this.httpservice.get(url);
    }

    public getAccountID(username: string): Promise<IObject> {
        const url = new URL(`${this.config.url}/rest/api/latest/user/bulk/migration`);

        url.searchParams.append("username", username);
        
        return this.httpservice.get(url);
    }
}