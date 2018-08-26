var companyLogoFolderPath = "files/images/companies/";
var education = new Vue({
    el: "#education",
    data: {
        education: [
            {
                uniLogo: `${companyLogoFolderPath}VIA.png`,
                uniName: "VIA University College",
                studyField: "Bachelor of Software Engineering",
                date: {
                    from: "Aug 2014",
                    until: "Feb 2018"
                },
                courses: [
                    ".NET Development",
                    "Algorithms and Data Structures",
                    "Applied Linear Algebra",
                    "Computer Architecture",
                    "Computer Networking",
                    "Digital Multimedia",
                    "Engineering Science and Business",
                    "Lego Robotics",
                    "Mixed Reality Applications",
                    "Mobile Applications",
                    "Programming Concepts and Languages",
                    "Relational Databases",
                    "Responsive Web Design",
                    "Serious games, engines, development",
                    "Single WebPage Applications",
                    "Software Development with Java",
                    "Stochastic Modelling and Processing"
                ]
            }
        ]
    }
})