import mongoose from "mongoose";
import dotenv from "dotenv";
import Question from "./models/Question.js";

dotenv.config();

// Paste tumhare listeningQuestions.js ka data yahan,
// bas har question mein "moduleType: 'listening'," add karna hai
const listeningData = [
  {
    moduleType: "listening",
    level: "medium",
    type: "mcq",
    passage:
      "Most companies now expect new employees to be comfortable working in cross-functional teams, where people from different departments collaborate on a single project.",
    question: "What does the passage say companies expect from new employees?",
    options: [
      "Comfort working across departments on shared projects",
      "Preference for working alone on individual tasks",
      "Experience managing a large team of engineers",
      "Willingness to relocate to a different city",
    ],
    answerIndex: 0,
  },
  {
    moduleType: "listening",
    level: "beginner",
    type: "fill-blank",
    passage:
      "The interview panel was impressed by her ability to explain complex technical ideas in simple terms.",
    blankPassage:
      "The interview panel was impressed by her ability to explain complex technical ideas in ____ terms.",
    answer: "simple",
  },
  {
    moduleType: "listening",
    level: "hard",
    type: "mcq",
    passage:
      "Effective communication in the workplace is not only about speaking clearly, but also about listening carefully and responding to what others actually said.",
    question: "According to the passage, effective communication requires:",
    options: [
      "Speaking loudly so everyone can hear",
      "Clear speaking and careful listening",
      "Avoiding conversations with colleagues",
      "Writing detailed reports every day",
    ],
    answerIndex: 1,
  },
  {
    moduleType: "listening",
    level: "beginner",
    type: "fill-blank",
    passage:
      "Before the client meeting, the team reviewed the presentation twice to make sure every slide was accurate.",
    blankPassage:
      "Before the client meeting, the team reviewed the presentation ____ to make sure every slide was accurate.",
    answer: "twice",
  },
  {
    moduleType: "listening",
    level: "medium",
    type: "mcq",
    passage:
      "Remote work has changed how teams collaborate. Many organizations now rely on video calls, shared documents, and instant messaging instead of face-to-face meetings.",
    question: "What has remote work changed, according to the passage?",
    options: [
      "The salary structure of employees",
      "How teams collaborate with each other",
      "The number of holidays companies offer",
      "The location of company headquarters",
    ],
    answerIndex: 1,
  },
    {
    moduleType: "listening",
    level: "beginner",
    type: "mcq",
    passage:
      "New employees are usually given a laptop and an email account on their very first day at the office.",
    question: "What do new employees usually receive on their first day?",
    options: [
      "A laptop and an email account",
      "A company car",
      "A promotion letter",
      "A performance bonus",
    ],
    answerIndex: 0,
  },
  {
    moduleType: "listening",
    level: "beginner",
    type: "fill-blank",
    passage:
      "She arrived early for her interview to review her notes one last time.",
    blankPassage:
      "She arrived ____ for her interview to review her notes one last time.",
    answer: "early",
  },
  {
    moduleType: "listening",
    level: "beginner",
    type: "mcq",
    passage:
      "Most offices expect employees to reply to important emails within twenty-four hours.",
    question: "Within how long should employees reply to important emails?",
    options: [
      "One week",
      "Twenty-four hours",
      "One hour",
      "There is no expectation",
    ],
    answerIndex: 1,
  },
  {
    moduleType: "listening",
    level: "beginner",
    type: "fill-blank",
    passage:
      "The manager asked the team to submit their reports by Friday evening.",
    blankPassage:
      "The manager asked the team to submit their reports by ____ evening.",
    answer: "Friday",
  },
  {
    moduleType: "listening",
    level: "medium",
    type: "mcq",
    passage:
      "Companies that offer flexible working hours often report higher employee satisfaction, since staff can better balance personal responsibilities with work deadlines.",
    question: "Why might flexible working hours increase employee satisfaction?",
    options: [
      "Employees work fewer total hours",
      "Staff can better balance personal responsibilities with work",
      "Salaries automatically increase",
      "Employees no longer need deadlines",
    ],
    answerIndex: 1,
  },
  {
    moduleType: "listening",
    level: "medium",
    type: "fill-blank",
    passage:
      "During the onboarding session, the HR team explained the company's leave policy in detail.",
    blankPassage:
      "During the onboarding session, the HR team explained the company's leave ____ in detail.",
    answer: "policy",
  },
  {
    moduleType: "listening",
    level: "medium",
    type: "mcq",
    passage:
      "A well-structured resume highlights measurable achievements rather than simply listing job responsibilities, which helps recruiters quickly identify a candidate's impact.",
    question: "What does a well-structured resume highlight, according to the passage?",
    options: [
      "Only job titles",
      "Measurable achievements rather than just responsibilities",
      "The candidate's age",
      "Personal hobbies",
    ],
    answerIndex: 1,
  },
  {
    moduleType: "listening",
    level: "medium",
    type: "fill-blank",
    passage:
      "The project was delayed because two key team members were on leave at the same time.",
    blankPassage:
      "The project was delayed because two key team members were on ____ at the same time.",
    answer: "leave",
  },
  {
    moduleType: "listening",
    level: "medium",
    type: "mcq",
    passage:
      "Managers who explain the reasoning behind a decision, rather than simply issuing instructions, tend to build more trust with their teams over time.",
    question: "What builds more trust between managers and teams, per the passage?",
    options: [
      "Issuing instructions without explanation",
      "Explaining the reasoning behind decisions",
      "Avoiding all decisions",
      "Working from home permanently",
    ],
    answerIndex: 1,
  },
  {
    moduleType: "listening",
    level: "medium",
    type: "fill-blank",
    passage:
      "The client appreciated how quickly the support team resolved the technical issue.",
    blankPassage:
      "The client appreciated how quickly the support team ____ the technical issue.",
    answer: "resolved",
  },
  {
    moduleType: "listening",
    level: "hard",
    type: "mcq",
    passage:
      "While technical skills can be taught relatively quickly on the job, soft skills such as adaptability and clear communication often take much longer to develop and are harder to formally train.",
    question: "According to the passage, why are soft skills harder to develop than technical skills?",
    options: [
      "They require expensive certifications",
      "They take longer to develop and are harder to formally train",
      "They are not valued by employers",
      "They can be learned overnight",
    ],
    answerIndex: 1,
  },
  {
    moduleType: "listening",
    level: "hard",
    type: "mcq",
    passage:
      "Organizations that encourage employees to voice disagreement respectfully, rather than suppressing dissent, often make better long-term decisions because more perspectives are considered before a final choice is made.",
    question: "Why might organizations that allow respectful disagreement make better decisions?",
    options: [
      "Decisions are made faster",
      "More perspectives are considered before deciding",
      "Employees stop attending meetings",
      "Managers no longer need to decide anything",
    ],
    answerIndex: 1,
  },
  {
    moduleType: "listening",
    level: "hard",
    type: "fill-blank",
    passage:
      "Despite the tight deadline, the team delivered a polished product by carefully prioritizing the most critical features first.",
    blankPassage:
      "Despite the tight deadline, the team delivered a polished product by carefully ____ the most critical features first.",
    answer: "prioritizing",
  },
  {
    moduleType: "listening",
    level: "hard",
    type: "mcq",
    passage:
      "A candidate who asks about a company's long-term strategy, rather than only its immediate perks, often signals genuine interest in growing with the organization rather than simply securing a short-term role.",
    question: "What does asking about long-term strategy signal about a candidate, per the passage?",
    options: [
      "They only care about salary",
      "Genuine interest in growing with the organization",
      "They plan to leave quickly",
      "They are unprepared for the interview",
    ],
    answerIndex: 1,
  },
  {
    moduleType: "listening",
    level: "hard",
    type: "fill-blank",
    passage:
      "The negotiation succeeded because both sides were willing to compromise on secondary issues while holding firm on their core priorities.",
    blankPassage:
      "The negotiation succeeded because both sides were willing to ____ on secondary issues while holding firm on their core priorities.",
    answer: "compromise",
  },
  {
    moduleType: "listening",
    level: "hard",
    type: "mcq",
    passage:
      "Companies that invest heavily in employee training sometimes see short-term productivity dips, but this investment frequently pays off through stronger performance and lower turnover in the following years.",
    question: "What short-term effect might heavy investment in training cause, according to the passage?",
    options: [
      "Immediate productivity gains",
      "A short-term productivity dip",
      "Higher turnover immediately",
      "No effect at all",
    ],
    answerIndex: 1,
  },
  {
    moduleType: "listening",
    level: "beginner",
    type: "mcq",
    passage:
      "The office cafeteria serves lunch between twelve and two o'clock every weekday.",
    question: "When does the office cafeteria serve lunch?",
    options: [
      "Between twelve and two o'clock",
      "All day",
      "Only on weekends",
      "Between nine and ten in the morning",
    ],
    answerIndex: 0,
  },
  {
    moduleType: "listening",
    level: "medium",
    type: "mcq",
    passage:
      "Teams that document their decisions clearly make it easier for new members to understand past choices without repeatedly asking senior colleagues for context.",
    question: "What benefit does documenting decisions provide, according to the passage?",
    options: [
      "It slows down new members",
      "New members can understand past choices without repeatedly asking colleagues",
      "It replaces the need for meetings",
      "It reduces the size of the team",
    ],
    answerIndex: 1,
  },
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    await Question.deleteMany({ moduleType: "listening" });
    console.log("Cleared old listening questions");

    await Question.insertMany(listeningData);
    console.log(`Inserted ${listeningData.length} listening questions`);

    process.exit(0);
  } catch (err) {
    console.error("Seed failed:", err.message);
    process.exit(1);
  }
}

seed();