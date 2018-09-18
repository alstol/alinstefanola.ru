class BarDataSet {
    constructor(name, value) {
        this.name = name;
        this.value = value;
        this.style = `width: ${this.value}%`;
    }
}
var bars = new Vue({
    el: "#progressBars",
    data: {
        bars: {
            basic: {
                title: "Desktop/Mobile",
                data: [
                    new BarDataSet("C#", 90),
                    new BarDataSet("Java", 80),
                    new BarDataSet(".NET Framework", 85),
                    new BarDataSet("ASP.NET", 90),
                    new BarDataSet("UWP/WPF", 80),
                    new BarDataSet("MySQL", 60),
                ],
            },
            web: {
                title: "Web-Technologies",
                data: [
                    new BarDataSet("JavaScript", 100),
                    new BarDataSet("JQuery", 100),
                    new BarDataSet("HTML5/CSS3", 100),
                    new BarDataSet("TypeScript", 60),
                    new BarDataSet("Angular", 60),
                    new BarDataSet("PHP", 50),
                ]
            },
            /*tools: {
                title: "Tools",
                data: [
                    new BarDataSet("JIRA", 100),
                    new BarDataSet("Git", 100),
                    new BarDataSet("Adobe Photoshop", 90),
                    new BarDataSet("Visual Studio/Code", 90),
                    new BarDataSet("Eclipse/IntelliJ", 80),
                    new BarDataSet("Build Servers", 60),
                ]
            },*/
            other: {
                title: "Other",
                data: [
                    new BarDataSet("Continuous Integration", 80),
                    new BarDataSet("Customer Interaction", 90),
                    new BarDataSet("AR/VR Development", 80),
                    new BarDataSet("Web Development", 90),
                    new BarDataSet("Software Development", 85),
                    new BarDataSet("Design Patterns", 80),
                ]
            }
            
        }     
    }
})