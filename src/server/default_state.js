export const defaultState = {
    //users collection
    users: [
        {
            id: "U1",
            name: "Ivan lim",

        }
    ],
    groups: [
        {
            name: "To do",
            id: "G1",
            owner: "U1",
        },
        {
            name: "Doing",
            id: "G2",
            owner: "U1",
        },
        {
            name: "Done",
            id: "G3",
            owner: "U1",
        },
    ],
    tasks: [
        {
            name: "Do tests",
            id: "T1",
            group: "G1",
            owner: "U1",
            isComplete: false,
        },
        {
            name: "Do tests 2",
            id: "T2",
            group: "G2",
            owner: "U1",
            isComplete: false,
        },
        {
            name: "Do tests 3",
            id: "T3",
            group: "G3",
            owner: "U1",
            isComplete: true,
        },
        {
            name: "Do tests 4",
            id: "T4",
            group: "G3",
            owner: "U1",
            isComplete: true,
        },
    ],
    comments: [
        {
            owner: "U1",
            id: "C1",
            task: "T1",
            content: "Great work!",
        },
    ],
}