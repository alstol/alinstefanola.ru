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
                description: "During this period I worked on two primary tasks: A pocket companion dedicated to the people that had to install their EnergyConnectors (Commissioning App) and redesigning their already existing interface (Energy Cloud).\
                \n\nBoth projects were web applications built under the .NET Framework (ASP.NET). As already mentioned The Commissioning App represents a pocket companion, it is supposed to offer guides on how to install the EnergyConnectors and test the connection with the freshly installed units with our servers, eventually help the person troubleshoot in case something goes wrong.\
                \n\nThe second task implies moving the old-static bootstrap-based interface to a widget based dynamic one, or a tile system as we ended up calling it. The interface was built by using GridStack, an OpenSource library based on JQueryUI that allows you to create drag-and-drop, multi-column elements with ease.",
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
                description: "Community Manager of the Public Beta server of InnoGames' western-themed browser game called 'The-West'\
                \n\nPart of my duties include recruiting and supervising a group of volunteers dedicated for game support, expanding and maintaining the game community and quality assurance for the game.",
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
                description: "I have been helping first semester students understand the basics of software development with Java.",
                keywords: ["Java", "Software Development", "Design Patterns", "Teaching"]
            }
        ]
    }
})