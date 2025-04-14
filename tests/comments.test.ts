import { expect, test } from "bun:test";
import { mockJira, MockIssue, MockCommentsList, MockCommentAdd, MockCommentUpdate, MockCommentRemove } from "./mock"

// Apply mocks
mockJira.issues.get = MockIssue;
mockJira.comments.list = MockCommentsList;
mockJira.comments.add = MockCommentAdd;
mockJira.comments.update = MockCommentUpdate;
mockJira.comments.remove = MockCommentRemove;

const issueId = "MOCK-123";

test("should successfully fetch the comments for a Jira issue", async () => {
    const list = await mockJira.comments.list(issueId);
    expect(list?.error).toBeUndefined();
    expect(list?.comments).toHaveLength(1);
    expect(list?.comments[0].body).toBe("Test comment");
});

test("should successfully add a comment to a Jira issue", async () => {
    const comment = await mockJira.comments.add(issueId, "This is a test comment");
    expect(comment.body).toBe("This is a test comment");
});

test("should successfully update a comment for a Jira issue", async () => {
    const list = await mockJira.comments.list(issueId);
    expect(list?.error).toBeUndefined();
    const comment = list?.comments[0];
    expect(comment?.id).toBeDefined();
    const updatedComment = await mockJira.comments.update(issueId, comment.id, "This is an updated comment");
    expect(updatedComment.body).toBe("This is an updated comment");
});

test("should successfully delete a comment for a Jira issue", async () => {
    const list = await mockJira.comments.list(issueId);
    expect(list?.error).toBeUndefined();
    const comment = list?.comments[0];
    expect(comment?.id).toBeDefined();
    const deletedComment = await mockJira.comments.remove(issueId, comment?.id);
    expect(deletedComment).toBeUndefined();
});