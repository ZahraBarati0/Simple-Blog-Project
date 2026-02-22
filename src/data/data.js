export const posts = [
    { id: "1", title: "React Router Basics" },
    { id: "2", title: "URL Params in React Router" },
    { id: "3", title: "Protected Routes Concept" },
];

export function getPost(id) {
    return posts.find((p) => p.id === id);
}