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
