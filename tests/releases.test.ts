import { expect, test } from "bun:test";
import { mockJira, MockReleaseCreate, MockRelease, MockReleaseUpdate, MockReleaseDelete } from "./mock";

// Apply mocks
mockJira.releases.create = MockReleaseCreate;
mockJira.releases.update = MockReleaseUpdate;
mockJira.releases.delete = MockReleaseDelete;

test("should successfully create a new release", async () => {
    const release = await mockJira.releases.create({
        description: "Created by a unit test",
        name: "Unit Test Release",
        archived: false,
        released: false,
        startDate: new Date().toISOString(),
        projectId: 123456,
    });
    expect(release).toBeInstanceOf(Object);
});

test("should successfully update a release", async () => {
    const releases = await MockRelease();
    const release = releases[0];
    expect(release).toBeInstanceOf(Object);
    const updatedRelease = await mockJira.releases.update({
        name: "Unit Test Release",
        description: "Updated by a unit test",
        startDate: new Date().toISOString(),
        projectId: 123456,
        released: false,
        archived: false,
    }, release.id);
    expect(updatedRelease).toBeInstanceOf(Object);
    expect(updatedRelease.description).toBe("Updated by a unit test");
});

test("should successfully delete a release", async () => {
    const releases = await MockRelease();
    const release = releases[0];
    expect(release).toBeInstanceOf(Object);
    const deletedRelease = await mockJira.releases.delete(release.id);
    expect(deletedRelease.length).toBe(0);
});
