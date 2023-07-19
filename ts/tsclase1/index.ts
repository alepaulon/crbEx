type Roles = "Admin" | "User";
type Person = {
    name: string;
    age?: unknown;        // ? significa que puede o no estar, lo transforma en opcional
    role: Roles;
    roleName: unknown;
    addAge: (age:number) => void;
};

const someone: Person ={
    name:"alejo",
    role:"Admin",
    roleName: "bot",
    addAge: (age) => {
        console.log(age);
    },
};

const age=someone.age as number



type Car = Record<string, number | string>;

const auto: Car = {marca: "Mercedes Benz"};