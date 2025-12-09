import HTTP from "./http";

export default class Accounts {
    constructor(private httpservice: HTTP, public config: IJiraAPI) {}

    public get(email: string): Promise<IObject> {
        const url = new URL(`${this.config.url}/rest/api/3/users/search`);

        const queryParams: IObject = {
            query: email,
            maxResults: "1"
        };
        Object.entries(queryParams).forEach(([key, value]) => {
            url.searchParams.append(key, value);
        });

        return this.httpservice.get(url);
    }
}