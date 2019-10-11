// CODE here for your Lambda Classes

class Person {
    constructor(attr) {
        this.name               = attr.name;
        this.age                = attr.age;
        this.location           = attr.location;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
    }
}

class Instructor extends Person {
    constructor(insAttr) {
        super(insAttr);
        this.specialty          = insAttr.specialty;
        this.favLanguage        = insAttr.favLanguage;
        this.catchPhrase        = insAttr.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}.`);
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}.`)
    }
}

class Student extends Person {
    constructor(stAttr) {
        super(stAttr);
        this.previousBackground = stAttr.previousBackground;
        this.className          = stAttr.className;
        this.favSubjects        = stAttr.favSubjects;
    }
    listsSubjects() {
        console.log(this.favSubjects);
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}.`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun the sprint challenge on ${subject}.`);
    }
}

class TeamLead extends Instructor {
    constructor(tlAttr) {
        super(tlAttr);
        this.gradClassName      = tlAttr.gradClassName;
        this.favInstructor      = tlAttr.favInstructor;
    }
    standUp(channel) {
        console.log(`${this.name} announces to @${channel}, @channel study times!`)
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`);
    }
}

const pace = new Instructor({
    name:                   'Pace',
    age:                    'Nicely',
    location:               'Boston',
    specialty:              'Instructing',
    favLanguage:            'Ruby on Rails',
    catchPhrase:            'Welcome, everybody!',
});

const rand = new Student({
    name:                   'Rand',
    age:                    'Intentionally',
    location:               'The Two Rivers',
    previousBackground:     [
        'Farmer',
        'Dragon Reborn',
    ],
    className:              'WebPT200',
    favSubjects:            [
        'Web Fundamentals',
        'ServerSide Administration',
    ],
});

const samTorres = new TeamLead({
    name:                   'Sam',
    age:                    'Indeterminable',
    location:               'California',
    gradClassName:          'Web23',
    favInstructor:          'Bill',
});

pace.speak();
pace.demo('Robotics');
pace.grade(rand, 'Useless Trivia for the New Century');
console.log(pace.catchPhrase);

rand.speak();
rand.listsSubjects();
rand.PRAssignment('Eloquent Javascript');
rand.sprintChallenge('Javascript Fundamentals');

samTorres.speak();
samTorres.standUp('webpt11_sam');
samTorres.debugsCode(rand, 'Html/CSS');