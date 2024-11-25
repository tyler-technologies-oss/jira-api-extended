import HTTP from "./http";

export default class Projects {
    constructor(private httpservice: HTTP, public config: IJiraAPI) {}

    public get(projectKey: string): Promise<IObject> {
        const url = new URL(`${this.config.url}/rest/api/latest/project/${projectKey}`);

        return this.httpservice.get(url);
    }
}