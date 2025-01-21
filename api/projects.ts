import HTTP from "./http";

export default class Projects {
    constructor(private httpservice: HTTP, public config: IJiraAPI) {}

    public list(id: number): Promise<IObject> {
        const url = new URL(`${this.config.url}/rest/api/latest/project/${id}`);

        return this.httpservice.get(url);
    }
}