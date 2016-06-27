// $( document ).ready(function() {
//
//
//   // var awesomeThoughts = "I am Juan and I am AWESOME!"
//   // console.log(awesomeThoughts);
//   //
//   // var email = "juanperez@icloud.com";
//   // var newEmail = email.replace("icloud", "me");
//   // console.log(email);
//   // console.log(newEmail);
//   //
//   // var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
//   // $("#main").append(funThoughts);
//   //
//   // var formattedName = "Juan Perez";
//   // var formattedRole = "Full Stack Web Developer";
//   // $("#name").append(formattedName);
//   // $("#role").append(formattedRole);
//
//   var skills = ['Web Development',
//                 'Responsive Web Design',
//                 'Ruby',
//                 'Ruby on Rails',
//                 'HTML5',
//                 'CSS3',
//                 'JavaScript',
//                 'jQuery',
//                 'Sinatra',
//                 'Bootstrap',
//                 'Github']
//
//   // object literal
//   var bio = {
//     "name": "Juan Perez",
//     "role": "Full Stack Web Developer",
//     "contacts": {
//       "cell": "754-300-6399",
//       "email": "juanfperez@me.com",
//       "Github": "juan2357",
//     },
//     "welcome": "Welcome to my resume page",
//     "skills": skills,
//     "pic": "img/profile.png"
//   };
//
//   $("#name").append(bio.name);
//   $("#role").append(bio.role);
//
// // Dot Notation
//   var work = {};
//     work.position = "Freelance Web Developer";
//     work.employer = "self";
//     work.years = "0.1";
//     work.city = "Weston";
//   // bracket Notation
//   var education = {};
//   education["school"] = "FAU";
//   education["city"] = "Boca Raton";
//   education["years"] = "2016-2018";
//
//   // $("#work").append(work["position"]);
//   // $("#education").append(education.school);
//
//   // JSON
//   var education = {
//     "schools": [
//       {
//         "name": "FAU",
//         "city": "Boca Raton",
//         "major": "Computer Science"
//       },
//       {
//         "name": "Udacity",
//         "city": "Weston",
//         "major": "FEND"
//       }
//     ]
//   }
//
//
// });
$(document).ready(function(){

  var work = {
    "jobs": [
      {
        "employer": ,
        "title": ,
        "location": ,
        "dates": ,
        "description":
      }
    ]
  },

  var projects = {
    "projects": [
      "title": ,
      "dates": ,
      "description": ,
      "images":
    ]
  },

  var bio = {
    "name": "Juan Perez",
    "role": "Full Stack Web Developer",
    "welcome": "Welcome to my resume page",
    "contacts": {
      "cell": "754-300-6399",
      "email": "juanfperez@me.com",
      "Github": "juan2357",
      "linkedin": "in/JuanPerezFSWD"
      },
    "skills": [
      'Web Development',
      'Responsive Web Design',
      'Ruby',
      'Ruby on Rails',
      'HTML5',
      'CSS3',
      'JavaScript',
      'jQuery',
      'Sinatra',
      'Bootstrap',
      'Github'
    ],
    "location": "Weston, Florida"
  },

  var education = {
    "schools": [
          {
            "name": "FAU",
            "location": "Boca Raton",
            "degree": ,
            "major": ,
            "dates": ,
            "url": ,
          },
    ],
    "onlineCourses": [
      "title": ,
      "school": ,
      "dates": ,
      "url":
    ]
  },
});

{
  "work": [
    {
      "company": "Wyncode Academy",
      "position": "Full-Stack Web Developer",
      "website": "",
      "startDate": "2016-05-01",
      "summary": "- Pitch Day Winner.\n- Developed code using Ruby, Rails, Javascript, jQuery, HTML and CSS. \n- Executed code using Github, Sinatra, Materialize, and Bootstrap.\n- Collaborated with classmates to build complex applications.\n- Built and created a sensor application with Ruby on Rails, that utilized a Raspberry Pi to load temperature, humidity, and other types of data.",
      "highlights": []
    },
    {
      "company": "Somerset Academy Charter Schools",
      "position": "Mathematics & Science Teacher",
      "website": "",
      "startDate": "2014-08-01",
      "summary": "- Facilitated Math and Science Instruction.\n- Effectively utilized positive reinforcement classroom management techniques.\n- Adapted lessons to accommodate all students’ abilities.\n- Accommodated instruction to assist ESE and ESOL students.\n- Created and providing enrichment activities to gifted high level learners.",
      "highlights": [],
      "endDate": "2016-03-01"
    },
    {
      "company": "Palm Beach County School District",
      "position": "Elementary School Teacher",
      "website": "",
      "startDate": "2013-08-01",
      "summary": "- Effectively utilized C.H.A.M.P.S classroom management techniques.\n- Effectively utilized Reader’s and Writer’s Workshop during instruction.\n- Adapted lessons to accommodate all students’ abilities.\n- Accommodated instruction to assist ESE and ESOL students\n- Created and providing enrichment activities to gifted high level learners.",
      "highlights": [],
      "endDate": "2014-06-01"
    },
    {
      "company": "Charter Schools USA",
      "position": "Elementary School Teacher",
      "website": "",
      "startDate": "2012-08-01",
      "summary": "- Served as the Science Fair Coordinator.\n- Served as the Science, Technology, Engineering, Math Club Faculty Advisor. \n- Served on grant committee.\n- Effectively utilized C.H.A.M.P.S classroom management techniques.\n- Adapted lessons to accommodate ESE students.\n- Accommodated instruction to assist low level learners\n- Created and providing enrichment activities to gifted high level learners.",
      "highlights": [],
      "endDate": "2012-12-01"
    },
    {
      "company": "United States Marine Corps",
      "position": "Lance Corporal",
      "website": "",
      "startDate": "1995-08-01",
      "summary": "- Honorably Discharged.\n- Validated request for table of organization and equipment change.\n- Challenged inaccurate allowance data.\n- Supervised maintenance of the property control document. \n- Maintained edit error and exception listing.",
      "highlights": [],
      "endDate": "1999-08-01"
    }
  ],
  "education": [
    {
      "institution": "Chapman University",
      "area": "",
      "studyType": "Bachelor of Arts",
      "startDate": "1999-01-01",
      "gpa": "",
      "courses": [],
      "endDate": "2007-01-01"
    },
    {
      "institution": "Florida Atlantic University",
      "area": "",
      "studyType": "Master of Education (M.Ed.)",
      "startDate": "2009-01-01",
      "gpa": "",
      "courses": [],
      "endDate": "2012-01-01"
    },
    {
      "institution": "Florida Atlantic University",
      "area": "",
      "studyType": "Bachelor of Science (B.S.)",
      "startDate": "2016-01-01",
      "gpa": "",
      "courses": [],
      "endDate": "2018-01-01"
    },
    {
      "institution": "Wyncode Academy",
      "area": "",
      "studyType": "Certificate",
      "startDate": "2016-01-01",
      "gpa": "",
      "courses": [],
      "endDate": "2016-01-01"
    }
  ],
  "skills": [
    {
      "name": "Teaching",
      "level": "",
      "keywords": []
    },
    {
      "name": "Public Speaking",
      "level": "",
      "keywords": []
    },
    {
      "name": "Social Media",
      "level": "",
      "keywords": []
    },
    {
      "name": "Teamwork",
      "level": "",
      "keywords": []
    },
    {
      "name": "Social Networking",
      "level": "",
      "keywords": []
    },
    {
      "name": "Microsoft Office",
      "level": "",
      "keywords": []
    },
    {
      "name": "Event Planning",
      "level": "",
      "keywords": []
    },
    {
      "name": "Event Management",
      "level": "",
      "keywords": []
    },
    {
      "name": "Fundraising",
      "level": "",
      "keywords": []
    },
    {
      "name": "Communication",
      "level": "",
      "keywords": []
    },
    {
      "name": "Customer Service",
      "level": "",
      "keywords": []
    },
    {
      "name": "Leadership",
      "level": "",
      "keywords": []
    },
    {
      "name": "Web Development",
      "level": "",
      "keywords": []
    },
    {
      "name": "Management",
      "level": "",
      "keywords": []
    },
    {
      "name": "Responsive Web Design",
      "level": "",
      "keywords": []
    },
    {
      "name": "Strategic Planning",
      "level": "",
      "keywords": []
    },
    {
      "name": "Ruby",
      "level": "",
      "keywords": []
    },
    {
      "name": "Microsoft Excel",
      "level": "",
      "keywords": []
    },
    {
      "name": "PowerPoint",
      "level": "",
      "keywords": []
    },
    {
      "name": "Ruby on Rails",
      "level": "",
      "keywords": []
    },
    {
      "name": "Microsoft Word",
      "level": "",
      "keywords": []
    },
    {
      "name": "Marketing",
      "level": "",
      "keywords": []
    },
    {
      "name": "HTML5",
      "level": "",
      "keywords": []
    },
    {
      "name": "Training",
      "level": "",
      "keywords": []
    },
    {
      "name": "Team Building",
      "level": "",
      "keywords": []
    },
    {
      "name": "HTML",
      "level": "",
      "keywords": []
    },
    {
      "name": "JavaScript",
      "level": "",
      "keywords": []
    },
    {
      "name": "jQuery",
      "level": "",
      "keywords": []
    },
    {
      "name": "Sinatra",
      "level": "",
      "keywords": []
    },
    {
      "name": "Bootstrap",
      "level": "",
      "keywords": []
    },
    {
      "name": "Time Management",
      "level": "",
      "keywords": []
    },
    {
      "name": "Git",
      "level": "",
      "keywords": []
    },
    {
      "name": "Cascading Style Sheets (CSS)",
      "level": "",
      "keywords": []
    },
    {
      "name": "CSS",
      "level": "",
      "keywords": []
    },
    {
      "name": "Github",
      "level": "",
      "keywords": []
    }
  ],
  "languages": [
    {
      "language": "Spanish",
      "fluency": null
    },
    {
      "language": "English",
      "fluency": null
    }
  ]
}
