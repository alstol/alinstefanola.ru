var companyLogoFolderPath = "files/images/companies/";
var experience = new Vue({
    el: "#experience",
    data: {
        experience: [
            {
                companyLogo: `${companyLogoFolderPath}EConGrid.png`,
                title: "Student Software Developer",
                companyName: "EConGrid",
                timePeriod: {
                    from: "February 2017", //Cba to make actual date object and format it... 
                    until: "February 2018"
                },
                description: "Part time software developer. Most of my tasks pretty much represent frontend improvements, creating new interfaces (GUI) for new functionalities and such.\
                \n\nDuring the last few months I have attempted to upgrade the current ASP.NET Framework application to ASP.NET Core 2.0, with Angular 5 and TypeScript.",
                keywords: ["C#", "ASP.NET Core 2.0", "Angular 5", "TypeScript", "SignalR", ]
            },
            {
                companyLogo: `${companyLogoFolderPath}EConGrid.png`,
                title: "Software Engineer Intern",
                companyName: "EConGrid",
                timePeriod: {
                    from: "August 2016",
                    until: "January 2017"
                },
                description: "During this period I have had two tasks: a mobile application built specifically for people that would install their EnergyConnectors in the future (Commissioning App) and rebuilding their already existing user interface. \n\n \
                First task required quite a bit of prototyping as I got to work with technologies such as Apache Cordova (PhoneGap), Xamarin or native Android Development. The final application was built on the .NET Framework, as an ASP.NET application. The purpose of this application was giving people installing the new EnergyConnectors a detailed guide on how to perform their job. We would also give them a chance to test the connection to our servers with the freshly installed units, and help them troubleshoot in case an issue would happen. This project saved the company a lot of time (and money), as each unit installment would take up to five-six hours, in which both the person installing the unit and one of our IT supporters would have to be on a phone call to communicate every single piece of data given by the application.\n\n \
                Second task implied completely re-building the old, static bootstrap-based interface to a widget based one, or a tile system as we ended up calling it. The new system also allowed the user to have multiple of the old views into a single page, that he would be able to move and scale however he pleases, therefore creating an infinite amount of possible views. The system was built with GridStack, an open source JavaScript library based on JQueryUI, however, we considered other libraries such as GreenSock or JQueryUI standalone.",
                keywords: ["C#", "Xamarin", "ASP.NET", "JQuery", "JavaScript", "SignalR", "PhoneGap"]
            },
            {
                companyLogo: `${companyLogoFolderPath}Inno.png`,
                title: "External Community Manager",
                companyName: "InnoGames GmbH",
                timePeriod: {
                    from: "July 2016",
                    until: "August 2017"
                },
                description: "External Community Manager for the Public Beta server of InnoGames’ western-themed browser game called “The-West”. I have been personally playing the game for over eight years at the moment I got hired in the company. I have been a volunteer moderator for the past three years. \n\n\
                During this period, I have tried to give out the best I can in order to make the player base happy. I made sure to communicate every single piece of feedback to the right place. \n\
                I have set up a QA moderation team that would make sure that there are not any (or many) bugs released into the release servers. \n\
                I have set up a Wiki moderation team in order to make sure that the Wiki content is up to date as it was not updated for years. \n\
                I have collaborated and rushed the process of getting a new Forum Layout, promised for years but never delivered.\n\
                I kept close with the player base via Social Media (Facebook). \n\
                I kept close with fan projects or websites to make sure their needs are satisfied.",
                keywords: ["Game Support", "QA Testing", "Team Work", "Team Building"]
            },
            {
                companyLogo: `${companyLogoFolderPath}Inno.png`,
                title: "Customer Support (Volunteer)",
                companyName: "InnoGames GmbH",
                timePeriod: {
                    from: "May 2013",
                    until: "June 2016"
                },
                description: 'During this period I have been a game supporter. Part of my duties included answering customer queries through a dedicated support system. I have also been a coordinator for a small group of dedicated game testers known as "Elite Testers".\
                \n\nMy volunteering status ended on mid-June 2016 when I have been hired as a Community Manager of the same team I have been a part of.',
                keywords: ["Team Work", 'Game Support', 'QA Testing', ]
            },
            {
                companyLogo: `${companyLogoFolderPath}VIA.png`,
                title: "Student Lecturer",
                companyName: "VIA University College",
                timePeriod: {
                    from: "August 2015",
                    until: "January 2016"
                },
                description: "During the third semester I have been hired a student lecturer for the SDJ1 (Software Development with Java) class. \n\
                My duties represented preparing materials for the workshops, such as relevant presentations and exercises; assisting students that would require extra help with the exercises, and making them understand how and why.",
                keywords: ["Java", "Software Development", "Design Patterns", "Teaching"]
            }
        ]
    }
})