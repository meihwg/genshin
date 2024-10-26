export interface DefaultTodoItem {
    title: string;
    description: string;
    startDate: string;
    frequency: number;
    display: number;
}

export const defaultTodos: DefaultTodoItem[] = [
    {
        title: "Daily log-in",
        description: "Log-in to claim your daily welkin reward",
        startDate: new Date().toISOString().split("T")[0], 
        frequency: 1,
        display: 0,
    },
    {
        title: "Daily quests",
        description: "Claim your daily quests reward by doing them or condensate your resins",
        startDate: new Date().toISOString().split("T")[0], 
        frequency: 1,
        display: 1,
    },
    {
        title: "Resins",
        description: "Use or condensate your resins",
        startDate: new Date().toISOString().split("T")[0], 
        frequency: 1,
        display: 1,
    },
    {
        title: "Expeditions",
        description: "Claim your expeditions rewards",
        startDate: new Date().toISOString().split("T")[0], 
        frequency: 1,
        display: 0,
    },
    {
        title: "Events",
        description: "Check if there is any event running and do them",
        startDate: new Date().toISOString().split("T")[0], 
        frequency: 1,
        display: 0,
    },
    {
        title: "Teapot",
        description: "Claim your teapot rewards",
        startDate: new Date().toISOString().split("T")[0], 
        frequency: 2,
        display: 1,
    },
    {
        title: "Weekly bosses",
        description: "Get your 3 weekly bosses rewards",
        startDate: "2024-11-28",
        frequency: 7,
        display: 1,
    },
    {
        title: "Reputation",
        description: "Do your reputation requests and primes",
        startDate: "2024-11-28",
        frequency: 7,
        display: 1,
    },
    {
        title: "Primes",
        description: "Do your weekly primes",
        startDate: "2024-11-28",
        frequency: 7,
        display: 0,
    },
    {
        title: "Requests",
        description: "Do your weekly requests",
        startDate: "2024-11-28",
        frequency: 7,
        display: 0,
    },
    {
        title: "Teapot",
        description: "Buy everything you need from your teapot before the reset",
        startDate: "2024-11-28",
        frequency: 7,
        display: 1,
    },
    {
        title: "Trials",
        description: "Do the characters trials before the reset",
        startDate: "2024-11-09",
        frequency: 21,
        display: 1,
    },
    {
        title: "Character quest",
        description: "Do the character quest before the banner resest to claim more rewards",
        startDate: "2024-11-09",
        frequency: 21,
        display: 1,
    },
    {
        title: "Theater",
        description: "Challenges the theater",
        startDate: "2024-11-01", 
        frequency: 30.5,
        display: 1,
    },
    {
        title: "Abysse",
        description: "Do your abysse floors",
        startDate: "2024-11-15",
        frequency: 30.5,
        display: 1,
    },
    {
        title: "Pass",
        description: "Finish your pass before the reset",
        startDate: "2024-11-09",
        frequency: 42,
        display: 1,
    },
    {
        title: "Archon quest",
        description: "Do the archon quest within the patch to claim 500 primos",
        startDate: "2024-11-09",
        frequency: 42,
        display: 1,
    }
];
