import mongoose from "mongoose";
import dotenv from "dotenv";
import Question from "./models/Question.js";

dotenv.config();

// ───────────────────────── LISTENING ─────────────────────────
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
    type: "fill-blank",
    passage:
      "Candidates who ask thoughtful questions during an interview often leave a stronger impression on the panel.",
    blankPassage:
      "Candidates who ask thoughtful questions during an interview often leave a ____ impression on the panel.",
    answer: "stronger",
  },
  {
    moduleType: "listening",
    level: "hard",
    type: "mcq",
    passage:
      "A good first impression starts before you even speak. Posture, eye contact, and a confident handshake all communicate something to the other person.",
    question: "What does the passage say communicates something before you speak?",
    options: [
      "Your resume and certificates",
      "Your posture, eye contact, and handshake",
      "The company you previously worked at",
      "Your academic grades",
    ],
    answerIndex: 1,
  },
  {
    moduleType: "listening",
    level: "beginner",
    type: "fill-blank",
    passage:
      "Time management is a skill that separates average performers from consistently high performers.",
    blankPassage:
      "Time management is a skill that separates average performers from consistently ____ performers.",
    answer: "high",
  },
  {
    moduleType: "listening",
    level: "hard",
    type: "mcq",
    passage:
      "When giving feedback to a colleague, it helps to focus on specific behavior rather than making general statements about their character.",
    question: "What does the passage suggest when giving feedback?",
    options: [
      "Focus on specific behavior, not character",
      "Avoid giving feedback altogether",
      "Give feedback only in writing",
      "Compare the colleague to others",
    ],
    answerIndex: 0,
  },
  {
    moduleType: "listening",
    level: "beginner",
    type: "fill-blank",
    passage:
      "Companies increasingly value employees who can adapt quickly to new tools and changing priorities.",
    blankPassage:
      "Companies increasingly value employees who can ____ quickly to new tools and changing priorities.",
    answer: "adapt",
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
];

// ───────────────────────── GRAMMAR ─────────────────────────
const grammarData = [
  {
    moduleType: "grammar",
    level: "beginner",
    type: "grammar-correction",
    passage: "She don't like attending morning meetings.",
    errorPart: "don't like",
    options: ["doesn't like", "not like", "didn't liked", "no likes"],
    correctIndex: 0,
    explanation: "\"She\" is third-person singular, so the verb needs \"doesn't\", not \"don't\".",
  },
  {
    moduleType: "grammar",
    level: "beginner",
    type: "grammar-correction",
    passage: "Each of the employees have submitted their report.",
    errorPart: "have submitted",
    options: ["has submitted", "having submitted", "had submit", "has submit"],
    correctIndex: 0,
    explanation: "\"Each\" is singular, so it takes the singular verb \"has\", not \"have\".",
  },
  {
    moduleType: "grammar",
    level: "beginner",
    type: "grammar-correction",
    passage: "He go to the office by metro every day.",
    errorPart: "go",
    options: ["goes", "going", "gone", "went"],
    correctIndex: 0,
    explanation: "Third-person singular subjects (\"he\") need the \"-s\" form in present simple: \"goes\".",
  },
  {
    moduleType: "grammar",
    level: "beginner",
    type: "grammar-correction",
    passage: "There is many reasons for the delay.",
    errorPart: "is many",
    options: ["are many", "is much", "was many", "is a many"],
    correctIndex: 0,
    explanation: "\"Reasons\" is plural, so it needs the plural verb \"are\", not \"is\".",
  },
  {
    moduleType: "grammar",
    level: "beginner",
    type: "grammar-correction",
    passage: "I have went to that client's office before.",
    errorPart: "have went",
    options: ["have gone", "has went", "had go", "have go"],
    correctIndex: 0,
    explanation: "The present perfect uses the past participle \"gone\", not the simple past \"went\".",
  },
  {
    moduleType: "grammar",
    level: "medium",
    type: "grammar-correction",
    passage: "By the time the manager arrives, we finish the presentation.",
    errorPart: "we finish",
    options: ["we will have finished", "we finished", "we are finishing", "we finish"],
    correctIndex: 0,
    explanation: "\"By the time\" with a future event needs the future perfect tense: \"will have finished\".",
  },
  {
    moduleType: "grammar",
    level: "medium",
    type: "grammar-correction",
    passage: "The team is looking forward to discuss the new proposal.",
    errorPart: "to discuss",
    options: ["to discussing", "for discuss", "discussing", "to discussed"],
    correctIndex: 0,
    explanation: "\"Looking forward to\" is followed by a gerund (-ing form), not the base verb: \"to discussing\".",
  },
  {
    moduleType: "grammar",
    level: "medium",
    type: "grammar-correction",
    passage: "If I was you, I would accept the offer immediately.",
    errorPart: "If I was",
    options: ["If I were", "If I am", "If I had been", "If I will be"],
    correctIndex: 0,
    explanation: "Hypothetical conditionals use the subjunctive \"were\" for all subjects, not \"was\".",
  },
  {
    moduleType: "grammar",
    level: "medium",
    type: "grammar-correction",
    passage: "The documents was reviewed by the legal team yesterday.",
    errorPart: "was reviewed",
    options: ["were reviewed", "is reviewed", "had reviewed", "was review"],
    correctIndex: 0,
    explanation: "\"Documents\" is plural, so the passive verb must agree: \"were reviewed\".",
  },
  {
    moduleType: "grammar",
    level: "medium",
    type: "grammar-correction",
    passage: "She has been working here since five years.",
    errorPart: "since five years",
    options: ["for five years", "from five years", "since five year", "since the five years"],
    correctIndex: 0,
    explanation: "\"Since\" is used with a specific point in time; a duration needs \"for\": \"for five years\".",
  },
  {
    moduleType: "grammar",
    level: "hard",
    type: "grammar-correction",
    passage: "Neither the manager nor the employees was informed about the change.",
    errorPart: "was informed",
    options: ["were informed", "was inform", "have informed", "is informed"],
    correctIndex: 0,
    explanation: "With \"neither...nor\", the verb agrees with the nearer subject (\"employees\", plural), so it should be \"were\".",
  },
  {
    moduleType: "grammar",
    level: "hard",
    type: "grammar-correction",
    passage: "The report, along with the supporting documents, were sent yesterday.",
    errorPart: "were sent",
    options: ["was sent", "have been sent", "are sent", "were send"],
    correctIndex: 0,
    explanation: "\"Along with...\" doesn't make the subject plural — the verb agrees with \"the report\" (singular), so \"was sent\" is correct.",
  },
  {
    moduleType: "grammar",
    level: "hard",
    type: "grammar-correction",
    passage: "Had I known about the deadline, I would of finished it sooner.",
    errorPart: "would of",
    options: ["would have", "would had", "will have", "would being"],
    correctIndex: 0,
    explanation: "\"Would of\" is a common misspelling — the correct form is \"would have\".",
  },
  {
    moduleType: "grammar",
    level: "hard",
    type: "grammar-correction",
    passage: "Not only the manager but also her team members was present at the review.",
    errorPart: "was present",
    options: ["were present", "is present", "has been present", "was presenting"],
    correctIndex: 0,
    explanation: "With \"not only...but also\", the verb agrees with the nearer subject (\"team members\", plural), so \"were\" is correct.",
  },
  {
    moduleType: "grammar",
    level: "hard",
    type: "grammar-correction",
    passage: "The number of applicants have increased significantly this year.",
    errorPart: "have increased",
    options: ["has increased", "having increased", "had increase", "has increase"],
    correctIndex: 0,
    explanation: "\"The number of\" takes a singular verb (\"has\"), unlike \"a number of\", which takes a plural verb.",
  },
];

// ───────────────────────── SPEAKING ─────────────────────────
const speakingData = [
  { moduleType: "speaking", level: "beginner", type: "read-aloud", passage: "Good morning everyone. Thank you for joining today's meeting on time." },
  { moduleType: "speaking", level: "beginner", type: "read-aloud", passage: "I will send you the updated report by the end of the day." },
  { moduleType: "speaking", level: "beginner", type: "read-aloud", passage: "Please let me know if you have any questions about the agenda." },
  { moduleType: "speaking", level: "beginner", type: "read-aloud", passage: "We will begin the training session at ten o'clock sharp." },
  { moduleType: "speaking", level: "beginner", type: "read-aloud", passage: "Thank you for your patience while we resolve this issue." },
  {
    moduleType: "speaking",
    level: "medium",
    type: "read-aloud",
    passage:
      "Our team has made significant progress this quarter, and I want to thank everyone for their hard work and dedication.",
  },
  {
    moduleType: "speaking",
    level: "medium",
    type: "read-aloud",
    passage:
      "Before we proceed with the next agenda item, does anyone have questions about the budget proposal we just discussed?",
  },
  {
    moduleType: "speaking",
    level: "medium",
    type: "read-aloud",
    passage:
      "I'd like to schedule a follow-up call next week to go over the remaining action items in more detail.",
  },
  {
    moduleType: "speaking",
    level: "medium",
    type: "read-aloud",
    passage:
      "The client expressed interest in extending the contract, provided we can meet the revised timeline.",
  },
  {
    moduleType: "speaking",
    level: "medium",
    type: "read-aloud",
    passage:
      "Please review the attached document and share your feedback before our meeting tomorrow afternoon.",
  },
  {
    moduleType: "speaking",
    level: "hard",
    type: "read-aloud",
    passage:
      "Effective communication requires not only clarity of thought but also the ability to adapt your message depending on the audience you are addressing.",
  },
  {
    moduleType: "speaking",
    level: "hard",
    type: "read-aloud",
    passage:
      "Given the current market conditions, we recommend a cautious approach that balances innovation with financial sustainability over the next fiscal year.",
  },
  {
    moduleType: "speaking",
    level: "hard",
    type: "read-aloud",
    passage:
      "Our analysis suggests that while short-term revenue may dip slightly, the long-term benefits of this restructuring will outweigh the initial costs.",
  },
  {
    moduleType: "speaking",
    level: "hard",
    type: "read-aloud",
    passage:
      "It is essential that all stakeholders align on the revised objectives before we allocate additional resources to this initiative.",
  },
  {
    moduleType: "speaking",
    level: "hard",
    type: "read-aloud",
    passage:
      "Despite the challenges we encountered during implementation, the overall feedback from early adopters has been overwhelmingly positive.",
  },
];

// ───────────────────────── SITUATIONAL ─────────────────────────
const situationalData = [
  {
    moduleType: "situational",
    level: "medium",
    type: "mcq",
    passage:
      "A colleague messages: \"I won't be able to join the call, can you take notes for me?\" What is the most appropriate response?",
    options: [
      "I'm busy too, ask someone else.",
      "Sure, I'll take notes and share them with you after.",
      "Fine, but you owe me.",
      "I'll try, no promises.",
    ],
    answerIndex: 1,
  },
  {
    moduleType: "situational",
    level: "medium",
    type: "mcq",
    passage:
      "Your manager emails: \"Can you send me the report by tomorrow morning?\" What is the most appropriate response?",
    options: [
      "Maybe, I'll see how it goes.",
      "Sure, I'll have it ready by tomorrow morning.",
      "Why do you need it so soon?",
      "I don't think I can do that.",
    ],
    answerIndex: 1,
  },
  {
    moduleType: "situational",
    level: "medium",
    type: "mcq",
    passage:
      "A client writes: \"This is the second time my request has been delayed. I'm not happy about this.\" What is the most appropriate response?",
    options: [
      "That's not really our fault.",
      "I understand your frustration — let me personally look into this and update you within the hour.",
      "These things happen sometimes.",
      "I'll pass this along to someone else.",
    ],
    answerIndex: 1,
  },
  {
    moduleType: "situational",
    level: "medium",
    type: "mcq",
    passage:
      "A teammate messages: \"I made a mistake in the shared file, sorry about that.\" What is the most appropriate response?",
    options: [
      "That's a pretty big mistake to make.",
      "No worries, let's fix it together.",
      "You should be more careful next time.",
      "I already noticed, it's fine.",
    ],
    answerIndex: 1,
  },
  {
    moduleType: "situational",
    level: "medium",
    type: "mcq",
    passage:
      "Your team lead asks: \"Are you comfortable presenting this to the client tomorrow?\" What is the most appropriate response?",
    options: [
      "Not really, can someone else do it?",
      "Yes, I'll prepare and be ready to present.",
      "I guess so, if I have to.",
      "I've never done that before.",
    ],
    answerIndex: 1,
  },
  {
    moduleType: "situational",
    level: "medium",
    type: "mcq",
    passage:
      "A colleague from another team messages: \"Can you share the API documentation when you get a chance?\" What is the most appropriate response?",
    options: [
      "I'm quite busy right now.",
      "Sure, I'll send it over shortly.",
      "That's not really my responsibility.",
      "Ask my manager instead.",
    ],
    answerIndex: 1,
  },
  {
    moduleType: "situational",
    level: "beginner",
    type: "mcq",
    passage:
      "A coworker messages: \"Running 5 minutes late to the meeting, can you start without me?\" What is the most appropriate response?",
    options: [
      "No, we'll wait for you.",
      "Sure, no problem — I'll fill you in when you join.",
      "You should plan better.",
      "That's not okay.",
    ],
    answerIndex: 1,
  },
  {
    moduleType: "situational",
    level: "beginner",
    type: "mcq",
    passage:
      "Your manager says: \"Great job on the presentation today.\" What is the most appropriate response?",
    options: [
      "I know, it was really good.",
      "Thank you, I appreciate that!",
      "It wasn't that great honestly.",
      "Finally, someone noticed.",
    ],
    answerIndex: 1,
  },
  {
    moduleType: "situational",
    level: "hard",
    type: "mcq",
    passage:
      "A senior stakeholder emails: \"I disagree with the direction this project has taken and want to discuss it urgently.\" What is the most appropriate response?",
    options: [
      "I'm confident we're right, no need to discuss.",
      "I'd welcome the chance to discuss this — are you available for a call today?",
      "Let's just continue as planned.",
      "That's disappointing to hear.",
    ],
    answerIndex: 1,
  },
  {
    moduleType: "situational",
    level: "hard",
    type: "mcq",
    passage:
      "A vendor writes: \"We won't be able to meet the agreed delivery date due to supply issues.\" What is the most appropriate response?",
    options: [
      "That's unacceptable, fix it immediately.",
      "Thanks for the heads-up — can we discuss a revised timeline and any impact on our side?",
      "This is very disappointing news.",
      "We'll have to find another vendor.",
    ],
    answerIndex: 1,
  },
];

// ───────────────────────── WRITING (Business Communication) ─────────────────────────
const writingData = [
  {
    moduleType: "writing",
    type: "writing-prompt",
    lengthCategory: "short",
    prompt:
      "Write a short email to your manager informing them that you will be 30 minutes late to work tomorrow due to a doctor's appointment.",
    wordLimit: "40-60 words",
    modelAnswer:
      "Subject: Slightly Late Arrival Tomorrow\n\nHi [Manager's name],\n\nI have a doctor's appointment tomorrow morning and expect to reach the office about 30 minutes late. I'll make sure my morning tasks are covered before I leave and will be available on chat if needed.\n\nThanks for understanding.\n\n[Your name]",
  },
  {
    moduleType: "writing",
    type: "writing-prompt",
    lengthCategory: "short",
    prompt:
      "Write a brief message to a colleague asking them to review a document you've shared before the end of the day.",
    wordLimit: "30-50 words",
    modelAnswer:
      "Hi [Name], I've shared the draft report with you — could you review it and share feedback by end of day? Happy to hop on a quick call if anything's unclear. Thanks!",
  },
  {
    moduleType: "writing",
    type: "writing-prompt",
    lengthCategory: "short",
    prompt:
      "Write an email requesting a day of leave next Friday for a family function.",
    wordLimit: "40-60 words",
    modelAnswer:
      "Subject: Leave Request — Friday\n\nHi [Manager's name],\n\nI'd like to request a day of leave this Friday for a family function. I'll complete my pending tasks before then and be reachable for anything urgent.\n\nThanks for considering this.\n\n[Your name]",
  },
  {
    moduleType: "writing",
    type: "writing-prompt",
    lengthCategory: "short",
    prompt:
      "Write a short email asking IT support to help you with a laptop issue affecting your work.",
    wordLimit: "30-50 words",
    modelAnswer:
      "Hi IT Team, my laptop has been freezing frequently since this morning, which is affecting my work. Could someone take a look today? Happy to bring it by whenever convenient. Thanks!",
  },
  {
    moduleType: "writing",
    type: "writing-prompt",
    lengthCategory: "long",
    prompt:
      "Write an email to your team summarizing the outcomes of a project review meeting, including two key decisions made and the next steps each team member is responsible for.",
    wordLimit: "120-150 words",
    modelAnswer:
      "Subject: Project Review — Summary & Next Steps\n\nHi Team,\n\nThanks for joining today's project review. Here's a quick summary of what we covered:\n\nKey decisions:\n1. We will move the launch date to the 15th to allow more time for QA testing.\n2. The design team will finalize the updated mockups by Friday.\n\nNext steps:\n- Priya: Update the QA test plan by Wednesday.\n- Arjun: Share the revised mockups with stakeholders.\n- Everyone: Please review the shared doc and flag any blockers by tomorrow EOD.\n\nLet me know if I've missed anything from our discussion. Thanks for your continued effort on this.\n\nBest,\n[Your name]",
  },
  {
    moduleType: "writing",
    type: "writing-prompt",
    lengthCategory: "long",
    prompt:
      "Write an email to a client explaining a delay in project delivery, the reason behind it, and the revised timeline, while maintaining a professional and reassuring tone.",
    wordLimit: "120-160 words",
    modelAnswer:
      "Subject: Update on Your Project Timeline\n\nDear [Client's name],\n\nI wanted to personally update you on the status of your project. Due to an unexpected delay in receiving third-party assets, we are slightly behind our original schedule.\n\nWe understand how important timely delivery is to you, and we've already adjusted our internal resources to minimize further delays. Our revised delivery date is now [new date], and we're confident we can meet this without compromising on quality.\n\nWe sincerely apologize for any inconvenience this may cause and appreciate your patience. Please feel free to reach out if you have any questions or concerns in the meantime.\n\nBest regards,\n[Your name]",
  },
  {
    moduleType: "writing",
    type: "writing-prompt",
    lengthCategory: "long",
    prompt:
      "Write an email to a new team member welcoming them to the company, introducing yourself, and outlining what they can expect during their first week.",
    wordLimit: "120-150 words",
    modelAnswer:
      "Subject: Welcome to the Team!\n\nHi [New hire's name],\n\nWelcome aboard! I'm [Your name], and I'll be working closely with you on the [team name] team. We're all really excited to have you join us.\n\nDuring your first week, you'll go through a short onboarding session, get set up with your accounts and tools, and have a chance to meet everyone on the team. I'll also set up some time on your first day to walk you through our current projects.\n\nIf you have any questions before then, feel free to reach out anytime — I'm happy to help.\n\nLooking forward to working with you!\n\nBest,\n[Your name]",
  },
  {
    moduleType: "writing",
    type: "writing-prompt",
    lengthCategory: "long",
    prompt:
      "Write an email to your manager proposing a new process improvement, explaining the current problem, your suggested solution, and the expected benefit.",
    wordLimit: "130-170 words",
    modelAnswer:
      "Subject: Suggestion to Improve Our Reporting Process\n\nHi [Manager's name],\n\nI wanted to share an idea that could help streamline our weekly reporting process. Currently, each team member compiles their updates separately, which often leads to duplicated effort and inconsistent formatting.\n\nI'd suggest we move to a shared template that everyone updates directly, with a single person consolidating it before the Friday deadline. This should reduce the time spent on formatting and make it easier to spot overlaps between teams.\n\nI'd be happy to put together a draft template and walk the team through it if this sounds useful. Let me know your thoughts whenever you get a chance.\n\nThanks,\n[Your name]",
  },
];

// ───────────────────────── SEED SCRIPT ─────────────────────────
async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    const allData = [
      ...listeningData,
      ...grammarData,
      ...speakingData,
      ...situationalData,
      ...writingData,
    ];
    const moduleTypes = [...new Set(allData.map((item) => item.moduleType))];

    await Question.deleteMany({ moduleType: { $in: moduleTypes } });
    console.log("Cleared old questions for:", moduleTypes.join(", "));

    await Question.insertMany(allData);
    console.log(`Inserted ${allData.length} questions total`);
    console.log(`  Listening: ${listeningData.length}`);
    console.log(`  Grammar: ${grammarData.length}`);
    console.log(`  Speaking: ${speakingData.length}`);
    console.log(`  Situational: ${situationalData.length}`);
    console.log(`  Writing: ${writingData.length}`);

    process.exit(0);
  } catch (err) {
    console.error("Seed failed:", err.message);
    process.exit(1);
  }
}

seed();