const LS = {
 profile:"tp_profile", registrations:"tp_registrations", saved:"tp_saved", activity:"tp_activity_v4",
 connections:"tp_connections_v2", notifications:"tp_notifications_v2", theme:"tp_theme", recent:"tp_recent", teamInvites:"tp_team_invites_v1", billing:"tp_billing_v1",
 accounts:"tp_accounts_v1", currentUser:"tp_current_user_v1"
};

const events = [
 {id:"ai-nexus",name:"AI Nexus 2026",category:"AI / ML",description:"Build intelligent solutions using AI, ML and Generative AI.",longDescription:"A high-energy innovation challenge where teams turn machine learning ideas into working prototypes with mentors, judging and a final showcase.",startDate:"2026-08-25",endDate:"2026-08-27",startTime:"09:00",endTime:"18:00",location:"Online",mode:"Online",organizer:"TechPulse Labs",organizerLinkedIn:"https://www.linkedin.com/",organizerDescription:"Demo organizer for the TechPulse experience.",prize:"₹50,000",participants:2430,maxParticipants:5000,registrationDeadline:"2026-08-24",difficulty:"Intermediate",genderEligibility:"Open to All",tags:["AI","ML","GenAI","Hackathon"],skills:["Python","Machine Learning","TensorFlow","Generative AI"],featured:true,popular:true,recurring:true,previousEditions:["ai-2025","ai-2024"],rounds:[{name:"Online Assessment",start:"2026-08-25T09:00:00",end:"2026-08-25T11:00:00"},{name:"Hackathon",start:"2026-08-25T12:00:00",end:"2026-08-26T18:00:00"},{name:"Final Presentation",start:"2026-08-27T14:00:00",end:"2026-08-27T17:00:00"}]},
 {id:"cyberhack",name:"CyberHack 2026",category:"Cybersecurity",description:"Defend, attack and learn through a practical security challenge.",longDescription:"A hands-on cyber challenge combining a CTF qualifier, defensive engineering and a final security challenge.",startDate:"2026-08-29",endDate:"2026-08-30",startTime:"10:00",endTime:"18:00",location:"Pune + Online",mode:"Hybrid",organizer:"SecureForge",organizerLinkedIn:"https://www.linkedin.com/",organizerDescription:"Demo cybersecurity community.",prize:"₹75,000",participants:1740,maxParticipants:3000,registrationDeadline:"2026-08-28",difficulty:"Advanced",genderEligibility:"Open to All",tags:["CTF","Security","Linux"],skills:["Cybersecurity","Linux","Networking"],featured:true,popular:true,recurring:true,previousEditions:["cyber-2025","cyber-2024"],rounds:[{name:"CTF Qualifier",start:"2026-08-29T10:00:00",end:"2026-08-29T12:00:00"},{name:"Security Challenge",start:"2026-08-30T11:00:00",end:"2026-08-30T17:00:00"}]},
 {id:"genai",name:"GenAI Buildathon",category:"Generative AI",description:"Prototype a useful AI product in one weekend.",longDescription:"Build assistants, agents and creative tools using modern generative AI patterns.",startDate:"2026-09-05",endDate:"2026-09-06",startTime:"09:00",endTime:"18:00",location:"Online",mode:"Online",organizer:"FutureStack",organizerLinkedIn:"https://www.linkedin.com/",organizerDescription:"Demo organizer.",prize:"₹60,000",participants:1210,maxParticipants:2500,registrationDeadline:"2026-09-04",difficulty:"Intermediate",genderEligibility:"Open to All",tags:["LLM","Agents","AI"],skills:["Python","LLMs","APIs"],featured:true,popular:true,recurring:false,previousEditions:[],rounds:[{name:"Build Phase",start:"2026-09-05T09:00:00",end:"2026-09-06T16:00:00"},{name:"Demo Day",start:"2026-09-06T16:30:00",end:"2026-09-06T18:00:00"}]},
 {id:"codestorm",name:"CodeStorm",category:"Competitive Programming",description:"A fast-paced coding contest for problem solvers.",longDescription:"Two-round programming competition focused on algorithms, data structures and speed.",startDate:"2026-09-06",endDate:"2026-09-06",startTime:"11:00",endTime:"15:00",location:"Online",mode:"Online",organizer:"TechPulse Competitive",organizerLinkedIn:"https://www.linkedin.com/",organizerDescription:"Demo contest organizer.",prize:"₹35,000",participants:3620,maxParticipants:8000,registrationDeadline:"2026-09-05",difficulty:"Advanced",genderEligibility:"Open to All",tags:["DSA","Algorithms","Contest"],skills:["C++","Python","Algorithms"],featured:true,popular:true,recurring:true,previousEditions:["code-2025","code-2024"],rounds:[{name:"Qualification",start:"2026-09-06T11:00:00",end:"2026-09-06T12:00:00"},{name:"Contest",start:"2026-09-06T13:00:00",end:"2026-09-06T15:00:00"}]},
 {id:"websprint",name:"WebSprint",category:"Web Development",description:"Design and ship a polished web experience in 24 hours.",longDescription:"A frontend-focused sprint for developers and designers to build responsive, accessible digital products.",startDate:"2026-09-12",endDate:"2026-09-13",startTime:"09:00",endTime:"18:00",location:"Mumbai",mode:"Offline",organizer:"WebCraft Community",organizerLinkedIn:"https://www.linkedin.com/",organizerDescription:"Demo organizer.",prize:"₹40,000",participants:980,maxParticipants:1800,registrationDeadline:"2026-09-10",difficulty:"Beginner",genderEligibility:"Open to All",tags:["HTML","CSS","JavaScript"],skills:["JavaScript","HTML","CSS","UI/UX"],featured:false,popular:true,recurring:false,previousEditions:[],rounds:[{name:"Build Sprint",start:"2026-09-12T09:00:00",end:"2026-09-13T16:00:00"},{name:"Demo",start:"2026-09-13T16:30:00",end:"2026-09-13T18:00:00"}]},
 {id:"robotics",name:"RoboWars",category:"Robotics",description:"Build, battle and automate in an arena of robots.",longDescription:"A hardware-meets-software robotics competition with arena rounds and an engineering showcase.",startDate:"2026-09-19",endDate:"2026-09-20",startTime:"10:00",endTime:"18:00",location:"Pune",mode:"Offline",organizer:"RoboSphere",organizerLinkedIn:"https://www.linkedin.com/",organizerDescription:"Demo organizer.",prize:"₹1,00,000",participants:540,maxParticipants:900,registrationDeadline:"2026-09-12",difficulty:"Advanced",genderEligibility:"Open to All",tags:["Robotics","Arduino","IoT"],skills:["C++","Arduino","Embedded Systems"],featured:false,popular:false,recurring:false,previousEditions:[],rounds:[{name:"Arena Qualifier",start:"2026-09-19T10:00:00",end:"2026-09-19T15:00:00"},{name:"Final Arena",start:"2026-09-20T11:00:00",end:"2026-09-20T17:00:00"}]},
 {id:"cloudx",name:"CloudX",category:"Cloud Computing",description:"Solve scalable infrastructure and cloud engineering challenges.",longDescription:"Explore cloud architecture, observability, containers and cost-aware engineering through practical challenges.",startDate:"2026-09-22",endDate:"2026-09-22",startTime:"10:00",endTime:"17:00",location:"Online",mode:"Online",organizer:"CloudBridge",organizerLinkedIn:"https://www.linkedin.com/",organizerDescription:"Demo organizer.",prize:"₹25,000",participants:720,maxParticipants:1800,registrationDeadline:"2026-09-20",difficulty:"Intermediate",genderEligibility:"Open to All",tags:["Cloud","AWS","DevOps"],skills:["Cloud","Docker","Linux"],featured:false,popular:false,recurring:false,previousEditions:[],rounds:[{name:"Cloud Challenge",start:"2026-09-22T10:00:00",end:"2026-09-22T15:00:00"}]},
 {id:"devverse",name:"DevVerse",category:"Software Development",description:"Build a useful developer tool with a small team.",longDescription:"A practical software engineering challenge emphasizing product thinking, clean code and developer experience.",startDate:"2026-10-03",endDate:"2026-10-04",startTime:"09:00",endTime:"18:00",location:"Online",mode:"Online",organizer:"DevGuild",organizerLinkedIn:"https://www.linkedin.com/",organizerDescription:"Demo organizer.",prize:"₹45,000",participants:860,maxParticipants:2000,registrationDeadline:"2026-10-01",difficulty:"Intermediate",genderEligibility:"Open to All",tags:["Software","APIs","Git"],skills:["Java","JavaScript","Git"],featured:false,popular:false,recurring:false,previousEditions:[],rounds:[{name:"Build",start:"2026-10-03T09:00:00",end:"2026-10-04T16:00:00"},{name:"Demo",start:"2026-10-04T16:30:00",end:"2026-10-04T18:00:00"}]},
 {id:"dataquest",name:"DataQuest",category:"Data Science",description:"Turn real-world data into clear decisions and models.",longDescription:"A data challenge spanning exploration, feature engineering, modeling and storytelling.",startDate:"2026-10-10",endDate:"2026-10-11",startTime:"10:00",endTime:"18:00",location:"Online",mode:"Online",organizer:"DataLoop",organizerLinkedIn:"https://www.linkedin.com/",organizerDescription:"Demo organizer.",prize:"₹30,000",participants:670,maxParticipants:1500,registrationDeadline:"2026-10-08",difficulty:"Intermediate",genderEligibility:"Open to All",tags:["Data","ML","Analytics"],skills:["Python","Pandas","Machine Learning"],featured:false,popular:false,recurring:false,previousEditions:[],rounds:[{name:"Dataset Challenge",start:"2026-10-10T10:00:00",end:"2026-10-10T16:00:00"},{name:"Presentation",start:"2026-10-11T15:00:00",end:"2026-10-11T17:00:00"}]},
 {id:"techtalks",name:"TechTalks 2026",category:"Conference",description:"A full day of talks from engineers, builders and founders.",longDescription:"A conference-style event covering AI, cloud, security, product engineering and careers.",startDate:"2026-10-17",endDate:"2026-10-17",startTime:"09:30",endTime:"17:30",location:"Bengaluru",mode:"Offline",organizer:"TechPulse Events",organizerLinkedIn:"https://www.linkedin.com/",organizerDescription:"TechPulse demo event team.",prize:"—",participants:2100,maxParticipants:4000,registrationDeadline:"2026-10-15",difficulty:"Beginner",genderEligibility:"Open to All",tags:["Conference","Career","Talks"],skills:["Technology","Networking"],featured:false,popular:false,recurring:false,previousEditions:[],rounds:[]},
 {id:"women-ai",name:"Women in AI Challenge",category:"AI / ML",description:"A women-focused AI challenge with mentors and a showcase.",longDescription:"An inclusive challenge designed for women students to explore applied AI with peer teams and industry mentors.",startDate:"2026-10-24",endDate:"2026-10-25",startTime:"09:00",endTime:"18:00",location:"Online",mode:"Online",organizer:"Women Build AI",organizerLinkedIn:"https://www.linkedin.com/",organizerDescription:"Demo community.",prize:"₹50,000",participants:930,maxParticipants:1800,registrationDeadline:"2026-10-22",difficulty:"Intermediate",genderEligibility:"Female Only",tags:["AI","Women","Mentorship"],skills:["Python","AI/ML","Data Science"],featured:false,popular:true,recurring:false,previousEditions:[],rounds:[{name:"Challenge",start:"2026-10-24T09:00:00",end:"2026-10-25T15:00:00"}]},
 {id:"hiring",name:"FutureTech Hiring Challenge",category:"Hiring Challenge",description:"Solve engineering problems and get noticed by hiring teams.",longDescription:"A demo hiring challenge where participants solve coding and product problems and can showcase their work to employers.",startDate:"2026-11-01",endDate:"2026-11-01",startTime:"10:00",endTime:"16:00",location:"Online",mode:"Online",organizer:"FutureTech Careers",organizerLinkedIn:"https://www.linkedin.com/",organizerDescription:"Demo hiring partner.",prize:"Interview Fast Track",participants:1250,maxParticipants:2500,registrationDeadline:"2026-10-30",difficulty:"Advanced",genderEligibility:"Open to All",tags:["Hiring","Coding","Careers"],skills:["DSA","Problem Solving","Communication"],featured:false,popular:false,recurring:false,previousEditions:[],rounds:[{name:"Coding Assessment",start:"2026-11-01T10:00:00",end:"2026-11-01T12:00:00"},{name:"Technical Round",start:"2026-11-01T14:00:00",end:"2026-11-01T16:00:00"}]},
 {id:"aisprint-spring",name:"AI Sprint Spring 2026",category:"AI / ML",description:"A practical machine-learning sprint for student teams.",longDescription:"Teams explored applied ML, model evaluation and responsible AI in a weekend build sprint.",startDate:"2026-05-23",endDate:"2026-05-24",startTime:"09:00",endTime:"18:00",location:"Online",mode:"Online",organizer:"TechPulse Labs",organizerLinkedIn:"https://www.linkedin.com/",organizerDescription:"TechPulse demo organizer.",prize:"₹40,000",participants:1840,maxParticipants:3000,registrationDeadline:"2026-05-22",difficulty:"Intermediate",genderEligibility:"Open to All",tags:["AI","ML","Sprint"],skills:["Python","Machine Learning"],featured:false,popular:false,recurring:false,previousEditions:[],rounds:[{name:"Build Sprint",start:"2026-05-23T09:00:00",end:"2026-05-24T16:00:00"},{name:"Showcase",start:"2026-05-24T16:30:00",end:"2026-05-24T18:00:00"}]},
 {id:"cloud-challenge-spring",name:"Cloud Challenge Spring",category:"Cloud Computing",description:"Solve real infrastructure and DevOps scenarios.",longDescription:"A spring cloud engineering challenge focused on containers, observability and resilient architecture.",startDate:"2026-05-16",endDate:"2026-05-16",startTime:"10:00",endTime:"17:00",location:"Bengaluru",mode:"Offline",organizer:"CloudBridge",organizerLinkedIn:"https://www.linkedin.com/",organizerDescription:"Demo cloud community.",prize:"₹30,000",participants:1120,maxParticipants:2000,registrationDeadline:"2026-05-14",difficulty:"Intermediate",genderEligibility:"Open to All",tags:["Cloud","DevOps"],skills:["Cloud","Docker","Linux"],featured:false,popular:false,recurring:false,previousEditions:[],rounds:[{name:"Architecture Challenge",start:"2026-05-16T10:00:00",end:"2026-05-16T15:00:00"}]},
 {id:"webforge-may",name:"WebForge May 2026",category:"Web Development",description:"A 24-hour frontend build challenge for student creators.",longDescription:"Participants designed accessible, responsive websites and presented their final builds to a panel of judges.",startDate:"2026-05-09",endDate:"2026-05-10",startTime:"09:00",endTime:"18:00",location:"Mumbai",mode:"Offline",organizer:"WebCraft Community",organizerLinkedIn:"https://www.linkedin.com/",organizerDescription:"Demo web community.",prize:"₹35,000",participants:860,maxParticipants:1500,registrationDeadline:"2026-05-08",difficulty:"Beginner",genderEligibility:"Open to All",tags:["HTML","CSS","JavaScript"],skills:["JavaScript","HTML","CSS"],featured:false,popular:false,recurring:false,previousEditions:[],rounds:[{name:"Build",start:"2026-05-09T09:00:00",end:"2026-05-10T16:00:00"}]},
 {id:"cyberdefend-may",name:"CyberDefend 2026",category:"Cybersecurity",description:"A spring security challenge covering CTF and defensive engineering.",longDescription:"A practical security event where teams solved a qualifier and defensive challenge before presenting their approach.",startDate:"2026-05-02",endDate:"2026-05-03",startTime:"10:00",endTime:"18:00",location:"Pune + Online",mode:"Hybrid",organizer:"SecureForge",organizerLinkedIn:"https://www.linkedin.com/",organizerDescription:"Demo security community.",prize:"₹55,000",participants:1450,maxParticipants:2500,registrationDeadline:"2026-05-01",difficulty:"Advanced",genderEligibility:"Open to All",tags:["CTF","Security","Linux"],skills:["Cybersecurity","Linux","Networking"],featured:false,popular:false,recurring:false,previousEditions:[],rounds:[{name:"Qualifier",start:"2026-05-02T10:00:00",end:"2026-05-02T13:00:00"},{name:"Defend",start:"2026-05-03T11:00:00",end:"2026-05-03T16:00:00"}]},


 {id:"cloudcamp-jun",name:"CloudCamp 2026",category:"Cloud Computing",description:"A practical cloud architecture and DevOps workshop series.",longDescription:"Hands-on sessions covering containers, CI/CD, cloud architecture and cost-aware deployment.",startDate:"2026-06-13",endDate:"2026-06-14",startTime:"10:00",endTime:"17:00",location:"Online",mode:"Online",organizer:"CloudBridge",organizerLinkedIn:"https://www.linkedin.com/",organizerDescription:"Demo cloud community.",prize:"₹20,000",participants:820,maxParticipants:1200,registrationDeadline:"2026-06-12",difficulty:"Beginner",genderEligibility:"Open to All",tags:["Cloud","DevOps"],skills:["Cloud","Docker","Linux"],featured:false,popular:false,recurring:true,previousEditions:[],rounds:[]},
 {id:"datasprint-jun",name:"DataSprint June",category:"Data Science",description:"Explore, model and explain a real-world dataset.",longDescription:"A two-day data challenge focused on analysis, visualization and practical machine learning.",startDate:"2026-06-27",endDate:"2026-06-28",startTime:"09:00",endTime:"18:00",location:"Mumbai",mode:"Offline",organizer:"DataLoop",organizerLinkedIn:"https://www.linkedin.com/",organizerDescription:"Demo data community.",prize:"₹30,000",participants:1120,maxParticipants:1800,registrationDeadline:"2026-06-25",difficulty:"Intermediate",genderEligibility:"Open to All",tags:["Data","ML","Analytics"],skills:["Python","Pandas","SQL"],featured:false,popular:false,recurring:false,previousEditions:[],rounds:[]},
 {id:"webweek-jul",name:"WebWeek India",category:"Web Development",description:"A week-long frontend and full-stack build challenge.",longDescription:"Build an accessible, responsive product while learning practical frontend and backend workflows.",startDate:"2026-07-04",endDate:"2026-07-05",startTime:"10:00",endTime:"18:00",location:"Online",mode:"Online",organizer:"WebCraft Community",organizerLinkedIn:"https://www.linkedin.com/",organizerDescription:"Demo web community.",prize:"₹35,000",participants:1460,maxParticipants:2200,registrationDeadline:"2026-07-02",difficulty:"Intermediate",genderEligibility:"Open to All",tags:["Web","JavaScript","React"],skills:["JavaScript","React","CSS"],featured:false,popular:false,recurring:true,previousEditions:[],rounds:[]},
 {id:"cyber-jul",name:"Cyber Defense League",category:"Cybersecurity",description:"A defensive security challenge with a CTF qualifier.",longDescription:"Teams investigate incidents, secure vulnerable systems and compete through practical security scenarios.",startDate:"2026-07-18",endDate:"2026-07-19",startTime:"09:00",endTime:"18:00",location:"Pune + Online",mode:"Hybrid",organizer:"SecureForge",organizerLinkedIn:"https://www.linkedin.com/",organizerDescription:"Demo cybersecurity community.",prize:"₹55,000",participants:1340,maxParticipants:2400,registrationDeadline:"2026-07-16",difficulty:"Advanced",genderEligibility:"Open to All",tags:["Cybersecurity","CTF","Linux"],skills:["Linux","Networking","Security"],featured:false,popular:false,recurring:true,previousEditions:[],rounds:[]},
 {id:"ai-women-aug",name:"Women Build AI — August",category:"AI / ML",description:"A women-focused applied AI sprint with mentors.",longDescription:"A focused AI build weekend for women students, including mentor office hours and a final showcase.",startDate:"2026-08-01",endDate:"2026-08-02",startTime:"09:00",endTime:"18:00",location:"Online",mode:"Online",organizer:"Women Build AI",organizerLinkedIn:"https://www.linkedin.com/",organizerDescription:"Demo community.",prize:"₹45,000",participants:880,maxParticipants:1500,registrationDeadline:"2026-07-30",difficulty:"Intermediate",genderEligibility:"Female Only",tags:["AI","ML","Women in Tech"],skills:["Python","Machine Learning"],featured:false,popular:false,recurring:true,previousEditions:[],rounds:[]},
 {id:"robot-jam-aug",name:"RoboJam 2026",category:"Robotics",description:"Prototype an autonomous robot and solve arena tasks.",longDescription:"A compact robotics challenge combining embedded systems, sensors and autonomous navigation.",startDate:"2026-08-08",endDate:"2026-08-09",startTime:"10:00",endTime:"18:00",location:"Pune",mode:"Offline",organizer:"RoboSphere",organizerLinkedIn:"https://www.linkedin.com/",organizerDescription:"Demo robotics community.",prize:"₹65,000",participants:640,maxParticipants:1000,registrationDeadline:"2026-08-06",difficulty:"Advanced",genderEligibility:"Open to All",tags:["Robotics","Arduino","IoT"],skills:["C++","Arduino","Embedded Systems"],featured:false,popular:false,recurring:false,previousEditions:[],rounds:[]},
];
// Restore corporate-created events from localStorage so they survive refreshes.
(function restoreCorporateEvents(){
 const savedCorporate=load("tp_corporate_events",[]);
 if(Array.isArray(savedCorporate)){
   savedCorporate.forEach(saved=>{
     if(saved && saved.id && !events.some(e=>e.id===saved.id)) events.push(saved);
   });
 }
})();


const previousEditions = {
 "ai-2025":{event:"AI Nexus",year:2025,participants:2400,teams:620,prize:"₹50,000",winner:"Team NeuralForge",highlights:["24-hour hackathon","120+ projects","Generative AI track","Industry mentors"]},
 "ai-2024":{event:"AI Nexus",year:2024,participants:1850,teams:480,prize:"₹40,000",winner:"Team Vector",highlights:["ML challenge","80+ projects","Mentor office hours"]},
 "cyber-2025":{event:"CyberHack",year:2025,participants:1900,teams:510,prize:"₹70,000",winner:"ZeroDay",highlights:["CTF qualifier","Blue team lab","Security mentors"]},
 "cyber-2024":{event:"CyberHack",year:2024,participants:1500,teams:390,prize:"₹60,000",winner:"PacketRaiders",highlights:["Network forensics","Web security","Incident response"]},
 "code-2025":{event:"CodeStorm",year:2025,participants:3100,teams:1100,prize:"₹30,000",winner:"Team Greedy",highlights:["Two coding rounds","DSA sprint","Live leaderboard"]},
 "code-2024":{event:"CodeStorm",year:2024,participants:2500,teams:900,prize:"₹25,000",winner:"BitByBit",highlights:["Algorithm marathon","Editorial workshop"]}
};

const people = [
 {name:"Ananya Sharma",eventsDone:3,college:"VIT Pune",skills:["AI/ML","Python","TensorFlow","Data Science"],interests:["AI/ML","Hackathons"],looking:"AI Hackathon Team"},
 {name:"Rahul Mehta",eventsDone:5,college:"COEP Tech",skills:["Backend","Python","Cloud","Docker"],interests:["Cloud","Software"],looking:"Backend Partner"},
 {name:"Meera Joshi",eventsDone:7,college:"VIT Pune",skills:["UI/UX","Figma","Frontend","Research"],interests:["Design","Web Development"],looking:"Hackathon Team"},
 {name:"Kabir Shah",eventsDone:9,college:"MIT-WPU",skills:["Cybersecurity","Linux","Networking"],interests:["Cybersecurity","CTF"],looking:"CTF Team"},
 {name:"Ishaan Kulkarni",eventsDone:11,college:"VJTI",skills:["C++","Algorithms","Competitive Programming"],interests:["Competitive Programming"],looking:"Coding Partner"},
 {name:"Riya Patil",eventsDone:13,college:"VIT Pune",skills:["Python","NLP","LLMs","Prompt Engineering"],interests:["Generative AI"],looking:"AI Hackathon Team"},
 {name:"Arjun Nair",eventsDone:3,college:"BITS Pilani",skills:["Java","Spring","APIs","Cloud"],interests:["Software"],looking:"Project Partner"},
 {name:"Tanya Kapoor",eventsDone:5,college:"NMIMS",skills:["Data Science","Pandas","Machine Learning","SQL"],interests:["Data Science","AI/ML"],looking:"Data Team"},
 {name:"Dev Malhotra",eventsDone:7,college:"IIIT Hyderabad",skills:["Robotics","C++","Arduino","Embedded Systems"],interests:["Robotics","IoT"],looking:"Robotics Team"},
 {name:"Sara Khan",eventsDone:9,college:"Symbiosis",skills:["JavaScript","React","CSS","Accessibility"],interests:["Web Development","Design"],looking:"Frontend Partner"}
];

const certificates = [
 {event:"AI Nexus 2025",type:"Participation",date:"2025-09-15"},
 {event:"CodeStorm 2025",type:"Winner — 1st Place",date:"2025-08-19"},
 {event:"CyberHack 2025",type:"Finalist",date:"2025-10-11"},
 {event:"WebSprint 2025",type:"Participation",date:"2025-11-03"}
];

const resources = [
 ["Blog","How to choose the right hackathon for your goals.","Planning"],
 ["Customer Stories","How student teams turn event projects into portfolios.","Stories"],
 ["Planning Guides","A practical checklist for your next competition.","Guides"],
 ["Webinars & Events","Upcoming sessions on AI, cloud and careers.","Webinars"],
 ["Help Desk","Answers to registration, calendar and profile questions.","Support"],
 ["Career Playbook","How to turn competition work into interview stories.","Careers"]
];


const defaultProfile = {
 name:"Saachi Aneja",email:"saachi@example.com",college:"VIT Pune",course:"B.Tech Computer Science & Engineering",
 year:"3rd Year",role:"Student",gender:"Female",phone:"+91 90000 00000",location:"Pune, India",
 bio:"Computer science student exploring AI/ML, competitive programming and product building.",
 skills:["Python","Java","C++","JavaScript","Machine Learning","Data Science","Web Development"],
 interests:["AI/ML","Hackathons","Competitive Programming","Web Development"],linkedin:"https://www.linkedin.com/",github:"https://github.com/"
};
const blankProfile = {
 name:"",email:"",college:"",course:"",year:"",role:"Student",gender:"Other",phone:"",location:"",
 bio:"",skills:[],interests:[],linkedin:"",github:""
};
function clone(v){return JSON.parse(JSON.stringify(v))}
function load(k,f){try{const v=JSON.parse(localStorage.getItem(k));return v??clone(f)}catch{return clone(f)}}
function seedActivity(){
 const arr=[];
 const entries=[
  ["2026-08-12","participation"],["2026-08-09","registration"],["2026-08-04","view_event"],
  ["2026-08-01","participation"],["2026-07-25","view_event"],["2026-07-19","connection_sent"],
  ["2026-07-12","participation"],["2026-07-05","save_event"],["2026-06-28","participation"],
  ["2026-06-21","registration"],["2026-06-14","participation"],["2026-06-07","connection_sent"],
  ["2026-05-31","participation"],["2026-05-23","view_event"],["2026-05-16","participation"],
  ["2026-05-09","save_event"]
 ];
 entries.forEach(([date,type],i)=>arr.push({type,timestamp:`${date}T${10+(i%5)}:30:00`,data:{}}));
 return arr;
}
function makeDefaultAccount(){
 return {
   email:defaultProfile.email,password:"demo123",profile:clone(defaultProfile),
   registrations:["ai-nexus"],saved:["genai"],activity:seedActivity(),connections:["Ananya Sharma"],
   notifications:[
    {text:"Ananya Sharma registered for GenAI Buildathon.",time:"Today",read:false,type:"connection-event"},
    {text:"AI Nexus registration closes soon.",time:"Yesterday",read:false},
    {text:"New AI/ML event matches your profile.",time:"3 days ago",read:true},
    {text:"Your CodeStorm certificate is available.",time:"Last week",read:true}
   ]
 };
}
const _accounts = load(LS.accounts,{});
let accounts = _accounts;
if(!Object.keys(accounts).length){
 const demo=makeDefaultAccount();
 accounts={[demo.email.toLowerCase()]:demo};
 localStorage.setItem(LS.accounts,JSON.stringify(accounts));
 localStorage.setItem(LS.currentUser,demo.email.toLowerCase());
}
let currentUser=localStorage.getItem(LS.currentUser)||null;
if(currentUser) currentUser=currentUser.trim().toLowerCase();
let activeAccount=currentUser && accounts[currentUser] ? accounts[currentUser] : null;
if(currentUser && !activeAccount){
  localStorage.removeItem(LS.currentUser);
  currentUser=null;
  activeAccount=null;
}
const state={
 currentUser:activeAccount?currentUser:null,
 profile:activeAccount?clone(activeAccount.profile):clone(blankProfile),
 registrations:activeAccount?clone(activeAccount.registrations||[]):[],
 saved:activeAccount?clone(activeAccount.saved||[]):[],
 activity:activeAccount?clone(activeAccount.activity||[]):[],
 connections:activeAccount?clone(activeAccount.connections||[]):[],
 notifications:activeAccount?clone(activeAccount.notifications||[]):[],
 theme:load(LS.theme,"light"),recent:load(LS.recent,[]),teamInvites:load(LS.teamInvites,[]),billing:activeAccount?clone(activeAccount.billing||[]):[],
 calendarDate:new Date(),calendarSelected:null,orbitIndex:0,orbitTimer:null
};
window.__accountsReady=true;
function save(k,v){
 localStorage.setItem(k,JSON.stringify(v));
 if(state.currentUser && ["profile","registrations","saved","activity","connections","notifications","teamInvites","billing"].some(x=>LS[x]===k)){
   const accs=load(LS.accounts,{});
   const acc=accs[state.currentUser]||{};
   acc[k.replace("tp_","")]=clone(v);
   accounts[state.currentUser]=acc;
   localStorage.setItem(LS.accounts,JSON.stringify(accounts));
 }
}
function syncAuthStorage(){if(state.currentUser)localStorage.setItem(LS.currentUser,state.currentUser);else localStorage.removeItem(LS.currentUser)}
function isLoggedIn(){return !!state.currentUser}
function requireLogin(){
 if(!isLoggedIn()){location.hash="#login";toast("Please log in or create an account first.");return false}
 return true;
}
function updateAuthUI(){
 const p=document.getElementById("profileNavBtn"),l=document.getElementById("loginBtn");
 if(!p||!l)return;
 if(isLoggedIn()){p.textContent=initials(state.profile.name)||"ME";p.style.display="grid";l.style.display="none"}
 else{p.style.display="none";l.style.display=""}
}
function updateThemeIcon(){
 const icon=document.getElementById("themeIcon"),btn=document.getElementById("themeBtn");
 if(!icon||!btn)return;
 icon.innerHTML=state.theme==="dark"
  ? '<circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42"></path>'
  : '<path d="M20.3 14.5A8.5 8.5 0 0 1 9.5 3.7 8.5 8.5 0 1 0 20.3 14.5Z"></path>';
 btn.setAttribute("aria-label",state.theme==="dark"?"Switch to light mode":"Switch to dark mode");
}
function updateNotificationDot(){
 const btn=document.getElementById("notificationsBtn"); if(!btn)return;
 btn.classList.toggle("has-dot",state.notifications.some(n=>!n.read));
}
document.body.classList.toggle("dark",state.theme==="dark");
updateThemeIcon();
updateNotificationDot();


function trackActivity(type,data={}){state.activity.push({type,...data,timestamp:new Date().toISOString()});save(LS.activity,state.activity)}
function initials(name){return name.split(" ").map(x=>x[0]).slice(0,2).join("").toUpperCase()}
function fmtDate(d){return new Intl.DateTimeFormat("en-IN",{day:"numeric",month:"short",year:"numeric"}).format(new Date(d+"T00:00:00"))}
function modeLabel(e){
 if(e.mode==="Online")return "Online";
 return e.location ? `${e.mode} · ${e.location}` : e.mode;
}
function fmtRange(e){return e.startDate===e.endDate?fmtDate(e.startDate):`${fmtDate(e.startDate)} – ${fmtDate(e.endDate)}`}
function getStatus(e,now=new Date()){
 const start=new Date(`${e.startDate}T${e.startTime}:00`), end=new Date(`${e.endDate}T${e.endTime}:00`);
 if(now<start)return "upcoming"; if(now>end)return "expired"; return "live";
}
function statusLabel(s){return s==="live"?"LIVE NOW":s==="upcoming"?"UPCOMING":"EXPIRED"}
function eventById(id){return events.find(e=>e.id===id)}
function allEvents(){return [...events]}
function savedIds(){return state.saved}
function isRegistered(id){return state.registrations.includes(id)}

function teamSizeForEvent(e){
 if(e.teamSize)return e.teamSize;
 const map={
  "ai-nexus":"3–4 members",
  "cyberhack":"2–4 members",
  "genai":"3–4 members",
  "codestorm":"Individual participation",
  "websprint":"2–4 members",
  "robotics":"3–5 members",
  "cloudx":"2–4 members",
  "datascience":"2–3 members",
  "women-ai":"2–4 members",
  "tech-talks":"Individual participation"
 };
 return map[e.id]||"Individual participation";
}
function isTeamEvent(e){return teamSizeForEvent(e)!=="Individual participation"}
function icon(name){
 const paths={cal:'<rect x="3.5" y="5" width="17" height="16" rx="2"></rect><path d="M7 3v4M17 3v4M3.5 9h17"></path>',
 loc:'<path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z"></path><circle cx="12" cy="10" r="2.3"></circle>',
 prize:'<circle cx="12" cy="8" r="4"></circle><path d="M8.5 12.5 7 21l5-3 5 3-1.5-8.5"></path>',
 people:'<circle cx="9" cy="8" r="3"></circle><circle cx="17" cy="9" r="2.4"></circle><path d="M3 20c.4-3.5 2.4-5 6-5s5.6 1.5 6 5M15 15c3 0 4.8 1.4 5 4"></path>',
 clock:'<circle cx="12" cy="12" r="8.5"></circle><path d="M12 7v5l3 2"></path>'};
 return `<svg viewBox="0 0 24 24">${paths[name]||paths.cal}</svg>`
}

function renderHome(){
 const pop=events.filter(e=>e.popular).slice(0,5);
 document.getElementById("main").innerHTML=`
 <section class="hero">
  <div class="hero-gridlines"></div>
  <div class="hero-inner">
   <div class="hero-copy">
    <span class="eyebrow">Global tech events & conferences</span>
    <h1><span>Discover.</span><span>Compete.</span><span class="accent">Build.</span></h1>
    <p>Discover hackathons, competitions, workshops, conferences & technology opportunities built for the next generation of innovators.</p>
    <div class="hero-ctas"><a class="btn btn-primary" href="#events">Explore Events <b>→</b></a><button class="btn btn-outline" id="findEventBtn">Find My Event <b>✦</b></button></div>
    <div class="hero-stats visible-stats">
      <div class="stat"><span class="stat-icon">${icon("cal")}</span><div><strong>12K+</strong><span>Events</span></div></div>
      <div class="stat"><span class="stat-icon">${icon("people")}</span><div><strong>2.5M+</strong><span>Participants</span></div></div>
      <div class="stat"><span class="stat-icon">🎓</span><div><strong>850+</strong><span>Colleges</span></div></div>
      <div class="stat"><span class="stat-icon">🏆</span><div><strong>₹8Cr+</strong><span>Rewards Won</span></div></div>
    </div>
   </div>
   <div class="orbit-stage" id="orbitStage">
    <div class="orbit-ring"></div><div class="orbit-glow"></div>
    <div class="event-orbit" id="eventOrbit">${pop.map((e,i)=>orbitCard(e,i,pop.length)).join("")}</div>
    <button class="orbit-nav prev" id="orbitPrev" aria-label="Previous event">‹</button>
    <button class="orbit-nav next" id="orbitNext" aria-label="Next event">›</button>
    <div class="orbit-dots">${pop.map((_,i)=>`<button class="orbit-dot ${i===0?"active":""}" data-orbit="${i}" aria-label="Event ${i+1}"></button>`).join("")}</div>
   </div>
  </div>
 </section>
 <section class="trusted"><h3>Trusted by Companies &amp; Event Partners</h3><div class="marquee-wrap"><div class="marquee">
 ${["Google","Microsoft","amazon","Adobe","intel","DELL","cisco","paytm","TCS","Infosys","IBM","Accenture","Google","Microsoft","amazon","Adobe","intel","DELL","cisco","paytm","TCS","Infosys","IBM","Accenture"].map(x=>`<span class="company ${x.toLowerCase()}">${x}</span>`).join("")}
 </div></div></section>
 <section class="section"><div class="section-head"><div><span class="eyebrow">Discover what's next</span><h2>🔥 Popular Events</h2><p>Jump into the events students are watching, saving and registering for right now.</p></div><a class="link-btn" href="#events">View all events →</a></div>
  <div class="cards-grid">${pop.slice(0,3).map(homePopularCard).join("")}</div>
 </section>
 <section class="section" style="padding-top:20px"><div class="section-head"><div><span class="eyebrow">Browse by interest</span><h2>Explore Opportunities</h2></div></div>
  <div class="category-grid">${[
  ["💻","Hackathons","Hackathon"],["🏆","Competitions","Competitive Programming"],["🎓","Workshops","Workshop"],["🤖","AI / ML","AI / ML"],["🔐","Cybersecurity","Cybersecurity"],["🌐","Web Development","Web Development"],["⚙","Robotics","Robotics"],["☁","Cloud","Cloud Computing"],["🎤","Conferences","Conference"],["💼","Hiring","Hiring Challenge"],["📊","Data Science","Data Science"],["✨","GenAI","Generative AI"]
 ].map(([i,n,c])=>`<button class="category" data-category="${c}"><span class="category-icon">${i}</span>${n}</button>`).join("")}</div>
 </section>
 <section class="section" style="padding-top:25px"><div class="panel schedule-banner" style="display:flex;align-items:center;justify-content:space-between;gap:20px"><div><span class="eyebrow" style="color:#8bd7ff">Personalized for you</span><h2 style="font-family:'Space Grotesk';font-size:28px;margin:8px 0">🎯 Events that match your schedule</h2><p style="color:#cfe2f6;font-size:11px;max-width:600px">TechPulse learns when you are active, then prioritizes events that fit your schedule, interests and skills.</p></div><a class="btn btn-orange" href="#analytics">See My Matches →</a></div></section>`;
 setupOrbit(pop);
 bindEventCards();
 document.getElementById("findEventBtn").onclick=()=>{location.hash="#events";setTimeout(()=>document.getElementById("eventSearch")?.focus(),150)}
 document.querySelectorAll(".category").forEach(b=>b.onclick=()=>{location.hash="#events?category="+encodeURIComponent(b.dataset.category)})

}
function orbitCard(e,i,n){
 const s=getStatus(e),active=i===0;
 return `<article class="orbit-card ${active?"active":""}" data-orbit-card="${i}" data-event="${e.id}" tabindex="0" role="button">
   <div class="event-top"><span class="badge popular">🔥 Popular</span><span class="badge ${s}">${statusLabel(s)}</span></div>
   <h3>${e.name}</h3><p>${e.description}</p>
   <div class="event-meta"><div>${icon("cal")} ${fmtRange(e)}</div><div>${icon("loc")} ${e.location}</div><div>${icon("prize")} ${e.prize} Prize Pool</div><div>${icon("people")} ${e.participants.toLocaleString()} Participants</div></div>
   <div class="event-actions"><button class="btn btn-orange" data-action="open-event" data-id="${e.id}">${s==="expired"?"View Event":"Register Now"}</button></div>
 </article>`;
}
function setupOrbit(pop){
 const cards=[...document.querySelectorAll(".orbit-card")]; const n=cards.length;
 function layout(){
   cards.forEach((c,i)=>{
     let d=(i-state.orbitIndex+n)%n;
     let transform,opacity,z,filter;
     // cards travel bottom -> lower right -> center -> upper right -> top/behind
     const poses=[
       "translate(-50%,-50%) translate(0,-8px) rotate(-1deg) scale(1)",
       "translate(-50%,-50%) translate(112px,-54px) rotate(6deg) scale(.78)",
       "translate(-50%,-50%) translate(22px,-126px) rotate(10deg) scale(.60)",
       "translate(-50%,-50%) translate(-92px,-66px) rotate(-8deg) scale(.74)",
       "translate(-50%,-50%) translate(-2px,122px) rotate(4deg) scale(.70)"
     ];
     if(d<5){transform=poses[d];opacity=d===0 ? 1 : d===1 ? .58 : d===2 ? .16 : d===3 ? .42 : .34;z=d===0?20:10-d;filter=d===0?"none":"blur(.1px)"} else {transform=poses[2];opacity:0;z:0;filter:"blur(1px)"}
     c.style.transform=transform;c.style.opacity=opacity;c.style.zIndex=z;c.style.filter=filter;c.classList.toggle("active",d===0);
   });
   document.querySelectorAll(".orbit-dot").forEach((d,i)=>d.classList.toggle("active",i===state.orbitIndex));
 }
 function step(delta){state.orbitIndex=(state.orbitIndex+delta+n)%n;layout()}
 layout(); clearInterval(state.orbitTimer); state.orbitTimer=setInterval(()=>step(1),4300);
 document.getElementById("orbitPrev").onclick=()=>step(-1);document.getElementById("orbitNext").onclick=()=>step(1);
 document.querySelectorAll(".orbit-dot").forEach(d=>d.onclick=()=>{state.orbitIndex=+d.dataset.orbit;layout()});
 cards.forEach(c=>c.addEventListener("click",e=>{
   const action=e.target.closest("[data-action]"); if(action){e.stopPropagation(); location.hash="#event/"+action.dataset.id;return}
   const id=c.dataset.event; launchEventTransition(c,id);
 }));
}
function launchEventTransition(card,id){
 const rect=card.getBoundingClientRect(); const layer=document.getElementById("transitionLayer");
 layer.style.setProperty("--x",`${rect.left+rect.width/2}px`);layer.style.setProperty("--y",`${rect.top+rect.height/2}px`);layer.classList.add("go");
 setTimeout(()=>{location.hash="#event/"+id;layer.classList.remove("go")},520);
}
function openEventByClick(ev,id){openEventModal(id)}
function homePopularCard(e){
 const s=getStatus(e);
 return `<article class="event-card" data-event-card="${e.id}"><div class="event-cover"><span class="badge popular">🔥 POPULAR</span><span class="badge ${s}" style="position:absolute;right:14px;top:15px">${statusLabel(s)}</span><div class="event-cover-title">${e.name}</div></div><div class="event-body"><h3>${e.name}</h3><p>${e.description}</p><div class="card-row"><span>📅 ${fmtRange(e)}</span><strong>${e.prize}</strong></div><div class="card-row"><span>📍 ${modeLabel(e)}</span><span>${e.participants.toLocaleString()} participants</span></div><div class="card-actions"><button class="mini-btn orange" style="width:100%" data-event="${e.id}" data-open="event">${s==="expired"?"View Event":"Register Now"}</button></div></div></article>`;
}
function eventCard(e){
 const s=getStatus(e),saved=state.saved.includes(e.id),reg=isRegistered(e.id);
 return `<article class="event-card" data-event-card="${e.id}"><div class="event-cover"><span class="badge ${e.popular?"popular":""}">${e.popular?"🔥 POPULAR":e.category}</span><span class="badge ${s}" style="position:absolute;right:14px;top:15px">${statusLabel(s)}</span><div class="event-cover-title">${e.name}</div></div><div class="event-body"><h3>${e.name}</h3><p>${e.description}</p><div class="card-row"><span>📅 ${fmtRange(e)}</span><strong>${e.prize}</strong></div><div class="card-row"><span>📍 ${modeLabel(e)}</span><span>${e.participants.toLocaleString()} participants</span></div><div class="card-actions"><button class="mini-btn" data-event="${e.id}" data-open="save">${saved?"★ Saved":"☆ Save"}</button><button class="mini-btn orange ${reg?"registered-cta":""}" style="flex:1.7" data-event="${e.id}" data-open="event">${reg?"Registered ✓":"Register Now"}</button></div>${reg?`<button class="mini-btn unregister-btn" style="width:100%;margin-top:8px" data-unregister="${e.id}">Unregister</button>`:""}</div></article>`;
}
function bindEventCards(){
 document.querySelectorAll("[data-event-card]").forEach(card=>card.onclick=e=>{if(e.target.closest("button,a"))return;location.hash="#event/"+card.dataset.eventCard});
 document.querySelectorAll("[data-open]").forEach(b=>b.onclick=e=>{e.stopPropagation();if(b.dataset.open==="event")location.hash="#event/"+b.dataset.event;else if(b.dataset.open==="save")toggleSave(b.dataset.event,b)});
 document.querySelectorAll("[data-unregister]").forEach(b=>b.onclick=e=>{e.stopPropagation();unregisterEvent(b.dataset.unregister)});
}
function toggleSave(id,btn){if(state.saved.includes(id)){state.saved=state.saved.filter(x=>x!==id);btn.textContent="☆ Save";toast("Removed from saved events")}else{state.saved.push(id);trackActivity("save_event",{eventId:id});btn.textContent="★ Saved";toast("Event saved")};save(LS.saved,state.saved)}
function renderEventsPage(){
 const params=new URLSearchParams(location.hash.split("?")[1]||""); const cat=params.get("category")||""; const initialSearch=params.get("search")||"";
 document.getElementById("main").innerHTML=`<div class="page-shell"><span class="eyebrow">Discover opportunities</span><h1 class="page-title">Events &amp; Competitions</h1><p class="page-sub">Search, filter and compare technical events. Status, countdowns and registration state update from event dates.</p>
 <div class="toolbar"><input id="eventSearch" class="search-field" placeholder="Search events, skills, organizers…" value=""><select id="catFilter" class="filter"><option value="">All Categories</option>${[...new Set(events.map(e=>e.category))].map(c=>`<option>${c}</option>`).join("")}</select><select id="statusFilter" class="filter"><option value="">All Status</option><option value="live">Live</option><option value="upcoming">Upcoming</option><option value="expired">Expired</option></select><select id="modeFilter" class="filter"><option value="">All Modes</option><option>Online</option><option>Offline</option><option>Hybrid</option></select><select id="genderFilter" class="filter"><option value="">All Eligibility</option><option>Open to All</option><option>Female Only</option><option>Male Only</option></select><select id="sortFilter" class="filter"><option value="recommended">Recommended</option><option value="newest">Newest</option><option value="popular">Most Popular</option><option value="prize">Highest Prize</option><option value="ending">Ending Soon</option></select></div>
 <div id="eventList" class="event-list"></div></div>`;
 if(cat)document.getElementById("catFilter").value=cat;
 if(initialSearch)document.getElementById("eventSearch").value=initialSearch;
 ["eventSearch","catFilter","statusFilter","modeFilter","genderFilter","sortFilter"].forEach(id=>document.getElementById(id).addEventListener("input",renderFiltered));
 renderFiltered();
 function renderFiltered(){
   const q=document.getElementById("eventSearch").value.toLowerCase(),c=document.getElementById("catFilter").value,s=document.getElementById("statusFilter").value,m=document.getElementById("modeFilter").value,g=document.getElementById("genderFilter").value,sort=document.getElementById("sortFilter").value;
   let list=allEvents().filter(e=>(!q||[e.name,e.description,e.category,e.organizer,...e.tags,...e.skills].join(" ").toLowerCase().includes(q))&&(!c||e.category===c)&&(!s||getStatus(e)===s)&&(!m||e.mode===m)&&(!g||e.genderEligibility===g));
   if(sort==="newest")list.sort((a,b)=>b.startDate.localeCompare(a.startDate));if(sort==="popular")list.sort((a,b)=>b.participants-a.participants);if(sort==="prize")list.sort((a,b)=>prizeVal(b.prize)-prizeVal(a.prize));if(sort==="ending")list.sort((a,b)=>a.endDate.localeCompare(b.endDate));
   document.getElementById("eventList").innerHTML=list.length?list.map(eventCard).join(""):`<div class="empty" style="grid-column:1/-1">No events match those filters.<br><br><a class="link-btn" href="#events">Reset filters</a></div>`;bindEventCards();
 }
}
function prizeVal(x){const n=x.replace(/[^\d]/g,"");return Number(n)||0}

function openEventModal(id){
 const e=eventById(id),s=getStatus(e), saved=state.saved.includes(id);
 document.getElementById("modalCard").innerHTML=`<button class="close-modal" onclick="closeModal()">×</button><div class="detail-hero"><div class="page-meta"><span>${e.category}</span><span>${statusLabel(s)}</span>${e.genderEligibility!=="Open to All"?`<span>♀ ${e.genderEligibility}</span>`:""}</div><h2>${e.name}</h2><p>${e.longDescription}</p></div>
 <div class="detail-grid"><div class="detail-item"><small>Date</small><strong>${fmtRange(e)}</strong></div><div class="detail-item"><small>Location</small><strong>${modeLabel(e)}</strong></div><div class="detail-item"><small>Prize</small><strong>${e.prize}</strong></div><div class="detail-item"><small>Participants</small><strong>${e.participants.toLocaleString()} / ${e.maxParticipants.toLocaleString()}</strong></div><div class="detail-item"><small>Organizer</small><strong>${e.organizer} · <a class="link-btn" target="_blank" href="${e.organizerLinkedIn}">LinkedIn ↗</a></strong></div><div class="detail-item"><small>Difficulty</small><strong>${e.difficulty}</strong></div></div>
 <div class="panel" style="margin-top:14px;padding:16px"><h3>Skills &amp; tags</h3>${[...e.skills,...e.tags].map(x=>`<span class="tag">${x}</span>`).join("")}</div>
 <div class="panel" style="margin-top:14px;padding:16px"><h3>Timeline</h3><div class="round-list">${e.rounds.length?e.rounds.map((r,i)=>`<div class="round-item"><span><b>Round ${i+1}</b> · ${r.name}<small style="display:block;color:var(--muted);margin-top:4px">${new Date(r.start).toLocaleString("en-IN",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"})}</small></span><span class="status-pill ${new Date(r.start)>new Date()?"up":""}">${new Date(r.end)<new Date()?"Completed":new Date(r.start)<=new Date()?"Live":"Upcoming"}</span></div>`).join(""):"No competition rounds — event format is single-stage."}</div></div>
 <div class="modal-actions"><button class="btn btn-outline" onclick="toggleSave('${id}',this)">${saved?"★ Saved":"☆ Save Event"}</button><button class="btn btn-outline" onclick="closeModal();location.hash='#people?event=${id}'">Find My People</button><button class="btn btn-orange" ${s==="expired"?"disabled":""} onclick="${s==="expired"?`toast('Registration is closed')`:`closeModal();openRegistration('${id}')`}">${s==="expired"?"View Results":"Register Now"}</button></div>
 <div class="panel" style="margin-top:14px;padding:16px"><h3>Previous Editions</h3>${e.recurring&&e.previousEditions.length?e.previousEditions.map(k=>{const p=previousEditions[k];return `<button class="date-event" style="width:100%;text-align:left;margin-top:7px" onclick="showPrevious('${k}')"><strong>${p.event} ${p.year}</strong><span>${p.participants.toLocaleString()} participants · Winner: ${p.winner}</span></button>`}).join(""):"No previous editions listed for this event."}</div>`;
 document.getElementById("modal").classList.add("open");
 trackActivity("view_event",{eventId:id});
}
function showPrevious(k){const p=previousEditions[k];document.getElementById("modalCard").innerHTML=`<button class="close-modal" onclick="closeModal()">×</button><span class="eyebrow">Previous Edition</span><h2 class="page-title" style="font-size:32px">${p.event} ${p.year}</h2><p class="page-sub">A snapshot from the previous edition.</p><div class="metrics" style="margin-top:20px"><div class="metric"><strong>${p.participants.toLocaleString()}</strong><span>Participants</span></div><div class="metric"><strong>${p.teams}</strong><span>Teams</span></div><div class="metric"><strong>${p.prize}</strong><span>Prize Pool</span></div><div class="metric"><strong>🏆</strong><span>${p.winner}</span></div></div><div class="panel" style="margin-top:16px"><h3>Highlights</h3>${p.highlights.map(x=>`<span class="tag">${x}</span>`).join("")}</div>`}
function closeModal(){document.getElementById("modal").classList.remove("open")}
function unregisterEvent(id){
 if(!requireLogin())return;
 const e=eventById(id);if(!e)return;
 if(!confirm(`Unregister from ${e.name}?`))return;
 state.registrations=state.registrations.filter(x=>x!==id);
 save(LS.registrations,state.registrations);
 toast("Unregistered successfully");
 route();
}

function openTeamInvite(eventId){
 if(!requireLogin())return;
 const e=eventById(eventId);
 if(!e||!isTeamEvent(e)){toast("This event is for individual participation.");return}
 const names=state.connections;
 document.getElementById("modalCard").innerHTML=`<button class="close-modal" onclick="closeModal()">×</button><span class="eyebrow">Build your team</span><h2 class="page-title" style="font-size:30px">Invite My Connections</h2><p class="page-sub">Choose connections you'd like to invite to join you for <b>${e.name}</b>. Team size: <b>${teamSizeForEvent(e)}</b>.</p><button class="btn btn-outline" type="button" onclick="closeModal();location.hash='#connections'">👥 Find Connections</button><div class="invite-list" style="display:grid;gap:10px;margin-top:18px">${names.length?names.map(name=>{const already=state.teamInvites.some(inv=>inv.eventId===eventId&&inv.to===name);return `<div class="invite-row ${already?"invited-row":""}"><div><b>${name}</b><span>${already?"Invited to this event":"Connection"}</span></div><button class="btn btn-outline invite-btn ${already?"invited-btn":""}" data-person="${name}" ${already?"disabled":""}>${already?"Invited ✓":"Invite"}</button></div>`}).join(""):`<div class="empty">You don't have any connections yet.<br><button class="btn btn-primary" style="margin-top:14px" type="button" onclick="closeModal();location.hash='#connections'">👥 Find Connections →</button></div>`}</div>`;
 document.getElementById("modal").classList.add("open");
 document.querySelectorAll(".invite-btn").forEach(btn=>btn.onclick=()=>{
   const person=btn.dataset.person;
   const invite={eventId:eventId,eventName:e.name,to:person,from:state.profile.name,time:new Date().toISOString()};
   state.teamInvites.push(invite);save(LS.teamInvites,state.teamInvites);
   state.notifications.unshift({text:`Team invite sent to ${person} for ${e.name}.`,time:"Just now",read:false,type:"team-invite"});
   save(LS.notifications,state.notifications);
   btn.textContent="Invited ✓";btn.classList.add("registered-cta");toast(`Invitation sent to ${person}`);
 });
}
function openRegistration(id){
 if(!requireLogin())return;
 const e=eventById(id),s=getStatus(e);
 if(s==="expired"){toast("Registration is closed for this event.");return}
 if(e.genderEligibility==="Female Only"&&state.profile.gender!=="Female"){toast("This event is currently restricted to female participants.");return}
 document.getElementById("modalCard").innerHTML=`<button class="close-modal" onclick="closeModal()">×</button><span class="eyebrow">Registration</span><h2 class="page-title" style="font-size:30px">Register for ${e.name}</h2><p class="page-sub">Your TechPulse profile is already filled in. Edit anything that needs updating.</p><form id="registrationForm" class="form-grid" style="margin-top:20px"><div class="field"><label>Full Name</label><input name="name" value="${state.profile.name}" required></div><div class="field"><label>Email</label><input name="email" type="email" value="${state.profile.email}" required></div><div class="field"><label>College</label><input name="college" value="${state.profile.college}" required></div><div class="field"><label>Year</label><input name="year" value="${state.profile.year}" required></div><div class="field"><label>Gender</label><select name="gender"><option ${state.profile.gender==="Female"?"selected":""}>Female</option><option ${state.profile.gender==="Male"?"selected":""}>Male</option><option ${state.profile.gender==="Other"?"selected":""}>Other</option></select></div><div class="field"><label>Event</label><input value="${e.name}" disabled></div><div class="field"><label>Participation Type</label><input value="${teamSizeForEvent(e)}" disabled></div><div class="field"><label>Team Size</label><input value="${teamSizeForEvent(e)}" disabled></div><div class="field full"><label>Eligibility</label><input value="${e.genderEligibility}" disabled></div>${isTeamEvent(e)?`<div class="field full"><button class="btn btn-outline" type="button" onclick="openTeamInvite('${e.id}')">👥 Invite My Connections</button></div>`:""}<div class="field full"><button class="btn btn-orange" type="submit">Register Now →</button></div></form>`;
 document.getElementById("modal").classList.add("open");
 document.getElementById("registrationForm").onsubmit=ev=>{ev.preventDefault();const fd=new FormData(ev.target);state.profile={...state.profile,name:fd.get("name"),email:fd.get("email"),college:fd.get("college"),year:fd.get("year"),gender:fd.get("gender")};save(LS.profile,state.profile);if(!state.registrations.includes(id))state.registrations.push(id);save(LS.registrations,state.registrations);trackActivity("registration",{eventId:id});state.notifications.unshift({text:`You registered for ${e.name}.`,time:"Just now",read:false});save(LS.notifications,state.notifications);closeModal();showSuccess(e)};
}
function showSuccess(e){document.getElementById("modalCard").innerHTML=`<button class="close-modal" onclick="closeModal()">×</button><div style="text-align:center;padding:28px 8px"><div style="width:68px;height:68px;border-radius:50%;background:#e9f9f0;color:#0a9b5b;display:grid;place-items:center;font-size:30px;margin:auto">✓</div><h2 class="page-title" style="font-size:30px;margin-top:18px">Registration Successful!</h2><p class="page-sub" style="margin:auto">You are registered for <b>${e.name}</b>.</p><div class="panel" style="margin:20px 0"><span class="eyebrow">Registration ID</span><h3 style="font-family:'Space Grotesk';font-size:23px">TP-2026-${Math.floor(10000+Math.random()*89999)}</h3></div><div class="modal-actions"><button class="btn btn-orange" style="width:100%;justify-content:center" onclick="closeModal();location.hash='#calendar'">View My Events</button></div></div>`;document.getElementById("modal").classList.add("open");toast("Registration saved to your TechPulse profile")}
function renderCalendar(){
 const d=state.calendarDate,y=d.getFullYear(),m=d.getMonth(),first=new Date(y,m,1),last=new Date(y,m+1,0),start=(first.getDay()+6)%7;
 const names=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];let cells=names.map(n=>`<div class="cal-dayname">${n}</div>`).join("");
 const prev=new Date(y,m,0).getDate();
 for(let i=0;i<42;i++){
   const day=i-start+1;let date,muted=false;
   if(day<1){date=new Date(y,m-1,prev+day);muted=true}else if(day>last.getDate()){date=new Date(y,m+1,day-last.getDate());muted=true}else date=new Date(y,m,day);
   const iso=`${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,"0")}-${String(date.getDate()).padStart(2,"0")}`;
   const dayEvents=events.filter(e=>iso>=e.startDate&&iso<=e.endDate);
   const todayIso=new Date().toISOString().slice(0,10);
   cells+=`<div class="cal-cell ${muted?"muted":""} ${iso===todayIso?"today":""}" data-date="${iso}"><div class="cal-num">${date.getDate()}</div>${dayEvents.slice(0,3).map(e=>{const reg=isRegistered(e.id),sav=state.saved.includes(e.id);const cls=reg&&sav?"both":reg?"registered":sav?"saved":"available";return `<button class="cal-event ${cls}" data-event-link="${e.id}" title="${reg?"Registered · ":sav?"Saved · ":"Available · "}${e.name}">${reg?"✓ ":sav?"★ ":""}${e.name}</button>`}).join("")}</div>`;
 }
 const selected=state.calendarSelected||`${y}-${String(m+1).padStart(2,"0")}-15`;
 const monthName=new Intl.DateTimeFormat("en",{month:"long",year:"numeric"}).format(d);
 document.getElementById("main").innerHTML=`<div class="page-shell"><span class="eyebrow">Your schedule</span><h1 class="page-title">My Calendar</h1><p class="page-sub">Registered, saved and available events are visually separated so you can scan your month at a glance.</p><div class="calendar-wrap"><div class="panel"><div class="calendar-head"><h3>📅 ${monthName}</h3><div class="cal-controls"><button class="cal-btn today-cal" id="todayCal">Today</button><button class="cal-btn" id="prevMonth">←</button><button class="cal-btn month-label" id="monthNameBtn" disabled>${new Intl.DateTimeFormat("en",{month:"long",year:"numeric"}).format(d)}</button><button class="cal-btn" id="nextMonth">→</button></div></div><div class="calendar-legend"><span class="legend-item"><i class="legend-dot registered"></i> Registered</span><span class="legend-item"><i class="legend-dot saved"></i> Saved</span><span class="legend-item"><i class="legend-dot available"></i> Available</span><span class="legend-item"><i class="legend-dot both"></i> Registered + Saved</span></div><div class="calendar-grid">${cells}</div></div><div class="panel"><span class="eyebrow">Selected date</span><h3 id="selectedDateTitle" style="font-family:'Space Grotesk';font-size:21px;margin:7px 0 15px">${fmtDate(selected)}</h3><div class="date-events" id="dateEvents"></div></div></div></div>`;
 document.getElementById("prevMonth").onclick=()=>{state.calendarDate=new Date(y,m-1,1);renderCalendar()};document.getElementById("nextMonth").onclick=()=>{state.calendarDate=new Date(y,m+1,1);renderCalendar()};document.getElementById("todayCal").onclick=()=>{const now=new Date();state.calendarDate=new Date(now.getFullYear(),now.getMonth(),1);state.calendarSelected=now.toISOString().slice(0,10);renderCalendar()};
 document.querySelectorAll(".cal-cell").forEach(c=>c.onclick=()=>{state.calendarSelected=c.dataset.date;renderCalendar()});document.querySelectorAll("[data-event-link]").forEach(b=>b.onclick=e=>{e.stopPropagation();location.hash="#event/"+b.dataset.eventLink});renderDateEvents(selected);
}
function renderDateEvents(iso){const list=events.filter(e=>iso>=e.startDate&&iso<=e.endDate);const box=document.getElementById("dateEvents");if(!box)return;box.innerHTML=list.length?list.map(e=>`<button class="date-event" data-id="${e.id}"><strong>${e.name}</strong><span>${isRegistered(e.id)?"✓ Registered · ":state.saved.includes(e.id)?"★ Saved · ":""}${statusLabel(getStatus(e))} · ${e.mode} · ${e.prize}</span></button>`).join(""):`<div class="empty">No events on this date.</div>`;box.querySelectorAll("[data-id]").forEach(b=>b.onclick=()=>location.hash="#event/"+b.dataset.id)}
function renderRounds(){
 const regs=state.registrations.map(eventById).filter(Boolean);document.getElementById("main").innerHTML=`<div class="page-shell"><span class="eyebrow">Competition tracker</span><h1 class="page-title">🏆 My Rounds</h1><p class="page-sub">Track every round, live countdown and completion state for competitions you've joined.</p>${regs.filter(e=>e.rounds.length).map(e=>`<div class="panel round-main-card" style="margin-top:18px"><h3 style="font-family:'Space Grotesk';font-size:27px">${e.name}</h3><div class="round-list">${e.rounds.map((r,i)=>{const st=new Date(r.end)<new Date()?"done":new Date(r.start)<=new Date()?"":"up";return `<div class="round-item"><span><b>Round ${i+1}</b> — ${r.name}<small style="display:block;color:var(--muted);margin-top:5px">${new Date(r.start).toLocaleString("en-IN",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"})}</small></span><span class="status-pill ${st}">${st==="done"?"Completed":st==="up"?"Upcoming":"Live"}</span></div>`}).join("")}</div></div>`).join("")||`<div class="empty">Register for a competition to see your rounds here.</div>`}</div>`;
}
function renderCertificates(){
 const certs=visibleCertificates();
 document.getElementById("main").innerHTML=`<div class="page-shell"><span class="eyebrow">Achievements</span><h1 class="page-title">🏅 My Certificates</h1><p class="page-sub">Your participation, finalist and winner certificates in one place.</p><div class="cert-grid" style="margin-top:25px">${certs.length?certs.map(c=>`<div class="certificate"><span class="eyebrow">TechPulse Certificate</span><h3>${c.event}</h3><p>${c.type}</p><p>Issued ${new Date(c.date).toLocaleDateString("en-IN",{day:"numeric",month:"long",year:"numeric"})}</p><button class="btn btn-outline" style="align-self:center;margin-top:12px" data-cert="${c.event}">View &amp; Print</button></div>`).join(""):`<div class="empty" style="grid-column:1/-1">No certificates yet. Participate in events to earn your first certificate.</div>`}</div></div>`;
 document.querySelectorAll("[data-cert]").forEach(b=>b.onclick=()=>printCertificate(b.dataset.cert));
}
function printCertificate(event){const c=certificates.find(x=>x.event===event);const w=window.open("","_blank","width=900,height=650");w.document.write(`<html><head><title>${event} Certificate</title><style>body{margin:0;font-family:Georgia,serif;background:#f5f8fc;display:grid;place-items:center;height:100vh}.cert{width:760px;height:500px;border:12px solid #0b78ef;background:white;display:grid;place-items:center;text-align:center;box-shadow:0 20px 60px #0002}.inner{border:1px solid #d8e5f4;width:650px;height:400px;display:grid;place-items:center}.small{font:12px Arial;color:#5c6d84}.title{font:48px Georgia;color:#0a2247;margin:10px}.accent{color:#ff6b16}</style></head><body><div class="cert"><div class="inner"><div><div class="small">TECHPULSE · GLOBAL TECH EVENTS & CONFERENCES</div><div class="title">Certificate of ${c.type.includes("Winner")?"Achievement":"Participation"}</div><div class="small">This certifies that</div><h2>${state.profile.name}</h2><div class="small">has successfully participated in</div><h3>${event}</h3><div class="small">${c.type} · ${c.date}</div></div></div></div><script>window.print()<\/script></body></html>`);w.document.close()}
function calculateSkillMatch(p,event){const a=new Set([...p.skills,...p.interests].map(x=>x.toLowerCase()));const b=event.skills.map(x=>x.toLowerCase());const hits=b.filter(x=>[...a].some(y=>y.includes(x)||x.includes(y))).length;return Math.min(99,Math.round(65+(hits/Math.max(1,b.length))*34))}
function renderPeople(){
 const params=new URLSearchParams(location.hash.split("?")[1]||"");const event=eventById(params.get("event")||"");
 document.getElementById("main").innerHTML=`<div class="page-shell"><span class="eyebrow">Team up</span><h1 class="page-title">👥 Find My People</h1><p class="page-sub">${event?`People whose skills and interests match <b>${event.name}</b>.`:"Find teammates based on skills, interests and what you're looking to build."}</p><div class="toolbar"><input class="search-field" id="peopleSearch" placeholder="Search skills, college, name…"><select class="filter" id="peopleNeed"><option value="">Everyone</option><option>Hackathon Team</option><option>Project Partner</option><option>Coding Partner</option><option>Study Partner</option></select></div><div class="people-grid" id="peopleGrid"></div></div>`;
 function draw(){const q=document.getElementById("peopleSearch").value.toLowerCase(),need=document.getElementById("peopleNeed").value;let list=people.filter(p=>(!q||[p.name,p.college,...p.skills,...p.interests].join(" ").toLowerCase().includes(q))&&(!need||p.looking===need)).map(p=>({...p,match:event?calculateSkillMatch(p,event):Math.round(72+Math.random()*25)})).sort((a,b)=>b.match-a.match);document.getElementById("peopleGrid").innerHTML=list.map(p=>`<article class="person-card person-clickable" data-person-card="${p.name}"><div class="avatar" style="margin-bottom:12px">${initials(p.name)}</div><h3>${p.name}</h3><p>${p.college}</p><div>${p.skills.map(x=>`<span class="tag">${x}</span>`).join("")}</div><p><b>Looking for:</b> ${p.looking}</p><div class="match">${p.match}% Skill Match</div><div class="person-actions"><button class="mini-btn ${state.connections.includes(p.name)?"remove-connection": "primary"}" onclick="toggleConnection('${p.name}',event)">${state.connections.includes(p.name)?"Remove Connection":"Connect"}</button></div></article>`).join("")||`<div class="empty" style="grid-column:1/-1">No people match your filters.</div>`}
 document.getElementById("peopleSearch").oninput=draw;document.getElementById("peopleNeed").oninput=draw;draw();bindPersonCards();
}
function renderPersonProfile(name){
 const p=people.find(x=>x.name===decodeURIComponent(name));
 if(!p){renderPeople();return}
 document.getElementById("main").innerHTML=`<div class="page-shell"><a class="back-link" href="#people">← Back to Find My People</a><div class="panel public-profile-simple" style="max-width:720px;margin:28px auto;text-align:center"><div class="profile-big">${initials(p.name)}</div><h1 class="page-title" style="font-size:34px">${p.name}</h1><p style="font-size:13px;color:var(--muted);margin-top:4px">${p.college}</p><div style="margin-top:20px">${p.skills.map(x=>`<span class="tag">${x}</span>`).join("")}</div><div class="modal-actions" style="justify-content:center;margin-top:22px"><button class="btn btn-primary" onclick="connectPerson('${p.name}')">${state.connections.includes(p.name)?"Requested":"Connect"}</button><a class="btn btn-outline" href="#people">Back to People</a></div></div></div>`;
}
function bindPersonCards(){
 document.querySelectorAll("[data-person-card]").forEach(card=>card.onclick=e=>{
   if(e.target.closest("button,a"))return;
   location.hash="#person/"+encodeURIComponent(card.dataset.personCard);
 });
}
function toggleConnection(name,ev){
 if(ev)ev.stopPropagation();
 if(!requireLogin())return;
 if(state.connections.includes(name)){
   if(!confirm(`Remove ${name} from your connections?`))return;
   state.connections=state.connections.filter(x=>x!==name);
   save(LS.connections,state.connections);
   toast(`${name} removed from your connections`);
 }else{
   state.connections.push(name);
   save(LS.connections,state.connections);
   trackActivity("connection_sent",{person:name});
   toast(`Connected with ${name}`);
 }
 if(location.hash==="#connections")renderConnections(); else if(location.hash.startsWith("#people"))renderPeople();
}
function connectPerson(name){if(!state.connections.includes(name)){state.connections.push(name);save(LS.connections,state.connections);trackActivity("connection_sent",{person:name});toast("Connection request sent!")}else toast("Connection already requested")}
function renderConnections(){
 ensureConnectionAlerts();
 const connected=state.connections.map(n=>people.find(p=>p.name===n)).filter(Boolean);
 const suggestions=people.filter(p=>!state.connections.includes(p.name)).slice(0,10);
 document.getElementById("main").innerHTML=`<div class="page-shell"><span class="eyebrow">Your network</span><h1 class="page-title">👥 My Connections</h1><p class="page-sub">Keep track of people you've connected with and discover new teammates who complement your skills.</p><div class="toolbar connections-toolbar" style="margin-top:22px"><input class="search-field" id="connectionSearch" placeholder="Search your connections by name or skill…"><a class="btn btn-primary" href="#people">👥 Find Connections</a></div><div class="dashboard-grid" style="margin-top:18px"><div class="panel"><h3>Your Connections (<span id="connectionCount">${connected.length}</span>)</h3><div class="connection-grid" id="connectedGrid"></div></div><div class="panel"><h3>Connection activity</h3><p style="font-size:11px;color:var(--muted);line-height:1.7">You'll get alerts when people in your network register for an event so you can join them or start a conversation.</p><div class="date-event" style="margin-top:15px"><strong>🔔 Network alerts are enabled</strong><span>Recent connection activity appears in Notifications.</span></div><a class="btn btn-outline" href="#notifications" style="margin-top:12px">View Notifications →</a></div></div><div class="panel" style="margin-top:18px"><h3>People you may want to connect with</h3><div class="connection-grid" id="suggestionGrid"></div></div></div>`;
 function drawConnections(){
   const q=document.getElementById("connectionSearch").value.toLowerCase().trim();
   const matches=p=>!q||[p.name,p.college,...p.skills,...p.interests].join(" ").toLowerCase().includes(q);
   const c=connected.filter(matches);
   const s=suggestions.filter(matches);
   document.getElementById("connectionCount").textContent=c.length;
   document.getElementById("connectedGrid").innerHTML=c.length?c.map(p=>`<article class="person-card person-clickable" data-person-card="${p.name}"><div class="avatar" style="margin-bottom:12px">${initials(p.name)}</div><h3>${p.name}</h3><p>${p.college}</p><div>${p.skills.slice(0,4).map(x=>`<span class="tag">${x}</span>`).join("")}</div><button class="mini-btn remove-connection" style="margin-top:12px;width:100%" onclick="toggleConnection('${p.name}',event)">Remove Connection</button></article>`).join(""):`<div class="empty" style="grid-column:1/-1">${q?`No connections match "${q}".`:"No connections yet. Try Find Connections above."}</div>`;
   document.getElementById("suggestionGrid").innerHTML=s.length?s.slice(0,6).map(p=>`<article class="person-card person-clickable" data-person-card="${p.name}"><div class="avatar" style="margin-bottom:12px">${initials(p.name)}</div><h3>${p.name}</h3><p>${p.college}</p><div>${p.skills.slice(0,4).map(x=>`<span class="tag">${x}</span>`).join("")}</div><div class="match" style="margin-top:10px">Suggested for your skill set</div><button class="mini-btn primary" style="width:100%;margin-top:10px" onclick="toggleConnection('${p.name}',event)">Connect</button></article>`).join(""):`<div class="empty" style="grid-column:1/-1">No people match "${q}".</div>`;
   bindPersonCards();
 }
 document.getElementById("connectionSearch").oninput=drawConnections;
 drawConnections();
}
function ensureConnectionAlerts(){
 const alerts=[{person:"Ananya Sharma",event:"GenAI Buildathon"},{person:"Rahul Mehta",event:"CloudX"}];
 alerts.forEach(a=>{if(state.connections.includes(a.person)&&!state.notifications.some(n=>n.type==="connection-event"&&n.text.includes(a.person)&&n.text.includes(a.event))){state.notifications.unshift({text:`${a.person} registered for ${a.event}.`,time:"Recently",read:false,type:"connection-event"})}});
 save(LS.notifications,state.notifications);updateNotificationDot();
}
function visibleCertificates(){
 if(!state.currentUser)return [];
 // The demo Saachi account keeps the seeded certificate set.
 if(state.currentUser==="saachi@example.com")return certificates;
 // New/personal accounts only show certificates earned through activity.
 return state.activity.some(x=>x.type==="certificate_earned")?certificates:[];
}
function analytics(){
 const a=state.activity;
 const count=t=>a.filter(x=>x.type===t).length;
 const regs=state.registrations.length;
 const participated=count("participation");
 const completed=count("event_completed");
 const saves=state.saved.length;
 const con=state.connections.length;
 const participationRate=regs?Math.min(100,Math.round((participated/regs)*100)):0;
 const score=Math.min(1000,regs*13+participated*20+completed*10+visibleCertificates().length*18+saves*5+con*8+Math.min(70,streak()*10));
 const percentile=score?Math.min(98,Math.max(1,Math.round(50+score/20))):0;
 const weekday=activeWeekdays();
 const top=Object.entries(weekday).filter(([,v])=>v>0).sort((x,y)=>y[1]-x[1]).slice(0,4);
 return {regs,participated,completed,saves,con,participationRate,score,percentile,weekday,top,count,activityCount:a.length};
}
function activeWeekdays(){const out={Monday:0,Tuesday:0,Wednesday:0,Thursday:0,Friday:0,Saturday:0,Sunday:0};state.activity.forEach(x=>{const d=new Date(x.timestamp);out[d.toLocaleDateString("en-US",{weekday:"long"})]++});return out}
function streak(){const days=new Set(state.activity.map(x=>x.timestamp.slice(0,10)));if(!days.size)return 0;let n=0,d=new Date();for(let i=0;i<60;i++){const key=d.toISOString().slice(0,10);if(days.has(key)){n++;d.setDate(d.getDate()-1)}else if(i===0){d.setDate(d.getDate()-1)}else break}return n}
function renderAnalytics(){
 const x=analytics(), max=Math.max(...Object.values(x.weekday),1), heat=Array.from({length:140},(_,i)=>{
   const r=Math.random();
   const level=x.activityCount===0?0:(r<.80?0:r<.89?1:r<.96?2:r<.99?3:4);
   const day=Math.floor(i/7)+1;
   return `<span class="heat ${level===4?"l4":level===3?"l3":level===2?"l2":level===1?"l1":""}" title="${level} activities on day ${day}"></span>`;
 }).join("");
 const cats={};state.registrations.map(eventById).filter(Boolean).forEach(e=>cats[e.category]=(cats[e.category]||0)+1);const catRows=Object.entries(cats);
 const months=["Apr","May","Jun","Jul","Aug","Sep"];const monthActivity=months.map((_,i)=>x.activityCount?Math.max(1,Math.round(x.activityCount*(0.45+((i*37)%55)/100))):0);const maxMonth=Math.max(...monthActivity,1);const bars=months.map((m,i)=>`<div class="chart-col"><div class="chart-bar" style="height:${monthActivity[i]?Math.max(4,Math.round(monthActivity[i]/maxMonth*150)):0}px"></div><div class="chart-label">${m}</div></div>`).join("");
 document.getElementById("main").innerHTML=`<div class="page-shell"><span class="eyebrow">Your growth dashboard</span><h1 class="page-title">📊 My Analytics</h1><p class="page-sub">Activity-driven insights based on your TechPulse interactions. <b>Demo data</b> is used until you generate enough personal activity.</p>
 <div class="metrics" style="margin-top:24px"><div class="metric"><strong>${x.participated}</strong><span>Events Participated</span></div><div class="metric"><strong>${x.regs}</strong><span>Events Registered</span></div><div class="metric"><strong>${x.completed}</strong><span>Events Completed</span></div><div class="metric"><strong>${visibleCertificates().length}</strong><span>Certificates</span></div><div class="metric"><strong>${x.saves}</strong><span>Saved Events</span></div><div class="metric"><strong>${x.con}</strong><span>Connections</span></div><div class="metric"><strong>${x.activityCount?x.completed:0}</strong><span>Rounds Completed</span></div><div class="metric"><strong>${streak()} days</strong><span>Activity Streak</span></div></div>
 <div class="dashboard-grid" style="margin-top:18px"><div class="panel"><h3>⚡ TechPulse Activity Score</h3><div style="display:flex;align-items:center;gap:25px"><div style="width:130px;height:130px;border-radius:50%;background:conic-gradient(var(--blue) ${x.score/10}%,#e8eef6 0);display:grid;place-items:center"><div style="width:100px;height:100px;border-radius:50%;background:var(--surface);display:grid;place-items:center;font-family:'Space Grotesk';font-size:22px;font-weight:700">${x.score}<small style="font:8px Inter;color:var(--muted);display:block">/1000</small></div></div><div><h3 style="font-size:20px;margin:0 0 6px">${x.activityCount?x.percentile+"th percentile":"New member"}</h3><p style="font-size:10px;color:var(--muted);line-height:1.6">${x.activityCount?"Estimated percentile based on your TechPulse activity.":"Your analytics will appear here as you start using TechPulse."}</p><p style="font-size:11px"><b>${x.activityCount?`You are more active than ${x.percentile}% of students.`:"No activity recorded yet."}</b></p></div></div></div>
 <div class="panel"><h3>🎯 Participation Rate</h3><div style="font-family:'Space Grotesk';font-size:42px">${x.participationRate}%</div><p style="font-size:10px;color:var(--muted)">${x.regs?`You participate in ${x.participationRate}% of the events you register for.`:"Register for events to start measuring participation."}</p><div class="bar" style="height:13px;margin-top:15px"><i style="width:${x.participationRate}%"></i></div></div></div>
 <div class="dashboard-grid" style="margin-top:18px"><div class="panel"><h3>Activity Over Time</h3><div class="chart">${bars}</div></div><div class="panel"><h3>Your Most Active Days</h3><div class="bars">${x.top.length?x.top.map(([d,v])=>`<div class="bar-row"><span>${d}</span><div class="bar"><i style="width:${Math.round(v/max*100)}%"></i></div><b>${Math.round(v/max*100)}%</b></div>`).join(""):`<div class="empty">Activity patterns will appear after you use TechPulse.</div>`}</div></div></div>
 <div class="panel" style="margin-top:18px"><h3>Activity Heatmap</h3><div class="heatmap">${heat}</div></div>
 <div class="dashboard-grid" style="margin-top:18px"><div class="panel"><h3>🧠 Skill Activity</h3><div class="bars">${["Python","AI/ML","Web Development","Cloud","Cybersecurity"].map((s,i)=>{const val=x.activityCount?[82,74,61,34,22][i]:0;return `<div class="bar-row"><span>${s}</span><div class="bar"><i style="width:${val}%"></i></div><b>${val}%</b></div>`}).join("")}</div></div><div class="panel"><h3>📚 Category Activity</h3><div class="bars">${catRows.length?catRows.slice(0,5).map(([c,v])=>`<div class="bar-row"><span>${c}</span><div class="bar"><i style="width:${Math.min(100,v/8*100)}%"></i></div><b>${v}</b></div>`).join(""):`<div class="empty">No event registrations yet.</div>`}</div></div></div>
 <div class="panel" style="margin-top:18px"><div class="section-head" style="margin-bottom:16px"><div><span class="eyebrow">Personalized for you</span><h2 style="font-size:25px;margin:5px 0">🎯 Recommended Events</h2><p style="font-size:10px;color:var(--muted)">Events selected using your skills, interests and the days you tend to be active.</p></div><a class="link-btn" href="#events">Browse all →</a></div><div class="cards-grid recommended-grid">${recommendations().length?recommendations().map(recommendedEventCard).join(""):`<div class="empty" style="grid-column:1/-1">No upcoming matches yet. Explore more events to improve your recommendations.</div>`}</div></div>
<div class="panel analytics-insights" style="margin-top:18px"><h3>💡 Your Insights</h3><div class="bars"><p style="font-size:11px">• You're most active on <b>${x.top[0]?.[0]||"Saturday"}</b>.</p><p style="font-size:11px">• You participate in <b>${x.participationRate}%</b> of registered events.</p><p style="font-size:11px">• You have <b>${recommendations().length}</b> upcoming events matching your active days.</p><p style="font-size:11px">• You tend to participate most in <b>${catRows[0]?.[0]||"AI/ML"}</b>.</p></div></div></div>`;
 bindEventCards();}
function recommendedEventCard(e){
 return `<article class="event-card recommendation-card" data-event-card="${e.id}"><div class="event-cover"><span class="badge popular">🎯 ${e.match}% MATCH</span><span class="badge upcoming">UPCOMING</span><div class="event-cover-title">${e.name}</div></div><div class="event-body"><h3>${e.name}</h3><p>${e.description}</p><div class="card-row"><span>📅 ${fmtRange(e)}</span><strong>${e.prize}</strong></div><div class="card-row"><span>🗓 ${e.day}</span><span>${modeLabel(e)}</span></div><div class="date-event" style="margin-top:11px"><strong>Why this match?</strong><span>${e.schedule>=35?"It falls on one of your most active days.":"It matches your interests or skills."}</span></div><div class="card-actions"><button class="mini-btn orange" style="width:100%" data-event="${e.id}" data-open="event">View Event →</button></div></div></article>`;
}
function recommendations(){
 if(!state.activity.length && !state.profile.skills.length && !state.profile.interests.length)return [];
 const days=new Set(Object.entries(activeWeekdays()).sort((a,b)=>b[1]-a[1]).slice(0,3).map(x=>x[0]));
 return events.filter(e=>!isRegistered(e.id)&&getStatus(e)==="upcoming").map(e=>{const day=new Date(e.startDate+"T12:00:00").toLocaleDateString("en-US",{weekday:"long"});const schedule=days.has(day)?35:10;const interest=e.tags.some(t=>state.profile.interests.some(i=>i.toLowerCase().includes(t.toLowerCase())||t.toLowerCase().includes(i.toLowerCase())))?25:8;const skill=e.skills.filter(s=>state.profile.skills.some(ps=>ps.toLowerCase().includes(s.toLowerCase())||s.toLowerCase().includes(ps.toLowerCase()))).length/e.skills.length*20;const cat=state.profile.interests.some(i=>i.toLowerCase().includes(e.category.toLowerCase().split("/")[0].trim().toLowerCase()))?10:4;const difficulty=e.difficulty==="Intermediate"?5:3;const pop=e.popular?5:2;return {...e,match:Math.min(99,Math.round(schedule+interest+skill+cat+difficulty+pop)),schedule,day}}).sort((a,b)=>b.match-a.match).slice(0,3);
}

function saveCurrentAccount(){
 if(!state.currentUser)return;
 accounts[state.currentUser]={...(accounts[state.currentUser]||{}),email:state.currentUser,profile:clone(state.profile),registrations:clone(state.registrations),saved:clone(state.saved),activity:clone(state.activity),connections:clone(state.connections),notifications:clone(state.notifications),teamInvites:clone(state.teamInvites||[]),billing:clone(state.billing||[])};
 localStorage.setItem(LS.accounts,JSON.stringify(accounts));syncAuthStorage();
}
function switchToAccount(email,password){
 email=(email||"").trim().toLowerCase();
 const acc=accounts[email];
 if(!acc||acc.password!==password)return false;
 state.currentUser=email;
 state.profile=clone(acc.profile||blankProfile);
 state.registrations=clone(acc.registrations||[]);
 state.saved=clone(acc.saved||[]);
 state.activity=clone(acc.activity||[]);
 state.connections=clone(acc.connections||[]);
 state.notifications=clone(acc.notifications||[]);
 state.teamInvites=clone(acc.teamInvites||[]);
 state.billing=clone(acc.billing||[]);
 state.calendarDate=new Date();
 state.calendarSelected=null;
 localStorage.setItem(LS.currentUser,email);
 localStorage.setItem(LS.accounts,JSON.stringify(accounts));
 syncAuthStorage();
 return true;
}
function createAccount(email,password,profile){
 email=(email||"").trim().toLowerCase();
 password=password||"";
 if(!email||!email.includes("@")||password.length<6)return {ok:false,error:"Enter a valid email and a password of at least 6 characters."};
 if(accounts[email])return {ok:false,error:"An account with this email already exists."};
 const account={email,password,profile:clone(profile),registrations:[],saved:[],activity:[],connections:[],notifications:[],teamInvites:[],billing:[]};
 accounts[email]=account;
 try{
   localStorage.setItem(LS.accounts,JSON.stringify(accounts));
   localStorage.setItem("tp_current_user_v1",email);
 }catch(err){
   return {ok:false,error:"Your browser blocked local storage, so the account could not be saved."};
 }
 return {ok:true};
}
function logout(){
 if(!confirm("Are you sure you want to log out of TechPulse?"))return;
 saveCurrentAccount();state.currentUser=null;state.profile=clone(blankProfile);state.registrations=[];state.saved=[];state.activity=[];state.connections=[];state.notifications=[];state.teamInvites=[];state.billing=[];syncAuthStorage();updateAuthUI();toast("You have been logged out.");setTimeout(()=>location.hash="#login",250);
}
function changePassword(){
 if(!requireLogin())return;
 const current=prompt("Enter your current password:");
 if(current===null)return;
 const next=prompt("Enter your new password (minimum 6 characters):");
 if(next===null)return;
 if(next.length<6){toast("New password must be at least 6 characters.");return}
 const acc=accounts[state.currentUser];
 if(!acc||acc.password!==current){toast("Current password is incorrect.");return}
 acc.password=next;accounts[state.currentUser]=acc;localStorage.setItem(LS.accounts,JSON.stringify(accounts));toast("Password changed successfully.");
}
function renderLogin(){
 document.getElementById("main").innerHTML=`<section class="login-shell"><div class="login-card"><div class="auth-tabs"><button class="auth-tab active" id="signInTab">Sign In</button><button class="auth-tab" id="signUpTab">Create Account</button></div><div id="authContent"></div></div></section>`;
 const content=document.getElementById("authContent");
 function signIn(){
  content.innerHTML=`<span class="eyebrow">Welcome back</span><h1>Sign in to TechPulse</h1><p>Access your events, calendar, saved opportunities, connections, certificates and analytics.</p><form id="loginForm"><div class="field"><label>Email</label><input name="email" type="email" placeholder="you@example.com" required></div><div class="field" style="margin-top:12px"><label>Password</label><input name="password" type="password" placeholder="Enter your password" required></div><label class="remember-row"><input type="checkbox"> Remember me</label><button class="btn btn-primary" style="width:100%;justify-content:center;margin-top:18px">Sign In →</button></form><p class="auth-note">Demo account: <b>saachi@example.com</b> · password <b>demo123</b></p>`;
  document.getElementById("loginForm").onsubmit=e=>{e.preventDefault();const f=new FormData(e.target);if(!switchToAccount(f.get("email"),f.get("password"))){toast("Account not found or password is incorrect.");return}updateAuthUI();toast("Welcome back to TechPulse");setTimeout(()=>location.hash="#home",250)};
 }
 function signUp(){
  content.innerHTML=`<span class="eyebrow">New to TechPulse</span><h1>Create your account</h1><p>Enter your details once. Future event registrations will be pre-filled automatically.</p><form id="signupForm" class="form-grid"><div class="field"><label>Full Name</label><input name="name" required></div><div class="field"><label>Login Email</label><input name="email" type="email" placeholder="you@example.com" required></div><div class="field"><label>Password</label><div class="password-field"><input id="signupPassword" name="password" type="password" minlength="6" required><button type="button" class="password-toggle" data-target="signupPassword" aria-label="Show password">◉</button></div></div><div class="field"><label>Confirm Password</label><div class="password-field"><input id="signupPasswordConfirm" name="passwordConfirm" type="password" minlength="6" required><button type="button" class="password-toggle" data-target="signupPasswordConfirm" aria-label="Show password">◉</button></div></div><div class="field"><label>College</label><input name="college" required></div><div class="field"><label>Course</label><input name="course" required></div><div class="field"><label>Role</label><select name="role"><option>Student</option><option>Intern</option><option>Working Professional</option></select></div><div class="field"><label>Gender</label><select name="gender"><option>Female</option><option>Male</option><option selected>Other</option></select></div><div class="field"><label>Phone</label><input name="phone"></div><div class="field"><label>Location</label><input name="location"></div><div class="field full"><label>Skills (comma separated)</label><input name="skills" placeholder="Python, JavaScript, AI/ML"></div><div class="field full"><label>Interests (comma separated)</label><input name="interests" placeholder="AI/ML, Hackathons, Web Development"></div><div class="field full"><label>Bio</label><textarea name="bio" placeholder="Tell the community what you build."></textarea></div><div class="field"><label>LinkedIn</label><input name="linkedin"></div><div class="field"><label>GitHub</label><input name="github"></div><div class="field full"><button class="btn btn-orange" style="width:100%;justify-content:center">Create Account →</button></div></form>`;
  document.querySelectorAll(".password-toggle").forEach(btn=>btn.onclick=()=>{const input=document.getElementById(btn.dataset.target);input.type=input.type==="password"?"text":"password";btn.textContent=input.type==="password"?"◉":"◉";btn.classList.toggle("visible",input.type==="text");btn.setAttribute("aria-label",input.type==="password"?"Show password":"Hide password")});
  document.getElementById("signupForm").onsubmit=e=>{
   e.preventDefault();const f=new FormData(e.target),email=f.get("email").trim().toLowerCase();
   if(!email||!email.includes("@")){toast("Please enter a valid email address.");return}if(f.get("password")!==f.get("passwordConfirm")){toast("Passwords do not match.");return}
   const profile={name:f.get("name").trim(),email,college:f.get("college").trim(),course:f.get("course").trim(),year:"",role:f.get("role"),gender:f.get("gender"),phone:f.get("phone").trim(),location:f.get("location").trim(),bio:f.get("bio").trim(),skills:f.get("skills").split(",").map(x=>x.trim()).filter(Boolean),interests:f.get("interests").split(",").map(x=>x.trim()).filter(Boolean),linkedin:f.get("linkedin").trim()||"https://www.linkedin.com/",github:f.get("github").trim()||"https://github.com/"};
   const created=createAccount(email,f.get("password"),profile);
   if(!created.ok){toast(created.error);return}
   if(!switchToAccount(email,f.get("password"))){toast("Account was created, but the session could not be started. Please sign in.");return}
   updateAuthUI();toast("Account created — you are now logged in.");setTimeout(()=>location.hash="#home",250);
  };
 }
 document.getElementById("signInTab").onclick=()=>{document.getElementById("signInTab").classList.add("active");document.getElementById("signUpTab").classList.remove("active");signIn()};
 document.getElementById("signUpTab").onclick=()=>{document.getElementById("signUpTab").classList.add("active");document.getElementById("signInTab").classList.remove("active");signUp()};
 signIn();
}function renderProfile(){
 if(!requireLogin())return;
 const p=state.profile;document.getElementById("main").innerHTML=`<div class="page-shell"><span class="eyebrow">Your TechPulse identity</span><h1 class="page-title">Profile</h1><div class="profile-layout" style="margin-top:24px"><div class="panel profile-card"><div class="profile-big">${initials(p.name)}</div><h2>${p.name}</h2><p>${p.college}</p><p>${p.course} · ${p.role||p.year||"Student"}</p><div>${p.skills.map(x=>`<span class="tag">${x}</span>`).join("")}</div><hr style="border:0;border-top:1px solid var(--line);margin:20px 0"><a class="link-btn" href="${p.linkedin}" target="_blank">LinkedIn ↗</a> · <a class="link-btn" href="${p.github}" target="_blank">GitHub ↗</a><div class="profile-action-stack"><a class="btn btn-primary" href="#analytics">📊 My Analytics →</a><a class="btn btn-outline" href="#connections">👥 My Connections →</a><a class="btn btn-outline" href="#certificates">🏅 My Certificates →</a><a class="btn btn-outline" href="#billing-profile">💳 My Billing →</a><button class="btn btn-outline" onclick="changePassword()">🔑 Change Password</button><button class="btn btn-outline logout-btn" id="logoutBtn">↪ Log Out</button></div></div><div class="panel"><h3>Edit Profile</h3><form id="profileForm" class="form-grid"><div class="field"><label>Name</label><input name="name" value="${p.name}" required></div><div class="field"><label>Email</label><input name="email" type="email" value="${p.email}" required></div><div class="field"><label>College</label><input name="college" value="${p.college}" required></div><div class="field"><label>Course</label><input name="course" value="${p.course}"></div><div class="field"><label>Role</label><select name="role"><option ${p.role==="Student"?"selected":""}>Student</option><option ${p.role==="Intern"?"selected":""}>Intern</option><option ${p.role==="Working Professional"?"selected":""}>Working Professional</option></select></div><div class="field"><label>Gender</label><select name="gender"><option ${p.gender==="Female"?"selected":""}>Female</option><option ${p.gender==="Male"?"selected":""}>Male</option><option ${p.gender==="Other"?"selected":""}>Other</option></select></div><div class="field"><label>Phone</label><input name="phone" value="${p.phone}"></div><div class="field"><label>Location</label><input name="location" value="${p.location}"></div><div class="field full"><label>Skills (comma separated)</label><input name="skills" value="${p.skills.join(", ")}"></div><div class="field full"><label>Interests (comma separated)</label><input name="interests" value="${p.interests.join(", ")}"></div><div class="field full"><label>Bio</label><textarea name="bio">${p.bio}</textarea></div><div class="field"><label>LinkedIn</label><input name="linkedin" value="${p.linkedin}"></div><div class="field"><label>GitHub</label><input name="github" value="${p.github}"></div><div class="field full"><button class="btn btn-primary">Save Profile</button></div></form></div></div></div>`;
 document.getElementById("profileForm").onsubmit=e=>{e.preventDefault();const f=new FormData(e.target);state.profile={...state.profile,name:f.get("name"),email:f.get("email"),college:f.get("college"),course:f.get("course"),year:state.profile.year||"",role:f.get("role"),gender:f.get("gender"),phone:f.get("phone"),location:f.get("location"),skills:f.get("skills").split(",").map(x=>x.trim()).filter(Boolean),interests:f.get("interests").split(",").map(x=>x.trim()).filter(Boolean),bio:f.get("bio"),linkedin:f.get("linkedin"),github:f.get("github")};save(LS.profile,state.profile);trackActivity("profile_update");toast("Profile updated");renderProfile()}
 document.getElementById("logoutBtn").onclick=logout
}
function renderBillingProfile(){
 if(!requireLogin())return;
 const bills=state.billing?.length?state.billing:(accounts[state.currentUser]?.billing||[]);
 document.getElementById("main").innerHTML=`<div class="page-shell"><a class="back-link" href="#profile">← Back to Profile</a><span class="eyebrow">Account billing</span><h1 class="page-title">💳 My Billing</h1><p class="page-sub">A history of event-hosting charges associated with your TechPulse account.</p><div class="panel" style="margin-top:24px"><div class="billing-list">${bills.length?bills.map(b=>`<div class="billing-row"><div><strong>${b.name}</strong><span>${b.company||"TechPulse"} · ${b.date} · ${b.time}</span></div><strong class="billing-cost">${b.cost}</strong></div>`).join(""):`<div class="empty">No bills on your profile yet. Host an event to see your payment history here.</div>`}</div></div></div>`;
}
function renderMyEvents(){const regs=state.registrations.map(eventById).filter(Boolean);document.getElementById("main").innerHTML=`<div class="page-shell"><span class="eyebrow">Your registrations</span><h1 class="page-title">My Events</h1><p class="page-sub">Everything you've registered for, with live status and quick actions.</p><div class="cards-grid" style="margin-top:25px">${regs.map(eventCard).join("")||`<div class="empty" style="grid-column:1/-1">No registered events yet. <a class="link-btn" href="#events">Explore events →</a></div>`}</div></div>`;bindEventCards()}
function renderSavedEvents(){const saved=state.saved.map(eventById).filter(Boolean);document.getElementById("main").innerHTML=`<div class="page-shell"><span class="eyebrow">Your shortlist</span><h1 class="page-title">★ Saved Events</h1><p class="page-sub">Events you've bookmarked so you can return to them later.</p><div class="cards-grid" style="margin-top:25px">${saved.map(eventCard).join("")||`<div class="empty" style="grid-column:1/-1">No saved events yet. <a class="link-btn" href="#events">Browse events →</a></div>`}</div></div>`;bindEventCards()}
const resourceArticles={blog:{title:"Blog",eyebrow:"Insights",intro:"Practical ideas for getting more from hackathons, competitions and technology events.",sections:[["How to choose the right event","Start with the skill you want to build, then compare event format, difficulty, schedule and previous editions. A focused event is usually more useful than simply choosing the biggest prize pool."],["Build a portfolio story","Document the problem, your role, the technology you used and what changed after judging. A clear story can turn one weekend project into a strong interview conversation."],["Make the most of event week","Save the event, add it to your calendar, meet teammates early and review the rules before the first round begins."]]},stories:{title:"Customer Stories",eyebrow:"Community",intro:"Stories from students and teams who use events to learn, collaborate and build visible work.",sections:[["From classroom project to demo day","A student team used a weekend build challenge to turn a rough ML idea into a working prototype and a polished presentation."],["Finding the right teammate","One developer used skill matching to find a teammate who complemented their backend experience with UI/UX skills."],["Why previous editions matter","Reviewing older editions helps participants understand judging style, typical project scope and the kinds of solutions that stand out."]]},guides:{title:"Planning Guides",eyebrow:"Playbooks",intro:"Simple checklists for planning and participating in successful technical events.",sections:[["Before registering","Check eligibility, dates, mode, team size, required skills and the registration deadline."],["One week before","Create your team, read the rules, test your tools and prepare a lightweight plan for the first few hours."],["During the event","Keep scope realistic, commit often and leave time for testing, documentation and the final presentation."]]},webinars:{title:"Webinars & Events",eyebrow:"Learn live",intro:"A collection of generic upcoming sessions and recordings for students and builders.",sections:[["AI Career Night","A 60-minute session on building an AI portfolio, choosing projects and preparing for technical interviews."],["Hackathon Strategy Workshop","Learn how experienced participants select ideas, split team responsibilities and prepare demos."],["Cloud Fundamentals Live","An introductory session covering containers, deployment, observability and practical cloud architecture."]]},help:{title:"Help Desk",eyebrow:"Support",intro:"Quick answers, contact details and practical help for your TechPulse account.",contacts:true,sections:[["How does registration work?","TechPulse uses the information in your profile to pre-fill event registration. You can edit the details before submitting."],["How do I save an event?","Use Save Event on an event card or event page. Saved events appear under Saved Events and use a distinct calendar color."],["Where can I find my registered events?","Use My Calendar, My Events and My Rounds to see your registered opportunities and competition progress."],["Can I change my profile details?","Open Profile, edit your details and save. The updated information is used to pre-fill future registrations."],["Where are certificates stored?","Open your Profile or My Certificates to view and print certificates earned through the platform."],["How do I find teammates?","Open Find My People to see people with similar skills and send connection requests."],["Why is an event marked expired?","Expired means the event end time has passed. You can still open its event page to view details and previous editions, but registration is closed."],["How do I host an event?","Choose Host an Event and complete the corporate event form. Published demo events become available in Discover."]]}};
function renderResources(){document.getElementById("main").innerHTML=`<div class="page-shell"><span class="eyebrow">Knowledge & guidance</span><h1 class="page-title">Resources</h1><p class="page-sub">Guides, stories and practical content to help you get more from every tech event.</p><div class="resource-grid" style="margin-top:25px">${resources.map(([t,p,k])=>{const slug={Blog:"blog","Customer Stories":"stories","Planning Guides":"guides","Webinars & Events":"webinars","Help Desk":"help","Career Playbook":"blog"}[t]||"blog";return `<article class="resource-card"><span class="eyebrow">${k}</span><h3>${t}</h3><p>${p}</p><a class="btn btn-outline" href="#resource/${slug}">Explore →</a></article>`}).join("")}</div></div>`}
function renderResourceArticle(slug){const r=resourceArticles[slug]||resourceArticles.blog;document.getElementById("main").innerHTML=`<div class="page-shell"><div class="resource-article"><a class="back-link" href="#resources">← Back to Resources</a><section class="article-hero"><span class="eyebrow" style="color:#8bd7ff">${r.eyebrow}</span><h1>${r.title}</h1><p>${r.intro}</p></section>${r.contacts?`<div class="help-contact"><div class="panel"><strong>☎ +91 1800 123 4567</strong><span>Demo support line · Mon–Fri</span></div><div class="panel"><strong>☎ +91 98765 43210</strong><span>Demo event support</span></div><div class="panel"><strong>✉ help@techpulse.demo</strong><span>Sample support email</span></div></div>`:""}<div class="panel" style="margin-top:18px"><div class="resource-body">${r.sections.map(([h,p])=>`<section><h3>${h}</h3><p>${p}</p></section>`).join("")}</div><a class="btn btn-primary" href="#resources" style="margin-top:18px">Back to all resources</a></div></div></div>`}
const jobs=[
 {id:"ai-ml-intern",title:"AI/ML Intern",company:"FutureTech",location:"Pune · Hybrid",skill:"Machine Learning",type:"Internship",stipend:"₹35,000 / month",duration:"6 months",about:"Work with an applied AI team on experimentation, model evaluation and production-ready prototypes.",skills:["Python","Machine Learning","Pandas","SQL"],responsibilities:["Build and evaluate ML experiments","Prepare datasets and features","Document results for engineering teams"],requirements:["Python fundamentals","Basic ML knowledge","Strong problem solving"]},
 {id:"swe-intern",title:"Software Engineering Intern",company:"CloudBridge",location:"Bengaluru · Hybrid",skill:"Backend",type:"Internship",stipend:"₹40,000 / month",duration:"6 months",about:"Join a platform team building APIs and cloud services used by technical communities.",skills:["Java","APIs","Git","Cloud"],responsibilities:["Build backend services","Write tests and documentation","Collaborate with product and infrastructure teams"],requirements:["Java or Python","REST API basics","Git familiarity"]},
 {id:"frontend-intern",title:"Frontend Developer Intern",company:"WebCraft",location:"Remote",skill:"JavaScript",type:"Internship",stipend:"₹30,000 / month",duration:"4 months",about:"Design and implement polished responsive experiences for event and education products.",skills:["JavaScript","HTML","CSS","Accessibility"],responsibilities:["Build responsive interfaces","Improve accessibility and performance","Work with designers on component systems"],requirements:["HTML/CSS/JS","Responsive design","Attention to UI detail"]},
 {id:"data-science-intern",title:"Data Science Intern",company:"DataLoop",location:"Mumbai · On-site",skill:"Python",type:"Internship",stipend:"₹38,000 / month",duration:"6 months",about:"Analyze real-world datasets and build models that help teams make better decisions.",skills:["Python","Pandas","Machine Learning","SQL"],responsibilities:["Explore and clean data","Build baseline models","Communicate findings with visualizations"],requirements:["Python","Statistics basics","Data analysis"]}
];
function renderJobs(){document.getElementById("main").innerHTML=`<div class="page-shell"><span class="eyebrow">Career opportunities</span><h1 class="page-title">Jobs & Internships</h1><p class="page-sub">Explore roles matched to the same skills you use for events and competitions.</p><div class="jobs-grid" style="margin-top:25px">${jobs.map(j=>`<article class="job-card"><span class="eyebrow">${j.skill}</span><h3>${j.title}</h3><p>${j.company} · ${j.location}</p><p>${j.stipend} · ${j.duration}</p><a class="btn btn-primary" href="#job/${j.id}">View Role →</a></article>`).join("")}</div></div>`}
function renderJobPage(id){const j=jobs.find(x=>x.id===id);if(!j){renderJobs();return}document.getElementById("main").innerHTML=`<div class="page-shell"><a class="back-link" href="#jobs">← Back to Jobs</a><section class="job-detail-banner"><span class="eyebrow" style="color:#8bd7ff">${j.type} · ${j.skill}</span><h1>${j.title}</h1><p>${j.company} · ${j.location} · ${j.duration}</p><div class="page-meta" style="margin-top:18px"><span>${j.stipend}</span><span>Tech / Engineering</span><span>Apply through company</span></div></section><div class="event-page-grid" style="margin-top:18px"><div><div class="panel content-block"><h3>About the role</h3><p>${j.about}</p><h3 style="margin-top:24px">Responsibilities</h3><ul>${j.responsibilities.map(x=>`<li>${x}</li>`).join("")}</ul><h3 style="margin-top:24px">Requirements</h3><ul>${j.requirements.map(x=>`<li>${x}</li>`).join("")}</ul><h3 style="margin-top:24px">Skills</h3><div>${j.skills.map(x=>`<span class="tag">${x}</span>`).join("")}</div></div></div><aside class="side-sticky"><div class="panel"><span class="eyebrow">Application</span><h3 style="font-family:'Space Grotesk';font-size:20px;margin:8px 0">Interested?</h3><p style="font-size:10px;color:var(--muted)">Review the role and continue to the organizer's application flow.</p><button class="btn btn-orange" style="width:100%;justify-content:center" onclick="toast('Application flow opened for ${j.title}')">Apply Now →</button></div><div class="panel" style="margin-top:18px"><h3 style="font-size:13px">Employer</h3><b>${j.company}</b><p style="font-size:10px;color:var(--muted)">Hiring partner on TechPulse.</p></div></aside></div></div>`}
const practiceTracks={
 dsa:{title:"DSA Sprint",intro:"Build confidence with algorithms, data structures and timed problem solving.",topics:[["Arrays & Strings","Two pointers, sliding windows, prefix sums and frequency maps."],["Trees & Graphs","Traversal, shortest paths, BFS/DFS and tree invariants."],["Dynamic Programming","Learn state design, transitions and common optimization patterns."]]},
 ml:{title:"ML Foundations",intro:"A beginner-friendly path through the core ideas behind practical machine learning.",topics:[["Regression","Understand features, targets, loss functions and linear models."],["Classification","Study logistic regression, decision boundaries and evaluation metrics."],["Model Evaluation","Practice train/test splits, precision, recall, F1 and confusion matrices."]]},
 web:{title:"Web Challenge",intro:"Practice the building blocks of polished, responsive web products.",topics:[["HTML & Accessibility","Semantic structure, forms, labels and keyboard-friendly interfaces."],["CSS Layout","Flexbox, Grid, responsive breakpoints and visual hierarchy."],["JavaScript","DOM events, arrays, objects, fetch and interactive UI state."]]},
 cloud:{title:"Cloud Lab",intro:"Learn the concepts needed to reason about scalable cloud systems.",topics:[["Architecture","Compute, storage, networking and managed services."],["Containers","Images, Dockerfiles, registries and basic orchestration."],["Reliability","Observability, health checks, scaling and cost-aware design."]]},
 cyber:{title:"Cyber Range",intro:"Practice defensive security fundamentals in safe, educational scenarios.",topics:[["Linux Basics","Processes, permissions, networking commands and logs."],["Web Security","Learn the concepts behind authentication, input validation and common vulnerabilities."],["CTF Thinking","Enumeration, evidence collection and documenting a safe solution."]]},
 interview:{title:"Interview Prep",intro:"Turn your technical experience into clear interview-ready answers.",topics:[["Technical Stories","Explain a project using problem, approach, trade-offs and outcome."],["DSA Revision","Practice common patterns and explain complexity aloud."],["Behavioral Prompts","Prepare concise STAR-style answers for teamwork and ownership."]]}
};
function renderPractice(){document.getElementById("main").innerHTML=`<div class="page-shell"><span class="eyebrow">Level up</span><h1 class="page-title">Practice</h1><p class="page-sub">Sharpen the skills that make you more competitive in events and hiring challenges.</p><div class="resource-grid" style="margin-top:25px">${[["dsa","DSA Sprint","Algorithms · arrays · trees · DP"],["ml","ML Foundations","Regression · classification · evaluation"],["web","Web Challenge","HTML · CSS · JavaScript · accessibility"],["cloud","Cloud Lab","Architecture · DevOps · reliability"],["cyber","Cyber Range","Linux · networking · safe CTF concepts"],["interview","Interview Prep","Technical · behavioral · project stories"]].map(x=>`<article class="resource-card practice-track"><span class="eyebrow">Practice Track</span><h3>${x[1]}</h3><p>${x[2]}</p><a class="btn btn-outline" href="#practice/${x[0]}">Open Track →</a></article>`).join("")}</div></div>`}
function completePractice(slug,btn){
 const done=load("tp_practice_completed",[]);
 if(!done.includes(slug))done.push(slug);
 save("tp_practice_completed",done);
 btn.textContent="Challenge Completed ✓";
 btn.classList.add("completed");
 trackActivity("practice_completed",{track:slug});
 toast("Practice challenge completed!");
}
function renderPracticeTrack(slug){const t=practiceTracks[slug];if(!t){renderPractice();return}document.getElementById("main").innerHTML=`<div class="page-shell"><a class="back-link" href="#practice">← Back to Practice</a><span class="eyebrow">Practice Track</span><h1 class="page-title">${t.title}</h1><p class="page-sub">${t.intro}</p><div class="panel" style="margin-top:25px"><h3 style="font-family:'Space Grotesk';font-size:20px">Learning material</h3>${t.topics.map((x,i)=>`<div class="practice-topic"><b>${i+1}. ${x[0]}</b><p>${x[1]}</p></div>`).join("")}<div class="panel" style="margin-top:15px;background:var(--surface2)"><h3>Quick challenge</h3><p style="font-size:10px;color:var(--muted)">Write down one example problem you could solve using this track, then explain your approach in three steps. This demo keeps the material self-contained and does not require an external platform.</p><button class="btn practice-complete-btn" data-track="${slug}" onclick="completePractice('${slug}',this)">${load("tp_practice_completed",[]).includes(slug)?"Challenge Completed ✓":"Mark Practice Complete"}</button></div></div></div>`}
function bindDateTimePickers(){
 document.querySelectorAll('input[type="date"],input[type="time"]').forEach(input=>{
   input.addEventListener("click",()=>{
     try{if(typeof input.showPicker==="function")input.showPicker()}catch(_){}
   });
 });
}
function renderCorporates(){
 if(!requireLogin())return;
 document.getElementById("main").innerHTML=`<div class="page-shell"><span class="eyebrow">For employers</span><h1 class="page-title">Host your next tech event with TechPulse.</h1><p class="page-sub">Launch hackathons, coding challenges, workshops, hiring challenges and conferences. Publish after confirming payment.</p><div class="dashboard-grid" style="margin-top:25px"><div class="panel"><h3>Host an Event</h3><form id="corpForm" class="form-grid"><div class="field"><label>Company Name</label><input name="company" value="FutureTech" required></div><div class="field"><label>Company Email</label><input name="email" type="email" value="events@futuretech.demo" required></div><div class="field full"><label>Event Name</label><input name="name" placeholder="e.g. FutureTech AI Challenge" required></div><div class="field"><label>Category</label><select name="category"><option>AI / ML</option><option>Web Development</option><option>Cybersecurity</option><option>Cloud Computing</option><option>Hiring Challenge</option><option>Conference</option></select></div><div class="field"><label>Event Type</label><select name="type"><option>Hackathon</option><option>Competition</option><option>Workshop</option><option>Hiring Challenge</option><option>Conference</option></select></div><div class="field"><label>Start Date</label><input name="start" type="date" required></div><div class="field"><label>End Date</label><input name="end" type="date" required></div><div class="field"><label>Start Time</label><input name="startTime" type="time" value="10:00"></div><div class="field"><label>End Time</label><input name="endTime" type="time" value="18:00"></div><div class="field"><label>Mode</label><select name="mode" id="corpMode"><option>Online</option><option>Offline</option><option>Hybrid</option></select></div><div class="field"><label>Location</label><input name="location" id="corpLocation" value="Online"></div><div class="field"><label>Participants per Team</label><select name="teamSize"><option>Individual participation</option><option>2–4 members</option><option>3–4 members</option><option>3–5 members</option><option>4–6 members</option></select></div><div class="field"><label>Prize Pool</label><input name="prize" value="₹25,000"></div><div class="field"><label>Max Participants</label><input name="max" type="number" value="1000"></div><div class="field"><label>Gender Eligibility</label><select name="gender"><option>Open to All</option><option>Female Only</option><option>Male Only</option></select></div><div class="field"><label>Difficulty</label><select name="difficulty"><option>Beginner</option><option selected>Intermediate</option><option>Advanced</option></select></div><div class="field full"><label>Description</label><textarea name="description" placeholder="Describe the event"></textarea></div><div class="field full"><button class="btn btn-orange">Publish Event →</button></div></form></div><div class="panel"><h3>Why TechPulse?</h3><div class="bars"><p style="font-size:11px">✓ Discoverable to students by category, skills and schedule.</p><p style="font-size:11px">✓ Dynamic live/upcoming/expired status.</p><p style="font-size:11px">✓ Calendar, registration and notification integration.</p><p style="font-size:11px">✓ Teams can invite their connections.</p></div><div class="date-event" style="margin-top:18px"><strong>Billing is confirmed before publishing.</strong><span>You'll see a summary, time and cost on the confirmation page.</span></div></div></div></div>`;
 const mode=document.getElementById("corpMode"),loc=document.getElementById("corpLocation");
 function syncLocation(){if(mode.value==="Online"){loc.value="Online";loc.disabled=true}else{loc.disabled=false;if(loc.value==="Online")loc.value=""}}
 mode.onchange=syncLocation;syncLocation();bindDateTimePickers();
 document.getElementById("corpForm").onsubmit=e=>{
   e.preventDefault();
   const f=new FormData(e.target);
   const draft={
    id:"corp-"+Date.now(),name:f.get("name"),category:f.get("category"),type:f.get("type"),
    description:f.get("description")||"New event hosted on TechPulse.",longDescription:f.get("description")||"New event hosted on TechPulse.",
    startDate:f.get("start"),endDate:f.get("end"),startTime:f.get("startTime"),endTime:f.get("endTime"),
    location:f.get("location"),mode:f.get("mode"),teamSize:f.get("teamSize"),organizer:f.get("company"),
    organizerEmail:f.get("email"),organizerLinkedIn:"https://www.linkedin.com/",organizerDescription:"Corporate event partner.",
    prize:f.get("prize"),participants:0,maxParticipants:+f.get("max"),registrationDeadline:f.get("start"),difficulty:f.get("difficulty"),
    genderEligibility:f.get("gender"),tags:[f.get("category"),f.get("type")],skills:[],featured:false,popular:false,recurring:false,previousEditions:[],rounds:[]
   };
   localStorage.setItem("tp_pending_event",JSON.stringify(draft));
   location.hash="#billing";
 };
}
function renderBilling(){
 if(!requireLogin())return;
 const draft=JSON.parse(localStorage.getItem("tp_pending_event")||"null");
 if(!draft){location.hash="#corporates";return}
 const cost=(draft.type==="Conference"?"₹4,999":draft.type==="Workshop"?"₹2,499":draft.type==="Hiring Challenge"?"₹3,999":"₹6,999");
 document.getElementById("main").innerHTML=`<div class="page-shell"><a class="back-link" href="#corporates">← Back to Host an Event</a><span class="eyebrow">Billing</span><h1 class="page-title">Confirm your event payment</h1><p class="page-sub">Review the event summary below and confirm the payment to publish it on TechPulse.</p><div class="dashboard-grid" style="margin-top:24px"><div class="panel"><h3>Event Summary</h3><div class="detail-grid"><div class="detail-item"><small>Event</small><strong>${draft.name}</strong></div><div class="detail-item"><small>Organizer</small><strong>${draft.organizer}</strong></div><div class="detail-item"><small>Date</small><strong>${fmtRange(draft)}</strong></div><div class="detail-item"><small>Mode</small><strong>${draft.mode}${draft.mode!=="Online"&&draft.location?` · ${draft.location}`:""}</strong></div><div class="detail-item"><small>Team Size</small><strong>${draft.teamSize}</strong></div><div class="detail-item"><small>Billing Date</small><strong>${fmtDate(new Date().toISOString().slice(0,10))}</strong></div></div></div><div class="panel"><span class="eyebrow">Amount Due</span><div class="price" style="margin-top:7px">${cost}</div><p style="font-size:10px;color:var(--muted)">One-time demo publishing fee.</p><label class="payment-confirm"><input type="checkbox" id="confirmPayment"> <span>✓ I confirm this payment and want to publish the event.</span></label><button class="btn btn-orange" id="payPublish" style="width:100%;justify-content:center;margin-top:18px" disabled>Confirm Payment &amp; Publish</button></div></div></div>`;
 const cb=document.getElementById("confirmPayment"),btn=document.getElementById("payPublish");
 cb.onchange=()=>{btn.disabled=!cb.checked};
 btn.onclick=()=>{
   if(!cb.checked)return;
   events.push(draft);
   const existing=load("tp_corporate_events",[]);
   existing.push(draft);localStorage.setItem("tp_corporate_events",JSON.stringify(existing));
   const bill={id:"bill-"+Date.now(),name:draft.name,date:new Date().toISOString().slice(0,10),time:new Date().toLocaleTimeString("en-IN",{hour:"2-digit",minute:"2-digit"}),cost,eventId:draft.id,company:draft.organizer};
   state.billing.unshift(bill);save(LS.billing,state.billing);
   localStorage.removeItem("tp_pending_event");
   toast("Payment confirmed. Event published!");
   location.hash="#events";
 };
}
function renderNotifications(){state.notifications.forEach(n=>n.read=true);save(LS.notifications,state.notifications);updateNotificationDot();document.getElementById("main").innerHTML=`<div class="page-shell"><span class="eyebrow">Updates</span><h1 class="page-title">Notifications</h1><div class="panel" style="margin-top:25px">${state.notifications.map(n=>`<div class="date-event" style="margin-bottom:8px"><strong>${n.text}</strong><span>${n.time}</span></div>`).join("")||`<div class="empty">You're all caught up.</div>`}</div></div>`}
function renderEventPage(id){
 const e=eventById(id);if(!e){renderHome();return}const s=getStatus(e),reg=isRegistered(e.id);
 document.getElementById("main").innerHTML=`<section class="event-detail-page"><div class="detail-page-inner"><a class="back-link" href="#home">← Back to TechPulse</a><div class="event-page-banner"><div class="page-meta"><span>${e.category}</span><span>${statusLabel(s)}</span><span>${modeLabel(e)}</span>${e.genderEligibility!=="Open to All"?`<span>♀ ${e.genderEligibility}</span>`:""}</div><h1>${e.name}</h1><p>${e.longDescription}</p><div class="page-meta" style="margin-top:20px"><span>📅 ${fmtRange(e)}</span><span>📍 ${e.location}</span><span>🏆 ${e.prize}</span><span>👥 ${e.participants.toLocaleString()} participants</span><span>👥 ${teamSizeForEvent(e)}</span></div></div><div class="event-page-grid"><div><div class="panel content-block"><h3>About the event</h3><p>${e.longDescription} ${e.description}</p><h3 style="margin-top:25px">What you'll build</h3><ul><li>Prototype a useful solution using the event's core technology.</li><li>Work in a team, document your decisions and present the result.</li><li>Get feedback from mentors and judges.</li></ul></div><div class="panel content-block" style="margin-top:18px"><h3>Rounds & timeline</h3><div class="timeline">${e.rounds.length?e.rounds.map((r,i)=>`<div class="timeline-item"><div class="timeline-dot">${i+1}</div><div><b style="font-size:11px">${r.name}</b><p style="margin:3px 0">${new Date(r.start).toLocaleString("en-IN",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"})} — ${new Date(r.end).toLocaleString("en-IN",{hour:"2-digit",minute:"2-digit"})}</p></div></div>`).join(""):"<p>This is a single-stage event.</p>"}</div></div><div class="panel content-block" style="margin-top:18px"><h3>Previous editions</h3>${e.previousEditions.length?e.previousEditions.map(k=>{const p=previousEditions[k];return `<button class="date-event" style="width:100%;text-align:left;margin-top:7px" onclick="showPrevious('${k}')"><strong>${p.event} ${p.year}</strong><span>${p.participants.toLocaleString()} participants · ${p.winner}</span></button>`}).join(""):"<p>No previous editions listed.</p>"}</div></div><aside class="side-sticky"><div class="panel"><span class="eyebrow">Registration</span><div class="price" style="margin-top:8px">${e.prize}</div><p style="font-size:10px;color:var(--muted)">${e.registrationDeadline?`Registration deadline · ${fmtDate(e.registrationDeadline)}`:"Registration details"}</p><button class="btn ${reg?"registered-cta":"btn-orange"}" style="width:100%;justify-content:center;margin-top:10px" onclick="${s==="expired"?"toast('Registration is closed for this event.')":"openRegistration('" + e.id + "')"}">${s==="expired"?"Registration Closed":reg?"Registered ✓":"Register Now →"}</button>${reg?`<button class="btn btn-outline unregister-btn" style="width:100%;justify-content:center;margin-top:8px" onclick="unregisterEvent('${e.id}')">Unregister</button>`:""}${isTeamEvent(e)?`<button class="btn btn-outline" style="width:100%;justify-content:center;margin-top:8px" onclick="openTeamInvite('${e.id}')">👥 Invite My Connections</button>`:""}<button class="btn btn-outline" style="width:100%;justify-content:center;margin-top:8px" onclick="toggleSave('${e.id}',this)">${state.saved.includes(e.id)?"★ Saved":"☆ Save Event"}</button></div><div class="panel" style="margin-top:18px"><h3 style="font-size:13px">Organizer</h3><p style="font-size:10px;color:var(--muted)">${e.organizerDescription}</p><b style="font-size:11px">${e.organizer}</b><br><a class="link-btn" target="_blank" href="${e.organizerLinkedIn}">LinkedIn ↗</a></div></aside></div></div></section>`;
}
function openSearch(){document.getElementById("searchOverlay").classList.add("open");document.getElementById("globalSearch").focus();renderRecent();document.getElementById("searchOverlay").setAttribute("aria-hidden","false")}
function closeSearch(){document.getElementById("searchOverlay").classList.remove("open");document.getElementById("searchOverlay").setAttribute("aria-hidden","true")}
function renderRecent(){document.getElementById("recentSearchList").innerHTML=state.recent.length?state.recent.map(x=>`<button class="recent-pill" data-q="${x}">${x}</button>`).join(""):"<span style='font-size:10px;color:var(--muted)'>No recent searches yet.</span>";document.querySelectorAll(".recent-pill").forEach(b=>b.onclick=()=>{document.getElementById("globalSearch").value=b.dataset.q;searchGlobal(b.dataset.q)})}
function searchGlobal(q){
 const v=q.toLowerCase().trim();
 if(!v){document.getElementById("searchResults").innerHTML="";return}
 const matches=events.filter(e=>[e.name,e.category,e.description,e.organizer,...e.skills,...e.tags].join(" ").toLowerCase().includes(v)).slice(0,7);
 document.getElementById("searchResults").innerHTML=matches.map(e=>`<div class="search-result" data-id="${e.id}"><div><strong>${e.name}</strong><small>${e.category} · ${e.organizer}</small></div><span>${statusLabel(getStatus(e))}</span></div>`).join("")||`<div class="empty">No results for "${q}".<br><br><button class="btn btn-outline" onclick="goToEventSearch()">View Events</button></div>`;
 document.querySelectorAll(".search-result").forEach(b=>b.onclick=()=>{closeSearch();location.hash="#event/"+b.dataset.id});
}
function goToEventSearch(){
 const q=document.getElementById("globalSearch").value.trim();
 closeSearch();
 location.hash=q?`#events?search=${encodeURIComponent(q)}`:"#events";
}
function toast(msg){const t=document.getElementById("toast");t.textContent=msg;t.classList.add("show");clearTimeout(window.__toast);window.__toast=setTimeout(()=>t.classList.remove("show"),2600)}
function route(){
 clearInterval(state.orbitTimer);const hash=location.hash||"#home";
 if(hash.startsWith("#event/"))renderEventPage(hash.split("/")[1].split("?")[0]);
 else if(hash.startsWith("#events"))renderEventsPage();
 else if(hash==="#calendar")renderCalendar();
 else if(hash==="#saved")renderSavedEvents();
 else if(hash==="#rounds")renderRounds();
 else if(hash==="#certificates")renderCertificates();
 else if(hash.startsWith("#person/"))renderPersonProfile(hash.split("/")[1].split("?")[0]);
 else if(hash.startsWith("#people"))renderPeople();
 else if(hash.startsWith("#connections"))renderConnections();
 else if(hash==="#profile")renderProfile();
 else if(hash==="#analytics")renderAnalytics();
 else if(hash==="#billing-profile")renderBillingProfile();
 else if(hash.startsWith("#resource/"))renderResourceArticle(hash.split("/")[1].split("?")[0]);
 else if(hash==="#resources")renderResources();
 else if(hash.startsWith("#job/"))renderJobPage(hash.split("/")[1].split("?")[0]);
 else if(hash==="#jobs")renderJobs();
 else if(hash.startsWith("#practice/"))renderPracticeTrack(hash.split("/")[1].split("?")[0]);
 else if(hash==="#practice")renderPractice();
 else if(hash==="#corporates")renderCorporates();
 else if(hash==="#billing")renderBilling();
 else if(hash==="#notifications")renderNotifications();
 else if(hash==="#login")renderLogin();
 else renderHome();
 window.scrollTo({top:0,behavior:"smooth"});bindGlobal();updateNotificationDot();updateAuthUI();
}
function bindGlobal(){
 document.querySelectorAll("[data-event]").forEach(el=>{if(el.dataset.open==="details")el.onclick=()=>openEventModal(el.dataset.event);if(el.dataset.open==="save")el.onclick=()=>toggleSave(el.dataset.event,el)});
 document.querySelectorAll(".desktop-nav a").forEach(a=>a.addEventListener("click",()=>document.getElementById("resourcesPopover").classList.remove("open")));
}
document.getElementById("profileNavBtn").onclick=e=>{if(!isLoggedIn()){e.preventDefault();location.hash="#login"}};document.getElementById("loginBtn").onclick=()=>location.hash="#login";document.getElementById("searchBtn").onclick=openSearch;document.getElementById("closeSearch").onclick=closeSearch;
document.getElementById("globalSearch").oninput=e=>{
 searchGlobal(e.target.value);
 if(e.target.value.length>1&&!state.recent.includes(e.target.value)){
   state.recent=[e.target.value,...state.recent].slice(0,6);
   save(LS.recent,state.recent);
 }
};
document.getElementById("globalSearch").onkeydown=e=>{
 if(e.key==="Enter"){
   e.preventDefault();
   goToEventSearch();
 }
};
document.getElementById("clearSearches").onclick=()=>{state.recent=[];save(LS.recent,state.recent);renderRecent()};
document.getElementById("resourcesBtn").onclick=e=>{
 e.stopPropagation();
 const btn=document.getElementById("resourcesBtn"), pop=document.getElementById("resourcesPopover");
 const open=pop.classList.toggle("open");
 btn.classList.toggle("open",open);
 btn.setAttribute("aria-expanded",String(open));
 if(open){
   const r=btn.getBoundingClientRect();
   pop.style.left=Math.max(12,Math.min(window.innerWidth-pop.offsetWidth-12,r.left))+"px";
   pop.style.top=(r.bottom+8)+"px";
 }
};
document.addEventListener("click",e=>{
 if(!e.target.closest("#resourcesBtn")&&!e.target.closest("#resourcesPopover")){
   document.getElementById("resourcesPopover").classList.remove("open");
   document.getElementById("resourcesBtn").classList.remove("open");
   document.getElementById("resourcesBtn").setAttribute("aria-expanded","false");
 }
 if(e.target===document.getElementById("modal"))closeModal();
 if(e.target===document.getElementById("searchOverlay"))closeSearch();
});
document.getElementById("notificationsBtn").onclick=()=>location.hash="#notifications";
document.getElementById("themeBtn").onclick=()=>{state.theme=state.theme==="dark"?"light":"dark";save(LS.theme,state.theme);document.body.classList.toggle("dark",state.theme==="dark");updateThemeIcon();};document.body.classList.toggle("dark",state.theme==="dark");updateThemeIcon();
document.getElementById("loginBtn").onclick=()=>location.hash="#login";
document.getElementById("mobileMenuBtn").onclick=()=>{const open=document.querySelector(".mobile-drawer");if(open)open.remove();else{const d=document.createElement("div");d.className="mobile-drawer";d.style.cssText="position:fixed;top:64px;left:0;right:0;z-index:100;background:var(--surface);border-bottom:1px solid var(--line);padding:18px;display:grid;gap:10px;box-shadow:0 20px 40px #0002";d.innerHTML=["#events|Events","#jobs|Jobs","#practice|Practice","#resources|Resources","#saved|Saved Events","#calendar|My Calendar","#analytics|My Analytics","#people|Find My People","#profile|Profile","#corporates|Host an Event"].map(x=>{const [h,t]=x.split("|");return `<a style="padding:12px;border:1px solid var(--line);border-radius:10px;font-weight:700;font-size:12px" href="${h}">${t}</a>`}).join("");document.body.appendChild(d);d.querySelectorAll("a").forEach(a=>a.onclick=()=>d.remove())}};
document.addEventListener("keydown",e=>{if(e.key==="Escape"){closeModal();closeSearch()}});
window.addEventListener("hashchange",route);window.addEventListener("storage",route);
route();

/* Compatibility migration for the seeded Saachi demo account. */
(function ensureDemoActivity(){
 const demo=accounts["saachi@example.com"];
 if(!demo)return; 
 const participationCount=(demo.activity||[]).filter(x=>x.type==="participation").length;
 const registeredIds=new Set(demo.registrations||[]);
 const candidateIds=events.map(e=>e.id).filter(id=>!registeredIds.has(id));
 while((demo.registrations||[]).length<participationCount && candidateIds.length){
   demo.registrations.push(candidateIds.shift());
 }

 const needed=[
  ["2026-08-12","participation"],["2026-08-01","participation"],["2026-07-12","participation"],
  ["2026-06-28","participation"],["2026-06-14","participation"],["2026-05-31","participation"]
 ];
 const have=(demo.activity||[]).map(x=>x.timestamp?.slice(0,10)+"|"+x.type);
 needed.forEach(([d,t],i)=>{if(!have.includes(d+"|"+t))demo.activity.push({type:t,eventId:events[(i+2)%events.length].id,timestamp:d+"T"+(11+i%4).toString().padStart(2,"0")+":15:00",data:{}})});
 accounts["saachi@example.com"]=demo;
 localStorage.setItem(LS.accounts,JSON.stringify(accounts));
 if(state.currentUser==="saachi@example.com"){state.activity=clone(demo.activity);localStorage.setItem(LS.activity,JSON.stringify(state.activity))}
})();
