import { expect, test } from "bun:test";
import JiraAPI from "../api/main";

const jira = new JiraAPI({
  token: process.env.JIRA_TOKEN as string,
  url: process.env.JIRA_URL as string,
});

const projectId = parseInt(process.env.JIRA_TEST_PROJECT_ID as string);
if (!projectId) {
    throw new Error("JIRA_TEST_PROJECT_ID is not set");
}

let release: IObject;

test("should successfully create a new release", async () => {
    release = await jira.releases.create({
        name: "Unit Test Release",
        description: "Created by a unit test",
        startDate: new Date().toISOString(),
        projectId: projectId,
        released: false,
        archived: false,
    });
    expect(release?.error).toBeUndefined();
});

test("should successfully update a release", async () => {
    expect(release?.error).toBeUndefined();
    const updatedRelease = await jira.releases.update({
        name: "Unit Test Release",
        description: "Updated by a unit test",
        startDate: new Date().toISOString(),
        projectId: projectId,
        released: false,
        archived: false,
    }, release.id);
    expect(updatedRelease?.error).toBeUndefined();
});

test("should successfully delete a release", async () => {
    expect(release?.error).toBeUndefined();
    const deletedRelease = await jira.releases.delete(release.id);
    expect(deletedRelease?.error).toBeUndefined();
});
