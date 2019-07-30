var AppData = {
  AppMain: {
    header: {
      title: "Here are a few components"
    },
    welcome: {
      name: "Dave",
      city: "Richardson"
    },
    welcomeCode:
      `<app-welcome [data]="data.welcome"></app-welcome>`
    ,
    total: [
      3, 7, 5, 2
    ],
    totalCode:
      `<app-total [data]="data.total"></app-total>`
    ,
    dashSalesCode:
      `<dash-sales></dash-sales>`
    ,
    userForm: {
      title: "User Form",
      labels: [
        { text: "Name:", width: "120px" },
        { text: "City:", width: "120px" },
        { text: "Phone:", width: "120px" },
        { text: "Job Title:", width: "120px" },
      ],
      fields: [
        "Dave",
        "Richardson",
        "214-762-3065",
        "Software Architect"
      ]
    },

  },
  ServerConfig: {
    local: 1
  }
}

//debug
var win: any = window;
win.AppData = AppData;

export default AppData;