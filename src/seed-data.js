const now = parseInt(new Date().getTime() / 1000);
const chaoData = {
    database: "testdb",
    version: 1,
    encrypted: false,
    mode: "partial",
    tables: [
        {
            name: "chaos",
            schema: [
                { "column": "id", "value": "INTEGER PRIMARY KEY NOT NULL" },
                { "column": "name", "value": "TEXT NOT NULL" },
                { "column": "hatchDay", "value": "TEXT NOT NULL" },
                { "column": "color", "value": "TEXT NOT NULL" },
                { "column": "alignment", "value": "TEXT NOT NULL" },
                { "column": "evolution", "value": "TEXT NOT NULL" },
                { "column": "lifeCycle", "value": "TEXT NOT NULL" },
                { "column": "personality", "value": "TEXT NOT NULL" },
                { "column": "dateAdded", "value": "TEXT NOT NULL" },
                {
                    column: "last_modified",
                    value: "INTEGER DEFAULT (strftime('%s', 'now'))",
                },
            ]
        }
    ],
    values: [
        [1, "Noodles", "2023-04-02", "Two-toned Brown", "Neutral", "None", "Child", "Big eater", now],
        [2, "Jewel", "2023-01-03", "Monotone Pink", "Hero", "Swim", "Adult", "Chatty", now],
        [3, "Bubba", "2023-02-01", "Two-toned Black", "Dark", "Power", "Adult", "Curious", now],
        [4, "Sparky", "2023-05-03", "Monotone Sky-blue", "Neutral", "Fly", "Adult", "Naughty", now],
        [5, "Sparky", "2023-05-03", "Monotone Sky-blue", "Neutral", "Fly", "Adult", "Naughty", now]
    ]
}

export default chaoData;